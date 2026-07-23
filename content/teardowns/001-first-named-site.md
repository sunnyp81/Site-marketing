---
title: "Zapier Teardown: The SEO Textbook That AI Answers Keep Skipping"
description: "Teardown #001: Zapier wins Google at almost unmatched scale — and AI answers cite Make and n8n on its own how-tos. Score, evidence, three fixes."
slug: /teardowns/zapier
section: "Teardowns & Benchmarks"
type: teardown
teardown_number: 1
methodology_version: "citation-share-study v2.0"
datePublished: 2026-07-23
dateModified: 2026-07-23
author: sunny
faqs: []
sources:
  - label: "Ahrefs — 6 Things I Love About Zapier's SEO Strategy"
    url: https://ahrefs.com/blog/zapier-seo-case-study/
  - label: "ViewEngine — Zapier programmatic SEO, 9M+ monthly organic"
    url: https://www.viewengine.ai/learn/zapier-programmatic-seo-strategy-millions-organic-traffic
  - label: "upGrowth — Zapier programmatic SEO, 2.6M+ monthly traffic"
    url: https://upgrowth.in/how-zapier-programmatic-seo-strategy-delivers-2-6m-monthly-organic-traffic/
  - label: "Cybernews — Zapier Review 2026 (pricing, cost objection)"
    url: https://cybernews.com/ai-tools/zapier-review/
  - label: "Probe receipt — Make, save Gmail attachments to Drive"
    url: https://www.make.com/en/how-to-guides/automatically-save-gmail-attachments-to-google-drive
  - label: "Probe receipt — n8n workflow template, Gmail attachments to Drive"
    url: https://n8n.io/workflows/6466-automatically-save-gmail-attachments-to-google-drive/
  - label: "Probe receipt — Relay.app, Gmail attachments to Drive"
    url: https://www.relay.app/how-to/automatically-save-gmail-attachments-to-google-drive
---

<!--
PRODUCTION NOTES (do not publish this block)

PRE-PUBLISH GATE — THIS DRAFT IS NOT YET PUBLISHABLE. Four items block publish; two of the
six metric scores are marked PROVISIONAL until they clear. This is stated plainly because
the whole wedge is "check our work" — shipping unverified numbers on a named company would be
the exact incumbent sin the teardown series exists to attack.

1. FOUR-ENGINE INSTRUMENT RUN (blocks the Section 2 figure of record).
   The blended citation-share figure that enters dataset.csv MUST come from the study's
   instrument: 20 site-specific prompts × 4 engines (ChatGPT, Perplexity, Gemini, Claude),
   3 runs each, ≥2-of-3 stability, per /research/citation-share-study §4–5.
   The number on the page now is a LABELLED SEARCH-SURFACE PRE-READ: four probes, one per
   prompt type, run logged-out against a single AI-assisted web-search answer surface
   (US locale) on 2026-07-23, and independently re-run and verified the same day by the
   reviewing editor. Row 4 (branded-adjacent) was CORRECTED on the verified re-run: Zapier
   was absent, not "present via own blog" as first drafted; its own guide surfaced under the
   category probe instead. Before publish: replace the pre-read extrapolation with the
   instrument's blended %; fill the per-engine table; name the pre-read surface (vendor +
   locale) if the pre-read table is retained, or drop it once instrument figures land;
   re-score metric 3 if it moves. Metric 3 is provisionally scored 3 (the S3 at-median
   anchor). Do not re-lower it without instrument data — scores are not rounded down for
   drama any more than up for niceness.

2. FIRST-PARTY RETRIEVABILITY CRAWL (blocks metric 2, "AI retrievability").
   zapier.com returned HTTP 403 to the drafting fetcher on every path, so robots.txt, llms.txt,
   per-bot access (GPTBot / ClaudeBot / PerplexityBot / Google-Extended), initial-HTML-vs-client-
   render, and schema validation could NOT be verified first-hand. Metric 2 is scored PROVISIONAL
   from public signal only (Google clearly crawls and renders the site at scale). Before publish:
   fetch robots.txt + llms.txt from a permitted egress, confirm bot policy, curl a programmatic
   page and diff no-JS body vs hydrated DOM, run the schema validator. Re-score, and add the
   code-block evidence the format expects. Do NOT publish a negative retrievability claim that
   isn't tied to a first-party observation (S5 rule 2).

