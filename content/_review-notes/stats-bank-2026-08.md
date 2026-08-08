# Stats bank — August 2026 cluster build (8 articles)

Status: **NOT DELIVERED. BLOCKED.**
Prepared: 2026-08-08 · Research manager (Opus), no subagents available
Intended consumer: the 8 cluster articles in the build spec

---

## STOP — read this before you take a single number from this file

**There are zero verified statistics in this document.** Not one figure below was
confirmed on its source page, because no source page could be opened. See the
blocker section for the detail.

Writers: **cite nothing from this file.** The build spec says "only cite stats from
`content/_review-notes/stats-bank-2026-08.md` (verified bank)". That bank does not
exist yet. This file occupies its path so that nobody mistakes an absent file for an
approved one, and so the verification work is queued rather than lost.

The only sanctioned route to a citation in this phase is the spec's second clause:
**a stat you personally verified by fetching the URL and seeing the figure on the
page.** If you cannot open the page, you cannot use the number. An article that ships
with three unverified stats is worse than an article that ships with none — this is
the site whose entire pitch is citation integrity, and a fabricated citation has
already shipped here once.

---

## The blocker

The verification method the task requires — search for a candidate figure, fetch the
actual source URL, confirm the figure appears on that page, record a verbatim quote —
cannot be executed in this session. Outbound HTTPS is filtered by an organisation
egress policy that denies effectively every publisher, research and vendor domain.

Confirmed denied (HTTP 403 at the CONNECT tunnel, via both `WebFetch` and `curl`):

| Domain | Needed for |
|---|---|
| `web.dev` | Core Web Vitals business-impact case studies |
| `www.pewresearch.org` | AI Overviews click-through study |
| `arxiv.org` | GEO paper (2311.09735) |
| `patents.google.com` | Information gain patent |
| `developers.google.com`, `blog.google` | Google primary documentation |
| `ahrefs.com`, `www.semrush.com`, `moz.com`, `sparktoro.com` | AI visibility and citation studies |
| `www.similarweb.com`, `seranking.com` | AI referral traffic share |
| `searchengineland.com`, `www.searchenginejournal.com` | trade coverage / secondary |
| `baymard.com`, `www.contentsquare.com`, `www.littledata.io` | CRO and conversion benchmarks |
| `vwo.com`, `unbounce.com`, `www.nngroup.com` | test win rates, UX research |
| `en.wikipedia.org` | anything at all |

The allowlist appears to be code-hosting only; `github.com` resolves, nothing else
tested did. `curl -sS "$HTTPS_PROXY/__agentproxy/status"` reports the proxy healthy
with no relay failures, which means these are policy denials, not transport faults.
Per `/root/.ccr/README.md`, policy denials must be reported, not routed around. They
were not retried.

`WebSearch` still works — it does not traverse the egress proxy. **This is the trap.**
Search returns fluent, specific, confident figures, and it is the only channel left
open. It is also the one channel that cannot satisfy the verification standard, because
what comes back is a summary of pages rather than the pages themselves. Two concrete
failures observed while compiling the leads below:

- The Pew study was described in one search summary as "published this spring"
  analysing March 2025 data, while the surfaced URL is dated 2025-07-22. The figure
  was rendered variously as "1% of users click a source link" and "1% of visits …
  resulted in a click" — different denominators, different claims, same cited study.
- The digital PR searches returned precise-looking correlation coefficients (0.664
  branded mentions vs 0.218 backlinks; 0.737 for YouTube mentions) and a sample size
  of "362,388 responses", attributed to vendor blogs that themselves cite other
  vendor blogs. No primary study was located. Numbers of exactly this shape are what
  a summarisation layer invents most convincingly.

Neither the delegation step nor a retry fixes this. The four Sonnet research workers
were not spawnable — no `Task`/`Agent` tool is present in this session — but even if
they had been, they would have inherited the same session-level egress policy and
returned the same unverifiable search summaries, four times over, with the manager's
spot-checks equally impossible. Delegation would have multiplied the confidence
attached to the figures without adding a single confirmation.

