// Farlaz — Feed RSS de artículos (/feed.xml y /en/feed.xml)
// Lee content/posts.json del propio sitio y solo incluye los artículos cuya
// fecha ya llegó (hora de Panamá). MailerLite lo lee para mandar el boletín
// automáticamente cada jueves.

const SITE = "https://farlaz.com";

function todayPanama() {
  return new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);
}

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async (req) => {
  const url = new URL(req.url);
  const lang = url.pathname.startsWith("/en/") || url.searchParams.get("lang") === "en" ? "en" : "es";

  const res = await fetch(`${SITE}/content/posts.json`, { headers: { "cache-control": "no-cache" } });
  const data = res.ok ? await res.json() : { posts: [] };
  const today = todayPanama();

  const posts = (data.posts || [])
    .filter((p) => p.date && String(p.date).slice(0, 10) <= today)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 20);

  const items = posts.map((p) => {
    const loc = p[lang] || p.es;
    const link = `${SITE}/article.html?a=${encodeURIComponent(p.slug)}${lang === "en" ? "&lang=en" : ""}`;
    // 12:00 UTC = 7:00 en Panamá, para que la fecha nunca caiga en el día anterior
    const pub = new Date(`${String(p.date).slice(0, 10)}T12:00:00Z`).toUTCString();
    return `    <item>
      <title>${esc(loc.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="false">farlaz-${esc(p.slug)}-${lang}</guid>
      <pubDate>${pub}</pubDate>
      <description>${esc(loc.excerpt)}</description>
    </item>`;
  });

  const title = lang === "en" ? "Farlaz — Insights" : "Farlaz — Análisis";
  const desc =
    lang === "en"
      ? "One analysis a week on markets, companies and personal finance. Education, not recommendations."
      : "Un análisis a la semana sobre mercados, empresas y finanzas personales. Educación, no recomendaciones.";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(title)}</title>
    <link>${SITE}/insights</link>
    <atom:link href="${SITE}${lang === "en" ? "/en/feed.xml" : "/feed.xml"}" rel="self" type="application/rss+xml"/>
    <description>${esc(desc)}</description>
    <language>${lang}</language>
${items.join("\n")}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=600",
    },
  });
};

export const config = { path: ["/feed.xml", "/en/feed.xml"] };
