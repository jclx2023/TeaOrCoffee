window.PORTFOLIO_PROJECTS = [
  {
    id: "deep",
    displayTitle: "Deep",
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
        status: "待补充详细资料",
        platform: "PC 原型",
        tools: "Unity / Word / Excel"
      },
      ja: {
        subtitle: "未完成プロジェクト / 企画書展示",
        role: "システム企画、GDD、レベルと敵キャラクター設計",
        status: "詳細資料は後日追加予定",
        platform: "PC プロトタイプ",
        tools: "Unity / Word / Excel"
      },
      en: {
        subtitle: "Unfinished project / Design document showcase",
        role: "System design, GDD, level and enemy design",
        status: "Detailed materials pending",
        platform: "PC prototype",
        tools: "Unity / Word / Excel"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: [
            "Deep 是一个以海底文明、遗迹探索和深海生态为核心的未完成项目。目前在作品集中仍以企划案形式保留，主要展示我在世界观设定、区域推进、敌方生态、道具表和数值表方面的早期设计能力。",
            "由于 Deep 的新图片和详细资料尚未整理，本次更新暂不扩写该项目，避免用不完整资料造成误导。后续整理完成后，可以单独把它改成完整项目页。"
          ],
          ja: [
            "Deep は、海底文明、遺跡探索、深海生態を中心にした未完成プロジェクトです。現在は企画書形式で、世界観、エリア進行、敵生態、アイテム表、数値表の設計を示しています。",
            "新しい資料はまだ整理中のため、今回は大きく変更せず、後日完成した資料で拡張する前提にしています。"
          ],
          en: [
            "Deep is an unfinished project built around underwater civilization, ruins, and creature ecology. It is currently kept as a design-document showcase, presenting worldbuilding, area progression, enemy ecology, item sheets, and balance-table planning.",
            "Because the updated Deep materials have not been organized yet, this pass intentionally keeps the page concise and avoids overstating unfinished evidence."
          ]
        }
      },
      {
        type: "gallery",
        title: { zh: "现有概念图", ja: "既存コンセプト画像", en: "Existing Concept Images" },
        images: [
          {
            src: "assets/projects/deep/deep-ruins.webp",
            alt: "Deep ruins concept",
            caption: { zh: "海底遗迹氛围图", ja: "海底遺跡の雰囲気", en: "Underwater ruins mood image" }
          },
          {
            src: "assets/projects/deep/deep-creature.webp",
            alt: "Deep creature concept",
            caption: { zh: "深海生物概念", ja: "深海生物コンセプト", en: "Deep-sea creature concept" }
          },
          {
            src: "assets/projects/deep/deep-depth.webp",
            alt: "Deep deep zone concept",
            caption: { zh: "深层区域视觉方向", ja: "深層エリアの方向性", en: "Deep-zone visual direction" }
          }
        ]
      }
    ]
  },
  {
    id: "chinese",
    displayTitle: "ChineseLesson",
    year: "2025",
    cover: "assets/projects/chinese/chinese-cover.webp",
    tags: ["Unity", "Photon", "Multiplayer", "Language Game"],
    action: {
      url: "https://drive.google.com/file/d/1jCKNaUkbi4BF7_dBYgWY23Ml4jVMz2Aj/view?usp=drive_link",
      label: { zh: "Demo", ja: "Demo", en: "Demo" }
    },
    card: {
      zh: "将中文词汇练习改造成多人在线答题游戏，围绕房间同步、题型反馈、角色表现和道具干扰组织完整流程。",
      ja: "中国語語彙練習をオンライン対戦型クイズゲームに再構成したプロジェクトです。",
      en: "A multiplayer Chinese vocabulary game built around rooms, synchronized quiz flow, character presentation, and item-card disruption."
    },
    meta: {
      zh: {
        subtitle: "多人中文词汇答题游戏",
        role: "玩法策划、联网原型、题型设计、UI 流程、角色模型整理",
        status: "可运行 Demo",
        platform: "PC",
        tools: "Unity / Photon / C# / Blender"
      },
      ja: {
        subtitle: "オンライン中国語語彙クイズゲーム",
        role: "ゲーム企画、ネットワークプロトタイプ、問題形式、UI フロー、キャラクターモデル",
        status: "プレイ可能な Demo",
        platform: "PC",
        tools: "Unity / Photon / C# / Blender"
      },
      en: {
        subtitle: "Multiplayer Chinese vocabulary quiz game",
        role: "Gameplay design, network prototype, question types, UI flow, character model preparation",
        status: "Playable demo",
        platform: "PC",
        tools: "Unity / Photon / C# / Blender"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: [
            "ChineseLesson 的目标是把传统中文词汇测试从单人练习页面转化为多人在线对抗体验。玩家进入大厅、创建或加入房间、等待准备、进入课堂场景答题，并通过道具卡影响自己或对手的答题节奏。",
            "项目把“学习内容”拆成可游戏化的交互节点：题目展示、作答输入、正确/错误反馈、倒计时压力、玩家状态、道具使用和房间同步。相比只展示题库或菜单，它更强调一套从进入游戏到完成对局的完整可运行流程。"
          ],
          ja: [
            "ChineseLesson は、従来の中国語語彙テストを、オンライン対戦型のゲーム体験へ拡張することを目標にしたプロジェクトです。ロビー、ルーム、準備、授業シーン、回答、アイテムカードを一つの流れとして実装しました。",
            "学習内容を、問題表示、回答入力、フィードバック、制限時間、プレイヤー状態、カード使用、ルーム同期といったゲーム的な接点に分解しています。"
          ],
          en: [
            "ChineseLesson turns Chinese vocabulary practice into a multiplayer game loop. Players move through the main menu, lobby, room-ready state, classroom gameplay, answer input, and card usage while the session stays synchronized online.",
            "The project breaks learning into playable touchpoints: question display, input, feedback, time pressure, player state, item cards, and room synchronization. Its focus is a complete playable flow rather than an isolated quiz screen."
          ]
        }
      },
      {
        type: "facts",
        title: { zh: "核心结构", ja: "中核構造", en: "Core Structure" },
        items: [
          { label: { zh: "联机流程", ja: "オンラインフロー", en: "Network Flow" }, value: { zh: "大厅、房间、准备、同步开局", ja: "ロビー、ルーム、準備、同期開始", en: "Lobby, room, ready state, synchronized start" } },
          { label: { zh: "题型反馈", ja: "問題フィードバック", en: "Quiz Feedback" }, value: { zh: "答题输入、结果判定、倒计时压力", ja: "回答入力、判定、制限時間", en: "Input, result check, timer pressure" } },
          { label: { zh: "道具系统", ja: "アイテムカード", en: "Item Cards" }, value: { zh: "通过卡牌改变答题节奏", ja: "カードで回答テンポを変化", en: "Cards alter the pace of answering" } },
          { label: { zh: "角色制作", ja: "キャラクター制作", en: "Character Work" }, value: { zh: "参考图、Blender 模型、Unity 导入", ja: "参考、Blender、Unity 導入", en: "References, Blender models, Unity integration" } }
        ]
      },
      {
        type: "gallery",
        title: { zh: "游戏流程截图", ja: "ゲームフロー", en: "Gameplay Flow" },
        images: [
          {
            src: "assets/projects/chinese/chinese-main-menu.webp",
            alt: "ChineseLesson main menu",
            caption: { zh: "主菜单：进入大厅、设置与基础入口", ja: "メインメニュー", en: "Main menu with entry points" }
          },
          {
            src: "assets/projects/chinese/chinese-lobby.webp",
            alt: "ChineseLesson lobby",
            caption: { zh: "大厅：创建房间和加入房间", ja: "ロビーとルーム作成", en: "Lobby for creating or joining rooms" }
          },
          {
            src: "assets/projects/chinese/chinese-room-ready.webp",
            alt: "ChineseLesson room ready",
            caption: { zh: "房间等待：玩家准备状态和角色卡片", ja: "ルーム準備状態", en: "Room-ready state with player cards" }
          },
          {
            src: "assets/projects/chinese/chinese-playing.webp",
            alt: "ChineseLesson gameplay",
            caption: { zh: "课堂场景：题目、角色与对局 UI", ja: "授業シーン", en: "Classroom gameplay with quiz UI" }
          },
          {
            src: "assets/projects/chinese/chinese-answering.webp",
            alt: "ChineseLesson answering",
            caption: { zh: "答题界面：输入与即时反馈", ja: "回答画面", en: "Answer input and immediate feedback" }
          },
          {
            src: "assets/projects/chinese/chinese-card-using.webp",
            alt: "ChineseLesson card using",
            caption: { zh: "道具使用：用卡牌改变答题局势", ja: "カード使用", en: "Card usage changes the quiz situation" }
          }
        ]
      },
      {
        type: "imageText",
        title: { zh: "角色与制作流程", ja: "キャラクター制作", en: "Character and Production" },
        image: {
          src: "assets/projects/chinese/chinese-models-blender.webp",
          alt: { zh: "Blender 中的角色模型", ja: "Blender のキャラクターモデル", en: "Character models in Blender" }
        },
        body: {
          zh: [
            "项目不只停留在答题 UI，还尝试把课堂主题具象化为角色与空间。学生、老师和课堂背景共同承担视觉识别功能，让玩家能快速理解当前处于“语文课堂”的游戏语境。",
            "角色制作流程包含参考图整理、Blender 模型查看与调整、Unity 场景导入和 UI 层级整合。这里展示的不是最终美术炫技，而是从设计参考到引擎落地的完整制作证据。"
          ],
          ja: [
            "クイズ UI だけでなく、教室というテーマをキャラクターと空間で表現しています。",
            "参考画像、Blender モデル、Unity への導入、UI 階層の整理まで、制作過程を確認できる構成にしています。"
          ],
          en: [
            "The project does more than present quiz UI. It uses students, a teacher, and a classroom space to give the language-learning system a clear in-world context.",
            "The production flow includes reference collection, Blender model inspection, Unity import, and UI hierarchy integration, showing how visual direction was brought into the engine."
          ]
        }
      },
      {
        type: "gallery",
        title: { zh: "制作参考与开发截图", ja: "制作参考と開発画面", en: "References and Development Evidence" },
        images: [
          {
            src: "assets/projects/chinese/chinese-reference-teacher.webp",
            alt: "ChineseLesson teacher reference",
            caption: { zh: "教师角色参考图", ja: "教師キャラクター参考", en: "Teacher character reference" }
          },
          {
            src: "assets/projects/chinese/chinese-reference-student.webp",
            alt: "ChineseLesson student reference",
            caption: { zh: "学生角色参考图", ja: "学生キャラクター参考", en: "Student character reference" }
          },
          {
            src: "assets/projects/chinese/chinese-unity-hierarchy.webp",
            alt: "ChineseLesson Unity hierarchy",
            caption: { zh: "Unity 层级与 UI 组织", ja: "Unity 階層と UI 構成", en: "Unity hierarchy and UI organization" }
          }
        ]
      }
    ]
  },
  {
    id: "windows-murder",
    displayTitle: "WindowsMurder",
    year: "2025-2026",
    cover: "assets/projects/windows-murder/windows-stage-3.webp",
    tags: ["Unity", "Detective", "Retro UI", "LLM Dialogue"],
    action: {
      url: "https://drive.google.com/file/d/17McOh7s4ag6gRttQV7RylrL7I1JcNTfF/view?usp=drive_link",
      label: { zh: "WindowsMurder", ja: "WindowsMurder", en: "WindowsMurder" }
    },
    card: {
      zh: "发生在复古桌面系统中的推理解谜游戏。玩家通过程序角色、弹窗、文件与 LLM 对话调查回收站被害案。",
      ja: "レトロなデスクトップ上で展開する推理ゲームです。プログラム、ポップアップ、ファイル、LLM 会話から事件を調査します。",
      en: "A retro desktop detective game where programs, pop-ups, files, and LLM dialogue become clues in a murder case."
    },
    meta: {
      zh: {
        subtitle: "Windows XP 风格桌面推理解谜",
        role: "个人开发、剧本与谜题设计、桌面 UI、程序角色、LLM 对话设计",
        status: "可运行游戏",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      },
      ja: {
        subtitle: "Windows XP 風デスクトップ推理ゲーム",
        role: "個人開発、シナリオ、謎解き、デスクトップ UI、プログラムキャラクター、LLM 会話",
        status: "プレイ可能",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      },
      en: {
        subtitle: "A Windows XP-style desktop detective game",
        role: "Solo development, writing, puzzle design, desktop UI, program characters, LLM dialogue",
        status: "Playable",
        platform: "PC",
        tools: "Unity / C# / JSON Localization / LLM Prompt"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: [
            "WindowsMurder 把玩家熟悉的桌面系统改造成推理解谜空间。回收站被害后，玩家以管理员身份进入类 Windows XP 的虚拟桌面，通过开始菜单、桌面图标、文件夹、弹窗、程序证言和系统异常逐步还原事件。",
            "项目的核心不是复刻操作系统，而是把操作系统界面当成叙事和谜题容器：每个程序都可以是角色，每个文件都可能是线索，每个看似普通的错误提示都可能成为证词的一部分。后期还加入 LLM 对话阶段，让玩家用自然语言向程序角色追问。"
          ],
          ja: [
            "WindowsMurder は、見慣れたデスクトップ環境を推理ゲームの舞台に変換したプロジェクトです。プレイヤーは管理者として、Windows XP 風の仮想デスクトップ上で事件を調査します。",
            "OS を単純に再現するのではなく、デスクトップ UI を物語と謎解きの器として使っています。プログラムはキャラクターになり、ファイルやエラー表示は手がかりになります。"
          ],
          en: [
            "WindowsMurder transforms a familiar desktop operating system into a detective puzzle space. After Recycle Bin is murdered, the player enters a Windows XP-like virtual desktop as an administrator and investigates menus, icons, folders, pop-ups, program testimony, and system anomalies.",
            "The project is not just an OS imitation. It treats desktop UI as a narrative and puzzle container: programs become characters, files become evidence, and error messages can become testimony. A later stage introduces LLM dialogue so the player can question software characters in natural language."
          ]
        }
      },
      {
        type: "gallery",
        title: { zh: "视觉参考与风格建立", ja: "ビジュアル参考", en: "Visual Reference and Style" },
        images: [
          {
            src: "assets/projects/windows-murder/windows-xp-reference-1.webp",
            alt: "Windows XP style reference",
            caption: { zh: "Windows XP 风格参考：任务栏、窗口与系统质感", ja: "Windows XP 風の参考", en: "Windows XP style reference for taskbar and windows" }
          },
          {
            src: "assets/projects/windows-murder/windows-xp-reference-2.webp",
            alt: "Windows XP original reference",
            caption: { zh: "桌面构图参考：经典壁纸与图标密度", ja: "デスクトップ構図参考", en: "Desktop composition reference" }
          },
          {
            src: "assets/projects/windows-murder/windows-shader-notes.webp",
            alt: "WindowsMurder shader notes",
            caption: { zh: "视觉处理记录：让界面更接近旧系统观感", ja: "画面処理メモ", en: "Shader notes for the retro-system look" }
          }
        ]
      },
      {
        type: "gallery",
        title: { zh: "调查流程截图", ja: "調査フロー", en: "Investigation Flow" },
        images: [
          {
            src: "assets/projects/windows-murder/windows-main-menu.webp",
            alt: "WindowsMurder main menu",
            caption: { zh: "主菜单：伪装成空桌面的游戏入口", ja: "メインメニュー", en: "Main menu disguised as a desktop" }
          },
          {
            src: "assets/projects/windows-murder/windows-main-menu-open.webp",
            alt: "WindowsMurder menu opened",
            caption: { zh: "开始菜单：用熟悉操作引导玩家", ja: "スタートメニュー", en: "Start-menu interaction as onboarding" }
          },
          {
            src: "assets/projects/windows-murder/windows-stage-1.webp",
            alt: "WindowsMurder stage 1",
            caption: { zh: "阶段 1：程序角色开始提供证词", ja: "ステージ 1", en: "Stage 1: program testimony begins" }
          },
          {
            src: "assets/projects/windows-murder/windows-stage-2.webp",
            alt: "WindowsMurder stage 2",
            caption: { zh: "阶段 2：桌面图标与弹窗成为调查对象", ja: "ステージ 2", en: "Stage 2: icons and pop-ups become clues" }
          },
          {
            src: "assets/projects/windows-murder/windows-stage-3.webp",
            alt: "WindowsMurder stage 3",
            caption: { zh: "阶段 3：多程序证词与线索交叉", ja: "ステージ 3", en: "Stage 3: multiple clues and program statements" }
          },
          {
            src: "assets/projects/windows-murder/windows-stage-llm.webp",
            alt: "WindowsMurder LLM stage",
            caption: { zh: "LLM 阶段：自然语言询问程序角色", ja: "LLM 会話ステージ", en: "LLM stage for natural-language questioning" }
          }
        ]
      },
      {
        type: "imageText",
        title: { zh: "程序角色设计", ja: "プログラムキャラクター", en: "Program Character Design" },
        image: {
          src: "assets/projects/windows-murder/windows-characters-sheet.webp",
          alt: { zh: "WindowsMurder 程序角色图标精选", ja: "WindowsMurder のプログラムキャラクター", en: "Selected WindowsMurder program icons" }
        },
        body: {
          zh: [
            "WindowsMurder 的角色并不是传统人物，而是被拟人化的软件与系统部件。回收站、控制面板、注册表、记事本、浏览器、下载工具等都被设计成可对话、可怀疑、可提供线索的对象。",
            "这种角色设计让“桌面操作”自然变成“侦探行动”：打开程序像进入审讯，查看文件像查阅证物，系统弹窗像突然出现的新证词。角色图标保持低分辨率和旧系统质感，以强化复古桌面的可信度。"
          ],
          ja: [
            "WindowsMurder のキャラクターは人間ではなく、擬人化されたソフトウェアとシステム部品です。",
            "プログラムを開く行為が尋問になり、ファイル確認が証拠調査になり、ポップアップが新しい証言になります。"
          ],
          en: [
            "The characters in WindowsMurder are personified software and system components rather than traditional people. Recycle Bin, Control Panel, Registry, Notepad, browsers, and download tools can all speak, hide information, or become suspects.",
            "This character approach turns desktop operation into detective action: opening a program becomes interrogation, checking files becomes evidence review, and pop-ups become sudden testimony."
          ]
        }
      }
    ]
  },
  {
    id: "clavaro",
    displayTitle: "Clavaro",
    year: "2025-2026",
    cover: "assets/projects/clavaro/clavaro-cover.webp",
    tags: ["Unity", "Roguelike", "Deckbuilding", "Claw Machine"],
    action: {
      url: "https://drive.google.com/file/d/1-h4jtFkcxw6k6-Ydd2SLgbKjpCylJnVn/view?usp=drive_link",
      label: { zh: "Clavaro", ja: "Clavaro", en: "Clavaro" }
    },
    card: {
      zh: "把抓娃娃机的物理不确定性和 Roguelike 构筑结合，围绕抓取、结算、商店、球池与遗物形成循环。",
      ja: "クレーンゲームの不確定性と Roguelike 構築を組み合わせたプロジェクトです。",
      en: "A roguelike claw-machine game built around grabbing, scoring, shop choices, ball-pool building, and relic synergies."
    },
    meta: {
      zh: {
        subtitle: "抓娃娃机 + Roguelike 球池构筑",
        role: "系统设计、玩法原型、UI/商店/结算流程、球与遗物数据、程序实现",
        status: "可运行 Demo",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      },
      ja: {
        subtitle: "クレーンゲーム + Roguelike 構築",
        role: "システム設計、プロトタイプ、UI/ショップ/精算、ボールとレリックデータ、実装",
        status: "プレイ可能な Demo",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      },
      en: {
        subtitle: "Claw machine plus roguelike ball-pool building",
        role: "System design, gameplay prototype, UI/shop/scoring flow, ball and relic data, programming",
        status: "Playable demo",
        platform: "PC",
        tools: "Unity / C# / ScriptableObject / DOTween"
      }
    },
    blocks: [
      {
        type: "text",
        title: { zh: "项目概述", ja: "概要", en: "Overview" },
        body: {
          zh: [
            "Clavaro 的核心想法是把抓娃娃机的手感和 Roguelike 构筑结合起来。玩家不是直接选择卡牌出牌，而是控制钩爪从球池中抓取不同功能的小球，再通过结算、商店、遗物和球池调整逐步构筑自己的得分路线。",
            "项目的难点在于平衡“物理抓取的不确定性”和“策略构筑的可控性”。如果完全随机，玩家会失去策略感；如果完全可控，抓娃娃机的紧张感又会消失。因此系统围绕抓取次数、目标分数、基础分球、倍率球、特殊球、商店刷新和遗物触发建立长期循环。"
          ],
          ja: [
            "Clavaro は、クレーンゲームの手触りと Roguelike 構築を組み合わせたプロジェクトです。プレイヤーはボールを掴み、精算、ショップ、レリック、ボールプール調整を通じて得点ルートを構築します。",
            "物理的な不確定性と戦略的な制御感のバランスが中心課題です。ランダムすぎると戦略が弱くなり、制御しすぎるとクレーンゲームらしさが失われます。"
          ],
          en: [
            "Clavaro combines claw-machine control with roguelike construction. Instead of directly playing cards, the player controls a claw, grabs balls with different scoring functions, and develops a build through settlement, shops, relics, and ball-pool editing.",
            "The main design problem is balancing physical uncertainty with strategic control. Too much randomness removes planning; too much control removes the tension of a claw machine. The loop is built around grabs, target score, base balls, multipliers, special balls, shop rerolls, and relic triggers."
          ]
        }
      },
      {
        type: "facts",
        title: { zh: "系统循环", ja: "システムループ", en: "System Loop" },
        items: [
          { label: { zh: "回合目标", ja: "ラウンド目標", en: "Round Goal" }, value: { zh: "有限抓取次数内达到目标分", ja: "限られた回数で目標点へ", en: "Reach the target score within limited grabs" } },
          { label: { zh: "结算逻辑", ja: "精算", en: "Settlement" }, value: { zh: "基础分、倍率、特殊球效果叠加", ja: "基礎点、倍率、特殊効果", en: "Base score, multipliers, and special effects stack" } },
          { label: { zh: "商店构筑", ja: "ショップ構築", en: "Shop Building" }, value: { zh: "购买、移除、刷新、获得遗物", ja: "購入、削除、リロール、レリック", en: "Buy, remove, reroll, and acquire relics" } },
          { label: { zh: "长期变化", ja: "長期変化", en: "Long-Term Change" }, value: { zh: "球池和遗物组合改变抓取价值", ja: "ボールプールとレリックが価値を変える", en: "Ball pool and relics change each grab's value" } }
        ]
      },
      {
        type: "gallery",
        title: { zh: "主要界面", ja: "主要画面", en: "Main Screens" },
        images: [
          {
            src: "assets/projects/clavaro/clavaro-main-menu.webp",
            alt: "Clavaro main menu",
            caption: { zh: "主菜单：明确入口和街机氛围", ja: "メインメニュー", en: "Main menu with arcade tone" }
          },
          {
            src: "assets/projects/clavaro/clavaro-playing.webp",
            alt: "Clavaro gameplay",
            caption: { zh: "游玩中：抓取区域、目标分、当前分与球池信息", ja: "プレイ画面", en: "Gameplay area with score and ball-pool information" }
          },
          {
            src: "assets/projects/clavaro/clavaro-shopping.webp",
            alt: "Clavaro shop",
            caption: { zh: "商店：购买球、移除球、遗物与刷新选择", ja: "ショップ", en: "Shop choices for balls, removal, relics, and rerolls" }
          },
          {
            src: "assets/projects/clavaro/clavaro-round-result.webp",
            alt: "Clavaro round result",
            caption: { zh: "结算：展示抓取结果和得分构成", ja: "精算画面", en: "Round result and scoring breakdown" }
          },
          {
            src: "assets/projects/clavaro/clavaro-settings.webp",
            alt: "Clavaro settings",
            caption: { zh: "设置：音量、语言和显示相关选项", ja: "設定画面", en: "Settings for audio, language, and display" }
          },
          {
            src: "assets/projects/clavaro/clavaro-mascot.webp",
            alt: "Clavaro mascot",
            caption: { zh: "吉祥物：强化街机抓取主题的视觉识别", ja: "マスコット", en: "Mascot supporting the arcade-claw identity" }
          }
        ]
      },
      {
        type: "imageText",
        title: { zh: "球池与遗物设计", ja: "ボールプールとレリック", en: "Ball Pool and Relics" },
        image: {
          src: "assets/projects/clavaro/clavaro-balls-sheet.webp",
          alt: { zh: "Clavaro 球体素材精选", ja: "Clavaro ボール素材", en: "Selected Clavaro ball sprites" }
        },
        body: {
          zh: [
            "Clavaro 的球不是单纯美术素材，而是构筑系统的基本单位。基础分球、倍率球、一次性效果球、风险球和特殊触发球共同决定一局中每次抓取的价值。",
            "我没有把全部球和道具都堆在页面里，而是选取能代表系统方向的样本展示：分数、倍率、风险、奖励、干扰和主题化物件。这样既能展示素材规模，也能保持作品集页面干净。"
          ],
          ja: [
            "Clavaro のボールは単なる素材ではなく、構築システムの基本単位です。",
            "全素材を並べるのではなく、得点、倍率、リスク、報酬、妨害を表す代表的なサンプルだけを選んでいます。"
          ],
          en: [
            "The balls in Clavaro are not just visual assets; they are the basic units of the build system. Base-score balls, multipliers, one-shot effects, risk balls, and special triggers shape the value of each grab.",
            "Instead of dumping every item into the page, this portfolio shows a curated sample that communicates score, multiplier, risk, reward, disruption, and theme while keeping the layout clean."
          ]
        }
      },
      {
        type: "gallery",
        title: { zh: "素材与构筑证据", ja: "素材と構築", en: "Assets and Build Evidence" },
        images: [
          {
            src: "assets/projects/clavaro/clavaro-balls-sheet.webp",
            alt: "Clavaro selected balls",
            caption: { zh: "精选球体：展示球池构筑的基本单位", ja: "代表的なボール素材", en: "Selected balls as the base units of the pool" }
          },
          {
            src: "assets/projects/clavaro/clavaro-relics-sheet.webp",
            alt: "Clavaro selected relics",
            caption: { zh: "精选遗物：展示触发链和长期成长方向", ja: "代表的なレリック素材", en: "Selected relics showing trigger chains and long-term growth" }
          },
          {
            src: "assets/projects/clavaro/clavaro-item-preview-a.webp",
            alt: "Clavaro item tooltip",
            caption: { zh: "道具提示：只展示代表性 UI，不铺满所有条目", ja: "アイテム説明 UI", en: "Representative item tooltip UI" }
          }
        ]
      }
    ]
  }
];
