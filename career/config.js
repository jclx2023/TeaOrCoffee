(function configureCareerPortfolio() {
  const copy = {
    zh: {
      nativeName: "徐邦 / 系统策划 · 技术策划",
      heroLead: "关注玩法机制、系统规则与交互体验，使用 Unity 和 C# 将设计落实为可运行的游戏原型。作品涵盖 Roguelike 构筑、多人对战与 AI 对话解谜。",
      worksLead: "围绕系统设计与玩法实现，展示四个项目的设计思路、个人职责和制作成果。",
      profileTitle: "徐邦",
      profileLead: "浙江工商大学 · 电子信息技术 · 本科",
      profileDirection: "求职方向",
      summaryMajor: "系统策划 / 技术策划",
      viewResume: "查看简历 PDF",
      downloadResume: "下载简历 PDF",
      contactMe: "联系我",
      profileEnglish: "英语",
      englishLevel: "托福 5 分 · CET-6 555 分",
      profileJapanese: "日语",
      japaneseLevel: "JLPT N2 160 分",
      production: "制作形式"
    },
    ja: {
      nativeName: "徐邦 / システムプランナー · テクニカルプランナー",
      heroLead: "ゲームメカニクス、システムのルール、インタラクションを設計し、Unity と C# でプレイ可能なプロトタイプを制作しています。作品では Roguelike のビルド構築、オンライン対戦、AI 会話を用いた推理を扱っています。",
      worksLead: "システム設計とゲーム実装を中心に、4 つのプロジェクトの設計意図、担当内容、制作成果を紹介します。",
      profileTitle: "徐邦",
      profileLead: "浙江工商大学 · 電子情報技術 · 学士",
      profileDirection: "希望職種",
      summaryMajor: "システムプランナー / テクニカルプランナー",
      viewResume: "履歴書 PDF を見る",
      downloadResume: "履歴書 PDF をダウンロード",
      contactMe: "連絡する",
      profileEnglish: "英語",
      englishLevel: "TOEFL 5 点 · CET-6 555 点",
      profileJapanese: "日本語",
      japaneseLevel: "JLPT N2 160 点",
      production: "制作形態"
    },
    en: {
      nativeName: "Xu Bang / Systems Designer · Technical Designer",
      heroLead: "I design gameplay mechanics, system rules, and interactions, and build playable prototypes with Unity and C#. My projects explore roguelike builds, multiplayer games, and AI dialogue in detective games.",
      worksLead: "Four projects showing systems design and gameplay implementation, with design decisions, individual responsibilities, and production work.",
      profileTitle: "Xu Bang",
      profileLead: "Zhejiang Gongshang University · Electronic Information Technology · Bachelor's degree",
      profileDirection: "Target roles",
      summaryMajor: "Systems Designer / Technical Designer",
      viewResume: "View Resume PDF",
      downloadResume: "Download Resume PDF",
      contactMe: "Contact Me",
      profileEnglish: "English",
      englishLevel: "TOEFL 5 · CET-6 555",
      profileJapanese: "Japanese",
      japaneseLevel: "JLPT N2 160",
      production: "Production"
    }
  };

  const baseSite = window.PORTFOLIO_SITE;
  window.PORTFOLIO_SITE = {
    ...baseSite,
    languageStorageKey: "portfolioCareerLang",
    skills: ["Unity", "C#", "Game Design", "Godot"],
    i18n: Object.fromEntries(Object.entries(baseSite.i18n).map(([lang, labels]) => [
      lang, { ...labels, ...copy[lang] }
    ]))
  };

  const team = { zh: "团队制作", ja: "チーム制作", en: "Team project" };
  const solo = { zh: "个人制作", ja: "個人制作", en: "Solo project" };
  const projects = {
    clavaro: {
      production: team,
      cardRole: {
        zh: "团队制作 · 系统策划与程序实现",
        ja: "チーム制作 · システム企画・実装",
        en: "Team project · Systems design & programming"
      },
      download: "https://pan.baidu.com/s/1WbqCa-Q2rEtVn3YqqqQ0jQ",
      blockOrder: ["项目概述", "设计意图", "演示视频", "系统循环", "球池与遗物设计", "主要界面", "系统实现证据"]
    },
    "windows-murder": {
      production: solo,
      cardRole: {
        zh: "个人制作 · 谜题、交互与 AI 对话设计",
        ja: "個人制作 · 謎解き・UI・AI 会話設計",
        en: "Solo project · Puzzles, interaction & AI dialogue"
      },
      download: "https://pan.baidu.com/s/1x52pE3GuQlfPnto_KRTyew"
    },
    chinese: {
      production: solo,
      cardRole: {
        zh: "个人制作 · 对局流程、道具与联网原型",
        ja: "個人制作 · 対局フロー・アイテム・通信実装",
        en: "Solo project · Match flow, items & network prototype"
      }
    },
    deep: {
      production: team,
      cardRole: {
        zh: "团队制作 · 系统、关卡与敌人设计",
        ja: "チーム制作 · システム・レベル・敵設計",
        en: "Team project · Systems, levels & enemy design"
      },
      card: {
        zh: "深海探索动作冒险企划，展示游戏循环、生物 AI、角色进化、敌人与 Boss 设计及配套企划文档。",
        ja: "深海探索アクションアドベンチャー企画。ゲームループ、生物 AI、進化、敵・ボス設計と企画書を掲載しています。",
        en: "A deep-sea action-adventure concept covering its game loop, creature AI, evolution, enemies, bosses, and design documents."
      },
      subtitle: {
        zh: "深海动作冒险 / 系统与关卡企划",
        ja: "深海アクションアドベンチャー / システム・レベル企画",
        en: "Deep-sea action adventure / Systems & level design"
      }
    }
  };

  function adaptProject(source) {
    const details = projects[source.id];
    return {
      ...source,
      page: `career/projects/${source.id}/index.html`,
      card: details.card || source.card,
      cardRole: details.cardRole,
      meta: Object.fromEntries(Object.entries(source.meta).map(([lang, meta]) => [
        lang, {
          ...meta,
          production: details.production[lang],
          ...(details.subtitle ? { subtitle: details.subtitle[lang] } : {})
        }
      ]))
    };
  }

  const projectOrder = ["clavaro", "windows-murder", "chinese", "deep"];
  window.PORTFOLIO_PROJECT_INDEX = projectOrder.map((id) =>
    adaptProject(window.PORTFOLIO_PROJECT_INDEX.find((project) => project.id === id))
  );

  if (!window.PORTFOLIO_PROJECT) return;

  const project = adaptProject(window.PORTFOLIO_PROJECT);
  const details = projects[project.id];
  project.blocks = project.blocks.map((block) => {
    if (block.type === "embedVideo") return { ...block, id: "gameplay-demo" };
    // Keep the original documents available after the design content in the career edition.
    if (project.id === "deep" && block.type === "documents") return { ...block, placement: undefined };
    return block;
  });

  if (details.blockOrder) {
    const priorities = new Map(details.blockOrder.map((title, index) => [title, index]));
    project.blocks.sort((a, b) =>
      (priorities.get(a.title?.zh) ?? priorities.size) - (priorities.get(b.title?.zh) ?? priorities.size)
    );
  }

  if (project.action?.url) {
    project.actions = [{
      label: { zh: "下载 Demo", ja: "Demo をダウンロード", en: "Download Demo" },
      url: details.download ? {
        zh: details.download,
        ja: project.action.url,
        en: project.action.url
      } : project.action.url,
      primary: true,
      external: true
    }];
    if (details.download) project.downloadNote = { zh: "百度网盘提取码：pass", ja: "", en: "" };
    if (project.blocks.some((block) => block.id === "gameplay-demo")) {
      project.actions.push({
        label: { zh: "观看演示", ja: "プレイ動画を見る", en: "Watch Demo" },
        url: `${project.page}#gameplay-demo`
      });
    }
  }

  window.PORTFOLIO_PROJECT = project;
}());