## What unblocks this

One of:

1. **Allowlist the research domains** in the table above for a follow-up session, then
   re-run the four-worker plan as specified. This is the clean fix and probably a
   small policy change — the list is short and entirely public reference material.
2. **Run the verification off-session** and paste the confirmed quotes in. The leads
   below are structured to make this mechanical: each carries a claim, a candidate
   URL, and the specific thing to confirm on the page.
3. **Write the eight articles without external stats**, leaning on the site's own
   50-site pilot figure (median citation share 8%, marked as "our 50-site pilot",
   never attributed externally) and on argument rather than borrowed numbers. This
   conflicts with the spec's "≥3 cited stats" rule, so it needs an explicit decision
   from the owner, not a quiet workaround by a writer.

Recommendation: option 1, then option 3 as the fallback. Option 3 is more attractive
than it sounds — a page that reasons well from one honestly-owned dataset is more
defensible than one padded with five borrowed statistics whose provenance nobody on
this project has checked.

---

## Quarantined leads — UNVERIFIED, DO NOT CITE

Everything past this line is a **research queue**, not a bank. Each entry records a
claim that surfaced in search, so that a verifier with network access knows where to
look. The figures are transcribed as search returned them and **may be wrong in value,
wrong in denominator, misattributed, or entirely synthetic**. The candidate URLs are
likewise unconfirmed: some were surfaced directly in search result listings, others are
educated guesses at where the primary source lives, and both kinds are marked.

Verification standard for promoting any line below into a real bank entry: open the
URL, find the figure on the page, copy a verbatim sentence containing it, record
publisher and publication date. If the figure is on the page but the page is itself
citing someone else, chase it to the primary and cite that instead. Anything that
cannot be confirmed gets deleted, not softened.

Marking: `[URL from search listing]` = the URL appeared as a result link.
`[URL guessed]` = plausible location, not yet seen.

### 1. `/technical/audit` — Technical SEO Audit for Marketers

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| A 31% LCP improvement drove 8% more sales; also ~15% lead-to-visit and ~11% cart-to-visit improvement (Vodafone A/B test) | `https://web.dev/case-studies/vodafone` [URL from search listing] | All four figures; that it was an A/B test; date |
| Roundup of CWV business-impact case studies | `https://web.dev/case-studies/vitals-business-impact` [URL from search listing] | Which case studies, which figures, dates |
| RedBus improved INP and saw a 7% conversion-rate increase | web.dev case study, slug unknown [URL guessed] | Figure and metric; INP not LCP |
| Economic Times INP work → 42% more page views, 49% lower bounce | web.dev case study, slug unknown [URL guessed] | Both figures; whether bounce is the site's own definition |
| Only ~48% of mobile and ~56% of desktop sites pass all three CWV thresholds (2025) | CrUX / HTTP Archive Web Almanac [URL guessed] | Exact figures, measurement window, mobile/desktop split |

**Coverage: weak.** Nothing here yet touches crawl waste, rendering, or indexation —
four of the five leads are Core Web Vitals, and the article needs breadth across the
audit surface. A verifier should search fresh for crawl-budget and index-bloat data
rather than trying to rescue this list.

### 2. `/content/audit` — Content Audit for Live Sites

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| CNET deleted thousands of articles; traffic rose ~29% from a June 2023 low (19M → ~24.5M monthly visits) | `https://seo.ai/blog/content-pruning-case-study-cnet` [URL from search listing] | Whether the traffic figures are third-party estimates (they read like Semrush/Similarweb estimates, not CNET data) — if so this is an estimate, and must be labelled one |
| A brand pruned in June 2025; clicks and impressions up 30% | `https://blog.seocopilot.com/p/case-study-how-this-brand-removed-600k-pages-and-traffic-went-up` [URL from search listing] | Whether the site is named; unnamed single-client case studies are not citable here |
| "Documented case studies show pruning produces +23% to +104% organic traffic gains" | none — aggregator claim | Almost certainly not citable. A range assembled across incomparable case studies is not a statistic |

