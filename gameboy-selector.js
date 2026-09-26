const stage = document.getElementById("modelStage");
const canvas = document.getElementById("gameboyCanvas");
const projects = window.PORTFOLIO_PROJECT_INDEX || [];

if (stage && canvas && projects.length) setupProjectSelector();

function setupProjectSelector() {
  const host = stage.closest(".hero-model");
  const loading = document.getElementById("modelLoading");
  const copy = {
    zh: {
      keyboard: "掌机作品选择器，可使用方向键切换，Enter 或 A 键打开作品",
      loading: "掌机加载中", fallback: "掌机暂不可用，请通过“查看作品”浏览"
    },
    ja: {
      keyboard: "作品セレクター。矢印キーで選択、Enter または A キーで作品を開く",
      loading: "読み込み中", fallback: "本体を表示できません。「作品」からご覧ください"
    },
    en: {
      keyboard: "Project selector. Use arrow keys to select; Enter or A to open a project",
      loading: "Loading handheld", fallback: "Handheld unavailable. Use View Works to browse."
    }
  };
  const selectionStatus = document.createElement("span");
  selectionStatus.id = "gameboySelectionStatus";
  selectionStatus.className = "gameboy-selection-status";
  selectionStatus.setAttribute("role", "status");
  selectionStatus.setAttribute("aria-atomic", "true");
  host.classList.add("gameboy-interactive");
  host.appendChild(selectionStatus);
  const coverImages = new Map();
  const screen = document.createElement("canvas");
  screen.width = 352;
  screen.height = 288;
  const context = screen.getContext("2d");
  let selected = 0;
  let model;
  let failed = false;
  let lang = document.documentElement.lang.startsWith("zh") ? "zh"
    : document.documentElement.lang.startsWith("ja") ? "ja" : "en";

  function selectedProject() {
    return projects[selected];
  }

  function drawScreen() {
    if (!context) return;
    const project = selectedProject();
    const image = coverImages.get(project.cover);
    context.fillStyle = "#dbe7bb";
    context.fillRect(0, 0, screen.width, screen.height);
    context.fillStyle = "#26352d";
    context.fillRect(0, 0, screen.width, 30);
    context.font = "bold 15px monospace";
    context.textBaseline = "middle";
    context.textAlign = "left";
    context.fillStyle = "#e6efcb";
    context.fillText("SELECT A PROJECT", 12, 16);
    context.textAlign = "right";
    context.fillText(`${selected + 1}/${projects.length}`, 340, 16);
    context.fillStyle = "#26352d";
    context.fillRect(10, 40, 332, 187);
    if (image?.complete && image.naturalWidth) {
      const scale = Math.min(332 / image.naturalWidth, 187 / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.drawImage(image, 10 + (332 - width) / 2, 40 + (187 - height) / 2, width, height);
    } else {
      context.textAlign = "center";
      context.fillStyle = "#dbe7bb";
      context.font = "bold 42px monospace";
      context.fillText(String(selected + 1).padStart(2, "0"), 176, 132);
    }
    context.fillStyle = "#26352d";
    context.textAlign = "center";
    let size = 23;
    do {
      context.font = `bold ${size--}px monospace`;
    } while (context.measureText(project.displayTitle).width > 328 && size > 12);
    context.fillText(project.displayTitle, 176, 247);
    context.font = "12px monospace";
    context.fillText("< SELECT >     A: OPEN", 176, 275);
    model?.refreshScreen();
  }

  function ensureCover(project) {
    if (coverImages.has(project.cover)) return;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (selectedProject().cover === project.cover) drawScreen();
    };
    image.onerror = () => {
      if (selectedProject().cover === project.cover) drawScreen();
    };
    coverImages.set(project.cover, image);
    image.src = project.cover;
  }

  function renderSelection(animate = false) {
    const project = selectedProject();
    const labels = copy[lang];
    const meta = project.meta?.[lang] || project.meta?.en || project.meta?.zh || {};
    selectionStatus.textContent = failed ? labels.fallback
      : `${project.displayTitle} · ${selected + 1} / ${projects.length} · ${meta.subtitle || ""}`;
    canvas.setAttribute("aria-label", labels.keyboard);
    if (loading && !loading.hidden) loading.textContent = failed ? labels.fallback : labels.loading;
    ensureCover(project);
    drawScreen();
    if (animate) model?.transitionScreen();
  }

  function selectProject(step) {
    selected = (selected + step + projects.length) % projects.length;
    renderSelection(true);
  }

  function handleAction(action) {
    if (action === "open") window.location.assign(new URL(selectedProject().page, document.baseURI).href);
    else selectProject(action === "previous" ? -1 : 1);
  }

  canvas.tabIndex = 0;
  canvas.setAttribute("role", "group");
  canvas.setAttribute("aria-describedby", "gameboySelectionStatus");
  canvas.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const action = { ArrowLeft: "previous", ArrowUp: "previous", ArrowRight: "next", ArrowDown: "next", Enter: "open", a: "open", A: "open" }[event.key];
    if (!action) return;
    event.preventDefault();
    if (event.repeat && action === "open") return;
    handleAction(action);
  });
  window.addEventListener("portfolio:languagechange", (event) => {
    lang = copy[event.detail.lang] ? event.detail.lang : "en";
    renderSelection();
  });

  function showFallback() {
    if (failed) return;
    failed = true;
    model?.dispose();
    host.classList.add("gameboy-unavailable");
    canvas.tabIndex = -1;
    canvas.setAttribute("aria-hidden", "true");
    const poster = document.createElement("img");
    poster.className = "gameboy-fallback-cover";
    poster.alt = "";
    stage.prepend(poster);
    poster.src = selectedProject().cover;
    if (loading) loading.hidden = false;
    renderSelection();
  }

  renderSelection();
  const loadDeadline = window.setTimeout(showFallback, 15000);
  import("./gameboy-model.js")
    .then(({ initGameBoyModel }) => {
      if (failed) return;
      model = initGameBoyModel({
        canvas, stage, screen,
        onAction: handleAction,
        onReady: () => {
          if (failed) return;
          window.clearTimeout(loadDeadline);
          if (loading) loading.hidden = true;
          host.classList.add("gameboy-ready");
        },
        onError: () => {
          window.clearTimeout(loadDeadline);
          showFallback();
        }
      });
      if (failed) model?.dispose();
    })
    .catch(() => {
      window.clearTimeout(loadDeadline);
      showFallback();
    });
}
