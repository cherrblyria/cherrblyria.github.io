# Tech Context

## Technologies

- **HTML5** — single `index.html`, `lang="en"`, viewport meta, noscript fallback.
- **CSS3** — custom properties, `backdrop-filter`, `translate3d` transforms, CSS `@import` for theme file. No preprocessor. (No `@keyframes` remain after the particle-cursor removal.)
- **Vanilla JavaScript (ES module)** — `script.js` loaded with `<script type="module">`. No dependencies, no npm/package.json.
- **Hosting** — GitHub Pages via user site repo `cherrblyria/cherrblyria.github.io` (branch `main`).

## External Dependencies (CDN only)

- Google Fonts: **Rubik** (variable 300–900, incl. italic), **Noto Sans Thai Looped** (variable 100–900).
- cdnjs **Font Awesome 7.3.0** (solid + brand icons).
- Inline SVGs for Python and Nix icons (no extra requests).

## Development Setup

- No build/lint/test tooling exists — open `index.html` in a browser or serve the directory statically (e.g. `python -m http.server`) to preview.
- Deployment = push to `main`; GitHub Pages serves the repo root.

## Technical Constraints

- Site depends on JS; without it only the noscript notice shows.
- `body { overflow: hidden }` and hidden scrollbars — no page-level scroll; `#root` (fixed, centered, viewport-capped) scrolls internally if content exceeds viewport height.
- Absolute asset path `/assets/bg.webp` assumes site served at domain root (fine for username.github.io).

## File Inventory (as documented)

- `/index.html`
- `/css/style.css`
- `/css/catppuccin.css`
- `/script.js`
- `/assets/favicon.ico`, `/assets/bg.webp`
- `/.clinerules/memory-bank.md` (memory bank rules)
- `/memory-bank/*.md` (project docs: brief, contexts, patterns, progress)