3. RIGHT OF REPLY (S5 rule 7). Email Zapier ≥5 business days before publish. Print any response
   verbatim up to 100 words. Not yet sent.

4. LEGAL 8-BOX CHECKLIST (S5) + append the dataset.csv row BEFORE publish (S6, publish blocked
   without the row): teardown_date, site_domain=zapier.com, vertical=SaaS, cohort_tag=teardown,
   methodology_version=2.0, citation_share_blended=<instrument>, total_score=<final, currently
   provisional 22>, grade_band, teardown_url.

SCHEMA / INFRA
- Schema: Article + Review (itemReviewed: WebSite, author Person Sunny) + BreadcrumbList.
  Do NOT use AggregateRating — single-author expert review, not aggregated user ratings.
- Author Person schema for Sunny Patel, sameAs → LinkedIn.
- All content in initial HTML, no client-side rendering. Scorecard also expressed as the HTML
  table in §7 (never score-in-image only). Dated, credited screenshots for any evidence image.
- dateModified visible on page; corrections logged as a visible changelog line.
- Estimates: every third-party traffic/keyword figure is a labelled range, source named inline
  (estimates vary widely by tool and date — do not collapse to one precise number).
-->

# Zapier Teardown: The SEO Textbook That AI Answers Keep Skipping

