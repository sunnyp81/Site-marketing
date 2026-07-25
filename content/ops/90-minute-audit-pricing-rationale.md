---
title: "Pricing Rationale: The Audit and Action Plan (Internal)"
description: "Why the audit and action plan is priced at £450 / £1,200, why exactly two tiers, why no lite tier, and the price-rise trigger. Internal — not for publication."
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

# Pricing Rationale — Audit and Action Plan (Internal)

This records why the productised audit is priced the way it is. It is binding on the offer page copy: if a number changes here, the page changes, and vice versa. Internal only.

## 1. Anchor Math

£450 is priced as an outcome, sold against agency alternatives, and only sanity-checked against hours — never justified by them.

- **True delivery time:** ~4.5 hours. 90 timed minutes of audit + ~3 hours write-up, fix ranking and Loom.
- **Implied rate:** £450 ÷ 4.5h ≈ **£100/hr**. That number never appears on the page. The buyer is paying for the decision and the experience behind it, not the clock.

> **£450 was set by the owner**, replacing the £950 this document originally argued
> for. Everything downstream has been recomputed. Two things still need a decision:
>
> 1. **£100/hr sits below the £150–£300/hr consulting range published on
>    sunnypatel.co.uk.** That is a choice, not an error — the audit works as a
>    loss-leading trust engine that feeds retainers. But say which it is, because
>    the two readings imply different follow-up offers. Alternatively the 4.5h
>    delivery estimate is padded and the real rate is higher.
> 2. **The £495 audit already sold on sunnypatel.co.uk covers the same
>    technical/content/AI-visibility ground**, in 5 days, credited to the first
>    retainer month. At £450 these are near-identical products at near-identical
>    prices on two domains owned by the same person. Either differentiate this one
>    on GEO/citation-share specifically, or point site.marketing at the existing
>    £495 offer and drop this page. This is the real open question.
>
> **Tier 2 was repriced to £1,200** to preserve the 2.5x ratio this document argued
> for (£2,400 against £950). That ratio is inherited reasoning, not an owner
> decision — confirm it.
- **Why the buyer accepts it:** the alternative is worse on every axis.

| | Typical agency audit | This audit |
|---|---|---|
| Price | £3,000–£8,000 | £450 (fixed, on the page) |
| Time to start | 1–3 week discovery + proposal | Same day: pay → form → access |
| Deliverable | 100–200 page report, unranked | 15 ranked fixes + Loom, fix-list-first |
| Calls before you buy | 1–2 discovery calls | Zero |
| Who does it | Junior + account manager | Named operator, start to finish |
| Refund if it's thin | Rare / never | Full, if <10 of 15 fixes are new |

The page competes on **certainty and speed**, not on being cheap. £450 is cheap relative to £3–8k, but it's positioned as "the audit without the theatre", not "the budget audit".

## 2. Why Exactly Two Tiers

Two tiers, no more. One is the product; one pays for the month.

- **Tier 1 (£450) is the product.** It's the thing being sold, the thing the free method proves, the thing the guarantee covers.
- **Tier 2 (£1,200) is the upsell that funds capacity.** Async Slack + 60-day re-score + one worked-example page rewrite. It's not implementation — it's the "show me one done" tier for teams that need to see the pattern before they trust the list.

**Capacity math at 4 slots/month:**

| Mix (of 4 slots) | Monthly | Annual (× 12) |
|---|---|---|
| 4 × Tier 1 | £1,800 | £21,600 |
| 2 × Tier 1 + 1 × Tier 2 (typical) | £3,300 | £39,600 |
| Full Tier 2 (not the goal) | £4,800 | £57,600 |

The realistic ceiling is **~£39,600/yr solo**, and that's fine — it's deliberately capped. The audit is a proof-of-competence and trust engine for the rest of site.marketing (tooling, larger consulting), not the whole business. Scarcity ("4 slots") is real, not a copy device: it's the actual limit of one person doing them properly.

## 3. Why No £299 Lite Tier

There will never be a lite tier, because **the free page is the lite tier.**

A £299 "starter audit" would sit £151 below the £450 done-for-you version and just above the free [90-minute framework](/strategy/audit/), and it would lose to both. At a £450 base that gap is too narrow to mean anything to a buyer. Cheaper than £450 means cutting scope; the only scope left to cut is the human judgement that's the entire value. A £299 audit is either the free method with an invoice stapled to it, or a worse version of the £450 one. Both cannibalise, neither adds.

This is the wedge restated as pricing strategy: the method is free, the doing is £450, and there is nothing in between worth selling. The gap is the product.

## 4. Price-Rise Trigger

Fixed, so it's not a judgement call in the moment:

- **Trigger:** two consecutive months sold out (all 4 slots).
- **Action:** £450 → £595 (Tier 1); Tier 2 £1,200 → £1,450. (Not strictly proportional — +32% vs +21% — and doesn't need to be: Tier 1 slots are the constrained resource.)
- **No grandfathering.** New price applies to the next booking. Fixed-price product; the fixed price is allowed to change, but not per-customer.
- **Announcement:** to the [email list](/distribution/email/) one week ahead, framed as "slots got scarce, price reflects it" — honest, not FOMO theatre.
- **Page update:** offer page copy, both Stripe Payment Links, Product/Offer schema `price` and `priceValidUntil`, and the delivery-template benchmark line all update the same day. Single source of truth is this file; the page follows.

<!-- DEPENDENCY: /distribution/email/ (Email as a Distribution Moat cluster, Section 6) is NOT written
yet. The price-rise announcement channel therefore doesn't exist at launch. Interim: announce via the
same transactional/ESP list used for delivery emails until the email cluster + list ship. -->
