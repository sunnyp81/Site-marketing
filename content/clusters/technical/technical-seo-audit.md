---
title: "Technical SEO Audit: What Actually Moves Rankings"
description: "A technical SEO audit for marketers: crawl waste, rendering failures, bot access and schema, ranked by what actually moves rankings and AI citations."
slug: /technical/audit
section: "Technical Foundation"
cluster: technical
datePublished: 2026-08-08
dateModified: 2026-08-08
author: sunny
sources:
  - label: "Semrush — How to do a website audit (Site Audit runs 140+ automated checks)"
    url: "https://www.semrush.com/blog/website-audit/"
  - label: "Gartner 2024 — predicts traditional search engine volume will drop 25% by 2026 as users shift to AI chatbots and virtual agents"
    url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents"
faqs:
  - q: "What's the difference between this and the 90-minute website audit?"
    a: "Scope. The 90-minute audit is a fast triage across visibility, content, technical health and conversion that ends in a ranked fix list — it tells you whether technical is your bottleneck. This page is the deep dive once it says yes: crawlability, rendering, indexation, bot access and schema, in the order that actually moves rankings and AI citations."
  - q: "Should I block GPTBot, ClaudeBot or PerplexityBot?"
    a: "No. Deliberately blocking AI crawlers is rare; blocking them by accident is common — a CDN default, an old robots.txt rule inherited from a security review nobody revisited. This site allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended outright. Check your own robots.txt against that same list before you do anything else on this page."
  - q: "Do I need a full site crawl to run a technical SEO audit?"
    a: "No, not to start. A short triage using Search Console's own reports finds your worst crawl waste and index bloat without a paid crawler. A full crawl earns its place once triage flags a site with thousands of URLs, or a rendering problem you need to see page by page. That's an escalation, not a starting point."
  - q: "Does site speed affect AI citations?"
    a: "Yes, indirectly. A retrieval engine still has to fetch and parse your page before it can quote it, so a page that times out or serves a blank shell loses the citation before content quality is even judged. But a Lighthouse score climbing from 70 to 95 on a low-traffic page won't move revenue or citations. Speed only matters where it touches a page bots and buyers actually need to load."
  - q: "How often should I run a technical SEO audit?"
    a: "Quarterly, alongside the 90-minute website audit that flags whether you need one. Run a lighter monthly check on crawl errors and bot access if you publish often or change your site's structure — those are the two things most likely to quietly break between quarters, and both are five-minute checks in Search Console."
  - q: "What schema should I add first?"
    a: "Article and Person schema with sameAs to a real profile, plus FAQPage if you have genuine Q&A content. Those three cover authorship, entity clarity and extractable answers — the schema both Google's raters and AI retrievers actually use. Add BreadcrumbList and HowTo only where the page structure genuinely matches them. Stacking schema types the page doesn't earn is decoration, not signal."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
- FAQPage generated from front-matter faqs[] (6 pairs). Do not double-mark the visible FAQ section separately.
- Visible dateModified on page (author line). Refresh diary: January 2027, 15%+ substantive change.

DATA CONSISTENCY (locked upstream — do not restate differently)
- 8% median citation share = the informal 50-site pilot, owned by /research/citation-share-study/ and the pillar.
  Keep phrasing consistent with those pages on every refresh.
- Bot policy locked by public/llms.txt and public/robots.txt: GPTBot, ClaudeBot, PerplexityBot and Google-Extended
  all allowed, Disallow: /ops/ only. Do not restate a different stance here.
- "Speed scores are a hobby. Revenue-weighted fixes are a job." is a direct callback to the pillar's Step 2 and the
  90-minute audit's Block 4 — reuse verbatim, don't paraphrase it into something weaker.

STAT WANTED (source-less, for the owner — never visible copy)
- stat wanted: a verified Core Web Vitals business-impact case study (the AMENDMENT 1 citation policy blocks every
  candidate — web.dev, HTTP Archive — this session; see content/_review-notes/stats-bank-2026-08.md leads 1-5).
- stat wanted: a verified crawl-budget or index-bloat-at-scale figure (Google's own crawl stats docs are blocked
  this session).
-->

# Technical SEO Audit for Marketers: What Actually Moves Rankings

