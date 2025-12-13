import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../site";

function stripIndex(id: string) {
  return id.replace(/\/index$/, "");
}

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() ?? SITE.url;

  const posts = await getCollection("posts");
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const postPages = Math.max(1, Math.ceil(posts.length / 10));

  const urls: Array<{ loc: string; lastmod?: string }> = [];

  urls.push({ loc: new URL("/", baseUrl).toString() });
  urls.push({ loc: new URL("/posts/", baseUrl).toString() });
  for (let page = 2; page <= postPages; page++) {
    urls.push({ loc: new URL(`/posts/${page}/`, baseUrl).toString() });
  }

  for (const post of posts) {
    urls.push({
      loc: new URL(`/post/${stripIndex(post.id)}/`, baseUrl).toString(),
      lastmod: post.data.date.toISOString(),
    });
  }

  for (const article of articles) {
    urls.push({
      loc: new URL(`/articles/${stripIndex(article.id)}/`, baseUrl).toString(),
      lastmod: article.data.date.toISOString(),
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const lastmod = u.lastmod
      ? `\n    <lastmod>${xmlEscape(u.lastmod)}</lastmod>`
      : "";
    return `  <url>
    <loc>${xmlEscape(u.loc)}</loc>${lastmod}
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};


