# site.marketing — project facts

## Owner-confirmed facts (never invent or "correct" these)

These were confirmed directly by the owner. Do not substitute a plausible-looking
alternative, and do not let a spec document or a subagent override them — earlier
in this project two different agent-invented LinkedIn slugs shipped before the real
one was confirmed.

| Fact | Value |
|---|---|
| LinkedIn (canonical, used in `sameAs` and every visible link) | `https://www.linkedin.com/in/sunny-patel-co-uk/` |
| Existing main site (in `sameAs`; authoritative for owner bio facts) | `https://sunnypatel.co.uk/` |
| Domain | `site.marketing` |
| Author name | Sunny Patel |
| Started in SEO | **2010** |
| Productised audit price | **£450** — "audit and action plan" |

**Write experience as "in SEO since 2010", never as a running year count.** A count
goes stale every January and this site's own thesis is about content decay. The repo
previously claimed "14 years" in 19 places, which was wrong in both directions —
invented, and destined to rot.

**`sunnypatel.co.uk` outranks this repo on any claim about Sunny himself** — years of
experience, specialisms, job title, location, pricing. If a claim here contradicts that
site, that site wins and this one gets corrected. Note the sandbox network policy blocks
direct fetches of `sunnypatel.co.uk`, so cross-checks have to go through web search.

### Open conflicts with sunnypatel.co.uk (unresolved — do not "fix" by guessing)

| Was | Now | Source |
|---|---|---|
| "14 years in SEO" | "in SEO since 2010" | Owner |
| £950 audit | £450 | Owner |
| "topical authority and entity SEO" | "semantic SEO, topical authority and AI search" | sunnypatel.co.uk |
| jobTitle "SEO Consultant" | "SEO Consultant & AI Strategist" | sunnypatel.co.uk |
| No location | `address`: Reading, Berkshire, GB | sunnypatel.co.uk |
| Proof point unused | "built and ranked 40+ sites from scratch" | sunnypatel.co.uk |
| Product "The 90-Minute Website Audit" | "The Audit and Action Plan" | Owner |
| Tier 2 £2,400 | £1,200 | **Derived**, not confirmed — preserves the 2.5x ratio the rationale doc argued |

Note: the **free method** at `/strategy/audit/` keeps the "90-Minute Framework" name.
Only the **paid product** is the "Audit and Action Plan". Don't collapse the two.

### Still open

- **£450 vs the £495 audit already on sunnypatel.co.uk.** Near-identical products,
  near-identical prices, two domains, one owner. Either differentiate this one on
  GEO/citation-share specifically, or retire it and point at the existing offer.
  This is the substantive unresolved question — see the OPEN block in
  `content/ops/90-minute-audit-pricing-rationale.md`.
- **£100/hr implied rate** sits below the £150–£300/hr consulting range he publishes.
  Deliberate loss-leader or padded time estimate — needs a stated position.
- **Tier 2 at £1,200** is derived, not chosen. Confirm or change.

**If a fact about the owner's real-world identity, accounts, pricing, or credentials
is not in this table, ask — do not infer it.** Anything that resolves to a real
person or a real URL is unverifiable from inside the repo, and a confident wrong
answer is worse than a question.

## What this project is

A static Astro site: the operator's manual for marketing a website that already
exists. Positioning wedge is **sequence, not channels** — measure, fix, strengthen,
amplify. Written for sites with history, explicitly not for new launches.

## Build

```
npm run dev       # local dev
npm run build     # static build to dist/
npm run verify    # 12 acceptance gates against dist/
npm run check     # build + verify
npm run deploy    # check, then wrangler deploy (Workers Static Assets)
```

`npm run check` must pass before anything ships. The gates are in
`scripts/verify.mjs` and enforce the contract in
`content/ops/stack-and-scaffold.md` §6 — content in initial HTML, zero client JS on
article routes, chunk-clean markup, the full schema set, no dead links (including
in `llms.txt`), asset existence, head limits, and no HTML comments in output.

## Conventions that matter

- **URLs come from frontmatter.** `src/lib/urls.ts` resolves each page's `slug`
  field; the router obeys it. Never hardcode a route.
- **Unwritten pages are unlinked, not stubbed.** Anchor text stays as bold with a
  `<!-- relink: /target/ -->` marker. When a section ships, grep for `relink:`.
  Do not create placeholder pages — the site's own thesis is fewer, stronger pages.
- **HTML comments never reach output.** A rehype plugin strips them, so editorial
  PRODUCTION NOTES blocks are safe to leave in source.
- **Cite real sources only.** Every external stat URL must resolve. A fabricated
  citation shipped once already; the site's whole pitch is citation integrity.
- **UK English** in prose.

## Voice

Sunny Patel: straight-talking, short punchy lines, dry humour, human-first. No
corporate hedging, no "in today's fast-paced digital landscape". Assumes a smart
marketer, not a beginner. Reference pages (glossary definitions, specs) use a
neutral register and are labelled as such.
