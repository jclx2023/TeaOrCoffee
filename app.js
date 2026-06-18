const site = window.PORTFOLIO_SITE || {};
const projects = window.PORTFOLIO_PROJECTS || [];
const translations = site.i18n || {};
let currentProjectId = null;
let activeImageZoom = null;

function textFor(value, lang, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.zh || fallback;
}

function listFor(value, lang) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value[lang] || value.en || value.zh || [];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getLang() {
  const stored = localStorage.getItem("portfolioLang");
  if (stored && translations[stored]) return stored;
  return site.defaultLang || "zh";
}

function setLang(lang) {
  const safeLang = translations[lang] ? lang : getLang();
  localStorage.setItem("portfolioLang", safeLang);
  document.documentElement.lang = safeLang === "zh" ? "zh-CN" : safeLang === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[safeLang]?.[key]) node.textContent = translations[safeLang][key];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === safeLang));
  });

  renderSkills();
  renderWorks(safeLang);
  if (currentProjectId) renderProjectModal(safeLang, currentProjectId);
}

function renderSkills() {
  const row = document.querySelector(".signal-row");
  if (!row || !Array.isArray(site.skills)) return;
  row.innerHTML = site.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("");
}

function getProjectMeta(project, lang) {
  return project.meta?.[lang] || project.meta?.en || project.meta?.zh || {};
}

function renderWorks(lang) {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => {
    const meta = getProjectMeta(project, lang);
    const displayTitle = project.displayTitle || project.id;
    const cardText = textFor(project.card, lang);
    const subtitle = meta.subtitle || "";

    return `
      <article class="work-card">
        <img src="${escapeHtml(project.cover)}" alt="${escapeHtml(displayTitle)}" loading="lazy">
        <div class="work-card-body">
          <div>
            <p class="eyebrow">${escapeHtml(project.year || "")}</p>
            <h3>${escapeHtml(displayTitle)}</h3>
            <p>${escapeHtml(cardText)}</p>
          </div>
          <div class="tag-row">${(project.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
          <div class="card-footer">
            <span class="meta-pill">${escapeHtml(subtitle)}</span>
            <button class="open-project" type="button" data-project="${escapeHtml(project.id)}">${escapeHtml(translations[lang]?.openDetail || "OPEN")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".open-project").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function openProject(id) {
  currentProjectId = id;
  renderProjectModal(getLang(), id);
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
}

function closeProjectModal() {
  closeImageZoom(false);
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  currentProjectId = null;
}

function getZoomTargetRect(image, sourceRect) {
  const naturalWidth = image.naturalWidth || sourceRect.width;
  const naturalHeight = image.naturalHeight || sourceRect.height;
  const ratio = naturalWidth / Math.max(naturalHeight, 1);
  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.86;
  let width = maxWidth;
  let height = width / ratio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * ratio;
  }

  return {
    left: (window.innerWidth - width) / 2,
    top: (window.innerHeight - height) / 2,
    width,
    height
  };
}

function applyZoomRect(image, rect) {
  image.style.left = `${rect.left}px`;
  image.style.top = `${rect.top}px`;
  image.style.width = `${rect.width}px`;
  image.style.height = `${rect.height}px`;
}

function openImageZoom(sourceImage) {
  if (!sourceImage || activeImageZoom?.closing) return;
  if (activeImageZoom) closeImageZoom(false);

  const sourceRect = sourceImage.getBoundingClientRect();
  const overlay = document.createElement("div");
  const zoomImage = document.createElement("img");

  overlay.className = "image-zoom-overlay";
  overlay.setAttribute("role", "presentation");
  zoomImage.className = "image-zoom-image";
  zoomImage.src = sourceImage.currentSrc || sourceImage.src;
  zoomImage.alt = sourceImage.alt || "";
  applyZoomRect(zoomImage, sourceRect);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeImageZoom();
  });

  overlay.appendChild(zoomImage);
  document.body.appendChild(overlay);
  document.body.classList.add("image-zoom-open");
  activeImageZoom = { overlay, zoomImage, sourceImage, closing: false };

  requestAnimationFrame(() => {
    overlay.classList.add("is-open");
    applyZoomRect(zoomImage, getZoomTargetRect(sourceImage, sourceRect));
  });
}

function closeImageZoom(animate = true) {
  if (!activeImageZoom || activeImageZoom.closing) return;

  const { overlay, zoomImage, sourceImage } = activeImageZoom;
  activeImageZoom.closing = true;
  document.body.classList.remove("image-zoom-open");

  const removeZoom = () => {
    overlay.remove();
    activeImageZoom = null;
  };

  if (!animate || !sourceImage.isConnected) {
    removeZoom();
    return;
  }

  overlay.classList.remove("is-open");
  applyZoomRect(zoomImage, sourceImage.getBoundingClientRect());
  zoomImage.addEventListener("transitionend", removeZoom, { once: true });
  window.setTimeout(removeZoom, 420);
}

function renderMetaRow(meta, lang, project) {
  const labels = translations[lang] || {};
  const rows = [
    ["role", labels.role],
    ["status", labels.status],
    ["platform", labels.platform],
    ["tools", labels.tools]
  ];

  return rows
    .filter(([key]) => meta[key])
    .map(([key, label]) => {
      if (key === "status" && project?.action?.url) {
        const actionLabel = textFor(project.action.label, lang, label || "Status");
        return `<a class="meta-pill project-status-link" href="${escapeHtml(project.action.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(actionLabel)}</a>`;
      }

      return `<span class="meta-pill">${escapeHtml(label || key)}: ${escapeHtml(meta[key])}</span>`;
    })
    .join("");
}

