---
title: "Information Gain: Pages LLMs Can't Paraphrase Away"
description: "Information gain is the only durable AI-search moat. Three ways to manufacture it on an ordinary site, plus an audit to find where you have none."
slug: /content/information-gain
section: "Content Operations"
cluster: content-ops
datePublished: 2026-08-08
dateModified: 2026-08-08
author: sunny
sources:
  - label: "SparkToro 2024 — zero-click search study (~60% of US/EU Google searches end without a click)"
    url: "https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/"
faqs:
  - q: "What is information gain in plain English?"
    a: "It's the part of your page a model can't already generate from what it was trained on — a number nobody else has published, a stance you're willing to defend, or a first-hand result. If ChatGPT could write your paragraph without visiting your site, that paragraph has zero information gain and won't get you cited."
  - q: "Do I need a proper research study to have information gain?"
    a: "No. A single honest number from your own operations counts — conversion rate by page type, time-to-fix on a common issue, a before/after from one project. Our whole in-house proof point is a 50-site pilot, not a funded study. Small and yours beats large and borrowed."
  - q: "Is information gain the same thing as E-E-A-T?"
    a: "No, they overlap but answer different questions. E-E-A-T is evidence that you're a credible source — named author, real credentials, consistent entity data. Information gain is evidence your specific page adds something new. You can have E-E-A-T and still publish a paraphrasable page. See E-E-A-T for the credibility half of this."
  - q: "Does Google's information-gain patent prove AI search actually works this way?"
    a: "No. Google holds patent filings that describe scoring a document by how much it adds beyond what a system has already shown a user — but a patent application is evidence of an idea Google's engineers considered, not confirmation of a live ranking system. Google hasn't confirmed or denied using it. Treat it as a data point, not proof."
  - q: "How often should I run an information-gain audit?"
    a: "Alongside every quarterly content audit, not as a separate project. Tag pages while you're already deciding prune, merge, refresh or leave alone — a page failing the paraphrase test is a refresh candidate by definition. Running it standalone just duplicates work you're already doing elsewhere."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
- FAQPage generated from front-matter faqs[] (5 pairs). Do not double-mark the visible FAQ section separately.
- Visible dateModified on page. Refresh diary: January 2027, 15%+ substantive change — the 8% pilot figure is the
  first thing to re-check; if the Citation-Share Study wave-1 numbers land before then, refresh early.

CITATION POLICY (this batch)
- Only cite stats from the pre-verified bank (AMENDMENT 1) or in-house pilot data. SparkToro is the one external
  stat used on this page. The Google information-gain patent is mentioned qualitatively only — no patent number,
  no quoted claim text, per instruction. Do not "helpfully" add the patent number or quote back in on a later edit
  without re-verifying against the primary document first.
- stat wanted: a same-industry comparison of citation share before/after adding one original data point to a page
  — we only have the aggregate 50-site figure, not a matched-pair before/after. Would strengthen the audit section
  considerably. Flag for the Citation-Share Study wave 1.

ROUTING
- /content/audit/ and /visibility/citations/ ship in the same batch as this page (8-page phase). Links here assume
  they resolve; if that phase slips, these become relink markers until they do.
-->

# Information Gain: Pages LLMs Can't Paraphrase Away

**Information gain is the part of a page an LLM can't already generate from what it was trained on: original data, a defended position, or first-hand experience. It's what separates a page worth retrieving from a page worth paraphrasing, and in a world where fewer people click through at all, it's the difference between being cited and being invisible.** Everything below is how you build it into a site that sells services or products, not research papers.

Most content teams are optimising for a test nobody grades any more. They write competently, cover the topic, hit the word count — and produce something an LLM could reconstruct from three other pages it already knows. That page ranks fine and gets cited never, because there's nothing on it the model needs to fetch. It already has the paragraph.

If you just want the one-paragraph version of what information gain is, it's in the **[glossary](/glossary/information-gain/)**. This page is the rest of it: where the moats actually come from, and how to build them on a site that isn't a research lab.

