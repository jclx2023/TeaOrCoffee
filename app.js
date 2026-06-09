const translations = {
  zh: {
    navWorks: "作品",
    navProfile: "关于",
    navContact: "联系",
    heroEyebrow: "GAME DESIGN PORTFOLIO",
    heroTitle: "徐邦",
    heroLead: "面向日本大学修士申请的游戏设计作品集。关注机制设计、交互节奏、系统闭环与可玩的原型落地。",
    viewWorks: "查看作品",
    modelNote: "可替换的 3D 掌机占位模型",
    summaryKicker: "申请方向",
    summaryMajor: "游戏设计",
    summaryWorks: "项目数量",
    summaryFormat: "展示形式",
    summaryBlog: "文章 + 图片",
    worksEyebrow: "SELECTED WORKS",
    worksTitle: "作品展示",
    worksLead: "四个项目以博客文章形式展示。点击作品会打开独立详情页，适合后续继续补充截图、视频、下载链接与反思文本。",
    profileEyebrow: "PROFILE",
    profileTitle: "徐邦",
    profileLead: "大四学生，申请方向为游戏设计。作品覆盖系统策划、Unity 原型、复古界面交互、多语言文本与可运行游戏开发。",
    profileDirection: "申请方向",
    profileSkills: "技能栈",
    contactEyebrow: "CONTACT",
    contactTitle: "联系",
    footerText: "Static portfolio for GitHub Pages",
    openDetail: "打开详情",
    role: "个人职责",
    status: "状态",
    platform: "平台",
    tools: "工具",
    overview: "项目概述",
    designFocus: "设计重点",
    gallery: "项目图片",
    placeholder: "未提供的信息已保留为占位符，后续可继续补充。",
    backHome: "返回首页"
  },
  ja: {
    navWorks: "作品",
    navProfile: "プロフィール",
    navContact: "連絡",
    heroEyebrow: "GAME DESIGN PORTFOLIO",
    heroTitle: "徐邦",
    heroLead: "日本の大学院修士課程出願に向けたゲームデザインポートフォリオです。メカニクス、インタラクションのテンポ、システムループ、プレイ可能なプロトタイプを重視しています。",
    viewWorks: "作品を見る",
    modelNote: "差し替え可能な 3D 携帯ゲーム機プレースホルダー",
    summaryKicker: "志望分野",
    summaryMajor: "ゲームデザイン",
    summaryWorks: "プロジェクト数",
    summaryFormat: "表示形式",
    summaryBlog: "記事 + 画像",
    worksEyebrow: "SELECTED WORKS",
    worksTitle: "作品一覧",
    worksLead: "4 つのプロジェクトをブログ記事形式で掲載しています。作品をクリックすると、独立した詳細ページが小窓で開きます。",
    profileEyebrow: "PROFILE",
    profileTitle: "徐邦",
    profileLead: "大学 4 年生。志望分野はゲームデザイン。システム企画、Unity プロトタイプ、レトロ UI、ローカライズ、プレイ可能なゲーム開発を扱っています。",
    profileDirection: "志望分野",
    profileSkills: "スキル",
    contactEyebrow: "CONTACT",
    contactTitle: "連絡",
    footerText: "GitHub Pages 用の静的ポートフォリオ",
    openDetail: "詳細を開く",
    role: "担当",
    status: "状態",
    platform: "プラットフォーム",
    tools: "ツール",
    overview: "概要",
    designFocus: "デザイン重点",
    gallery: "画像",
    placeholder: "未提供の情報はプレースホルダーとして残しています。",
    backHome: "トップへ戻る"
  },
  en: {
    navWorks: "Works",
    navProfile: "Profile",
    navContact: "Contact",
    heroEyebrow: "GAME DESIGN PORTFOLIO",
    heroTitle: "Xu Bang",
    heroLead: "A game design portfolio for master's applications in Japan, focused on mechanics, interaction rhythm, system loops, and playable prototypes.",
    viewWorks: "View Works",
    modelNote: "Replaceable 3D handheld placeholder",
    summaryKicker: "Direction",
    summaryMajor: "Game Design",
    summaryWorks: "Projects",
    summaryFormat: "Format",
    summaryBlog: "Article + Images",
    worksEyebrow: "SELECTED WORKS",
    worksTitle: "Selected Works",
    worksLead: "Four projects are presented as blog-style articles. Click a work to open an independent detail page in a small window.",
    profileEyebrow: "PROFILE",
    profileTitle: "Xu Bang",
    profileLead: "Senior undergraduate student applying for game design. The works cover system design, Unity prototypes, retro UI interaction, localization, and playable game development.",
    profileDirection: "Direction",
    profileSkills: "Skills",
    contactEyebrow: "CONTACT",
    contactTitle: "Contact",
    footerText: "Static portfolio for GitHub Pages",
    openDetail: "Open Detail",
    role: "Role",
    status: "Status",
    platform: "Platform",
    tools: "Tools",
    overview: "Overview",
    designFocus: "Design Focus",
    gallery: "Gallery",
    placeholder: "Missing information is kept as placeholder text for later updates.",
    backHome: "Back Home"
  }
};

