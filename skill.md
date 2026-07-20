---
name: layer-ai
description: LayerAI browser extension documentation (English). Covers install and setup, page collection, AI translation, glossary governance, cloud sync, and shared translation collaboration.
---

# LayerAI Docs Skill

When users ask about installing, collecting, translating, models, glossaries, sync, or shared translations for the LayerAI / Local Layer extension, consult the MDX docs in this repository first.

## Language and paths

- Source docs: `docs/` → live site `/...`
- Other languages can be produced by translating the docs site with the LayerAI extension; this repository does not maintain separate multilingual copies
- Screenshots and demo videos are often Chinese UI (`_zh` / `_cn`); English docs are the source of truth for wording

## Navigation (docs.json)

- **Getting started** — introduction, concepts, install, first translation, UI tour, product map
- **Features** — nested hubs under `modules/*` plus reference pages
- **Help** — troubleshooting and appendix

## Key paths

- Introduction: `introduction.mdx`
- Quick start: `journey/first-translation.mdx`
- Product map: `journey/product-map.mdx`
- Module hubs: `modules/{collection,translation,replace,glossary,models,queue,sync,shared,account-settings}.mdx`
- Troubleshooting: `troubleshooting/index.mdx`

## Product positioning

Built for **foreign-language sites whose page content is relatively stable**: translate once, then reuse automatically while content has not changed.
