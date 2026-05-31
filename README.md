# LayerAI 使用文档

LayerAI 浏览器扩展官方使用文档（Mintlify）。

## 本地预览

需要 Node.js **v20.17+**。

```bash
cd docs
npm i -g mint
mint dev
```

浏览器打开 http://localhost:3000

## 线上地址

- 文档站点：https://sovitech.mintlify.app
- MCP 端点：https://sovitech.mintlify.app/mcp（供 Cursor / Claude 搜索文档）

## Cursor MCP

项目已配置 `.cursor/mcp.json`，重启 Cursor 后可在对话中搜索 LayerAI 文档。

若站点内容仍为 Mintlify 默认模板，请将本仓库 `docs/` 推送到 Mintlify 关联仓库并确认文档根目录为 `docs/`。

## 部署到 Mintlify

1. 在 [mintlify.com/start](https://mintlify.com/start) 创建项目（或使用已有 `sovitech` 项目）
2. 连接本仓库，**文档根目录** 设为 `docs/`
3. 安装 Mintlify GitHub App，推送 `main` 后自动部署

## 目录结构

```
docs/
├── docs.json          # 导航、主题、Navbar
├── index.mdx          # 首页
├── introduction/      # 概念与界面
├── quickstart/        # 快速开始
├── collection/        # 采集
├── translation/       # 翻译管理
├── replace/           # 页面替换
├── queue/             # 翻译队列
├── models/            # 模型配置
├── glossary/          # 词库
├── sync/              # 数据同步
├── shared/            # 共享翻译
├── account/           # 账号订阅
├── settings/          # 基础配置
├── advanced/          # 高级设置
├── troubleshooting/   # 故障排查
└── appendix/          # 附录
```

## 新增页面

1. 在对应目录创建 `page-name.mdx`（含 frontmatter `title` / `description`）
2. 在 `docs.json` → `navigation.tabs` 对应 group 的 `pages` 中加入路径（不含扩展名）
3. 本地 `mint dev` 预览后提交

## 检查死链

```bash
mint broken-links
```