const projects = [
  {
    id: "deep",
    year: "2024",
    cover: "assets/projects/deep/deep-ruins.webp",
    images: [
      "assets/projects/deep/deep-ruins.webp",
      "assets/projects/deep/deep-creature.webp",
      "assets/projects/deep/deep-depth.webp"
    ],
    tags: ["Unity", "GDD", "Pixel Art", "Unfinished"],
    zh: {
      title: "DeepSea",
      subtitle: "未完成项目 / 企划案展示",
      role: "系统策划、GDD 整理、关卡与敌方生物设计",
      status: "未完成，仅以企划案和概念素材展示",
      platform: "PC 原型",
      tools: "Unity / Word / Excel",
      card: "以深海探索为主题的像素风动作冒险企划，重点展示世界观、系统、敌方生物与数值表设计。",
      overview: "DeepSea 是一个以海底文明、探索和生物生态为核心的未完成项目。现阶段作品集将其作为企划案展示，强调从 GDD、系统策划案、敌方生物策划案、道具表和概念 CG 中体现的设计能力。",
      focus: [
        "用分层海域、遗迹和生物群建立探索节奏，形成由浅水到深水的阶段推进。",
        "围绕敌方生物、道具、经验、概率和音频需求制作表格化设计资料，便于实现和调优。",
        "通过像素海底概念图展示项目气质，为后续原型或视觉重构提供方向。"
      ]
    },
    ja: {
      title: "DeepSea",
      subtitle: "未完成プロジェクト / 企画書展示",
      role: "システム企画、GDD、レベルと敵キャラクター設計",
      status: "未完成。企画書とコンセプト素材として掲載",
      platform: "PC プロトタイプ",
      tools: "Unity / Word / Excel",
      card: "深海探索をテーマにしたピクセルアート系アクションアドベンチャー企画です。",
      overview: "DeepSea は海底文明、探索、生態系を中心にした未完成プロジェクトです。ポートフォリオでは GDD、システム企画、敵設計、アイテム表、コンセプト CG を通じて設計力を示します。",
      focus: [
        "浅い海域から深海へ進む探索テンポを、エリア階層と生物配置で構成。",
        "敵、アイテム、経験値、確率、音声要件を表形式で管理し、実装と調整に接続。",
        "ピクセル調の海底コンセプトアートで、プロジェクトの方向性を明確化。"
      ]
    },
    en: {
      title: "DeepSea",
      subtitle: "Unfinished project / Design document showcase",
      role: "System design, GDD, level and enemy design",
      status: "Unfinished. Presented as design documents and concept assets",
      platform: "PC prototype",
      tools: "Unity / Word / Excel",
      card: "A pixel-art action adventure concept about deep-sea exploration, ecology, and underwater ruins.",
      overview: "DeepSea is an unfinished project built around underwater civilization, exploration, and creature ecology. In this portfolio it is presented as a design-document work, showing GDD structure, systems, enemy design, item sheets, and concept art.",
      focus: [
        "Build exploration pacing through layered sea zones, ruins, and creature groups.",
        "Use structured design sheets for enemies, items, experience, probabilities, and audio needs.",
        "Use pixel-style underwater concept art to communicate the intended mood and visual direction."
      ]
    }
  },
  {
    id: "chinese",
    year: "2025",
    cover: "assets/projects/chinese/chinese-title.webp",
    images: [
      "assets/projects/chinese/chinese-title.webp",
      "assets/projects/chinese/chinese-words.webp",
      "assets/projects/chinese/chinese-flow.webp"
    ],
    tags: ["Unity", "Photon", "Multiplayer", "Language Game"],
    zh: {
      title: "语文课堂",
      subtitle: "多人中文词汇答题游戏",
      role: "玩法策划、联网原型、题型设计、UI 流程整理",
      status: "可运行游戏，缺少下载链接占位",
      platform: "PC",
      tools: "Unity / Photon / C# / SQLite 方案",
      card: "将中文词汇测试转化为多人在线答题对抗，围绕填空、选择、判断、写字题和道具卡构建互动。",
      overview: "《语文课堂》尝试把传统中文词汇测试从网页或轻量页面体验升级为客户端多人互动游戏。项目以教室场景为核心，通过 Photon 联机、题库管理、语音和道具卡系统，让玩家在对抗中回忆词汇、理解汉字结构与语义。",
      focus: [
        "设计填空题、写字题、选择题、判断题等题型，并考虑每种题型的 UI 反馈和节奏。",
        "规划多人房间、大厅、答题同步、语音频道和玩家状态显示。",
        "用道具卡系统增加对抗性，例如延时、扣时或影响其他玩家答题状态。"
      ]
    },
    ja: {
      title: "語文課堂",
      subtitle: "オンライン中国語語彙クイズゲーム",
      role: "ゲーム企画、ネットワークプロトタイプ、問題形式設計、UI フロー",
      status: "プレイ可能。ダウンロードリンクは未設定",
      platform: "PC",
      tools: "Unity / Photon / C# / SQLite 構想",
      card: "中国語語彙テストを、オンライン対戦型のクイズゲームへ発展させたプロジェクトです。",
      overview: "『語文課堂』は、従来の中国語語彙テストをクライアント型のマルチプレイ体験へ拡張するプロジェクトです。教室を舞台に、Photon、問題データベース、ボイス、アイテムカードを組み合わせ、語彙と漢字への関心をゲーム化します。",
      focus: [
        "穴埋め、手書き、選択、判断など複数の問題形式と UI フィードバックを設計。",
        "ロビー、ルーム、回答同期、音声チャンネル、プレイヤー状態表示を計画。",
        "時間延長や妨害などのカード効果で、学習要素に対戦性を追加。"
      ]
    },
    en: {
      title: "ChineseLesson",
      subtitle: "Multiplayer Chinese vocabulary quiz game",
      role: "Gameplay design, network prototype, question types, UI flow",
      status: "Playable. Download link placeholder",
      platform: "PC",
      tools: "Unity / Photon / C# / SQLite plan",
      card: "A multiplayer quiz game that turns Chinese vocabulary tests into social, competitive play.",
      overview: "ChineseLesson upgrades lightweight web-style Chinese vocabulary tests into a client-based multiplayer game. Set in a classroom, it combines Photon networking, question banks, voice chat, and item cards so players can practice vocabulary under playful pressure.",
      focus: [
        "Design multiple question types including fill-in-the-blank, handwriting, choice, and true-or-false.",
        "Plan lobby, room creation, answer synchronization, voice channels, and player status UI.",
        "Use item cards such as time extension or disruption to add competitive interaction."
      ]
    }
  },
  {
    id: "windows-murder",
    year: "2025-2026",
    cover: "assets/projects/windows-murder/recycle-blooded.webp",
    images: [
      "assets/projects/windows-murder/recycle-blooded.webp",
      "assets/projects/windows-murder/control-panel.webp",
      "assets/projects/windows-murder/my-pc.webp"
    ],
    tags: ["Unity", "Detective", "Retro UI", "LLM Dialogue"],
    zh: {
      title: "WindowsMurder",
      subtitle: "发生在 Windows XP 桌面上的谋杀案",
      role: "个人开发、剧本与谜题设计、UI 交互、三语文本整理",
      status: "可运行游戏，下载链接占位",
      platform: "PC",
      tools: "Unity / C# / JSON Localization / LLM Prompt",
      card: "复古桌面模拟解谜游戏。玩家扮演管理员，在拟人化程序和文件中调查回收站被害案。",
      overview: "WindowsMurder 是一款单人桌面模拟解谜游戏，故事发生在类 Windows XP 的虚拟系统中。玩家作为 Administer，通过文件属性、弹窗、程序对话、系统日志和线索矛盾推理案件真相。项目还预留了在线 LLM 对话思路，使玩家能与不同程序角色进行实时询问。",
      focus: [
        "将 Windows XP 的任务栏、文件夹、右键菜单、控制面板和错误弹窗转化为可解谜的交互界面。",
        "把回收站、控制面板、我的电脑等程序拟人化，让软件行为成为证词和线索来源。",
        "通过三语 JSON 文本和角色 prompt 组织，探索传统推理与实时 AI 对话的结合。"
      ]
    },
    ja: {
      title: "WindowsMurder",
      subtitle: "Windows XP デスクトップ上の殺人事件",
      role: "個人開発、シナリオと謎解き、UI インタラクション、多言語テキスト",
      status: "プレイ可能。ダウンロードリンクは未設定",
      platform: "PC",
      tools: "Unity / C# / JSON Localization / LLM Prompt",
      card: "レトロなデスクトップを舞台にした推理ゲーム。管理者としてプログラムたちの証言を調査します。",
      overview: "WindowsMurder は、Windows XP 風の仮想デスクトップで起きた事件を調査するシングルプレイ推理ゲームです。プレイヤーは Administer として、ファイル属性、ポップアップ、プログラム会話、ログ、証言の矛盾をたどります。オンライン LLM 会話による尋問も構想されています。",
      focus: [
        "タスクバー、フォルダ、右クリックメニュー、コントロールパネル、エラーウィンドウを謎解き UI として活用。",
        "ごみ箱、コントロールパネル、マイコンピュータなどを擬人化し、証言と手がかりを作る。",
        "三言語 JSON とキャラクター prompt によって、推理ゲームとリアルタイム AI 会話を接続。"
      ]
    },
    en: {
      title: "WindowsMurder",
      subtitle: "A murder case on a Windows XP desktop",
      role: "Solo development, writing, puzzle design, UI interaction, trilingual text",
      status: "Playable. Download link placeholder",
      platform: "PC",
      tools: "Unity / C# / JSON Localization / LLM Prompt",
      card: "A retro desktop detective game where the player investigates the murder of Recycle Bin.",
      overview: "WindowsMurder is a single-player desktop simulation detective game set inside a Windows XP-like virtual system. As Administer, the player investigates file properties, pop-ups, software dialogues, system logs, and contradictory evidence. The project also explores online LLM dialogue for real-time questioning of software characters.",
      focus: [
        "Turn taskbars, folders, context menus, control panels, and error pop-ups into playable puzzle interfaces.",
        "Personify programs such as Recycle Bin, Control Panel, and My Computer as witnesses and suspects.",
        "Use trilingual JSON text and character prompts to connect classic deduction with AI-driven dialogue."
      ]
    }
  },
  {
    id: "clavaro",
    year: "2026",
    cover: "assets/projects/clavaro/clavaro-play.webp",
    images: [
      "assets/projects/clavaro/clavaro-play.webp",
      "assets/projects/clavaro/clavaro-shop.webp",
      "assets/projects/clavaro/clavaro-run.webp"
    ],
    tags: ["Unity", "Roguelike", "Deckbuilding", "Claw Machine"],
    zh: {
      title: "Clavaro",
      subtitle: "抓娃娃机 + Roguelike 卡组构建",
      role: "系统设计、玩法原型、UI/商店/计分流程、程序实现",
      status: "可运行 Demo，下载链接占位",
      platform: "PC",
      tools: "Unity / C# / ScriptableObject / DOTween",
      card: "把抓娃娃机的不确定物理手感与 Roguelike 构筑结合，围绕球池、遗物、商店和计分闭环设计。",
      overview: "Clavaro 以抓娃娃机作为核心交互。玩家控制钩爪抓取不同分值和倍率的小球，并通过回合、商店、遗物和球池构筑形成长期策略。项目强调操作不确定性与数值优化之间的平衡，已实现钩爪、球体生成、结算、商店、遗物触发和 CRT/像素视觉等模块。",
      focus: [
        "用抓取次数、目标分、当前分、倍率球和基础分球建立清晰的回合目标。",
        "在回合后商店中提供购球、删球、遗物和刷新选择，让玩家优化球池结构。",
        "通过遗物触发链、随机种子、Boss 回合和特殊球体扩展重玩性。"
      ]
    },
    ja: {
      title: "Clavaro",
      subtitle: "クレーンゲーム + Roguelike デッキ構築",
      role: "システム設計、プロトタイプ、UI/ショップ/スコア処理、実装",
      status: "プレイ可能な Demo。ダウンロードリンクは未設定",
      platform: "PC",
      tools: "Unity / C# / ScriptableObject / DOTween",
      card: "クレーンゲームの物理的な不確定性と Roguelike 構築を組み合わせたプロジェクトです。",
      overview: "Clavaro はクレーンゲームを核にした Roguelike デッキ構築ゲームです。プレイヤーはスコア球と倍率球を掴み、ラウンド、ショップ、レリック、球プール構築を通じて長期的な戦略を作ります。クレーン、生成、精算、ショップ、レリック、CRT/ピクセル演出などを実装しています。",
      focus: [
        "掴む回数、目標スコア、現在スコア、倍率球、基礎スコア球で明確なラウンド目標を構成。",
        "ショップで購入、削除、レリック、リロールを選び、球プールを最適化。",
        "レリックの発動チェーン、乱数シード、Boss ラウンド、特殊球でリプレイ性を拡張。"
      ]
    },
    en: {
      title: "Clavaro",
      subtitle: "Claw machine plus roguelike deckbuilding",
      role: "System design, gameplay prototype, UI/shop/scoring flow, programming",
      status: "Playable demo. Download link placeholder",
      platform: "PC",
      tools: "Unity / C# / ScriptableObject / DOTween",
      card: "A roguelike deckbuilder that combines claw-machine uncertainty with ball-pool optimization.",
      overview: "Clavaro uses a claw machine as its core interaction. The player grabs scoring balls and multiplier balls, then develops long-term strategy through rounds, shops, relics, and ball-pool construction. The implemented modules include claw control, ball spawning, settlement, shop, relic triggers, and CRT/pixel visual effects.",
      focus: [
        "Create clear round goals through grab counts, target score, current score, base balls, and multipliers.",
        "Let the player optimize the ball pool through shop choices such as buying, deleting, relics, and rerolls.",
        "Expand replayability with relic trigger chains, seeded randomness, boss rounds, and special balls."
      ]
    }
  }
];

