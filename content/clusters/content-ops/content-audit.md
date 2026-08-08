---
title: "Content Audit for Live Sites: Prune, Merge or Refresh"
description: "A content audit gives every live page one of four verdicts — prune, merge, refresh or leave alone — using GSC and analytics, not guesswork."
slug: /content/audit
section: "Content Operations"
cluster: content-ops
datePublished: 2026-08-08
dateModified: 2026-08-08
author: sunny
sources:
  - label: "Semrush — How to do a website audit (Site Audit runs 140+ automated checks)"
    url: "https://www.semrush.com/blog/website-audit/"
  - label: "SparkToro 2024 — zero-click search study (~60% of US/EU Google searches end without a click)"
    url: "https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/"
  - label: "Gartner 2024 — predicts traditional search engine volume will drop 25% by 2026"
    url: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents"
faqs:
  - q: "How is a content audit different from the index bloat check in the 90-minute audit?"
    a: "Scope. The 90-minute audit's Block 3 gives you one number — the percentage of indexed pages earning a click — in 15 minutes, so you know whether content is your bottleneck. A content audit is the follow-up: every page gets pulled into an inventory and given one of four verdicts. One tells you if you have a problem. The other fixes it, page by page."
  - q: "How often should you run a full content audit?"
    a: "One full pass a year, plus a quarterly decay check on your top 50 pages. A full inventory of a large site is a multi-week project, not something you repeat monthly. Decay signals — traffic, ranking position, conversion rate — move fast enough that a quarterly glance catches problems before they compound into next year's audit."
  - q: "Does updating the publish date count as a refresh?"
    a: "No. A refresh means changing at least 15% of the page's substance — new data, a rewritten answer, current examples, a restructured section. Swapping the date, tweaking a sentence, or changing an image is tidying, not refreshing. Google and AI retrievers both see through a cosmetic date bump; neither rewards it."
  - q: "Will deleting pages hurt my rankings?"
    a: "No, usually the opposite. Dead pages dilute your site's authority and burn crawl budget on content nobody reads or cites. I've deleted 400 pages from a site and watched traffic go up. Fewer, stronger pages concentrate the signal Google and LLM retrievers use to decide who owns an answer — a sprawling inventory of thin pages does the reverse."
  - q: "How do you choose between merge and refresh when two pages compete for the same query?"
    a: "Check whether either page could stand alone as the definitive answer. If both are thin and neither wins outright, merge them into one page and redirect the loser. If one is genuinely stronger and the other adds nothing unique, refresh the strong page and prune or redirect the weak one. Two mediocre pages rarely add up to one great one without a rewrite."
  - q: "Do you need a paid crawler to build the inventory?"
    a: "No. Google Search Console and your analytics tool cover it — the same free stack as the 90-minute audit. A crawler earns its place later, on a large site, to catch orphaned pages GSC doesn't surface. For the inventory and the four verdicts, exports from tools you already have are enough."
---

<!--
PRODUCTION NOTES (do not publish this block)

SCHEMA
- Schema: Article + FAQPage + BreadcrumbList. Author Person schema for Sunny Patel, sameAs -> LinkedIn.
- FAQPage generated from front-matter faqs[] (6 pairs). Do not double-mark the visible FAQ section separately.
- Visible dateModified on page (author line). Refresh diary: January 2027, 15%+ substantive change — this page
  should eat its own dog food on the next pass.

DATA CONSISTENCY (locked upstream — do not restate differently)
- 8% median citation share = the informal 50-site pilot, owned by /research/citation-share-study/ and the pillar.
  Keep phrasing consistent with those pages on every refresh.
- "Citations lag Google rankings by ~1-2 months in our data" — same figure used in the pillar's timeline table.
- The 400-deleted-pages anecdote is Sunny's, already shipped verbatim in the pillar and the 90-minute audit page.
  Reuse it here, don't rewrite it into a different number.
- 15% substantive-change refresh rule — same threshold used in website-marketing-plan-template.md Q2 (weeks 18-23)
  and the pillar's Step 3. Do not quietly change the percentage here.

