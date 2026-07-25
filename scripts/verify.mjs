#!/usr/bin/env node
// Acceptance gates for site.marketing per content/ops/stack-and-scaffold.md §6
// and ADR §6. Fails the process on any gate failure. Run after `astro build`.
//
// Gates:
//   1. content-in-initial-html   — every route contains its known answer sentence.
//   2. no-js-on-articles         — no <script src="*.js"> or inline JS on article routes.
//   3. chunk-clean-markup        — one <h1>; every <h2>/<h3> immediately followed by content.
//   4. schema-valid              — ADR §6 contract: Article + Person + BreadcrumbList per
//                                  article, FAQPage where declared, Organization on /, and the
//                                  Article author/publisher edges resolve to the Person @id.
//   5. rss-valid                 — every rss.xml parses as XML with required RSS fields.
//   6. reachability              — every published route ≤ 2 clicks from the homepage.
//   7. bot-files                 — robots.txt and llms.txt present and non-empty.
//   8. no-dead-links             — every internal href in dist HTML (and every site URL in
//                                  llms.txt) resolves to a built route or an existing dist file.
//   9. assets-exist              — every <img src> / og:image / twitter:image points at a file
//                                  that exists in dist.
//  10. head-limits              — <title> ≤ 60; <meta description> present, ≤ 160, not truncated.
//  11. social-card-consistency  — summary_large_image ⇒ resolvable og:image; else summary.
//  12. no-html-comments        — dist HTML ships zero HTML comments (no PRODUCTION NOTES
//                                 editorial blocks, no `<!-- relink: -->` markers, none at all).

import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const SITE_ORIGIN = 'https://site.marketing';
const PERSON_ID = 'https://site.marketing/#sunny-patel';

const failures = [];
const fail = (gate, msg) => failures.push({ gate, msg });
const pass = (gate, msg) => console.log(`  ✓ ${gate}: ${msg}`);

// Known answer sentences per route — extractable text you'd expect in the first HTML
const CONTENT_PROBES = {
  'how-to-market-a-website': 'Marketing a website means increasing qualified visibility',
  'visibility/geo': "GEO isn't a second retainer",
  'strategy/audit': '90-minute',
  'strategy/budget': 'budget',
  'strategy/plan-template': 'Quarter',
  'strategy/seo-vs-geo-vs-cro': 'CRO',
  'glossary/geo': 'Generative Engine Optimization',
  'glossary/aeo': 'Answer Engine Optimization',
  'glossary/information-gain': 'information gain',
  'glossary/topical-authority': 'topical authority',
  'glossary/e-e-a-t': 'E-E-A-T',
  'glossary/query-fan-out': 'query fan-out',
  'glossary/crawl-budget': 'crawl budget',
  'glossary/dark-ai-traffic': 'dark AI traffic',
};

// Article routes must ship zero JS.
const ARTICLE_ROUTE_PATTERNS = [
  /^how-to-market-a-website\//,
  /^visibility\/geo\//,
  /^strategy\/[^/]+\//,
  /^glossary\/[^/]+\//,
];

// Routes whose source declares `faqs:` — these must ship a FAQPage block (ADR §6).
const FAQ_ROUTES = new Set(['strategy/audit', 'strategy/budget', 'strategy/seo-vs-geo-vs-cro']);

async function walk(dir, filter = () => true) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p, filter)));
    else if (filter(p)) out.push(p);
  }
  return out;
}

// ── Shared dist model (routes + every emitted file) ─────────────────────────
const routeOf = (file) => {
  const dir = relative(DIST, file).split(sep).slice(0, -1).join('/');
  return dir === '' ? '/' : `/${dir}/`;
};

const allHtml = await walk(DIST, (p) => p.endsWith('index.html'));
const allRoutes = new Set(allHtml.map(routeOf));
const allFiles = await walk(DIST);
const distFiles = new Set(allFiles.map((p) => '/' + relative(DIST, p).split(sep).join('/')));

const isArticleRoute = (rel) => ARTICLE_ROUTE_PATTERNS.some((re) => re.test(rel + '/'));

