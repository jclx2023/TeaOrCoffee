window.PORTFOLIO_PROJECTS = [
  {
    id: "deep",
    displayTitle: "DeepSea",
    year: "2024",
    cover: "assets/projects/deep/deep-ruins.webp",
    tags: ["Unity", "GDD", "Pixel Art", "Unfinished"],
    card: {
      zh: "以深海探索为主题的像素风动作冒险企划，重点展示世界观、系统、敌方生物与数值表设计。",
      ja: "深海探索をテーマにしたピクセルアート系アクションアドベンチャー企画です。",
      en: "A pixel-art action adventure concept about deep-sea exploration, ecology, and underwater ruins."
    },
    meta: {
      zh: {
        subtitle: "未完成项目 / 企划案展示",
        role: "系统策划、GDD 整理、关卡与敌方生物设计",
        status: "未完成，仅以企划案和概念素材展示",
        platform: "PC 原型",
        tools: "Unity / Word / Excel"
      },
      ja: {
        subtitle: "未完成プロジェクト / 企画書展示",
        role: "システム企画、GDD、レベルと敵キャラクター設計",
        status: "未完成。企画書とコンセプト素材として掲載",
        platform: "PC プロトタイプ",
        tools: "Unity / Word / Excel"
      },
      en: {
        subtitle: "Unfinished project / Design document showcase",
        role: "System design, GDD, level and enemy design",
        status: "Unfinished. Presented as design documents and concept assets",
        platform: "PC prototype",
        tools: "Unity / Word / Excel"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: ["DeepSea 是一个以海底文明、探索和生物生态为核心的未完成项目。现阶段作品集将其作为企划案展示，强调从 GDD、系统策划案、敌方生物策划案、道具表和概念 CG 中体现的设计能力。"],
          ja: ["DeepSea は海底文明、探索、生態系を中心にした未完成プロジェクトです。ポートフォリオでは GDD、システム企画、敵設計、アイテム表、コンセプト CG を通じて設計力を示します。"],
          en: ["DeepSea is an unfinished project built around underwater civilization, exploration, and creature ecology. In this portfolio it is presented as a design-document work, showing GDD structure, systems, enemy design, item sheets, and concept art."]
        }
      },
      {
        type: "list",
        title: { zh: "设计重点", ja: "デザイン重点", en: "Design Focus" },
        items: {
          zh: ["用分层海域、遗迹和生物群建立探索节奏，形成由浅水到深水的阶段推进。", "围绕敌方生物、道具、经验、概率和音频需求制作表格化设计资料，便于实现和调优。", "通过像素海底概念图展示项目气质，为后续原型或视觉重构提供方向。"],
          ja: ["浅い海域から深海へ進む探索テンポを、エリア階層と生物配置で構成。", "敵、アイテム、経験値、確率、音声要件を表形式で管理し、実装と調整に接続。", "ピクセル調の海底コンセプトアートで、プロジェクトの方向性を明確化。"],
          en: ["Build exploration pacing through layered sea zones, ruins, and creature groups.", "Use structured design sheets for enemies, items, experience, probabilities, and audio needs.", "Use pixel-style underwater concept art to communicate the intended mood and visual direction."]
        }
      },
      {
        type: "gallery",
        title: { zh: "项目图片", ja: "画像", en: "Gallery" },
        images: [
          { src: "assets/projects/deep/deep-ruins.webp", alt: "DeepSea ruins concept" },
          { src: "assets/projects/deep/deep-creature.webp", alt: "DeepSea creature concept" },
          { src: "assets/projects/deep/deep-depth.webp", alt: "DeepSea deep zone concept" }
        ]
      },
      {
        type: "note",
        body: {
          zh: "未提供的信息已保留为占位符，后续可继续补充。",
          ja: "未提供の情報はプレースホルダーとして残しています。",
          en: "Missing information is kept as placeholder text for later updates."
        }
      }
    ]
  },
  {
    id: "chinese",
    displayTitle: "ChineseLesson",
    year: "2025",
    cover: "assets/projects/chinese/chinese-title.webp",
    tags: ["Unity", "Photon", "Multiplayer", "Language Game"],
    card: {
      zh: "将中文词汇测试转化为多人在线答题对抗，围绕填空、选择、判断、写字题和道具卡构建互动。",
      ja: "中国語語彙テストを、オンライン対戦型のクイズゲームへ発展させたプロジェクトです。",
      en: "A multiplayer quiz game that turns Chinese vocabulary tests into social, competitive play."
    },
    meta: {
      zh: {
        subtitle: "多人中文词汇答题游戏",
        role: "玩法策划、联网原型、题型设计、UI 流程整理",
        status: "可运行游戏，缺少下载链接占位",
        platform: "PC",
        tools: "Unity / Photon / C# / SQLite 方案"
      },
      ja: {
        subtitle: "オンライン中国語語彙クイズゲーム",
        role: "ゲーム企画、ネットワークプロトタイプ、問題形式設計、UI フロー",
        status: "プレイ可能。ダウンロードリンクは未設定",
        platform: "PC",
        tools: "Unity / Photon / C# / SQLite 構想"
      },
      en: {
        subtitle: "Multiplayer Chinese vocabulary quiz game",
        role: "Gameplay design, network prototype, question types, UI flow",
        status: "Playable. Download link placeholder",
        platform: "PC",
        tools: "Unity / Photon / C# / SQLite plan"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: ["《语文课堂》尝试把传统中文词汇测试从网页或轻量页面体验升级为客户端多人互动游戏。项目以教室场景为核心，通过 Photon 联机、题库管理、语音和道具卡系统，让玩家在对抗中回忆词汇、理解汉字结构与语义。"],
          ja: ["『語文課堂』は、従来の中国語語彙テストをクライアント型のマルチプレイ体験へ拡張するプロジェクトです。教室を舞台に、Photon、問題データベース、ボイス、アイテムカードを組み合わせ、語彙と漢字への関心をゲーム化します。"],
          en: ["ChineseLesson upgrades lightweight web-style Chinese vocabulary tests into a client-based multiplayer game. Set in a classroom, it combines Photon networking, question banks, voice chat, and item cards so players can practice vocabulary under playful pressure."]
        }
      },
      {
        type: "list",
        title: { zh: "设计重点", ja: "デザイン重点", en: "Design Focus" },
        items: {
          zh: ["设计填空题、写字题、选择题、判断题等题型，并考虑每种题型的 UI 反馈和节奏。", "规划多人房间、大厅、答题同步、语音频道和玩家状态显示。", "用道具卡系统增加对抗性，例如延时、扣时或影响其他玩家答题状态。"],
          ja: ["穴埋め、手書き、選択、判断など複数の問題形式と UI フィードバックを設計。", "ロビー、ルーム、回答同期、音声チャンネル、プレイヤー状態表示を計画。", "時間延長や妨害などのカード効果で、学習要素に対戦性を追加。"],
          en: ["Design multiple question types including fill-in-the-blank, handwriting, choice, and true-or-false.", "Plan lobby, room creation, answer synchronization, voice channels, and player status UI.", "Use item cards such as time extension or disruption to add competitive interaction."]
        }
      },
      {
        type: "gallery",
        title: { zh: "项目图片", ja: "画像", en: "Gallery" },
        images: [
          { src: "assets/projects/chinese/chinese-title.webp", alt: "ChineseLesson title screen" },
          { src: "assets/projects/chinese/chinese-words.webp", alt: "ChineseLesson words screen" },
          { src: "assets/projects/chinese/chinese-flow.webp", alt: "ChineseLesson flow chart" }
        ]
      },
      {
        type: "note",
        body: {
          zh: "未提供的信息已保留为占位符，后续可继续补充。",
          ja: "未提供の情報はプレースホルダーとして残しています。",
          en: "Missing information is kept as placeholder text for later updates."
        }
      }
    ]
  },
  {
    id: "windows-murder",
    displayTitle: "WindowsMurder",
    year: "2025-2026",
    cover: "assets/projects/windows-murder/recycle-blooded.webp",
    tags: ["Unity", "Detective", "Retro UI", "LLM Dialogue"],
    card: {
      zh: "复古桌面模拟解谜游戏。玩家扮演管理员，在拟人化程序和文件中调查回收站被害案。",
      ja: "レトロなデスクトップを舞台にした推理ゲーム。管理者としてプログラムたちの証言を調査します。",
      en: "A retro desktop detective game where the player investigates the murder of Recycle Bin."
    },
    meta: {
      zh: {
        subtitle: "发生在 Windows XP 桌面上的谋杀案",
        role: "个人开发、剧本与谜题设计、UI 交互、三语文本整理",
        status: "可运行游戏，下载链接占位",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      },
      ja: {
        subtitle: "Windows XP デスクトップ上の殺人事件",
        role: "個人開発、シナリオと謎解き、UI インタラクション、多言語テキスト",
        status: "プレイ可能。ダウンロードリンクは未設定",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      },
      en: {
        subtitle: "A murder case on a Windows XP desktop",
        role: "Solo development, writing, puzzle design, UI interaction, trilingual text",
        status: "Playable. Download link placeholder",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: ["WindowsMurder 是一款单人桌面模拟解谜游戏，故事发生在类 Windows XP 的虚拟系统中。玩家作为 Administer，通过文件属性、弹窗、程序对话、系统日志和线索矛盾推理案件真相。项目还预留了在线 LLM 对话思路，使玩家能与不同程序角色进行实时询问。"],
          ja: ["WindowsMurder は、Windows XP 風の仮想デスクトップで起きた事件を調査するシングルプレイ推理ゲームです。プレイヤーは Administer として、ファイル属性、ポップアップ、プログラム会話、ログ、証言の矛盾をたどります。オンライン LLM 会話による尋問も構想されています。"],
          en: ["WindowsMurder is a single-player desktop simulation detective game set inside a Windows XP-like virtual system. As Administer, the player investigates file properties, pop-ups, software dialogues, system logs, and contradictory evidence. The project also explores online LLM dialogue for real-time questioning of software characters."]
        }
      },
      {
        type: "list",
        title: { zh: "设计重点", ja: "デザイン重点", en: "Design Focus" },
        items: {
          zh: ["将 Windows XP 的任务栏、文件夹、右键菜单、控制面板和错误弹窗转化为可解谜的交互界面。", "把回收站、控制面板、我的电脑等程序拟人化，让软件行为成为证词和线索来源。", "通过三语 JSON 文本和角色 prompt 组织，探索传统推理与实时 AI 对话的结合。"],
          ja: ["タスクバー、フォルダ、右クリックメニュー、コントロールパネル、エラーウィンドウを謎解き UI として活用。", "ごみ箱、コントロールパネル、マイコンピュータなどを擬人化し、証言と手がかりを作る。", "三言語 JSON とキャラクター prompt によって、推理ゲームとリアルタイム AI 会話を接続。"],
          en: ["Turn taskbars, folders, context menus, control panels, and error pop-ups into playable puzzle interfaces.", "Personify programs such as Recycle Bin, Control Panel, and My Computer as witnesses and suspects.", "Use trilingual JSON text and character prompts to connect classic deduction with AI-driven dialogue."]
        }
      },
      {
        type: "gallery",
        title: { zh: "项目图片", ja: "画像", en: "Gallery" },
        images: [
          { src: "assets/projects/windows-murder/recycle-blooded.webp", alt: "WindowsMurder Recycle Bin" },
          { src: "assets/projects/windows-murder/control-panel.webp", alt: "WindowsMurder Control Panel" },
          { src: "assets/projects/windows-murder/my-pc.webp", alt: "WindowsMurder My PC" }
        ]
      },
      {
        type: "note",
        body: {
          zh: "未提供的信息已保留为占位符，后续可继续补充。",
          ja: "未提供の情報はプレースホルダーとして残しています。",
          en: "Missing information is kept as placeholder text for later updates."
        }
      }
    ]
  },
  {
    id: "clavaro",
    displayTitle: "Clavaro",
    year: "2026",
    cover: "assets/projects/clavaro/clavaro-play.webp",
    tags: ["Unity", "Roguelike", "Deckbuilding", "Claw Machine"],
    card: {
      zh: "把抓娃娃机的不确定物理手感与 Roguelike 构筑结合，围绕球池、遗物、商店和计分闭环设计。",
      ja: "クレーンゲームの物理的な不確定性と Roguelike 構築を組み合わせたプロジェクトです。",
      en: "A roguelike deckbuilder that combines claw-machine uncertainty with ball-pool optimization."
    },
    meta: {
      zh: {
        subtitle: "抓娃娃机 + Roguelike 卡组构建",
        role: "系统设计、玩法原型、UI/商店/计分流程、程序实现",
        status: "可运行 Demo，下载链接占位",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      },
      ja: {
        subtitle: "クレーンゲーム + Roguelike デッキ構築",
        role: "システム設計、プロトタイプ、UI/ショップ/スコア処理、実装",
        status: "プレイ可能な Demo。ダウンロードリンクは未設定",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      },
      en: {
        subtitle: "Claw machine plus roguelike deckbuilding",
        role: "System design, gameplay prototype, UI/shop/scoring flow, programming",
        status: "Playable demo. Download link placeholder",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: ["Clavaro 以抓娃娃机作为核心交互。玩家控制钩爪抓取不同分值和倍率的小球，并通过回合、商店、遗物和球池构筑形成长期策略。项目强调操作不确定性与数值优化之间的平衡，已实现钩爪、球体生成、结算、商店、遗物触发和 CRT/像素视觉等模块。"],
          ja: ["Clavaro はクレーンゲームを核にした Roguelike デッキ構築ゲームです。プレイヤーはスコア球と倍率球を掴み、ラウンド、ショップ、レリック、球プール構築を通じて長期的な戦略を作ります。クレーン、生成、精算、ショップ、レリック、CRT/ピクセル演出などを実装しています。"],
          en: ["Clavaro uses a claw machine as its core interaction. The player grabs scoring balls and multiplier balls, then develops long-term strategy through rounds, shops, relics, and ball-pool construction. The implemented modules include claw control, ball spawning, settlement, shop, relic triggers, and CRT/pixel visual effects."]
        }
      },
      {
        type: "list",
        title: { zh: "设计重点", ja: "デザイン重点", en: "Design Focus" },
        items: {
          zh: ["用抓取次数、目标分、当前分、倍率球和基础分球建立清晰的回合目标。", "在回合后商店中提供购球、删球、遗物和刷新选择，让玩家优化球池结构。", "通过遗物触发链、随机种子、Boss 回合和特殊球体扩展重玩性。"],
          ja: ["掴む回数、目標スコア、現在スコア、倍率球、基礎スコア球で明確なラウンド目標を構成。", "ショップで購入、削除、レリック、リロールを選び、球プールを最適化。", "レリックの発動チェーン、乱数シード、Boss ラウンド、特殊球でリプレイ性を拡張。"],
          en: ["Create clear round goals through grab counts, target score, current score, base balls, and multipliers.", "Let the player optimize the ball pool through shop choices such as buying, deleting, relics, and rerolls.", "Expand replayability with relic trigger chains, seeded randomness, boss rounds, and special balls."]
        }
      },
      {
        type: "gallery",
        title: { zh: "项目图片", ja: "画像", en: "Gallery" },
        images: [
          { src: "assets/projects/clavaro/clavaro-play.webp", alt: "Clavaro gameplay" },
          { src: "assets/projects/clavaro/clavaro-shop.webp", alt: "Clavaro shop" },
          { src: "assets/projects/clavaro/clavaro-run.webp", alt: "Clavaro run" }
        ]
      },
      {
        type: "note",
        body: {
          zh: "未提供的信息已保留为占位符，后续可继续补充。",
          ja: "未提供の情報はプレースホルダーとして残しています。",
          en: "Missing information is kept as placeholder text for later updates."
        }
      }
    ]
  }
];