INBOUND PROMISES THIS PAGE MUST KEEP (grep "relink: /content/audit/" across content/ before editing)
- glossary/terms/information-gain.md — "Read up" line pairs this page with /content/information-gain/.
- website-marketing-plan-template.md — cites this as the Weeks 14-17 inventory method.
- website-marketing-audit.md (x2) — cites this as Block 3's "deep version" and the full-crawl escalation.
- seo-vs-geo-vs-cro.md — cites this for the "Thin" site state (low traffic still needs a clean inventory).
- website-marketing-budget.md — cites this as what feeds a clean inventory into digital PR / email.
- how-to-market-a-website.md — Step 3, matches the four-verdict table verbatim. Keep the verdict names identical:
  prune / merge / refresh / leave alone, in that order.

ROUTING FLAG for the team (not a content issue): the pillar and the 90-minute audit page both use /content/audit/
as the reader-facing path. Reconcile against the stack ADR's /content-ops/* mapping before launch.
-->

# Content Audit for Live Sites: Prune, Merge, Refresh or Leave Alone

**A content audit is a full inventory of every page on a live site, each one assigned exactly one verdict: prune, merge, refresh, or leave alone. It uses Search Console and analytics data, not opinion, and it ends with a dispositioned list — not a report nobody actions.** That's the whole job. Below is how to build the inventory, apply the verdicts, and run it without losing a quarter to it.

If you've run the **[90-minute website marketing audit](/strategy/audit/)**, you already know your index bloat number — the percentage of indexed pages that earned zero clicks in 90 days. That number is a smoke alarm. It tells you the building's on fire. It doesn't tell you which rooms to save. This page is the room-by-room walk-through: every page, one verdict, no page left in limbo.

