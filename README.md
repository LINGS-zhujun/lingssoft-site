# LINGSSOFT Site

Official LINGSSOFT Site (Creative Tim template based)

## Overview

This repository hosts the official LINGSSOFT website built on Creative Tim’s Material Kit template. The template was purchased, and all template sources and design assets remain under Creative Tim copyright.

## Quick Start

- Recommended Node.js: `v20+`
- Package manager: `npm` (this repo includes `package-lock.json`)

There are two supported developer workflows in this repo: the original CRA (`react-scripts`) workflow and a Vite-based workflow (PoC). Use the one that fits your needs:

1. CRA (legacy) — useful if you need the original `react-scripts` behaviour

```bash
# Install dependencies (clean)
npm ci

# Start CRA development server (webpack dev server)
npm start

# Build production bundle with react-scripts
npm run build
# Output (CRA): ./build/

# Serve the CRA build locally (example)
npx serve -s build -l 3002
```

2. Vite (recommended for active development)

Vite provides fast cold starts, instant hot module replacement (HMR) and faster builds. The repo includes a Vite PoC and scripts that work side-by-side with the CRA scripts.

```bash
# Install dependencies (clean)
npm ci

# Start Vite dev server (HMR)
npm run dev:vite
# If the default port is occupied, pass a port explicitly:
npm run dev:vite -- --port 5173

# Build production bundle with Vite
npm run build:vite
# Preview the built production bundle locally (serves the output of `build:vite`)
npm run preview:vite
# Example: preview on a custom port
npm run preview:vite -- --port 5177
```

Notes about Vite vs CRA

- `npm start` runs the original CRA dev server (webpack + react-scripts). It can be left as a fallback but you should prefer Vite for day-to-day development when possible.
- Vite uses `import.meta.env` for environment variables and `base` handling. If you see runtime errors like `process is not defined`, that means code referenced `process.env` directly; the codebase has been updated to prefer safe fallbacks (see `src/i18n.jsx`).
- When using Vite, open the exact `Local:` URL printed by the Vite CLI (it will probe ports and show the final URL, e.g. `http://localhost:5173/lingssoft-site/`).

Common helper scripts

```bash
# Lint source files
npm run lint

# Format files with Prettier
npm run prettify
```

## Environment Variables

- Keep secrets and environment-specific values in `.env` and document them via `.env.example`.
- Never commit `.env`; it is already ignored by `.gitignore`.

## License & Notices

- This project uses a paid Creative Tim premium template. A purchased license (e.g., Freelancer) lets you modify the sources for your project but prohibits redistributing the template files or reselling it as a template.
- If you need broader team access or redistribution rights, consider upgrading the license tier (Startup / Company / Enterprise).
- Full terms: https://www.creative-tim.com/license

## Recommended Maintenance

1. Run `npm audit` regularly to monitor security issues.
2. Plan a future migration from CRA (`react-scripts`) to a modern bundler such as Vite for faster builds and smaller bundles.
3. Keep the `homepage` field aligned with the actual deployment URL (currently `https://www.lingssoft.com` in `package.json`).

## Docker / CI Notes

- If you already have Dockerfile/docker-compose definitions, make sure CI uses `node:20`, runs `npm ci`, and then `npm run build`.
