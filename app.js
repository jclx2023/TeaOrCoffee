const site = window.PORTFOLIO_SITE || {};
const projects = window.PORTFOLIO_PROJECT_INDEX || [];
const translations = site.i18n || {};
const languagePreference = window.PORTFOLIO_LANGUAGE || {};

function textFor(value, lang, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.zh || fallback;
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

function getProjectMeta(project, lang) {
  return project.meta?.[lang] || project.meta?.en || project.meta?.zh || {};
}

function renderSkills() {
  const row = document.querySelector(".signal-row");
  if (!row || !Array.isArray(site.skills)) return;
  row.innerHTML = site.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("");
}

function renderWorks(lang) {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => {
    const meta = getProjectMeta(project, lang);
    const displayTitle = project.displayTitle || project.id;
    const cardText = textFor(project.card, lang);
    const subtitle = meta.subtitle || "";
    const page = project.page || `projects/${project.id}/index.html`;

    return `
      <a class="work-card" href="${escapeHtml(page)}" aria-label="${escapeHtml(displayTitle)}">
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
            <span class="open-project">${escapeHtml(translations[lang]?.openDetail || "OPEN")}</span>
          </div>
        </div>
      </a>
    `;
  }).join("");
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

  renderSkills();
  renderWorks(safeLang);
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang, true));
  });
}

function init() {
  setupLanguageSwitch();
  setLang(getLang(), false);
}

init();
