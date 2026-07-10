(function setupPortfolioLanguage() {
  const storageKey = "portfolioLang";
  const chineseTimezones = new Set([
    "Asia/Shanghai",
    "Asia/Hong_Kong",
    "Asia/Macau",
    "Asia/Taipei",
    "Asia/Chongqing",
    "Asia/Harbin",
    "Asia/Urumqi"
  ]);
  const japaneseTimezones = new Set(["Asia/Tokyo", "Japan"]);

  function readSavedLanguage(availableLanguages) {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved && availableLanguages[saved] ? saved : "";
    } catch (error) {
      return "";
    }
  }

  function detectBrowserLanguage(availableLanguages) {
    const browserLanguage = String(
      navigator.language || navigator.languages?.[0] || ""
    ).toLowerCase();

    if (browserLanguage.startsWith("zh") && availableLanguages.zh) return "zh";
    if (browserLanguage.startsWith("ja") && availableLanguages.ja) return "ja";
    if (browserLanguage && browserLanguage !== "und" && availableLanguages.en) return "en";
    return "";
  }

  function detectTimezoneLanguage(availableLanguages) {
    let timezone = "";

    try {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch (error) {
      timezone = "";
    }

    if (chineseTimezones.has(timezone) && availableLanguages.zh) return "zh";
    if (japaneseTimezones.has(timezone) && availableLanguages.ja) return "ja";
    return availableLanguages.en ? "en" : "";
  }

  function getInitialLanguage(availableLanguages, fallback = "en") {
    return readSavedLanguage(availableLanguages)
      || detectBrowserLanguage(availableLanguages)
      || detectTimezoneLanguage(availableLanguages)
      || (availableLanguages[fallback] ? fallback : Object.keys(availableLanguages)[0]);
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Language switching should still work when storage is unavailable.
    }
  }

  window.PORTFOLIO_LANGUAGE = {
    getInitialLanguage,
    saveLanguage
  };
}());
