import type { APIRoute } from "astro";
import { SITE } from "../site";

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
  const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${xmlEscape(sitemapUrl)}</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};


