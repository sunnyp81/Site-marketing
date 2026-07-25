# Search + LLM Visibility Audit — site.marketing

## 1. Verdict

**No, this build is not fit to launch.** The content is genuinely good and the GEO thesis is sound, but the build ships a URL architecture that was never implemented: content was authored against a 7-section hierarchy the router doesn't build, so 74 internal links — including the ones in llms.txt — terminate in 404s, and the one original-data asset the entire site exists to get cited for is unreachable. Worse for credibility: two of the three external stat URLs on the flagship pillar are wrong, one of them fabricated, on a site whose pitch is "real citations, not decoration." The single thing standing in the way is a decision you haven't made yet — flat URLs or sectioned URLs — because right now the router believes one thing and every link on the site believes the other.

## 2. Blocking issues — fix before the domain goes live

| # | Issue | Impact | Fix | Effort |
|---|-------|--------|-----|--------|
| 1 | **The URL fork.** Content, llms.txt, and the topical map all assume `/section/slug/` URLs. `src/pages/[slug].astro` ignores the `section` frontmatter and routes pillars flat. Result: the GEO pillar lives at `/geo-for-established-websites/` while all 7 of its inbound links (plus llms.txt line 41) point at `/visibility/geo/`. Blast radius: 74 dead links across 21 targets on live pages, the site's #2 asset functionally orphaned (zero working inbound links; reachable only via the homepage auto-list), and the internal link graph — the primary topical-structure signal for Google and LLM crawlers alike — subtracting authority instead of building it. | The IA the whole strategy depends on doesn't exist. Do not patch link-by-link. | Pick one URL shape and implement it once. Recommended: honor `section` + `slug` in getStaticPaths (the authored links, llms.txt, and ~15 content references already assume it), ship the `/visibility/` hub, and repoint links to genuinely unbuilt pages (`/technical/audit/`, `/content/audit/`, etc.) at the nearest live anchor per the positioning deck's own reconciliation note. | **Large** |
| 2 | **The citation asset 404s.** Five pages plus llms.txt route readers and LLMs to `/research/citation-share-study/` — captioned "Original data; cite this page" — as the receipts for the 8% median citation share, the site's only proprietary number. No research collection, no route, never built. | Anyone verifying the number hits a dead page. The "nobody else has this stat, they have to cite us" argument collapses. This is the exact retrieval failure GEO exists to prevent, on your own site. | Wire a research collection + route and publish the methodology page. **First delete the internal block at lines ~360–445 of the methodology file** — the PR target list (Goodwin, Schwartz, Solis, contacts, pitch tiers) is concatenated into it as live markdown. The clean noindex playbook file already exists separately; the embedded copy just needs cutting. Until live, strip "cite this page" from llms.txt and the pillars. | **Medium** |
| 3 | **Fabricated Ahrefs URL.** `ahrefs.com/blog/ai-brand-visibility-study/` doesn't exist — invented slug, cited in 3 files as the primary source for the mentions-correlation claim. The real study is at `/blog/ai-overview-brand-correlation/` (0.664 mentions vs 0.218 backlinks). Your own production note said to verify this before publish. It wasn't. | The load-bearing external citation for the off-site-mentions pillar of your thesis 404s. A skeptic or an LLM fact-checker finds the source doesn't exist and discredits the page. | Swap in the real URL in `how-to-market-a-website.md:218`, `geo-for-established-websites.md:289`, and `podcast-guesting-kit.md:58`. | **Trivial** |
| 4 | **SparkToro URL truncated.** The ~60% zero-click stat — the opening hook of the flagship pillar — cites a guessed short slug. SparkToro uses full descriptive slugs; the real one is the long 2024 study URL. Claim is accurate, link is wrong. | 2 of 3 external stat links on the flagship page fail. | Paste the canonical URL. | **Trivial** |
| 5 | **llms.txt is 19% dead.** 3 of 16 curated links 404: `/visibility/geo/`, `/research/citation-share-study/`, `/offers/90-minute-audit/`. This is the file you hand directly to GPTBot/ClaudeBot/PerplexityBot. | The one surface built purely for answer-engine ingestion fails on exactly the pages meant to earn citations. | Falls out of #1 and #2, plus: delete the offers line until that page ships. Never list a URL in llms.txt that doesn't resolve. | **Trivial** (after #1–2) |
| 6 | **Wrong LinkedIn in shipped sameAs.** BaseLayout Person schema + footer ship `linkedin.com/in/sunny-patel/`; the spec pins `sunny-patel-seo` as byte-identical canonical. The one machine-readable link between you and a real-world identity points at the wrong profile — possibly someone else's — on all 18 pages. | Entity disambiguation keys off sameAs. You built the whole positioning on "one named human"; the human resolves incorrectly. | One token, two places in BaseLayout.astro. | **Trivial** |
| 7 | **The verifier is theater.** `gateReachability()` filters dead hrefs out *before* the BFS (`if (allRoutes.has(href))`), and none of the 7 gates checks broken links. The build reported green while shipping 74 dead links. This is *why* everything above shipped undetected — and it will happen again on every future content addition. | The safety net has a hole exactly where the failures are. | Add gate 8: collect every internal href, diff against allRoutes, fail on any miss. Include llms.txt links. Remove the pre-filter from the BFS. | **Small** |