// Normalise an internal href the way the reachability + dead-link gates expect.
// Collects EVERY internal target — including links written with our own absolute
// origin and relative (non-slash) links — not just site-absolute `/…` paths.
// Returns a canonical site-absolute path, or null for genuinely external links
// (other schemes / other hosts) and in-page anchors.
//
// `baseRoute` is the route of the containing page, used to resolve relative
// hrefs (e.g. `foo/bar` from `/strategy/` → `/strategy/foo/bar/`).
function normalizeInternalHref(raw, baseRoute = '/') {
  let h = (raw || '').trim();
  if (!h) return null;
  // Our own absolute origin is internal — strip it so the http check below only
  // rejects genuinely external URLs. (Mirrors gate 9's toDistPath.)
  if (h.startsWith(SITE_ORIGIN)) h = h.slice(SITE_ORIGIN.length) || '/';
  // Protocol-relative: only our own host is internal; any other host is external.
  if (h.startsWith('//')) {
    const marketing = '//site.marketing';
    if (h === marketing || h.startsWith(marketing + '/')) h = h.slice(marketing.length) || '/';
    else return null;
  }
  // Any remaining scheme (http:, https:, mailto:, tel:, …) is external.
  if (/^[a-z][a-z0-9+.-]*:/i.test(h)) return null;
  if (h.startsWith('#')) return null;
  h = h.split('#')[0].split('?')[0];
  if (!h) return null;
  // Resolve relative hrefs against the containing route instead of discarding them.
  if (!h.startsWith('/')) {
    try {
      h = new URL(h, SITE_ORIGIN + baseRoute).pathname;
    } catch {
      return null;
    }
  }
  const lastSeg = h.split('/').pop();
  if (lastSeg && !lastSeg.includes('.') && !h.endsWith('/')) h = h + '/';
  return h;
}

// Convert a possibly-absolute asset URL to a dist-relative path, or null.
function toDistPath(url) {
  let u = (url || '').trim();
  if (!u) return null;
  if (u.startsWith(SITE_ORIGIN)) u = u.slice(SITE_ORIGIN.length);
  if (!u.startsWith('/')) return null; // external host we cannot verify locally
  return u.split('#')[0].split('?')[0];
}

// A normalised internal href is valid if it is a built route or an existing dist file.
function isValidTarget(href) {
  if (allRoutes.has(href)) return true;
  if (distFiles.has(href)) return true;
  // extensionless route form also matches a directory's index.html
  if (href.endsWith('/') && distFiles.has(href + 'index.html')) return true;
  return false;
}

// Parse all JSON-LD @type values (flattened) from a loaded document.
function jsonLdBlocks($) {
  const out = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).text();
    try {
      const parsed = JSON.parse(raw);
      for (const obj of Array.isArray(parsed) ? parsed : [parsed]) out.push(obj);
    } catch (err) {
      out.push({ __parseError: err.message });
    }
  });
  return out;
}

