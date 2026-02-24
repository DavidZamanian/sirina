#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const domain = process.env.SITE_URL || "https://davidzamanian.github.io/sirina";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/privacy", priority: 0.7 },
  { path: "/terms", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
];

const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${domain}${route.path}</loc>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const publicSitemap = path.join(publicDir, "sitemap.xml");
const rootSitemap = path.join(__dirname, "..", "sitemap.xml");
fs.writeFileSync(publicSitemap, sitemapContent, "utf8");
fs.writeFileSync(rootSitemap, sitemapContent, "utf8");
console.log(`Generated ${publicSitemap}`);
console.log(`Generated ${rootSitemap}`);

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

const publicRobots = path.join(publicDir, "robots.txt");
const rootRobots = path.join(__dirname, "..", "robots.txt");
fs.writeFileSync(publicRobots, robotsContent, "utf8");
fs.writeFileSync(rootRobots, robotsContent, "utf8");
console.log(`Generated ${publicRobots}`);
console.log(`Generated ${rootRobots}`);
