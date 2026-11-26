# AGENTS.md

Personal portfolio for `cherrblyria.github.io` — plain static HTML/CSS/JS, no framework/bundler/tests/lint. Deployed by GitHub Pages from repo root.

## Commands

```bash
npm install                 # or: nix develop (flake.nix provides Node)
npm run dev                 # Tailwind watch + serve (repo root)
npx tailwindcss -i ./src/input.css -o ./src/output.css   # one-off CSS build (same as CI)
npm run format              # Prettier --write . (whole repo)
```

- `npm run css` is **not** a one-off build: it runs `format` + `tailwindcss --watch` concurrently, never exits, and rewrites files. Use the `npx tailwindcss ...` command for CI-equivalent builds.
- Serve the repo root (`npm run serve` / `npm run dev`); opening `index.html` via `file://` breaks root-absolute `/assets/...` paths and the module script.
- No `.prettierignore`; `npm run format` rewrites the whole repo, including docs like `AGENTS.md`.
- No test/lint/typecheck. Verify by building CSS, loading the page, and checking the browser console.

## Generated CSS / Tailwind v4

- `src/output.css` is **gitignored** and linked by `index.html`; fresh clones look unstyled until generated. Never hand-edit it.
- No `tailwind.config.*` or Prettier config files. Tailwind v4 theme tokens live in `@theme` in `src/input.css`; dark mode overrides CSS variables in a `prefers-color-scheme: dark` block. Edit `src/input.css` and Tailwind classes in `index.html`, then regenerate.

## Layout / Behavior

- `index.html` is the whole page: `#home`, `#about`, `#projects`, `#stack`, `#contact` anchor sections. Only `#home` has real content; others are placeholder cards.
- `src/script.js` toggles `.scrolled` on `body > header > div` on scroll; restructuring the header breaks this selector. It is loaded as `<script type="module" src="src/script.js">`.
- `assets/` uses root-absolute paths (e.g. `/assets/pfp.webp`) because Pages serves the repo root.

## Deploy

- `.github/workflows/deploy.yml`: push to `main` (or manual dispatch) runs `npm ci`, builds CSS with `npx tailwindcss -i ./src/input.css -o ./src/output.css`, then uploads the whole repo as the Pages artifact. Only `main` deploys.

## Conventions

- Prettier + `prettier-plugin-tailwindcss` own formatting; do not hand-reorder Tailwind classes.
- Commit messages use Conventional Commits with scope, e.g. `feat(hero): ...`, `fix(nav): ...`.