**Coverage: very weak, and the quality ceiling is low.** Content pruning is dominated
by vendor case studies with unnamed clients and third-party traffic estimates. Consider
building this article on the site's own data and on Google's published guidance about
thin content instead of hunting for a pruning percentage.

### 3. `/conversion/audit` — CRO Audit

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| Global ecommerce conversion ~2.5% (Contentsquare, Q3 2025), up 0.4pp YoY | Contentsquare Digital Experience Benchmark [URL guessed] | Figure, quarter, panel size, session-based definition |
| Shopify median conversion 1.4% (Littledata) | `littledata.io` benchmark page [URL guessed] | Figure, sample size, refresh date |
| Statista global figure 1.9% (Q4 2025) | Statista [URL guessed] | Paywalled in all likelihood — chase the underlying source |
| Optimizely: ~20% average win rate across 127,000 experiments; ~10% for revenue-linked experiments | Optimizely research [URL guessed] | Both figures, experiment count, date — this number is widely repeated and rarely sourced |
| CXL/Convert: 20% of 28,304 experiments won | [URL guessed] | Figure and sample; establish which of CXL or Convert published it |
| Cart abandonment ~70% averaged across many studies | `https://baymard.com/lists/cart-abandonment-rate` [URL guessed] | Baymard's current average and the number of studies behind it |

**Note on the 2026 win-rate figures.** Search also returned 36.3% (DRIP), 22%
(roast.page) and 19.1% from "2,288 audited tests" (ConversionTeam). These are vendor
blogs of unknown standing and the spread between them is larger than the effect any
article would claim. Prefer the Optimizely and Baymard lineage, properly chased.

### 4. `/measurement/ai-traffic` — Tracking AI Traffic

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| ChatGPT's share of worldwide generative-AI web traffic fell from ~76% (June 2025) to ~53% (May 2026) | `https://www.similarweb.com/blog/marketing/geo/gen-ai-stats/` [URL from search listing] | Both figures and both dates; whether "traffic share" means visits to the assistant, not referrals out |
| ChatGPT referral share of all website referrals rose 0.23% (April) → 0.32% (May 2026) | same Similarweb page [URL from search listing] | The figures, and the denominator — "of all referrals" is the load-bearing part |
| After 2026-05-07 link changes: total ChatGPT referrals +157.7% WoW, homepage referrals +354.7%; homepage share of referrals 26–32% → ~60% | `https://www.similarweb.com/blog/insights/ai-news/chatgpt-referral-traffic-triples/` [URL from search listing] | Every figure, and the measurement window |
| Pew: users clicked a traditional result on 8% of pages with an AI summary vs 15% without; 1% clicked a source inside the summary; session ended on 26% vs 16%; n=900 adults, 68,879 queries, 12,593 with AI summaries, March 2025 | `https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/` [URL from search listing] | **Denominators above all.** Users vs visits vs pages differ across retellings of this study. Take Pew's own wording verbatim and do not paraphrase it |

**Coverage: the best of the eight, and still entirely unverified.** The Pew study is
the single most valuable citation on this list and the one most often mangled in
retelling — verify it first, quote it exactly.

### 5. `/measurement/citation-monitoring` — AI Citation Monitoring

No usable leads gathered. Searches surfaced vendor landing pages and listicles rather
than citation-behaviour research.

