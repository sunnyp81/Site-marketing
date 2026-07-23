---
title: "The 8% — Newsletter Identity, Concept, and Issues 1–3"
meta_description: "The 8% is a fortnightly email on growing an existing website in the AI-search era. One number, one fix, five minutes. No listicles."
slug: /newsletter/
type: internal-concept-doc + shippable-signup-copy
dateModified: 2026-07-23
---

<!--
PRODUCTION NOTES (do not publish this block)

FILE PARTITION:
- Sections 1–3 and 8 are INTERNAL concept/spec/ops. Not reader-facing. Do not deploy.
- Section 4 is SHIPPABLE copy for the public signup page at /newsletter/. Deploy that section's
  copy blocks + FAQ + welcome email as the live page and the welcome autoresponder.
- Sections 5–7 are the finished copy for Issues #1–#3. Load each into Buttondown as a draft;
  they are send-ready pending the two fill-at-send figures flagged inline in Issue #3.

SLUGS — verified against shipped corpus (pillar + study + grader + launch plan), not invented:
- /how-to-market-a-website/  /distribution/email-moat/  /measurement/citation-monitoring/
- /content/audit/  /content/information-gain/  /technical/audit/  /research/citation-share-study
- Grader lives at /grader/ (top-level, per content/product/site-marketing-grader.md §10) —
  NOT /tools/grader/. Coordinate no further; the grader deliverable fixes this path.

ESP / INFRA:
- Platform: Buttondown. From-name "Sunny at site.marketing". Reply-to → Sunny's real inbox
  (replies are the Teardowns research pipeline — do not route to a no-reply).
- Signup page schema: WebPage + FAQPage (the 3 Q&A blocks in §4). BreadcrumbList optional.
- Welcome flow: double opt-in ON. On confirmed opt-in, the welcome email fires, and Issue #1
  is delivered IMMEDIATELY behind it — the CTA button promises "Send me issue #1", so issue #1
  is a lead magnet delivered on signup, never held for the next fortnightly slot.
- The 8% figure everywhere is the informal 50-site, 3-engine pilot median. Source-of-truth,
  zero drift (see content/strategy/90-day-launch-plan.md). The 200-site study is the citable
  successor; never present the two as one continuous number.
- OPEN TASK (Sunny, ~30 min): trademark/collision check on "The 8%" before the name locks and
  the /newsletter/ page ships. Low risk (two chars + a glyph is hard to own), but check.
-->

# The 8% — Newsletter Identity, Concept, and Issues 1–3

**The 8%** is site.marketing's fortnightly email for people growing a website that already exists. One number, one fix, one micro-teardown, one link. Five minutes, every other Tuesday. This document is the whole thing: the name and why it wins, the positioning, the format spec, the signup page copy, three finished issues, and the production plan to ship it.

Why it exists at all: pillar #1, Step 4, says out loud that **email is the only channel an answer engine can't intercept** ([Email as a Distribution Moat](/distribution/email-moat/), [the existing-site playbook](/how-to-market-a-website/)). A site whose entire thesis is "own your audience" that ships no newsletter is a personal trainer with a beer gut. This closes that gap.

---

## Section 1 — Name: 5 options, 1 pick

The name has to do three jobs at once: be impossible to paraphrase, carry the promise, and survive being said out loud in a subject line. Here's the shortlist.

| Name | Why it works | Why it dies |
|---|---|---|
| **The 8%** *(the pick)* | It's our own original stat — median established site appears in 8% of relevant AI answers, from the 50-site pilot. The name *is* the study, so it can't be knocked off. Two characters and a glyph. | Needs one line of explanation the first time. Numbers can date if the figure moves — mitigated because "the 8%" has flipped into a brand, not a live readout. |
| **Uncited** | Sharp, one word, names the exact fear (your site, absent from the answer). | Too doom-flavoured for a fix-it brand. We're the people with the shovel, not the people describing the hole. |
| **Owned & Operated** | Nails the own-your-audience thesis. Sounds like a business, not a blog. | Crowded — existing media-brand collisions. Flag for trademark check regardless, and it's generic enough to be forgettable. |
| **The Existing-Site Letter** | Does exactly what it says. Reinforces the domain's whole angle (sites that already exist). | Reads like a memo. No one forwards a thing called "The Existing-Site Letter." |
| **Second Opinion** | Warm, consultative, implies you already have a first opinion that's wrong. | Owned by healthcare and finance in every reader's head. Fights an association it'll never win. |

