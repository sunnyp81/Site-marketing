---
title: "CRO Audit: Finding the Money Leaks on an Existing Website"
description: "A CRO audit finds where a live site loses revenue: the five money pages, friction, message-market fit, and revenue per visit — the one honest metric."
slug: /conversion/audit
section: "Conversion & Revenue"
cluster: conversion
datePublished: 2026-08-08
dateModified: 2026-08-08
author: sunny
sources:
  - label: "Smart Insights / Contentsquare — global average ecommerce conversion rate ~2.5%; most sites 2–3%; B2B/SaaS lead-gen benchmarks commonly quoted at 2–5%"
    url: "https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/"
  - label: "Gartner 2024 CMO Spend Survey — marketing budgets at 7.7% of company revenue, down from 9.1% in 2023"
    url: "https://www.gartner.com/en/newsroom/press-releases/2024-05-13-gartner-cmo-survey-reveals-marketing-budgets-have-dropped-to-seven-point-seven-percent-of-overall-company-revenue-in-2024"
  - label: "SparkToro 2024 zero-click search study — around 60% of US/EU Google searches ended without a click"
    url: "https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/"
faqs:
  - q: "Do I need to A/B test to run a CRO audit?"
    a: "No. An audit finds leaks by judgement and instrumentation — session recordings, form analytics, message-match checks — not by splitting traffic. A/B testing needs volume most sites don't have: under roughly 1,000 sessions and 30 conversions a month, a test can't reach significance. Fix the leaks you can see first, and save testing for when traffic can actually prove a winner."
  - q: "What's a good conversion rate for my site?"
    a: "There isn't one universal number — your own trailing baseline is the honest yardstick. As a sanity check, global ecommerce conversion averages around 2.5%, most sites land in the 2–3% range, and commonly quoted B2B and SaaS lead-gen benchmarks run 2–5%. A page sitting well under your own band, with real traffic on it, is a leak worth auditing."
  - q: "How is a CRO audit different from the money-pages check in the 90-minute audit?"
    a: "Depth. The 90-minute audit's Block 4 is a five-question yes/no grid across five pages in 20 minutes — a triage. A CRO audit is the instrumented version: session recordings, form analytics, message-match checks and a revenue estimate per fix, run page by page. The 90-minute check tells you where to look. This is the looking."
  - q: "Should I fix conversion before I spend more on traffic?"
    a: "Yes. Buying visits for a page that converts badly is a subsidy for the leak, not a fix for it. Doubling a poor conversion rate typically banks more revenue, faster, than growing traffic by the same percentage — and it holds the gain permanently, because every future visit converts better too. Fix first, then spend."
  - q: "Do AI-referred visitors convert differently?"
    a: "Often, yes — they arrive pre-sold. Someone who read a synthesised answer in ChatGPT or Perplexity has already had their questions half-answered before they click through, so a page that re-explains the basics wastes the visit. These visitors want confirmation, proof and a fast path to action, not the top-of-funnel pitch built for a cold search click."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
- FAQPage: generated from front-matter faqs[] (5 pairs). Do NOT double-mark the visible FAQ section separately.
- Visible dateModified on page (author line). Refresh diary: January 2027, 15%+ substantive change.

DATA CONSISTENCY (locked upstream — do not restate differently)
- Five money pages, in order, matches the pillar and every other cluster page that names them: homepage,
  pricing page, top landing page, forms, checkout/signup. Do not reorder or add a sixth.
- Revenue per visit = revenue / sessions, "the number that survives a CFO" — pillar + audit page phrasing,
  keep verbatim.
- A/B testing floor: ~1,000 sessions or 30 conversions/month, matches seo-vs-geo-vs-cro.md and the
  low-traffic-testing marker. A broken checkout/signup overrides the floor and gets fixed at any traffic
  level (seo-vs-geo-vs-cro.md "When the Order Flips") — this page repeats that override, doesn't contradict it.
