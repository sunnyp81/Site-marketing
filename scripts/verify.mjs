#!/usr/bin/env node
// Acceptance gates for site.marketing per content/ops/stack-and-scaffold.md §6.
// Fails the process on any gate failure. Run after `astro build`.
//
// Gates:
//  1. Content in initial HTML — every route contains its known answer sentence.
//  2. 0 KB JS on article routes — no <script src="*.js"> or client-JS artifacts.
//  3. Chunk-clean markup — exactly one <h1>; every <h2>/<h3> immediately followed
//     by text/list/table (no empty wrapper <div> between heading and answer).
//  4. Schema valid — every article has an Article JSON-LD block that parses.
//  5. RSS valid — every rss.xml parses as XML with required RSS fields.
//  6. Reachability — every published route ≤ 2 clicks from the homepage.
//  7. Bot files — robots.txt and llms.txt are present and non-empty.

import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const failures = [];
const fail = (gate, msg) => failures.push({ gate, msg });
const pass = (gate, msg) => console.log(`  ✓ ${gate}: ${msg}`);

// Known answer sentences per route — extractable text you'd expect in the first HTML
const CONTENT_PROBES = {
  'how-to-market-a-website': 'Marketing a website means increasing qualified visibility',
  'geo-for-established-websites': "GEO isn't a second retainer",
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
  /^geo-for-established-websites\//,
  /^strategy\/[^/]+\//,
  /^glossary\/[^/]+\//,
];

