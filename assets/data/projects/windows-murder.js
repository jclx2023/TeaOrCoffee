window.PORTFOLIO_PROJECT = {
  "id": "windows-murder",
  "displayTitle": "WindowsMurder",
  "year": "2025-2026",
  "cover": "assets/projects/windows-murder/windows-stage-3.webp",
  "tags": [
    "Unity",
    "Detective",
    "Retro UI",
    "LLM Dialogue"
  ],
  "action": {
    "url": "https://drive.google.com/file/d/17McOh7s4ag6gRttQV7RylrL7I1JcNTfF/view?usp=drive_link",
    "label": {
      "zh": "WindowsMurder",
      "ja": "WindowsMurder",
      "en": "WindowsMurder"
    }
  },
  "card": {
    "zh": "复古桌面系统题材的推理解谜游戏。玩家通过程序角色、弹窗、文件和 LLM 对话调查回收站被害案。",
    "ja": "レトロなデスクトップ環境を使った推理ゲーム。プログラム、ポップアップ、ファイル、LLM 会話を手がかりとして扱います。",
    "en": "A retro desktop detective game that uses programs, pop-ups, files, and LLM dialogue as investigation material."
  },
  "meta": {
    "zh": {
      "subtitle": "Windows XP 风格桌面推理解谜",
      "role": "个人开发、剧本与谜题设计、桌面 UI、程序角色、LLM 对话设计",
      "status": "可运行游戏",
      "platform": "PC",
      "tools": "Unity / C# / JSON Localization / LLM Prompt"
    },
    "ja": {
      "subtitle": "Windows XP 風デスクトップ推理ゲーム",
      "role": "個人開発、シナリオ、謎解き、デスクトップ UI、プログラムキャラクター、LLM 会話",
      "status": "プレイ可能",
      "platform": "PC",
      "tools": "Unity / C# / JSON Localization / LLM Prompt"
    },
    "en": {
      "subtitle": "A Windows XP-style desktop detective game",
      "role": "Solo development, writing, puzzle design, desktop UI, program characters, LLM dialogue",
      "status": "Playable",
      "platform": "PC",
      "tools": "Unity / C# / JSON Localization / LLM Prompt"
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
          "WindowsMurder 将类 Windows XP 桌面作为推理解谜场景。回收站被害后，玩家以管理员身份进入虚拟桌面，通过开始菜单、桌面图标、文件夹、弹窗、程序证言和系统异常还原事件。",
          "系统界面承担叙事和谜题功能。程序被设定为角色，文件用于承载证据，错误提示可触发证词线索；后期阶段加入 LLM 对话，让玩家用自然语言向程序角色追问线索。"
        ],
        "ja": [
          "WindowsMurder は、Windows XP 風の仮想デスクトップを推理ゲームの場面として使用します。回収箱が被害に遭った後、プレイヤーは管理者として入り、スタートメニュー、アイコン、フォルダ、ポップアップ、プログラム証言、システム異常を調査します。",
          "デスクトップ UI は、物語と謎解きの機能を持ちます。プログラムはキャラクターとして扱い、ファイルは証拠を保持し、エラー表示は証言の発生点になります。後半では LLM 会話を追加し、自然言語でプログラムキャラクターに質問できます。"
        ],
        "en": [
          "WindowsMurder uses a Windows XP-like virtual desktop as a detective puzzle space. After Recycle Bin is murdered, the player enters as an administrator and investigates the start menu, icons, folders, pop-ups, program testimony, and system anomalies.",
          "The desktop UI carries narrative and puzzle functions. Programs act as characters, files hold evidence, and error messages can trigger testimony. A later stage adds LLM dialogue so the player can question software characters in natural language."
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
          "设计重点是把常见桌面操作转化为调查动作。打开文件夹对应证据检索，查看弹窗对应事件触发，阅读错误提示对应线索识别，和程序角色对话对应询问证人。",
          "LLM 对话服务于程序角色设定。玩家可以自由组织问题，系统则通过角色身份、可知信息和剧情条件限制回答范围，避免开放对话破坏推理节奏。"
        ],
        "ja": [
          "設計の中心は、一般的なデスクトップ操作を調査行動に置き換えることです。フォルダを開く操作は証拠確認、ポップアップ確認はイベント発生、エラー表示の読解は手がかりの特定、プログラムとの会話は聞き込みとして機能します。",
          "LLM 会話はプログラムキャラクターの設定に合わせて配置しています。プレイヤーは自由な文章で質問できますが、役割、所持情報、進行条件によって回答範囲を制限し、推理のテンポが崩れないようにしています。"
        ],
        "en": [
          "The design maps common desktop actions to investigation actions. Opening folders is evidence retrieval, checking pop-ups is event discovery, reading error messages is clue identification, and talking to program characters is witness questioning.",
          "LLM dialogue supports the program-character setup. Players can write their own questions, while role, knowledge range, and story conditions limit the answers so open dialogue does not break the deduction rhythm."
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
      "url": "https://www.youtube-nocookie.com/embed/9RtpZhigL_Q",
      "externalUrl": "https://youtu.be/9RtpZhigL_Q",
      "caption": {
        "zh": "展示桌面调查、程序角色和推理流程；如果嵌入播放器暂时无法播放，可通过下方链接在 YouTube 中打开。",
        "ja": "デスクトップ調査、プログラムキャラクター、推理フローのデモです。埋め込み再生できない場合は、下のリンクから YouTube で開けます。",
        "en": "A demonstration of desktop investigation, program characters, and deduction flow. If embedded playback is unavailable, open it on YouTube below."
      }
    },
    {
      "type": "gallery",
      "title": {
        "zh": "视觉参考与风格建立",
        "ja": "ビジュアル参考",
        "en": "Visual Reference and Style"
      },
      "images": [
        {
          "src": "assets/projects/windows-murder/windows-xp-reference-1.webp",
          "alt": "Windows XP style reference",
          "caption": {
            "zh": "Windows XP 风格参考：任务栏、窗口与系统质感",
            "ja": "Windows XP 風の参考",
            "en": "Windows XP style reference for taskbar and windows"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-xp-reference-2.webp",
          "alt": "Windows XP original reference",
          "caption": {
            "zh": "桌面构图参考：经典壁纸与图标密度",
            "ja": "デスクトップ構図参考",
            "en": "Desktop composition reference"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-shader-notes.webp",
          "alt": "WindowsMurder shader notes",
          "caption": {
            "zh": "视觉处理记录：旧系统界面质感调整",
            "ja": "画面処理メモ",
            "en": "Shader notes for the retro-system look"
          }
        }
      ]
    },
    {
      "type": "gallery",
      "title": {
        "zh": "调查流程截图",
        "ja": "調査フロー",
        "en": "Investigation Flow"
      },
      "images": [
        {
          "src": "assets/projects/windows-murder/windows-main-menu.webp",
          "alt": "WindowsMurder main menu",
          "caption": {
            "zh": "主菜单：伪装成空桌面的游戏入口",
            "ja": "メインメニュー",
            "en": "Main menu disguised as a desktop"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-main-menu-open.webp",
          "alt": "WindowsMurder menu opened",
          "caption": {
            "zh": "开始菜单：用熟悉操作引导玩家",
            "ja": "スタートメニュー",
            "en": "Start-menu interaction as onboarding"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-stage-1.webp",
          "alt": "WindowsMurder stage 1",
          "caption": {
            "zh": "阶段 1：程序角色开始提供证词",
            "ja": "ステージ 1",
            "en": "Stage 1: program testimony begins"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-stage-2.webp",
          "alt": "WindowsMurder stage 2",
          "caption": {
            "zh": "阶段 2：桌面图标与弹窗成为调查对象",
            "ja": "ステージ 2",
            "en": "Stage 2: icons and pop-ups become clues"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-stage-3.webp",
          "alt": "WindowsMurder stage 3",
          "caption": {
            "zh": "阶段 3：多程序证词与线索交叉",
            "ja": "ステージ 3",
            "en": "Stage 3: multiple clues and program statements"
          }
        },
        {
          "src": "assets/projects/windows-murder/windows-stage-llm.webp",
          "alt": "WindowsMurder LLM stage",
          "caption": {
            "zh": "LLM 阶段：自然语言询问程序角色",
            "ja": "LLM 会話ステージ",
            "en": "LLM stage for natural-language questioning"
          }
        }
      ]
    },
    {
      "type": "imageText",
      "title": {
        "zh": "程序角色设计",
        "ja": "プログラムキャラクター",
        "en": "Program Character Design"
      },
      "image": {
        "src": "assets/projects/windows-murder/windows-characters-sheet.webp",
        "alt": {
          "zh": "WindowsMurder 程序角色图标精选",
          "ja": "WindowsMurder のプログラムキャラクター",
          "en": "Selected WindowsMurder program icons"
        }
      },
      "body": {
        "zh": [
          "WindowsMurder 的角色来自软件和系统部件。回收站、控制面板、注册表、记事本、浏览器和下载工具被设计为可对话、可怀疑、可提供线索的调查对象。",
          "程序角色将桌面操作转化为推理行为：打开程序对应询问，查看文件对应查验证物，系统弹窗对应新增证词。角色图标保留低分辨率和旧系统质感，以维持复古桌面的可信度。"
        ],
        "ja": [
          "WindowsMurder のキャラクターは、ソフトウェアとシステム部品をもとにしています。回収箱、コントロールパネル、レジストリ、メモ帳、ブラウザ、ダウンロードツールを、会話、疑い、証言の対象として扱います。",
          "プログラムを開く操作は聞き込み、ファイル確認は証拠調査、ポップアップは新しい証言として機能します。低解像度のアイコンと旧 OS 風の質感で、レトロなデスクトップの説得力を保っています。"
        ],
        "en": [
          "WindowsMurder uses software and system components as characters. Recycle Bin, Control Panel, Registry, Notepad, browsers, and download tools can speak, withhold information, or become suspects.",
          "Program characters map desktop operation to deduction: opening a program is questioning, checking files is evidence review, and pop-ups can introduce new testimony. Low-resolution icons and old-system styling keep the desktop setting consistent."
        ]
      }
    }
  ]
};
