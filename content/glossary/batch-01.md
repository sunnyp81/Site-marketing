<!--
CONTAINER: Glossary Batch #1 — 8 definition pages, split-ready. NOT a single page.
Split on each horizontal rule (---) into eight /glossary/*.md pages. No shared intro:
the glossary index is a later deliverable, not this one.

PER-PAGE SKELETON (identical across all 8 — consistency IS the AEO play):
  H1 = term only · neutral-extractable definition block (40–60 words, no voice) ·
  H2 stance (sunny-voice, the wedge lives here) · exactly ONE variable element ·
  Related terms footer (siblings + links-up).

PRODUCTION NOTES — schema / infra:
- DefinedTerm JSON-LD per page (term-specific stub inline in each entry), all members of one
  DefinedTermSet (@id: https://site.marketing/glossary/#set).
- BreadcrumbList per page: Home > Glossary > {Term}.
- FAQPage schema on the two pages carrying a Q&A element (AEO, Crawl budget) only.
- Person schema for the author (Sunny Patel) shared across the batch; sameAs -> LinkedIn.
- Visible dateModified on each page. All content in initial HTML — no client-side rendering,
  or LLM retrievers see an empty shell.
- Verify AI-bot access before publish: GPTBot, ClaudeBot, PerplexityBot, Google-Extended.

LINK POLICY — day-one batch reality (verified against content/strategy/topical-map.md line 94
and the slug lock in content/site/positioning-homepage-about.md):
- LIVE day one, link up freely: /how-to-market-a-website/ (pillar), /strategy/* cluster,
  /visibility/* cluster (Section 2 ships full), /content/* cluster (Section 3 ships full),
  and all seven section roots (/strategy/ /visibility/ /content/ /technical/ /conversion/
  /distribution/ /measurement/ exist as landing pages day one).
- NOT live day one (Sections 4/5/6/7 clusters): /technical/* /conversion/* /distribution/*
  /measurement/* deep pages. Marked [PHASE-2] per entry. Until they ship, pages 7 and 8
  link up to the pillar + the live section ROOT, never to a dead deep URL. Page 5's natural
  parent (brand/entity) is deferred, so it links up to live /visibility/ + /content/ cluster
  pages instead.
- Namespaces locked: /visibility/ (not /search-visibility/), /content/ (not /content-ops/),
  /conversion/ (not /cro/). Trailing slash on every internal link.
- Cluster slugs not explicitly named in the map are PROVISIONAL — they extend the map's
  flat-core convention. Topics are real; exact slugs confirm on publish. Flagged [PROVISIONAL].

STANCE + NUMBER audit (one defensible number per page):
  Only the 8% median citation share is first-party original data (our 50-site audit, documented
  in the pillar shipping same-day — cited, not fabricated). The other numbers (80%, 40–60 words,
  5–10 sub-queries, <10,000 URLs, 4 bots) are stated thresholds/heuristics, presented as
  positions — not dressed up as proprietary data.
-->

---

<!-- slug: /glossary/geo/ | title: GEO (Generative Engine Optimization) | meta: GEO defined in 55 words — plus why it's 80% the SEO you already do, and the 20% that isn't. Stop paying two retainers for one job. -->
<!-- DefinedTerm: name="Generative Engine Optimization" alternateName="GEO" inDefinedTermSet=/glossary/#set -->

# GEO (Generative Engine Optimization)

**Generative Engine Optimization (GEO) is the practice of structuring a website so generative AI engines — ChatGPT, Perplexity, Gemini, and Google's AI Overviews — retrieve and cite its pages when composing answers. The optimised unit is the citation, not the click: GEO targets inclusion in a generated answer rather than a ranked position on a results page.**

## Why GEO matters for an existing site

GEO shares about 80% of its inputs with SEO. Crawlable pages, clear structure, real content, internal links — same work, same audit, same you. So when a vendor pitches GEO as a separate retainer, they're invoicing you twice for one job. The 20% that's genuinely new is small and cheap to bolt on: entity clarity, chunk-level answers, and caring about citations over clicks. Here's the number that should get your attention: our audit of 50 established sites put the median citation share at 8% before anyone touched GEO. Not zero. Not fifty. Eight. You don't buy that back with a second invoice. You measure, then fix the pages you already have.

| Shared with SEO (the 80%) | GEO-specific (the 20%) | Vendor theatre |
|---|---|---|
| Crawlable pages, quality content, clear structure | Entity clarity across the site | A "GEO strategy workshop" that re-teaches SEO |
| Internal links, fast rendering, schema | Self-contained, chunk-level answers | A second retainer for the same audit |
| Topical coverage and depth | Optimising to be cited, not clicked | A "ChatGPT rankings" dashboard with no method |

**Related:** [AEO](/glossary/aeo/) · [Query fan-out](/glossary/query-fan-out/)
**Read up:** [GEO for Established Websites](/visibility/geo/) · [How to Market a Website in 2026](/how-to-market-a-website/) <!-- both LIVE day one. Plan's third link, /measurement/ai-traffic/, is [PHASE-2] — wire when Section 7 ships. -->

---

<!-- slug: /glossary/aeo/ | title: AEO (Answer Engine Optimization) | meta: AEO defined — a page-format discipline built on 40–60 word extractable answers, not a new channel. This page is the demo. -->
<!-- DefinedTerm: name="Answer Engine Optimization" alternateName="AEO" inDefinedTermSet=/glossary/#set -->

# AEO (Answer Engine Optimization)

**Answer Engine Optimization (AEO) is the practice of formatting a page so answer engines can extract a complete, self-contained response directly from it. It relies on question-shaped headings, a direct answer in the first sentence, and chunk independence — each section standing alone so it makes sense when lifted out of the page and quoted.**

## Why AEO matters for an existing site

AEO is a formatting discipline, not a channel. Nobody staffs a separate AEO team; you change how existing pages are written and you're done. The whole trick is a 40–60 word answer sitting directly under a question-shaped heading — read that definition block above, that's the mechanic, this page is the demo. GEO versus AEO versus SEO is a taxonomy argument people have on LinkedIn to sound busy. The work overlaps about 80%. Spend your energy on the one thing that actually changes: make every section answer its question completely, before the reader (or the model) has to scroll for it.

**Q: Is AEO different from GEO?**
**A: No at the strategy level, yes at the page level.** GEO decides what earns a citation — the topical coverage, the entity strength, the original data. AEO formats the chunk that gets extracted once you've earned the look. Same goal, different altitude: one is what you say, the other is how you shape it so it lifts cleanly.

**Related:** [GEO](/glossary/geo/) · [Query fan-out](/glossary/query-fan-out/)
**Read up:** [How AI Answer Engines Choose Citations](/visibility/citations/) · [GEO for Established Websites](/visibility/geo/) · [How to Market a Website in 2026](/how-to-market-a-website/) <!-- all LIVE day one; /visibility/citations/ [PROVISIONAL slug] -->

---

<!-- slug: /glossary/information-gain/ | title: Information gain | meta: Information gain defined — what your page adds that the model couldn't already say. The only durable content moat left, and the one-number bar to clear. -->
<!-- DefinedTerm: name="Information gain" inDefinedTermSet=/glossary/#set -->

# Information gain

**Information gain is the measurable new information a page adds beyond what already exists in the corpus a model was trained on. It is the value a page contributes that could not be reconstructed from existing sources — original data, a named position, or first-hand results — and it is what makes a page worth retrieving rather than paraphrasing.**

## Why information gain matters for an existing site

If an LLM can write your page without retrieving it, you don't have a page. You have training data with a URL. That's the whole test, and most content fails it — it's a competent rephrase of things the model already knows, which is why it never gets cited. The bar to clear is low and brutal: one original number per page that exists nowhere else on the internet. Not a rounded-up stat you borrowed. Yours. Ours is the 8% median citation share from our audit of 50 established sites — a journalist can quote it, a model can retrieve it, and nobody else has it. That's the difference between being a source and being a paraphrase.

Three places gain actually comes from:

1. **Original data** — your study, your benchmark, your numbers. One dataset earns citations for a year.
2. **A defended position** — a stance stated plainly, with the reasoning shown. "It depends" contributes nothing.
3. **First-person results** — what happened when you did the thing. "I deleted 400 pages and traffic went up" can't be paraphrased from anyone else.

**Related:** [Topical authority](/glossary/topical-authority/) · [E-E-A-T](/glossary/e-e-a-t/)
**Read up:** [Information Gain: Pages LLMs Can't Paraphrase](/content/information-gain/) · [Content Audit for Live Sites](/content/audit/) · [How to Market a Website in 2026](/how-to-market-a-website/) <!-- all LIVE day one; /content/information-gain/ [PROVISIONAL slug] -->

---

<!-- slug: /glossary/topical-authority/ | title: Topical authority | meta: Topical authority defined as a formula, not a vibe — coverage × history ÷ cost of retrieval. And why 20 pages on day one beats 20 pages over 20 weeks. -->
<!-- DefinedTerm: name="Topical authority" inDefinedTermSet=/glossary/#set -->

# Topical authority

**Topical authority is a site's earned status as a default source for a subject, evaluated across three factors: the depth and completeness of its topic coverage, the accumulated performance history of its pages, and how cheaply engines can retrieve and parse its content. It is a reputation a site accrues, not a metric it can set.**

## Why topical authority matters for an existing site

Topical authority isn't a vibe you radiate. It's a formula with three variables, and once you see it that way you stop chasing individual keywords and start filling coverage gaps:

```
Topical Authority = (Historical Data × Topical Coverage) ÷ Cost of Retrieval
```

The corollary is the one people ignore: a pillar published on its own is a press release, not an authority signal. Coverage is a multiplier, and one page multiplied by nothing is nothing — which is why you launch 20 pages same-day instead of dribbling them out over five months while the algorithm shrugs. Of the three variables, history is the only one you can't rush; it accrues as pages age and perform. The other two are on the table right now: publish the cluster all at once, and keep rendering, schema, and bot access clean so retrieval stays cheap. Earn the history slowly. Bring the coverage all at once.

**Related:** [Information gain](/glossary/information-gain/) · [Crawl budget](/glossary/crawl-budget/)
**Read up:** [Topical Authority for Existing Sites](/visibility/topical-authority/) · [The 90-Minute Website Marketing Audit](/strategy/audit/) · [How to Market a Website in 2026](/how-to-market-a-website/) <!-- all LIVE day one; /visibility/topical-authority/ [PROVISIONAL slug] -->

---

<!-- slug: /glossary/e-e-a-t/ | title: E-E-A-T | meta: E-E-A-T defined — Experience, Expertise, Authoritativeness, Trust. Evidence Google evaluates, not a score you can buy. Four proofs, under an hour each. -->
<!-- DefinedTerm: name="E-E-A-T" alternateName="Experience, Expertise, Authoritativeness, Trust" inDefinedTermSet=/glossary/#set -->

# E-E-A-T

**E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trust — the framework in Google's Search Quality Rater Guidelines used to assess content quality. It is not a ranking factor and produces no score. It is a bundle of evidence signals, such as named authors, verifiable credentials, first-hand experience, and consistent entity data, that human raters and algorithms evaluate.**

## Why E-E-A-T matters for an existing site

Anyone selling you an "E-E-A-T optimization package" is selling you a score that doesn't exist. There's no dial, no percentage, no thing to buy. It's evidence — and evidence is cheap when the site's already live. Four proofs, each under an hour: a named author with Person schema, a `sameAs` pointing at a real profile, a visible `dateModified`, and one first-person scar per page (the thing you actually did, that went wrong or right). That's it. You're not optimising a metric. You're leaving fingerprints a rater and a model can both check, so the page reads as written by someone who was there instead of assembled by someone who wasn't.

| Letter | What it means | Cheapest proof on a live site |
|---|---|---|
| Experience | First-hand use of the thing | One first-person line per page ("I deleted 400 pages…") |
| Expertise | Demonstrable subject skill | Named author + Person schema |
| Authoritativeness | Recognised by others | `sameAs` to a real profile; earned mentions |
| Trust | Accurate, current, safe | Visible `dateModified` + real citations and contact |

**Related:** [Information gain](/glossary/information-gain/) · [GEO](/glossary/geo/)
**Read up:** [How AI Answer Engines Choose Citations](/visibility/citations/) · [Information Gain: Pages LLMs Can't Paraphrase](/content/information-gain/) · [How to Market a Website in 2026](/how-to-market-a-website/) <!-- all LIVE day one; citations + information-gain slugs [PROVISIONAL]. Natural parent = Entity & Brand Building (Outer Section 3, e.g. /brand/entity-building/) [PHASE-2] — wire when Section 6/brand ships. -->

---

<!-- slug: /glossary/query-fan-out/ | title: Query fan-out | meta: Query fan-out defined — one prompt becomes 5–10 hidden sub-queries. You now rank for questions nobody typed. Worked example inside. -->
<!-- DefinedTerm: name="Query fan-out" inDefinedTermSet=/glossary/#set -->

# Query fan-out

**Query fan-out is the process by which an AI search engine decomposes a single user prompt into multiple synthetic sub-queries, retrieves results for each independently, and then synthesises one answer from the combined results. It means a page can be retrieved for questions the user never typed, because the engine generates and searches those questions on the user's behalf.**

## Why query fan-out matters for an existing site

One prompt fans out into 5–10 sub-queries you never see. The engine writes its own questions, retrieves chunks for each, and stitches the answer together — which means it's shopping for sections, not pages. So the practical move is boring and specific: every H2 answers one sub-question completely, on its own, without leaning on the paragraph above it. Write for the fan-out, not the headline query. A page built as one long argument gets skipped for chunks; a page built as a set of self-contained answers gets mined repeatedly. Here's what a single prompt actually turns into behind the glass:

**Prompt:** *"How do I get my website cited by ChatGPT?"*
**Fans out to (our worked example):**

1. What is generative engine optimization?
2. Which on-page factors make a page citable by AI answer engines?
3. How do answer engines choose which sources to cite?
4. Do brand mentions affect AI citations?
5. How do you measure a site's AI citation share?
6. Is GEO different from SEO?

Six retrievals, one answer. Own six chunks and you're in it six ways.

**Related:** [AEO](/glossary/aeo/) · [GEO](/glossary/geo/)
**Read up:** [Query Fan-Out for Existing Sites](/visibility/query-fan-out/) · [How AI Answer Engines Choose Citations](/visibility/citations/) · [Information Gain](/content/information-gain/) <!-- all LIVE day one; slugs [PROVISIONAL] -->

---

<!-- slug: /glossary/crawl-budget/ | title: Crawl budget | meta: Crawl budget defined — and why under 10,000 URLs you can ignore the classic version but not the AI-crawler one. Four bots to check first. -->
<!-- DefinedTerm: name="Crawl budget" inDefinedTermSet=/glossary/#set -->

# Crawl budget

**Crawl budget is the amount of crawling a search engine or AI bot allocates to a site over a given period, determined by the site's server health, its perceived value, and the freshness of its content. It caps how many URLs get crawled and how often, which in turn governs how quickly new and updated pages are discovered.**

## Why crawl budget matters for an existing site

Under 10,000 URLs, classic crawl budget is a hobby worry. Google will happily crawl a small, healthy site; obsessing over crawl efficiency at that size is optimising a problem you don't have. The 2026 problem is a different one, and it's self-inflicted: a stale `robots.txt` quietly blocking GPTBot, ClaudeBot, or PerplexityBot is a citation embargo you signed yourself. The AI engines can't cite a page they were never allowed to fetch. So before you touch anything clever, verify four bots have access — GPTBot, ClaudeBot, PerplexityBot, and Google-Extended. It's a five-minute check, and every AI citation you'll ever earn is on the other side of it.

**Q: Should a small site worry about crawl budget?**
**A: No, if you're under ~10,000 URLs — worry about AI-bot access instead.** At that scale Google crawls you fine. The failure that actually costs you citations is a `robots.txt` or firewall rule blocking AI crawlers, so audit bot access first and leave classic crawl-budget tuning to sites with six-figure URL counts.

**Related:** [Topical authority](/glossary/topical-authority/) · [Dark AI traffic](/glossary/dark-ai-traffic/)
**Read up:** [How to Market a Website in 2026 — Step 2: Fix](/how-to-market-a-website/) · [Technical Foundation](/technical/) <!-- pillar + section ROOT are LIVE day one. Deep parents /technical/bots/ (llms.txt & AI crawlers) and /technical/audit/ are [PHASE-2] — Section 4 not in the day-one batch; wire when it ships. -->

---

<!-- slug: /glossary/dark-ai-traffic/ | title: Dark AI traffic | meta: Dark AI traffic defined — AI-driven visits hiding in your "direct" bucket. Why your analytics undercounts AI influence, and how to catch it. -->
<!-- DefinedTerm: name="Dark AI traffic" inDefinedTermSet=/glossary/#set -->

# Dark AI traffic

**Dark AI traffic is website traffic and influence that originates from AI assistants but arrives without referrer data, so analytics misattributes it to the direct or none channel. It includes visits from users who acted on an AI answer that cited or described a site, and the resulting undercount hides the true scale of AI-driven demand.**

## Why dark AI traffic matters for an existing site

Your "direct" traffic is lying to you. A chunk of it is people who read about you inside ChatGPT or Perplexity, closed the chat, and typed your name — no referrer, no trail, filed under "direct" like they wandered in off the street. Which means the AI referrals your analytics does report are the floor, not the number. Treat them as the visible tenth. The fix isn't a better dashboard; it's pairing referrer tracking with a 20-prompt manual citation audit — run the questions your buyers actually ask, note where you show up, repeat quarterly. Otherwise you'll watch organic clicks fall, revenue hold or climb, and conclude nothing's happening. Something's happening. You just aren't measuring the channel it's happening in.

| What analytics says | What actually happened | How to catch it |
|---|---|---|
| Direct / none | Visitor followed an AI answer that named you, no referrer sent | Segment new "direct" hits landing on deep pages |
| Referral: perplexity.ai | One visible AI touch among many that left no trace | Treat reported AI referrals as the floor |
| Organic down, revenue flat or up | AI-referred visitors arrived pre-sold and converted | Run a 20-prompt citation audit quarterly |

**Related:** [GEO](/glossary/geo/) · [Crawl budget](/glossary/crawl-budget/)
**Read up:** [How to Market a Website in 2026 — Step 1: Measure](/how-to-market-a-website/) · [Measurement & Attribution](/measurement/) <!-- pillar + section ROOT are LIVE day one. Deep parents /measurement/ai-traffic/ (Tracking AI Traffic) and /measurement/citation-monitoring/ are [PHASE-2] — Section 7 not in the day-one batch; wire when it ships. -->