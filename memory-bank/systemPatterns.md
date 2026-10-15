# System Patterns

## Architecture

Plain static site — no build, no framework:

```
index.html          → markup + external CDN links (fonts, Font Awesome)
css/style.css       → @import "catppuccin.css"; all component styles
css/catppuccin.css  → Catppuccin design tokens as CSS custom properties
script.js           → ES module (<script type="module">) with 3 independent features
assets/             → favicon.ico, bg.webp (background image)
```

## Key Technical Decisions

1. **CSS custom properties for theming** — colors are `--ctp-latte-<name>` with `-rgb`, `-hsl`, `-oklch` variants; alpha via `rgba(var(--x-rgb) / 0.4)`.
2. **Parallax via CSS variables** — JS writes `--bg-x/y` on `body` and `--root-x/y` on `#root`; CSS applies `transform: translate3d(...)` with `will-change: transform`. Smoothed with linear interpolation in a rAF loop.
3. **Centered base + parallax composition** — `#root` is `position: fixed; top/left: 50%` with `transform: translate(-50%, -50%) translate3d(var(--root-x), var(--root-y), 0)`: exact screen center as base position, parallax offsets stacked on top. `box-sizing: border-box`; width = `min(calc(650px + 3em + 2px), calc(100vw - 2em - 16px))`, `max-height: calc(100dvh - 2em - 16px)` (16px = parallax travel, `ROOT_STRENGTH = 8` each side), with `overflow-y: auto` + hidden scrollbar as fallback for short viewports.
3. **Background parallax layering** — `body::before` with `inset: -30px` and `z-index: -1` gives room to move without exposing edges (strength: `BACKGROUND_STRENGTH = 30`, root: `ROOT_STRENGTH = 8`).
4. **Dynamic age** — computed client-side from `new Date('2011-09-12')` and injected into `.age` span.
5. **Parallax** — rAF lerp loop writes `--bg-x/y` (body) and `--root-x/y` (#root) CSS variables consumed by `translate3d` transforms.

## Component Relationships

- `index.html` ids/classes are the contract with CSS/JS: `#root`, `.age`, `.name`, `.background-source`, section ids `#about/#projects/#language/#contact`, icon ids.
- Section hover glow and `#root` glow share `rgba(var(--ctp-latte-text-rgb) / 0.2)` shadow recipe.

## Critical Implementation Paths

- Any change to icon ids must update both `index.html` and the corresponding `#id { color: ... }` rules in `css/style.css`.
- Changing background image path: `css/style.css` references `/assets/bg.webp` (absolute path).
- Changing/removing `.age` placeholder requires keeping selector `document.querySelector('.age')` in sync.
