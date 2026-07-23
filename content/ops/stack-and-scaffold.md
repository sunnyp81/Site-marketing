---
title: "Stack Decision: Astro + Content Collections for site.marketing"
description: "Why site.marketing runs on Astro instead of 11ty or Next.js, and the exact repo scaffold — content directories, schema defaults, RSS, sitemap — built for LLM crawlability."
slug: /ops/stack-and-scaffold
type: adr
noindex: true
---

<!--
PRODUCTION NOTES (infra / schema)
- This is an internal ADR living under /ops/*. It is excluded from sitemap, robots-disallowed, and noindex. Not a citation target.
- Deploy target: Cloudflare Pages, git-integration build. Static output → NO Astro adapter required.
- Node pinned to 22 LTS (.nvmrc + CF Pages env var NODE_VERSION=22).
- Schema components referenced (Article, BreadcrumbList, FAQPage, Person, DefinedTerm, Organization) are hand-authored JSON-LD in BaseLayout — no schema plugin dependency.
- OG image generation is build-time, cache-keyed on a hash of title + dateModified; see §5 for the ceiling-protection note.
-->

# Stack Decision: Astro + Content Collections for site.marketing

This is an Architecture Decision Record (ADR). It records the stack choice for site.marketing and the repo scaffold that implements it. It is binding until the review date or a stated flip condition is met.

| Field | Value |
|---|---|
| **Status** | Accepted |
| **Date** | 2026-07-23 |
| **Owners** | Sunny + 1 |
| **Supersedes** | Nothing (first stack ADR) |
| **Review date** | 2027-01-23 |
| **Flip conditions** | > 4 non-technical authors, OR > 2,000 pages (see §3) |

---

## §1 — Decision

**site.marketing runs on Astro 5.x with `output: 'static'`, zero client JavaScript by default, and Content Collections whose frontmatter is validated by Zod at build time. It deploys to Cloudflare Pages via git-integration, no adapter. Every content page ships as complete HTML in the initial response; interactive widgets are opt-in Astro islands confined to tool pages, never citation targets. This is chosen so the site passes its own crawlability audit.**

The one-sentence why: the Technical Foundation pillar at [`/technical/javascript-rendering`](/technical/javascript-rendering) will state that JS-rendered content is invisible to most LLM crawlers — so site.marketing must serve its own content in initial HTML, or the entire pillar is bluffing.

Consequences:

- **Positive:** the acceptance tests in §6 are literally the argument the site sells. The build enforces what the content preaches.
- **Positive:** a two-person team ships Markdown, not a CMS pipeline. Git is the editorial system of record.
- **Negative:** interactive features cost deliberate effort (islands, hydration directives). The friction is deliberate: adding client JS should require a decision, not a default.

> **Sunny:** If we can't serve our own pages to a crawler that we tell clients to serve pages to, we should sell insurance instead. The site is the case study or it's a brochure.

---

## §2 — Requirements the stack must satisfy

Seven requirements. Each has a pass test, not a preference. The stack is scored against these in §3, and the site is scored against them at release in §6.

| # | Requirement | Pass test | Why it exists |
|---|---|---|---|
| 1 | 100% of article content in initial HTML | `curl` the route, no JS execution; rendered body text matches the DOM after hydration | The core claim of [`/technical/javascript-rendering`](/technical/javascript-rendering) |
| 2 | 0 KB client JS on content pages by default | Network panel / build output shows no `.js` requested on article routes | Retrieval cost and [crawl budget](/glossary/crawl-budget); LLM crawlers rarely execute JS |
| 3 | Markdown/MDX-native authoring with typed frontmatter, no CMS | An author adds a page with a text file and a git commit; a malformed frontmatter field fails the build, not production | Team is Sunny + 1; no build team, no CMS budget |
| 4 | Build < 60s at 200 pages | `time astro build` on a 200-page fixture < 60s | Topical map = 60 cluster pages + glossary + teardowns; ×3 headroom |
| 5 | First-class RSS + sitemap + canonical control | All three generate from one source of truth without config conflicts | Feeds and sitemaps are LLM ingestion surfaces |
| 6 | Semantic, chunk-clean markup | One `<h1>`; answer text is the immediate sibling of its `<h2>`/`<h3>` — no wrapper `<div>` between heading and answer | Chunk retrieval per [`/how-ai-search-works/`](/how-ai-search-works/) |
| 7 | `llms.txt` + per-bot access as static files | Files served verbatim from `/public`, no runtime | Policy lives at [`/technical/llms-txt`](/technical/llms-txt) |

---

## §3 — The contest: Astro vs 11ty vs Next.js

Scored on the §2 rubric. **Scoring rule: a point requires a full Pass; Partial scores zero.** Result: Astro **7/7**, 11ty **6/7**, Next.js **4/7**.

| # | Requirement | Astro | 11ty | Next.js |
|---|---|---|---|---|
| 1 | Content in initial HTML | **Pass** — static HTML by default | **Pass** — static HTML | **Fail** — App Router ships RSC payload + hydration even when static |
| 2 | 0 KB client JS default | **Pass** — islands are opt-in | **Pass** — no JS unless added | **Fail** — framework runtime shipped by default |
| 3 | Markdown-native, typed | **Pass** — Collections + Zod + MDX | **Partial** — Markdown yes, no typed frontmatter, no component islands | **Pass** — MDX supported |
| 4 | Build < 60s @ 200pp | **Pass** — fast static builds | **Pass** — very fast | **Pass** — 200 static pages fits the ceiling |
| 5 | RSS + sitemap + canonical | **Pass** — first-party integrations | **Pass** — plugins available | **Pass** — available |
| 6 | Chunk-clean markup | **Pass** — clean output, no wrapper soup | **Pass** — full markup control | **Fail** — RSC/layout wrapper `<div>`s between heading and content |
| 7 | `llms.txt` / bot files | **Pass** — `/public` static | **Pass** — passthrough | **Pass** — `/public` static |

**Next.js is disqualified, not runner-up.** The App Router ships a JavaScript payload and serialized RSC data even for pages with no interactivity. "You can configure it off" is a standing maintenance liability for a two-person team — every dependency bump risks reintroducing hydration. A content site on Next.js is a framework tax with no rebate.

**11ty is the honourable second.** It loses its point on requirement #3: no typed content collections, so a malformed frontmatter date fails in production instead of at build. It also loses on islands — when the interactive 90-minute-audit checklist widget ships, Astro puts JS on exactly one component; 11ty makes that artisanal. Good tool, wrong contest.

**Astro's `<astro-island>` custom-element risk is named and dismissed.** Islands wrap hydrated components in a custom element. That is acceptable because content pages use zero islands — interactive widgets live only on tool pages, which are excluded from the citation-target set and from §6 acceptance tests.

### Q&A

**Why not a headless CMS?**
No. At two people, git is the CMS. A headless CMS adds an API dependency, an auth surface, and a second source of truth for content that is already plain text.

**Why not WordPress?**
No. Its rendering pipeline and plugin drift fail requirement #6 — theme and plugin output routinely inserts wrapper `<div>`s between headings and content, markup the team cannot fully control.

**When would this decision flip?**
Two conditions, either sufficient: more than 4 non-technical authors (git authoring stops scaling), or more than 2,000 pages (build-time and DX pressures warrant re-evaluation). Both are logged against the header review date.

---

## §4 — Repo scaffold

`src/content/` maps 1:1 to the topical map. **The URL rule is a spec, not a preference: URL = collection + slug. No dates in URLs. No `/blog/`.** Pillar #1 lives at root ([`/how-to-market-a-website/`](/how-to-market-a-website/)) — the topical map's rule is "pick one, never both"; this ADR picks root.

```
site-marketing/
├── .nvmrc                      # 22  (Cloudflare Pages: NODE_VERSION=22)
├── astro.config.mjs
├── src/
│   ├── content/
│   │   ├── strategy/           → /strategy/*        (core 1, flat URLs)
│   │   ├── visibility/         → /visibility/*      (core 2)
│   │   ├── content-ops/        → /content-ops/*     (core 3)
│   │   ├── technical/          → /technical/*       (core 4)
│   │   ├── cro/                → /cro/*             (core 5)
│   │   ├── distribution/       → /distribution/*    (core 6)
│   │   ├── measurement/        → /measurement/*     (core 7)
│   │   ├── ai-search/          → /how-ai-search-works/*  (outer 1)
│   │   ├── psychology/         → /psychology/*      (outer 2)
│   │   ├── entity/             → /entity/*          (outer 3)
│   │   ├── glossary/           → /glossary/*        (outer 4, DefinedTerm template)
│   │   ├── teardowns/          → /teardowns/*       (outer 5)
│   │   ├── pillars/            → root URLs (/how-to-market-a-website/)
│   │   └── config.ts           # Zod schemas (below)
│   ├── layouts/
│   │   └── BaseLayout.astro     # JSON-LD, OG, canonical — single source
│   ├── components/
│   └── pages/
│       ├── [...slug].astro      # collection → route mapping (prod: filters draft: true)
│       ├── ops/                 # internal docs incl. this ADR — rendered, noindex, robots-disallowed, sitemap-excluded
│       ├── rss.xml.ts           # sitewide feed
│       └── [section]/rss.xml.ts # 7 per-core-section feeds
└── public/
    ├── robots.txt
    └── llms.txt
```

**Content Collections schema** (frontmatter contract; the build fails on violation — that is the point):

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const article = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),          // required — feeds visible dateModified + article:modified_time
    section: z.string(),                     // core/outer section slug
    cluster: z.string().optional(),
    author: z.string().default('sunny'),
    draft: z.boolean().default(false),       // prod getStaticPaths filters drafts → never rendered, never in sitemap (§5)
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    term: z.string(),                        // → DefinedTerm.name
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    author: z.string().default('sunny'),
    draft: z.boolean().default(false),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = {
  strategy: article, visibility: article, 'content-ops': article,
  technical: article, cro: article, distribution: article, measurement: article,
  'ai-search': article, psychology: article, entity: article, teardowns: article,
  pillars: article, glossary,
};
```

Two content templates: **`article`** (all core + outer sections + pillars) and **`glossary-term`** (gets `DefinedTerm` schema automatically).

**In scope / out of scope:**

- [x] Astro static, Zod-validated collections, git authoring
- [x] JSON-LD, OG, RSS, sitemap, robots/llms.txt
- [x] Astro `<Image>` local pipeline (no image CDN needed)
- [ ] No CMS
- [ ] No i18n
- [ ] No comments
- [ ] No search at launch — Pagefind slot reserved, post-launch
- [ ] No analytics decision here — owned by the Measurement section deliverable

**Deploy:** Cloudflare Pages, git-integration (push to `main` → build). Static output needs **no Astro adapter**. Build command `astro build`, output dir `dist/`, `NODE_VERSION=22`. `wrangler` is not used for deploys — git-integration is the pipeline; `wrangler` stays available for local preview only.

---

## §5 — Machine-readability defaults

One data flow, single source of truth: **frontmatter → Zod → BaseLayout → JSON-LD / OG / RSS / sitemap.** Nothing is authored twice.

**Schema (JSON-LD, hand-authored in one `BaseLayout`, no plugin).** The complete set:

- `Article` + `BreadcrumbList` on every article
- `FAQPage` only when `faqs[]` is non-empty
- `Person` (Sunny, `sameAs` → LinkedIn) sitewide
- `DefinedTerm` on every glossary page
- `Organization` on the home page

**That is the whole schema set. The other 80% of schema.org is décor**, per [`/technical/schema-markup`](/technical/schema-markup).

**OG defaults.** Per-page OG image generated at build with satori/`astro-og`; title ≤ 60 chars from frontmatter; brand-card fallback; `og:type=article`; `article:modified_time` wired to `dateModified`.

> **Build-ceiling note (protects requirement #4):** naive per-page satori rendering at 200 pages can blow the 60s ceiling. Mitigation is spec, not optional: OG images are cache-keyed on a hash of `title + dateModified` and only regenerated when that hash changes; a cache hit is a file copy. If the fixture build still approaches the ceiling, build-time OG is scoped to pillars and section hubs and all other pages use the brand-card fallback. Requirement #4 wins over per-page OG.

**RSS.** `@astrojs/rss`, **full-content** feeds, not summaries — feeds are an LLM ingestion surface, so the feed carries the whole article. One sitewide feed at `/rss.xml` plus 7 per-core-section feeds.

**Sitemap.** `@astrojs/sitemap`, `lastmod` from `dateModified`, excludes `/ops/*`. Drafts never appear because they are filtered before rendering — a page that is never built never reaches the sitemap.

**Bot layer.** `public/robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, and Google-Extended. `public/llms.txt` is hand-maintained and links the 7 core hubs. Policy detail is deferred to [`/technical/llms-txt`](/technical/llms-txt).

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://site.marketing',
  output: 'static',                 // no adapter on Cloudflare Pages
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/ops/'),
      // drafts need no filter here: prod getStaticPaths skips draft: true,
      // so draft routes are never built and never reach the sitemap
      serialize: (item) => ({ ...item, lastmod: modifiedDates.get(item.url) }),
      // ^ lastmod wired to frontmatter dateModified — the integration
      //   does not read frontmatter on its own
    }),
  ],
  build: { format: 'directory' },   // clean flat URLs, no trailing .html
});
```

```
# ─── public/robots.txt ─────────────────────────────────────────────
# A crawler obeys ONLY its most specific user-agent group, so the
# /ops/ disallow must be repeated in every named group — a bot that
# matches "GPTBot" never reads the "*" group.

User-agent: GPTBot
Allow: /
Disallow: /ops/

User-agent: ClaudeBot
Allow: /
Disallow: /ops/

User-agent: PerplexityBot
Allow: /
Disallow: /ops/

User-agent: Google-Extended
Allow: /
Disallow: /ops/

User-agent: *
Allow: /
Disallow: /ops/

Sitemap: https://site.marketing/sitemap-index.xml

# ─── public/llms.txt (markdown: H1 + blockquote summary + links) ───
# site.marketing

> The operator's manual for marketing an existing website. Seven core
> hubs below; every article ships full-content in the RSS feed at
> https://site.marketing/rss.xml.

## Core hubs
- [Website Marketing Strategy](https://site.marketing/strategy/)
- [Search Visibility (SEO + GEO/AEO)](https://site.marketing/visibility/)
- [Content Operations for Existing Sites](https://site.marketing/content-ops/)
- [Technical Foundation](https://site.marketing/technical/)
- [Conversion & Revenue](https://site.marketing/cro/)
- [Distribution & Demand](https://site.marketing/distribution/)
- [Measurement & Attribution](https://site.marketing/measurement/)
```

| Surface | Default | Source field |
|---|---|---|
| `Article` JSON-LD | On every article | `title`, `description`, `dateModified` |
| `FAQPage` JSON-LD | When present | `faqs[]` |
| `Person` JSON-LD | Sitewide | `author` |
| `DefinedTerm` JSON-LD | Glossary only | `term` |
| OG image | Per-page, cache-keyed | `title` + `dateModified` hash |
| `article:modified_time` | Every article | `dateModified` |
| RSS items | Full article body | body, `dateModified` |
| Sitemap `lastmod` | Excludes drafts/ops | `dateModified`, `draft` |

---

## §6 — Acceptance tests

Six release gates. Each is a runnable check. In CI these are PR gates: **a fail blocks merge, including for Sunny.** The gates cover requirements #1, #2, #4, #5, #6, and #7; requirement #3 is enforced by construction — git-only authoring with a build-failing schema leaves nothing to gate at release.

- [ ] **Content in initial HTML (req #1, #2).** `curl -s https://.../<route> | grep -F "<known answer sentence>"` returns the sentence with no JS executed. Diff the no-JS body against the hydrated DOM — text content must match.
- [ ] **0 KB JS on article routes (req #2).** Assert the build emitted no `.js` for any `src/content/**` route (island count = 0 on content pages).
- [ ] **Lighthouse ≥ 95 performance / 100 SEO (req #2, #4 corroboration).** `lighthouse <url> --only-categories=performance,seo` on the pillar and one glossary page; performance targets per [`/technical/core-web-vitals`](/technical/core-web-vitals).
- [ ] **Chunk-clean markup (req #6).** Parse each article route; assert exactly one `<h1>`, and that each `<h2>`/`<h3>` is immediately followed by text or a list — no wrapper `<div>` between a heading and its answer. Fails the build if a heading's next element node is an empty container.
- [ ] **Schema valid (req #5).** `schema-dts` types check at build; Google Rich Results test on the pillar returns Article + BreadcrumbList (+ FAQPage where applicable) with zero errors.
- [ ] **RSS + reachability (req #5, #7).** `/rss.xml` and each section feed validate against the RSS spec; a link-graph check confirms every published page is ≤ 2 clicks from a core hub, and `robots.txt`/`llms.txt` serve verbatim.

Build ceiling (req #4) is asserted separately in the build step: `time astro build` on the 200-page fixture must finish under 60s.

---

## §7 — Sequencing

Three milestones, 10 working days, one owner pair (Sunny + 1). Day-counts are targets; the exit criteria are the gates. All test and CI content lives in §6 — this section owns order and dependencies only.

| Milestone | Days | Exit criterion |
|---|---|---|
| **M1 — Foundation** | 1–3 | Scaffold, collections + Zod, BaseLayout (JSON-LD/OG), Cloudflare deploy live. Pillar #1 renders and passes all §6 gates. |
| **M2 — Surfaces** | 4–6 | Glossary template, 8 RSS feeds, sitemap, robots/llms.txt, cache-keyed OG. The 20-page launch set (topical-map same-day minimum) builds green. |
| **M3 — Gates & launch** | 7–10 | §6 checks wired as CI PR gates, redirects file, 404, `/ops/` docs section, draft migration. Launch. |

**Sequencing rule (the one that matters):** no content migration before M1 exit. Schema churn multiplied by page count is the classic time sink — lock the frontmatter contract first, then pour content into it.