async function walk(dir, filter = () => true) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p, filter)));
    else if (filter(p)) out.push(p);
  }
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
  const htmlFiles = (await walk(DIST, (p) => p.endsWith('index.html'))).filter((p) => {
    const rel = relative(DIST, p).split(sep).slice(0, -1).join('/');
    return ARTICLE_ROUTE_PATTERNS.some((re) => re.test(rel + '/'));
  });
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    // Any <script> with a src attribute pointing to a .js file, or type="module"
    const jsScripts = $('script[src]')
      .toArray()
      .filter((el) => {
        const src = $(el).attr('src') || '';
        return src.endsWith('.js') || src.endsWith('.mjs');
      });
    if (jsScripts.length > 0) {
      const rel = relative(DIST, file);
      const srcs = jsScripts.map((el) => $(el).attr('src')).join(', ');
      fail(gate, `${rel}: shipped JS: ${srcs}`);
    }
    // Also flag inline scripts that aren't application/ld+json
    const inline = $('script:not([src]):not([type="application/ld+json"])').toArray();
    if (inline.length > 0) {
      const rel = relative(DIST, file);
      fail(gate, `${rel}: has ${inline.length} inline <script> block(s)`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${htmlFiles.length} article routes ship zero JS`);
  }
}

// ── Gate 3: Chunk-clean markup ──────────────────────────────────────────────
async function gateChunkCleanMarkup() {
  const gate = 'chunk-clean-markup';
  const htmlFiles = (await walk(DIST, (p) => p.endsWith('index.html'))).filter((p) => {
    const rel = relative(DIST, p).split(sep).slice(0, -1).join('/');
    return ARTICLE_ROUTE_PATTERNS.some((re) => re.test(rel + '/'));
  });
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);

    // Exactly one h1
    const h1s = $('main h1');
    if (h1s.length !== 1) {
      fail(gate, `${rel}: expected exactly 1 <h1> in <main>, found ${h1s.length}`);
    }

    // Every h2/h3 must be immediately followed by text-carrying content:
    // p, ul, ol, table, blockquote, pre, figure, dl — not an empty wrapper.
    $('main h2, main h3').each((_, heading) => {
      const $h = $(heading);
      let $next = $h.next();
      // Skip whitespace-only text nodes (cheerio already ignores those between elements)
      const validNext = ['p', 'ul', 'ol', 'table', 'blockquote', 'pre', 'figure', 'dl', 'h3', 'h4'];
      const tag = $next.length ? ($next[0].tagName || '').toLowerCase() : '';
      if (!tag || !validNext.includes(tag)) {
        // Div wrapper is the specific thing the ADR forbids
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

// ── Gate 4: Schema present + parses ─────────────────────────────────────────
async function gateSchemaValid() {
  const gate = 'schema-valid';
  const htmlFiles = (await walk(DIST, (p) => p.endsWith('index.html'))).filter((p) => {
    const rel = relative(DIST, p).split(sep).slice(0, -1).join('/');
    return ARTICLE_ROUTE_PATTERNS.some((re) => re.test(rel + '/'));
  });
  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const rel = relative(DIST, file);
    const blocks = $('script[type="application/ld+json"]').toArray();
    if (blocks.length === 0) {
      fail(gate, `${rel}: no application/ld+json blocks`);
      continue;
    }
    let types = [];
    for (const el of blocks) {
      const raw = $(el).text();
      try {
        const parsed = JSON.parse(raw);
        const arr = Array.isArray(parsed) ? parsed : [parsed];
        for (const obj of arr) types.push(obj['@type']);
      } catch (err) {
        fail(gate, `${rel}: JSON-LD failed to parse: ${err.message}`);
      }
    }
    if (!types.includes('Article')) {
      fail(gate, `${rel}: missing Article JSON-LD (found: ${types.join(', ') || 'none'})`);
    }
    if (!types.includes('Person')) {
      fail(gate, `${rel}: missing Person JSON-LD`);
    }
  }
  if (!failures.some((f) => f.gate === gate)) {
    pass(gate, `${htmlFiles.length} article routes ship Article + Person JSON-LD`);
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
  const allHtml = await walk(DIST, (p) => p.endsWith('index.html'));
  const allRoutes = new Set(
    allHtml.map((p) => '/' + relative(DIST, p).split(sep).slice(0, -1).join('/').replace(/\/?$/, '/')).map((r) => (r === '//' ? '/' : r)),
  );

  const linksFrom = new Map();
  for (const file of allHtml) {
    const html = await readFile(file, 'utf8');
    const $ = cheerio.load(html);
    const from = '/' + relative(DIST, file).split(sep).slice(0, -1).join('/').replace(/\/?$/, '/');
    const norm = from === '//' ? '/' : from;
    const links = new Set();
    $('a[href]').each((_, a) => {
      let href = ($(a).attr('href') || '').trim();
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;
      // Strip query and fragment
      href = href.split('#')[0].split('?')[0];
      if (!href.endsWith('/')) href = href + '/';
      if (allRoutes.has(href)) links.add(href);
    });
    linksFrom.set(norm, links);
  }

  const dist = new Map([['/', 0]]);
  const queue = ['/'];
  while (queue.length) {
    const cur = queue.shift();
    const d = dist.get(cur);
    for (const next of linksFrom.get(cur) || []) {
      if (!dist.has(next)) {
        dist.set(next, d + 1);
        queue.push(next);
      }
    }
  }

  for (const route of allRoutes) {
    if (!dist.has(route)) {
      fail(gate, `${route}: unreachable from /`);
    } else if (dist.get(route) > 2) {
      fail(gate, `${route}: ${dist.get(route)} clicks from / (max allowed: 2)`);
    }
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
  // robots.txt must name the AI bots
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

// ── Run all gates ───────────────────────────────────────────────────────────
console.log('Running acceptance gates on dist/…\n');
await gateContentInInitialHtml();
await gateNoJsOnArticleRoutes();
await gateChunkCleanMarkup();
await gateSchemaValid();
await gateRssValid();
await gateReachability();
await gateBotFiles();

console.log('');
if (failures.length === 0) {
  console.log(`✓ All acceptance gates passed.`);
  process.exit(0);
} else {
  console.error(`✗ ${failures.length} failure(s):\n`);
  for (const f of failures) console.error(`  ${f.gate}: ${f.msg}`);
  process.exit(1);
}