Zapier is the most-cited programmatic-SEO case study on the web, and on the evidence the reputation is earned: roughly 50,000 integration pages and an estimated 2.6M–12M monthly organic visits (third-party estimates, labelled below). Scored outside-in on six observable metrics, it totals **22/30 (provisional) — Amplify-ready**, one band below Benchmark. The metric holding it back is citation share: in our dated probes, the answer surface cited [Make](https://www.make.com/en/how-to-guides/automatically-save-gmail-attachments-to-google-drive), [n8n](https://n8n.io/workflows/6466-automatically-save-gmail-attachments-to-google-drive/) and [Relay.app](https://www.relay.app/how-to/automatically-save-gmail-attachments-to-google-drive) on exactly the how-to queries Zapier's estate is built to serve — and skipped Zapier entirely.

Scoring uses the same 20-prompt instrument as [the Citation-Share Study](/research/citation-share-study). Every number below is either a labelled third-party estimate or a dated observation you can reproduce. Where a number needs the full four-engine instrument run or a first-party crawl we could not complete in drafting, it is marked provisional, not guessed.

## 1. Snapshot

Zapier is a freemium, task-priced automation SaaS — connect 8,000+ apps and build no-code "if this, then that" workflows — that grew into the benchmark programmatic-SEO case study. Its footprint is genuinely large: third-party tools estimate monthly organic traffic anywhere from ~2.6M to ~12M depending on tool and date, across roughly 50,000 app and app-to-app integration pages, ranking for millions of keywords ([Ahrefs](https://ahrefs.com/blog/zapier-seo-case-study/); [upGrowth](https://upgrowth.in/how-zapier-programmatic-seo-strategy-delivers-2-6m-monthly-organic-traffic/); [ViewEngine](https://www.viewengine.ai/learn/zapier-programmatic-seo-strategy-millions-organic-traffic)). The estimates disagree by more than a factor of four; the direction — very large, growing — does not.

| Field | Value |
|---|---|
| Site | zapier.com |
| Vertical | SaaS |
| Est. monthly organic traffic | ~2.6M–12M (third-party estimates vary by tool/date; Ahrefs-cited figures cluster ~2.6–5.8M) |
| Business model | Freemium, task-based automation SaaS; free plan, paid from ~$19.99/mo, scales steeply with task volume |

## 2. Citation Share

Citation share is scored under the study rules ([§2–§5](/research/citation-share-study)): 20 site-specific prompts across four engines, three runs each, citations weighted 1.0 and named-without-link mentions 0.5, blended with equal engine weight. The figure of record for the dataset comes only from that instrument run.

That full run is pending (see the dated note at the foot of this page). What we can publish today is a **labelled search-surface pre-read**: four probes, one per prompt type, run logged-out against a single AI-assisted web-search answer surface (US locale) on 2026-07-23, and independently re-run and verified the same day by a second reviewer. It is not the four-engine instrument and is not the dataset figure — it exists to place the band and to score the metric provisionally.

| Engine | Relevant answers | Citations (1.0) | Mentions (0.5) | Engine share |
|---|---|---|---|---|
| ChatGPT | — | — | — | instrument run pending |
| Perplexity | — | — | — | instrument run pending |
| Gemini | — | — | — | instrument run pending |
| Claude | — | — | — | instrument run pending |
| **Blended** | — | — | — | **~10% region (pre-read extrapolation — not the instrument figure)** |

**Search-surface pre-read (run and verified 2026-07-23), by prompt type:**

| Prompt type | Prompt run | Zapier result | Who got cited instead |
|---|---|---|---|
| Category | "best automation tool to connect apps without code 2026" | Present — named "the most widely adopted", but one name among eight, not the source the answer is built on | Gumloop, Make, n8n, Relay.app, Apify, Clay |
| Comparison | "Zapier vs Make vs n8n for workflow automation" | Present — "most beginner-friendly", flagged as expensive at scale ("10K to 100K tasks can cost $500+/month") | Make took the value verdict, n8n the power verdict; the answer was built from third-party comparison blogs, not zapier.com |
| Informational | "how to automatically save Gmail attachments to Google Drive" | **Absent** from the surfaced answer | [Make's how-to guide](https://www.make.com/en/how-to-guides/automatically-save-gmail-attachments-to-google-drive), [n8n's workflow template](https://n8n.io/workflows/6466-automatically-save-gmail-attachments-to-google-drive/), [Relay.app's how-to](https://www.relay.app/how-to/automatically-save-gmail-attachments-to-google-drive), Google Apps Script |
| Branded-adjacent | "best no-code app builder 2026" | **Absent** — even though Zapier's own guide on this exact query surfaced under the *category* probe | Bubble, FlutterFlow, Glide, Softr, Jotform |

The pattern is the finding. Zapier appears in the two commercial answers as a name in a list or a compared option, and is absent from both the plain how-to — the exact query its integration pages are built to serve — and the branded-adjacent probe. If that pattern held across the full 20-prompt grammar (list-mentions at 0.5 weight on commercial prompts, nothing on informational or branded-adjacent), blended share would land in the region of ~10% — around the pilot's 8% median, nowhere near the 30% line the playbook calls "what good looks like". That is an extrapolation from four probes, labelled as such; the instrument run confirms or corrects it. To run the same instrument on your own site, see [AI citation monitoring](/measurement/citation-monitoring).

## 3. Six Baseline Metrics

Three of the six are outside-in proxies, on purpose — a teardown audits a site it does not own, so metrics that live in the owner's private analytics are replaced by the nearest public signal ([§4 of the methodology](/teardowns/methodology)). Metrics 2 and 3 are marked provisional here: metric 3 pending the instrument run, metric 2 pending a first-party retrievability crawl.

| Metric (outside-in) | Observed | Score 0–5 | Evidence source |
|---|---|---|---|
| Organic visibility trend | Large and growing; footprint spread across ~50k pages, not propped by one | 5 | Ahrefs / upGrowth / ViewEngine estimates (labelled) |
| AI retrievability | Google crawls and renders at scale; per-bot policy, llms.txt, initial-HTML and schema unverified first-hand | 3 (provisional) | Public organic footprint; first-party crawl pending (403 to our fetcher) |
| Citation share | Present as a list-name on the commercial probes, absent on the informational and branded-adjacent probes; ~10% region extrapolated | 3 (provisional) | Search-surface pre-read, run and verified 2026-07-23; instrument pending |
| Conversion readiness | Clear pricing page, free plan, unambiguous signup path; standing cost objection | 4 | Zapier public money pages; [Cybernews review](https://cybernews.com/ai-tools/zapier-review/) |
| Indexed vs valuable pages | In our scoring, a ~50k-page templated estate is read as carrying a thin long tail; per-page traffic distribution not independently verified | 3 | Public page counts; third-party pSEO breakdowns (labelled estimates) |
| Commercial-intent capture | Clean path from integration page → signup → paid workflow | 4 | Zapier public conversion path (observed) |

**Total: 22 / 30** (provisional — metrics 2 and 3 firm up on the crawl and the instrument run).

On the visibility side there is nothing to fix; Zapier is a textbook. The gap is narrow and specific. Its pages are built to *rank* — templated, keyword-targeted, internally linked into an authority machine — and ranking is not the same job as being the self-contained answer an engine wants to quote. A page can top Google for "save Gmail attachments to Drive" and still not be the chunk a model lifts, because the model wants the answer in the first 200 words, not a directory listing that routes you to a template. That distinction is what leaves a site with a 5/5 visibility trend carrying an at-median citation share.

## 4. Sequence-Stage Verdict

On the Measure → Fix → Strengthen → Amplify sequence from [the existing-site playbook](/how-to-market-a-website/), Zapier's scores place it past Fix and almost entirely past Strengthen — with one exception, which the fixes below target.

<!-- sunny-voice -->
Zapier is an Amplify-ready site with one Strengthen-stage blind spot: it wins the ranking and loses the answer — because a page built to rank on Google and a page built to get quoted by an engine are not the same page, and Zapier owns 50,000 of the first kind.

## 5. Three Prioritised Fixes

Three fixes, ranked by revenue impact, not effort. On a site Google crawls, renders and rewards at this scale, the citation bottleneck is content chunks, not technical debt — that is the transferable thesis of this series, and Zapier is the clean proof of it.

| Fix | Why it's #N | Effort (days) | Expected first signal (weeks) |
|---|---|---|---|
| #1 — Front-load a real answer on the top integration/how-to pages: the actual steps in the first 200 words, before the template UI | #1 because the how-to surface is the largest citation gap and the one Make, n8n and Relay.app are eating; it turns ranking pages into quotable chunks | ~10 (template-level, applies across the estate) | 6–10 |
| #2 — Own the comparison answer: honest "Zapier vs Make vs n8n" pages that state positions, including the cost trade-off, instead of ceding "vs" queries to third-party blogs | #2 because comparison prompts are high-intent and the answers we observed were built from third-party review blogs, not zapier.com | ~5 | 6–12 |
| #3 — Publish information-gain content on the blog: original workflow data and named positions engines can't paraphrase from elsewhere, to earn branded-adjacent citations | #3 because it compounds slowest but builds the entity signal that lifts all four prompt types over time | ~15 (ongoing) | 12–20 |

Each fix sits at the Strengthen stage — make the site worth citing, then let distribution compound it. The method for #1 and #2 lives in [GEO for established websites](/visibility/geo) and turns on [information gain](/glossary/information-gain): the page has to say something the model can't already generate from everyone else's page on the same topic. Zapier's problem isn't access. It's that a template routing you to a workflow doesn't answer the question, and the engines noticed.

## 6. What They're Doing Right

Three things, concretely. The programmatic architecture is best-in-class: a three-tier page system (app → app-to-app → workflow) that turns every new partner into dozens of internally linked pages, largely populated from partner-supplied content — the reason the site ranks for millions of keywords without a paid budget ([Ahrefs](https://ahrefs.com/blog/zapier-seo-case-study/)). The conversion path is clean: free plan, visible pricing, an unambiguous route from an integration page to a live workflow. And the blog is a real ranking asset — the "best no-code app builder" guide that surfaced under our category probe is Zapier's own page. This is a healthy site with one specific gap.

## 7. Scorecard + Verdict

Total 22/30 places Zapier in the Amplify-ready band — a site worth distributing, held one rung below Benchmark by a citation metric that lags its rankings. The two provisional scores could move the total a point or two either way; the band holds across that range.

| Total | Band |
|---|---|
| 22 / 30 (provisional) | Amplify-ready |

<!-- sunny-voice -->
The best programmatic-SEO site on the internet, quietly getting out-quoted on its own how-tos — and the fix isn't a 50,001st page, it's making the 50,000 it already has actually answer the question.

*Scored under [the teardown methodology](/teardowns/methodology) — "how we score teardowns". Run this on your own site: [the 90-minute audit](/strategy/audit/). Corrections welcome — email us; factual errors are fixed within 48 hours and logged in a visible changelog line on this page.*