## What Are the Three Moats a Model Can't Fake?

There are exactly three, and nothing else on this list works. Every information-gain tactic that's any good is a variant of one of these.

| Moat | What it is | What it isn't | Proof it's on the page |
|---|---|---|---|
| **Original data** | A number from your own operations, study or benchmark that exists nowhere else | A rounded-up industry stat you found on someone else's blog | A specific figure, a stated method, and a date |
| **Named position** | A stance stated plainly, with the reasoning shown | "It depends," or a survey of both sides with no conclusion | A sentence a competent competitor would actually disagree with |
| **First-person experience** | What happened when you did the thing — the specific outcome, good or bad | Generic best-practice advice dressed up in first person ("we believe…") | A dated, concrete result: what you did, what changed |

Notice what's not on the list: word count, keyword coverage, "comprehensive" structure, a bigger table of contents than the competition. None of that is information. It's packaging. A 4,000-word page that restates consensus has less information gain than a 400-word page with one number nobody else has.

The reason this matters more than it used to: retrieval, not ranking, is now the gate. A search engine ranks pages and lets the user judge. An answer engine picks a handful of sources, writes the answer itself, and only cites what it couldn't generate on its own. You're not competing to be first any more. You're competing to be necessary.

## How Do You Manufacture Original Data When You're Not a Research Lab?

You use data you already have, sized to what you can defend, not data you wish you had. Three sources, in order of how easy they are to start this month.

### What Counts as "Your Own Numbers"?

Anything from your own operations that nobody outside your company could publish, because nobody outside your company has it. Time-to-resolve on your ten most common support tickets. Conversion rate by traffic source on your own site. The percentage of client projects where a specific mistake showed up. None of these need a methodology section. They need one honest sentence: what you measured, over what period, on what sample. "Across our last 40 client onboardings, the average time from signed contract to first live page was 11 days" is information gain. "Faster onboarding leads to better outcomes" is filler a model already knows.

### How Small Can a Study Be and Still Count?

Smaller than you think. Our own headline figure — median citation share of 8% across a 50-site pilot — isn't a funded research project. It's 50 sites, 20 prompts each, three engines, logged by hand. The methodology is boring and repeatable, which is exactly why it works: nobody's contested it, and nobody else has run it, so it's ours by default. A study earns citations by being specific and checkable, not by being large. Ten of your own client sites, audited the same way, beats a "state of the industry" report stitched together from other people's numbers.

### What's a Structured Comparison, and Why Doesn't Your Competitor Have One?

Because assembling one is tedious, not because it's hard. A structured comparison is a table that puts things side by side that nobody's bothered to put side by side: your top five competitors' pricing tiers mapped against actual feature access, not marketing copy; the real turnaround time across the tools in your category, tested by you, not quoted from their homepages; a decision matrix for a choice your buyers make weekly ("in-house vs agency vs freelancer for X"). Nobody links to a wall of text making this case. People link to the table, because the table is the citable object — it's the thing a model can quote a row from without misrepresenting you.

The pattern across all three: you're not inventing data from nothing. You're formalising something you already do or already know, and refusing to leave it as an unmeasured opinion.

## Why Does Paraphrase-Proof Content Matter in a Zero-Click World?

Because the click was never the real prize — being the source of the answer is, and the answer is increasingly delivered without a visit at all. **SparkToro's analysis of clickstream data found that around 60% of Google searches in the US and EU ended without a click in 2024, with only 374 of every 1,000 US searches sending a visitor to the open web** ([SparkToro, 2024](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/)). Most of the traffic you used to earn by ranking is gone before it ever reaches your analytics.

That changes what "winning" a query even means. When the answer used to live on a results page you owned, being roughly as good as three competitors still got you a share of clicks. When the answer lives inside a generated paragraph with three citations, being roughly as good gets you nothing — the model doesn't cite "roughly as good," it cites whichever source it couldn't do without. Redundant coverage is now worth less than it's ever been, because redundancy is precisely what gets dropped when a model composes one answer from several sources. Distinctiveness isn't a nice differentiator any more. It's the entry ticket.

