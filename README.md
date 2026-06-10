# LayerAI 使用文档

LayerAI 浏览器扩展官方使用文档（Mintlify），当前仅维护**简体中文**源文档。其它语言版本可通过 LayerAI 扩展自行翻译生成。

- GitHub：https://github.com/houguang/layerai-docs
- 线上站点：https://docs.layerai.yun

## 本地预览

需要 Node.js **v20.17+**。

```bash
cd docs
npm install
npm run dev
```

浏览器打开 http://localhost:3000。

## 文档结构（三层）

```
docs/
├── docs.json              # 导航与重定向
├── journey/               # 入门串联
├── modules/               # 功能模块 Hub
├── collection/ …          # 各模块详细参考页
├── introduction/ …
├── assets/                # 静态资源（图片、视频、Logo、组件片段）
│   ├── images/
│   ├── videos/
│   ├── logo/
│   ├── snippets/
│   └── favicon.ico
└── docs.json
```

- **入门** — 产品故事线与端到端流程
- **功能模块** — 各模块 Hub 页，分块介绍 + 多媒体
- **各功能分组** — 详细操作说明与参数

## 路径约定

- 导航与内容均在 `docs/` 根目录下
- 站内链接使用 `/...` 前缀
- 根路径 `/` 为文档首页（`index.mdx`）

## 媒体贡献指南

### 截图

- 命名：`assets/images/{ui-tour|journey|modules}/{feature}_zh.png`
- 在 MDX 中用 `<Frame caption="...">` 包裹，写清 alt 文本

### 视频

- 命名：`assets/videos/{journey|modules}/{name}_zh.mp4`
- 规格：1280×720 或 1920×1080，H.264，单文件 < 5MB

## 新增页面

1. 在对应目录下创建 MDX（含 `title` / `description`）
2. Hub 页放 `modules/`，详细说明放对应参考目录
3. 在 `docs.json` → `navigation` → `tabs` → `groups` → `pages` 中加入路径
4. 本地 `npm run validate` 后推送

## 检查

```bash
npm run validate
npm run broken-links
```

> 说明：`mint broken-links` 对站内链接可能误报，以 `mint validate` 为准。

## 关联 Mintlify 项目（sovitech）

文档已推送到本仓库 `main` 分支。在 [Mintlify Dashboard](https://dashboard.mintlify.com) 完成 Git 关联后自动部署。