function renderBlock(block, lang) {
  const title = textFor(block.title, lang);
  const titleHtml = title ? `<p class="eyebrow">${escapeHtml(title)}</p>` : "";

  if (block.type === "text") {
    const body = listFor(block.body, lang);
    return `
      <article class="article-block project-block project-block-text">
        ${titleHtml}
        ${body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </article>
    `;
  }

  if (block.type === "list") {
    const items = listFor(block.items, lang);
    return `
      <article class="article-block project-block project-block-list">
        ${titleHtml}
        <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    `;
  }

  if (block.type === "gallery") {
    return `
      <section class="article-block project-block project-block-gallery">
        ${titleHtml}
        <div class="gallery">
          ${(block.images || []).map((image) => {
            const caption = textFor(image.caption, lang);
            return `
              <figure class="gallery-item">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(textFor(image.alt, lang, image.alt || ""))}" loading="lazy">
                ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
              </figure>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  if (block.type === "note") {
    return `
      <article class="article-block project-block project-block-note">
        <p class="missing">${escapeHtml(textFor(block.body, lang))}</p>
      </article>
    `;
  }

  if (block.type === "facts") {
    const items = block.items || [];
    return `
      <article class="article-block project-block project-block-facts">
        ${titleHtml}
        <div class="facts-grid">
          ${items.map((item) => `
            <div>
              <span>${escapeHtml(textFor(item.label, lang))}</span>
              <strong>${escapeHtml(textFor(item.value, lang))}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  if (block.type === "imageText") {
    return `
      <article class="article-block project-block project-block-image-text">
        ${titleHtml}
        <div class="image-text">
          <img src="${escapeHtml(block.image?.src || "")}" alt="${escapeHtml(textFor(block.image?.alt, lang))}" loading="lazy">
          <div>
            ${listFor(block.body, lang).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
        </div>
      </article>
    `;
  }

  return "";
}

function renderProjectModal(lang, id) {
  const root = document.getElementById("projectModalContent");
  if (!root) return;

  const project = projects.find((item) => item.id === id) || projects[0];
  if (!project) {
    root.innerHTML = "";
    return;
  }

  const meta = getProjectMeta(project, lang);
  const displayTitle = project.displayTitle || project.id;
  const subtitle = meta.subtitle || "";

  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero-copy">
        <p class="eyebrow">${escapeHtml(project.year || "")}</p>
        <h1 id="modalTitle">${escapeHtml(displayTitle)}</h1>
        ${subtitle ? `<p class="hero-lead">${escapeHtml(subtitle)}</p>` : ""}
        <div class="meta-row">${renderMetaRow(meta, lang, project)}</div>
      </div>
      <img class="project-visual" src="${escapeHtml(project.cover)}" alt="${escapeHtml(displayTitle)}">
    </section>
    ${(project.blocks || []).map((block) => renderBlock(block, lang)).join("")}
  `;
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
}

function setupProjectModal() {
  const modal = document.getElementById("projectModal");

  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeProjectModal);
  });

  modal?.addEventListener("click", (event) => {
    const image = event.target.closest("#projectModalContent img");
    if (!image) return;
    event.preventDefault();
    openImageZoom(image);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (activeImageZoom) {
      closeImageZoom();
      return;
    }
    if (currentProjectId) closeProjectModal();
  });
}

function setupModelMotion() {
  const stage = document.getElementById("modelStage");
  const model = document.getElementById("handheldModel");
  if (!stage || !model) return;

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    model.style.animation = "none";
    model.style.transform = `rotateX(${10 - y * 16}deg) rotateY(${-12 + x * 24}deg) translateY(-8px)`;
  });

  stage.addEventListener("pointerleave", () => {
    model.style.animation = "";
    model.style.transform = "";
  });
}

function init() {
  setupLanguageSwitch();
  setupProjectModal();
  setupModelMotion();
  setLang(getLang());
}

init();