- Conversion-rate benchmark: Smart Insights/Contentsquare ~2.5% global average covers ecommerce only; the
  2–5% B2B/SaaS figure is framed as "commonly quoted benchmarks", not pinned to that source — matches
  seo-vs-geo-vs-cro.md's framing exactly.
- This page is the "deep, instrumented version" of the 90-minute audit's Block 4, per the relink promise at
  website-marketing-audit.md:201. Don't re-teach Block 4's 20-minute grid; reference it, then go deeper.

ROUTING FLAG (not a content issue, matches sibling pages): this page uses /conversion/audit/,
/conversion/low-traffic-testing/, /measurement/ai-traffic/, /audit-checklist/, /research/citation-share-study/
as reader-facing paths for cross-page consistency. Reconcile against the stack ADR's /cro/* mapping before
launch. /conversion/low-traffic-testing/ is a proposed slug (confirm the /conversion/ prefix before launch).

VERIFY GPTBot, ClaudeBot, PerplexityBot, Google-Extended access per bot policy. All content in initial HTML.
-->

# CRO Audit: Finding the Money Leaks on an Existing Website

**A CRO audit is an instrumented review of an existing site's revenue-generating pages — homepage, pricing, top landing page, forms, checkout or signup — that finds exactly where visitors abandon and prices the fix by revenue, not by a Lighthouse score. You run it on traffic you already paid for, using session recordings and analytics you already have, and you end with a ranked list of leaks, not a design opinion.** That's the deliverable. Everything below is how to produce it properly, page by page.

You already have visitors. That's the whole point of this audit and the reason it comes before almost everything else in the **[website marketing playbook](/how-to-market-a-website/)**. Traffic is getting more expensive to earn — **around 60% of US and EU Google searches ended without a click in 2024** ([SparkToro, 2024](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/)) — so the visitors who do land on your site are increasingly precious, and wasting them is increasingly expensive. A CRO audit is how you stop wasting them.