// ── Gate 1: Content in initial HTML ─────────────────────────────────────────
async function gateContentInInitialHtml() {
  const gate = 'content-in-initial-html';
  for (const [route, probe] of Object.entries(CONTENT_PROBES)) {
    const file = join(DIST, route, 'index.html');
    try {
      const html = await readFile(file, 'utf8');
      if (!html.toLowerCase().includes(probe.toLowerCase())) {
        fail(gate, `${route}: probe "${probe}" not found in initial HTML`);
      }
    } catch {
      fail(gate, `${route}: index.html missing at ${file}`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${Object.keys(CONTENT_PROBES).length} routes have body text in initial HTML`);
  }
}

// ── Gate 2: 0 KB JS on article routes ───────────────────────────────────────
async function gateNoJsOnArticleRoutes() {
  const gate = 'no-js-on-articles';
  const htmlFiles = allHtml.filter((p) => isArticleRoute(routeOf(p).replace(/^\/|\/$/g, '')));
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const jsScripts = $('script[src]')
      .toArray()
      .filter((el) => {
        const src = $(el).attr('src') || '';
        return src.endsWith('.js') || src.endsWith('.mjs');
      });
    if (jsScripts.length > 0) {
      const srcs = jsScripts.map((el) => $(el).attr('src')).join(', ');
      fail(gate, `${relative(DIST, file)}: shipped JS: ${srcs}`);
    }
    const inline = $('script:not([src]):not([type="application/ld+json"])').toArray();
    if (inline.length > 0) {
      fail(gate, `${relative(DIST, file)}: has ${inline.length} inline <script> block(s)`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${htmlFiles.length} article routes ship zero JS`);
  }
}

// ── Gate 3: Chunk-clean markup ──────────────────────────────────────────────
async function gateChunkCleanMarkup() {
  const gate = 'chunk-clean-markup';
  const htmlFiles = allHtml.filter((p) => isArticleRoute(routeOf(p).replace(/^\/|\/$/g, '')));
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);
    const h1s = $('main h1');
    if (h1s.length !== 1) {
      fail(gate, `${rel}: expected exactly 1 <h1> in <main>, found ${h1s.length}`);
    }
    $('main h2, main h3').each((_, heading) => {
      const $h = $(heading);
      const $next = $h.next();
      const validNext = ['p', 'ul', 'ol', 'table', 'blockquote', 'pre', 'figure', 'dl', 'h3', 'h4', 'div'];
      const tag = $next.length ? ($next[0].tagName || '').toLowerCase() : '';
      // A div is only acceptable when it is the table-scroll wrapper (B7).
      const okDiv = tag === 'div' && ($next.attr('class') || '').includes('table-scroll');
      if (!tag || (!validNext.includes(tag)) || (tag === 'div' && !okDiv)) {
        fail(
          gate,
          `${rel}: <${heading.tagName}>"${$h.text().trim().slice(0, 40)}" not followed by content (next: <${tag || 'none'}>)`,
        );
      }
    });
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${htmlFiles.length} article routes have chunk-clean markup`);
  }
}

// ── Gate 4: Schema present + parses (ADR §6 contract) ───────────────────────
async function gateSchemaValid() {
  const gate = 'schema-valid';
  const htmlFiles = allHtml.filter((p) => isArticleRoute(routeOf(p).replace(/^\/|\/$/g, '')));
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);
    const routeKey = routeOf(file).replace(/^\/|\/$/g, '');
    const objs = jsonLdBlocks($);
    const parseErr = objs.find((o) => o.__parseError);
    if (parseErr) {
      fail(gate, `${rel}: JSON-LD failed to parse: ${parseErr.__parseError}`);
      continue;
    }
    const types = objs.map((o) => o['@type']);
    if (objs.length === 0) {
      fail(gate, `${rel}: no application/ld+json blocks`);
      continue;
    }
    for (const req of ['Article', 'Person', 'BreadcrumbList']) {
      if (!types.includes(req)) {
        fail(gate, `${rel}: missing ${req} JSON-LD (found: ${types.join(', ') || 'none'})`);
      }
    }
    if (FAQ_ROUTES.has(routeKey) && !types.includes('FAQPage')) {
      fail(gate, `${rel}: missing FAQPage JSON-LD (route declares faqs)`);
    }
    // Author/publisher edges must resolve to the Person @id.
    const article = objs.find((o) => o['@type'] === 'Article');
    if (article) {
      const authorId = article.author && article.author['@id'];
      const publisherId = article.publisher && article.publisher['@id'];
      if (authorId !== PERSON_ID) {
        fail(gate, `${rel}: Article.author @id is "${authorId || 'none'}", expected ${PERSON_ID}`);
      }
      if (publisherId !== PERSON_ID) {
        fail(gate, `${rel}: Article.publisher @id is "${publisherId || 'none'}", expected ${PERSON_ID}`);
      }
    }
  }

  // Homepage must carry an Organization block.
  const homeFile = join(DIST, 'index.html');
  try {
    const $home = cheerio.load(await readFile(homeFile, 'utf8'));
    const homeTypes = jsonLdBlocks($home).map((o) => o['@type']);
    if (!homeTypes.includes('Organization')) {
      fail(gate, `index.html: missing Organization JSON-LD (found: ${homeTypes.join(', ') || 'none'})`);
    }
  } catch {
    fail(gate, `index.html: missing at ${homeFile}`);
  }

  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${htmlFiles.length} article routes ship Article+Person+BreadcrumbList; homepage ships Organization`);
  }
}