## How Do Answer Engines Treat Me-Too Content?

They read it, then they cite whoever said it first, best, or with a number attached — and leave the rest out of the answer entirely. This isn't a punishment. It's arithmetic. An engine composing an answer is choosing a small set of sources to represent a topic, and it has no reason to cite five pages that all say the same thing when one of them says it with more precision. The other four still exist, still rank, still get crawled. They just don't get quoted, which in an AI-search world is the only outcome that pays.

This is also why a single well-defended page beats a cluster of thin, overlapping ones. A query fans out into several sub-questions behind the scenes, and each sub-question gets its own retrieval pass — see **[query fan-out](/glossary/query-fan-out/)** for how that mechanic works. A page that answers one sub-question with a fact nobody else has gets picked for that slot, repeatedly. A page that vaguely covers six sub-questions with no distinct answer to any of them gets picked for none. The full mechanics of how engines weigh and select sources — recency, structure, and the credibility signals that sit alongside information gain — live in **[How AI Answer Engines Choose Citations (and How to Become One)](/visibility/citations/)**.

## How Do You Run an Information-Gain Audit on Your Own Inventory?

You run the paraphrase test against every page that matters, tag the failures, and fix the highest-value ones first — the same triage logic as any other content audit, aimed at one specific question instead of five. Three tests, applied per page:

| Test | Question to ask | Fail looks like | Pass looks like |
|---|---|---|---|
| **The paraphrase test** | Could a model write this paragraph from general knowledge alone, with no need to fetch the page? | Yes — same claims, same structure, nothing page-specific | No — it needs a fact that exists only here |
| **The disagreement test** | Would a competent competitor state this exact thing? | Yes, word for word, hedge for hedge | No — they'd soften it or argue the other side |
| **The "what happened" test** | Is there a dated, specific outcome, not a general claim? | "Results may vary" | "Traffic went up after we did X, in March" |

Run it as five steps against your existing page list:

1. **Pull your page inventory.** If you've already run a content audit, reuse that list rather than building a second one — the full inventory method, including how to sort pages into prune, merge, refresh or leave alone, lives in **[Content Audit for Live Sites: Prune, Merge, Refresh or Leave Alone](/content/audit/)**.
2. **Run the three tests against each page that gets meaningful traffic or matters strategically.** Skip pages already marked for pruning — there's no point adding a moat to a page you're about to delete.
3. **Tag every page that fails all three.** These are your paraphrase-risk pages: technically fine, cited by nobody.
4. **Sort the tagged pages by opportunity**, not alphabetically. A high-traffic page with zero moats outranks a low-traffic page with zero moats every time.
5. **Add one moat, not five.** One original number, one stated position, or one first-person line is enough to pass the paraphrase test. Don't over-engineer the fix — a page needs to clear the bar, not decorate it.

Do this alongside your existing content audit cadence rather than as a separate project — the inputs overlap almost completely, and running it twice wastes the one resource this exercise is supposed to save you: time. Once you've closed the gaps, watching whether citation share actually moves is a job for **[AI Citation Monitoring: Tools and a DIY Method](/measurement/citation-monitoring/)**, not a one-off audit. Expect a lag before you see it: citations tend to follow Google ranking gains by roughly one to two months in our own data, so a page fixed this month won't show up as a citation win next week.

## What Does This Look Like on a Real Site? Our 50-Site Pilot

It looks like the number we've been using through this whole page, because that number *is* the tactic, applied to us. Across a pilot of 50 established sites, run through a 20-prompt AI-visibility audit on ChatGPT, Perplexity and Gemini, the median citation share before any deliberate GEO work was 8%. We didn't borrow that figure from an industry report. We measured it, wrote down the method, and published it — which is exactly the move this whole page is arguing for. Nobody else has an 8% figure for the same 50-site cohort measured the same way, so anyone who wants to cite that specific number has to cite us. That's information gain doing its job, not as an abstract concept but as a line on a page.

