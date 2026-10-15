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
  - Scroll support / viewport fitting if content grows (`overflow: hidden` currently).
  - Reduced-motion media query for parallax.
  - Dark theme variant (only latte tokens are used; catppuccin.css may contain other schemes).

## Current Status

- Particle cursor effect removed entirely (2026-10-15) — site now has parallax + dynamic age only. Memory bank kept in sync.

## Known Issues

- `body { overflow: hidden }` — content overflow would be clipped/unreachable on small screens.
- `noscript>div` selector in CSS won't match the actual `<noscript><div>` structure reliably across browsers (noscript content parsing differs); fallback styling may not apply.
- Absolute `/assets/bg.webp` path breaks if site is served from a subpath.

## Evolution of Decisions

- Buildless vanilla approach chosen from the start — reinforced: no package.json, no config files present.
- Icon coloring via element IDs rather than classes (existing convention — follow it).
