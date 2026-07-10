const site = window.PORTFOLIO_SITE || {};
const projectIndex = window.PORTFOLIO_PROJECT_INDEX || [];
const project = window.PORTFOLIO_PROJECT || null;
const translations = site.i18n || {};
const languagePreference = window.PORTFOLIO_LANGUAGE || {};
let activeImageZoom = null;

const projectUi = {
  zh: {
    back: "\u2190 \u8fd4\u56de\u4f5c\u54c1",
    position: "\u9879\u76ee",
    previous: "\u2190 \u4e0a\u4e00\u4e2a\u9879\u76ee",
    next: "\u4e0b\u4e00\u4e2a\u9879\u76ee \u2192",
    openPdf: "\u6253\u5f00 PDF",
    downloadDocx: "\u4e0b\u8f7d DOCX \u6e90\u6587\u4ef6",
    videoUnsupported: "\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u89c6\u9891\u64ad\u653e\u3002",
    pdfTitle: "PDF \u6587\u6863\u9884\u89c8"
  },
  ja: {
    back: "\u2190 \u4f5c\u54c1\u4e00\u89a7\u3078",
    position: "\u4f5c\u54c1",
    previous: "\u2190 \u524d\u306e\u4f5c\u54c1",
    next: "\u6b21\u306e\u4f5c\u54c1 \u2192",
    openPdf: "PDF \u3092\u958b\u304f",
    downloadDocx: "DOCX \u539f\u7a3f\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
    videoUnsupported: "\u3053\u306e\u30d6\u30e9\u30a6\u30b6\u306f\u52d5\u753b\u518d\u751f\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002",
    pdfTitle: "PDF \u30d7\u30ec\u30d3\u30e5\u30fc"
  },
  en: {
    back: "\u2190 Back to works",
    position: "Project",
    previous: "\u2190 Previous project",
    next: "Next project \u2192",
    openPdf: "Open PDF",
    downloadDocx: "Download DOCX source",
    videoUnsupported: "Your browser does not support video playback.",
    pdfTitle: "PDF document preview"
  }
};

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
  return languagePreference.getInitialLanguage?.(translations, "en")
    || site.defaultLang
    || "en";
}

function getLabels(lang) {
  return {
    ...(translations[lang] || translations.en || {}),
    ...(projectUi[lang] || projectUi.en)
  };
}

function getProjectMeta(lang) {
  return project?.meta?.[lang] || project?.meta?.en || project?.meta?.zh || {};
}

function setLang(lang, shouldSave = true) {
  const safeLang = translations[lang] ? lang : getLang();
  if (shouldSave) languagePreference.saveLanguage?.(safeLang);
  document.documentElement.lang = safeLang === "zh" ? "zh-CN" : safeLang === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[safeLang]?.[key]) node.textContent = translations[safeLang][key];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === safeLang));
  });

  renderProjectPage(safeLang);
  renderProjectNavigation(safeLang);
}