The instinct to treat this as a special case — "well, you're a marketing site, of course you can produce a stat" — doesn't hold up. A plumbing company can publish average call-out response time by postcode. A recruitment agency can publish time-to-placement by role type. A SaaS product can publish churn by onboarding path. None of that needs a research department. It needs someone willing to look at data they already collect and write one honest sentence about it, then be willing to defend that sentence if someone disagrees. The full methodology behind our figure, including the prompt set and per-engine breakdown, is being written up as **The Citation-Share Study**<!-- relink: /research/citation-share-study/ --> — but you don't need to wait for that to run the same trick on your own numbers.

## Is Google's Information-Gain Patent Proof This Is Real?

No — it's a data point, not a confirmation, and it's worth being precise about the difference. Google holds patent filings that describe a scoring concept along these lines: a document's value can be measured, in part, by how much it adds beyond information a system has already surfaced to a user. That's a description of the idea, not a quote from the filing, and deliberately so — patent language is dense, contested, and easy to misquote, and a wrong quote is worse than no quote.

Here's the caveat that has to travel with it every time it's mentioned: a patent application is evidence that Google's engineers thought about the problem this way at some point. It is not evidence that a live ranking or retrieval system uses that exact scoring method today, and it's not evidence of how heavily any such signal is weighted if it does. Google has never confirmed or denied using it. Treat the patent as intellectual company for the argument, not as its foundation. The actual proof is simpler and doesn't need a patent number to hold up: pages that only restate the consensus don't get cited by any of the three engines we tested, patent or no patent. That's an observed pattern across our own pilot, not a legal filing.

## Where This Fits in the Bigger Sequence

Information gain is Step 3 of the **[website marketing playbook](/how-to-market-a-website/)** — you strengthen a site's content only after you've fixed what leaks, because publishing original data onto a site with a broken checkout is a waste of a good number. It's also one input into the wider **[GEO for established websites](/visibility/geo/)** playbook, sitting alongside entity clarity and chunk-level structure as one of the handful of things that actually move citation share, rather than the many things that don't.

## Your Next Move

You don't need a content calendar for this. You need to open your ten highest-value pages and run the paraphrase test against each one this afternoon. Most will fail. That's the finding, not a setback — it's the same story every site tells before it fixes anything. If you haven't baselined where you stand yet, start with the **[90-minute website marketing audit](/strategy/audit/)** — Block 2 measures your current citation share in 30 minutes, so you know whether you're starting from 8%, from zero, or from somewhere better than you assumed. Fix the gap page by page after that, one moat at a time.

## FAQ

### What is information gain in plain English?

It's the part of your page a model can't already generate from what it was trained on — a number nobody else has published, a stance you're willing to defend, or a first-hand result. If ChatGPT could write your paragraph without visiting your site, that paragraph has zero information gain and won't get you cited.

### Do I need a proper research study to have information gain?

**No.** A single honest number from your own operations counts — conversion rate by page type, time-to-fix on a common issue, a before/after from one project. Our whole in-house proof point is a 50-site pilot, not a funded study. Small and yours beats large and borrowed.

### Is information gain the same thing as E-E-A-T?

**No**, they overlap but answer different questions. **[E-E-A-T](/glossary/e-e-a-t/)** is evidence that you're a credible source — named author, real credentials, consistent entity data. Information gain is evidence your specific page adds something new. You can have E-E-A-T and still publish a paraphrasable page.

### Does Google's information-gain patent prove AI search actually works this way?

**No.** Google holds patent filings that describe scoring a document by how much it adds beyond what a system has already shown a user — but a patent application is evidence of an idea Google's engineers considered, not confirmation of a live ranking system. Google hasn't confirmed or denied using it. Treat it as a data point, not proof.

### How often should I run an information-gain audit?

Alongside every quarterly content audit, not as a separate project. Tag pages while you're already deciding prune, merge, refresh or leave alone — a page failing the paraphrase test is a refresh candidate by definition. Running it standalone just duplicates work you're already doing elsewhere.

---

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 8 August 2026.*
