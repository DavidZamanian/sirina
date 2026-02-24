# Sirina Chat Website

Vite + React website for your AI Chat app with four pages:
- Home
- Privacy Policy
- Terms of Use
- Contact

The infrastructure mirrors the setup from `repigo-website`:
- GitHub Pages deploy with `gh-pages`
- Dynamic sitemap/robots generation
- Favicon generation + cache-busting script
- SPA redirect handling for direct route loads on GitHub Pages

## Commands

Install dependencies:
```bash
npm install
```

Run locally with Vite on port 3000:
```bash
npm run dev
```

Test (type-check + production build):
```bash
npm run test
```

Build production files:
```bash
npm run build
```

Preview production build locally:
```bash
npm run preview
```

Deploy to GitHub Pages (`gh-pages` branch):
```bash
npm run deploy
```

## Deployment notes

1. Push this repository to GitHub.
2. In GitHub repository settings, enable **Pages** and set the source to **Deploy from a branch** -> `gh-pages`.
3. The default production base path is set to `/sirina/` in `vite.config.mts`.

If the repo name changes, update:
- `vite.config.mts` base path
- `package.json` `homepage`
- `scripts/generate-sitemap.js` default `SITE_URL`
- `public/404.html` `segmentCount` only if path depth changes

## Content customization

Update these placeholder emails before going live:
- `support@sirinachat.ai`
- `privacy@sirinachat.ai`
- `legal@sirinachat.ai`
