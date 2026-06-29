# apairo-robotics.github.io

Organisation landing site for **apairo** — the open robotics sensor-data stack.
A hub that introduces the ecosystem and links out to each package and its docs.

Served at the org root: **https://apairo-robotics.github.io/**
(the `apairo` package docs live alongside it as a project page under `/apairo/`.)

## Stack

- [Astro](https://astro.build) — static build, near-zero client JS
- Hand-authored SVG + CSS for the "machining" motif (no animation libraries)
- Fonts: Fraunces (display) · Hanken Grotesk (body) · JetBrains Mono (chrome)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # output to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with the
official `withastro/action` and publishes to GitHub Pages.

One-time setup on GitHub: **Settings → Pages → Build and deployment → Source:
GitHub Actions**.

## Structure

```
src/
├── pages/index.astro        # page shell, <head>, client scripts
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Machinery.astro       # discreet encoder-wheel + gantry animation
│   ├── Flow.astro            # the 5-package pipeline (assembly-line shuttle)
│   ├── Packages.astro
│   ├── Quickstart.astro
│   └── Footer.astro
└── styles/global.css         # design tokens + base
public/assets/                # brand logo / mark
```
