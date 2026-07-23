---
title: "How site.marketing Scores Teardowns: The Named-Site Methodology"
description: "The fixed format, scoring rubric, sourcing rules, and legal guardrails behind every site.marketing teardown — the same 20-prompt instrument as the Citation-Share Study, applied to one named site at a time."
slug: /teardowns/methodology
section: "Teardowns & Benchmarks"
type: methodology
version: "1.0"
methodology_inherits: "citation-share-study v2.0"
dateModified: 2026-07-23
---

<!--
PRODUCTION NOTES (do not publish this block)

HARD PARTITION — READ FIRST.
This file (content/teardowns/teardown-template.md) is the INTERNAL master template. It is
noindex and is never served to readers.
- PART A (S1–S5 + the worked specimen) is the ONLY publishable content. The public methodology
  page at /teardowns/methodology is a SEPARATE file — content/teardowns/methodology.md —
  containing: the front-matter block above, the H1, the opening definition paragraph (it is the
  page's inverted-pyramid lead — do not publish Part A headless), then Part A verbatim, and
  nothing from Part B.
- PART B (S0, S6, rollout plan) is internal operations: time cap, headcount, dataset plumbing,
  milestones. It must NOT be copied into the public file and must NOT be hidden behind an HTML
  comment fence in the public file. Per repo convention (see citation-share-study-methodology.md),
  comment fences ship in repo source and rendered output — internal content lives in a separate
  file, not a fence.
- Do not publish teardown-template.md itself. Publish methodology.md (Part A) and each teardown page.

SCHEMA / INFRA (for the public methodology page, methodology.md)
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs → LinkedIn.
- Each produced teardown page: Article + Review (itemReviewed: WebSite) + BreadcrumbList. Do NOT use
  AggregateRating; a teardown is a single-author expert review, not aggregated user ratings.
- Verify GPTBot, ClaudeBot, PerplexityBot, Google-Extended access per bot policy. All content in
  initial HTML — no client-side rendering. The scorecard graphic must also be expressed as an HTML
  table (never score-in-image only).
- dateModified visible on every teardown; corrections logged as a visible changelog line (S5).

LINK-CONVENTION FLAGS (resolve site-wide before launch)
- Trailing slashes are inconsistent across shipped files (the pillar uses trailing; the topical map
  and the Citation-Share Study use flat). This file follows each target's declared canonical slug
  where one exists (pillar: /how-to-market-a-website/ ; study: /research/citation-share-study) and
  the map's flat rule for the rest. Normalise sitewide before launch.
- Upstream-unresolved: the pillar canonical (/how-to-market-a-website/ vs /strategy/playbook). The
  AI-traffic slug is treated as resolved by majority: seven shipped files (pillar, both audit
  clusters, budget, seo-vs-geo, offers, plan template) use /measurement/ai-traffic; only the study
  and the 90-day plan use /measurement/tracking-ai-traffic. Links below use /measurement/ai-traffic;
  re-point the two outliers sitewide.
- /strategy/audit is linked with a trailing slash (/strategy/audit/) to match the dominant shipped
  form (15+ occurrences); other core slugs stay flat per the topical map.
-->

# Named-Site Teardown Template: The site.marketing Standard Format

A site.marketing teardown is a fixed-format, outside-in audit of one named website, scored on six observable metrics out of 30, using the same 20-prompt citation instrument as [the Citation-Share Study](/research/citation-share-study). The format is deliberately rigid. Every teardown fills the same sections, scores the same rubric, sources numbers under the same rules, and clears the same legal pass. That rigidity is the point: because each teardown runs the study's instrument, it produces a citation-share figure directly comparable to the benchmark, and the site becomes one tagged datapoint in a longitudinal record that cannot be backfilled — rather than a one-off opinion piece.

This file has two parts. **Part A** is the public methodology — how the grading works, published so a reader or a torn-down site owner can check the process is fair rather than rigged. **Part B** is the internal production SOP and is not published. The instrument transparency in Part A is itself a citation asset: a methods page other people quote.

---

# PART A — PUBLIC METHODOLOGY

## S1. Site Selection Criteria

A site is eligible for a teardown only if it clears the same frame as the Citation-Share Study, so its result is comparable to the benchmark. The frame is fixed before a site is picked; it is never shaped to fit a site someone wants to cover.

**Include** — a site must be:

- Live for at least 24 months
- At least 100 indexed pages
- English-language
- A measurable organic footprint (≥1,000 estimated monthly organic clicks)
- Assignable to exactly one of the eight study verticals: SaaS, Ecommerce, Local services, B2B services, Finance, Health, Travel, Education

**Exclude:**

- News publishers and user-generated-content platforms (excluded from the study frame; their citation dynamics are driven by recency or by content the domain did not author)
- Any site with an active legal dispute in the news
- Any current site.marketing client or consulting relationship — a competitor of an active client is also excluded. If a site is a former client, that relationship is disclosed in the teardown's first paragraph. (This is the one deliberate divergence from the study frame, which excludes former clients outright: a teardown row is tagged `cohort_tag=teardown` and never enters the benchmark medians, so disclosure carries the conflict here rather than exclusion.)

**Vertical quota.** Four teardowns per quarter, each a different study vertical, rotating so all eight verticals are covered every two quarters. This prevents the teardown cohort from skewing toward SaaS, the same way the study stratifies its 200-site frame.

Pick sites readers recognise or envy, not sites that are easy to dunk on. A teardown of a site nobody has heard of is a tutorial; a teardown of a site readers can picture is a benchmark they can locate themselves against.

## S2. Fixed Teardown Structure

Every teardown is built from the skeleton below. A teardown that skips a fixed section does not ship. Copy the block, fill each section to its word budget, and keep the three tables exactly as specified — the tables are what make a teardown chunk-retrievable and what feed the dataset, so no teardown uses a FAQ block in their place.

```markdown
# [Site name] Teardown: [one-line hook]

## 1. Snapshot  (~100 words)
Site, vertical, estimated monthly organic traffic (labelled estimate),
one-sentence business model.
| Field | Value |
|---|---|
| Site | example.com |
| Vertical | [one of the eight] |
| Est. monthly organic traffic | ~00,000 (Ahrefs/Semrush estimate) |
| Business model | [one sentence] |

## 2. Citation Share  (~250 words)
20-prompt run across four engines, scored under the study rules (S4).
| Engine | Relevant answers | Citations (1.0) | Mentions (0.5) | Engine share |
|---|---|---|---|---|
| ChatGPT | | | | |
| Perplexity | | | | |
| Gemini | | | | |
| Claude | | | | |
| **Blended** | | | | **00%** |
Blended share vs the current published median (see S3/S4).

## 3. Six Baseline Metrics  (~400 words)
Outside-in proxies for the pillar's six numbers (S4 explains why three are proxies).
| Metric (outside-in) | Observed | Score 0–5 | Evidence source |
|---|---|---|---|
| Organic visibility trend | | | |
| AI retrievability | | | |
| Citation share | | | |
| Conversion readiness | | | |
| Indexed vs valuable pages | | | |
| Commercial-intent capture | | | |

## 4. Sequence-Stage Verdict  (~150 words)
One sentence placing the site on Measure → Fix → Strengthen → Amplify.
<!-- sunny-voice -->  (one of two sanctioned Sunny-voice slots)

## 5. Three Prioritised Fixes  (~450 words)
Exactly three, ranked by revenue impact. Never more than three.
| Fix | Why it's #N | Effort (days) | Expected first signal (weeks) |
|---|---|---|---|
| #1 | | | |
| #2 | | | |
| #3 | | | |

## 6. What They're Doing Right  (~100 words)
Mandatory. Minimum two items. This is the fairness section and the legal ballast.

## 7. Scorecard + Verdict  (~50 words)
Total /30, grade band, one quotable sentence.
| Total | Band |
|---|---|
| 00 / 30 | [Fix / Strengthen / Amplify-ready / Benchmark] |
<!-- sunny-voice -->  (closing one-liner — the second sanctioned slot)

*Scored under [the teardown methodology](/teardowns/methodology) — "how we score teardowns".*
```

Two sentences in a teardown may carry Sunny's voice — the sequence-stage verdict and the closing one-liner, both marked `<!-- sunny-voice -->` in the skeleton. Everything table-adjacent stays flat neutral-doc.

## S3. Scoring Rubric

Each of the six metrics scores 0–5, for a total out of 30. The anchors below fix what a 0, a 3, and a 5 mean, so two people scoring the same site land in the same place.

| Metric | 0 | 3 | 5 |
|---|---|---|---|
| Organic visibility trend | Est. traffic negligible or declining >25% YoY | Flat within ±10% YoY, moderate footprint | Growing >25% YoY, strong footprint, not propped by one page |
| AI retrievability | AI crawlers blocked, or content is JavaScript-only (invisible to retrievers) | Crawlable, mixed rendering, partial schema | Full bot access, llms.txt present, content in initial HTML, clean schema |
| Citation share | 0% blended | At the current published median (8% pilot as of Jul 2026; the v2 wave median from Sep 2026) | ≥30% blended (the pillar's "what good looks like") |
| Conversion readiness | Homepage fails the five-second test; hidden pricing; no clear CTA | Clear on three of the five money pages | All five money pages clear, low-friction, pricing transparent |
| Indexed vs valuable pages | Severe bloat — most indexed pages earn no estimated traffic | Roughly half of indexed pages earn traffic | Most indexed pages earn traffic; little dead weight |
| Commercial-intent capture | No visible path from a visit to revenue or a lead | A path exists but leaks (weak CTA, no capture at intent) | Clear money path; intent captured; lead/email capture at the right moments |

**Grade bands** map the score straight onto the pillar's sequence. The verdict falls out of the score, not out of vibes:

| Total /30 | Band | Meaning |
|---|---|---|
| 0–10 | Fix stage | Leaks first; do not amplify |
| 11–18 | Strengthen stage | Foundation holds; make it worth citing |
| 19–24 | Amplify-ready | Worth distributing |
| 25–30 | Benchmark site | The site others get scored against |

Scores are never rounded up "to be nice". A teardown whose prose verdict contradicts its score band is wrong by definition — fix the prose or re-score, but the two must agree. The dataset is the product; a flattering row is a corrupted row.

## S4. The Instrument and Sourcing Rules

**The instrument is the Citation-Share Study's, unchanged.** Every teardown runs the study's 20-prompt grammar — four prompt types (category, informational, comparison, branded-adjacent), five prompts each, seeded from the site's own category, its top organic pages, its adjacent alternatives, and the problem it solves — across the same four engines (ChatGPT, Perplexity, Gemini, Claude), three runs per engine, with a citation counting only if it appears in at least two of three runs. Citations weight 1.0, named-without-link mentions 0.5, no-answer returns are excluded from the denominator, and the four engines blend with equal weight. The full grammar, controls and scoring rules are published in [the Citation-Share Study methodology](/research/citation-share-study); the identical instrument is what makes a teardown's figure comparable to the benchmark, so nothing here overrides them.

**Every teardown records the methodology version it was scored under** (currently `citation-share-study v2.0`) in its dataset row. Version comparability is already solved upstream: because raw answers are logged immutably, a scoring-rule change re-scores prior rows rather than mixing rule sets, and prompt rotations are versioned and noted. A teardown scored under v2.0 is directly comparable to any wave scored under v2.0.

**Three of the six metrics are outside-in proxies, on purpose.** A teardown audits a site you do not own, so any metric that lives in the owner's private analytics cannot be sourced without guessing — which the rules below forbid. Those metrics are replaced by the nearest externally observable signal, and the substitution is stated so the rubric never depends on a number the instrument cannot legitimately produce.

| Pillar metric (owner view, private) | Observable from outside? | Teardown outside-in proxy | Source |
|---|---|---|---|
| Organic clicks (trend) | Estimable | Organic visibility trend | Ahrefs / Semrush estimate (labelled) |
| AI referrals | No (owner's GA4) | AI retrievability | robots.txt, llms.txt, bot access, rendering, schema validation |
| Citation share | Yes | Citation share | The 20-prompt instrument, four engines |
| Conversion rate | No (owner's analytics) | Conversion readiness | The site's own public money pages (observed) |
| Indexed vs valuable pages | Partly | Indexed vs valuable pages | Ahrefs top-pages + `site:` estimate |
| Revenue per visit | No (owner's revenue) | Commercial-intent capture | The site's public conversion path (observed) |

**Permitted and forbidden sources.** Every number in a teardown carries its source in the Evidence column. No source, no claim.

| Permitted (public) | Forbidden |
|---|---|
| SERP observations | Leaked or private analytics (their GA4, dashboards) |
| The site's own public pages | Insider information |
| Wayback Machine | Scraped private or gated data |
| robots.txt / llms.txt | Stating an estimate as a fact |
| PageSpeed Insights | Guessing revenue as fact |
| Schema validators | Naming non-public individuals |
| Ahrefs / Semrush / Similarweb — as estimates, labelled | Presenting the outside-in proxies as owner-grade metrics |
| The 20-prompt instrument run | |

## S5. Legal and Tone Guardrails for Naming Real Sites

The Citation-Share Study protects the sites it measures by never naming them. A teardown does the opposite — it names one site and critiques it in public — so it protects the site through process instead: evidence, fairness, and a right of reply. Ten rules are non-negotiable.

1. Critique the site, never the people. No naming employees below C-suite, and no naming any individual unless they are the site's public face.
2. Every negative claim is tied to observable evidence in the Evidence column.
3. Opinion is framed as opinion — "in our scoring" and "we read this as", not "they are failing".
4. No speculation on revenue, layoffs, funding or legal matters.
5. Screenshots are of public pages only, dated and credited.
6. Estimates are always labelled as estimates, with the source named.
7. Right of reply: email the site at least five business days before publishing. Any response is printed verbatim, up to 100 words.
8. Corrections: factual errors are fixed within 48 hours, with a visible changelog line on the page.
9. Never tear down a competitor of an active client, and disclose any former-client relationship in the first paragraph.
10. The two Sunny-voice slots are the only place tone flexes; the guardrails and every table stay flat neutral-doc.

**Pre-publish legal checklist (all eight must be ticked):**

- [ ] Every negative claim maps to a cited, observable source
- [ ] No individual below C-suite is named; no non-public person is named
- [ ] All estimates labelled as estimates, sources named
- [ ] No speculation on revenue, layoffs, funding or legal matters
- [ ] Screenshots are public-page only, dated and credited
- [ ] Right-of-reply email sent ≥5 business days before publish; any reply included verbatim (≤100 words)
- [ ] "What They're Doing Right" present, with at least two items
- [ ] No client conflict; any former-client relationship disclosed in paragraph one

## Worked specimen (illustrative)

The following is a filled skeleton for a **fictional** site, *PipeWorks Supply* (the same worked example used in the study's instrument section). Every number here is fabricated to demonstrate the format and must never be read as a claim about a real business.

> **PipeWorks Supply Teardown: strong catalogue, invisible to the engines**
>
> **1. Snapshot** — PipeWorks Supply (`pipeworks.example`), B2B services, ~42,000 est. monthly organic clicks (Ahrefs estimate). Business model: wholesale plumbing supplies for commercial contractors, sold direct via a trade account.
>
> **2. Citation Share**
>
> | Engine | Relevant answers | Citations (1.0) | Mentions (0.5) | Engine share |
> |---|---|---|---|---|
> | ChatGPT | 18 | 1 | 2 | 11% |
> | Perplexity | 19 | 2 | 1 | 13% |
> | Gemini | 17 | 0 | 2 | 6% |
> | Claude | 18 | 1 | 1 | 8% |
> | **Blended** | — | — | — | **~10%** |
>
> Blended ~10%, just above the 8% pilot median — present, but nowhere near the 30% line.
>
> **3. Six Baseline Metrics** — abbreviated: organic visibility trend 3 (flat YoY, Ahrefs); AI retrievability 2 (GPTBot allowed but product pages render client-side); citation share 3 (~10% blended — at the median anchor, far from the 30% line); conversion readiness 3 (pricing gated behind "request a trade account"); indexed vs valuable 3 (est. 40% of indexed pages earn no traffic — around the "roughly half" anchor); commercial-intent capture 3. **Total: 17/30.**
>
> **4. Sequence-Stage Verdict** — `<!-- sunny-voice -->` This is a Strengthen-stage site paying for an Amplify-stage catalogue nobody's engine can read.
>
> **5. Three Prioritised Fixes** — (1) move product content into initial HTML — #1 because it unblocks retrieval; ~5 days; 4–8 weeks. (2) publish trade pricing bands — #2, unlocks high-intent answers; ~3 days; 6–10 weeks. (3) prune the ~40% dead catalogue pages — #3; ~4 days; 8–12 weeks.
>
> **6. What They're Doing Right** — Genuinely deep sizing guides that already answer informational prompts; fast, clean checkout once you have an account.
>
> **7. Scorecard** — 17/30, Strengthen stage. `<!-- sunny-voice -->` A great warehouse with the lights off for the robots.

---

# PART B — INTERNAL PRODUCTION SOP (INTERNAL ONLY — DO NOT PUBLISH)

## S0. How to Use This Template

A teardown ships only when every fixed section is filled — no freestyle teardowns, because the dataset compounds only if every row has the same columns. Time budget is **four hours of working time, hard cap**: roughly 90 minutes for the outside-in audit, the rest for scoring the 20-prompt run and the write-up. The cap is labour, not elapsed time — the 3× stability runs span a 72-hour window (S4) and the right-of-reply email adds five business days before publish, so start the prompt runs and send the reply request first, then fill the skeleton while both clocks run. Over four hours of labour means the format is being ignored, not that the site is unusually complicated.

The seven steps, in order:

1. **Pick** — choose a site that clears S1 (eligibility, exclusions, this quarter's vertical).
2. **Verify eligibility** — confirm the include/exclude frame and the client-conflict check.
3. **Run the instrument** — the study's 20-prompt grammar, four engines, three runs each (S4).
4. **Score** — the six outside-in metrics against the S3 rubric; record the methodology version.
5. **Verdict** — read the band straight off the total; write the one-sentence stage verdict.
6. **Fixes** — exactly three, ranked by revenue impact.
7. **Legal pass** — the eight-box checklist (S5), including the right-of-reply email.

## S6. Publication and Dataset Pipeline

Each teardown appends one row to `content/teardowns/dataset.csv` **before** it publishes — publish is blocked without the row. The CSV is the aggregate index; per-metric sub-scores, per-engine shares, and the immutable per-answer log live with the teardown page (mirroring the study: aggregate public, per-observation retained so a row can be re-scored on a version bump).

**`dataset.csv` schema — nine columns:**

| # | Column | Notes |
|---|---|---|
| 1 | `teardown_date` | ISO date |
| 2 | `site_domain` | registrable domain |
| 3 | `vertical` | one of the eight study verticals |
| 4 | `cohort_tag` | constant `teardown` — tags the row so it is reported *alongside*, never folded into, the study's random-sample medians |
| 5 | `methodology_version` | e.g. `2.0` — ties comparability to the Citation-Share Study; enables re-score on a version bump |
| 6 | `citation_share_blended` | %, four-engine blended |
| 7 | `total_score` | integer, /30 |
| 8 | `grade_band` | Fix / Strengthen / Amplify-ready / Benchmark |
| 9 | `teardown_url` | canonical `/teardowns/{slug}` |

**Data flow:**

`20-prompt run (4 engines) → immutable per-answer log → scorecard → dataset.csv row (cohort_tag=teardown) → teardown page → quarterly teardown-cohort aggregate`

The quarterly aggregate reports the teardown cohort's own median and n ("median across n teardowns to date") **beside** the study's random-sample median — never merged into it, exactly as the study reports its GEO-active oversample separately. The teardown cohort is named, non-random and consented via right-of-reply; folding it into the random-sample benchmark would corrupt that headline number. Keeping it tagged is what keeps the marquee median sound while still letting every teardown compound the moat.

## Rollout plan (team: Sunny + 1)

- **M1 (week 1)** — template, rubric and public methodology page (Part A → `methodology.md`) finalised; `dataset.csv` schema created; methodology version pinned to `citation-share-study v2.0`. *Owner: Sunny.*
- **M2 (week 2)** — pilot teardown on a consented, friendly site to stress-test the four-hour cap; revise word budgets. *Collaborator drives, Sunny scores.*
- **M3 (week 3)** — first public teardown and the methodology page go live simultaneously. The methodology must exist before the first named critique.
- **M4 (quarterly, ongoing)** — four teardowns per quarter, one per vertical, rotating all eight across two quarters; refresh the teardown-cohort aggregate each quarter end.

## Internal links (from every teardown and this methodology)

| Anchor context | Target |
|---|---|
| The instrument / benchmark | [The Citation-Share Study](/research/citation-share-study) |
| Sequence stages (verdict) | [The existing-site playbook](/how-to-market-a-website/) |
| The 90-minute audit | [Website marketing audit](/strategy/audit/) |
| Low citation share → fix | [GEO for established websites](/visibility/geo) |
| AI-retrievability / DIY instrument | [AI citation monitoring](/measurement/citation-monitoring) |
| AI referrals sourcing | [Tracking AI traffic](/measurement/ai-traffic) |
| Conversion-readiness method | [CRO audit](/conversion/audit) |
| Inline term links | [GEO](/glossary/geo), [AEO](/glossary/aeo), [information gain](/glossary/information-gain) |

Reciprocal: every published teardown links back to [/teardowns/methodology](/teardowns/methodology) with the anchor "how we score teardowns". Prospects reading a teardown are pointed to [the 90-minute audit](/strategy/audit/) with "run this on your own site".