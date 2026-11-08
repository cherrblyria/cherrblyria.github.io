get node, npm

```bash
nix shell nixpkgs#nodejs
```

install deps

```bash
npm install
```

preview

```bash
npx serve
```

build css

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

format

```
npx prettier --write .
```
