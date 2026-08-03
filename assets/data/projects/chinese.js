window.PORTFOLIO_PROJECT = {
  "id": "chinese",
  "displayTitle": "ChineseLesson",
  "year": "2025",
  "cover": "assets/projects/chinese/chinese-cover.webp",
  "tags": [
    "Unity",
    "Photon",
    "Multiplayer",
    "Language Game"
  ],
  "action": {
    "url": "https://drive.google.com/file/d/1jCKNaUkbi4BF7_dBYgWY23Ml4jVMz2Aj/view?usp=drive_link",
    "label": {
      "zh": "Demo",
      "ja": "Demo",
      "en": "Demo"
    }
  },
  "card": {
    "zh": "多人在线中文词汇答题原型，围绕房间同步、题型反馈、角色表现和道具干扰组织完整对局流程。",
    "ja": "オンライン対戦型の中国語語彙クイズ原型。ルーム同期、問題フィードバック、キャラクター表示、アイテムカードを一連の対局フローに組み込んでいます。",
    "en": "A multiplayer Chinese vocabulary quiz prototype with room synchronization, question feedback, character presentation, and item-card disruption."
  },
  "meta": {
    "zh": {
      "subtitle": "多人中文词汇答题游戏",
      "role": "玩法策划、联网原型、题型设计、UI 流程、角色概念与模型整理",
      "status": "可运行 Demo",
      "platform": "PC",
      "tools": "Unity / Photon / C# / Blender"
    },
    "ja": {
      "subtitle": "オンライン中国語語彙クイズゲーム",
      "role": "ゲーム企画、ネットワークプロトタイプ、問題形式、UI フロー、キャラクターコンセプトとモデル",
      "status": "プレイ可能な Demo",
      "platform": "PC",
      "tools": "Unity / Photon / C# / Blender"
    },
    "en": {
      "subtitle": "Multiplayer Chinese vocabulary quiz game",
      "role": "Gameplay design, network prototype, question types, UI flow, character concepts and model preparation",
      "status": "Playable demo",
      "platform": "PC",
      "tools": "Unity / Photon / C# / Blender"
    }
  },
  "blocks": [
    {
      "type": "text",
      "title": {
        "zh": "项目概述",
        "ja": "概要",
        "en": "Overview"
      },
      "body": {
        "zh": [
          "ChineseLesson 是一款多人在线中文词汇答题原型。玩家从大厅进入房间，完成准备后进入课堂场景答题，并通过道具卡影响自己或对手的答题节奏。",
          "项目将词汇练习拆分为题目展示、作答输入、正确/错误反馈、倒计时、玩家状态、道具使用和房间同步等节点，目标是完成从匹配到结算的可运行对局流程。"
        ],
        "ja": [
          "ChineseLesson は、オンライン対戦型の中国語語彙クイズ原型です。プレイヤーはロビーからルームに入り、準備完了後に授業シーンで問題に回答し、アイテムカードで自分や相手の回答テンポに干渉します。",
          "語彙練習を、問題表示、回答入力、正誤フィードバック、制限時間、プレイヤー状態、カード使用、ルーム同期に分解し、マッチングから対局終了まで動く流れとして実装しています。"
        ],
        "en": [
          "ChineseLesson is a multiplayer Chinese vocabulary quiz prototype. Players enter a room from the lobby, ready up, answer questions in a classroom scene, and use item cards to affect their own pace or disrupt opponents.",
          "The quiz flow is split into question display, answer input, right/wrong feedback, timer pressure, player state, card usage, and room synchronization. The goal is a playable match flow from entry to result."
        ]
      }
    },
    {
      "type": "text",
      "title": {
        "zh": "设计意图",
        "ja": "設計意図",
        "en": "Design Intent"
      },
      "body": {
        "zh": [
          "ChineseLesson 的设计方向是把词汇练习做成适合联机对抗和直播观看的派对答题。课堂场景、限时作答、玩家状态和道具干扰共同控制节奏，使学习内容具备可观察的失败点和反转空间。",
          "题型设计参考了直播中常见的语言失误场景，例如写不出常用汉字、误判基础词义、在限时压力下犹豫。项目利用这些可识别的错误制造对局反馈，同时保留词汇复习的功能。"
        ],
        "ja": [
          "設計方針は、語彙練習をオンライン対戦と配信視聴に向いたパーティークイズとして成立させることです。授業シーン、制限時間、プレイヤー状態、アイテムカードでテンポを管理し、失敗や逆転が観客にも伝わる構成にしています。",
          "問題形式は、配信中によく起きる言語ミスを参考にしています。よく使う漢字が書けない、基本語彙を取り違える、制限時間で迷う、といった場面を対局フィードバックに利用し、語彙復習の機能も残しています。"
        ],
        "en": [
          "ChineseLesson treats vocabulary practice as a party quiz for online matches and livestream viewing. The classroom scene, timed answers, player states, and item cards control the pace and create visible failure points and comeback moments.",
          "The question design references language mistakes often seen during streams: missing a common character, misreading a basic word, or hesitating under time pressure. These mistakes create match feedback while keeping the vocabulary review function intact."
        ]
      }
    },
    {
      "type": "embedVideo",
      "title": {
        "zh": "演示视频",
        "ja": "プレイデモ",
        "en": "Gameplay Demo"
      },
      "url": "https://www.youtube-nocookie.com/embed/6GNpCgCDrAk",
      "externalUrl": "https://youtu.be/6GNpCgCDrAk",
      "caption": {
        "zh": "完整对局演示；如果嵌入播放器暂时无法播放，可通过下方链接在 YouTube 中打开。",
        "ja": "対局フローのデモです。埋め込み再生できない場合は、下のリンクから YouTube で開けます。",
        "en": "A demonstration of the match flow. If embedded playback is unavailable, open it on YouTube with the link below."
      }
    },
    {
      "type": "facts",
      "title": {
        "zh": "核心结构",
        "ja": "中核構造",
        "en": "Core Structure"
      },
      "items": [
        {
          "label": {
            "zh": "联机流程",
            "ja": "オンラインフロー",
            "en": "Network Flow"
          },
          "value": {
            "zh": "大厅、房间、准备、同步开局",
            "ja": "ロビー、ルーム、準備、同期開始",
            "en": "Lobby, room, ready state, synchronized start"
          }
        },
        {
          "label": {
            "zh": "题型反馈",
            "ja": "問題フィードバック",
            "en": "Quiz Feedback"
          },
          "value": {
            "zh": "答题输入、结果判定、倒计时压力",
            "ja": "回答入力、判定、制限時間",
            "en": "Input, result check, timer pressure"
          }
        },
        {
          "label": {
            "zh": "道具系统",
            "ja": "アイテムカード",
            "en": "Item Cards"
          },
          "value": {
            "zh": "通过卡牌改变答题节奏",
            "ja": "カードで回答テンポを変化",
            "en": "Cards alter the pace of answering"
          }
        },
        {
          "label": {
            "zh": "角色制作",
            "ja": "キャラクター制作",
            "en": "Character Work"
          },
          "value": {
            "zh": "参考图、Blender 模型、Unity 导入",
            "ja": "参考、Blender、Unity 導入",
            "en": "References, Blender models, Unity integration"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "游戏流程截图",
        "ja": "ゲームフロー",
        "en": "Gameplay Flow"
      },
      "images": [
        {
          "src": "assets/projects/chinese/chinese-main-menu.webp",
          "alt": "ChineseLesson main menu",
          "caption": {
            "zh": "主菜单：进入大厅、设置与基础入口",
            "ja": "メインメニュー",
            "en": "Main menu with entry points"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-lobby.webp",
          "alt": "ChineseLesson lobby",
          "caption": {
            "zh": "大厅：创建房间和加入房间",
            "ja": "ロビーとルーム作成",
            "en": "Lobby for creating or joining rooms"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-room-ready.webp",
          "alt": "ChineseLesson room ready",
          "caption": {
            "zh": "房间等待：玩家准备状态和角色卡片",
            "ja": "ルーム準備状態",
            "en": "Room-ready state with player cards"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-playing.webp",
          "alt": "ChineseLesson gameplay",
          "caption": {
            "zh": "课堂场景：题目、角色与对局 UI",
            "ja": "授業シーン",
            "en": "Classroom gameplay with quiz UI"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-answering.webp",
          "alt": "ChineseLesson answering",
          "caption": {
            "zh": "答题界面：输入与即时反馈",
            "ja": "回答画面",
            "en": "Answer input and immediate feedback"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-card-using.webp",
          "alt": "ChineseLesson card using",
          "caption": {
            "zh": "道具使用：用卡牌改变答题局势",
            "ja": "カード使用",
            "en": "Card usage changes the quiz situation"
          }
        }
      ]
    },
    {
      "type": "imageText",
      "title": {
        "zh": "角色与制作流程",
        "ja": "キャラクター制作",
        "en": "Character and Production"
      },
      "image": {
        "src": "assets/projects/chinese/chinese-models-blender.webp",
        "alt": {
          "zh": "Blender 中的角色模型",
          "ja": "Blender のキャラクターモデル",
          "en": "Character models in Blender"
        }
      },
      "body": {
        "zh": [
          "角色与场景用于强化课堂语境。学生、老师和教室背景承担视觉识别功能，帮助玩家快速判断当前的答题环境、角色状态和对局阶段。",
          "制作流程包括角色三视图整理、Blender 模型检查与调整、Unity 场景导入和 UI 层级整合。页面展示重点放在资产从概念设计到引擎落地的过程证据。"
        ],
        "ja": [
          "キャラクターと教室空間は、現在の回答環境、プレイヤー状態、対局フェーズを読み取りやすくするために配置しています。",
          "制作工程は、キャラクター三面図の整理、Blender モデルの確認と調整、Unity への導入、UI 階層の整理までを含みます。ページでは、コンセプトデザインからエンジン実装までの過程を確認できるようにしています。"
        ],
        "en": [
          "Characters and classroom space define the quiz context. Students, the teacher, and the room background help players read the answer environment, character state, and match phase.",
          "The production flow includes character turnaround sheets, Blender model checks and adjustments, Unity import, and UI hierarchy integration. The page shows the path from concept design to engine implementation."
        ]
      }
    },
    {
      "type": "gallery",
      "title": {
        "zh": "角色概念与三视图",
        "ja": "キャラクターコンセプトと三面図",
        "en": "Character Concepts and Turnarounds"
      },
      "images": [
        {
          "src": "assets/projects/chinese/chinese-concept-teacher.webp",
          "fit": "contain",
          "alt": {
            "zh": "教师角色正面、侧面与背面概念图",
            "ja": "教師キャラクターの正面・側面・背面コンセプト",
            "en": "Teacher character front, side, and back concept views"
          },
          "caption": {
            "zh": "教师：用于模型比例、服装与轮廓确认的三视图",
            "ja": "教師：モデルの比率、衣装、シルエットを確認する三面図",
            "en": "Teacher turnaround for model proportion, clothing, and silhouette"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-concept-female-student.webp",
          "fit": "contain",
          "alt": {
            "zh": "女学生角色正面、侧面与背面概念图",
            "ja": "女子生徒キャラクターの正面・側面・背面コンセプト",
            "en": "Female student character front, side, and back concept views"
          },
          "caption": {
            "zh": "女学生：以发型、制服和色彩区分课堂角色",
            "ja": "女子生徒：髪型、制服、配色で教室内の役割を区別",
            "en": "Female student concept using hair, uniform, and color for recognition"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-concept-male-student.webp",
          "fit": "contain",
          "alt": {
            "zh": "男学生角色正面、侧面与背面概念图",
            "ja": "男子生徒キャラクターの正面・側面・背面コンセプト",
            "en": "Male student character front, side, and back concept views"
          },
          "caption": {
            "zh": "男学生：为 Blender 建模准备的比例与服装结构",
            "ja": "男子生徒：Blender モデリング用の比率と衣装構造",
            "en": "Male student proportions and clothing structure for Blender modeling"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "制作参考与开发截图",
        "ja": "制作参考と開発画面",
        "en": "References and Development Evidence"
      },
      "images": [
        {
          "src": "assets/projects/chinese/chinese-reference-teacher.webp",
          "alt": "ChineseLesson teacher reference",
          "source": {
            "site": {
              "zh": "千图网",
              "ja": "千图网（58pic.com）",
              "en": "58pic"
            },
            "title": {
              "zh": "中国男教师高清摄影图",
              "ja": "中国男教师高清摄影图",
              "en": "中国男教师高清摄影图"
            },
            "author": {
              "zh": "千图网",
              "ja": "千图网",
              "en": "58pic"
            },
            "accessed": {
              "zh": "2026-07-03",
              "ja": "2026年7月3日",
              "en": "July 3, 2026"
            },
            "url": "https://www.58pic.com/newpic/54411530.html"
          },
          "caption": {
            "zh": "教师角色参考图",
            "ja": "教師キャラクター参考",
            "en": "Teacher character reference"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-reference-student.webp",
          "alt": "ChineseLesson student reference",
          "source": {
            "site": {
              "zh": "包图网",
              "ja": "包图网（ibaotu.com）",
              "en": "BaoTuWang (ibaotu.com)"
            },
            "title": {
              "zh": "校园生活帅气高中生大学生正面微笑照",
              "ja": "校园生活帅气高中生大学生正面微笑照",
              "en": "校园生活帅气高中生大学生正面微笑照"
            },
            "author": {
              "zh": "包图网",
              "ja": "包图网",
              "en": "BaoTuWang"
            },
            "accessed": {
              "zh": "2026-07-03",
              "ja": "2026年7月3日",
              "en": "July 3, 2026"
            },
            "url": "https://ibaotu.com/sucai/19726426.html?kwd=%E9%AB%98%E4%B8%AD%E7%94%9F"
          },
          "caption": {
            "zh": "学生角色参考图",
            "ja": "学生キャラクター参考",
            "en": "Student character reference"
          }
        },
        {
          "src": "assets/projects/chinese/chinese-unity-hierarchy.webp",
          "alt": "ChineseLesson Unity hierarchy",
          "caption": {
            "zh": "Unity 层级与 UI 组织",
            "ja": "Unity 階層と UI 構成",
            "en": "Unity hierarchy and UI organization"
          }
        }
      ]
    }
  ]
};
