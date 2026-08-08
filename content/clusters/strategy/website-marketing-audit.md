---
title: "Website Marketing Audit: The 90-Minute Framework"
description: "Audit an existing website in 90 minutes: five timed blocks, six baseline metrics, and a revenue-weighted fix list. Free checklist. No 200-point slog."
slug: /strategy/audit
section: "Website Marketing Strategy"
cluster: strategy
datePublished: 2026-07-23
dateModified: 2026-07-23
author: sunny
sources:
  - label: "Semrush — How to do a website audit (Site Audit runs 140+ automated checks)"
    url: "https://www.semrush.com/blog/website-audit/"
faqs:
  - q: "Can you really audit a website in 90 minutes?"
    a: "Yes. An audit's job is an ordered fix list, not exhaustive coverage. Ninety minutes is enough to baseline your six numbers, check AI visibility, spot index bloat, and eyeball your five money pages. A two-week engagement produces a longer document, not a better decision about what to fix first."
  - q: "How often should I run a website marketing audit?"
    a: "Quarterly. Run the full 90-minute pass every three months so your baseline stays honest and you catch new leaks early. If you're actively fixing things, re-run Blocks 1 and 2 monthly — organic clicks and citation share are the two numbers that move fastest and tell you whether the work landed."
  - q: "What tools do I need for a website audit?"
    a: "Three: Google Search Console, GA4 (or your analytics), and a browser. Plus the free checklist Sheet to record it in. Total cost: £0. You do not need a crawler, a backlink tool, or keyword research to produce an ordered fix list in 90 minutes. Those come later, if a finding earns them."
  - q: "How is this different from a technical SEO audit?"
    a: "Scope. A technical SEO audit goes deep on crawlability, rendering, and indexation — one discipline. This audit is a fast triage across visibility, content, technical health, and conversion, ending in a ranked fix list. It tells you whether you even need the deep technical dive. See the technical SEO audit for that layer."
  - q: "Do I need to check backlinks?"
    a: "No, not in the 90 minutes. Backlinks and brand mentions matter, but a link profile pull needs a paid tool and doesn't change your top-ten fix list this quarter. When off-site mentions become the bottleneck, that's a distribution job, not an audit line item. Handle it separately with digital PR."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + HowTo + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
  - HowTo: the five timed Blocks map to HowTo steps. name per step = block title; each step totalTime as ISO-8601 duration (PT15M, PT30M, PT15M, PT20M, PT10M); HowTo.totalTime = PT1H30M. supply/tool = GSC, GA4, browser, the checklist Sheet.
  - FAQPage: generated from front-matter faqs[] (5 pairs). Do not double-mark the visible FAQ section separately.
- Visible dateModified on page (author line). Refresh diary: January 2027, 15%+ substantive change.

INFRA / ASSETS
- Checklist asset is a Google Sheet, copy-to-own (File > Make a copy), UNGATED. Wire the CTA links below to a stable
  internal redirect (e.g. /audit-checklist/ -> 302 -> docs.google.com/spreadsheets/.../copy). Do NOT hard-link the raw
  Google URL in body copy so we can rotate the Sheet without editing the page. Email capture is a soft secondary CTA
  beside the download, never a wall — this asset is built to be cited, not to gate.
  Sheet tabs: (1) Six Metrics baseline, (2) 20-Prompt Log w/ per-engine citation-share auto-calc, (3) Money Pages 5x5
  grid, (4) Fix List with Impact/Effort dropdowns + auto-sorted Priority column. One example row per tab. No branding
  beyond a header — it should photocopy well.
  BUILD CHECK: tab 4 dropdowns must match the page rubric orientation — Effort 1 = Small, 3 = Large (Effort is the
  divisor in Priority = Impact / Effort).
- Timer graphic cut. The information is carried by the HTML table below the intro — never image-only.
- Verify GPTBot, ClaudeBot, PerplexityBot, Google-Extended access per bot policy. All content in initial HTML.

DATA CONSISTENCY (locked upstream — do not restate differently)
- 8% median citation share = the informal 50-site pilot. >=30% = the "good" threshold. Both owned by
  /research/citation-share-study/ and the pillar. Keep phrasing consistent with those pages on every refresh.

