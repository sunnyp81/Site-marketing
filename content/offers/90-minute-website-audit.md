# FILE 1 OF 2 — `/home/user/Site-marketing/content/offers/90-minute-website-audit.md`

```markdown
---
title: "The 90-Minute Website Audit — Done For You, £950, No Sales Call"
description: "The exact audit method published free at site.marketing, run on your site by the person who wrote it. Fixed price, 5-day turnaround, no discovery call."
slug: /offers/90-minute-audit
section: "Website Marketing Strategy"
cluster: strategy
type: offer
datePublished: 2026-07-23
dateModified: 2026-07-23
author: sunny
sources:
  - label: "site.marketing — Website Marketing Audit: The 90-Minute Framework (the free method this productises)"
    url: "/strategy/audit/"
faqs:
  - q: "How long does the 90-minute audit take to deliver?"
    a: "Five business days from the moment your intake form and read-only access land. The audit itself is 90 timed minutes; the write-up, the ranked fix list and the Loom take another three hours on top. You get all of it inside a week, with the timer screenshot attached so you can see the 90 minutes were real."
  - q: "What access do you need from me?"
    a: "Two read-only grants and a form: Google Search Console read-only, GA4 read-only, and a 10-question intake form about your site, your money pages and what you sell. No admin access, no CMS login, no passwords. The confirmation email walks you through granting viewer access in about four minutes."
  - q: "Does this work for ecommerce, SaaS and content sites?"
    a: "Yes, all three, if the site is at least two years old and past roughly 50 pages. The method audits an existing site with history and traffic, so the discipline mix shifts — checkout for ecommerce, signup and pricing for SaaS, index bloat and citation share for content sites — but the framework and the fixed price don't change."
  - q: "What if the audit doesn't find anything useful?"
    a: "Full refund if fewer than 10 of the 15 fixes are things you didn't already know about. No argument, no forms — reply to the delivery email and the money goes back the way it came. It hasn't happened yet. The day it does, your site earns a free public teardown slot instead, because a site that already knows its own 15 fixes is exactly the kind worth writing about."
  - q: "Does the Fix Sprint include implementation?"
    a: "No. Tier two adds one page rewritten as a worked example, a 60-day re-score, and two weeks of async Slack — so you can watch how one fix is done and copy the pattern across the other fourteen. You ship the rest. If you want the whole list built for you, that's a different conversation and not this product."
---

<!--
PRODUCTION NOTES (do not publish this block)

FILE SCOPE — READ FIRST.
This file ships TWO assets, separated by an `---` rule and headings:
  ASSET A = the public offer page (/offers/90-minute-audit) — sunny-voice, reader-facing, indexed.
  ASSET B = the client-facing delivery template — neutral-doc, noindex, NEVER served to readers.
The THIRD asset (pricing rationale, internal revenue math) is deliberately NOT in this file.
It lives at content/ops/90-minute-audit-pricing-rationale.md (noindex, robots-disallowed, sitemap-
excluded per the stack ADR). Per repo convention (see teardown-template.md / citation-share-study-
methodology.md), internal content lives in a SEPARATE FILE, never behind a comment fence — because
comment fences ship in repo source and rendered output. Pricing math one bad export from being served
is a footgun; keep it out of /offers/.

ASSET B (delivery template) must be published, if ever, ONLY as its own noindex asset or kept in repo
as a fill-in template. It is included here for co-authoring convenience because A and B legitimately
co-ship as one deliverable. If the build indexes content/offers/*, split B into
content/ops/90-minute-audit-delivery-template.md before launch.

SCHEMA (Asset A only)
- Schema: Product + Offer + FAQPage + BreadcrumbList. Author/seller Person schema for Sunny Patel,
  sameAs -> LinkedIn (same @id as /about/, per positioning deck — one @id sitewide).
  - Product.name = "90-Minute Website Audit". Two Offers under one Product:
      Offer 1: price 950, priceCurrency GBP, availability LimitedAvailability (4 slots/mo).
      Offer 2: price 2400, priceCurrency GBP, name "Audit + Fix Sprint".
    priceValidUntil set to the next price-rise review; see pricing rationale for the trigger.
  - FAQPage: generated from front-matter faqs[] (5 pairs). Do not double-mark the visible FAQ separately.
- Visible dateModified on page (author line). Refresh when price changes (see rationale doc).

INFRA / ASSETS
- Payment: two Stripe Payment Links (no cart), one per Offer, embedded as buttons in the pricing block.
  On success, Stripe redirect -> thank-you route that (a) states "check your inbox in 2 minutes",
  (b) links the Tally intake form directly as a fallback. Post-payment email (transactional, e.g.
  via Stripe/ESP) fires immediately: contains the intake form link + the read-only access instructions
  (GSC viewer + GA4 viewer, step-by-step). This is the "what happens 10 seconds after I pay" moment;
  it must be wired before the page goes live or the no-call promise breaks on day one.
- Intake: Tally form, 10 questions, submission -> email to Sunny + autoresponder confirming the 5-day clock.
- Walkthrough: Loom (async, no live meeting). Optional post-delivery Q&A: 30-min Cal.com/Calendly link
  sent WITH the delivery, not before.

CONTENT DEPENDENCIES (sequencing — do not launch until resolved)
- HARD: /strategy/audit/ (the free method) MUST be live before this page publishes. It IS live
  (content/clusters/strategy/website-marketing-audit.md). The wedge collapses to ordinary consulting
  copy without it. This is the one sequencing rule that cannot be broken.
- PROOF DEPENDENCY: the proof section links /teardowns/ as "the audit done in public". As of writing,
  only /teardowns/methodology (Part A) and the internal template exist — NO named-site teardown PAGES
  are published yet. Until at least one teardown is live, the "every teardown is this audit, in public"
  line is an empty link. The proof bullet is therefore phrased as a standing property of the teardown
  FORMAT (true by construction — the format mandates full published scorecards) and links the methodology
  page only. Once the first named teardown is live, upgrade the link target to /teardowns/ and add a
  "read one" invitation. Flagged, same class as the /strategy/audit/ dependency.
- DEFERRED INTERNAL LINKS (not in the 20-page launch batch; will 404 until their sections ship):
    /conversion/audit/   -> Section 5 (CRO)         — used in A8 FAQ + Asset B B3
    /technical/audit/    -> Section 4 (Technical)   — used in A8 FAQ + Asset B B3
    /distribution/digital-pr/ -> Section 6          — used in Asset B B3/B6
    /measurement/ai-traffic/ , /measurement/citation-monitoring/ -> Section 7 — Asset B B3
    /distribution/email/ -> Section 6 (price-rise announce channel, see rationale)
  LIVE day-one, safe to link: /strategy/audit/ , /content/audit/ , /how-to-market-a-website/ ,
    /visibility/geo/ , /strategy/plan-template/ , /strategy/budget/ , /strategy/seo-vs-geo-vs-cro/ ,
    /research/citation-share-study/ , /teardowns/methodology/ , /glossary/geo/ , /glossary/aeo/
  Gate every DEFERRED link behind its section's publication, or wrap it to fall back to the pillar step
  anchor (same pattern as the homepage deck). Do not ship the paid deliverable (Asset B) with 404s.

URL CONVENTION: trailing slash on every internal link, per the pillar and the audit page. The topical
map writes them slash-less — trust the pillar, not the map (see positioning deck note).

DATA CONSISTENCY (locked upstream — do not restate differently)
- 8% median citation share = the informal 50-site pilot; >=30% = "good". Owned by
  /research/citation-share-study/ and the pillar. Same phrasing here.
- 14 years in SEO (not "a decade") — matches /about/ and the audit page author line. Keep it 14.
- The free method's central claim is "an audit ends in a fix list, NOT a score" (/strategy/audit/).
  Asset B therefore leads with the ranked fix list and treats the readiness scorecard as orientation,
  never as the headline deliverable. Do not turn the /70 into a vanity score — it would contradict the
  exact public method the client paid to receive.
- The pillar's framework is FIVE disciplines (Visibility, Technical, Content, Conversion, Distribution).
  The seven scorecard rows = those five PLUS strategy & sequencing PLUS measurement. Never write "the
  seven disciplines" — the pillar says five, and this product's whole pitch is that readers can check
  the pages side by side.
- The free method's fix list caps at TEN ("take the top ten, delete the rest") and its rubric is
  "Priority = Revenue impact ÷ Effort" — exact phrasing. The paid deliverable caps at 15. The
  ten-vs-fifteen reconciliation line (Asset A "What You Get", Asset B section 3) is deliberate; keep it
  wherever both numbers appear, or side-by-side readers will call it a contradiction.
- Teardowns score /30 on six outside-in metrics; the delivery doc's readiness scorecard is /70 across
  seven rows. They share the 20-prompt citation instrument, NOT the scorecard. Never claim teardowns are
  "scored the same way" as the paid audit.
-->

# The 90-Minute Website Audit — Done For You, £950, No Sales Call

The entire method is free. It's published at [the 90-minute audit framework](/strategy/audit/) — five timed blocks, the six numbers, the fix-list rubric, all of it. Read it. Run it on your own site this afternoon. Nothing on this page is a secret you have to pay to unlock.

Or pay me £950 and I'll run it on your site this week instead. Same method, done for you, by the person who wrote it down. Fixed price on the page. Fixed scope on the page. No discovery call, no proposal, no "let's hop on a quick chat to understand your needs".

This is a product, not a pitch. You know what you're getting and what it costs before you click. That's the whole idea.

## What You Get

Four things, specified, no surprises.

| Deliverable | Spec |
|---|---|
| **Findings document** | Seven scored sections — the [playbook](/how-to-market-a-website/)'s five disciplines, plus strategy and measurement — each with a readiness read and one line of evidence. Fix-list-first, exactly like the free method: a decision, not a 40-page report. |
| **The 15 fixes** | Exactly 15, ranked by the free method's own rubric — Priority = Revenue impact ÷ Effort. Each fix carries an owner, a tool, and a time estimate, so it's a to-do list on Monday, not a wishlist. |
| **20-minute Loom** | Recorded walkthrough of the findings and the top fixes. You watch it when you want. No calendar Tetris, no live meeting. |
| **30-minute Q&A call** | *After* delivery, optional. Once you've read the doc and want to argue with it. This is the only call in the entire product, and it's yours to skip. |

You also get the 90-minute timer screenshot in the doc, because I said 90 minutes and you should be able to check I meant it.

One number needs explaining before you hold the two pages side by side. The free method says take your top ten fixes and delete the rest. Done for you, you get fifteen — same rubric, same delete-the-rest rule. Fourteen years just turns up a longer raw list to rank from, and the guarantee below is priced against all fifteen.

## What This Is Not

Five things I'm not selling you, so nobody's disappointed.

- **Not a 200-point crawler dump.** A machine can already give you 200 "notices" for free. Nobody has ever finished reading one. You're paying for the fifteen that matter, ranked.
- **Not a retainer pitch in a trench coat.** The deliverable is the deliverable. If the audit is the start of a beautiful monthly invoice, I've done it wrong.
- **Not a "let's get on a call to scope it out".** The scope is printed above. Discovery calls are unpaid consulting auditions and we both know it.
- **Not implementation.** I tell you the 15 fixes and how to do them. Your team ships them. (Want one done as a worked example? That's tier two, below.)
- **Not a proposal for a bigger audit.** This *is* the audit. There is no fuller version I'm holding back for £6k.

## Who Runs It

Me. Sunny Patel. I've spent 14 years in SEO, these days on topical authority and entity SEO — the two things that decide whether Google and the answer engines actually trust your site.

The 8% number you'll see quoted all over this site is mine: I ran the audits myself, 50 established sites, 20 buyer-language prompts each, across ChatGPT, Perplexity and Gemini. Median citation share before any GEO work: **8%**. Not a stat I borrowed. One I collected. Your audit gets scored against that benchmark and the 30% "good" line.

No juniors, no white-label, no "our team of specialists". One named human with mileage runs your audit start to finish. [Here's my LinkedIn](https://www.linkedin.com/in/sunny-patel-co-uk/) if you want to check the mileage is real.

**You're not paying for 90 minutes of my time.** The audit is 90 timed minutes; writing it up properly takes another three hours. You're paying for the fourteen years that make 90 minutes enough.

## How It Works

Four steps, and you're only in the room for one of them.

1. **Pay.** Stripe link on this page. Card, done, ten seconds.
2. **Check your inbox.** Within two minutes you get one email: a link to the 10-question intake form (Tally) and step-by-step instructions to grant two read-only accesses — **Google Search Console (read-only)** and **GA4 (read-only)**. No passwords, no admin, no CMS login. Granting both takes about four minutes.
3. **I run the 90 minutes.** Timed, on your site, using the exact public method. The timer screenshot ships with the doc.
4. **Delivery within 5 business days.** Findings, the 15 fixes, the Loom, and a link to book the optional Q&A if you want it. The clock starts when your form and access land, not when you pay — so the sooner you fill the form, the sooner it's done.

That's it. No status calls, no "just circling back", no kickoff meeting. The next time you hear from me, the audit's done.

## The Method Is the Proof

There's no case-study carousel here. The proof is that you can check my work before you buy.

- **The method is public.** [Read the whole framework](/strategy/audit/). Every block, every threshold, the exact fix-list rubric. Buying the audit buys you the doing, not the knowing.
- **The audit, done in public, for free.** Every named-site [teardown](/teardowns/methodology/) on this site runs the same 20-prompt citation instrument on a real company, outside-in, and publishes the full scorecard — the scoring rules went public before any scores did. That's the audit with the lights on. What you get privately is the same instrument pointed at your site, plus the inside view your GA4 and Search Console access unlocks.
- **The benchmark is real.** Your citation share gets measured against the [50-site pilot median of 8%](/research/citation-share-study/) — the same original data that anchors the whole [playbook](/how-to-market-a-website/). You leave knowing your number, not a vibe.

### Can I just do this myself?

Yes. Genuinely. [The method is here](/strategy/audit/), it's free, and it's complete. If you've got a spare 90 minutes and the discipline to rank the fixes instead of collecting them, do it yourself and keep the £950. Most people who land on this page have already read the free version and know they won't. That's the entire market for this product, and I'm fine saying so out loud.

### Why is there no discovery call?

Because the scope is fixed, so there's nothing to discover. A discovery call is what you run when the price and the deliverable are negotiable and you're feeling out how much someone will pay. Nothing here is negotiable. Save us both the half hour.

### What if you find nothing?

Then you get your money back. See the guarantee, next.

## The Guarantee

Fewer than 10 of the 15 fixes are things you didn't already know about? Full refund, no argument. It hasn't happened yet — every site past two years old and 50 pages has more than ten fixable leaks it can't see, that's just true. But the day a site proves me wrong, it earns a free public teardown slot instead, because a site that already knows its own 15 fixes is exactly the kind I want to write about.

## Pricing

Two tiers. Both prices are on the page because that's the point of the whole product.

| | **Audit — £950** | **Audit + Fix Sprint — £2,400** |
|---|---|---|
| The findings document | ✓ | ✓ |
| The 15 ranked fixes | ✓ | ✓ |
| 20-minute Loom walkthrough | ✓ | ✓ |
| Optional 30-min Q&A call | ✓ | ✓ |
| 2 weeks of async Slack with me | — | ✓ |
| Re-score of the 15 fixes after 60 days | — | ✓ |
| One page rewritten as a worked example | — | ✓ |

*Tier two is for teams that want to see one fix done properly before they do the other fourteen. It's not implementation — it's one worked example plus two weeks of me on Slack while you ship the rest.*

<!-- STRIPE: embed Payment Link buttons here. Button 1 -> £950 Offer. Button 2 -> £2,400 Offer. -->

**[ Book the Audit — £950 ]**  ·  **[ Book Audit + Fix Sprint — £2,400 ]**

**4 slots a month.** Solo operator, no juniors, no white-labelling — so when they're gone, they're gone until next month. The scarcity isn't a countdown-timer trick; it's just how many audits one person can do properly.

## FAQ

### How long does the 90-minute audit take to deliver?

Five business days from the moment your intake form and read-only access land. The audit itself is 90 timed minutes; the write-up, the ranked fix list and the Loom take another three hours on top. You get all of it inside a week, with the timer screenshot attached so you can see the 90 minutes were real.

### What access do you need from me?

Two read-only grants and a form: Google Search Console read-only, GA4 read-only, and a 10-question intake form about your site, your money pages and what you sell. No admin access, no CMS login, no passwords. The confirmation email walks you through granting viewer access in about four minutes.

### Does this work for ecommerce, SaaS and content sites?

Yes, all three, if the site is at least two years old and past roughly 50 pages. The method audits an existing site with history and traffic, so the discipline mix shifts — checkout for ecommerce, signup and pricing for SaaS, index bloat and citation share for content sites — but the framework and the fixed price don't change. If you only want the [CRO slice](/conversion/audit/), the [content slice](/content/audit/) or the [technical slice](/technical/audit/), those checklists are free too.

<!-- GATE: /conversion/audit/ and /technical/audit/ are DEFERRED (see production notes). Point them at the pillar step anchors until those sections ship. /content/audit/ is live. -->

### What if the audit doesn't find anything useful?

Full refund if fewer than 10 of the 15 fixes are things you didn't already know about. No argument, no forms — reply to the delivery email and the money goes back the way it came. It hasn't happened yet. The day it does, your site earns a free public teardown slot instead, because a site that already knows its own 15 fixes is exactly the kind worth writing about.

### Does the Fix Sprint include implementation?

No. Tier two adds one page rewritten as a worked example, a 60-day re-score, and two weeks of async Slack — so you can watch how one fix is done and copy the pattern across the other fourteen. You ship the rest. If you want the whole list built for you, that's a different conversation and not this product.

---

*Written by Sunny Patel — 14 years in SEO, specialising in topical authority and entity SEO. Last updated 23 July 2026. The method this productises is free: [the 90-minute website marketing audit](/strategy/audit/).*

<!-- ============================================================================
     ASSET B — CLIENT-FACING DELIVERY TEMPLATE  (NOINDEX — NEVER SERVED TO READERS)
     Register: neutral-doc. Findings must read as findings, not as a feed.
     Sunny-voice permitted ONLY in the two fields explicitly marked {{verdict}}.
     Ships as markdown with {{placeholders}} so one audit fills in under ~3 hours
     and can later be semi-automated. Structure mirrors the free /strategy/audit/
     method so the client can hold the free page and the paid doc side by side.
     ============================================================================ -->

# 90-Minute Website Audit — Findings for {{site}}

**Site:** {{site}}
**Audit date:** {{date}}
**Prepared by:** Sunny Patel, site.marketing
**Method:** The public [90-Minute Website Marketing Audit](/strategy/audit/), run in full. Timer screenshot attached below — the 90 minutes were real.

`{{timer_screenshot}}`  *(90-minute timer, start to stop. Also stated in words: {{timer_start}} → {{timer_stop}}.)*

**Readiness scorecard: {{score_total}} / 70.** Read this as orientation, not as the deliverable. As the free method says: an audit ends in an ordered fix list, not a score. The score tells you where the site sits; **the 15 fixes below tell you what to do.**

---

## 1. One-Page Verdict

*(Three sentences, forward this to whoever signs the cheque.)*

{{verdict_sentence_1}} {{verdict_sentence_2}} {{verdict_sentence_3}}

**The single biggest fix:** {{biggest_fix}} — {{biggest_fix_one_line_why}}

<!-- sunny-voice permitted in {{verdict_sentence_*}} above — this is the one page a CEO reads. Keep it dry, keep it true, no jokes that outrun the evidence. -->

---

## 2. Readiness Scorecard

Seven rows — the [playbook](/how-to-market-a-website/)'s five disciplines, plus strategy and measurement — each scored /10 with one line of evidence. The score orients; the fix list decides. Each row names which block of the [free method](/strategy/audit/) produced its evidence, so the paid doc and the public page line up.

| Area | Score /10 | Evidence (one line) | Source block | Go deeper (free) |
|---|---|---|---|---|
| Strategy & sequencing | {{s_strategy}} | {{e_strategy}} | Block 5 fix-list | [Playbook](/how-to-market-a-website/) |
| Search visibility (SEO + GEO) | {{s_visibility}} | {{e_visibility}} | Block 2 (20-prompt) | [GEO for established sites](/visibility/geo/) |
| Content operations | {{s_content}} | {{e_content}} | Block 3 (index bloat) | [Content audit](/content/audit/) |
| Technical foundation | {{s_technical}} | {{e_technical}} | Block 3 / Block 4 | [Technical SEO audit](/technical/audit/) |
| Conversion (CRO) | {{s_cro}} | {{e_cro}} | Block 4 (money pages) | [CRO audit](/conversion/audit/) |
| Distribution & demand | {{s_distribution}} | {{e_distribution}} | Block 2 ("who cited instead") | [Digital PR](/distribution/digital-pr/) |
| Measurement | {{s_measurement}} | {{e_measurement}} | Block 1 (six numbers) | [Tracking AI traffic](/measurement/ai-traffic/) |
| **Total** | **{{score_total}} / 70** | Citation share: {{citation_share}}% (median 8%, good ≥30%) | — | [The benchmark](/research/citation-share-study/) |

<!-- FILL NOTE: every "Go deeper" link that isn't live yet (see production notes: /conversion/audit/,
/technical/audit/, /distribution/digital-pr/, /measurement/ai-traffic/) must be either omitted or
pointed at the pillar step anchor before this doc leaves your outbox. A paid deliverable does not ship
with 404s. Live-today links: /how-to-market-a-website/, /visibility/geo/, /content/audit/,
/research/citation-share-study/. -->

---

## 3. The 15 Fixes

Exactly 15, ranked by the free method's own rubric: Priority = Revenue impact ÷ Effort, sorted descending. The public method caps a self-run list at ten; a done-for-you pass ranks a longer raw list, so the cap here is fifteen — the same delete-the-rest rule still applies. Not 40. A 40-item list is a way of hiding that you don't know which five matter. These are the five that matter, and the ten after them.

| # | Fix | Area | Effort (S/M/L) | Expected impact | Owner | Tool | Suggested deadline |
|---|---|---|---|---|---|---|---|
| 1 | {{fix_1}} | {{fix_1_disc}} | {{fix_1_effort}} | {{fix_1_impact}} | {{fix_1_owner}} | {{fix_1_tool}} | {{fix_1_deadline}} |
| 2 | {{fix_2}} | {{fix_2_disc}} | {{fix_2_effort}} | {{fix_2_impact}} | {{fix_2_owner}} | {{fix_2_tool}} | {{fix_2_deadline}} |
| 3 | {{fix_3}} | {{fix_3_disc}} | {{fix_3_effort}} | {{fix_3_impact}} | {{fix_3_owner}} | {{fix_3_tool}} | {{fix_3_deadline}} |
| 4 | {{fix_4}} | {{fix_4_disc}} | {{fix_4_effort}} | {{fix_4_impact}} | {{fix_4_owner}} | {{fix_4_tool}} | {{fix_4_deadline}} |
| 5 | {{fix_5}} | {{fix_5_disc}} | {{fix_5_effort}} | {{fix_5_impact}} | {{fix_5_owner}} | {{fix_5_tool}} | {{fix_5_deadline}} |
| 6 | {{fix_6}} | {{fix_6_disc}} | {{fix_6_effort}} | {{fix_6_impact}} | {{fix_6_owner}} | {{fix_6_tool}} | {{fix_6_deadline}} |
| 7 | {{fix_7}} | {{fix_7_disc}} | {{fix_7_effort}} | {{fix_7_impact}} | {{fix_7_owner}} | {{fix_7_tool}} | {{fix_7_deadline}} |
| 8 | {{fix_8}} | {{fix_8_disc}} | {{fix_8_effort}} | {{fix_8_impact}} | {{fix_8_owner}} | {{fix_8_tool}} | {{fix_8_deadline}} |
| 9 | {{fix_9}} | {{fix_9_disc}} | {{fix_9_effort}} | {{fix_9_impact}} | {{fix_9_owner}} | {{fix_9_tool}} | {{fix_9_deadline}} |
| 10 | {{fix_10}} | {{fix_10_disc}} | {{fix_10_effort}} | {{fix_10_impact}} | {{fix_10_owner}} | {{fix_10_tool}} | {{fix_10_deadline}} |
| 11 | {{fix_11}} | {{fix_11_disc}} | {{fix_11_effort}} | {{fix_11_impact}} | {{fix_11_owner}} | {{fix_11_tool}} | {{fix_11_deadline}} |
| 12 | {{fix_12}} | {{fix_12_disc}} | {{fix_12_effort}} | {{fix_12_impact}} | {{fix_12_owner}} | {{fix_12_tool}} | {{fix_12_deadline}} |
| 13 | {{fix_13}} | {{fix_13_disc}} | {{fix_13_effort}} | {{fix_13_impact}} | {{fix_13_owner}} | {{fix_13_tool}} | {{fix_13_deadline}} |
| 14 | {{fix_14}} | {{fix_14_disc}} | {{fix_14_effort}} | {{fix_14_impact}} | {{fix_14_owner}} | {{fix_14_tool}} | {{fix_14_deadline}} |
| 15 | {{fix_15}} | {{fix_15_disc}} | {{fix_15_effort}} | {{fix_15_impact}} | {{fix_15_owner}} | {{fix_15_tool}} | {{fix_15_deadline}} |

*Hard cap: 15. If a sixteenth thing needs doing, it wasn't in the top 15 this quarter. Re-run the audit next quarter and it might be.*

---

## 4. Where Each Fix Sits in the Sequence

The [playbook](/how-to-market-a-website/) has one order: **Measure → Fix → Strengthen → Amplify.** Every fix above is tagged to a stage, so you don't amplify a leak. Do them top-down within each stage, left-to-right across stages.

| Stage | Fixes (by #) | What this stage is for |
|---|---|---|
| **Measure** | {{stage_measure_fixes}} | Know the number before you touch it. Mostly already done in this audit. |
| **Fix** | {{stage_fix_fixes}} | Plug the technical and conversion leaks. Do these first. |
| **Strengthen** | {{stage_strengthen_fixes}} | Make the content worth ranking and worth citing. |
| **Amplify** | {{stage_amplify_fixes}} | Distribute a site that's finally worth distributing. Last, never first. |

**Amplifying a leaky site is paying to lose faster.** If any Amplify-stage fix is tempting you before the Fix-stage ones are done, that's the audit telling you to wait.

---

## 5. What I Didn't Check, and Why

This is triage, not surgery — the same deliberate exclusions as the [free method](/strategy/audit/). Each skipped item names the condition that earns it a deeper, separate look.

- **Full site crawl.** {{crawl_note}} Earns a look when the index-bloat finding needs a page-by-page prune list — a [content audit](/content/audit/).
- **Backlink profile.** {{backlink_note}} Earns a look when brand mentions are what's holding citation share down — a [digital PR](/distribution/digital-pr/) job.
- **Deep technical dive (log files, rendering forensics).** {{technical_note}} Earns a look when GSC can't confirm crawl-budget waste — a [technical SEO audit](/technical/audit/).
- **Keyword research / new-content planning.** {{keyword_note}} Different job: this audit reads what the live site *does*, not what it could rank for.
- **{{extra_skip}}** {{extra_skip_note}}

---

## 6. Your Next 90 Days If You Do Nothing Else

Skip the other twelve and this quarter still moves. Three fixes, one paragraph each.

**1. {{next_1_title}}.** {{next_1_para}}

**2. {{next_2_title}}.** {{next_2_para}}

**3. {{next_3_title}}.** {{next_3_para}}

---

*Questions? Book the optional 30-minute Q&A: {{qa_call_link}}. Or reply to the delivery email — I read those. Re-run this audit yourself any quarter, free, with [the public framework](/strategy/audit/).*

<!-- DATA MODEL (spec): this template is markdown with {{placeholders}}. The fillable fields are:
{{site}}, {{date}}, {{timer_screenshot}}, {{timer_start}}, {{timer_stop}}, {{score_total}},
seven {{s_*}} scores + seven {{e_*}} evidence lines, {{citation_share}},
{{verdict_sentence_1..3}}, {{biggest_fix}}, {{biggest_fix_one_line_why}},
fifteen fix rows (fix_N + _disc/_effort/_impact/_owner/_tool/_deadline),
four {{stage_*_fixes}} groupings, five skip notes, three {{next_*}} pairs, {{qa_call_link}}.
Target fill time: under 3 hours per audit. Semi-automation path: intake form + GSC/GA4 read-only ->
prefill {{site}}, six numbers, index counts; the human writes verdict, fixes and stage mapping. -->
```

