window.PORTFOLIO_PROJECTS = [
  {
    id: "deep",
    displayTitle: "Deep",
    year: "2024",
    cover: "assets/projects/deep/deep-ruins.webp",
    tags: ["Unity", "GDD", "Pixel Art", "Unfinished"],
    card: {
      zh: "深海探索题材的像素风动作冒险企划，内容包括世界观设定、区域推进、敌方生物与数值表设计。",
      ja: "深海探索を題材にしたピクセルアート系アクションアドベンチャー企画。世界観、エリア進行、敵生態、数値表を整理しています。",
      en: "A pixel-art action adventure concept for deep-sea exploration, with worldbuilding, area progression, enemy ecology, and balance tables."
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
        subtitle: "未完成プロジェクト / 企画書資料",
        role: "システム企画、GDD、レベルと敵キャラクター設計",
        status: "詳細資料は後日追加予定",
        platform: "PC プロトタイプ",
        tools: "Unity / Word / Excel"
      },
      en: {
        subtitle: "Unfinished project / Design document",
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
            "Deep 是一份围绕海底文明、遗迹探索和深海生态展开的动作冒险企划。目前项目以设计文档形式呈现，记录世界观设定、区域推进、敌方生态、道具表和数值表等早期设计内容。",
            "该项目尚未进入完整原型阶段，因此页面以现有企划材料为主，保留概念图、系统方向和设计范围，不对未完成玩法做额外包装。"
          ],
          ja: [
            "Deep は、海底文明、遺跡探索、深海生態を扱うアクションアドベンチャー企画です。現在は設計文書として、世界観、エリア進行、敵生態、アイテム表、数値表を整理しています。",
            "まだ完全なプロトタイプ段階には入っていないため、このページでは既存の企画資料、コンセプト画像、システム方針、設計範囲を中心に掲載しています。"
          ],
          en: [
            "Deep is an action adventure concept about underwater civilization, ruin exploration, and deep-sea ecology. The current page presents design-document material, including worldbuilding, area progression, enemy ecology, item sheets, and balance-table planning.",
            "The project has not reached a full prototype stage, so the page focuses on existing concept material, system direction, and design scope."
          ]
        }
      },
      {
        type: "text",
        title: { zh: "设计意图", ja: "設計意図", en: "Design Intent" },
        body: {
          zh: [
            "Deep 的关卡推进以潜入深度为主轴。不同深度对应生物类型、资源分布、环境风险和遗迹信息，玩家通过探索逐步建立对海域规则的理解。",
            "环保主题通过资源稀缺、生态关系和区域压力呈现。玩家在推进过程中需要权衡探索收益、风险暴露和补给消耗。"
          ],
          ja: [
            "Deep のエリア進行は潜行深度を軸に設計しています。深度ごとに生物、資源、環境リスク、遺跡情報を変え、探索を通して海域のルールを理解できる構成にしています。",
            "環境テーマは、資源の不足、生態関係、エリアごとの圧力として扱います。プレイヤーは探索報酬、危険への露出、補給消費を判断しながら進行します。"
          ],
          en: [
            "Deep uses diving depth as the main structure for progression. Each depth layer changes the creature set, resource distribution, environmental risk, and ruin information, so players learn the rules of the sea through exploration.",
            "The environmental theme is handled through resource scarcity, ecological relationships, and area pressure. Progression asks the player to weigh exploration rewards, exposure to danger, and supply consumption."
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
      zh: "多人在线中文词汇答题原型，围绕房间同步、题型反馈、角色表现和道具干扰组织完整对局流程。",
      ja: "オンライン対戦型の中国語語彙クイズ原型。ルーム同期、問題フィードバック、キャラクター表示、アイテムカードを一連の対局フローに組み込んでいます。",
      en: "A multiplayer Chinese vocabulary quiz prototype with room synchronization, question feedback, character presentation, and item-card disruption."
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
            "ChineseLesson 是一款多人在线中文词汇答题原型。玩家从大厅进入房间，完成准备后进入课堂场景答题，并通过道具卡影响自己或对手的答题节奏。",
            "项目将词汇练习拆分为题目展示、作答输入、正确/错误反馈、倒计时、玩家状态、道具使用和房间同步等节点，目标是完成从匹配到结算的可运行对局流程。"
          ],
          ja: [
            "ChineseLesson は、オンライン対戦型の中国語語彙クイズ原型です。プレイヤーはロビーからルームに入り、準備完了後に授業シーンで問題に回答し、アイテムカードで自分や相手の回答テンポに干渉します。",
            "語彙練習を、問題表示、回答入力、正誤フィードバック、制限時間、プレイヤー状態、カード使用、ルーム同期に分解し、マッチングから対局終了まで動く流れとして実装しています。"
          ],
          en: [
            "ChineseLesson is a multiplayer Chinese vocabulary quiz prototype. Players enter a room from the lobby, ready up, answer questions in a classroom scene, and use item cards to affect their own pace or disrupt opponents.",
            "The quiz flow is split into question display, answer input, right/wrong feedback, timer pressure, player state, card usage, and room synchronization. The goal is a playable match flow from entry to result."
          ]
        }
      },
      {
        type: "text",
        title: { zh: "设计意图", ja: "設計意図", en: "Design Intent" },
        body: {
          zh: [
            "ChineseLesson 的设计方向是把词汇练习做成适合联机对抗和直播观看的派对答题。课堂场景、限时作答、玩家状态和道具干扰共同控制节奏，使学习内容具备可观察的失败点和反转空间。",
            "题型设计参考了直播中常见的语言失误场景，例如写不出常用汉字、误判基础词义、在限时压力下犹豫。项目利用这些可识别的错误制造对局反馈，同时保留词汇复习的功能。"
          ],
          ja: [
            "設計方針は、語彙練習をオンライン対戦と配信視聴に向いたパーティークイズとして成立させることです。授業シーン、制限時間、プレイヤー状態、アイテムカードでテンポを管理し、失敗や逆転が観客にも伝わる構成にしています。",
            "問題形式は、配信中によく起きる言語ミスを参考にしています。よく使う漢字が書けない、基本語彙を取り違える、制限時間で迷う、といった場面を対局フィードバックに利用し、語彙復習の機能も残しています。"
          ],
          en: [
            "ChineseLesson treats vocabulary practice as a party quiz for online matches and livestream viewing. The classroom scene, timed answers, player states, and item cards control the pace and create visible failure points and comeback moments.",
            "The question design references language mistakes often seen during streams: missing a common character, misreading a basic word, or hesitating under time pressure. These mistakes create match feedback while keeping the vocabulary review function intact."
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
            "角色与场景用于强化课堂语境。学生、老师和教室背景承担视觉识别功能，帮助玩家快速判断当前的答题环境、角色状态和对局阶段。",
            "制作流程包括参考图整理、Blender 模型检查与调整、Unity 场景导入和 UI 层级整合。页面展示重点放在资产从设计参考到引擎落地的过程证据。"
          ],
          ja: [
            "キャラクターと教室空間は、現在の回答環境、プレイヤー状態、対局フェーズを読み取りやすくするために配置しています。",
            "制作工程は、参考画像の整理、Blender モデルの確認と調整、Unity への導入、UI 階層の整理までを含みます。ページでは、デザイン参考からエンジン実装までの過程を確認できるようにしています。"
          ],
          en: [
            "Characters and classroom space define the quiz context. Students, the teacher, and the room background help players read the answer environment, character state, and match phase.",
            "The production flow includes reference collection, Blender model checks and adjustments, Unity import, and UI hierarchy integration. The page focuses on evidence from design reference to engine implementation."
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
      zh: "复古桌面系统题材的推理解谜游戏。玩家通过程序角色、弹窗、文件和 LLM 对话调查回收站被害案。",
      ja: "レトロなデスクトップ環境を使った推理ゲーム。プログラム、ポップアップ、ファイル、LLM 会話を手がかりとして扱います。",
      en: "A retro desktop detective game that uses programs, pop-ups, files, and LLM dialogue as investigation material."
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
            "WindowsMurder 将类 Windows XP 桌面作为推理解谜场景。回收站被害后，玩家以管理员身份进入虚拟桌面，通过开始菜单、桌面图标、文件夹、弹窗、程序证言和系统异常还原事件。",
            "系统界面承担叙事和谜题功能。程序被设定为角色，文件用于承载证据，错误提示可触发证词线索；后期阶段加入 LLM 对话，让玩家用自然语言向程序角色追问线索。"
          ],
          ja: [
            "WindowsMurder は、Windows XP 風の仮想デスクトップを推理ゲームの場面として使用します。回収箱が被害に遭った後、プレイヤーは管理者として入り、スタートメニュー、アイコン、フォルダ、ポップアップ、プログラム証言、システム異常を調査します。",
            "デスクトップ UI は、物語と謎解きの機能を持ちます。プログラムはキャラクターとして扱い、ファイルは証拠を保持し、エラー表示は証言の発生点になります。後半では LLM 会話を追加し、自然言語でプログラムキャラクターに質問できます。"
          ],
          en: [
            "WindowsMurder uses a Windows XP-like virtual desktop as a detective puzzle space. After Recycle Bin is murdered, the player enters as an administrator and investigates the start menu, icons, folders, pop-ups, program testimony, and system anomalies.",
            "The desktop UI carries narrative and puzzle functions. Programs act as characters, files hold evidence, and error messages can trigger testimony. A later stage adds LLM dialogue so the player can question software characters in natural language."
          ]
        }
      },
      {
        type: "text",
        title: { zh: "设计意图", ja: "設計意図", en: "Design Intent" },
        body: {
          zh: [
            "设计重点是把常见桌面操作转化为调查动作。打开文件夹对应证据检索，查看弹窗对应事件触发，阅读错误提示对应线索识别，和程序角色对话对应询问证人。",
            "LLM 对话服务于程序角色设定。玩家可以自由组织问题，系统则通过角色身份、可知信息和剧情条件限制回答范围，避免开放对话破坏推理节奏。"
          ],
          ja: [
            "設計の中心は、一般的なデスクトップ操作を調査行動に置き換えることです。フォルダを開く操作は証拠確認、ポップアップ確認はイベント発生、エラー表示の読解は手がかりの特定、プログラムとの会話は聞き込みとして機能します。",
            "LLM 会話はプログラムキャラクターの設定に合わせて配置しています。プレイヤーは自由な文章で質問できますが、役割、所持情報、進行条件によって回答範囲を制限し、推理のテンポが崩れないようにしています。"
          ],
          en: [
            "The design maps common desktop actions to investigation actions. Opening folders is evidence retrieval, checking pop-ups is event discovery, reading error messages is clue identification, and talking to program characters is witness questioning.",
            "LLM dialogue supports the program-character setup. Players can write their own questions, while role, knowledge range, and story conditions limit the answers so open dialogue does not break the deduction rhythm."
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
            caption: { zh: "视觉处理记录：旧系统界面质感调整", ja: "画面処理メモ", en: "Shader notes for the retro-system look" }
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
            "WindowsMurder 的角色来自软件和系统部件。回收站、控制面板、注册表、记事本、浏览器和下载工具被设计为可对话、可怀疑、可提供线索的调查对象。",
            "程序角色将桌面操作转化为推理行为：打开程序对应询问，查看文件对应查验证物，系统弹窗对应新增证词。角色图标保留低分辨率和旧系统质感，以维持复古桌面的可信度。"
          ],
          ja: [
            "WindowsMurder のキャラクターは、ソフトウェアとシステム部品をもとにしています。回収箱、コントロールパネル、レジストリ、メモ帳、ブラウザ、ダウンロードツールを、会話、疑い、証言の対象として扱います。",
            "プログラムを開く操作は聞き込み、ファイル確認は証拠調査、ポップアップは新しい証言として機能します。低解像度のアイコンと旧 OS 風の質感で、レトロなデスクトップの説得力を保っています。"
          ],
          en: [
            "WindowsMurder uses software and system components as characters. Recycle Bin, Control Panel, Registry, Notepad, browsers, and download tools can speak, withhold information, or become suspects.",
            "Program characters map desktop operation to deduction: opening a program is questioning, checking files is evidence review, and pop-ups can introduce new testimony. Low-resolution icons and old-system styling keep the desktop setting consistent."
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
      zh: "抓娃娃机物理操作与 Roguelike 构筑结合的原型，围绕抓取、结算、商店、球池和遗物建立循环。",
      ja: "クレーンゲームの物理操作と Roguelike 構築を組み合わせた原型。キャッチ、精算、ショップ、ボールプール、レリックでループを構成しています。",
      en: "A claw-machine and roguelike prototype with a loop based on grabbing, scoring, shop choices, ball-pool editing, and relic triggers."
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
            "Clavaro 将抓娃娃机的物理操作引入 Roguelike 构筑。玩家控制钩爪从球池中抓取不同功能的小球，再通过结算、商店、遗物和球池调整建立得分路线。",
            "系统需要同时保留抓取的不确定性和构筑的可规划性。抓取次数、目标分数、基础分球、倍率球、特殊球、商店刷新和遗物触发共同构成长期循环。"
          ],
          ja: [
            "Clavaro は、クレーンゲームの物理操作を Roguelike 構築に取り入れた原型です。プレイヤーはクレーンで機能の異なるボールを掴み、精算、ショップ、レリック、ボールプール調整を通じて得点ルートを作ります。",
            "システムでは、キャッチの不確定性と構築の計画性を同時に扱います。キャッチ回数、目標点、基礎点ボール、倍率ボール、特殊ボール、ショップ更新、レリック発動が長期ループを構成します。"
          ],
          en: [
            "Clavaro brings claw-machine control into a roguelike build structure. The player controls a claw, grabs balls with different scoring functions, then builds a scoring route through settlement, shops, relics, and ball-pool editing.",
            "The system keeps physical uncertainty and strategic planning in the same loop. Grab count, target score, base-score balls, multipliers, special balls, shop rerolls, and relic triggers define the long-term progression."
          ]
        }
      },
      {
        type: "text",
        title: { zh: "设计意图", ja: "設計意図", en: "Design Intent" },
        body: {
          zh: [
            "项目参考了 Balatro 的短回合节奏、数值增长和连锁反馈，但交互载体改为钩爪操作与球池构筑。结果由抓取表现、球体组合和遗物触发共同决定。"
          ],
          ja: [
            "Balatro からは、短いラウンド、数値成長、効果連鎖のテンポを参考にしました。Clavaro はクレーン操作とボールプール構築を交互に扱い、キャッチ結果、ボール構成、レリック発動で得点を決めます。"
          ],
          en: [
            "The project references Balatro's short round structure, numerical growth, and chained feedback. Clavaro changes the interaction layer to claw control and ball-pool construction, so the result comes from grab performance, ball composition, and relic triggers."
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
            caption: { zh: "吉祥物：补充街机抓取主题的视觉识别", ja: "マスコット", en: "Mascot supporting the arcade-claw identity" }
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
            "Clavaro 的球体按功能进入构筑系统。基础分球、倍率球、一次性效果球、风险球和特殊触发球分别影响抓取收益、结算顺序和后续构筑选择。",
            "页面展示的是经过筛选的代表性球体与遗物，覆盖分数、倍率、风险、奖励、干扰和主题化物件等类型，用于说明球池构筑的功能范围和视觉分类。"
          ],
          ja: [
            "Clavaro のボールは、機能ごとに構築システムへ入ります。基礎点ボール、倍率ボール、一回限りの効果ボール、リスクボール、特殊発動ボールが、キャッチ報酬、精算順、後続の構築選択に影響します。",
            "ページでは、得点、倍率、リスク、報酬、妨害、テーマ性を示す代表的なボールとレリックを掲載し、ボールプール構築の機能範囲と視覚分類を説明しています。"
          ],
          en: [
            "Clavaro's balls enter the build system by function. Base-score balls, multipliers, one-shot effects, risk balls, and special triggers affect grab value, scoring order, and later build choices.",
            "The page shows selected balls and relics that cover score, multiplier, risk, reward, disruption, and theme. This explains the functional range and visual categories of the ball-pool system."
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
            caption: { zh: "精选球体：球池构筑的主要功能类型", ja: "ボールプール構築の主要機能タイプ", en: "Selected balls covering the main pool functions" }
          },
          {
            src: "assets/projects/clavaro/clavaro-relics-sheet.webp",
            alt: "Clavaro selected relics",
            caption: { zh: "精选遗物：展示触发链和长期成长方向", ja: "発動連鎖と長期成長を示すレリック", en: "Selected relics for trigger chains and long-term growth" }
          },
          {
            src: "assets/projects/clavaro/clavaro-item-preview-a.webp",
            alt: "Clavaro item tooltip",
            caption: { zh: "道具提示：代表性条目和说明 UI", ja: "アイテム説明 UI", en: "Representative item tooltip UI" }
          }
        ]
      }
    ]
  }
];