function getLang() {
  const stored = localStorage.getItem("portfolioLang");
  if (stored && translations[stored]) return stored;
  return "zh";
}

function setLang(lang) {
  localStorage.setItem("portfolioLang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "ja" ? "ja" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  renderWorks(lang);
  renderProjectPage(lang);
}

function renderWorks(lang) {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => {
    const copy = project[lang];
    return `
      <article class="work-card">
        <img src="${project.cover}" alt="${copy.title}" loading="lazy">
        <div class="work-card-body">
          <div>
            <p class="eyebrow">${project.year}</p>
            <h3>${copy.title}</h3>
            <p>${copy.card}</p>
          </div>
          <div class="tag-row">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-footer">
            <span class="meta-pill">${copy.subtitle}</span>
            <button class="open-project" type="button" data-project="${project.id}">${translations[lang].openDetail}</button>
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
  const lang = getLang();
  const url = `project.html?id=${encodeURIComponent(id)}&lang=${encodeURIComponent(lang)}`;
  const popup = window.open(url, `project_${id}`, "width=980,height=760,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes");
  if (!popup) window.location.href = url;
}

function renderProjectPage(lang) {
  const root = document.getElementById("projectRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "clavaro";
  const project = projects.find((item) => item.id === id) || projects[0];
  const copy = project[lang];
  document.title = `${copy.title} | Xu Bang`;

  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero-copy">
        <p class="eyebrow">${project.year}</p>
        <h1>${copy.title}</h1>
        <p class="hero-lead">${copy.subtitle}</p>
        <div class="meta-row">
          <span class="meta-pill">${translations[lang].role}: ${copy.role}</span>
          <span class="meta-pill">${translations[lang].status}: ${copy.status}</span>
          <span class="meta-pill">${translations[lang].platform}: ${copy.platform}</span>
          <span class="meta-pill">${translations[lang].tools}: ${copy.tools}</span>
        </div>
        <div class="hero-actions">
          <a class="button ghost" href="index.html#works">${translations[lang].backHome}</a>
        </div>
      </div>
      <img class="project-visual" src="${project.cover}" alt="${copy.title}">
    </section>

    <article class="article-block">
      <p class="eyebrow">${translations[lang].overview}</p>
      <h2>${copy.title}</h2>
      <p>${copy.overview}</p>
    </article>

    <article class="article-block">
      <p class="eyebrow">${translations[lang].designFocus}</p>
      <h2>${copy.subtitle}</h2>
      <ul>${copy.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p class="missing">${translations[lang].placeholder}</p>
    </article>

    <section class="article-block">
      <p class="eyebrow">${translations[lang].gallery}</p>
      <div class="gallery">
        ${project.images.map((image) => `<img src="${image}" alt="${copy.title}" loading="lazy">`).join("")}
      </div>
    </section>
  `;
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
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
  setupModelMotion();
  const params = new URLSearchParams(window.location.search);
  const initialLang = params.get("lang") || getLang();
  setLang(translations[initialLang] ? initialLang : "zh");
}

init();
