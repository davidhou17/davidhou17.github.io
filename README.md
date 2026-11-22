# davidhou17.github.io

Personal site: https://davidhou17.github.io/

## Edit content

All copy lives in `src/content.ts`. The page, `<head>` metadata, JSON-LD, `/llms.txt` and `sitemap.xml` are all generated from it at build time.

## Develop

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # prerendered static site in dist/
npm run preview  # serve dist/ at http://localhost:4173
```

`npm run build` renders the React page to static HTML (`scripts/prerender.mjs`) and strips the JavaScript bundle, so production is HTML + CSS only.

## Layout

- `src/Home.tsx`: the page and its block-by-block build animation
- `src/Intro.tsx`: terminal intro (`/build-website`)
- `src/AgentView.tsx`: the "agent" view (the page as `llms.txt`)
- `src/llms.ts`: markdown used for `/llms.txt` and the agent view
- `scripts/prerender.mjs`: static HTML, head tags, JSON-LD, `llms.txt`, `sitemap.xml`

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages.
