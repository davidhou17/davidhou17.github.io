// Post-build: render the page to static HTML, inject JSON-LD, and generate llms.txt + sitemap.xml
// from src/content.ts so crawlers and agents get full content without running JavaScript.
import { readFileSync, writeFileSync, rmSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const ssrDir = resolve("dist-ssr");
const { render, toMarkdown, site, sections } = await import(
  pathToFileURL(resolve(ssrDir, "entry-server.js")).href
);

const today = new Date().toISOString().slice(0, 10);
const sameAs = site.links.filter((l) => l.url.startsWith("http")).map((l) => l.url);

// JSON-LD: ProfilePage whose main entity is the Person.
const personId = `${site.url}#person`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}#profile`,
      url: site.url,
      name: site.name,
      description: site.description,
      dateModified: today,
      inLanguage: "en",
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: site.url,
      image: site.image,
      email: `mailto:${site.email}`,
      description: site.summary,
      worksFor: { "@type": "Organization", name: site.employer.name, url: site.employer.url },
      alumniOf: site.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
      homeLocation: { "@type": "Place", name: site.location },
      knowsAbout: site.knowsAbout,
      sameAs,
    },
    ...sections
      .flatMap((s) => s.items)
      .filter((i) => i.url?.startsWith("https://github.com/davidhou17/"))
      .map((i) => ({
        "@type": "SoftwareSourceCode",
        name: i.title,
        description: i.description,
        codeRepository: i.url,
        author: { "@id": personId },
      })),
  ],
};
const jsonLdTag = `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`;

// The page has no interactive parts, so production ships static HTML + CSS only.
// To add client-side interactivity later, delete the script-stripping below and the page will hydrate.
// <head> metadata, generated from src/content.ts so it can't drift from the page.
const esc = (v) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const headTags = [
  `<title>${esc(site.title)}</title>`,
  `<meta name="description" content="${esc(site.description)}" />`,
  `<meta property="og:title" content="${esc(site.title)}" />`,
  `<meta property="og:description" content="${esc(site.summary)}" />`,
  `<meta name="twitter:title" content="${esc(site.title)}" />`,
  `<meta name="twitter:description" content="${esc(site.summary)}" />`,
].join("\n    ");

const indexPath = resolve(dist, "index.html");
const html = readFileSync(indexPath, "utf8")
  .replace("<!--app-html-->", render())
  .replace("<!--head-->", headTags)
  .replace("<!--json-ld-->", jsonLdTag)
  .replace(/\s*<script type="module"[^>]*><\/script>/g, "")
  .replace(/\s*<link rel="modulepreload"[^>]*>/g, "");
writeFileSync(indexPath, html);
for (const f of readdirSync(resolve(dist, "assets"))) {
  if (f.endsWith(".js")) rmSync(resolve(dist, "assets", f));
}

// llms.txt: same markdown the page shows in its "Agent" view (src/llms.ts).
writeFileSync(resolve(dist, "llms.txt"), toMarkdown());

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`;
writeFileSync(resolve(dist, "sitemap.xml"), sitemap);

rmSync(ssrDir, { recursive: true, force: true });
console.log("Prerendered index.html, llms.txt, sitemap.xml");