> **TL;DR — the four verdicts**
> 1. [Prune](#what-are-the-four-verdicts-and-how-do-you-decide-between-them) — delete or redirect
> 2. [Merge](#how-do-you-spot-cannibalisation-before-it-costs-you-rankings) — combine competing pages into one
> 3. [Refresh](#what-actually-counts-as-a-refresh-the-15-rule) — rewrite 15%+ of the substance
> 4. [Leave alone](#what-are-the-four-verdicts-and-how-do-you-decide-between-them) — do nothing, on purpose

---

## Why Does a Content Audit Matter More Than Publishing More?

Because most of what's already on your site is quietly costing you, and adding to the pile doesn't fix that. **SparkToro's analysis of clickstream data found that around 60% of Google searches in the US and EU ended without a click in 2024** ([SparkToro, 2024](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/)). The remaining searches, and the AI answers replacing a chunk of them, go to the page that most clearly owns the answer — not the site with the most pages. **Gartner predicts traditional search engine volume will drop 25% by 2026** as users shift to AI chatbots ([Gartner, 2024](https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents)). Less search real estate means every page that stays on your site has to earn its place harder than it did in 2022.

"Publish more" is the reflex of people who never audited what they published last time. An inventory tells you what you're actually sitting on before you add to it: how many pages, which ones earn, which ones cost you crawl budget and topical clarity for nothing. Semrush's own Site Audit tool runs [140+ automated checks](https://www.semrush.com/blog/website-audit/) on a crawl — and every single one of them produces a finding, not a decision. A content audit is the opposite instinct: fewer numbers, harder verdicts, one action per page.

---

## How Is This Different from the 90-Minute Audit's Index Bloat Check?

Speed and depth. Block 3 of the **[90-minute audit](/strategy/audit/)** gives you a single bloat percentage in 15 minutes — clicked pages divided by indexed pages — so you know *whether* content is your bottleneck this quarter. If under 50% of your indexed pages earned a click in 90 days, that block tells you content operations is your first priority. What it doesn't give you is a page-by-page plan, because it can't — that's a different time box entirely.

This page is that plan. Where the 90-minute audit spends 15 minutes and produces one number, a content audit spends a working week (more, on a large site) and produces a dispositioned inventory: every URL, one verdict, one action, one owner. Run the 90-minute audit first if you haven't — it tells you whether this page is worth your time this quarter. If your bloat number came back under 50%, it is.

One boundary worth drawing before you start deleting: a page with zero clicks might not have a content problem at all. If it isn't indexed, or Google can't render it, that's a crawl or rendering fault, not a content one — send it to the **[technical SEO audit](/technical/audit/)** first. Pruning a page that was never given a fair shot at ranking isn't a verdict, it's a guess.

---

## How Do You Pull a Full Content Inventory from GSC and Analytics?

You need one spreadsheet, one row per URL, built from three exports. No paid crawler required — the same free stack as the 90-minute audit.

1. **Export every indexed URL.** Search Console → Indexing → Pages → export the indexed list. This is your row count.
2. **Export 12 months of performance by page.** Search Console → Performance → Pages tab, filtered to the last 12 months, then again for the prior 12 months so you can compare periods. Clicks, impressions, and average position, per URL.
3. **Export sessions and conversions by landing page.** GA4 (or your analytics) → Engagement or Life Cycle reports, filtered to landing page. You want sessions and whichever conversion event matters for that page type.
4. **Join the three on URL.** A page with GSC data but no GA4 row usually means the tracking is broken, not that nobody visits — flag it, don't verdict it yet.

Columns your sheet needs, minimum:

| Column | Source | Why it's there |
|---|---|---|
| URL | GSC indexed list | The row identity |
| Page type | Manual tag (money page / cluster / glossary / blog) | Some verdicts depend on role, not just numbers |
| Clicks, this 12 months vs prior 12 months | GSC Performance | The decay signal |
| Average position | GSC Performance | Ranking drift |
| Sessions, conversions | GA4 | Whether traffic does anything once it arrives |
| Top query | GSC Performance, Queries tab filtered by page | Cannibalisation spotting needs this |
| Last substantive update | Your CMS | Whether "refresh" is even on the table |
| Inbound links, if you track them | Optional | A page with real external links is a merge/refresh candidate before it's a prune candidate |
| Verdict | You fill this in | The actual output |
| Action + owner + deadline | You fill this in | The thing that makes it an audit and not a spreadsheet |

That last row matters more than it looks. A verdict column with no action, owner, or deadline next to it is what turns an audit into the 200-row report nobody finishes. Don't let this one join that pile.

---

## What Are the Four Verdicts, and How Do You Decide Between Them?

Every page on your site gets exactly one. No page gets "leave it for now" as a way of avoiding a decision — that's what "leave alone" is *for*, and it's a real verdict, not an excuse.

| Verdict | Traffic signal (12 months) | Ranking signal | Links / role | Action |
|---|---|---|---|---|
| **Prune** | Zero or near-zero clicks, no meaningful trend | Not ranking in the top 100 for anything a buyer searches | No inbound links, no citations, no strategic role | Delete, or 301-redirect to the nearest page that already owns the topic |
| **Merge** | Clicks split thinly across two or more URLs | Multiple pages ranking for the same query, none in the top 5 | Combined signal would outrank either page alone | Combine into one page, 301-redirect the rest, consolidate links |
| **Refresh** | Was earning clicks; down 20%+ over the comparison period | Ranked top 10 before, has slipped past page 1, or stalled just outside it | Still has links or citations; content is dated, not dead | Rewrite 15%+ of the substance — see the rule below |
| **Leave alone** | Stable or growing | Holding position | Healthy, already answers the query well | Nothing. Resist the itch to "improve" a page that isn't broken |

Read the table in order of how much it costs you to get wrong. Pruning a page that was actually a slow-burning refresh candidate is the expensive mistake — you lose whatever equity it had built. Refreshing a page that should have been pruned just wastes a writer's afternoon. When you're unsure, default toward refresh or merge over prune; deletion is the one verdict with no undo button once the redirect's live and the page is gone from the index.

Two verdicts deserve a second look before you commit:

**Prune vs. merge.** A page with zero traffic *and* no competing sibling is a prune. A page with zero traffic that's actually splitting demand with a stronger page on the same topic is a merge — the traffic isn't gone, it's just landing on the wrong URL. Check the "top query" column against every other row before you delete anything; you're looking for two rows fighting over one query.

**Refresh vs. leave alone.** The difference is decay, not age. A five-year-old page that's still ranking top 3 and converting is a leave-alone, however old the byline. A six-month-old page already sliding off page 1 is a refresh candidate today. Chase the trend line, not the calendar.

### Q&A: What if a page fits two verdicts at once?

**Pick the more aggressive one.** A page that's both a merge candidate (splitting a query with another URL) and a refresh candidate (content's gone stale) should be merged, not refreshed twice over — merge first, then refresh the single survivor. Doing refresh work on a page you're about to fold into another page is wasted effort; the content moves, the polish doesn't need to happen twice.

---

## What Decay Signals Tell You a Page Needs a Verdict?

Three signals, checked in this order, because each one is cheaper to pull than the next.

1. **Traffic decline.** Compare 12 months against the prior 12 months, per URL, straight from your GSC export. A page down 20%+ with no seasonal explanation is decaying. This is the cheapest signal to pull because it's already sitting in the export you did for the inventory.
2. **Ranking position drift.** Average position moving from single digits into double digits, or off page 1 entirely, over the same window. Position drift usually shows up a few weeks before the click drop does — it's your early warning, not your confirmation.
3. **Conversion rate decline on the page.** A page can hold its traffic and still be decaying if the content stopped matching what the visitor actually wanted — the query intent shifted underneath it. Pull this from GA4, segmented by landing page, same comparison window.

One signal that lags the other three, worth knowing so you don't over-read it: citation share. In our data, **citations lag Google rankings by roughly 1–2 months** — a page can already be sliding in traditional search while still showing up fine in your last AI-visibility check, because the answer engines haven't caught up to the drop yet. Don't treat a healthy citation number as proof a decaying page is fine. It's a trailing indicator here, not a leading one. If you're tracking this continuously rather than at audit time, that's exactly what **[AI citation monitoring](/measurement/citation-monitoring/)** is for.

---

## How Do You Spot Cannibalisation Before It Costs You Rankings?

Cannibalisation is two or more of your own pages competing for the same query, splitting the clicks and the ranking signal that one strong page would have collected on its own. It's the single most common finding on a site that's been publishing for years without an inventory discipline, and it's cheap to spot once you know where to look.

1. **Pull your top 50 queries by impressions** from GSC Performance, Queries tab.
2. **For each query, switch to the Pages tab with that query filter applied.** If two or more URLs show meaningful impressions for the same query, you've found a cannibalisation pair.
3. **Check whether either page could stand alone as the definitive answer.** If yes, that page gets refreshed and the other merged into it. If neither can, both fold into a new, single stronger page.

A worked example, shaped like a real inventory row:

> Query: "content audit checklist". Page A: 340 impressions, position 14. Page B: 290 impressions, position 11. Neither cracks the top 10 alone. Combined, that's 630 impressions worth of signal split two ways for no reason — a textbook merge. One page, one URL, the redirect carries whatever authority both pages had earned separately.

Cannibalisation is worth hunting before you prune anything, because a page that looks like a prune candidate in isolation sometimes turns out to be one half of a merge. Check the query overlap first; delete second.

---

## What Actually Counts as a Refresh? (The 15% Rule)

A refresh means changing at least 15% of the page's substance. Not the date. Not one sentence. Fifteen per cent of what the page actually says.

| Counts as substantive (the 15%) | Doesn't count |
|---|---|
| New data, a new stat, an updated figure | Changing the "last updated" date alone |
| A rewritten section that answers the question better | Swapping a synonym or two in the intro |
| Current examples replacing dated ones | Reformatting the same content into different headers |
| A restructured answer — new subheadings, a new table | Adding a single new paragraph to an otherwise untouched page |
| Filling a gap the page always had — a missing FAQ, a missing comparison | Changing the featured image |

Here's why the threshold is a number and not a vibe: a cosmetic pass is invisible to the reader who bounced last time and invisible to a model deciding whether your page or a competitor's has moved on since it last read either. Both are checking whether the *substance* changed. A date bump answers a question nobody asked.

Fifteen per cent is also the same threshold this site holds itself to — every page here, including this one, gets refreshed on the same rule on its next pass, not just tidied.

---

## Why Does Deleting Pages Grow Traffic?

Because a page that earns nothing still costs you three things: authority concentration, topical clarity, and — past a certain size — crawl budget. The first two cost you at any scale, and both get more expensive to waste as the amount of open web worth crawling shrinks.

**Authority concentration** is the biggest lever. A thin page doesn't just fail to help — it dilutes the **[topical authority](/glossary/topical-authority/)** signal your strong pages are trying to send. Google and LLM retrievers both read "how coherently does this site own this topic," and fifty thin pages scattered across a subject read as less coherent than five pages that clearly own it. I've deleted 400 pages from a site and watched traffic go up. Clients love that conversation right up until they see the graph — the instinct to keep everything is almost always wrong.

**Topical clarity** is the retrieval angle specifically. A model deciding what to cite is looking for the page that most clearly and completely owns an answer, not the site with the most pages on the subject. Sprawl reads as noise. A focused inventory reads as a source. If you want the deeper argument for why the pages you keep need to say something the model can't already generate, that's **[information gain](/content/information-gain/)** — read it alongside this page, because pruning and information gain are the same discipline pointed in opposite directions: one clears the dead weight, the other makes sure what's left is worth keeping.

**Crawl budget** comes last, and it's worth sizing honestly rather than inflating: under about 10,000 URLs it's a hobby worry, because Google crawls a small healthy site fine. Past that, every dead page a bot fetches is a fetch it didn't spend on a page that could rank, and the waste compounds with every batch you publish. More on where that line actually sits: **[crawl budget](/glossary/crawl-budget/)**.

None of this means delete aggressively without checking. It means every page that survives the audit should have a reason to exist beyond "we wrote it once." That's a lower bar than it sounds, and most sites still fail it on a third of their pages.

---

## How Do You Run This Without It Eating Your Quarter?

Batch it, and don't repeat the full pass more often than the data justifies.

- **One full inventory pass a year.** Every URL, all four verdicts, dispositioned. On a site with a few hundred pages this is a focused week; on a few thousand, budget a month and batch it by section rather than trying to eyeball the whole sheet in one sitting.
- **A quarterly decay check on your top 50 pages by traffic.** You don't need to re-audit the whole site every quarter — you need to catch a top performer sliding before it becomes next year's surprise. Pull the three decay signals above for those 50 rows and re-verdict anything that's moved.
- **Work the verdicts in this order:** prune first (fastest, cheapest, immediate crawl-budget relief), then merge (kills cannibalisation before it compounds), then refresh (the slowest line item — budget a writer's time against it), then confirm leave-alone last, because it needs the least attention and shouldn't eat time you owe the other three.
- **One owner and one deadline per row**, or the spreadsheet becomes exactly the kind of report this page argued against. If a row still says "TBD" after 90 days, that's not a pending verdict. That's a prune you're avoiding.

If you're sequencing this against the rest of your quarter, the **[website marketing playbook](/how-to-market-a-website/)** puts the content audit at the start of its Strengthen step — after the leaks are fixed, before anything gets amplified. Don't run this before the fix step is done. A beautifully pruned site sitting behind a broken checkout is still a broken checkout, and finding that checkout is the **[CRO audit](/conversion/audit/)**'s job, not this one's.

---

## FAQ

### How is a content audit different from the index bloat check in the 90-minute audit?

Scope. The **[90-minute audit's](/strategy/audit/)** Block 3 gives you one number — the percentage of indexed pages earning a click — in 15 minutes, so you know whether content is your bottleneck. A content audit is the follow-up: every page gets pulled into an inventory and given one of four verdicts. One tells you if you have a problem. The other fixes it, page by page.

### How often should you run a full content audit?

One full pass a year, plus a quarterly decay check on your top 50 pages. A full inventory of a large site is a multi-week project, not something you repeat monthly. Decay signals — traffic, ranking position, conversion rate — move fast enough that a quarterly glance catches problems before they compound into next year's audit.

### Does updating the publish date count as a refresh?

**No.** A refresh means changing at least 15% of the page's substance — new data, a rewritten answer, current examples, a restructured section. Swapping the date, tweaking a sentence, or changing an image is tidying, not refreshing. Google and AI retrievers both see through a cosmetic date bump; neither rewards it.

### Will deleting pages hurt my rankings?

**No**, usually the opposite. Dead pages dilute your site's authority and burn crawl budget on content nobody reads or cites. I've deleted 400 pages from a site and watched traffic go up. Fewer, stronger pages concentrate the signal Google and LLM retrievers use to decide who owns an answer — a sprawling inventory of thin pages does the reverse.

### How do you choose between merge and refresh when two pages compete for the same query?

Check whether either page could stand alone as the definitive answer. If both are thin and neither wins outright, merge them into one page and redirect the loser. If one is genuinely stronger and the other adds nothing unique, refresh the strong page and prune or redirect the weak one. Two mediocre pages rarely add up to one great one without a rewrite.

### Do you need a paid crawler to build the inventory?

**No.** Google Search Console and your analytics tool cover it — the same free stack as the 90-minute audit. A crawler earns its place later, on a large site, to catch orphaned pages GSC doesn't surface. For the inventory and the four verdicts, exports from tools you already have are enough.

---

## Run the Inventory This Quarter

Pull the three exports, build the sheet, verdict every row. If you haven't run the **[90-minute website marketing audit](/strategy/audit/)** yet, start there — it tells you in 90 minutes whether this is your quarter's priority or whether the leak is somewhere else entirely. If it comes back showing bloat, this is the page that turns that one number into a dispositioned list, row by row, with an owner and a deadline on every line.

*Written by Sunny Patel — in SEO since 2010, specialising in semantic SEO, topical authority and AI search. Last updated 8 August 2026.*
