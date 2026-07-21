# Media assets

This directory stores screenshots and related images referenced by the docs.

## Locale note

Demo videos and many screenshots currently show the **Chinese UI** (`*_zh` / `*_cn` suffixes). The docs body is English; replace with English-locale captures when available. Prefer `_zh` for new assets; existing `_cn` files remain valid.

## Naming conventions

- Path: `assets/images/{journey|modules|ui-tour}/{feature}_zh.png` (or `_cn` for legacy)
- Alt text: Describe the UI area and the action context clearly

## Subdirectories

| Directory | Purpose |
| --- | --- |
| `ui-tour/` | UI tour screenshots |
| `journey/` | Getting-started flow screenshots |
| `modules/` | Screenshots for each feature module hub page |

Do not commit empty stub videos (tiny invalid `.mp4` shells) or “LayerAI Docs Placeholder” PNGs. Prefer real screenshots or screen recordings under the paths above.