## 3. High-value fixes — first sprint after launch

**One schema pass through BaseLayout.astro** (bundle these, they're all in one file):
- **Organization node on the homepage.** The site preaches Organization schema in its own body copy and doesn't have one. No brand entity, no publisher, no logo, no org sameAs. ADR §5 mandates it.
- **BreadcrumbList on all 15 article/glossary routes.** ADR §5 mandates it; §6 makes it a release gate; the layout never emits it. Build it from path segments.
- **Give personSchema a stable `@id`** and reference it from `articleJsonLd.author`. Right now the article's author is a name-string and the Person with the sameAs floats disconnected — the authorship edge doesn't carry the credibility signal you sell on `/glossary/e-e-a-t/`.
- **Add `image` and `publisher` to Article JSON-LD.** Recommended fields, not required — but you're leaving rich-result eligibility signals on the table for a small edit.
- **Extend `gateSchemaValid`** to assert what ADR §6 actually says (Article + BreadcrumbList + FAQPage-where-applicable + Organization on `/`), not just Article+Person. Same failure pattern as the reachability gate: the check tests less than the contract.

**Head and social surface:**
- **og:image + favicon are both absent, while `twitter:card` claims `summary_large_image`.** Every LinkedIn/Slack/X share renders an empty grey box — a real distribution loss for someone who markets on LinkedIn. Add a 1200×630 default in `public/`, a favicon, per-page override support. Wire the same image into `Article.image` and both problems close at once.

**Visible quality:**
- **Light-mode link color fails AA: `#00aa55` on white = 3.05:1.** Every link on a link-dense reference site. Change `--accent` to `#007a3d` (5.45:1), leave dark mode alone. One line.
- **Four in-body images don't exist** — framework diagram, query-to-citation flow, audit timer, pipeline. Broken-image boxes on the pillars and two strategy pages. Create them or cut the references. When they ship, set width/height so CLS stays 0.
- **`table { display:block }` strips table semantics** from the accessibility tree on the three comparison-table pages. Wrap in an `overflow-x:auto` div instead; restore native display.

**Content:**
- **Rewrite the 8 glossary meta descriptions.** All truncated mid-sentence at ~190 chars ending in "…" — shipped to the meta tag, the visible index cards, and RSS. Complete standalone sentences under 160 chars. Fix the split script that hard-cuts at 190.
- **Start shipping Sections 2 and 3.** Right now this is a Strategy silo plus one orphaned pillar, not the 7-section topical cluster the map promises. The GEO pillar has zero cluster siblings; the glossary links up into sections that don't exist. Your own launch rule: "a pillar orphaned at launch is a press release, not an authority signal." Pillar #2 is exactly that. One complete cluster each for Search Visibility and Content Ops — the two the map calls launch-critical and the two everything already links toward.

## 4. Worth doing eventually

- **RSS:** add the `content` field (feeds carry one sentence today), add `<link rel="alternate">` autodiscovery to the head, and link the two section feeds from their hubs — they're currently linked from nothing.
- **Sitemap `<lastmod>`:** `dateModified` exists on every entry; a `serialize` fn in the sitemap config stamps it in. Free freshness signal, currently dropped.
- **Redirects at go-live:** none needed now (nothing has ever been public, nothing to forward), but whatever URL decision #1 produces, add the redirect map to the launch checklist so it never becomes a real problem.

## 5. What the build gets right

- **The content is the real thing.** The pillars are deep (4,900/4,300 words), heading-dense, and Astro's auto-slugged heading IDs make every passage fragment-addressable out of the box — passage ranking and LLM deep-linking work today with no extra plumbing.
- **The 200-site study framing is honest.** Future-tense throughout, methods published first, 8% consistently labeled a pilot median. No fake data claims anywhere. That discipline is rarer than it should be.
- **Visible "Last updated" bylines ship uniformly on all six articles** — the exact author+date E-E-A-T proof your own glossary prescribes.
- **The verifier exists at all.** Seven gates on a pre-launch static site is the right instinct. The holes are fixable; the habit is the hard part and you have it.
- **The PR playbook was already split into a proper noindex file.** The concatenated copy in the methodology doc is a leftover, not a plan.
- **llms.txt is a real curated map with real descriptions** — 13 of 16 links resolve and the descriptions are doing the work. Fix three lines and it's genuinely good.
- **Dark mode, robots.txt, homepage pillar placement, and the decision *not* to link unbuilt section hubs from the homepage** are all correct. The build avoided several cargo-cult traps others would have walked into.

## 6. The fix order

**Batch A — one-line changes, ship today (30 minutes total):**
1. Ahrefs URL → `/blog/ai-overview-brand-correlation/` in 3 files.
2. SparkToro URL → full canonical slug, `how-to-market-a-website.md:59`.
3. `--accent: #007a3d` in BaseLayout.astro line 92.
4. sameAs → `sunny-patel-seo` in BaseLayout.astro (schema + footer).
5. Delete the `/offers/90-minute-audit/` line from llms.txt.

**Batch B — the URL decision (real work, do before anything else structural):**
6. Decide: sectioned URLs (recommended) or flat. Implement in getStaticPaths once — add `slug: geo` to the GEO pillar frontmatter, emit `/${section}/${slug}/`, build the `/visibility/` hub.
7. Repoint every link targeting a genuinely unbuilt page (`/technical/*`, `/content/*`, `/conversion/*`, `/distribution/*`, `/measurement/*`) to the nearest live anchor. No link points at nothing.
8. Reconcile llms.txt lines 41 and 44 to the final URLs.

**Batch C — make it impossible to regress (small, same PR as B):**
9. Broken-internal-link gate in verify.mjs (every href vs allRoutes, llms.txt included; fail on miss). Remove the BFS pre-filter.
10. Extend gateSchemaValid to the full §6 contract.

**Batch D — the research asset (medium):**
11. Cut lines ~360–445 (the embedded PR playbook) from the methodology file.
12. Add a research collection + route; publish at `/research/citation-share-study/`. Verify the built HTML contains zero journalist names.

**Batch E — one pass through BaseLayout.astro (small, one PR):**
13. Organization node with `@id` on `/`; Person `@id`; author-by-reference; BreadcrumbList from path segments; `Article.image` + `publisher`.
14. og:image default + favicon + per-page override; fix or keep `summary_large_image` accordingly.
15. Table scroll-wrapper replacing `display:block`.

**Batch F — content (ongoing, real work):**
16. Four missing images: create or cut references.
17. Rewrite 8 glossary descriptions; fix the 190-char truncation script.
18. Ship one complete cluster for Search Visibility, then Content Ops. Everything on the site already links toward these; build the destinations.

**Batch G — whenever:**
19. RSS content field + autodiscovery + hub links; sitemap lastmod serialize fn.

Batches A and C are an afternoon. B is the only decision. Everything else is execution.
---

## Independent verification (post-audit)

Three of the most serious claims were checked by hand against the repo and the live web, not taken
on the auditing agents' word:

| Claim | Verdict | Evidence |
|---|---|---|
| Ahrefs URL is fabricated | **Confirmed** | `https://ahrefs.com/blog/ai-brand-visibility-study/` appears 3× in `content/`. It is not among Ahrefs' real blog URLs. The genuine study — matching the exact claimed finding (mentions ρ=0.664 vs backlinks ρ=0.218, 75K brands) — is at `https://ahrefs.com/blog/ai-overview-brand-correlation/`. |
| Wrong LinkedIn in shipped `sameAs` | **Confirmed** | `src/layouts/BaseLayout.astro:30` ships `linkedin.com/in/sunny-patel/`. `content/site/positioning-homepage-about.md:201` pins `linkedin.com/in/sunny-patel-seo/` as "the one canonical value". Also wrong in the footer at `BaseLayout.astro:134`. |
| Internal PR list embedded in a public file | **Confirmed** | `content/research/citation-share-study-methodology.md` is 446 lines containing **two** concatenated documents: FILE 1 (public, `slug: /research/citation-share-study`) at lines 1–351, and FILE 2 (internal, noindex PR playbook) at lines 352–446. The internal half names real journalists (Goodwin, Schwartz, Solis) and pitch tiers. A standalone `citation-share-study-pr-playbook.md` already exists with the same content — the embedded copy is a duplicate that would publish. |

Broken-link count independently measured from `dist/`: **74 occurrences across 21 unique dead targets**.

Also verified against `dist/`: BreadcrumbList absent on all 18 routes; Organization absent on `/`;
`og:image` absent on all routes while `twitter:card=summary_large_image` is declared; favicon absent;
4 referenced `/images/*.png` do not exist (`public/` holds only `llms.txt` and `robots.txt`);
8 glossary meta descriptions run 178–189 chars; 3 titles exceed 60 chars.

### Findings that were raised and refuted

31 findings raised, 25 confirmed, 6 refuted in adversarial verification. Refuted:
no-redirect-layer, "200-site study advertised as existing", missing in-page nav on long pillars,
unrendered visible dateModified, missing `<article>`/skip-link, and "hubs abandoned their designed role."
Most were rejected as artifacts of the site being pre-launch — unwritten pages not existing is not a
defect; linking to them from live pages is, and that is captured in the blocking issues above.
