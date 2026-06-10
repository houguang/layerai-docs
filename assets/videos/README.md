# 视频资产目录

自托管演示视频，供 Hub 页与入门串联页嵌入。

## 命名规范

- 路径：`assets/videos/{journey|modules}/{name}_zh.mp4`
- 单文件目标：< 5MB（H.264，HandBrake `-crf 28`）
- 分辨率：1280×720 或 1920×1080

## 清单

| 文件 | 时长 | 内容 |
| --- | --- | --- |
| `journey/first-translation_zh.mp4` | 60–90s | 采集 → AI 翻译 → 保存 → 刷新验证 |
| `modules/collection-overview_zh.mp4` | ~30s | 三种采集方式演示 |
| `modules/translation-overview_zh.mp4` | ~30s | 站点列表 → 编辑 → AI 批量 |
| `modules/replace-overview_zh.mp4` | ~20s | 自动替换开关与页面效果 |
| `modules/glossary-overview_zh.mp4` | ~25s | 添加术语 → AI 生效 |
| `modules/queue-overview_zh.mp4` | ~20s | 队列进度与重试 |
| `modules/models-overview_zh.mp4` | ~25s | 选模型 + API Key |
| `modules/sync-overview_zh.mp4` | ~25s | 导出 JSON / 云同步 |
| `modules/shared-overview_zh.mp4` | ~30s | 浏览下载 + 提交共享 |
| `modules/account-settings-overview_zh.mp4` | ~20s | 登录 + 基础设置 |

运行 `python scripts/generate-media-placeholders.py` 生成占位视频；录制完成后覆盖同名文件即可。
