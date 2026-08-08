---
title: "How AI Answer Engines Choose Citations"
description: "The five-step mechanism behind every AI citation — fan-out, retrieval, chunking, selection, composition — and the on-page fixes for each step."
slug: /visibility/citations
section: visibility
cluster: visibility
datePublished: 2026-08-08
dateModified: 2026-08-08
author: sunny
sources:
  - label: "Ahrefs 2025 — brand mentions across the web correlated more strongly with AI-answer appearance than almost any other factor"
    url: "https://ahrefs.com/blog/ai-overview-brand-correlation/"
  - label: "SparkToro 2024 — ~60% of US/EU Google searches end without a click; 374 of 1,000 US searches reach the open web"
    url: "https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/"
  - label: "Gartner 2024 — predicts traditional search engine volume drops 25% by 2026 as users shift to AI chatbots"
    url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents"
faqs:
  - q: "Do AI engines cite whole pages or just sections of them?"
    a: "Sections. Retrieval and selection both operate on chunks — a heading and the paragraph under it, roughly — not the page as a whole. A page can win several citations from several different chunks, or none at all if every section leans on the one above it. Write each section to survive being lifted out and quoted alone."
  - q: "Is retrieval the same thing as ranking in Google?"
    a: "No. Ranking sorts a whole results page against one query. Retrieval pulls a shortlist of chunks against several sub-queries the engine wrote itself, then a smaller model picks which chunks make the final answer. The two reward much of the same groundwork — crawlable, authoritative, well-structured pages — but a page can rank in Google and still never get retrieved."
  - q: "Does ChatGPT cite from training data or from live retrieval?"
    a: "Both, weighted differently by engine. Perplexity leans almost entirely on live retrieval, so a page can be cited within days of going up. ChatGPT leans more on what it learned in training, so a reputation built over time counts for more there, alongside live search when it runs. Either way, the page still has to be crawlable and quotable the moment retrieval actually happens."
  - q: "Do I need schema markup to get cited?"
    a: "No, not directly. Schema doesn't influence which chunk gets selected — clear, self-contained writing does that. What schema buys you is entity clarity: confirming who published the page and tying it to your other pages, which matters once you're already in the running. Add it for that reason, not as a citation shortcut."
  - q: "How long after fixing a page before citations show up?"
    a: "About one to two months behind whatever you did in Google, based on our data. Perplexity moves fastest because it's close to real-time retrieval; ChatGPT lags longest because it leans on trained knowledge that refreshes slowly. Fix retrieval and selection first and expect citations to follow your search gains, not lead them."
  - q: "Can an old page still get cited, or does freshness rule it out?"
    a: "Yes. Freshness is one selection factor among several, not a gate. An older page with a named data point, clear entity signals and a direct answer beats a brand-new page that only restates the consensus. Update the dateModified and refresh the numbers when they go stale — don't panic-republish a page that's still the best answer in the room."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
- FAQPage generated from front-matter faqs[] (6 pairs). Do not double-mark the visible FAQ section separately.
- Visible dateModified on page (author line). Refresh diary: check against wave-1 200-site study results (Sept 2026)
  — if per-engine selection weighting changes, update the mechanism table, not just the numbers.

DATA CONSISTENCY (locked upstream — do not restate differently)
- 8% median citation share = the 50-site pilot, owned by /research/citation-share-study/ and the GEO pillar.
  Single median, n=50 — never imply segmentation or per-factor weighting from this pilot; the pilot cannot support
  a "selection factors ranked by importance" claim, so this page describes the five selection factors as a set,
  not a ranked list.
- "Citations lag Google by ~1-2 months" — our data, same phrasing as the GEO pillar and seo-vs-geo-vs-cro. Keep
  attribution as "our data" every time, never presented as an external benchmark.
- This page is the mechanics layer the GEO pillar points to from its "How ChatGPT, Perplexity and Gemini Choose
  What to Cite" section (query fan-out -> retrieval -> selection -> composition). Keep the four/five-step framing
  consistent with that section — the pillar uses four numbered steps plus a fifth (compose); this page expands
  each into its own section without contradicting the pillar's step order.