function renderMetaRow(meta, lang) {
  const labels = getLabels(lang);
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

function renderImageSource(source, lang) {
  if (!source) return "";

  const siteName = textFor(source.site, lang);
  const title = textFor(source.title, lang);
  const author = textFor(source.author, lang, siteName);
  const accessed = textFor(source.accessed, lang);
  let citation = "";

  if (lang === "ja") {
    citation = `\u753b\u50cf\u51fa\u5178\uff1a${siteName}\u300c${title}\u300d\uff08\u4f5c\u8005\uff1a${author}${accessed ? `\u3001\u95b2\u89a7\u65e5\uff1a${accessed}` : ""}\uff09`;
  } else if (lang === "en") {
    citation = `Image source: ${siteName}, "${title}" (author: ${author}${accessed ? `, accessed ${accessed}` : ""})`;
  } else {
    citation = `\u56fe\u7247\u6765\u6e90\uff1a${siteName}\u300a${title}\u300b\uff08\u4f5c\u8005\uff1a${author}${accessed ? `\uff0c\u8bbf\u95ee\u65e5\u671f\uff1a${accessed}` : ""}\uff09`;
  }

  const url = source.url ? escapeHtml(source.url) : "";
  const citationHtml = escapeHtml(citation);

  return url
    ? `<p class="image-source"><a href="${url}" target="_blank" rel="noopener noreferrer">${citationHtml}</a></p>`
    : `<p class="image-source">${citationHtml}</p>`;
}

function renderVideoBlock(block, lang, titleHtml) {
  const labels = getLabels(lang);
  const title = textFor(block.title, lang, "Project video");
  const poster = textFor(block.poster, lang);
  const sources = Array.isArray(block.sources)
    ? block.sources
    : block.src
      ? [{ src: block.src, type: block.mediaType }]
      : [];
  const tracks = Array.isArray(block.tracks) ? block.tracks : [];
  const caption = textFor(block.caption, lang);

  return `
    <section class="article-block project-block project-block-media project-block-video">
      ${titleHtml}
      <div class="video-frame">
        <video controls playsinline preload="metadata"${poster ? ` poster="${escapeHtml(poster)}"` : ""} aria-label="${escapeHtml(title)}">
          ${sources.map((source) => `<source src="${escapeHtml(source.src)}"${source.type ? ` type="${escapeHtml(source.type)}"` : ""}>`).join("")}
          ${tracks.map((track) => `<track src="${escapeHtml(track.src)}" kind="${escapeHtml(track.kind || "subtitles")}" srclang="${escapeHtml(track.srclang || "en")}" label="${escapeHtml(textFor(track.label, lang, track.srclang || "Subtitles"))}"${track.default ? " default" : ""}>`).join("")}
          ${escapeHtml(labels.videoUnsupported)}
        </video>
      </div>
      ${caption ? `<p class="media-caption">${escapeHtml(caption)}</p>` : ""}
    </section>
  `;
}

function renderEmbedVideoBlock(block, lang, titleHtml) {
  const title = textFor(block.title, lang, "Embedded video");
  const url = textFor(block.url || block.src, lang);
  const caption = textFor(block.caption, lang);

  return `
    <section class="article-block project-block project-block-media project-block-video">
      ${titleHtml}
      <div class="embed-frame">
        <iframe src="${escapeHtml(url)}" title="${escapeHtml(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      ${caption ? `<p class="media-caption">${escapeHtml(caption)}</p>` : ""}
    </section>
  `;
}

function renderDocumentBlock(block, lang, titleHtml) {
  const labels = getLabels(lang);
  const pdf = textFor(block.pdf || block.pdfSrc, lang);
  const docx = textFor(block.docx || block.docxSrc, lang);
  const description = listFor(block.body || block.description, lang);
  const documentTitle = textFor(block.title, lang, labels.pdfTitle);

  return `
    <section class="article-block project-block project-block-media project-block-document">
      ${titleHtml}
      ${description.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      ${pdf ? `
        <div class="document-frame">
          <iframe src="${escapeHtml(pdf)}#view=FitH" title="${escapeHtml(documentTitle)}" loading="lazy"></iframe>
        </div>
      ` : ""}
      <div class="document-actions">
        ${pdf ? `<a class="button ghost" href="${escapeHtml(pdf)}" target="_blank" rel="noopener noreferrer">${escapeHtml(labels.openPdf)}</a>` : ""}
        ${docx ? `<a class="button primary" href="${escapeHtml(docx)}" download>${escapeHtml(labels.downloadDocx)}</a>` : ""}
      </div>
    </section>
  `;
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
            const source = renderImageSource(image.source, lang);
            return `
              <figure class="gallery-item">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(textFor(image.alt, lang, image.alt || ""))}" loading="lazy">
                ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
                ${source}
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
    return `
      <article class="article-block project-block project-block-facts">
        ${titleHtml}
        <div class="facts-grid">
          ${(block.items || []).map((item) => `
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

  if (block.type === "video") return renderVideoBlock(block, lang, titleHtml);
  if (block.type === "embedVideo") return renderEmbedVideoBlock(block, lang, titleHtml);
  if (block.type === "document") return renderDocumentBlock(block, lang, titleHtml);

  return "";
}

function renderProjectPage(lang) {
  const root = document.getElementById("projectPageContent");
  if (!root || !project) return;

  const meta = getProjectMeta(lang);
  const displayTitle = project.displayTitle || project.id;
  const subtitle = meta.subtitle || "";

  document.title = `${displayTitle} | Xu Bang Portfolio`;
  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero-copy">
        <p class="eyebrow">${escapeHtml(project.year || "")}</p>
        <h1>${escapeHtml(displayTitle)}</h1>
        ${subtitle ? `<p class="hero-lead">${escapeHtml(subtitle)}</p>` : ""}
        <div class="meta-row">${renderMetaRow(meta, lang)}</div>
      </div>
      <img class="project-visual" src="${escapeHtml(project.cover)}" alt="${escapeHtml(displayTitle)}">
    </section>
    ${(project.blocks || []).map((block) => renderBlock(block, lang)).join("")}
  `;
}

function renderProjectNavigation(lang) {
  const labels = getLabels(lang);
  const back = document.querySelector("[data-project-back]");
  const position = document.getElementById("projectPosition");
  const pagination = document.getElementById("projectPagination");
  const currentIndex = projectIndex.findIndex((item) => item.id === project?.id);

  if (back) back.textContent = labels.back;
  if (position) {
    position.textContent = currentIndex >= 0
      ? `${labels.position} ${currentIndex + 1} / ${projectIndex.length}`
      : labels.position;
  }

  if (!pagination || currentIndex < 0 || projectIndex.length < 2) return;

  const previous = projectIndex[(currentIndex - 1 + projectIndex.length) % projectIndex.length];
  const next = projectIndex[(currentIndex + 1) % projectIndex.length];

  pagination.innerHTML = `
    <a class="project-nav-card project-nav-previous" href="${escapeHtml(previous.page)}">
      <span>${escapeHtml(labels.previous)}</span>
      <strong>${escapeHtml(previous.displayTitle || previous.id)}</strong>
    </a>
    <a class="project-nav-card project-nav-next" href="${escapeHtml(next.page)}">
      <span>${escapeHtml(labels.next)}</span>
      <strong>${escapeHtml(next.displayTitle || next.id)}</strong>
    </a>
  `;
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

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang, true));
  });
}

function setupImageZoom() {
  document.getElementById("projectPageContent")?.addEventListener("click", (event) => {
    const image = event.target.closest("img");
    if (!image) return;
    event.preventDefault();
    openImageZoom(image);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeImageZoom) closeImageZoom();
  });
}

function init() {
  if (!project) {
    window.location.href = "index.html#works";
    return;
  }

  setupLanguageSwitch();
  setupImageZoom();
  setLang(getLang(), false);
}

init();
