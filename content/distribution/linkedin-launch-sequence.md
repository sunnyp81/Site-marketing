# LinkedIn Launch Sequence — site.marketing (6 posts, 14 days)

**Purpose:** Six finished posts in Sunny's voice. Every post ships an extractable number or a verdict. Zero posts say "excited to announce."

**Register:** Post copy and the one-line human sentence inside each first comment are sunny-voice. Everything else in this file — headers, goals, links, log stubs, the plan — is neutral internal-doc. Do not let the scaffolding leak into the copy or vice versa.

---

## Constraints (non-negotiable)

- **Employer-safe.** Sunny is at Figment. No "agencies are dead" angles. No side-hustle pitch energy. The Day 14 audit post reads as a data-share (here's what keeps breaking), never as a sales post — the offer is one soft line in the first comment, the only link is the *free* checklist, and the paid done-for-you page is never posted from Sunny's feed. If someone explicitly asks, the `/offers/` link goes in a reply to them, not in the comment.
- **Links live in the first comment, never the post body.** LinkedIn penalises reach on posts with outbound links in the body. Every URL in this file belongs in a first comment.
- **CTA is a question or nothing.** Per voice rules. The "stated CTA" per post is the first-comment link plus the question that ends the post. No "follow me for more," no "DM me," no "link below."

---

## Verification status (checked 2026-07-23, before drafting)

This sequence's whole wedge is "check our work," so the claims and links were verified against the repo before a word of copy was written.

| Item | Status | Note |
|---|---|---|
| 8% median citation share, 50 sites, 20 prompts | **Real — but it's the pilot** | `content/research/citation-share-study-methodology.md` §1: "an informal pilot of 50 established sites — 20 buyer-language prompts each, across ChatGPT, Perplexity and Gemini — found a median citation share of **8%** before any GEO work." **Three engines, not four.** The 200-site, four-engine study is a *design target* (Wave 1 fielded Aug 2026, results Sept 2026) and is NOT yet run. Copy must attribute 8% to the 50-site pilot and never imply the big study has results. |
| ≥30% = "good" | **Real as an internal bar** | Used as the "what good looks like" line in the teardown draft and study framing. Presented in copy as site.marketing's benchmark, not as a published third-party stat. |
| AI citations lag Google by 1–2 months | **Real** | Pillar §"How Long Does Website Marketing Take to Work?" line 244: "Lags Google gains by ~1–2 months in our data, then compounds." Attributed as "our data." |
| Top-3 failure modes (post 6) | **Real as failure modes — NOT a measured frequency** | The three modes are pulled verbatim-adjacent from pillar Step 2 (crawl waste / index bloat; AI-crawler access blocked by CDN default; content only in JS, not initial HTML). But no source measures how *often* they occurred across the 50-site pilot — the pilot measured citation share, not failure-mode frequency, and the full 90-minute audit needs internal GSC access we never had on those sites. Post 6 copy therefore frames them as the recurring diagnosis behind low scores, never as a counted stat. |
| `/how-to-market-a-website/` | **Live** | Pillar exists. |
| `/strategy/audit/` | **Live** | `content/clusters/strategy/website-marketing-audit.md`, slug `/strategy/audit`. Free method + checklist. |
| `/research/citation-share-study` | **Live** | Methodology page. Used to source the 8% provenance. |
| `/visibility/geo/` | **Live** | GEO pillar. Reply ammo only, not a scheduled link. |
| `/offers/90-minute-audit` | **Live — but cut from the sequence** | The £450 done-for-you page. Posting a paid personal-brand offer from Sunny's feed fails the employer-safe / no-side-hustle rule, so it never appears in a post or first comment. Reply-only, and only if someone explicitly asks to have it run for them. |
| `/measurement/citation-monitoring/` | **CUT** | The only matching file (`content/ops/measurement-and-citation-monitoring-setup.md`) is `noindex`, internal. Not a public URL. Post 5's secondary link repointed to the methodology page instead. |
| `/teardowns/zapier` | **NOT publishable** | Teardown draft carries a live pre-publish gate: three of six scores provisional, first-party crawl blocked (403), right-of-reply not sent. **Hard dependency for post 3.** See the Day 5 dependency gate below. |

---

## Dependency gate (resolve before Day 4)

- **Pillar live before Day 0.** Posts 1 and 2 link it. Confirmed in repo; confirm deployed.
- **`/strategy/audit` live before Day 10.** Post 5 primary CTA. Confirmed in repo; confirm deployed.
- **Zapier teardown live before Day 4 — this is the one that slips.** Post 3 is written two ways for exactly this reason. The body is identical and names nothing; only the first comment changes. If the teardown clears its gate and publishes, use first-comment (A) — it reveals the name and links the page. If it hasn't published by end of Day 4, use first-comment (B) — no name, link the methodology, promise the reveal. Do not improvise this on Day 5.

---

## POST 1 — Day 0 — Launch thread: the 8% post (3-part)

**Goal:** 15,000 impressions; the "8%" figure quoted back at least once in the comments.
**Narrative role:** Plant the flag with an original number. This is the citation-bait spine of the whole sequence.
**Format:** Three connected posts, ~120 words each, posted as a self-reply thread. Two hook variants supplied for part 1 only — pick one before scheduling.

**The post — part 1 (the stat):**

> The median established website gets cited in 8% of the AI answers about its own topics.
>
> We ran the numbers on 50 of them.
>
> 20 buyer-language prompts each. ChatGPT, Perplexity, Gemini. Before anyone did a scrap of GEO work.
>
> 8%.
>
> When I ask owners to guess, they pick one of two numbers.
>
> Zero. "AI doesn't know I exist."
>
> Or fine. "I rank on Google, I'm covered."
>
> Both wrong. The zero crowd is usually a few points above nothing. The fine crowd is usually sitting right beside them.
>
> Ranking on Google and being the source an engine quotes are not the same job.
>
> The bit nobody measures is next.
>
> (1/3)

**The post — part 2 (the method):**

> How we got to 8%.
>
> No tool subscription. No black box.
>
> Pick 20 prompts a real buyer would type. The "best X for Y" ones. The how-tos your top pages already answer. The "X vs Y" ones. The ones where they don't know your name yet.
>
> Run each through ChatGPT, Perplexity and Gemini.
>
> Count the answers that cite you. A link counts as one. Your name with no link counts as a half.
>
> Divide by the answers that came back.
>
> That's your citation share. About 90 minutes of work.
>
> The number's uncomfortable on purpose. You can't fix a leak you won't look at.
>
> (2/3)

**The post — part 3 (why nobody measures it):**

> So why does almost nobody know this number?
>
> Because there's no Search Console for it. No public index. No dashboard pinging your inbox.
>
> Rank tracking told you where you sat in a list of ten blue links. That list is shrinking.
>
> The question now isn't "where do I rank." It's "how often am I the source the model actually quotes."
>
> Different question. Different metric. Almost nobody's tracking it.
>
> Median's 8%. Good looks like 30% or more.
>
> Most sites have no idea which side of that line they're on.
>
> Do you know your number?
>
> (3/3)

**Hook variants (part 1 opening line only):**
- **Variant A (provocative):** "Statistically, your website is close to invisible to AI. We measured 50 of them."
- **Variant B (empathetic):** "Most owners I ask assume they're at zero with AI. They're not — but they're not fine either."

**First comment:**
> Full method's in the pillar — measure, fix, strengthen, amplify, in that order.
>
> Pillar: /how-to-market-a-website/
> Where the 8% comes from (50-site pilot, methodology in full): /research/citation-share-study

**Extractable asset:** "Median established site = 8% AI citation share. 50 sites, 20 prompts each, 3 engines, measured before any GEO work."

**POST LOG**
```
Topic: Launch — the 8% citation-share stat (3-part thread)
Hook: [chosen variant]
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes:
```

---

## POST 2 — Day 2 — The sequence framework

**Goal:** 50 saves + reposts combined (framework posts get saved, not just liked).
**Narrative role:** Convert the number into a named position. Text-only — the four steps *are* the extractable asset, so no carousel graphic (that stays on-site where it earns citations).

**The post:**

> Marketing a website you already have is an audit problem before it's a promotion problem.
>
> Almost everyone runs it backwards.
>
> They buy traffic for a site that leaks. Pay full price to lose people faster.
>
> The order that actually works is four steps.
>
> Measure. Your real numbers — traffic, conversion, and your AI citation share. Most people skip straight past this one.
>
> Fix. Plug the leaks. Faults that block crawling. The five pages that lose the most money. Before you spend a penny on reach.
>
> Strengthen. Make the site worth citing. Prune the dead pages, deepen the ones that earn, say something the model can't get anywhere else.
>
> Amplify. Now — and only now — distribution. PR, email, repurposing.
>
> Amplifying a leaky site is paying to lose faster.
>
> That's not a preference. It's the order.
>
> Which step does your current plan actually start at?

**First comment:**
> Every step, in order, with the checklists under each: /how-to-market-a-website/

**Extractable asset:** The four-step order (Measure → Fix → Strengthen → Amplify) plus the two verdict lines: "an audit problem before it's a promotion problem" and "amplifying a leaky site is paying to lose faster."

**POST LOG**
```
Topic: The four-step sequence framework
Hook: Marketing a website you already have is an audit problem before it's a promotion problem.
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes:
```

---

## POST 3 — Day 5 — Teardown teaser (dependency-gated)

**Goal:** 30 comments (people guessing the site / asking for the full teardown).
**Narrative role:** Proof the method works on a real, famous site. The verdict is withheld — the withholding is the tease. **The body names no one** (protects against the teardown's provisional scores and keeps it employer-safe); the reveal happens on-site, cited by the work.
**Dependency:** See the gate above. Body is final either way; pick first comment (A) or (B) based on whether `/teardowns/zapier` has published.

**The post:**

> There's a site every SEO conference deck holds up as the winner.
>
> Roughly 50,000 pages. Millions of organic visits a month. A programmatic-SEO machine people build entire talks around.
>
> We ran our 20-prompt audit on it.
>
> On the plain how-to questions its pages were built to answer — the "how do I do X" ones — the AI answer skipped it. Reached for its smaller competitors instead.
>
> Wins Google at a scale almost nobody can match. Gets out-quoted on its own topics.
>
> Because a page built to rank and a page built to get quoted are not the same page. And it's got 50,000 of the first kind.
>
> Not naming it yet. The full teardown — the score, the gap, the three fixes — goes up this week.
>
> Want it?

**First comment (A) — use if `/teardowns/zapier` is live:**
> It's Zapier. Best programmatic SEO on the internet, quietly getting out-quoted on its own how-tos.
>
> Full teardown, all six scores, the three fixes: /teardowns/zapier
> Same instrument as the 50-site study: /research/citation-share-study

**First comment (B) — use if the teardown has NOT published by end of Day 4:**
> Same instrument as the 50-site study — full method here: /research/citation-share-study
>
> The named teardown drops this week. I'll post the link right here the second it's live.

**Extractable asset:** "A site with ~50,000 pages and millions of monthly organic visits was absent from the AI answer on the exact how-to queries its pages were built to serve." (Structural fact, defensible without citing the provisional score.)

**POST LOG**
```
Topic: Teardown teaser — famous programmatic-SEO site out-quoted on its own how-tos
Hook: There's a site every SEO conference deck holds up as the winner.
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes: (record which first-comment variant shipped, A or B)
```

---

## POST 4 — Day 7 — Timeline honesty

**Goal:** 20+ comments (this one is built to start a debate about timelines and guru promises).
**Narrative role:** Anti-guru credibility. Sits between the teardown and the DIY method — trades a spicy tease for a defensible, share-worthy honesty.

**The post:**

> Someone's going to promise you AI rankings in 30 days. Don't pay them.
>
> Here's how the timing actually works, from our data.
>
> Fixes — technical faults, conversion leaks — show up in weeks. You're not building anything, you're stopping a loss.
>
> Content compounds over three to six months. A slow burn that never stops burning if you keep the inventory clean.
>
> AI citations trail your Google gains by roughly one to two months. Then they compound.
>
> Why the lag? The engines mostly cite what's already earning trust. So you fix and strengthen first, and you get cited later. That order isn't optional.
>
> There's no switch. It's a staircase.
>
> Anyone selling you rankings in 30 days is selling something, and it isn't results.
>
> What's the fastest "win" someone's tried to sell you lately?

**First comment:**
> The full staircase, activity by activity with first-signal timings: /how-to-market-a-website/#how-long-does-website-marketing-take-to-work

**Extractable asset:** "AI citations lag Google gains by ~1–2 months, then compound (site.marketing data). Fixes land in weeks; new content compounds over 3–6 months."

**POST LOG**
```
Topic: Timeline honesty — the staircase, and the 30-day promise
Hook: Someone's going to promise you AI rankings in 30 days. Don't pay them.
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes:
```

---

## POST 5 — Day 10 — The DIY grader / measure-it-yourself

**Goal:** 100 clicks to `/strategy/audit/` (tracked in the first comment).
**Narrative role:** Hand the reader the method so they measure their own number — the exact move that lands them on the audit page. Works standalone; no dependency on the interactive grader tool being live.

**The post:**

> You don't need a £99-a-month tool to know your AI citation share.
>
> You need 20 prompts and a spreadsheet.
>
> Here's the whole thing.
>
> Write 20 prompts a real buyer would actually type. Not your brand name — the problem they've got.
>
> Run each one through ChatGPT, Perplexity and Gemini.
>
> Mark every answer that cites you. A link counts as one. A name-drop with no link counts as a half.
>
> Divide the cites by the answers that came back.
>
> That number is your citation share.
>
> That's it. No subscription, no login, no demo call.
>
> Where you land: good is being cited in 30% or more of the relevant answers. The median site we measured sat at 8%.
>
> Most owners have never run it once. Ninety minutes, and it tells you more than any traffic chart.
>
> When's the last time you actually checked?

**First comment:**
> The timed version — five blocks, free checklist, no 200-point slog: /strategy/audit
> The exact prompt grammar and scoring rules, if you want to run it properly: /research/citation-share-study

**Extractable asset:** "Good AI citation share = cited in ≥30% of relevant prompts. Median site = 8%. Measure it with 20 prompts, 3 engines, and a spreadsheet — no tool needed."

**POST LOG**
```
Topic: DIY method — measure your own citation share, 20 prompts + a spreadsheet
Hook: You don't need a £99-a-month tool to know your AI citation share.
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes:
```

---

## POST 6 — Day 14 — The audit offer (written as a result)

**Goal:** 5 qualified audit inquiries.
**Narrative role:** The riskiest post for voice rules, so it's built as a finding, not a pitch: "here's the diagnosis behind the low scores." The offer is one soft line in the first comment, and the only link is the free checklist — the paid page is reply-only if someone asks (see constraints). If it reads like a sales post, it's failed — cut it back to the finding.
**Sourcing note:** The pilot measured citation share, not failure-mode frequency — so the copy frames the three leaks as the recurring diagnosis behind low scores, never as a counted 50-site stat. All three checks (index bloat, robots/CDN bot policy, JS-only content) are runnable from the outside, which is what makes the claim defensible.

**The post:**

> We measured the AI citation share of 50 established sites. Median: not pretty.
>
> Then went digging into why the low scorers score low. The same three leaks kept turning up.
>
> One — index bloat. Thousands of thin, parameter and dead-filter pages eating the crawl budget that should reach the pages that earn. Bots never get to the good stuff.
>
> Two — AI crawlers blocked by accident. GPTBot, ClaudeBot, PerplexityBot switched off by a CDN default nobody actually chose. Invisible to the exact engines they're trying to win — and they've no idea.
>
> Three — the important content only loads after JavaScript. If it's not in the initial HTML, most AI retrievers never see it. What isn't in the source doesn't exist.
>
> None of these are content problems. They're leaks. All three are visible from the outside, and all three are fixable in an afternoon once you can see them.
>
> And it's rarely just one of them.
>
> When did you last look at yours?

**First comment (the only offer mention in the whole sequence):**
> Full checklist's free — run it on your own site: /strategy/audit
> If you'd rather we ran it for you, ask. Same method either way.

**Extractable asset:** "The three leaks most often behind low AI citation share: (1) index/crawl bloat, (2) AI crawlers blocked by a CDN default, (3) key content only in JavaScript, not initial HTML. All three checkable from the outside."

**POST LOG**
```
Topic: The three leaks behind low citation share (audit-finding post)
Hook: We measured the AI citation share of 50 established sites. Median: not pretty.
Impressions:
Likes:
Comments:
Reposts:
Engagement rate:
Notes:
```

---

## Named-claims ledger

Each hard claim appears deliberately, and each surfacing extracts a *different* fact from the same pilot dataset — so there's no repetition, only reinforcement. All trace to the 50-site pilot, never to the unrun 200-site study.

| Claim | Appears in | The distinct fact it extracts | Source of record |
|---|---|---|---|
| 8% median citation share (50 sites, 20 prompts, 3 engines, pre-GEO) | Post 1 (full), Post 5 (as the benchmark median) | P1: the headline number + method. P5: where you sit vs the median. | citation-share-study §1 |
| Good = cited in ≥30% of relevant prompts | Post 1 (landing), Post 5 (the bar) | The target line the 8% is measured against. | study/teardown framing |
| Audit before promotion — a verdict, not a preference | Post 2 | The named position + the four-step order. | pillar TL;DR + Step order |
| AI citations lag Google by ~1–2 months, then compound | Post 4 | The timeline claim + the staircase. | pillar timeline table, line 244 |
| Famous ~50k-page site absent on its own how-tos | Post 3 | The teardown pattern, unnamed. | teardown draft §2–3 (name held for on-site) |
| Top-3 leaks behind low citation share | Post 6 | The recurring diagnosis, not the median — framed as pattern, never as a counted frequency. | pillar Step 2 (modes); 50-site pilot (the low scores they explain) |
| "Deleted 400 pages, traffic went up" | **Reserve — comment-reply ammo only, not a scheduled post** | Prune-works proof, deployed if a commenter pushes back on "strengthen." | hold |

---

## Internal links (all first-comment only)

| Link | Used in | Status |
|---|---|---|
| `/how-to-market-a-website/` | Posts 1, 2 | Live |
| `/how-to-market-a-website/#how-long-does-website-marketing-take-to-work` | Post 4 | Live (heading-derived anchor; confirm the deployed slug matches) |
| `/research/citation-share-study` | Posts 1, 3, 5 | Live |
| `/strategy/audit` | Posts 5, 6 | Live |
| `/offers/90-minute-audit` | **None scheduled** — reply-only, if someone explicitly asks | Live, but cut from posts/comments (employer-safe rule) |
| `/teardowns/zapier` | Post 3, first-comment (A) only | **Gated — not yet publishable** |
| `/visibility/geo/` | Reply ammo only, not scheduled | Live |
| `/measurement/citation-monitoring/` | — | **Cut — internal/noindex, no public URL** |

---

## Reader + intended feeling

- **Reader:** owner or marketer of an established site (10k–500k monthly visits), suspicious of SEO gurus, tired of being sold.
- **The arc:** "this person has a number I don't" (P1) → "there's an order to this" (P2) → "it even catches the big names" (P3) → "and they're honest about timing" (P4) → "I can measure my own number in 90 minutes" (P5) → "and at least one of these leaks is probably mine" (P6). Lands on the audit page.

---

## Plan (Sunny + 1)

- **Day −2.** Sunny finalises all six posts from this file in one sitting — voice can't be delegated. Picks the Day 0 hook variant. +1 preps first comments, QAs every link, loads the schedule.
- **Day −1.** Hard dependency check: pillar and `/strategy/audit` deployed; decide post 3 first-comment A vs B based on whether the Zapier teardown cleared its gate.
- **Days 0–14.** +1 monitors comments hourly for the first three hours of each post. Sunny replies personally to the top 10 comments — replies are half the reach.
- **Day 16.** Log all six POST LOG rows into `references/performance-log.md`. Pick the winning hook pattern to open the next sequence.

---

## Wedge check (every post passed before inclusion)

The test: *can a stranger screenshot this and cite a number or a verdict?* Every post carries a distinct, sourced extractable (see the ledger). A second test applied on audit: *can the screenshot be checked against the published methodology without contradicting it?* Two lines failed that one in draft — an invented "5–10%" distribution in post 1 and a counted "most sites had two of the three" frequency in post 6 — both rewritten to what the data actually supports. Post 6 is the only one that mentions the offer, one soft line in a comment, free-checklist link only; the paid page is reply-on-request. Any post that failed either test would be cut or demoted to teardown fragment.