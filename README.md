# LayerAI 使用文档

LayerAI 浏览器扩展官方使用文档（Mintlify），支持中文 / 英文。

- GitHub：https://github.com/houguang/layerai-docs
- 线上站点：https://sovitech.mintlify.app
- 中文文档：https://sovitech.mintlify.app/zh
- 英文文档：https://sovitech.mintlify.app/en

## 本地预览

需要 Node.js **v20.17+**。

```bash
cd docs
npm install
npm run dev
```

浏览器打开 http://localhost:3000（默认重定向至 `/zh`）。页头可切换语言。

## 多语言结构

采用 Mintlify 原生 i18n（方案 A · 做法 2）：中英文均放在语言目录下。

```
docs/
├── docs.json          # navigation.languages（zh / en）
├── zh/                # 简体中文
│   ├── index.mdx
│   ├── introduction.mdx
│   └── quickstart/ …
├── en/                # English
│   ├── index.mdx
│   ├── introduction.mdx
│   └── quickstart/ …
├── logo/
└── favicon.ico
```

- 导航路径：`zh/introduction`、`en/introduction` 等
- 站内链接需带语言前缀：`/zh/...` 或 `/en/...`
- 默认语言：`zh`（`/` 重定向至 `/zh`）

## 关联 Mintlify 项目（sovitech）

文档已推送到本仓库 `main` 分支。在 [Mintlify Dashboard](https://dashboard.mintlify.com) 完成 Git 关联后自动部署。

## 新增页面

1. 在 `zh/` 与 `en/` 对应目录分别创建 MDX（含 `title` / `description`）
2. 在 `docs.json` → 各语言的 `navigation.languages` → `tabs` → `groups` → `pages` 中加入路径
3. 本地 `npm run validate` 后推送

## 检查

```bash
npm run validate
npm run broken-links
```

> 说明：`mint broken-links` 对带语言前缀的站内链接可能误报，以 `mint validate` 为准。