- Factual guard inherited from the pillar: Google-Extended governs Gemini/Vertex grounding + training, not AI
  Overviews crawling (that's Googlebot, standard index). Repeated here in the retrieval section — do not soften it.

ROUTING FLAG (matches sibling pages): /technical/audit/, /content/audit/, /conversion/audit/,
/measurement/ai-traffic/, /measurement/citation-monitoring/, /distribution/digital-pr/, /content/information-gain/
are reader-facing paths shared across this launch batch. Reconcile against the stack ADR's collection mapping
before launch so none of these 404. Cross-page link consistency wins until routing settles.

VERIFY GPTBot, ClaudeBot, PerplexityBot, Google-Extended access per bot policy. All content in initial HTML.
-->

# How AI Answer Engines Choose Citations (and How to Become One)

**An AI answer engine picks its citations in five steps: it fans your prompt out into several sub-queries, retrieves candidate chunks for each one, breaks pages into chunks it can quote, selects the chunks that answer most cleanly, and composes them into one answer with sources attached. Nothing about it is a mystery panel. It's a retrieval pipeline, and every stage rewards something specific you can build for.**

Traditional search is losing ground to exactly this pipeline. Gartner predicts traditional search engine volume [drops 25% by 2026](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents) as users shift to AI chatbots and virtual agents. It's not starting from zero, either — SparkToro found roughly [60% of US and EU Google searches already end without a click](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/), with only 374 of every 1,000 US searches sending a visitor to the open web at all. The answer is increasingly composed for the user, not linked to them. If you don't understand the mechanism that decides who gets quoted in that composed answer, you can't influence it — you can only hope.

This page is the mechanics layer underneath [GEO for established websites](/visibility/geo/) — Step 3 of the [website marketing playbook](/how-to-market-a-website/) — and it's the checklist that maps each stage of the mechanism to something you actually do on the page this week.

> **TL;DR — the pipeline and the fix**
> 1. [Query fan-out](#what-is-query-fan-out-and-why-does-it-multiply-your-odds) — one prompt becomes several searches you never see.
> 2. [Retrieval](#how-does-retrieval-work-search-index-vs-training-data) — the engine fetches candidates from a live index, trained knowledge, or both.
> 3. [Chunking](#why-does-chunking-decide-what-gets-quoted) — pages get broken into quotable pieces before anything is judged.
> 4. [Selection](#what-makes-a-chunk-citable-five-selection-factors) — five factors decide which chunks make the cut.
> 5. [Composition](#how-does-the-engine-compose-the-final-answer) — the winning chunks get stitched into one answer, cited.
> 6. [The checklist](#how-do-you-become-a-citable-source-the-mechanism-mapped-checklist) — each stage, mapped to the fix that wins it.

---

## What Actually Happens Between a Prompt and a Citation?

**A prompt goes through five stages before it becomes a cited answer: fan-out, retrieval, chunking, selection, and composition. Every AI answer engine — ChatGPT, Perplexity, Gemini, Google's AI Overviews — runs a version of this same pipeline, whatever they call it internally.** Skip any stage and you're guessing at why a competitor keeps winning the answer you should own.

| Stage | What happens | What it rewards on your page |
|---|---|---|
| **1. Fan-out** | Your one prompt becomes several synthetic sub-queries | Coverage of the sub-questions, not just the headline term |
| **2. Retrieval** | The engine fetches candidate documents from a live index, trained knowledge, or both | Crawlability and content that's actually in the HTML |
| **3. Chunking** | Candidate pages get split into quotable sections before judging starts | Sections that make sense read alone |
| **4. Selection** | A ranking pass scores chunks and keeps the best few | Direct answers, named entities, numbers, freshness, reputation |
| **5. Composition** | The winning chunks get synthesised into one answer, with citations attached | Facts that agree with your own pages and your off-site mentions |

Read the middle column top to bottom and it's a single sentence: the engine writes its own questions, goes looking for documents, cuts them into pieces, judges the pieces, and writes an answer from the ones that pass. None of that is proprietary to one vendor. It's how retrieval-augmented systems work generally, and it's why the fix for weak citation share is never "add more keywords" — that's an SEO instinct built for stage zero of a pipeline that has five stages, and keywords barely touch any of them.

One structural point worth sitting with before the detail: Google's AI Overviews is not a separate AI product running its own crawler. It rides the standard Google index, fetched by the ordinary Googlebot. `Google-Extended` — the crawler that governs Gemini grounding and Google's model training — has no say over what appears in Overviews. If a vendor tells you blocking `Google-Extended` protects you from AI Overviews, they've got the wrong crawler. Standard SEO crawlability is what controls that surface, same as it always did.

---

## What Is Query Fan-Out, and Why Does It Multiply Your Odds?

**Query fan-out is the step where the engine rewrites your one prompt into several sub-queries and searches for each one independently, before it ever starts judging pages.** You type "how do I get my site cited by ChatGPT" and the engine, unseen, goes looking for answers to six or eight related questions: what [GEO](/glossary/geo/) is, which on-page factors matter, how citations get chosen, whether mentions count, how you'd measure your own citation share, and so on. Full definition and a worked example: [query fan-out](/glossary/query-fan-out/).

The number that matters isn't the count of sub-queries — it's what fan-out does to your odds. A page built as one long argument is a single lottery ticket: it either matches the fan-out or it doesn't. A page built as a set of self-contained, question-shaped sections is several tickets, because each section can independently answer a different sub-query the engine generated. That's not a metaphor — it's literally how the retrieval stage works. Six sub-queries, six separate retrieval calls, six separate chances for one of your sections to be the best match for one of them.

The practical consequence: stop optimising a page around one head-term keyword and start writing it around the cluster of questions a real buyer's prompt would fan out into. If you can't guess the fan-out, run the prompt yourself and read what the engine's own follow-up searches reveal — most engines that show their work will surface the sub-queries directly.

---

## How Does Retrieval Work: Search Index vs Training Data?

**Retrieval is the stage where the engine actually fetches candidate documents — either from a live search index, from what got baked into the model during training, or from both, blended.** These are two structurally different sources of information, and confusing them is the single most common mistake in how people talk about GEO.

**Trained knowledge** is what the model learned during pretraining, frozen at a cutoff date and baked into its weights. It's fast to draw on and it's how a model can answer without searching at all, but it can't reflect anything published after the cutoff, and it can't cite a live URL for something it merely "remembers." When an engine leans on trained knowledge, your best route in isn't a page fix at all — it's having been credible and widely discussed enough, for long enough, that the pattern got learned in the first place.

**Live retrieval** — the retrieval-augmented generation (RAG) half — is the engine running an actual search at the moment you ask, fetching real documents, and grounding its answer in what it just read. This is where a page you published last week can get cited this week, because nothing about it depends on a training run that already happened. It's also the only half of the pipeline a fresh page can influence immediately.

Every mainstream answer engine blends the two, just in different proportions:

| Engine | Retrieval source | What that means for you |
|---|---|---|
| **Perplexity** | Near-exclusively live retrieval on most queries | Fastest to reflect a fixed page; be crawlable, be quotable, changes show up quickly |
| **ChatGPT (search on)** | Live retrieval when it searches, trained knowledge otherwise | Worth earning both — reputation the model already learned, and a retrievable page for when it looks |
| **Gemini / AI Overviews** | Google's standard index, fetched via Googlebot | Ordinary SEO crawlability is most of the job here |

Two blockers stop retrieval before it starts, and they're worth naming precisely because they zero you out regardless of how good the content is. First, an AI crawler that's blocked at the CDN, firewall, or `robots.txt` never sees the page — full policy detail: **llms.txt, Bot Access and AI Crawlers**<!-- relink: /technical/llms-txt/ -->. Second, content that only renders after JavaScript executes doesn't exist to a retriever that fetches raw HTML and moves on — full detail: **JavaScript Rendering: What Google and LLM Crawlers Actually See**<!-- relink: /technical/js-rendering/ -->. Neither blocker is rare on an established site; both are worth checking before you touch a word of copy. The fuller walkthrough of fixing both, plus the five GEO-specific inputs that sit on top of retrieval, lives at **[GEO for established websites](/visibility/geo/)**.

---

## Why Does Chunking Decide What Gets Quoted?

**Chunking is where a candidate page gets split into smaller, independently retrievable pieces — usually a heading plus the paragraph beneath it — before the engine judges anything. It happens before selection, not after, which means the unit being judged was never the whole page. It's the piece.**

This single fact explains more GEO behaviour than anything else in the pipeline. A page can rank well as a whole document and still lose every citation, because none of its individual chunks stand alone. Picture a page that opens with three paragraphs of throat-clearing, then a section that starts "as mentioned above, the answer depends on…" — retrieved on its own, that chunk is nonsense. It refers to context it no longer has. The engine either discards it or, worse, quotes it and produces a broken-sounding answer, which it's built to avoid.

The fix is mechanical, not stylistic: read every section as if it's the only thing the engine will ever see, because functionally, it might be. Name the subject in the first sentence — "Citation share is…", not "This is…". Cut every backward reference to a point made three paragraphs up. Give the section its own short, direct answer before it elaborates. A page built from ten self-contained chunks has ten separate shots at a citation; a page built as one continuous argument has, at best, one.

This is also the exact mechanic behind [AEO](/glossary/aeo/) — answer engine optimisation is the formatting discipline that makes chunking work in your favour. It isn't a separate channel from what's described here; it's the page-level habit that this stage of the pipeline rewards.

---

## What Makes a Chunk Citable? Five Selection Factors

**Once chunks exist, a ranking pass scores them against the query and keeps the strongest handful. Five things consistently separate the chunks that get cited from the ones that don't: a direct answer, named entities, real numbers, freshness, and source reputation. No single factor guarantees a citation — together, they're what "citable" means in practice.**

| Factor | What it looks like on the page | Why it helps selection |
|---|---|---|
| **Direct answer** | The question is answered in the first sentence of the section, plainly | Matches the query shape the engine is scoring against — no inference required |
| **Named entities** | Specific people, companies, tools, and places, not vague references | Removes ambiguity; the engine can confirm what's actually being discussed |
| **Numbers** | A stated figure, not "significant" or "a lot" | Numbers are the easiest thing for an engine to lift and attribute cleanly |
| **Freshness** | A visible, accurate `dateModified`; content that reflects the current state of things | Signals the chunk isn't describing a world that no longer exists |
| **Source reputation** | The site and author are mentioned and trusted elsewhere on the web | Reputation earned off-page raises confidence in every chunk on the page |

The last row carries more weight than most people assume. Ahrefs found that [the number of times a brand is mentioned across the web correlated more strongly with its appearance in AI answers than almost any other factor](https://ahrefs.com/blog/ai-overview-brand-correlation/) it measured. Not backlinks specifically — mentions, with or without a link. That's a genuinely different currency from classic SEO's link-building instinct, and it's why off-site work belongs in this list at all: reputation isn't something the page itself can manufacture, no matter how well it's written. See **Brand Mentions vs Backlinks: Which Moves AI Visibility More**<!-- relink: /distribution/mentions-vs-backlinks/ --> for the deeper split between the two.

Direct answers and named entities are the cheapest of the five to fix, because they're pure writing discipline — say the thing plainly, name the thing specifically. Numbers and freshness need an actual fact to state, which is where original data and a maintained `dateModified` earn their keep. Reputation is the slow one; it compounds off-site, over months, and no amount of on-page editing substitutes for it.

Underneath all five sits a harder requirement: a chunk that only restates what every competitor already says has nothing distinctive to be selected *for*. The model can already generate the consensus itself — it doesn't need to cite you for it. The chunk needs a reason to exist that the model can't reproduce from memory. That reason is what **[information gain](/content/information-gain/)** is: original data, a stated position, first-hand experience — the sixth, load-bearing thing underneath the five factors in the table above.

---

## How Does the Engine Compose the Final Answer?

**Composition is the last stage: the engine takes the chunks that survived selection and writes one coherent answer from them, attaching a citation to each source it drew on. It favours chunks that agree with each other and avoids redundant ones, which means contradicting your own published facts is one of the few things that can cost you a citation after you've already won the retrieval race.**

Two behaviours matter here that people rarely think about because they happen after the part they can influence directly. First, composition tends to reward coverage across sources over one dominant source — if three sites say roughly the same thing, the engine may cite more than one of them rather than picking a single winner, which is good news: citation isn't zero-sum in the way a #1 ranking is. Second, composition penalises internal contradiction. If your pricing page says one figure and your FAQ page says another, and both get retrieved for the same answer, the engine has to reconcile them or drop one — and it's not obliged to drop the wrong one. Consistent facts across your own pages, and across the mentions of you elsewhere, make composition's job easy, which is exactly the condition under which you get quoted cleanly instead of paraphrased around.

This is also where entity clarity pays off a second time. An engine composing an answer from several sources needs to know which chunks belong to the same speaker — that all your pages, and the mentions of you elsewhere, describe one consistent entity rather than several unrelated ones. That's the retrieval-side argument for consistent naming, `sameAs` links, and Person schema on named authors: see [E-E-A-T](/glossary/e-e-a-t/) for the full evidence list.

---

## How Do You Become a Citable Source? The Mechanism-Mapped Checklist

**Map each of the five pipeline stages to one concrete fix, do the fixes in pipeline order, then measure. Fixing selection before retrieval is fixing a page nobody's going to see; fixing retrieval before chunking gets you seen and then discarded for being unquotable. Order matters because the stages run in order.**

| Stage | What it rewards | The fix, this week | Where to go deeper |
|---|---|---|---|
| **1. Fan-out** | Coverage of the sub-questions a buyer's prompt splits into | Write each section around one likely sub-query, headed as a question | [Query fan-out](/glossary/query-fan-out/) |
| **2. Retrieval** | A crawlable page with real content in the initial HTML | Confirm AI-bot access; render content server-side, not JS-only | [GEO for established websites](/visibility/geo/) · **[technical SEO audit](/technical/audit/)** |
| **3. Chunking** | Sections that make sense lifted out and quoted alone | Name the subject in sentence one; cut every "as mentioned above" | [AEO](/glossary/aeo/) |
| **4. Selection** | Direct answers, named entities, numbers, freshness, reputation | Add one original data point per key page; keep `dateModified` honest | [Information gain](/content/information-gain/) |
| **5. Composition** | Consistent facts across your pages and your off-site mentions | One brand name everywhere; reconcile any figure that disagrees with itself | [E-E-A-T](/glossary/e-e-a-t/) |
| **Off-page input** | Reputation the page itself can't manufacture | Pitch your original data to sources the models already read | **[Digital PR for citations](/distribution/digital-pr/)** |

Work the list top to bottom, not by whichever row feels most comfortable. A beautifully chunked, entity-clear page that's blocked at the CDN gets zero citations, because retrieval never happens. A perfectly crawlable page that restates the industry consensus gets zero citations too, because selection has nothing distinctive to reward. Every stage is a gate, not a bonus, and the pipeline only pays out at the end.

Once the fixes are live, don't guess whether they worked — measure. The 20-prompt method inside **[the 90-minute audit](/strategy/audit/)** gets you an honest citation-share number in half an hour; that page owns the method, so it isn't repeated here. Across our own 50-site pilot, the median site's citation share before any of this was **8%**. That's the middle of the pack, and it's the number this whole pipeline exists to move. Full pilot methodology: **The Citation-Share Study**<!-- relink: /research/citation-share-study/ -->.

Two follow-ons once you have a baseline, and they answer different questions. Running the panel monthly instead of once is a system with its own scoring rules, cadence and tooling threshold: **[AI Citation Monitoring](/measurement/citation-monitoring/)**. And because a won citation frequently produces no click at all — the reader gets the answer inside the chat — the visits it *does* drive tend to arrive with no referrer attached: **[Tracking AI Traffic](/measurement/ai-traffic/)** is how you stop filing them under Direct and calling it nothing.

---

## How Long Until This Shows Up as Citations?

**Expect citations to trail your Google gains by roughly one to two months, based on our data. Perplexity moves first because it's close to real-time retrieval; ChatGPT moves last because it leans on trained knowledge that refreshes on a slower cycle. The pipeline mostly cites what's already earning trust in search, so fixing the mechanism pays out after your search visibility improves, not before it.**

That lag is a reason to start now, not a reason to wait. If citations trail search gains by a month or two, every month you delay the retrieval and chunking fixes is a month added to the front of a clock that hasn't started yet. There's no version of this where you "do GEO later" and the citations arrive on the same day — the pipeline has to run its natural course through whatever index and training cycle each engine uses.

Two things do move faster than the pipeline's average lag, and they're worth flagging so you don't misread an early signal. Fixing an outright retrieval blocker — an AI crawler that was silently disallowed, content trapped behind JavaScript — can produce a citation within days once the engine's next crawl happens, because there was no mechanism problem left to wait out, only an access problem. And Perplexity, given a clean, well-chunked page, is routinely the first engine to show any movement at all, weeks ahead of the average. Neither is a guarantee. Both are useful early tells that the fixes landed.

---

## FAQ

### Do AI engines cite whole pages or just sections of them?

**Sections.** Retrieval and selection both operate on chunks — a heading and the paragraph under it, roughly — not the page as a whole. A page can win several citations from several different chunks, or none at all if every section leans on the one above it. Write each section to survive being lifted out and quoted alone.

### Is retrieval the same thing as ranking in Google?

**No.** Ranking sorts a whole results page against one query. Retrieval pulls a shortlist of chunks against several sub-queries the engine wrote itself, then a smaller model picks which chunks make the final answer. The two reward much of the same groundwork — crawlable, authoritative, well-structured pages — but a page can rank in Google and still never get retrieved.

### Does ChatGPT cite from training data or from live retrieval?

**Both**, weighted differently by engine. Perplexity leans almost entirely on live retrieval, so a page can be cited within days of going up. ChatGPT leans more on what it learned in training, so a reputation built over time counts for more there, alongside live search when it runs. Either way, the page still has to be crawlable and quotable the moment retrieval actually happens.

### Do I need schema markup to get cited?

**No**, not directly. Schema doesn't influence which chunk gets selected — clear, self-contained writing does that. What schema buys you is entity clarity: confirming who published the page and tying it to your other pages, which matters once you're already in the running. Add it for that reason, not as a citation shortcut.

### How long after fixing a page before citations show up?

About one to two months behind whatever you did in Google, based on our data. Perplexity moves fastest because it's close to real-time retrieval; ChatGPT lags longest because it leans on trained knowledge that refreshes slowly. Fix retrieval and selection first and expect citations to follow your search gains, not lead them.

### Can an old page still get cited, or does freshness rule it out?

**Yes.** Freshness is one selection factor among several, not a gate. An older page with a named data point, clear entity signals and a direct answer beats a brand-new page that only restates the consensus. Update the `dateModified` and refresh the numbers when they go stale — don't panic-republish a page that's still the best answer in the room.

---

## Measure Before You Rebuild Anything

Five stages, five things to check, and a real number waiting at the end of it. Before you rewrite a single section on the strength of this page, find out where you actually stand: run the **20-prompt method** inside the **[90-minute website marketing audit](/strategy/audit/)** and get your own citation-share baseline against ChatGPT, Perplexity and Gemini. Then come back to the checklist above and work it in pipeline order — fan-out coverage, retrieval access, chunk independence, selection strength, composition consistency. That's the mechanism. Now go be the thing it retrieves.

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 8 August 2026.*
