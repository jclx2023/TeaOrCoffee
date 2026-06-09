# TeaOrCoffee Portfolio

徐邦的游戏设计作品集静态网站，用于 GitHub Pages 部署。

## 本地预览

直接打开 `index.html` 即可浏览；也可以在仓库根目录启动任意静态服务器。

## 编辑内容

站点文案在 `assets/data/site.js` 中编辑。

项目内容在 `assets/data/projects.js` 中编辑。每个项目的详情页由 `blocks` 数组控制，支持：

- `text`：标题 + 多段正文
- `list`：标题 + 列表
- `gallery`：标题 + 图片组
- `note`：提示/占位说明
- `facts`：键值信息表
- `imageText`：图片 + 文字说明

## 部署到 GitHub Pages

将本仓库推送到 GitHub 后，在仓库 Settings -> Pages 中选择当前分支和根目录作为发布源。