# FILE 2 OF 2 — `/home/user/Site-marketing/content/ops/90-minute-audit-pricing-rationale.md`

```markdown
---
title: "Pricing Rationale: The 90-Minute Website Audit (Internal)"
description: "Why the productised 90-minute audit is priced at £950 / £2,400, why exactly two tiers, why no lite tier, and the price-rise trigger. Internal — not for publication."
slug: /ops/90-minute-audit-pricing-rationale
type: internal
noindex: true
dateModified: 2026-07-23
author: sunny
---

<!--
NOT FOR PUBLICATION. INTERNAL PRICING + REVENUE MATH.
- Lives under /ops/* — noindex, robots-disallowed (Disallow: /ops/), sitemap-excluded per the stack ADR
  (content/ops/stack-and-scaffold.md). This is the correct home for internal revenue numbers, NOT
  content/offers/, and NOT a comment fence inside the offer page (fences ship in rendered output).
- Pairs with content/offers/90-minute-website-audit.md (Assets A + B). Kept as a separate file on purpose.
- If /ops/ robots/sitemap exclusion is ever weakened, this file must be moved out of any built collection.
-->

# Pricing Rationale — 90-Minute Website Audit (Internal)

This records why the productised audit is priced the way it is. It is binding on the offer page copy: if a number changes here, the page changes, and vice versa. Internal only.

## 1. Anchor Math

£950 is priced as an outcome, sold against agency alternatives, and only sanity-checked against hours — never justified by them.

- **True delivery time:** ~4.5 hours. 90 timed minutes of audit + ~3 hours write-up, fix ranking and Loom.
- **Implied rate:** £950 ÷ 4.5h ≈ **£211/hr**. That number never appears on the page. The buyer is paying for the decision and the 14 years behind it, not the clock.
- **Why the buyer accepts it:** the alternative is worse on every axis.

| | Typical agency audit | This audit |
|---|---|---|
| Price | £3,000–£8,000 | £950 (fixed, on the page) |
| Time to start | 1–3 week discovery + proposal | Same day: pay → form → access |
| Deliverable | 100–200 page report, unranked | 15 ranked fixes + Loom, fix-list-first |
| Calls before you buy | 1–2 discovery calls | Zero |
| Who does it | Junior + account manager | Named operator, start to finish |
| Refund if it's thin | Rare / never | Full, if <10 of 15 fixes are new |

The page competes on **certainty and speed**, not on being cheap. £950 is cheap relative to £3–8k, but it's positioned as "the audit without the theatre", not "the budget audit".

## 2. Why Exactly Two Tiers

Two tiers, no more. One is the product; one pays for the month.

- **Tier 1 (£950) is the product.** It's the thing being sold, the thing the free method proves, the thing the guarantee covers.
- **Tier 2 (£2,400) is the upsell that funds capacity.** Async Slack + 60-day re-score + one worked-example page rewrite. It's not implementation — it's the "show me one done" tier for teams that need to see the pattern before they trust the list.

**Capacity math at 4 slots/month:**

| Mix (of 4 slots) | Monthly | Annual (× 12) |
|---|---|---|
| 4 × Tier 1 | £3,800 | £45,600 |
| 2 × Tier 1 + 1 × Tier 2 (typical) | £4,300 | £51,600 |
| Full Tier 2 (not the goal) | £9,600 | £115,200 |

The realistic ceiling is **~£51,600/yr solo**, and that's fine — it's deliberately capped. The audit is a proof-of-competence and trust engine for the rest of site.marketing (tooling, larger consulting), not the whole business. Scarcity ("4 slots") is real, not a copy device: it's the actual limit of one person doing them properly.

## 3. Why No £299 Lite Tier

There will never be a lite tier, because **the free page is the lite tier.**

A £299 "starter audit" would sit directly between the free [90-minute framework](/strategy/audit/) and the £950 done-for-you version, and it would lose to both. Cheaper than £950 means cutting scope; the only scope left to cut is the human judgement that's the entire value. A £299 audit is either the free method with an invoice stapled to it, or a worse version of the £950 one. Both cannibalise, neither adds.

This is the wedge restated as pricing strategy: the method is free, the doing is £950, and there is nothing in between worth selling. The gap is the product.

## 4. Price-Rise Trigger

Fixed, so it's not a judgement call in the moment:

- **Trigger:** two consecutive months sold out (all 4 slots).
- **Action:** £950 → £1,250 (Tier 1); Tier 2 £2,400 → £2,900. (Not strictly proportional — +32% vs +21% — and doesn't need to be: Tier 1 slots are the constrained resource.)
- **No grandfathering.** New price applies to the next booking. Fixed-price product; the fixed price is allowed to change, but not per-customer.
- **Announcement:** to the [email list](/distribution/email/) one week ahead, framed as "slots got scarce, price reflects it" — honest, not FOMO theatre.
- **Page update:** offer page copy, both Stripe Payment Links, Product/Offer schema `price` and `priceValidUntil`, and the delivery-template benchmark line all update the same day. Single source of truth is this file; the page follows.

<!-- DEPENDENCY: /distribution/email/ (Email as a Distribution Moat cluster, Section 6) is NOT written
yet. The price-rise announcement channel therefore doesn't exist at launch. Interim: announce via the
same transactional/ESP list used for delivery emails until the email cluster + list ship. -->
```