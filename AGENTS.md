# AGENTS.md

Personal portfolio site for cherrblyria, deployed as a GitHub Pages user site (`cherrblyria.github.io`). Plain static HTML/CSS/JS — no framework, no bundler, no tests, no lint step.

## Commands

```bash
npm install                 # or: nix develop (flake provides Node 22)
npm run dev                 # Tailwind watch + `serve` on http://localhost:3000
npx tailwindcss -i ./src/input.css -o ./src/output.css   # one-off CSS build (same as CI)
npm run format              # Prettier, also sorts Tailwind classes in HTML
```

- `npm run css` is **not** a plain build: it runs `format` and `tailwindcss --watch` concurrently, so it never exits and rewrites files across the repo. Use the `npx tailwindcss ...` command for a single build.
- `npm run serve` serves the repo root as-is; there is no dev server rewrite, so `index.html` is the entrypoint. Use it instead of opening `index.html` directly — `/assets/...` paths and the module script break under `file://`.
- `npm run format` runs `prettier --write .` over the whole repo (no `.prettierignore`), so it also rewrites `AGENTS.md` and any other docs. Expect unrelated formatting churn in diffs.
- There is no test/lint/typecheck command. Verification = build CSS, open the page, check the console.

## Generated CSS

- `src/output.css` is **gitignored** and loaded by `index.html` as `./src/output.css`. It does not exist in a fresh clone; the site looks unstyled until you generate it.
- Never hand-edit `src/output.css` — edit `src/input.css` and Tailwind classes in `index.html`, then regenerate.
- Tailwind v4: there is **no** `tailwind.config.js`. Theme tokens (fonts, `accent`/`canvas`/`surface`/`edge`/`ink` colors, grid background) are defined in `@theme` inside `src/input.css`; content is auto-detected. Dark mode overrides those CSS variables in a `prefers-color-scheme` block.

## Layout

- `index.html` — entire page; styling is almost entirely Tailwind utility classes, with `#home`/`#about`/`#projects`/`#stack`/`#contact` sections and anchor nav. Only `#home` has real content; the other four are single empty placeholder cards waiting to be filled in.
- `src/input.css` — Tailwind import, theme tokens, plus `.scrolled` component classes applied via `@apply`.
- `src/script.js` — single scroll listener toggling `.scrolled` on the header's inner div (selector `body > header > div`; restructuring the header breaks it).
- `assets/` — images referenced with root-absolute paths (e.g. `/assets/pfp.webp`), which works because the repo root is the Pages site root.
- `.github/workflows/deploy.yml` — on push to `main`: `npm ci`, build CSS with `npx tailwindcss`, upload the whole repo as the Pages artifact. **Only `main` deploys**; work on other branches (e.g. `redesign`) is not published.

## Conventions

- Prettier + `prettier-plugin-tailwindcss` owns formatting; class order in HTML is tool-managed. Run `npm run format` instead of reordering by hand.
- Commit messages follow Conventional Commits with a scope, e.g. `feat(hero): ...`, `fix(nav): ...`.
