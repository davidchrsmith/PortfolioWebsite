# Personal Portfolio

My personal portfolio website built with React, Three.js, and Tailwind CSS. It covers my projects, experience, skills, and has a contact form wired up through EmailJS.

## Tech Stack

- **React 19** — UI
- **Vite** — build tool / dev server
- **Three.js + React Three Fiber** — 3D scene in the hero section
- **Tailwind CSS v4** — styling
- **EmailJS** — contact form (no backend needed)

---

## Local Development

Clone the repo and install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173/PortfolioWebsite/](http://localhost:5173/PortfolioWebsite/) in your browser.

> **Note:** The site is served under the `/PortfolioWebsite/` subpath (set via `base` in `vite.config.js`) to match how GitHub Pages serves it. Make sure to include that path when visiting locally.

---

## Deployment (GitHub Pages)

This site is deployed to GitHub Pages using the [`gh-pages`](https://github.com/tschaub/gh-pages) package. It works by building the project and pushing the compiled `dist/` folder to a separate `gh-pages` branch — GitHub Pages then serves from that branch, not the source code on `main`.

### How it works

- `main` branch — source code only (what you edit)
- `gh-pages` branch — built output only (auto-generated, do not edit manually)
- GitHub Pages is configured to serve from the `gh-pages` branch

### First-time setup

1. Make sure GitHub Pages is configured in your repo:
   - Go to **Settings → Pages**
   - Set **Source** to the `gh-pages` branch, folder `/ (root)`

2. Deploy:

```bash
npm run deploy
```

This runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch automatically.

### Updating the live site after making changes

Whenever you make changes and want them reflected on the live site:

```bash
# 1. Commit your source changes to main as usual
git add -A
git commit -m "your message"
git push

# 2. Build and deploy to GitHub Pages
npm run deploy
```

`npm run deploy` handles the build and the push to `gh-pages` in one step. The live site at `https://davidchrsmith.github.io/PortfolioWebsite/` will update within a minute or two.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Lint with Oxlint |