**A technical SEO audit for marketers checks five things: whether crawlers are wasting effort on pages that don't matter, whether your content is visible in the initial HTML or hidden behind JavaScript, whether the bots you want (including AI crawlers) can actually reach you, whether your schema is doing real work, and whether your speed problems touch revenue. Everything else is trivia — plausible-sounding, mostly harmless, and not what moves rankings or AI citations.**

You've seen the 200-item technical audit. Broken canonical tags on a page with nine visits a year. A hreflang warning on a site that sells to one country. Semrush's own Site Audit runs [140+ automated checks](https://www.semrush.com/blog/website-audit/), and that's the honest, well-built version — most agency templates run longer, and almost none of it is prioritised by what it costs you. A report that flags 140 things and ranks none of them isn't an audit. It's an inventory with a bill attached.

This page is the opposite bet: five things that actually move rankings and AI retrieval, checked in the order that finds the expensive ones first. If you came here from the **[90-minute website audit](/strategy/audit/)** because Block 3 or Block 4 flagged a technical fire, you're in the right place — this is the deep dive that tells you whether crawlability, rendering, or indexation genuinely needs work, instead of guessing.

---

## What Does a Technical SEO Audit Actually Check?

It checks the handful of inputs that both Google and AI answer engines are trying to solve for at the same time: can a crawler reach the page, can it read the page, and does the page clearly own an answer. Everything on the list below either serves that goal directly, or it's trivia dressed up as due diligence.

| Actually moves rankings | Mostly trivia |
|---|---|
| Crawl waste sending bots to parameter URLs instead of money pages | Perfect canonical tags on pages with no traffic |
| Content that only exists after JavaScript runs | Meta keyword tags (unused since roughly forever) |
| AI crawlers (GPTBot, ClaudeBot, PerplexityBot) blocked by accident | Chasing a 100/100 Lighthouse score |
| Missing or malformed Article, Person and FAQPage schema | Stacking ten schema types a page doesn't structurally earn |
| Speed problems on pages that touch revenue | Speed problems on a blog post nobody reads |
| Index bloat — thousands of indexed pages nobody visits | Hreflang tags for markets you don't sell into |

Nobody was ever out-ranked because their canonical tags weren't quite perfect on a page with no traffic. They were out-ranked because a crawler gave up before reaching the pages that mattered, or because an AI retriever fetched their page and got served an empty `<div>`. This audit goes after the second kind of problem, in order of how much it costs you.

One more reason this list has changed shape: **Gartner predicts traditional search engine volume will drop 25% by 2026 as users shift to AI chatbots and virtual agents** ([Gartner, 2024](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents)). A technical audit that only checks what Googlebot needs is auditing a quarter of a shrinking pie. Rendering and bot access below aren't optional add-ons for 2026 — they're half the point.

---

## Where Is Google Wasting Its Crawl Budget on Your Site?

Google is wasting crawl budget on your site if it's spending crawl requests on parameter URLs, faceted-navigation combinations, tag archives, or thin auto-generated pages instead of the pages you actually want ranked. Under about 10,000 URLs this is rarely the emergency people assume — see **[crawl budget](/glossary/crawl-budget/)** for why. But the *symptom* of wasted crawling — index bloat — costs you at any size, because it dilutes authority and buries your real pages in noise.

Three checks, in order:

1. **Count indexed pages.** Search Console → Indexing → Pages → the "indexed" number.
2. **Count pages that earned at least one organic click in the last 90 days.** Search Console → Performance → Pages tab.
3. **Divide the second number by the first.** That percentage is your bloat signal.

The named threshold: **under 50% is a prune quarter.** A worked example with real-shaped numbers: 1,240 indexed pages, 310 with a click in 90 days. That's 25%. Three-quarters of what Google crawls on that site is dead weight — filter combinations, expired listings, thin category pages nobody asked for — and every one of them is competing for the same crawl budget as your homepage.

The fix isn't cleverness. It's deletion, redirects, and tighter internal linking that stops pointing crawlers at the noise. The pruning decision itself — which pages to kill, merge, refresh, or leave alone — is a content call, not a technical one, and it has its own deep dive: **[Content Audit for Live Sites: Prune, Merge, Refresh or Leave Alone](/content/audit/)**. This page's job stops at finding the bloat; that page's job is deciding what to do about each row.

One distinction worth making before you reach for the delete key: bloat and invisibility are different diseases. Bloat is pages Google indexed but nobody wants. If a page isn't indexed *at all* despite being worth ranking, that's not a prune candidate — that's a crawl or rendering fault, and it's the next section's problem.

---

## Can Google and AI Crawlers Actually See Your Content?

Not necessarily, and the only way to know is to check what's in the page's initial HTML, not what renders in a browser. **JavaScript rendering**<!-- relink: /technical/js-rendering/ --> is where most technical audits quietly fail, because a page can look perfect in Chrome and still be invisible to half the crawlers that matter.

Here's the mechanism. Googlebot renders JavaScript, eventually, on a second pass, with a rendering budget that isn't guaranteed and isn't instant. Most AI retrievers — the systems behind ChatGPT, Perplexity and Claude's search features — fetch a page once, read the raw HTML, and move on. They don't run your client-side framework. If your product description, your pricing, or your FAQ answers only exist after JavaScript executes, Googlebot might eventually see them and an AI retriever almost certainly won't.

**The test takes thirty seconds.** Right-click any important page, choose "View Page Source" (not "Inspect"), and search for the actual sentences on the page — your headline, your price, your FAQ answer. If they're in that raw source, you're fine. If you find an empty `<div id="root">` and a pile of script tags, your content doesn't exist as far as most AI crawlers are concerned. What isn't in the source doesn't exist.

This is exactly the failure that overrides every other priority on your site. A rendering failure puts technical first, above SEO, GEO or CRO — none of the other work matters if crawlers and LLMs see a blank page. See **[SEO vs GEO vs CRO: Where to Invest First](/strategy/seo-vs-geo-vs-cro/)** for the full ordering logic.

The fix, in priority order:

- **Server-side render or pre-render your money pages.** Homepage, pricing, top landing pages, and anything you want cited. This is a one-time engineering job, not an ongoing tax.
- **Put critical content in the HTML even on JS-heavy pages.** Product data, FAQ answers, and key claims can live in the initial payload even if the interactive layer loads on top.
- **Re-run the View Source test after every major front-end change.** A framework migration is exactly when this silently breaks.

Get this wrong and every other number on this site's own case for AI visibility explains why it matters: our 50-site pilot found the median site's citation share, before any fixes, was just 8%. Some of that ceiling is a content problem. A meaningful chunk of it is pages an AI retriever simply never got to read. You can't be cited for a page a crawler never saw — that's covered from the retrieval side in **[How AI Answer Engines Choose Citations](/visibility/citations/)**.

### Q&A: Should I trust Google's Mobile-Friendly Test to check rendering?

**No, not on its own.** It's a useful sanity check but it's Google's renderer specifically, and it will happily show you a fully rendered page while ChatGPT's retriever fetches the same URL and gets an empty shell. Run the View Source test as your primary check — it shows you what every crawler that doesn't execute JavaScript actually receives, which is the harder and more honest test.

---

## Are You Blocking the Bots You're Trying to Win?

Most sites that fail this check didn't decide to. A CDN's default security rule, a robots.txt inherited from a redesign two years ago, or a "block all bots except Google" instruction some agency wrote in 2019 — any of these quietly locks out the exact crawlers you now need. Bot access policy isn't technical trivia in 2026. It's the single most reversible, most consequential five-minute check on this whole page.

Four bots to check by name, and this site's own stance on each:

| Bot | Owner | What it does | This site's policy |
|---|---|---|---|
| GPTBot | OpenAI | Training and search retrieval | Allowed |
| ClaudeBot | Anthropic | Training and retrieval | Allowed |
| PerplexityBot | Perplexity | Answer retrieval | Allowed |
| Google-Extended | Google | Gemini training | Allowed |

All four, allowed, no exceptions, no `Disallow` rules carved out for them. Blocking the crawlers that feed the answer engines you're trying to get cited by is self-defeating on a site whose whole job is being found — and it's exactly the kind of mistake that happens by accident, not by decision, which is why it belongs on a checklist and not just in your memory.

The check itself: fetch your own `robots.txt` and read it line by line, or open Search Console's robots.txt tester. Look for a blanket `Disallow: /` under a wildcard `User-agent: *` block with no exception carved out above it for the bots you want. That single misplaced rule is the whole failure mode.

Robots.txt controls access. A separate file, **llms.txt policy**<!-- relink: /technical/llms-txt/ -->, controls something adjacent: a curated, machine-readable map of the pages worth retrieving, with a stated crawler stance and an attribution ask. It's guidance, not a gate — if it and robots.txt ever disagree, robots.txt wins. But an llms.txt file that names your bot policy explicitly, in plain prose, removes any doubt for a retriever deciding whether your site is worth the fetch.

### Q&A: Do I need an llms.txt file if robots.txt already allows everyone?

**Not strictly, but it earns its place fast.** Robots.txt is binary — allowed or blocked, page by page. It says nothing about which pages actually matter, and nothing about how you want your content attributed once it's used. An llms.txt file is a curated pointer to your best pages, described in plain language a retrieval model can act on directly, plus a stated position on attribution. It doesn't replace access control. It makes the access you already grant easier to use well.

If you want to see whether your AI referral numbers reflect what your bot access actually allows, that's a measurement question, not a technical one — covered in **[Tracking AI Traffic: Referrers, Prompt-Level Visibility and Dark AI Traffic](/measurement/ai-traffic/)**. A chunk of AI-driven traffic arrives with no referrer at all, which is a different problem from bots being blocked, and it's easy to conflate the two. See also **[dark AI traffic](/glossary/dark-ai-traffic/)** for the mechanism.

---

## Which Schema Actually Moves the Needle?

Three schema types do almost all the useful work, and the rest is mostly decoration. Article, Person (with `sameAs` pointing at a real, verifiable profile), and FAQPage where you have genuine question-and-answer content. That's the short list that both Google's quality raters and AI retrievers actually use to establish who wrote a page, whether they're credible, and whether a section can be lifted cleanly and quoted.

Here's why those three specifically:

- **Article schema** tells a crawler what kind of content it's looking at and when it was published and last touched — the freshness signal both Google and LLM retrievers weight.
- **Person schema with `sameAs`** is the machine-readable version of "a real person wrote this, and here's proof." It's the structural half of **[E-E-A-T](/glossary/e-e-a-t/)** — evidence a rater or a model can check, not a score you buy.
- **FAQPage schema** marks up exactly the self-contained, question-shaped chunks that retrieval engines are built to lift. This is the schema equivalent of writing for **[query fan-out](/glossary/query-fan-out/)** — one prompt splits into several sub-questions behind the scenes, and FAQ-marked content is pre-cut into the shape that answers them.

What doesn't make this list: Product schema on a site that doesn't sell products, Event schema for a one-off webinar from 2024 still live in your markup, and — the most common waste — five schema types stacked on a page that structurally supports one of them. Validators will pass malformed or irrelevant schema silently more often than you'd like; they check syntax, not whether the type fits the page. A schema audit that adds coverage without checking fit is adding noise Google has to sort through, not signal.

The check, in practice: pull up your money pages in a schema testing tool, confirm Article, Person and FAQPage (where applicable) validate and match what's actually on the page, then stop. You don't need HowTo on a page that isn't a set of ordered steps, and you don't need BreadcrumbList on a flat site with three levels of navigation. Add the type when the page's own structure earns it, not before.

---

## Does Site Speed Actually Move Rankings?

Rarely on its own, and almost never in the way a Lighthouse score suggests. Speed matters where it stops a crawler fetching your page at all, or where it costs you a conversion on a page that carries revenue. **Speed scores are a hobby. Revenue-weighted fixes are a job.** A page going from a Lighthouse score of 70 to 95 is a nice screenshot for a deck. It is not a finding, because it has no page-specific pound value attached to it.

The test that actually matters: load your five highest-value pages — homepage, pricing, top landing page, top form, checkout or signup — on your own phone, on a real connection, not a lab simulation. If checkout takes six seconds on 4G and you know people abandon at the payment step, that's a finding with a number attached. If your archive page from 2022 loads slowly, that's not a finding — nobody's buying anything there.

Two speed failure modes are worth separating, because they need different fixes:

| Failure mode | What it costs | Where it's fixed |
|---|---|---|
| A crawler times out before fetching the page | The page never gets indexed or retrieved at all — the worst outcome | Server response time, hosting, CDN configuration |
| A human abandons before the page finishes loading | A conversion, on a page that was reachable the whole time | Front-end weight, render-blocking scripts, image size |

The first is rare and severe — if it's happening, it shows up as pages missing from your index count entirely, which the crawl-budget check above already catches. The second is common and specific to money pages, which is exactly why it's scored by revenue, not by a lab tool. The deep, instrumented version of finding and fixing conversion-costing speed problems — with the actual money attached to each one — lives in the **[CRO Audit: Finding the Money Leaks on an Existing Website](/conversion/audit/)**. This page's job is narrower: confirm speed isn't blocking a crawler, then hand the revenue-weighted part off.

---

## How Do You Actually Run This Audit?

You run it in the order above, because each check either rules out or confirms the next one's relevance, and the order is chosen so the expensive failures surface first. Here's the whole thing as a checklist you can work through in one sitting:

- [ ] **Crawl waste and index bloat** — indexed pages ÷ clicked pages. Under 50% means a prune quarter.
- [ ] **Rendering** — View Source on your five money pages. If the real content isn't in the raw HTML, this is your top fix regardless of what else you find.
- [ ] **Bot access** — robots.txt checked against GPTBot, ClaudeBot, PerplexityBot and Google-Extended by name. Any accidental `Disallow` gets fixed today, not scheduled.
- [ ] **Schema** — Article, Person with `sameAs`, and FAQPage present and valid on money pages. Nothing stacked that the page doesn't structurally earn.
- [ ] **Speed** — money pages tested on your own phone, on a real connection. Fixes scored by revenue touched, not by lab score.

Score whatever you find the same way the **[90-minute audit](/strategy/audit/)** scores everything else: revenue impact one to three, effort one to three, priority is impact divided by effort, sort descending, take the top of the list. A rendering failure on your homepage is a 3-impact, usually 2-effort fix. A missing hreflang tag on a single-market site doesn't make the list at all — and that's the whole point of running this as an ordered audit instead of a 140-point scan. **Fewer findings, correctly ranked, beats more findings nobody prioritises.**

---

## FAQ

### What's the difference between this and the 90-minute website audit?

Scope. The **[90-minute audit](/strategy/audit/)** is a fast triage across visibility, content, technical health and conversion that ends in a ranked fix list — it tells you whether technical is your bottleneck. This page is the deep dive once it says yes: crawlability, rendering, indexation, bot access and schema, in the order that actually moves rankings and AI citations.

### Should I block GPTBot, ClaudeBot or PerplexityBot?

**No.** Deliberately blocking AI crawlers is rare; blocking them by accident is common — a CDN default, an old robots.txt rule inherited from a security review nobody revisited. This site allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended outright. Check your own robots.txt against that same list before you do anything else on this page.

### Do I need a full site crawl to run a technical SEO audit?

**No**, not to start. A short triage using Search Console's own reports finds your worst crawl waste and index bloat without a paid crawler. A full crawl earns its place once triage flags a site with thousands of URLs, or a rendering problem you need to see page by page. That's an escalation, not a starting point.

### Does site speed affect AI citations?

**Yes**, indirectly. A retrieval engine still has to fetch and parse your page before it can quote it, so a page that times out or serves a blank shell loses the citation before content quality is even judged. But a Lighthouse score climbing from 70 to 95 on a low-traffic page won't move revenue or citations. Speed only matters where it touches a page bots and buyers actually need to load.

### How often should I run a technical SEO audit?

Quarterly, alongside the **[90-minute website audit](/strategy/audit/)** that flags whether you need one. Run a lighter monthly check on crawl errors and bot access if you publish often or change your site's structure — those are the two things most likely to quietly break between quarters, and both are five-minute checks in Search Console.

### What schema should I add first?

Article and Person schema with `sameAs` to a real profile, plus FAQPage if you have genuine Q&A content. Those three cover authorship, entity clarity and extractable answers — the schema both Google's raters and AI retrievers actually use. Add BreadcrumbList and HowTo only where the page structure genuinely matches them. Stacking schema types the page doesn't earn is decoration, not signal.

---

## Where This Fits

This page is one leg of Step 2 in the wider sequence — measure, fix, strengthen, amplify, from the **[website marketing playbook](/how-to-market-a-website/)**. Fixing conversion leaks and technical faults comes before content and distribution, because amplifying a site that crawlers can't read or can't reach is paying to lose faster.

If you haven't run the triage yet, start there — the **[90-minute website audit](/strategy/audit/)** is where you find out whether crawlability, rendering or indexation is actually your bottleneck before you spend an afternoon on this deeper checklist. If it already told you technical is where you're bleeding, you've just done the work. Fix the top of your list, then go measure again.

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 8 August 2026.*