// ── Gate 5: RSS valid ───────────────────────────────────────────────────────
async function gateRssValid() {
  const gate = 'rss-valid';
  const rssFiles = await walk(DIST, (p) => p.endsWith('rss.xml'));
  if (rssFiles.length === 0) {
    fail(gate, 'no rss.xml files found');
    return;
  }
  for (const file of rssFiles) {
    const xml = await readFile(file, 'utf8');
    const $ = cheerio.load(xml, { xmlMode: true });
    const rel = relative(DIST, file);
    if ($('rss').length !== 1) fail(gate, `${rel}: missing <rss> root`);
    if ($('channel > title').text().trim() === '') fail(gate, `${rel}: empty <title>`);
    if ($('channel > description').text().trim() === '') fail(gate, `${rel}: empty <description>`);
    if ($('channel > item').length === 0) fail(gate, `${rel}: zero <item>s`);
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${rssFiles.length} RSS feeds valid`);
  }
}

// ── Gate 6: Reachability (BFS from /) ───────────────────────────────────────
async function gateReachability() {
  const gate = 'reachability';
  const linksFrom = new Map();
  for (const file of allHtml) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const from = routeOf(file);
    const links = new Set();
    $('a[href]').each((_, a) => {
      const href = normalizeInternalHref($(a).attr('href'), from);
      // No pre-filter: record every internal href. BFS only advances into real
      // routes; non-route targets are dead-end nodes and are checked by gate 8.
      if (href) links.add(href);
    });
    linksFrom.set(from, links);
  }

  const dist = new Map([['/', 0]]);
  const queue = ['/'];
  while (queue.length) {
    const cur = queue.shift();
    const d = dist.get(cur);
    for (const next of linksFrom.get(cur) || []) {
      if (allRoutes.has(next) && !dist.has(next)) {
        dist.set(next, d + 1);
        queue.push(next);
      }
    }
  }

  for (const route of allRoutes) {
    if (!dist.has(route)) fail(gate, `${route}: unreachable from /`);
    else if (dist.get(route) > 2) fail(gate, `${route}: ${dist.get(route)} clicks from / (max allowed: 2)`);
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${allRoutes.size} routes all ≤ 2 clicks from /`);
  }
}

// ── Gate 7: Bot files ───────────────────────────────────────────────────────
async function gateBotFiles() {
  const gate = 'bot-files';
  for (const f of ['robots.txt', 'llms.txt']) {
    const p = join(DIST, f);
    try {
      const s = await stat(p);
      if (s.size === 0) fail(gate, `${f}: empty`);
    } catch {
      fail(gate, `${f}: missing at ${p}`);
    }
  }
  try {
    const robots = await readFile(join(DIST, 'robots.txt'), 'utf8');
    for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
      if (!robots.includes(bot)) fail(gate, `robots.txt: missing "${bot}" user-agent`);
    }
    if (!robots.includes('Sitemap:')) fail(gate, `robots.txt: missing Sitemap:`);
  } catch {}
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `robots.txt + llms.txt present with expected content`);
  }
}

// ── Gate 8: No dead internal links (HTML + llms.txt) ────────────────────────
async function gateNoDeadLinks() {
  const gate = 'no-dead-links';
  const htmlFiles = await walk(DIST, (p) => p.endsWith('.html'));
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);
    const baseRoute = routeOf(file);
    const seen = new Set();
    $('a[href]').each((_, a) => {
      const raw = ($(a).attr('href') || '').trim();
      const href = normalizeInternalHref(raw, baseRoute);
      if (!href || seen.has(href)) return;
      seen.add(href);
      if (!isValidTarget(href)) fail(gate, `${rel}: dead internal link → ${raw}`);
    });
  }

  // llms.txt: every site URL must resolve too.
  try {
    const llms = await readFile(join(DIST, 'llms.txt'), 'utf8');
    const urls = llms.match(/https:\/\/site\.marketing\/[^\s)"'<>]*/g) || [];
    for (const url of [...new Set(urls)]) {
      let path = toDistPath(url);
      if (!path) continue;
      // normalise extensionless paths to trailing-slash route form
      const lastSeg = path.split('/').pop();
      if (lastSeg && !lastSeg.includes('.') && !path.endsWith('/')) path += '/';
      if (!isValidTarget(path)) fail(gate, `llms.txt: dead link → ${url}`);
    }
  } catch {
    fail(gate, 'llms.txt: missing, cannot verify links');
  }

  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `all internal links in dist HTML + llms.txt resolve`);
  }
}