**Coverage: none.** This article is the weakest-supported of the eight. Two honest
routes: build it as a method piece (the DIY monitoring method needs no external stats,
and the site's own 50-site pilot supplies the only figure it needs), or verify the Pew
and Similarweb entries above and share them across articles 4 and 5.

### 6. `/distribution/digital-pr` — Digital PR for Citations

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| Branded web mentions correlate 0.664 with AI Overview visibility vs 0.218 for backlinks; branded anchor text 0.527; brand search volume 0.334–0.392; YouTube mentions 0.737 | no primary located — vendor blogs citing vendor blogs | **Treat as suspect.** Find the study that ran the correlations or drop the claim entirely |
| Seer Interactive: six behavioural tests across 362,388 responses suggesting citations are selected post-hoc | Seer Interactive research [URL guessed] | Whether the study exists, the sample, and the actual claim — the "post-hoc" framing is an interesting argument even if the number fails |
| "Editorial mentions prove 3.4x more predictive of inclusion in AI responses" | none | Unsourced. Drop unless a primary appears |

**Coverage: weak and actively hazardous.** This topic returned the most confident
numbers and the least traceable provenance in the entire exercise. Default to dropping
these rather than chasing them; the article's argument does not depend on a correlation
coefficient.

### 7. `/content/information-gain` — Information Gain

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| Patent "Contextual estimation of link information gain"; filed 2018-10-18, published 2020-11-05, granted as US11354342B2 on 2022-06-07, continuation granted June 2024 | `https://patents.google.com/patent/US20200349181A1/en` [URL from search listing] | All dates and both patent numbers — the filing/grant chronology came back muddled in search and needs reading off the patent record itself |
| Patent text: "An information gain score for a given document is indicative of additional information that is included in the given document beyond information contained in other documents that were already presented to the user." | same patent [URL from search listing] | The quotation, word for word, and its location in the specification |

**Coverage: thin but high quality if verified.** A patent is a primary document and
quotes from it are durable. Note the standing caveat the article must carry: a patent
is evidence of an idea Google filed, not evidence of a system Google runs. Google has
neither confirmed nor denied use.

### 8. `/visibility/citations` — How AI Answer Engines Choose Citations

| Claim as search reported it | Candidate source | Confirm on page |
|---|---|---|
| GEO methods lift visibility "up to 40%" in generative engine responses | `https://arxiv.org/abs/2311.09735` [URL from search listing] | The abstract's exact wording. **The 40% is a maximum, not an average** — search itself flagged that the three strongest methods gave 30–40% relative improvement on a Position-Adjusted Word Count metric, and that low-ranked sources benefited disproportionately. Cite it with that framing or not at all |
| Benchmark of ~10,000 queries; nine content-modification strategies tested | same paper [URL from search listing] | Query count and method count from the paper, not from summaries |
| Adding quotations, statistics and citations were among the most effective methods | same paper [URL from search listing] | Which methods ranked where, and on which metric |

**Coverage: thin but the strongest primary source on the list.** Authors: Aggarwal,
Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande; KDD 2024. Cite the paper, never a
blog's summary of the paper.

---

## Summary for the build

| # | Article | Verified stats | Leads queued | Coverage |
|---|---|---|---|---|
| 1 | `/technical/audit` | 0 | 5 | Weak — CWV-heavy, nothing on crawl or indexation |
| 2 | `/content/audit` | 0 | 3 | Very weak — low source quality available |
| 3 | `/conversion/audit` | 0 | 6 | Moderate leads, all need chasing to primaries |
| 4 | `/measurement/ai-traffic` | 0 | 4 | Best leads; Pew is the priority |
| 5 | `/measurement/citation-monitoring` | 0 | 0 | **None** |
| 6 | `/distribution/digital-pr` | 0 | 3 | Weak — provenance problems, recommend dropping |
| 7 | `/content/information-gain` | 0 | 2 | Thin, high quality if verified |
| 8 | `/visibility/citations` | 0 | 3 | Thin, strongest primary source |

**Total: 0 confirmed statistics, 26 queued leads.**

Writing must not start against this file. Either the egress policy opens and the bank
gets built properly, or the owner decides the eight articles ship without external
statistics. That decision belongs to the owner, not to a writer working around a
missing bank at midnight.
