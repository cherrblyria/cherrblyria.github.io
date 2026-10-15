# Active Context

## Current State

- Memory bank initialized (this file set) — first documentation of the project.
- Site is functional and complete as a single-page landing site.
- Latest local work (2026-10-15): 3 commits on `main` — `feat: remove cursor effect`, `feat: center root on screen`, `chore: add memory bank`. Not yet pushed to `origin/main`.

## Recent Changes

- (2026-10-15) Committed all session work as 3 commits (cursor removal, root centering, memory bank docs); also removed a stray blank line artifact in `script.js`.
- (2026-10-15) `#root` re-anchored: base position is now absolute screen center (`position: fixed; top/left: 50%` + `translate(-50%,-50%)`), with parallax `translate3d` composed on top — the card still moves, but always around a centered base. Sized with `min(650px+3em+2px, 100vw−2em−16px)` width and `max-height: 100dvh−2em−16px` + internal hidden-scrollbar overflow so it fits every viewport.
- (2026-10-15) Removed the particle cursor effect entirely (`#particle-cursor` div, `.particle` styles, `flyAndFade` keyframes, and the `createParticle` logic in `script.js`).
- (Initialization) Documented existing codebase: `index.html`, `css/style.css`, `css/catppuccin.css`, `script.js`, `assets/`.

## Next Steps / Potential Work

- No explicit pending tasks. Common likely directions:
  - Content updates (new projects, links, bio tweaks).
  - Page growth beyond the viewport: `body { overflow: hidden }` still clips anything outside `#root`, but `#root` itself now scrolls internally (`overflow-y: auto`, hidden scrollbar) — revisit only if content outside `#root` grows.
  - Accessibility review (focus states, reduced-motion support for parallax).

## Active Decisions & Considerations

- Keep the site buildless; do not introduce frameworks or bundlers unless the user asks.
- Respect the noscript requirement: JS-driven content (age) has placeholder text fallback in HTML.

## Patterns & Preferences

- Catppuccin **latte** theme variables (`--ctp-latte-*`, plus `-rgb`/`-hsl`/`-oklch` variants) used throughout.
- Soft rounded card UI: `border-radius` 1em (sections) / 2.5em (`#root`), glow `box-shadow` on hover.
- Centered-base parallax: `#root` uses `transform: translate(-50%, -50%) translate3d(var(--root-x), var(--root-y), 0)` — translations compose, so centering and parallax offsets stack.
- Lerp-based animation loop (`requestAnimationFrame`) for parallax smoothing (`0.05` factor).