// ── Gate 9: Referenced assets exist ─────────────────────────────────────────
async function gateAssetsExist() {
  const gate = 'assets-exist';
  const htmlFiles = await walk(DIST, (p) => p.endsWith('.html'));
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);
    const refs = [];
    $('img[src]').each((_, el) => refs.push(['img src', $(el).attr('src')]));
    $('meta[property="og:image"], meta[name="og:image"]').each((_, el) =>
      refs.push(['og:image', $(el).attr('content')]),
    );
    $('meta[name="twitter:image"], meta[property="twitter:image"]').each((_, el) =>
      refs.push(['twitter:image', $(el).attr('content')]),
    );
    for (const [label, url] of refs) {
      const path = toDistPath(url);
      if (!path) {
        fail(gate, `${rel}: ${label} "${url}" is not a resolvable site/dist path`);
        continue;
      }
      if (!distFiles.has(path)) fail(gate, `${rel}: ${label} "${url}" → missing file ${path}`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `all <img>/og:image/twitter:image references exist in dist`);
  }
}

// ── Gate 10: Head limits (title + meta description) ─────────────────────────
async function gateHeadLimits() {
  const gate = 'head-limits';
  const htmlFiles = await walk(DIST, (p) => p.endsWith('.html'));
  for (const file of htmlFiles) {
    const rel = relative(DIST, file);
    if (rel === '404.html') continue;
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const title = ($('head > title').first().text() || '').trim();
    if (title.length > 60) fail(gate, `${rel}: <title> is ${title.length} chars (max 60): "${title}"`);
    const desc = ($('meta[name="description"]').attr('content') || '').trim();
    if (!desc) {
      fail(gate, `${rel}: missing/empty <meta name="description">`);
    } else {
      if (desc.length > 160) fail(gate, `${rel}: meta description is ${desc.length} chars (max 160)`);
      if (desc.endsWith('…') || desc.endsWith('...')) fail(gate, `${rel}: meta description ends truncated: "…${desc.slice(-30)}"`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `all pages within title ≤ 60 / description ≤ 160 limits`);
  }
}

// ── Gate 11: Social-card consistency ────────────────────────────────────────
async function gateSocialCardConsistency() {
  const gate = 'social-card-consistency';
  const htmlFiles = await walk(DIST, (p) => p.endsWith('.html'));
  for (const file of htmlFiles) {
    const rel = relative(DIST, file);
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const card = ($('meta[name="twitter:card"], meta[property="twitter:card"]').attr('content') || '').trim();
    if (!card) continue;
    const ogImage = ($('meta[property="og:image"], meta[name="og:image"]').attr('content') || '').trim();
    if (card === 'summary_large_image') {
      if (!ogImage) {
        fail(gate, `${rel}: twitter:card=summary_large_image but no og:image`);
      } else {
        const path = toDistPath(ogImage);
        if (!path || !distFiles.has(path)) fail(gate, `${rel}: summary_large_image og:image "${ogImage}" not in dist`);
      }
    } else if (card === 'summary' && ogImage) {
      // summary with an og:image is fine, but the image still must resolve (gate 9 covers it).
    }
    if (!ogImage && card === 'summary_large_image') {
      // already reported above
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `twitter:card ↔ og:image pairing consistent on all pages`);
  }
}

// ── Gate 12: No HTML comments in dist output ────────────────────────────────
async function gateNoHtmlComments() {
  const gate = 'no-html-comments';
  const htmlFiles = await walk(DIST, (p) => p.endsWith('.html'));
  const commentRe = /<!--([\s\S]*?)-->/g;
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const rel = relative(DIST, file);
    let m;
    const found = new Set();
    while ((m = commentRe.exec(html)) !== null) {
      found.add(m[1].trim().slice(0, 60));
    }
    if (found.size > 0) {
      const sample = [...found].slice(0, 3).map((s) => `"${s}…"`).join(', ');
      fail(gate, `${rel}: ships ${found.size} HTML comment(s) (e.g. ${sample})`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `no HTML comments (PRODUCTION NOTES / relink markers) in any dist HTML`);
  }
}

// ── Run all gates ───────────────────────────────────────────────────────────
console.log('Running acceptance gates on dist/…\n');
await gateContentInInitialHtml();
await gateNoJsOnArticleRoutes();
await gateChunkCleanMarkup();
await gateSchemaValid();
await gateRssValid();
await gateReachability();
await gateBotFiles();
await gateNoDeadLinks();
await gateAssetsExist();
await gateHeadLimits();
await gateSocialCardConsistency();
await gateNoHtmlComments();

console.log('');
if (failures.length === 0) {
  console.log(`✓ All acceptance gates passed.`);
  process.exit(0);
} else {
  console.error(`✗ ${failures.length} failure(s):\n`);
  for (const f of failures) console.error(`  ${f.gate}: ${f.msg}`);
  process.exit(1);
}