**The pick is "The 8%."** Three reasons, stated as claims:

1. **The name is the study.** 8% is our number — median citation share across the 50-site pilot, before any GEO work. You cannot rebrand someone else's proprietary stat, which makes the name itself paraphrase-proof. Every rival newsletter is named after a vibe. This one is named after a finding only we have.
2. **It carries the promise in two characters and a glyph.** "The 8%" tells you there's a median, that you're probably at it, and that the point of subscribing is to leave it. No tagline required to feel the tension.
3. **It gives every issue the same sign-off.** We close each issue with one ritual line: **"Go be the 8% that gets cited."** That's the deliberate flip — 8% is the sad median you're stuck at, and also, said the other way, the small club that actually gets cited. Same number, two meanings. The name does the work in both directions.

**Tagline (locked):** *The fortnightly email for people growing a website that already exists.*

---

## Section 2 — Concept & positioning

The wedge is a credibility gap in our own house. The pillar says email is the one channel no algorithm sits between you and your reader — Google can bury you, ChatGPT can answer instead of sending the click, but your list opens the thing you sent, when you sent it. Preaching that with no newsletter of our own isn't an oversight. It's a tell. The 8% is us eating the cooking.

The reader is a specific person: the operator of a live site. Founder, in-house marketer of one, agency owner with too many tabs open. They have traffic history, no time, and a low hum of AI-referral anxiety they haven't said out loud yet. When they open an issue, they should feel *this person has seen my exact site before*. Then they should do three small things and no more: read it in under five minutes, click exactly one link, and forward it to one peer who has the same problem. That's the whole job of an issue.

What we are not: a link roundup. Curation is the format LLMs replaced — nobody needs a human to gather eleven tabs anymore. No "Issue #47: 12 tools we're loving." Every issue leads with a number we can defend, and closes with one action the reader can ship before the next one lands.

> The median established website appears in 8% of the AI answers about its own topics. Not zero, which is what owners fear. Not "loads," which is what they hope. Eight per cent. This is the newsletter for the people who refuse to stay there.

---

## Section 3 — Format & cadence spec

*(Internal reference. Neutral register.)*

### Cadence and length

| Spec | Decision | Rationale |
|---|---|---|
| Frequency | Fortnightly | Weekly is a lie for a Sunny+1 team and burns the writer before the habit forms. Monthly kills the habit loop — the reader forgets they subscribed. The pillar's own rule is "send on a schedule you can actually keep"; fortnightly is that rule applied to a two-person team. 26 issues/year. |
| Send slot | Tuesday, 08:00 ET | Tuesday clears the Monday inbox pile; 08:00 ET catches the US start-of-day and the UK lunch break. Fixed slot builds the habit. |
| Length | 600–900 words, ≤5 min read | Long enough for one real idea, short enough to finish standing up. If an issue runs past 900, a segment is trying to become its own issue — split it. |
| Subject lines | ≤45 characters | Survives truncation on mobile. Front-load the hook — usually, but not always, the number. |
| Template | Plain-text-forward, one accent colour, zero hero images | Plain text lands in the primary tab, not Promotions, and matches the register — this is a letter, not a brochure. One accent colour on links only. |
| Links per issue | **Exactly one.** | This is the format's spine, not a guideline. One link means the click is a binary decision, the CTR is clean to read, and the reader is never asked to triage. Resolving the tension in the plan: no "secondary inline" links. If a second page matters, it's next issue's One Link. |

### Fixed four-segment skeleton (every issue, same order)

1. **The Number** — one stat, ours or sourced. Two sentences on why it matters. Nothing else.
2. **The Fix** — one tactical move the reader can ship this fortnight, with the steps included. Not theory. A thing to do.
3. **Seen in the Wild** — a 3–5 sentence micro-teardown of a real site (anonymised until the site permissions it). This is the segment that makes the reader feel seen, and it feeds the Teardowns pipeline.
4. **One Link** — exactly one site.marketing URL. The single click the whole issue earns.

### Platform and ops

- **ESP:** Buttondown — markdown-native, cheap at our list size, and has an API for the grader integration later.
- **From-name:** "Sunny at site.marketing". **Reply-to:** Sunny's real inbox. Replies are not support tickets; they're the research pipeline. Every "here's my URL" reply is a candidate teardown.
- **In scope for v1:** the four segments, the /newsletter/ signup page, and a one-email welcome autoresponder (drafted in Section 4) with Issue #1 delivered immediately behind it.
- **Out of scope for v1:** referral programme, paid tier, sponsorships, any automation beyond the single welcome email. Ship the habit first; monetise the habit later.

