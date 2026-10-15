# Product Context

## Why This Project Exists

This is Nutty's personal GitHub Pages site — a small home on the internet to introduce themselves, show off projects (Pymoro, NixOS config "Haruka", archived dotfiles), list languages/technologies, and provide contact links (email, Discord, Instagram, GitHub).

## How It Works

- `index.html` contains all content as four `<section>`s inside a single `#root` container: `#about`, `#projects`, `#language`, `#contact`.
- `css/style.css` styles everything using Catppuccin CSS variables imported from `css/catppuccin.css`.
- `script.js` (loaded as a module) adds two behaviors:
  1. **Dynamic age** — computes age from birth date `2011-09-12` and fills the `.age` span.
  2. **Parallax** — lerped pointer-driven parallax on the background image (`--bg-x/y`) and `#root` (`--root-x/y`).
  - (Particle cursor was removed entirely on 2026-10-15.)

## UX Goals

- Cozy, playful, personalized aesthetic (rounded cards, glow shadows, pastel Catppuccin latte palette).
- Responsive: `#root` is fixed-anchored at exact screen center (`top/left: 50%` + `translate(-50%,-50%)`, parallax composed on top); width/height capped to viewport minus gutter so it fits every screen size. If content exceeds viewport height, `#root` scrolls internally (scrollbar hidden).
- Site intentionally hides scrollbars and sets `body { overflow: hidden }` — no page-level scrolling; any overflow lives inside `#root`.
- Requires JavaScript; a styled `<noscript>` notice is shown otherwise.

## Key Conventions

- Accents colored per-icon via IDs (`#html`, `#css`, `#js`, `#python`, `#nix`, `#email`, `#discord`, `#instagram`, `#github`) mapped to Catppuccin colors.
- External font/icon CDNs: Google Fonts, cdnjs Font Awesome 7.3.0.
