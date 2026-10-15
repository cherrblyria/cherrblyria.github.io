# Progress

## What Works

- ✅ Single-page site with about, projects, languages, and contact sections.
- ✅ Catppuccin latte theming via CSS variables (`css/catppuccin.css`).
- ✅ Parallax background + container movement (rAF lerp).
- ✅ `#root` anchored at absolute screen center as base position (parallax still active on top); fits every viewport size (internal scroll fallback for short screens).
- ✅ Dynamic age display computed from birth date.
- ✅ noscript styled fallback message.
- ✅ Background artwork source credit link (Pixiv).
- ✅ Icon accents colored per service/language.

## What's Left to Build

- No explicitly requested features pending. Candidates if the user wants them:
  - Page-level scroll for content outside `#root` (currently clipped by `body { overflow: hidden }`; content inside `#root` already scrolls internally).
  - Reduced-motion media query for parallax.
  - Dark theme variant (only latte tokens are used; catppuccin.css may contain other schemes).

## Current Status

- (2026-10-15) Session work complete: particle cursor removed, `#root` centered, memory bank initialized — 3 commits pushed to `origin/main` (tip `4b32fb7`), GitHub Pages auto-deploys. Site now has parallax + dynamic age only.

## Known Issues

- `body { overflow: hidden }` — anything *outside* `#root` that grows past the viewport is clipped/unreachable (content inside `#root` scrolls internally since the centering change).
- `noscript>div` selector in CSS won't match the actual `<noscript><div>` structure reliably across browsers (noscript content parsing differs); fallback styling may not apply.
- Absolute `/assets/bg.webp` path breaks if site is served from a subpath.

## Evolution of Decisions

- Buildless vanilla approach chosen from the start — reinforced: no package.json, no config files present.
- Icon coloring via element IDs rather than classes (existing convention — follow it).