> **TL;DR**
> - [What a CRO audit checks](#what-does-a-cro-audit-actually-check) — the instrumented version of a money-pages review.
> - [Revenue per visit, the honest metric](#why-is-revenue-per-visit-the-only-honest-cro-metric) — not conversion rate alone.
> - [The five money pages](#what-should-you-check-on-each-of-the-five-money-pages) — a checklist per page.
> - [Friction, message-market fit and AI-referred visitors](#what-counts-as-friction-and-where-does-it-actually-cost-you-money) — where leaks hide beyond the obvious.
> - [Why fix before you amplify](#why-is-amplifying-a-leaky-site-just-paying-to-lose-faster) — the whole argument for doing this first.

---

## What Does a CRO Audit Actually Check?

A CRO audit checks whether the visitors you already have can complete the job they came to do, and where, specifically, they get stuck. That's different from a redesign, a rebrand, or a speed audit — none of those start from "where does the money actually leak," and all three are popular precisely because they're easier to sell than an honest look at abandonment data.

If you've run the **[90-minute website marketing audit](/strategy/audit/)**, you've already done the fast version of this: a five-question yes/no grid across five pages, in twenty minutes, on your phone. That block is a triage — it tells you *that* something's wrong with checkout, not *what*. This audit is the instrumented follow-up: session recordings, form-field analytics, funnel drop-off by step, and a message-match check against the traffic source. Where the 90-minute check gives you a hunch, this one gives you a number and a fix.

Three things this audit deliberately isn't:

- **Not a redesign.** A CRO audit finds leaks in the page you have. What you do about them might be a copy change, a field removed, or a genuine rebuild — but the audit doesn't presuppose the answer.
- **Not a speed audit.** Site speed matters where it touches a money page, and it shows up below. But a 40-to-95 Lighthouse jump on a blog post changes nothing here. Speed is only a finding when it costs money.
- **Not a test.** Testing proves which of two versions wins. An audit finds what's broken before you've built two versions of anything. Most sites need the audit far more urgently than they need a testing programme — more on that below.

---

## Why Is Revenue Per Visit the Only Honest CRO Metric?

Revenue per visit — total revenue divided by total sessions — is the only CRO metric that can't be gamed by chasing a vanity number. It's **the number that survives a CFO**. Conversion rate alone rewards you for optimising the wrong thing: you can lift a form-completion rate by asking for less information and collect a pile of unqualified leads that never close. Revenue per visit doesn't care how you got there. It just tells you whether the site got better at its actual job.

That's not an argument against conversion rate — it's an argument for pairing it with what happens after the conversion. Track both, but report the one that survives a boardroom conversation.

| Metric | What it rewards | What it misses | Use it for |
|---|---|---|---|
| Conversion rate | More completions | Quality of what converted | Diagnosing a specific page or step |
| Leads generated | Volume | Whether leads ever close | Sales-team capacity planning, not revenue |
| Revenue per visit | Actual money earned per session | Nothing — it's the composite | The number you defend in the meeting |

Where does a "good" conversion rate even sit? There's no universal floor — your own trailing baseline is the honest test, and a page converting well below its own 90-day average is a leak regardless of what anyone else's site does. As a sanity check only: the global average ecommerce conversion rate sits around **2.5%**, most ecommerce sites land in the **2–3%** range, and commonly quoted B2B and SaaS lead-generation benchmarks run **2–5%** depending on deal size ([Smart Insights / Contentsquare, 2025](https://www.smartinsights.com/ecommerce/ecommerce-analytics/ecommerce-conversion-rates/)). If you're well under your own band with real traffic on the page, you've found a leak. If you're above the public average and still under your own baseline, you've *also* found a leak — the public number is a sanity check, not a target.

---

## What Should You Check on Each of the Five Money Pages?

Five pages leak most of the revenue on almost every site: homepage, pricing, your top landing page, your top form, and checkout or signup. Check them in that order, because that's the order a buyer moves through them, and a leak upstream hides the real size of a leak downstream. Each gets its own five-point checklist below — this is the deeper pass behind the 90-minute audit's quick grid, run per page rather than as one generic five-question sweep.

### Homepage: Does a Stranger Know What You Do in Five Seconds?

The homepage is the page everyone judges you by and almost nobody tests, because nobody "owns" it the way a product manager owns a signup flow. If a stranger can't state what you do and who it's for within five seconds, they're gone before you get a second chance.

| Check | What you're looking for |
|---|---|
| Five-second clarity | A stranger who's never seen the site can say what you do and who it's for, unprompted |
| One primary CTA | A single dominant action above the fold — not three buttons fighting for the same click |
| Proof above the fold | A logo bar, a review count, or a number that means something — not buried under three scrolls |
| Nav reaches the money | Pricing and your top landing page are one click away, not nested in a mega-menu |
| Mobile load under 3 seconds | Tested on your own phone, on 4G — not a lab score in ideal conditions |

### Pricing: Can a Buyer Decide Without Talking to Sales?

Pricing is where high-intent visitors decide, and it's the page most sites are proudest of and least willing to test, because pricing feels like a business decision rather than a design one. It's both.

| Check | What you're looking for |
|---|---|
| Price is visible | No forced "contact us" wall unless the motion is genuinely enterprise-only, by design, not default |
| Plan differences are scannable | A comparison table answers "why not the cheapest one" in a glance, not three paragraphs |
| Objections pre-answered | The FAQ answers what your sales team actually hears weekly — pull it from real call notes, not guesses |
| CTA names the action | "Start your 14-day trial", not "Learn more" — the button should say what happens next |
| No resentment-inducing pattern | A decoy plan or a pre-ticked add-on might lift this month's number and cost you the renewal |

### Top Landing Page: Does It Match What Got the Click?

Your single highest-traffic entry point earns more from a one-point conversion gain than a ten-point gain on a page nobody visits, which makes it the highest-leverage page on the audit and the one most often left untouched since launch.

| Check | What you're looking for |
|---|---|
| Message match | The headline restates the exact promise of the ad, search result or referring answer that sent the click |
| One conversion path | A single primary action, not buy/download/subscribe all competing on one page |
| Proof matches the audience | Testimonials and case studies speak to the segment that actually lands here, not a generic pool |
| No dead ends | Every scroll depth has a next click available — nobody hits a wall and has to hunt for the way forward |
| Above the fold does the work | The headline and CTA don't require a scroll to justify the click that brought them here |

### Forms: Does Every Field Earn Its Place?

Every field you ask for is a person you risk losing, and most forms were built once, by committee, and never revisited once the business questions that justified each field stopped mattering.

| Check | What you're looking for |
|---|---|
| Field count justified | Each field is something you actually act on — "could we do the job with one fewer?" |
| Inline validation | Errors appear next to the field before submit, not as a full-page reload after |
| Progress visible | If the form runs past four fields, the visitor can see how much is left |
| No convenience-only friction | A CAPTCHA or verification step is there for a real signal, not because it was easier to bolt on |
| Autofill enabled | Name, email and address fields carry the right autocomplete attributes — fewer taps beats fewer fields |

### Checkout or Signup: Where Does the Money Actually Change Hands?

This is the last step, and friction here is the most expensive friction on the site, because you've paid for every visitor who reaches it and you lose the whole value of the sale if they bounce here.

| Check | What you're looking for |
|---|---|
| No surprise costs | Total price is shown before the final click — shipping, tax and fees included, not revealed at the end |
| Guest path exists | Signup or checkout doesn't force an account before the transaction completes |
| Errors are specific | A failed payment or a taken username gives a precise, recoverable message, not a blank reload |
| Trust signals at the money moment | Security badges, refund policy, and support contact sit right where the card details go in |
| Confirmation fires immediately | The confirmation page and email land at once and say exactly what happens next |

---

## What Counts as Friction, and Where Does It Actually Cost You Money?

Friction is any point where a visitor has to work harder, wait longer, or guess more than the value of what they're getting justifies — and it costs money exactly where it sits between a visitor and the action they already intended to take. That's the test: friction on a page nobody was going to convert on anyway is cosmetic. Friction on the checkout step is a fire.

The instrumented version of a friction hunt uses three inputs the five-point checklists above only sample by eye:

1. **Session recordings on your top three money pages.** Watch ten real sessions per page, not a highlight reel. Rage clicks, dead scrolls and repeated back-button presses are the tell — they show you the exact pixel where a real visitor gave up, which no checklist can.
2. **Form-field analytics.** Time-to-complete and abandonment by individual field, not just overall form completion rate. One field is usually responsible for most of the drop-off, and it's rarely the one your team assumes.
3. **Funnel drop-off by step**, not just top-of-funnel-to-conversion. A funnel that loses 40% overall but 25% at one specific step tells you exactly where to spend the next sprint, instead of vaguely "improving the funnel."

**Speed scores are a hobby. Revenue-weighted fixes are a job.** A Lighthouse number in isolation is not a finding — "checkout loads in six seconds on 4G and we lose people at the payment step" is a finding, because it names a page and a cost. Chase speed only where the session recordings or the funnel data show it's actually where people leave.

One kind of slow isn't yours to price, though, and it's worth handing off cleanly: a page so slow that a crawler gives up before it fetches at all never gets indexed or retrieved, which costs you the visitor before conversion is even in play. That's a server and hosting problem, not a funnel one, and it belongs in the **[technical SEO audit](/technical/audit/)**. This page prices the slow that costs you a sale. That page catches the slow that costs you the visit.

---

## What Is Message-Market Fit, and Why Does It Leak Money Before the Page Even Loads?

Message-market fit is whether the words on your money page match the words in the visitor's head at the moment they clicked — and when it's wrong, you lose the visitor before your headline, your CTA, or your form design ever get a chance to matter. It's the leak that hides upstream of everything else on this page, which is why it's easy to miss: the page can pass every checklist above and still convert badly, because it's answering a question nobody asked.

The most common break is a single landing page serving five different ad groups, search queries, or referring answers, each promising something slightly different, while the page says one generic thing to all of them. A visitor who clicked "pricing for a 10-person team" and lands on a page that opens with enterprise security certifications has already checked out mentally, even though the page never technically failed to load.

Fixing message-market fit is cheaper than almost any other item on this audit, because it's usually a rewrite, not a rebuild: match the headline to the query, match the proof to the segment, and cut anything that answers a question this particular visitor didn't bring with them.

---

## Do AI-Referred Visitors Need a Different Page?

Yes — visitors arriving from ChatGPT, Perplexity or Gemini have usually already had part of the sale made for them, because they read a synthesised answer that named you before they ever clicked through. That changes what the landing page needs to do. A visitor who searched cold needs to be educated and persuaded from nothing. A visitor who arrives having read "here's a tool that does X, here's how it compares to Y" doesn't need the top-of-funnel pitch again — they need confirmation that the page matches what they were just told, plus the specific proof that gets them to act now.

Building for that second kind of visitor means treating an AI-referred landing experience differently from a cold-search one: skip the re-explanation of the category, lead with the specific claim the answer engine likely made about you, and get to proof and action fast. Most sites don't yet know how many of their visitors arrive this way, because a chunk of AI-driven traffic carries no referrer at all and hides inside "direct" — that's **[dark AI traffic](/glossary/dark-ai-traffic/)**, and it means your analytics number is a floor, not a total. Measuring the real one is its own job: **[Tracking AI Traffic: Referrers, Prompt-Level Visibility and Dark AI Traffic](/measurement/ai-traffic/)**.

---

## Should You A/B Test the Leaks You Find?

Only if your traffic can prove a winner — and most sites can't, which is exactly why this audit leads with judgement, not testing. Below roughly 1,000 sessions and 30 conversions a month, an A/B test can't reach statistical significance in a reasonable timeframe, so calling a winner is closer to reading tea leaves than to evidence. Below that line, fix the leaks this audit surfaces by judgement — message clarity, field count, checkout friction — and bank the gain without waiting for a result that was never coming.

Once you clear that volume, testing earns its keep on your highest-traffic page, one hypothesis at a time, starting with whatever the audit ranked highest. If you're below the line, don't fake a test with too little data and call the result real; **what to do instead of A/B tests**<!-- relink: /conversion/low-traffic-testing/ --> is a different method entirely, built for exactly this situation.

### Q&A: Does a broken checkout wait for enough traffic to test it?

**No.** A dead payment step or a signup form that errors out isn't a test candidate at any traffic level — it's a fire, and fires get fixed today regardless of your session count. You don't need statistical significance to know that a page converting at zero is broken. The 1,000-session floor above governs *testing* two working versions against each other. It says nothing about leaving a genuinely broken page live while you wait for volume.

---

## Why Is Amplifying a Leaky Site Just Paying to Lose Faster?

Because every visitor you buy or earn passes through the same broken funnel, so amplification multiplies the loss at the same rate it multiplies the traffic. If your top landing page converts at half its potential, doubling the traffic to it doesn't fix the page — it just means twice as many people hit the same leak, at whatever it cost you to bring them there in the first place.

The arithmetic makes the order obvious. Take a site running 10,000 monthly visits at a 1% conversion rate. Lifting conversion from 1% to 2% doubles output on the traffic you already have, in weeks, with no extra spend on reach. Growing traffic by 50% — a real quarter of SEO or GEO work — gets you half that lift, arrives months later, and still runs through the same leaky funnel. CRO doesn't compound the way content does, but it banks its gain immediately and permanently, which is exactly why it goes first. The full decision rule across all three disciplines: **[SEO vs GEO vs CRO: Where to Invest First](/strategy/seo-vs-geo-vs-cro/)**.

This matters more, not less, as marketing budgets tighten. Gartner's CMO survey put marketing spend at **7.7% of company revenue in 2024, down from 9.1% the year before** ([Gartner, 2024](https://www.gartner.com/en/newsroom/press-releases/2024-05-13-gartner-cmo-survey-reveals-marketing-budgets-have-dropped-to-seven-point-seven-percent-of-overall-company-revenue-in-2024)). A shrinking budget buying visits for a leaking site is a worse trade every year the leak stays open — the CFO's revenue-per-visit conversation only gets more uncomfortable. Fix the leak first, then spend on reach with a clean conscience. How much of your budget should sit in each stage: **[website marketing budget](/strategy/budget/)**.

---

## How Do You Turn Leaks Into a Ranked Fix List?

You score every leak on revenue impact and effort, then divide, exactly the way the 90-minute audit's Block 5 does — this audit just feeds it richer, page-instrumented findings instead of five yes/no ticks. Score each finding one to three on both axes:

| Score | Revenue impact | Effort |
|---|---|---|
| **3** | Touches money directly: checkout, pricing, top landing page, a leak on high-intent traffic | Large: a migration, a redesign, a dev sprint |
| **2** | Touches money indirectly: homepage clarity, a mid-funnel form | Medium: a page rebuild, a template change |
| **1** | Hygiene: nice to fix, no clear revenue line | Small: a copy change, a setting, a field removed |

**Priority = Revenue impact ÷ Effort.** Sort descending, take the top ten, and genuinely delete the rest of the list rather than parking it. A cheap fix on the checkout page will nearly always outrank an expensive redesign of a page few people see — that's the point of dividing by effort rather than just ranking by impact.

Feed the ranked list straight into your quarter: sequence the fixes against everything else on the **[website marketing plan template](/strategy/plan-template/)**, and re-run this audit once the top ten are shipped. Leaks recur — a new landing page, a pricing change, a redesigned checkout can all reopen one — so this isn't a once-and-done exercise any more than the 90-minute audit is.

Once the leaks are shut, the next thing that earns a quarter is the content feeding those pages: that's the **[content audit](/content/audit/)**, and it comes after this one on purpose. Pruning and rewriting a site that still loses people at checkout is decorating a room with a hole in the floor.

---

## FAQ

### Do I need to A/B test to run a CRO audit?

**No.** An audit finds leaks by judgement and instrumentation — session recordings, form analytics, message-match checks — not by splitting traffic. A/B testing needs volume most sites don't have: under roughly 1,000 sessions and 30 conversions a month, a test can't reach significance. Fix the leaks you can see first, and save testing for when traffic can actually prove a winner.

### What's a good conversion rate for my site?

There isn't one universal number — your own trailing baseline is the honest yardstick. As a sanity check, global ecommerce conversion averages around 2.5%, most sites land in the 2–3% range, and commonly quoted B2B and SaaS lead-gen benchmarks run 2–5%. A page sitting well under your own band, with real traffic on it, is a leak worth auditing.

### How is a CRO audit different from the money-pages check in the 90-minute audit?

Depth. The **[90-minute audit](/strategy/audit/)**'s Block 4 is a five-question yes/no grid across five pages in 20 minutes — a triage. A CRO audit is the instrumented version: session recordings, form analytics, message-match checks and a revenue estimate per fix, run page by page. The 90-minute check tells you where to look. This is the looking.

### Should I fix conversion before I spend more on traffic?

**Yes.** Buying visits for a page that converts badly is a subsidy for the leak, not a fix for it. Doubling a poor conversion rate typically banks more revenue, faster, than growing traffic by the same percentage — and it holds the gain permanently, because every future visit converts better too. Fix first, then spend.

### Do AI-referred visitors convert differently?

Often, **yes** — they arrive pre-sold. Someone who read a synthesised answer in ChatGPT or Perplexity has already had their questions half-answered before they click through, so a page that re-explains the basics wastes the visit. These visitors want confirmation, proof and a fast path to action, not the top-of-funnel pitch built for a cold search click.

---

## Run the Audit Before You Spend Another Pound on Reach

You already paid for this traffic — in content, in rankings, in ad spend, or in years of citation-building. Don't let it leave through a hole you never checked. Start with the **[90-minute website marketing audit](/strategy/audit/)** if you haven't baselined your six numbers yet, then come back here and run this deeper pass on whichever money page it flagged first. Five pages, one ranked fix list, no test required to get started.

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 8 August 2026.*
