window.PORTFOLIO_PROJECT = {
  "id": "deep",
  "displayTitle": "Deep",
  "year": "2024",
  "cover": "assets/projects/deep/deep-ruins.webp",
  "tags": [
    "Unity",
    "GDD",
    "Concept Art",
    "Design Docs"
  ],
  "card": {
    "zh": "深海探索动作冒险企划，展示游戏循环、生物 AI、角色进化、敌方与 Boss 设计，并附三份日文企划书。",
    "ja": "深海探索アクションアドベンチャー企画。ゲームループ、生物 AI、進化、敵・ボス設計と3冊の日本語企画書を掲載しています。",
    "en": "A deep-sea action-adventure concept covering its game loop, creature AI, evolution, enemies, bosses, and three Japanese design documents."
  },
  "meta": {
    "zh": {
      "subtitle": "深海动作冒险企划 / 日文企划书",
      "role": "系统策划、GDD 整理、关卡与敌方生物设计",
      "status": "Concept 与企划书已整理 / 原型未完成",
      "platform": "PC 原型",
      "tools": "Unity / Word / Excel"
    },
    "ja": {
      "subtitle": "深海アクションアドベンチャー企画 / 日本語企画書",
      "role": "システム企画、GDD、レベルと敵キャラクター設計",
      "status": "コンセプト・企画書整理済み / プロトタイプ未完成",
      "platform": "PC プロトタイプ",
      "tools": "Unity / Word / Excel"
    },
    "en": {
      "subtitle": "Deep-sea action-adventure concept / Japanese design documents",
      "role": "System design, GDD, level and enemy design",
      "status": "Concepts and documents complete / Prototype unfinished",
      "platform": "PC prototype",
      "tools": "Unity / Word / Excel"
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
          "Deep 是一份围绕海底文明、遗迹探索和深海生态展开的动作冒险企划。目前项目以设计文档形式呈现，记录游戏循环、区域推进、生物 AI、角色进化、敌方生态和数值方向。",
          "项目尚未进入完整原型阶段，因此页面区分概念设计与实际开发状态，并提供系统、生物和敌对生物三份日文企划书。"
        ],
        "ja": [
          "Deep は、海底文明、遺跡探索、深海生態を扱うアクションアドベンチャー企画です。ゲームループ、エリア進行、生物 AI、キャラクター進化、敵生態、数値方針を設計文書として整理しています。",
          "完全なプロトタイプ段階には入っていないため、コンセプトと実際の開発状況を区別し、システム、生物、敵対生物の3冊の日本語企画書を掲載しています。"
        ],
        "en": [
          "Deep is an action-adventure concept about underwater civilization, ruin exploration, and deep-sea ecology. Its documents cover the game loop, area progression, creature AI, character evolution, enemy ecology, and balance direction.",
          "The project has not reached a full prototype stage, so the page distinguishes concept work from implementation status and provides three Japanese design documents for the system, player creatures, and enemies."
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
          "Deep 的关卡推进以潜入深度为主轴。不同深度对应生物类型、资源分布、环境风险和遗迹信息，玩家通过探索逐步建立对海域规则的理解。",
          "环保主题通过资源稀缺、生态关系和区域压力呈现。玩家在推进过程中需要权衡探索收益、风险暴露和补给消耗。"
        ],
        "ja": [
          "Deep のエリア進行は潜行深度を軸に設計しています。深度ごとに生物、資源、環境リスク、遺跡情報を変え、探索を通して海域のルールを理解できる構成にしています。",
          "環境テーマは、資源の不足、生態関係、エリアごとの圧力として扱います。プレイヤーは探索報酬、危険への露出、補給消費を判断しながら進行します。"
        ],
        "en": [
          "Deep uses diving depth as the main structure for progression. Each depth layer changes the creature set, resource distribution, environmental risk, and ruin information, so players learn the rules of the sea through exploration.",
          "The environmental theme is handled through resource scarcity, ecological relationships, and area pressure. Progression asks the player to weigh exploration rewards, exposure to danger, and supply consumption."
        ]
      }
    },
    {
      "type": "imageText",
      "title": {
        "zh": "游戏循环",
        "ja": "ゲームループ",
        "en": "Game Loop"
      },
      "image": {
        "src": "assets/projects/deep/deep-flow-game-loop-ja.webp",
        "fit": "contain",
        "alt": {
          "zh": "DEEP 日文游戏循环流程图",
          "ja": "DEEP のゲームループ図",
          "en": "Japanese game-loop flowchart for Deep"
        }
      },
      "body": {
        "zh": [
          "玩家进入海域后，根据遭遇内容选择战斗、回避、收集资源或处理事件，再通过恢复、购买和能力强化准备下一轮探索。",
          "进化条件把短期探索收益转化为形态变化；随着时间推进，区域压力和最终 Boss 共同形成单局目标。"
        ],
        "ja": [
          "海域での遭遇に応じて、戦闘、回避、資源収集、イベント対応を選び、回復、購入、能力強化を経て次の探索へ進みます。",
          "進化条件によって短期的な探索成果を形態変化へつなげ、時間経過と最終ボスが1プレイの目標を作ります。"
        ],
        "en": [
          "After entering a sea area, the player chooses to fight, avoid danger, gather resources, or respond to events, then recovers, shops, and strengthens abilities before the next exploration cycle.",
          "Evolution conditions turn short-term exploration gains into form changes, while time pressure and the final boss define the run-level objective."
        ]
      }
    },
    {
      "type": "gallery",
      "layout": "full",
      "title": {
        "zh": "生物 AI 状态流程",
        "ja": "生物 AI の状態遷移",
        "en": "Creature AI State Flow"
      },
      "images": [
        {
          "src": "assets/projects/deep/deep-flow-creature-ai-ja.webp",
          "fit": "contain",
          "ratio": "wide",
          "alt": {
            "zh": "从巡逻、索敌、警戒、追踪到攻击和归还的生物 AI 流程图",
            "ja": "巡回、索敵、警戒、追跡、攻撃、帰還を示す生物 AI 状態図",
            "en": "Creature AI flow from patrol and detection to warning, chase, attack, and return"
          },
          "caption": {
            "zh": "以索敌范围、攻击范围和活动范围为条件，连接巡逻、捕食、警戒、追踪、攻击与归还状态",
            "ja": "索敵範囲、攻撃範囲、活動範囲を条件に、巡回、捕食、警戒、追跡、攻撃、帰還を接続",
            "en": "Detection, attack, and activity ranges connect patrol, feeding, warning, chase, attack, and return states"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "概念设计过程",
        "ja": "コンセプトデザイン",
        "en": "Concept Design Process"
      },
      "images": [
        {
          "src": "assets/projects/deep/deep-concept-scene-line.webp",
          "fit": "contain",
          "alt": "Deep underwater ruins line concept",
          "caption": {
            "zh": "场景线稿：用遗迹、断柱、阶梯和光束建立探索路径",
            "ja": "シーン線画：遺跡、柱、階段、光線で探索経路を構成",
            "en": "Scene linework using ruins, columns, stairs, and light beams to shape exploration"
          }
        },
        {
          "src": "assets/projects/deep/deep-concept-scene-color.webp",
          "alt": "Deep underwater ruins color concept",
          "caption": {
            "zh": "场景上色：区分前景遗迹、中景建筑和深海背景",
            "ja": "カラー案：前景の遺跡、中景の建築、深海背景を色で分離",
            "en": "Color concept separating foreground ruins, midground architecture, and deep-sea background"
          }
        },
        {
          "src": "assets/projects/deep/deep-concept-combat-line.webp",
          "fit": "contain",
          "alt": "Deep fish combat line concept",
          "caption": {
            "zh": "战斗构图：通过相向冲刺和碰撞反馈表达近距离交锋",
            "ja": "戦闘構図：正面からの突進と衝突表現で近距離戦を示す",
            "en": "Combat composition showing close-range conflict through opposing dashes and impact"
          }
        },
        {
          "src": "assets/projects/deep/deep-concept-bosses.webp",
          "alt": "Deep boss creature concepts",
          "caption": {
            "zh": "Boss 生物概念：鲸鱼、水母和蟹类的轮廓与主题差异",
            "ja": "ボス生物案：クジラ、クラゲ、カニのシルエットとテーマ差",
            "en": "Boss creature concepts differentiating whale, jellyfish, and crab silhouettes"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "视觉方向参考",
        "ja": "ビジュアル方向の参考",
        "en": "Visual Direction References"
      },
      "images": [
        {
          "src": "assets/projects/deep/deep-ruins.webp",
          "alt": "Deep ruins concept",
          "caption": {
            "zh": "海底遗迹氛围图",
            "ja": "海底遺跡の雰囲気",
            "en": "Underwater ruins mood image"
          }
        },
        {
          "src": "assets/projects/deep/deep-creature.webp",
          "alt": "Deep creature concept",
          "caption": {
            "zh": "深海生物概念",
            "ja": "深海生物コンセプト",
            "en": "Deep-sea creature concept"
          }
        },
        {
          "src": "assets/projects/deep/deep-depth.webp",
          "alt": "Deep deep zone concept",
          "caption": {
            "zh": "深层区域视觉方向",
            "ja": "深層エリアの方向性",
            "en": "Deep-zone visual direction"
          }
        }
      ]
    },
    {
      "type": "documents",
      "title": {
        "zh": "日文企划书",
        "ja": "日本語企画書",
        "en": "Japanese Design Documents"
      },
      "body": {
        "zh": [
          "三份 PDF 分别整理整体系统、玩家生物与进化、敌对生物与 Boss。文档保留原有结构和图表，仅转换为便于网页阅读的 PDF。"
        ],
        "ja": [
          "システム全体、プレイヤー生物と進化、敵対生物とボスを3冊の PDF に分けています。元の構成と図表を保ったまま、Web 閲覧用 PDF に変換しました。"
        ],
        "en": [
          "Three PDFs cover the overall system, player creatures and evolution, and enemies and bosses. The original structure and diagrams are preserved in a web-readable format."
        ]
      },
      "documents": [
        {
          "title": {
            "zh": "DEEP 系统企划书",
            "ja": "DEEP システム企画書",
            "en": "DEEP System Design Document"
          },
          "meta": {
            "zh": "日文 PDF · 24 页",
            "ja": "日本語 PDF・24ページ",
            "en": "Japanese PDF · 24 pages"
          },
          "description": {
            "zh": "核心机制、资源、战斗、属性、进化、商店、UI 与引导。",
            "ja": "コアメカニクス、資源、戦闘、属性、進化、ショップ、UI、チュートリアル。",
            "en": "Core mechanics, resources, combat, attributes, evolution, shop, UI, and onboarding."
          },
          "pdf": "assets/documents/deep/deep-system-plan-ja.pdf"
        },
        {
          "title": {
            "zh": "DEEP 生物企划书",
            "ja": "DEEP 生物企画書",
            "en": "DEEP Player Creature Design Document"
          },
          "meta": {
            "zh": "日文 PDF · 43 页",
            "ja": "日本語 PDF・43ページ",
            "en": "Japanese PDF · 43 pages"
          },
          "description": {
            "zh": "玩家属性、初始形态，以及攻击、敏捷、防御三类进化路线。",
            "ja": "プレイヤー属性、初期形態、攻撃・敏捷・防御の3系統の進化。",
            "en": "Player attributes, starting form, and attack, agility, and defense evolution paths."
          },
          "pdf": "assets/documents/deep/deep-player-creatures-plan-ja.pdf"
        },
        {
          "title": {
            "zh": "DEEP 敌对生物企划书",
            "ja": "DEEP 敵対生物企画書",
            "en": "DEEP Enemy Design Document"
          },
          "meta": {
            "zh": "日文 PDF · 33 页",
            "ja": "日本語 PDF・33ページ",
            "en": "Japanese PDF · 33 pages"
          },
          "description": {
            "zh": "敌方属性、主动与非主动敌人、友好生物，以及 Boss 行为。",
            "ja": "敵属性、能動・非能動の敵、友好生物、ボスの行動設計。",
            "en": "Enemy attributes, aggressive and passive enemies, friendly creatures, and boss behaviors."
          },
          "pdf": "assets/documents/deep/deep-enemies-plan-ja.pdf"
        }
      ]
    }
  ]
};
