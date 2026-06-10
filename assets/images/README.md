# 媒体资产目录

本目录存放文档引用的截图，按模块组织。

## 命名规范

- 路径：`assets/images/{journey|modules|ui-tour}/{feature}_zh.png`
- alt 文本：写清 UI 区域与操作上下文

## 子目录

| 目录 | 用途 |
| --- | --- |
| `ui-tour/` | 界面导览截图 |
| `journey/` | 入门串联步骤截图 |
| `modules/` | 各功能模块 Hub 页截图 |

运行 `python scripts/generate-media-placeholders.py` 可生成占位截图（正式截图请替换同名文件）。
