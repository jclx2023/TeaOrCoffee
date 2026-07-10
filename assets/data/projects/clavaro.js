window.PORTFOLIO_PROJECT = {
  "id": "clavaro",
  "displayTitle": "Clavaro",
  "year": "2025-2026",
  "cover": "assets/projects/clavaro/clavaro-cover.webp",
  "tags": [
    "Unity",
    "Roguelike",
    "Deckbuilding",
    "Claw Machine"
  ],
  "action": {
    "url": "https://drive.google.com/file/d/1-h4jtFkcxw6k6-Ydd2SLgbKjpCylJnVn/view?usp=drive_link",
    "label": {
      "zh": "Clavaro",
      "ja": "Clavaro",
      "en": "Clavaro"
    }
  },
  "card": {
    "zh": "抓娃娃机物理操作与 Roguelike 构筑结合的原型，围绕抓取、结算、商店、球池和遗物建立循环。",
    "ja": "クレーンゲームの物理操作と Roguelike 構築を組み合わせた原型。キャッチ、精算、ショップ、ボールプール、レリックでループを構成しています。",
    "en": "A claw-machine and roguelike prototype with a loop based on grabbing, scoring, shop choices, ball-pool editing, and relic triggers."
  },
  "meta": {
    "zh": {
      "subtitle": "抓娃娃机 + Roguelike 球池构筑",
      "role": "系统设计、玩法原型、UI/商店/结算流程、球与遗物数据、程序实现",
      "status": "可运行 Demo",
      "platform": "PC",
      "tools": "Unity / C# / ScriptableObject / DOTween"
    },
    "ja": {
      "subtitle": "クレーンゲーム + Roguelike 構築",
      "role": "システム設計、プロトタイプ、UI/ショップ/精算、ボールとレリックデータ、実装",
      "status": "プレイ可能な Demo",
      "platform": "PC",
      "tools": "Unity / C# / ScriptableObject / DOTween"
    },
    "en": {
      "subtitle": "Claw machine plus roguelike ball-pool building",
      "role": "System design, gameplay prototype, UI/shop/scoring flow, ball and relic data, programming",
      "status": "Playable demo",
      "platform": "PC",
      "tools": "Unity / C# / ScriptableObject / DOTween"
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
          "Clavaro 将抓娃娃机的物理操作引入 Roguelike 构筑。玩家控制钩爪从球池中抓取不同功能的小球，再通过结算、商店、遗物和球池调整建立得分路线。",
          "系统需要同时保留抓取的不确定性和构筑的可规划性。抓取次数、目标分数、基础分球、倍率球、特殊球、商店刷新和遗物触发共同构成长期循环。"
        ],
        "ja": [
          "Clavaro は、クレーンゲームの物理操作を Roguelike 構築に取り入れた原型です。プレイヤーはクレーンで機能の異なるボールを掴み、精算、ショップ、レリック、ボールプール調整を通じて得点ルートを作ります。",
          "システムでは、キャッチの不確定性と構築の計画性を同時に扱います。キャッチ回数、目標点、基礎点ボール、倍率ボール、特殊ボール、ショップ更新、レリック発動が長期ループを構成します。"
        ],
        "en": [
          "Clavaro brings claw-machine control into a roguelike build structure. The player controls a claw, grabs balls with different scoring functions, then builds a scoring route through settlement, shops, relics, and ball-pool editing.",
          "The system keeps physical uncertainty and strategic planning in the same loop. Grab count, target score, base-score balls, multipliers, special balls, shop rerolls, and relic triggers define the long-term progression."
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
          "项目参考了 Balatro 的短回合节奏、数值增长和连锁反馈，但交互载体改为钩爪操作与球池构筑。结果由抓取表现、球体组合和遗物触发共同决定。"
        ],
        "ja": [
          "Balatro からは、短いラウンド、数値成長、効果連鎖のテンポを参考にしました。Clavaro はクレーン操作とボールプール構築を交互に扱い、キャッチ結果、ボール構成、レリック発動で得点を決めます。"
        ],
        "en": [
          "The project references Balatro's short round structure, numerical growth, and chained feedback. Clavaro changes the interaction layer to claw control and ball-pool construction, so the result comes from grab performance, ball composition, and relic triggers."
        ]
      }
    },
    {
      "type": "facts",
      "title": {
        "zh": "系统循环",
        "ja": "システムループ",
        "en": "System Loop"
      },
      "items": [
        {
          "label": {
            "zh": "回合目标",
            "ja": "ラウンド目標",
            "en": "Round Goal"
          },
          "value": {
            "zh": "有限抓取次数内达到目标分",
            "ja": "限られた回数で目標点へ",
            "en": "Reach the target score within limited grabs"
          }
        },
        {
          "label": {
            "zh": "结算逻辑",
            "ja": "精算",
            "en": "Settlement"
          },
          "value": {
            "zh": "基础分、倍率、特殊球效果叠加",
            "ja": "基礎点、倍率、特殊効果",
            "en": "Base score, multipliers, and special effects stack"
          }
        },
        {
          "label": {
            "zh": "商店构筑",
            "ja": "ショップ構築",
            "en": "Shop Building"
          },
          "value": {
            "zh": "购买、移除、刷新、获得遗物",
            "ja": "購入、削除、リロール、レリック",
            "en": "Buy, remove, reroll, and acquire relics"
          }
        },
        {
          "label": {
            "zh": "长期变化",
            "ja": "長期変化",
            "en": "Long-Term Change"
          },
          "value": {
            "zh": "球池和遗物组合改变抓取价值",
            "ja": "ボールプールとレリックが価値を変える",
            "en": "Ball pool and relics change each grab's value"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "主要界面",
        "ja": "主要画面",
        "en": "Main Screens"
      },
      "images": [
        {
          "src": "assets/projects/clavaro/clavaro-main-menu.webp",
          "alt": "Clavaro main menu",
          "caption": {
            "zh": "主菜单：明确入口和街机氛围",
            "ja": "メインメニュー",
            "en": "Main menu with arcade tone"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-playing.webp",
          "alt": "Clavaro gameplay",
          "caption": {
            "zh": "游玩中：抓取区域、目标分、当前分与球池信息",
            "ja": "プレイ画面",
            "en": "Gameplay area with score and ball-pool information"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-shopping.webp",
          "alt": "Clavaro shop",
          "caption": {
            "zh": "商店：购买球、移除球、遗物与刷新选择",
            "ja": "ショップ",
            "en": "Shop choices for balls, removal, relics, and rerolls"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-round-result.webp",
          "alt": "Clavaro round result",
          "caption": {
            "zh": "结算：展示抓取结果和得分构成",
            "ja": "精算画面",
            "en": "Round result and scoring breakdown"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-settings.webp",
          "alt": "Clavaro settings",
          "caption": {
            "zh": "设置：音量、语言和显示相关选项",
            "ja": "設定画面",
            "en": "Settings for audio, language, and display"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-mascot.webp",
          "alt": "Clavaro mascot",
          "caption": {
            "zh": "吉祥物：补充街机抓取主题的视觉识别",
            "ja": "マスコット",
            "en": "Mascot supporting the arcade-claw identity"
          }
        }
      ]
    },
    {
      "type": "imageText",
      "title": {
        "zh": "球池与遗物设计",
        "ja": "ボールプールとレリック",
        "en": "Ball Pool and Relics"
      },
      "image": {
        "src": "assets/projects/clavaro/clavaro-balls-sheet.webp",
        "alt": {
          "zh": "Clavaro 球体素材精选",
          "ja": "Clavaro ボール素材",
          "en": "Selected Clavaro ball sprites"
        }
      },
      "body": {
        "zh": [
          "Clavaro 的球体按功能进入构筑系统。基础分球、倍率球、一次性效果球、风险球和特殊触发球分别影响抓取收益、结算顺序和后续构筑选择。",
          "页面展示的是经过筛选的代表性球体与遗物，覆盖分数、倍率、风险、奖励、干扰和主题化物件等类型，用于说明球池构筑的功能范围和视觉分类。"
        ],
        "ja": [
          "Clavaro のボールは、機能ごとに構築システムへ入ります。基礎点ボール、倍率ボール、一回限りの効果ボール、リスクボール、特殊発動ボールが、キャッチ報酬、精算順、後続の構築選択に影響します。",
          "ページでは、得点、倍率、リスク、報酬、妨害、テーマ性を示す代表的なボールとレリックを掲載し、ボールプール構築の機能範囲と視覚分類を説明しています。"
        ],
        "en": [
          "Clavaro's balls enter the build system by function. Base-score balls, multipliers, one-shot effects, risk balls, and special triggers affect grab value, scoring order, and later build choices.",
          "The page shows selected balls and relics that cover score, multiplier, risk, reward, disruption, and theme. This explains the functional range and visual categories of the ball-pool system."
        ]
      }
    },
    {
      "type": "gallery",
      "title": {
        "zh": "素材与构筑证据",
        "ja": "素材と構築",
        "en": "Assets and Build Evidence"
      },
      "images": [
        {
          "src": "assets/projects/clavaro/clavaro-balls-sheet.webp",
          "alt": "Clavaro selected balls",
          "caption": {
            "zh": "精选球体：球池构筑的主要功能类型",
            "ja": "ボールプール構築の主要機能タイプ",
            "en": "Selected balls covering the main pool functions"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-relics-sheet.webp",
          "alt": "Clavaro selected relics",
          "caption": {
            "zh": "精选遗物：展示触发链和长期成长方向",
            "ja": "発動連鎖と長期成長を示すレリック",
            "en": "Selected relics for trigger chains and long-term growth"
          }
        },
        {
          "src": "assets/projects/clavaro/clavaro-item-preview-a.webp",
          "alt": "Clavaro item tooltip",
          "caption": {
            "zh": "道具提示：代表性条目和说明 UI",
            "ja": "アイテム説明 UI",
            "en": "Representative item tooltip UI"
          }
        }
      ]
    }
  ]
};
