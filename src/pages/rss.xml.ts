import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../site";

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function stripIndex(id: string) {
  return id.replace(/\/index$/, "");
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() ?? SITE.url;

  const posts = await getCollection("posts");
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const items = [
    ...posts.map((p) => ({
      kind: "post" as const,
      title: p.data.title ?? stripIndex(p.id).split("/").at(-1) ?? "Post",
      date: p.data.date,
      url: new URL(`/post/${stripIndex(p.id)}/`, baseUrl).toString(),
      description: p.data.description,
    })),
    ...articles.map((a) => ({
      kind: "article" as const,
      title: a.data.title,
      date: a.data.date,
      url: new URL(`/articles/${stripIndex(a.id)}/`, baseUrl).toString(),
      description: a.data.description,
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const selfUrl = new URL("/rss.xml", baseUrl).toString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(SITE.name)}</title>
    <link>${xmlEscape(baseUrl)}</link>
    <description>${xmlEscape(SITE.description)}</description>
    <atom:link href="${xmlEscape(selfUrl)}" rel="self" type="application/rss+xml" />
${items
  .map((item) => {
    const description = item.description
      ? `\n      <description>${xmlEscape(item.description)}</description>`
      : "";
    return `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(item.url)}</link>
      <guid isPermaLink="true">${xmlEscape(item.url)}</guid>
      <pubDate>${xmlEscape(item.date.toUTCString())}</pubDate>${description}
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};