ROUTING FLAG for the team (not a content issue): the published pillar and this page both use /content/audit/ and
/conversion/audit/ as reader-facing paths. The stack ADR (/ops/stack-and-scaffold) maps the collections to
/content-ops/* and /cro/*. Reconcile the redirect map before launch so these links don't 404. This page matches the
pillar deliberately — cross-page link consistency wins until routing is settled.
-->

# Website Marketing Audit: The 90-Minute Framework and Checklist

**A website marketing audit is a timed review of an existing site's visibility, content, technical health and conversion that ends in an ordered fix list, not a score. You run it on a live site with traffic and history, using tools you already have, and you walk away with the top ten fixes, ranked by revenue impact.** That's the whole deliverable. Everything below is how to produce it before lunch.

You've probably been quoted £3–8k for a "full audit," or you've got a 200-row audit spreadsheet from 2024 that you never finished. Both problems have the same cause: the incumbents sell coverage, not decisions. Semrush's Site Audit runs [140+ automated checks](https://www.semrush.com/blog/website-audit/); agency templates run past 200 line items. Nobody finishes a 200-point checklist, and a finished one still isn't a to-do list — it's a pile of "notices" with no order and no price tags. **An audit that doesn't end in an ordered fix list is a report, not an audit.**

This one is timed, it's free, and it ends in a decision.

> **TL;DR — the five timed blocks (0:00 → 1:30)**
> 1. [Baseline the six numbers](#block-1--baseline-the-six-numbers-15-minutes) — 15 min
> 2. [The 20-prompt AI visibility audit](#block-2--the-20-prompt-ai-visibility-audit-30-minutes) — 30 min
> 3. [Index bloat check](#block-3--index-bloat-check-15-minutes) — 15 min
> 4. [The five money pages](#block-4--the-five-money-pages-20-minutes) — 20 min
> 5. [Score it: the revenue-weighted fix list](#block-5--score-it-the-revenue-weighted-fix-list-10-minutes) — 10 min

---

## What You Need Before the Clock Starts

Three things, and they're all free: Google Search Console access, GA4 access (or whatever analytics you run), and the checklist Sheet to record it in. Total tool spend for this audit is £0. Any audit that starts with a paid tool trial is a funnel, not a favour.

- [ ] **Google Search Console** — verified access to the property. This is where organic clicks and index counts live.
- [ ] **GA4 or your analytics** — with referral and conversion reporting turned on. Revenue too, if you sell online.
- [ ] **The 90-Minute Audit Sheet** — four tabs, formulas prefilled, one example row each. **Copy the free checklist**<!-- relink: /audit-checklist/ --> *(no email required; email capture is optional, sat next to the button)*.

And here's what you deliberately don't need, because it doesn't fit inside 90 minutes:

- **No crawler.** If a tool takes 40 minutes to crawl, it doesn't belong in a 90-minute audit. A crawl is a Block 3 finding's *next step*, not the audit itself.
- **No backlink tool.** Your link profile won't change your top-ten fix list this quarter. Skip it.
- **No keyword research.** You're auditing what a live site already does, not planning what it could rank for. Different job, different day.

Open Search Console in one tab, GA4 in another, the Sheet in a third — and start the clock.

---

## The 90-Minute Audit: Five Timed Blocks

The timer is the method. Time pressure forces triage, and triage *is* the audit — every minute you spend documenting a problem you already understand is a minute stolen from ranking the fixes. Here's the whole thing at a glance. Each block has a hard time box and one output; when the box closes, you move on with whatever you've got.

| Block | Minutes | Output |
|---|---|---|
| 1. Baseline the six numbers | 0:00–0:15 | Six metrics written down |
| 2. 20-prompt AI visibility audit | 0:15–0:45 | Citation share per engine |
| 3. Index bloat check | 0:45–1:00 | Indexed-vs-valuable gap |
| 4. Five money pages walkthrough | 1:00–1:20 | Conversion leak list |
| 5. Score and rank | 1:20–1:30 | The ordered fix list |

Ninety minutes produces an ordered fix list. Two-week audits produce PDFs. If you bust a block's time box, don't borrow from the next one — note what you didn't finish and keep moving. A rushed Block 5 is the one failure that ruins the whole exercise, because the ranking is the point.

---

## Block 1 — Baseline the Six Numbers (15 minutes)

Write down six numbers. Not twelve, not a 40-tab dashboard. Six. These are the same six the [website marketing playbook](/how-to-market-a-website/) baselines, on purpose — this page is where you actually go and fetch them.

| Metric | Where to find it | What good looks like |
|---|---|---|
| Organic clicks | Google Search Console → Performance report | Flat or growing over 90 days; not propped up by a single page |
| AI referrals | GA4 → referral traffic filtered for `chatgpt.com`, `perplexity.ai`, `gemini.google.com` | Present and rising month over month; most sites are near zero and don't know it |
| Citation share | Manual 20-prompt audit (Block 2) | Cited in ≥30% of relevant prompts across the three main engines |
| Conversion rate | GA4 / your analytics, by key template | Homepage, pricing, and top landing page each above your own trailing baseline |
| Indexed vs valuable pages | Search Console (Pages report) vs analytics | Most indexed pages earn traffic; a big gap means bloat |
| Revenue per visit | Revenue ÷ sessions | Trending up. This is the number that survives a CFO. |

Two named thresholds to write on the wall: **citation share of ≥30% is good; 8% is the median** we found across our 50-site pilot audit (full method: **The Citation-Share Study**<!-- relink: /research/citation-share-study/ -->). And **revenue per visit is the number that survives a CFO** — if you record only one, record that one.

The 60-second retrieval for each, so you don't lose the block hunting through menus:

1. **Organic clicks** — GSC → Performance → Search results. Set the date range to last 3 months, filter to Search type "Web." Read the total Clicks. Note whether one page is carrying the total.
2. **AI referrals** — GA4 → Reports → Acquisition → Traffic acquisition. Add a filter or search for `chatgpt.com`, then `perplexity.ai`, then `gemini.google.com`. Sum the sessions. This is your floor, not your total — dark AI traffic arrives with no referrer. For the ceiling, see **[Tracking AI Traffic](/measurement/ai-traffic/)**.
3. **Citation share** — leave blank for now; Block 2 fills it in.
4. **Conversion rate** — GA4 → Engagement or Monetisation, segmented by landing page or page path. Grab the rate for homepage, pricing, and your top landing page.
5. **Indexed vs valuable pages** — GSC → Indexing → Pages. Read the "indexed" count. Hold it; Block 3 does the maths.
6. **Revenue per visit** — total revenue ÷ total sessions for the last 90 days. One division. Done.

Six numbers in the Sheet's tab 1. When you're ready to watch citation share continuously instead of quarterly, that's a **[citation-monitoring](/measurement/citation-monitoring/)** job — not today's.

---

## Block 2 — The 20-Prompt AI Visibility Audit (30 minutes)

This is the biggest block because it's the one nobody else does, and it's the one that surprises owners most. You're going to find out how often the AI answer engines actually name and cite you. Four steps.

1. **Write 20 buyer-language prompts.** Not keywords — the actual questions a buyer types into ChatGPT. Mix them by intent (template below). Buyer language, real problems, no brand names in the prompt itself.
2. **Run all 20 through ChatGPT, Perplexity, and Gemini.** Use fresh chats every time so your own history doesn't skew the answer. That's 60 answers in 30 minutes, so set up for pace: prompts pre-written in the Sheet, one browser window per engine, paste–read–tick, next. Yes, it's brisk. That's why it's time-boxed.
3. **Log three things per answer:** Are you mentioned? Are you cited with a link? If not you, who got cited instead? The "who instead" column is the competitive intel most people skip and later wish they hadn't.
4. **Compute citation share per engine** — the count of answers that cited you, divided by relevant answers, one figure per engine. Tab 2 of the Sheet auto-calculates this once you tick the boxes.

For step 1, don't stare at a blank page. Use this intent mix — it's prefilled as a starter set in the checklist Sheet, and you swap in your own topic:

| Intent | Prompts | Example shape |
|---|---|---|
| "best X" | 6 | "best [tool/service] for [buyer's job]" |
| "how do I" | 6 | "how do I [solve the problem your product solves]" |
| "X vs Y" | 4 | "[your category] vs [the alternative buyers weigh]" |
| "is X worth it" | 4 | "is [approach/category] worth it for [buyer type]" |

Now the number that reframes the whole exercise. Across our 50-site pilot audit, the median site's citation share before any GEO work was **8%**. Eight per cent. When we asked owners to guess first, they split two ways: some assumed zero, some assumed they were "everywhere." Both were wrong, which is the entire argument for measuring instead of guessing. Whatever you guessed a minute ago is probably wrong too — that's fine, that's what the block is for.

### Q&A: Do I need a citation-tracking tool for this?

**No.** Manual quarterly beats automated never. A £99/month tool that you set up in three months' time tracks nothing today; twenty prompts and a fresh browser tab track everything you need for a baseline right now. Run it by hand this quarter. When the manual pass becomes the bottleneck — more topics than one sitting can cover, or you want weekly deltas — that's when you **[automate citation monitoring](/measurement/citation-monitoring/)**, not before. For the how-to-get-cited playbook once you know your number, see [GEO for established websites](/visibility/geo/) (and the definitions for [GEO](/glossary/geo/) and [AEO](/glossary/aeo/) if you want them).

Citation share into tab 1. Move on — the clock says 0:45.

---

## Block 3 — Index Bloat Check (15 minutes)

Index bloat is the gap between how many pages Google has indexed and how many of them actually earn a click. It's the cheapest big finding in the audit, and it takes three steps.

1. **Count indexed pages.** GSC → Indexing → Pages → the "indexed" number. Write it down.
2. **Count pages with at least one organic click in 90 days.** GSC → Performance → Pages tab, last 3 months. Count the rows with clicks greater than zero. (Export to the Sheet if the list is long — tab 3 has a slot.)
3. **Divide.** Clicked pages ÷ indexed pages. That percentage is your bloat signal.

The named threshold: **if under 50% of your indexed pages earned a click in 90 days, content operations is your first quarter** — pruning and consolidating before you publish another word. A worked example with real-shaped numbers:

> 1,240 indexed pages. 310 of them earned at least one organic click in 90 days. That's 25%. Verdict: prune. Three-quarters of what Google crawls on this site is dead weight, diluting authority and burning crawl budget on pages no human visits.

I once deleted 400 pages from a site and watched traffic go up; index bloat is usually why that works. Fewer, stronger pages beat a big pile of thin ones, for Google and for LLM retrievers both. Start the cleanup with a **[content audit](/content/audit/)** — that's the deep version of this block. One caveat before you reach for the delete key: if pages aren't indexed *at all*, that's a different problem for a different page — a crawl or rendering fault belongs in the **[technical SEO audit](/technical/audit/)**, not the prune pile.

Bloat percentage into the Sheet. Clock says 1:00. Halfway isn't the word — you're two-thirds done and the fastest wins are still ahead.

---

## Block 4 — The Five Money Pages (20 minutes)

Five pages leak most of the money on almost every site: homepage, pricing, your top landing page, your top form, and checkout or signup. Four minutes each, on your phone, against a five-question checklist. You're not grading craftsmanship. You're hunting leaks.

Load each page on your phone and answer yes or no. Every "no" is a candidate fix for Block 5.

| Question (per page) | Homepage | Pricing | Top landing page | Top form | Checkout / signup |
|---|---|---|---|---|---|
| Clear offer in 5 seconds? | ☐ | ☐ | ☐ | ☐ | ☐ |
| One primary CTA (not five)? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Loads under 3s on your phone? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Form fields ≤ what you actually need? | ☐ | ☐ | ☐ | ☐ | ☐ |
| Social proof above the fold? | ☐ | ☐ | ☐ | ☐ | ☐ |

Now the rule that keeps this block honest: **Speed scores are a hobby. Revenue-weighted fixes are a job.** A Lighthouse number is not a finding. "Checkout loads in 6 seconds on 4G and we lose people at the payment step" is a finding, because it has a page and a pound value attached. Log leaks, not scores.

### Q&A: Should I run Lighthouse during the audit?

**No.** Load each page on your phone instead — that's the test your buyers actually run. Lighthouse gives you a lab score in ideal conditions; your buyer is on a train with two bars and one thumb. If a page feels slow on your phone, that's the leak, and it goes on the list with a revenue guess next to it. The deep, instrumented version of this block lives in the **[CRO audit](/conversion/audit/)**. Today you're just finding the leaks worth fixing.

Every "no" from the grid becomes a row in the fix list. Ten minutes left.

---

## Block 5 — Score It: The Revenue-Weighted Fix List (10 minutes)

This is the block that turns four blocks of notes into a decision. Every finding from Blocks 1–4 gets two scores, one to three each: **Revenue impact** and **Effort**. Then:

> **Priority = Revenue impact ÷ Effort.** Sort descending. Take the top ten. Delete the rest of the list — genuinely delete it, don't "park it for later."

Tab 4 of the Sheet does the division and the sort for you; you just set two dropdowns per row. Score against the rubric below, not against how much the fix annoys you. Impact scores up with the money touched; Effort scores up with the size of the job — Effort is the divisor, so cheap fixes float to the top and expensive ones sink unless the money justifies them.

| Score | Revenue impact | Effort |
|---|---|---|
| **3** | Touches money directly: checkout, pricing, top landing page, a leak on high-intent traffic | Large: a migration, a redesign, a dev sprint |
| **2** | Touches money indirectly: homepage clarity, citation share on buying-intent prompts | Medium: a page rebuild, a content consolidation, a template change |
| **1** | Hygiene: nice to fix, no clear revenue line | Small: a copy change, a setting, deleting pages, a form field removed |

A worked example, straight out of the Sheet:

| Finding | Impact | Effort | Priority |
|---|---|---|---|
| Checkout loses users at payment step (Block 4) | 3 | 1 | 3.0 |
| 75% index bloat — prune dead pages (Block 3) | 2 | 1 | 2.0 |
| Pricing page has three competing CTAs (Block 4) | 3 | 2 | 1.5 |
| 8% citation share — publish original-data page (Block 2) | 3 | 3 | 1.0 |
| Homepage offer unclear in 5 seconds (Block 4) | 2 | 2 | 1.0 |
| AI referrals near zero — GEO groundwork (Block 2) | 2 | 3 | 0.67 |

Read top to bottom: that's your quarter. **Ten ordered fixes done beats 200 checkpoints acknowledged.** That's the whole argument against the incumbent format, and it's the reason this audit ends where theirs begin. A 200-row spreadsheet tells you everything that's wrong; a ranked top-ten tells you what to do on Monday.

Your fix list feeds the next two pages directly: sequence it across quarters with the [website marketing plan template](/strategy/plan-template/), and cost the fixes with the [website marketing budget](/strategy/budget/) ratios.

---

## What the 90-Minute Audit Deliberately Skips

This is triage, not surgery. Triage's job is to tell you which surgery to book — and to be finishable, which the 200-point checklists never are. Five things it skips on purpose, each with the one condition that earns it a deeper look later:

- **Full site crawl.** Skipped because it takes longer than the whole audit. Earns a look when Block 3 shows heavy bloat and you need the page-by-page list to prune from — that's a **[content audit](/content/audit/)**.
- **Backlink profile.** Skipped because it needs a paid tool and won't reorder your top ten this quarter. Earns a look when brand mentions are the thing holding your citation share down — a **[digital PR](/distribution/digital-pr/)** job, not an audit line.
- **Keyword research.** Skipped because you're auditing what a live site *does*, not planning what it could rank for. Earns a look when the fix list is done and you're choosing what to build next.
- **Competitor teardown.** Skipped because "who got cited instead" in Block 2 already gives you the only competitive signal you can act on this week. Earns a look when you're setting strategy, not fixing leaks.
- **Log-file analysis.** Skipped because it's a deep technical dive with a specialist's setup cost. Earns a look when you suspect crawl-budget waste that GSC's reports can't confirm — a **[technical SEO audit](/technical/audit/)** escalation.

If you're deciding where all of this sits in the bigger sequence — search, generative visibility, or conversion first — that's the [SEO vs GEO vs CRO](/strategy/seo-vs-geo-vs-cro/) question. The audit tells you which one your site is bleeding from. That's its whole job, and it's enough.

---

## FAQ

### Can you really audit a website in 90 minutes?

**Yes**, because an audit's job is an ordered fix list, not exhaustive coverage. Ninety minutes is enough to baseline your six numbers, check AI visibility, spot index bloat, and eyeball your five money pages. A two-week engagement produces a longer document, not a better decision about what to fix first.

### How often should I run a website marketing audit?

Quarterly. Run the full 90-minute pass every three months so your baseline stays honest and you catch new leaks early. If you're actively fixing things, re-run Blocks 1 and 2 monthly — organic clicks and citation share are the two numbers that move fastest and tell you whether the work landed.

### What tools do I need for a website audit?

Three: Google Search Console, GA4 (or your analytics), and a browser. Plus the free checklist Sheet to record it in. Total cost: £0. You do not need a crawler, a backlink tool, or keyword research to produce an ordered fix list in 90 minutes. Those come later, if a finding earns them.

### How is this different from a technical SEO audit?

Scope. A **[technical SEO audit](/technical/audit/)** goes deep on crawlability, rendering, and indexation — one discipline. This audit is a fast triage across visibility, content, technical health, and conversion, ending in a ranked fix list. It tells you whether you even need the deep technical dive.

### Do I need to check backlinks?

**No**, not in the 90 minutes. Backlinks and brand mentions matter, but a link profile pull needs a paid tool and doesn't change your top-ten fix list this quarter. When off-site mentions become the bottleneck, that's a **[digital PR](/distribution/digital-pr/)** job, not an audit line item.

---

## Your Next 90 Minutes

Block 90 minutes tomorrow morning before standup, **copy the free checklist**<!-- relink: /audit-checklist/ -->, and run it. Five blocks, one timer, one ordered fix list at the end. You'll arrive at the "fix" step of the [website marketing playbook](/how-to-market-a-website/) with a top-ten in hand instead of a 200-row spreadsheet you'll never finish. That's the point. Start the clock.

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 23 July 2026.*