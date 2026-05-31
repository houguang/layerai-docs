# LayerAI 使用文档

LayerAI 浏览器扩展官方使用文档（Mintlify）。

- GitHub：https://github.com/houguang/layerai-docs
- 线上站点：https://sovitech.mintlify.app

## 本地预览

需要 Node.js **v20.17+**。

```bash
npm i -g mint
mint dev
```

浏览器打开 http://localhost:3000

## 关联 Mintlify 项目（sovitech）

文档已推送到本仓库 `main` 分支。在 [Mintlify Dashboard](https://dashboard.mintlify.com) 完成以下配置后，`sovitech.mintlify.app` 会自动部署：

1. 打开 **sovitech** 项目 → **Git Settings**
2. 仓库：`houguang/layerai-docs`
3. 分支：`main`
4. 文档根目录：留空（本仓库根目录即 `docs.json` 所在位置）
5. 安装并授权 **Mintlify GitHub App**
6. 保存后等待 1–3 分钟刷新站点

若仍显示 Mintlify 默认「Product Guide」模板，说明 Git 尚未指向本仓库。

## Cursor MCP

- 文档搜索：`https://sovitech.mintlify.app/mcp`
- 在 monorepo 根目录 `.cursor/mcp.json` 已配置 `layerai-docs`

## 目录结构

```
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
3. 本地 `mint dev` 预览后 `git push`

## 检查死链

```bash
mint broken-links
```