### Pre-send checklist (every issue)

- [ ] One number, and we can defend where it came from
- [ ] One fix, shippable inside a fortnight, with steps
- [ ] One micro-teardown, anonymised unless permissioned
- [ ] Exactly one link — count them, the answer is one
- [ ] Subject line ≤45 chars; hook front-loaded (lead with the number when the number is the hook)
- [ ] 600–900 words / under 5 minutes read
- [ ] Sign-off line present: "Go be the 8% that gets cited."
- [ ] Reply-to points at Sunny's inbox, not no-reply

---

## Section 4 — Signup page copy (`/newsletter/`)

*(Shippable. Deploy verbatim. Sunny's voice.)*

**H1:**
> The median website appears in 8% of AI answers. Subscribe to stop being median.

**Subhead:**
> The 8% is a fortnightly email for people growing a website that already exists. One number, one fix, one real teardown, one link. Five minutes, every other Tuesday. No listicles, no "11 tools," no wishing you luck.

**Proof bullets:**
- **One defensible number per issue** — starting with the one in the name. We ran citation audits across 50 established sites; the median appeared in 8% of the AI answers about its own topics. You're probably there. We'll get you out.
- **One fix you can ship this fortnight** — not a theory, a thing to do before the next issue lands.
- **One real site, torn down** — a short, honest teardown every issue. Reply with your URL and it might be yours.

**CTA button:**
> Send me issue #1

*(Not "Subscribe." A button should promise an object, not a verb. "Subscribe" asks for a commitment; "Send me issue #1" hands over a thing. Ops note: this promise is honoured literally — Issue #1 is delivered on confirmed opt-in, right behind the welcome email, not held for the next send slot.)*

**Consent microcopy (under the button):**
> Fortnightly. Unsubscribe in one click, no hard feelings. We never sell or share your email — see the FAQ, it's the second question because it's the one you're actually asking.

**Internal links (in body prose, not the form):**
> New here? Start with [how to market a website that already exists](/how-to-market-a-website/), or read why [email is the one channel AI can't intercept](/distribution/email-moat/) — which is the entire reason this newsletter exists.

### Signup FAQ

**How often will you email me?**
Every other Tuesday. Twenty-six issues a year, each under five minutes. Weekly would mean padding, and monthly would mean you forget who we are. Fortnightly is the sweet spot where the email stays worth opening.

**Will you sell my email?**
No. First word, no hedge. We don't sell it, rent it, or hand it to a "trusted partner." The whole thesis of this newsletter is that your list is the audience nobody can take from you — it would be a strange look to sell yours. Unsubscribe any time, one click.

**Is this just the blog in an envelope?**
No. The blog is the reference library; the newsletter is the thing that makes you act. Each issue is one number, one fix you can ship this fortnight, and one real site torn down — written to be read, not skimmed for links. Occasionally the One Link points at a blog page, but the issue stands on its own without it.

### Welcome autoresponder (single email, fires on confirmed opt-in)

*(Drafted per scope. Deploy as the one welcome email. Buttondown sequence: this email fires on confirmed opt-in, and Issue #1 is delivered immediately after it — the CTA promised an object, so we hand it over.)*

**Subject:** You're in. Here's the 8% problem.

**Preview text:** One number, why it matters, and issue #1 right behind this.

**Body:**

You're on the list. Thanks — genuinely. That's the last bit of admin.

Here's the number the whole thing is named after. We ran AI citation audits across 50 established sites, and the median one showed up in **8% of the answers about its own topics.** Not zero, which is what most owners fear. Not "loads," which is what they hope. Eight per cent. Most people are wrong about their own number in both directions, which is exactly why you measure instead of guess.

Every other Tuesday you'll get one issue: one number, one fix you can ship that fortnight, one real site torn down, and one link. Under five minutes. That's the deal.

Two things you can do right now, if you're the type:

1. **Hit reply and send me your URL.** I read every reply — that inbox is how I pick sites to tear down. Yours might be one.
2. **Find out your own number.** The 20-prompt DIY audit takes about half an hour and tells you where you actually stand. It's in issue #1, which is arriving right behind this email — the button said "send me issue #1," and I meant it.

New issues land every other Tuesday, 8am ET.

Go be the 8% that gets cited.

— Sunny

---

## Section 5 — Issue #1: "You are probably the 8%"

**Subject line A:** Your site is in 8% of AI answers
**Subject line B:** The 8% problem
**Preview text:** Most owners guess zero, or "way more." Both are wrong. Here's how to find your real number in 30 minutes.

---

**The Number**

We ran AI citation audits across 50 established sites, and the median one appeared in just **8% of the AI answers about its own topics** — before any GEO work. That's the number this newsletter is named after, and it's ours: 20 buyer-language prompts per site, across ChatGPT, Perplexity and Gemini. Say it the other way round and it lands harder: for the median site, 92 out of every 100 AI conversations about its own patch happen as if it doesn't exist.

Here's what makes 8% interesting. It's not the number that stings — it's how wrong owners are about it. Most guess zero, braced for the worst. A few guess "way more than that, surely." Both camps are wrong, which is the whole argument for measuring instead of vibing. You can't fix a number you've never looked at.

**The Fix — find your real number in 30 minutes**

You don't need a tool for this. You need 30 minutes and a fresh browser tab.

1. **Write 20 prompts a real buyer would type.** Not keywords — sentences. "Best tool for X." "How do I do Y." "X vs Z." "Is X actually worth it." Steal them from sales calls, support tickets and the questions people email you at 11pm. Mix commercial and informational.
2. **Run all 20 through ChatGPT, Perplexity and Gemini.** Fresh chats every time, so your own history doesn't cook the results.
3. **For each answer, log three things:** Are you mentioned? Are you cited with a link? Who got cited instead of you? That third column is quietly the most useful thing you'll produce this month — it's your real competitor list, and it's usually not the one in your pitch deck.
4. **Count your citation share per engine.** Cited in 3 of 20 on ChatGPT? That's 15% there. Do it for all three; the spread between engines tells its own story.
5. **Write the number down and date it.** This is your baseline. Run the *same* 20 prompts next quarter — same prompts, or the comparison is fiction — and you'll know whether anything you did actually worked.

Is 20 prompts a scientific sample? No, and it doesn't need to be. It needs to be the same 20 every quarter, which turns a guess into a trend line. A trend line is something you can act on. A vibe isn't.

That's it. Thirty minutes, no tools, no budget line. The single cheapest visibility signal you can collect, and almost nobody collects it — which is exactly why having it puts you ahead. Do it once now, before you read another word about GEO.

**Seen in the Wild**

A SaaS company — decent product, real category — was cited **zero times** for its own core category term across all three engines. Zero. Meanwhile a Reddit thread where two strangers argued about that same category, and quoted this company's own blog post to settle it, got cited **six times.** The company had the authority. It just lived on someone else's page. The models trusted the conversation about them more than the site itself. That's not bad luck. That's a site that never made itself the obvious source — and it's fixable, which is what the next few issues are about.

**One Link**

When you're ready to stop doing the 20-prompt audit by hand every quarter and automate it: [AI Citation Monitoring: Tools and a DIY Method](/measurement/citation-monitoring/).

---

That's issue one. Go find your number — then go be the 8% that gets cited.

— Sunny

---

## Section 6 — Issue #2: "We deleted 400 pages. Traffic went up."

**Subject line A:** We deleted 400 pages. Traffic went up.
**Subject line B:** Fewer pages, more traffic
**Preview text:** The four-verdict system for deciding what stays, what goes, and what you leave alone. Plus: send me your URL.

---

**The Number**

**400.** That's how many pages I once deleted from a single site — and then watched the traffic go *up.* Clients love that conversation, right up until they see the graph. It's the most counterintuitive move in this whole job and one of the most reliable.

Here's why it works. Fewer, stronger pages beat a big pile of thin ones — for Google and for LLMs both — because retrieval favours a page that clearly *owns* an answer over five pages that each half-answer it. An answer engine picking one chunk to cite is even less forgiving than a results page: there's no page two for your fourth-best article about the same thing. Dead pages don't just sit there harmlessly. They dilute your authority and waste the crawl budget that should be spent on the pages that earn. And every one of them feels like sunk cost, which is exactly why nobody deletes them: you paid for those words once. That doesn't make them worth keeping.

**The Fix — give every page one of four verdicts**

Open your analytics and your Search Console side by side. Every page on your site gets exactly one verdict. No page gets "leave it and hope."

```
VERDICT      WHEN IT APPLIES                              WHAT YOU DO
---------    -----------------------------------------    ----------------------------
Prune        No traffic, no links, no conversions,        Delete or redirect. It's
             no strategic role                            dead weight. Let it go.

Merge        Two+ pages fighting over the same query      Combine into one strong page,
                                                          redirect the rest. Kills
                                                          cannibalisation.

Refresh      Ranks or converts, but has slipped           Update substantially — new
             or gone stale                                data, better answers, current
                                                          examples. Not a date change.

Leave alone  Performs well, isn't decaying                Nothing. Not every page needs
                                                          you this quarter. Walk away.
```

Two notes before you start swinging the axe. First, Prune doesn't mean "anything with low traffic dies" — that fourth criterion, *strategic role*, is doing real work. A page with no traffic that your sales emails link to as proof is a Leave Alone. Second, when you do prune, redirect anything with backlinks or age to its nearest living relative; delete outright only when there's genuinely nowhere sensible for the reader to land.

Work through the list in one sitting. Most sites find the split lands somewhere near prune-a-third, merge-a-few, refresh-the-winners, leave-the-rest. The scary column is Prune, and it's the one that moves the graph.

**Seen in the Wild**

New thing, starting this issue: real teardowns. Here's the first. A consultancy had 60 near-identical service pages — one per city, same 300 words with the town name swapped. Every one of them thin, none of them ranking, all of them competing with each other for the same head term. The fix wasn't 60 rewrites. It was merge them into six strong regional pages with actual local detail, and redirect the other 54. That's a Merge verdict and a Prune verdict doing the work of a rewrite you'll never have time for.

**Want yours here?** Hit reply and send me your URL. I read every one, and the sites I tear down come straight out of that inbox. Anonymous until you say otherwise.

**One Link**

The full four-verdict framework, with the exact criteria and how to run it across a whole inventory: [Content Audit for Live Sites: Prune, Merge, Refresh or Leave Alone](/content/audit/).

---

Go delete something today. Then go be the 8% that gets cited.

— Sunny

---

## Section 7 — Issue #3: "Grade your site before a robot does"

**Subject line A:** Grade your site before a robot does
**Subject line B:** The 6 checks a grader runs
**Preview text:** The six things that decide whether an AI can even read you. Do them by hand, or let the tool do it. Plus — forward this one.

---

**The Number**

<!-- FILL AT SEND: exact figure from the first 100 graded sites. Preferred framing below.
     Two distinct fallback situations — don't conflate them:
     (a) Grader is LIVE but fewer than 100 sites graded → use the FALLBACK sentence below.
     (b) Grader is NOT live → this issue does not send at all; swap with the next
         teardown-led issue per the §8 hard dependency. -->

**[FILL AT SEND: X] of the first 100 sites we graded block GPTBot in their robots.txt — while telling me they want more AI traffic.** You cannot be cited by an engine you've locked out of the building. It's the most common own-goal in AI visibility, and it's usually a CDN default nobody chose on purpose.

*(FALLBACK if fewer than 100 sites graded at send time: In the 50-site citation pilot, the median established site appeared in just 8% of AI answers — and a chunk of that gap traces to sites that are technically unreadable to the engines before content ever enters the picture.)*

**The Fix — the 6 checks, run them yourself**

Here's the thing about the grader we're building: it isn't a secret. It runs six checks, and you can do every one by hand right now. The tool is a convenience, not a magic trick.

1. **Bot access.** Open `yoursite.com/robots.txt`. Are GPTBot, ClaudeBot, PerplexityBot and Google-Extended allowed? If any are disallowed and you didn't decide that on purpose, that's your first fix.
2. **Initial-HTML content.** View source (not inspect — view source). Is your actual content in there, or does it only appear after JavaScript runs? What isn't in the source, most AI retrievers never see.
3. **Extractable definitions.** Does each key page answer its main question in a clean 40–60 word block near the top? Engines lift chunks. Give them a chunk to lift.
4. **Schema.** Is there structured data — Article, FAQPage — telling the machine what it's looking at? Not all schema matters, but the basics do.
5. **dateModified.** Is it there, and is it honest? Stale pages get trusted less. A real, recent update beats a faked date every time.
6. **Entity clarity.** Can a machine tell, in one pass, who you are and what you're the authority on? Vague "we do digital solutions" copy reads as noise to a retriever.

Do them in that order, because the first two are gates: if the bots can't get in, or can't see content when they do, checks three through six don't matter yet. Run all six on your three most important pages this fortnight. You'll find at least one broken. Everyone does — that's not an insult, it's the pitch. These are defaults nobody audits, which means fixing them is the rare move your competitors haven't made either.

**Seen in the Wild**

A B2B site with genuinely good content — proper depth, real expertise — was invisible across all three engines. Not under-cited. Invisible. The whole site rendered client-side, so view-source showed an empty shell where the content should be. The engines were arriving, finding nothing, and leaving. One rendering fix, and pages that had been dark for a year became retrievable overnight. All that quality, gated behind a technical decision nobody remembered making.

**One Link**

Don't want to run the six checks by hand? Let the machine do it in about a minute: [Grade my site](/grader/).

---

One favour on this one: if you know someone whose site is quietly invisible, **forward this.** A free tool that tells you your number is about the only thing anyone forwards without being asked. Then go be the 8% that gets cited.

— Sunny

<!-- CTA EXPERIMENT: Issue #3 is the first issue permitted a forward-this ask. Rationale: a free
     tool is the only asset people forward unprompted, so this is where the ask earns its keep.
     Track forward-driven signups (Buttondown referral param on the /grader/ link) as the read. -->

---

## Section 8 — Production plan & metrics

*(Internal. Neutral register. Team = Sunny + 1. The "+1" is editor/ops: Buttondown setup, signup-page build, QA sends, list hygiene.)*

### Sequencing

| Week | Milestone | Owner | Dependency / note |
|---|---|---|---|
| 1 | Name/trademark check clears; Buttondown configured (double opt-in, from-name, reply-to → Sunny); `/newsletter/` page live with Issue #1 as the lead magnet (auto-delivered on opt-in, behind the welcome email); welcome autoresponder loaded | Sunny (name check) + editor (build) | Name lock gates the page. ~30 min check. |
| 2 | Issue #1 sends to the founding list; LinkedIn audience push drives signups | Sunny (send) + editor (QA) | LinkedIn push is a separate deliverable in Sunny's voice — do not draft it here. |
| 4 | Issue #2 sends; Teardowns reply-pipeline opens ("send me your URL") | Sunny + editor | Replies start feeding the teardown backlog from here. |
| 6 | Issue #3 sends, timed to grader availability | Sunny + editor | **Hard dependency:** Issue #3 leans on the grader at `/grader/`. If the grader slips, swap Issue #3 with the next teardown-led issue and hold #3 until the tool is live. Never ship the grader One Link before the page resolves. |

The newsletter is the vehicle for the "email list" the 90-day launch plan already counts on — the list the teardowns feed and the citation study eventually launches to. This document is how that list gets built; it is not a separate initiative.

### Per-issue budget

- **3 hours** Sunny writing. **1 hour** editor QA and send. If an issue takes longer than that, it's too long — cut a segment, not the deadline. The four-segment skeleton exists precisely so writing doesn't sprawl.

### KPIs

| Metric | Target | Read / rationale |
|---|---|---|
| Subscribers by Issue #6 | **500** | Matches the launch-plan KPI. Small-list era; quality of open beats size. |
| Open rate | **≥45%** | Small engaged list should clear this easily. Anything under 40% means the subject lines are broken, not the content. |
| CTR on the One Link | **≥15%** (floor joke: 8%) | One link, plain text, engaged list realistically pulls 15–30%. We set the target honestly at 15% so a real dip can't hide. The 8% gag stays as the floor: if a one-link email only converts 8%, we've become our own cautionary tale — and that's the alarm, not the goal. |
| Replies per issue | **≥5 by Issue #3** | A first-class metric, not vanity. Replies are the teardown pipeline and the clearest signal the "seen your site before" positioning is landing. |

### Named claims this concept commits to

- Fortnightly beats weekly for a two-person team.
- The name is **The 8%**, and the name is the study.
- Send slot: Tuesday, 08:00 ET.
- 600–900 words per issue.
- **Exactly one link per issue** — enforced, no secondary inline links.
- Buttondown as the ESP.
- Issue #1 is delivered on signup — the CTA's promise is literal.
- 500 subscribers by Issue #6.
- CTR target set honestly at 15%, not at the 8% punchline.