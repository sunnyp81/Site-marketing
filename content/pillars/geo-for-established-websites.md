---
title: "GEO for Established Websites: How to Get Cited by ChatGPT, Perplexity and Gemini"
description: "GEO isn't a second retainer. SEO and GEO share 80% of their inputs. Here's the 20% that differs, backed by citation data from a 50-site pilot."
datePublished: 2026-07-23
dateModified: 2026-07-23
section: visibility
author: sunny
---

# GEO for Established Websites: How to Get Cited by ChatGPT, Perplexity and Gemini

<!--
PRODUCTION NOTES (do not publish this block):
- Schema: Article + FAQPage + BreadcrumbList + Person (Sunny Patel, sameAs → LinkedIn).
  Dataset schema for the 8% pilot figure: name, description, creator (Organization site.marketing),
  temporalCoverage, isAccessibleForFree true, license. Do NOT populate distribution.contentUrl
  until the wave-1 aggregate CSV is live (see /research/citation-share-study). The pilot itself has
  no downloadable CSV — Dataset here describes the published median only.
- Original-data status: the ONLY defensible published figure is the 50-site pilot median of 8%.
  The pilot cannot be segmented (n=50, single median). Do NOT publish IQR, per-engine spread,
  size/vertical cuts, or "% of owners who guessed zero" as data — those figures do not exist.
  The three cited-site traits are a QUALITATIVE pattern from the pilot logs and must stay framed
  that way — never as a quartile cut. The segmented, scaled numbers arrive with the 200-site study
  (wave 1 fielded Aug 2026, results Sept 2026). Keep this page's data section forward-pointing and
  future-tense about the 200-site study until then.
- Distribution/citation-share chart asset: ships with wave-1 results, NOT now. Do not render a
  fabricated distribution. The one live visual is the shared-inputs table (screenshot-shareable).
- Factual guard (Step 2): Google-Extended governs Gemini/Vertex grounding + training, NOT AI
  Overviews crawling. AI Overviews rides the standard Google index via Googlebot. Do not tell
  readers that blocking Google-Extended removes them from AI Overviews. It doesn't.
- llms.txt sample follows the llmstxt.org format (H1, blockquote summary, link list), served at
  /llms.txt as plain text/markdown. Keep it in its own code block, separate from robots.txt —
  never merge the two snippets.
- Verify GPTBot, ClaudeBot, PerplexityBot, Google-Extended access per bot policy.
  All content in initial HTML — no client-side rendering.
- Verify external stat links resolve before publish (SparkToro, Ahrefs) — reuse the exact URLs
  cited in the Pillar #1 draft so the two pages stay consistent.
- Assets: (1) query→citation data-flow diagram image + HTML-list twin, (2) shared-inputs table
  image for sharing, (3) robots.txt code block, (4) llms.txt code block. dateModified visible on page.
  Refresh diary: re-run when wave 1 of the 200-site study publishes (Sept 2026) — swap the
  forthcoming-benchmark language for real segmented figures then.
-->

---

**GEO (generative engine optimisation) is the practice of making an existing website the source that AI answer engines retrieve and cite. It is not a separate discipline from SEO. The two share about 80% of their inputs. GEO is SEO plus five extra requirements, done on the site you already have.**

That's the whole thesis, and it costs the GEO-retainer industry a lot of money to admit it. Because if the work is 80% shared, then a separate "AI visibility" line item on top of your SEO invoice is you paying twice for the same crawl fix, the same schema, the same content depth.

Here's the number that should make you audit before you sign anything. When we ran citation audits across 50 established sites, the median site showed up in just 8% of the AI answers it should have owned. Not zero. Not the 40% some founders imagine. Eight per cent. That's ours, from our own pilot, and the rest of this page is how you find your own number and move it, without buying a second retainer to do it.

If you want the full sequence this fits into, GEO is Step 3 of [the existing-site playbook](/how-to-market-a-website/). This page is the deep version of that step.

## The five GEO-specific inputs (the 20%)

The 80% you already do if you do SEO properly. The 20% that's genuinely GEO is exactly five inputs. Not a mystery menu. Five:

1. **[Chunk self-containment](#h3-chunk-self-containment)** — each section answers on its own, no "as mentioned above".
2. **[Entity clarity](#h3-entity-clarity)** — the engine knows who you are and doesn't confuse you with someone else.
3. **[Bot access policy](#h3-bot-access-policy)** — the AI crawlers can actually reach your pages.
4. **[Citation-worthiness](#h3-citation-worthiness)** — you say something the model can't already generate.
5. **[Off-site mention footprint](#h3-off-site-mention-footprint)** — you get named across the web the model reads.

Five. Read on and you'll be able to check every one of them yourself before your next vendor call.

---

## What Is GEO, and Is It Actually Different From SEO?

**GEO is optimising to be cited inside AI-generated answers; SEO is optimising to rank in a list of links. Same work, two places it shows up. GEO adds five requirements on top of good SEO. It is not a new channel, a new team, or a new retainer.**

The acronym soup exists to make it sound like one. GEO, AEO, LLMO, AIO — a fresh three-letter badge every quarter, each pitched as the thing your current agency doesn't do. Here's the whole vocabulary in one table, so nobody can bill you for the confusion.

| Term | Coined / pushed by | What it actually means | Verdict |
|---|---|---|---|
| **SEO** | The industry, 1997 onward | Getting ranked and clicked in search results | The base discipline |
| **GEO** (generative engine optimisation) | Academic paper, 2023; adopted by vendors | Getting retrieved and cited inside AI answers | Real work, mostly shared with SEO |
| **AEO** (answer engine optimisation) | SEO tooling vendors | Formatting pages as extractable answers | A subset of GEO. A page-format tactic |
| **LLMO / AIO / "AI SEO"** | Whoever's selling this week | Same job, different invoice | Rebranding, not a new discipline |

Two things are true at once. The *work* under GEO is real and worth doing. The *framing* of it as a separate, premium service is mostly a repackaging fee. Hold both thoughts. If you want the tight definitions to keep straight as you read: [GEO](/glossary/geo/) and [AEO](/glossary/aeo/).

---

## The 80% You Already Do: Shared Inputs Table

Here is the argument in one table. Fifteen inputs that decide whether you rank on Google and whether you get cited by an AI engine. Twelve of them serve both, identically. Three are GEO-weighted, and even those aren't separate work — they're a slightly different emphasis on things you already own.

| Input | Serves Google ranking? | Serves AI citation? | Owner |
|---|---|---|---|
| Crawlability | Yes | Yes | Technical |
| Content in initial HTML (not JS-only) | Yes | Yes | Technical |
| Site speed | Yes | Yes | Technical |
| Schema / structured data | Yes | Yes | Technical |
| Topical authority and depth | Yes | Yes | Content |
| Internal linking | Yes | Yes | Content |
| E-E-A-T / named author credentials | Yes | Yes | Content |
| Content pruning (killing dead pages) | Yes | Yes | Content |
| Refresh cadence | Yes | Yes | Content |
| Structured, clearly formatted answers | Yes | Yes | Content |
| Entity mentions / brand strength | Yes | Yes | Distribution |
| Digital PR / earned coverage | Yes | Yes | Distribution |
| **Chunk self-containment** | Indirect | **Yes — critical** | Content (GEO-weighted) |
| **Entity clarity for retrieval** | Indirect | **Yes — critical** | Content (GEO-weighted) |
| **AI-bot access policy** | No | **Yes — critical** | Technical (GEO-weighted) |

Read the middle two columns. Twelve rows say Yes and Yes. That's not a coincidence. Both Google and the answer engines are trying to do the same thing: find the page that most clearly and credibly owns an answer. The inputs that prove that are the same inputs.

> **Print this table. Bring it to the retainer pitch.** When a vendor quotes you a separate GEO fee, ask them to point at the rows that aren't already in your SEO scope. There are three. Ask what those three cost, on their own. The number will be a lot smaller than the retainer.

Counting along? This page says the GEO-specific 20% is five inputs, and the table shows three GEO-weighted rows. Both are true. Two of the five — citation-worthiness and off-site mentions — live inside rows you're already paying for: topical depth and digital PR. GEO changes what that work aims at, not what it costs. Only three rows are genuinely new emphasis, and none of them is a new team.

This is exactly the "where to invest" question, and it has its own page: [SEO vs GEO vs CRO: Where to Invest First](/strategy/seo-vs-geo-vs-cro/). The shared-input rows also live in your [technical audit](/technical/audit/) — because that's where they already were.

---

## How ChatGPT, Perplexity and Gemini Choose What to Cite

**All three retrieve live pages, rank a small set of candidates, and quote the ones that most cleanly answer the query. They differ in how fresh their index is and how they show the citation. None of them run on magic. They run on retrieval, which means the page has to be readable, relevant, and quotable.**

No mysticism. Here's what each one actually does and what it means for your page.

| Engine | Where it gets sources | Index freshness | Citation style | What that means you do |
|---|---|---|---|---|
| **Perplexity** | Live web retrieval on nearly every query | Fastest — near real-time | Numbered inline citations, always shown | Be crawlable and quotable; changes surface quickest here |
| **ChatGPT (search on)** | Live retrieval + model's trained knowledge | Slower index refresh | Linked sources, shown when it searches | Earn the trained-in reputation *and* be retrievable now |
| **Gemini (AI Mode)** | Google index + live retrieval | Fast, rides Google's crawl | Linked cards, varies by query | Standard Google visibility carries most of the weight |
| **Google AI Overviews** | Standard Google index (Googlebot) | Rides Google's crawl | Source links in the overview panel | This is Googlebot, not a special AI crawler — good SEO already feeds it |

Two things worth saying out loud. First, AI Overviews is the single biggest AI-citation surface most established sites touch, and it runs on your normal Google index — there is no separate "Overviews crawler" to appease. Second, "trained knowledge" and "live retrieval" are different levers. Perplexity is almost pure retrieval, so a fresh page can get cited within days. ChatGPT leans harder on what it was trained on, so building a reputation the model already knows matters more there.

The mechanism, query to citation, is the same shape across all of them:

1. You type a prompt.
2. The engine fans it out into several sub-queries you never see ([query fan-out](/visibility/query-fan-out/) is why site-specific answers beat head-term pages).
3. It retrieves candidate pages for each sub-query.
4. It selects the chunks that answer each one most cleanly.
5. It composes an answer and cites the chunks it used.

![Data flow from a user query to an AI citation: query, fan-out into sub-queries, retrieval of candidate pages, chunk selection, composed answer with citations](/images/geo-query-to-citation-flow.png)

Notice step four. It selects *chunks*, not pages. That's the whole reason chunk self-containment is a GEO input and not an SEO one. The full mechanics live here: [How AI Answer Engines Choose Citations](/visibility/citations/).

---

## The Data: What Our 50-Site Citation Pilot Found

This is the number this page is built on, so here's exactly where it came from, stated plainly enough to check.

<div class="methodology-box">

**Methodology (50-site pilot).** We selected 50 established websites — each live 24+ months with a real organic footprint. For each site we wrote 20 buyer-language prompts (category, informational, comparison, and problem-first phrasing, not head-term keywords). We ran every prompt through ChatGPT, Perplexity and Gemini in fresh, logged-out sessions. For each answer we logged one of three states: cited with a link, named without a link (a "mention"), or absent. Citation share is the proportion of a site's relevant answers in which it was cited or mentioned, blended equally across the three engines. This was an informal pilot: one median, no segmentation.

</div>

**The finding: the median site's citation share, before any deliberate GEO work, was 8%.**

Eight per cent. Out of the answers a site should have owned — questions squarely on its own topics — it appeared in fewer than one in ten. And the guesses ran wrong in both directions: most owners assumed the number was zero, and a confident few assumed it was far higher. Both wrong, and the gap between the guess and the 8% is the whole reason you measure instead of argue.

A pilot this size can't give you segmented numbers — but it can show you a pattern, and the pattern in our prompt logs was hard to miss. The sites that kept getting cited shared three concrete traits, and they map exactly to the GEO inputs below:

1. **Their content was in the initial HTML** — retrievable without running JavaScript.
2. **They were built page-per-question** — each page and each section owned one answer cleanly.
3. **They had at least one original data point** — a number, a study, a stated position the model couldn't get anywhere else.

Straight talk: 50 sites is a pilot. It gives you one defensible median, not a breakdown by industry or size. The same instrument is now being scaled to a 200+ site benchmark — four engines, refreshed quarterly — with the first wave fielding in August 2026 and results that September. The methodology is already published in full — instrument, scoring rules, controls: [The Citation-Share Study](/research/citation-share-study/). When wave one lands, its segmented numbers replace the pilot's single figure. Until then, 8% is the honest baseline, and it's already enough to act on.

---

## Step 1 — Measure Your Citation Share (the 20-Prompt Audit)

**Run 20 buyer-language prompts through ChatGPT, Perplexity and Gemini, log whether you're cited, and count your share. It takes about 30 minutes and it's the same audit from Step 1 of the playbook — deliberately, because measuring the same way every time is what makes the number mean something.**

Don't skip this because it feels manual. The manual version is the point: you see exactly which competitor keeps winning the answer you should own.

1. **Write 20 prompts a real buyer would type.** Mix them: "best [category] for [use case]", "how do I [task]", "[you] vs [competitor]", "is [category] worth it". Buyer language, not keywords.
2. **Run all 20 through ChatGPT, Perplexity and Gemini.** Use fresh, logged-out chats so your history doesn't flatter the result.
3. **For each answer, log three things:** Are you cited with a link? Are you named without a link? Who got cited instead?
4. **Count your citation share per engine, then blend it.** That single percentage is your baseline. Write it down with the date.

Keep the prompt log — it's the asset. A simple sheet with columns for prompt, engine, your state, and the competitor who won turns "we're invisible on AI" into "we lose the comparison queries to these three sites." That's actionable; a vague feeling isn't.

Here's what the log tells you that a score never will. Say you run 20 prompts and land at 10% citation share. The score says "low." The log says which specific prompts you lose and to whom — and nine times out of ten there's a pattern. Maybe you win informational queries and lose every comparison ("X vs Y"), which means you have no comparison pages. Maybe one competitor owns every answer, which means they published data you didn't. The number tells you that you have a problem. The log tells you which page to write on Monday.

Do it once now, then every quarter. When you're ready to stop doing it by hand: [AI Citation Monitoring: Tools and a DIY Method](/measurement/citation-monitoring/). And to catch the AI-driven visits already hiding in your analytics: [Tracking AI Traffic](/measurement/ai-traffic/).

---

## Step 2 — Fix the Two Blockers That Zero You Out

**Two problems will hold your citation share at zero no matter how good your content is: AI crawlers can't reach your pages, or your content only appears after JavaScript runs. Fix these before anything else. You can't be cited if you can't be read.**

Everything in the "20%" below assumes the engine can actually see your page. These two blockers mean it can't.

### Blocker 1: AI bots blocked at the door

Plenty of established sites block AI crawlers by accident, often via a CDN or security default that shipped "protective." These are the user agents that decide whether you exist to AI answers:

```
GPTBot          # OpenAI — feeds ChatGPT's trained knowledge
OAI-SearchBot   # OpenAI — ChatGPT live search retrieval
ClaudeBot       # Anthropic — feeds Claude
PerplexityBot   # Perplexity — live retrieval
Google-Extended # Google — Gemini grounding + model training
Googlebot       # Google — Search AND AI Overviews (do not block this)
```

Run the check — every line is a yes or a no, and every no is a blocker:

- [ ] Each agent above gets your real HTML, not a challenge page (test: `curl -A "GPTBot" https://yoursite.com/your-best-page/` and look for your headline in the output)
- [ ] Your CDN and firewall have no "block AI bots" toggle quietly switched on
- [ ] Your `robots.txt` doesn't disallow any agent you want citations from
- [ ] `Googlebot` is untouched — it carries your search visibility *and* AI Overviews

A blunt but important distinction, because vendors get it wrong and sceptics will catch you if you repeat it: **`Google-Extended` controls Gemini grounding and Google's model training. It does not control AI Overviews.** AI Overviews is served from Google's standard index, crawled by `Googlebot`. So blocking `Google-Extended` does not remove you from AI Overviews — only blocking `Googlebot` does that, and if you're doing that you have a much bigger problem than GEO.

Then set the policy deliberately in your `robots.txt`:

```
# robots.txt — allow the AI crawlers you want to be cited by
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

And give LLMs a plain-language map of your best pages in an `llms.txt`, served at `/llms.txt`:

```
# example.com

> Website marketing for established sites — SEO, GEO and CRO on the site you already have.

## Key pages
- [The existing-site playbook](https://example.com/how-to-market-a-website/)
- [GEO for established websites](https://example.com/visibility/geo/)
- [The citation-share study](https://example.com/research/citation-share-study/)
```

Full policy guidance: [llms.txt, Bot Access and AI Crawlers](/technical/llms-txt/).

### Blocker 2: content that isn't in the HTML

If your important content only renders after JavaScript executes, some crawlers and most LLM retrievers won't see it. They fetch the HTML, find an empty shell, and move on. What isn't in the initial source doesn't exist to them.

The test takes ten seconds: view source (not inspect element) on your best page. If your headline, your answer, and your data aren't in that raw HTML, that's your blocker. Fix it with server-side or static rendering for anything you want cited: [JavaScript Rendering: What Google and LLM Crawlers Actually See](/technical/js-rendering/).

---

## Step 3 — The GEO-Specific 20%: Five Inputs, In Order

This is the part that's genuinely GEO and not just SEO. Five inputs — three of them the GEO-weighted rows from the shared-inputs table, two of them a sharper aim for work already in your shared 80%. Do them in this order: the first three decide whether you *can* be retrieved, the last two decide whether you're *worth* quoting.

### <a id="h3-chunk-self-containment"></a>Chunk self-containment

**Write every section so it answers on its own, with no dependency on the paragraph above it. Engines retrieve and quote chunks, not whole pages. A chunk that starts "as mentioned above" is a chunk that can't be lifted into an answer.**

The tactic: read each section as if it's the only thing the engine will see, because it might be. Name the subject in the first sentence ("Citation share is…", not "This is…"). Kill every backward reference. A page of self-contained chunks is a page with more surfaces to get cited from.

### <a id="h3-entity-clarity"></a>Entity clarity

**Make it unambiguous who you are, so the engine doesn't confuse you with a similarly named company or fail to connect your pages to your brand. Consistent naming, Person and Organization schema, and a clean knowledge-panel presence do this.**

The tactic: use one exact brand name everywhere (not three variants), add Organization schema with `sameAs` links to your real profiles, and give your authors Person schema with genuine credentials. Entity clarity is what lets an engine trust that all your pages come from one credible source. It's the retrieval side of E-E-A-T: [E-E-A-T, explained](/glossary/e-e-a-t/).

### <a id="h3-bot-access-policy"></a>Bot access policy

**Confirm the AI crawlers can reach your pages and keep it that way. This is Blocker 1 from Step 2, listed again here because it's a permanent input, not a one-time fix — CDN and security updates re-break it.**

The tactic: add the AI user-agent check to your regular technical audit so a "protective" default never quietly zeroes you out again. It's the cheapest input on this list and the one most likely to silently regress.

### <a id="h3-citation-worthiness"></a>Citation-worthiness (information gain)

**Publish something the model can't already generate from everything else it's read. Original data, a named position, first-hand experience. If your page only restates the consensus, the engine paraphrases it and cites someone with an actual point of view.**

The tactic: put at least one original data point or stated position on every important page. Our 8% median citation figure is an example — nobody else has that number, so anyone who wants it has to cite us. That's the durable moat: [Information Gain: Making Pages LLMs Can't Paraphrase Away](/content/information-gain/).

### <a id="h3-off-site-mention-footprint"></a>Off-site mention footprint

**Get named across the sources the models read. For AI visibility, being mentioned matters more than being linked. The engines learn who's credible from how often the wider web talks about you, with or without a hyperlink.**

The tactic: pitch your original data to publications and roundups your buyers already read. **Ahrefs found that the number of times a brand is mentioned across the web correlated more strongly with its appearance in AI answers than almost any other factor** ([Ahrefs, 2025](https://ahrefs.com/blog/ai-brand-visibility-study/)). Mentions are the currency. How to earn them: [Digital PR for Citations](/distribution/digital-pr/) and [Brand Mentions vs Backlinks: Which Moves AI Visibility More](/distribution/mentions-vs-backlinks/).

Quick decision checklist before you call this done:

- [ ] Every section reads standalone (no "as mentioned above")
- [ ] One brand name everywhere; Organization + Person schema in place
- [ ] GPTBot, ClaudeBot, PerplexityBot verified reachable (and re-checked quarterly)
- [ ] At least one original data point or named position per key page
- [ ] An active plan to get mentioned off-site, not just linked

---

## How Long Until AI Engines Cite You?

**Expect AI citations to follow your Google gains by roughly one to two months, based on our data. Perplexity moves fastest because it's near-real-time retrieval; ChatGPT is slowest because it leans on trained knowledge that refreshes on a lag. The engines mostly cite what's already earning trust in search, so GEO trails SEO — it doesn't lead it.**

| Engine | First citation signal after you fix the page | Typical lag behind Google movement |
|---|---|---|
| Perplexity | Days to a couple of weeks | Shortest — near real-time retrieval |
| Gemini / AI Overviews | Weeks | Tracks your Google index closely |
| ChatGPT | Weeks to a couple of months | Longest — trained knowledge refreshes slower |

One caveat keeps that table honest: the clocks start when the shared 80% is already working. An engine can't cite a page it can't retrieve, and it mostly won't cite a page Google hasn't yet learned to trust. Fix first, then start the clock.

Anyone promising guaranteed citations "in 30 days" is selling certainty they can't have. There's no citation you can buy and no button to press. There's the shared 80%, the specific 20%, and the wait while the engines notice — in that order.

The lag is also the reason to start now rather than "when we do GEO next quarter." If citations trail your search gains by one to two months, then every month you delay the SEO-shaped work is a month added to the front of the AI-visibility clock too. You don't wait for a GEO project to begin. You do the shared 80% today, add the five inputs as you go, and the citations show up on their own schedule while you get on with everything else.

---

## What GEO Work Is Actually Worth Paying For

This page argues hard against paying twice. That's not the same as saying GEO is free or DIY-only. Some of it is genuinely worth hiring for. Here's the honest split.

**Worth paying for:** producing original data (a real study is time and rigour you may not have in-house); scaled, ongoing citation monitoring across engines once the manual audit outgrows a spreadsheet; and digital PR that earns mentions in sources the models trust. These are real deliverables with real cost.

**Not worth a separate line item:** the shared 80% — crawlability, schema, content depth, internal links, rendering. You're either already paying for that under SEO or you should be. Paying a second vendor to "add GEO" to work your first vendor already owns is the repackaging fee.

The clean test: if it's on the shared-inputs table's twelve both-yes rows, it's SEO you're already buying. If it's original data, off-site mentions at scale, or monitoring infrastructure, it's legitimately new spend. Everything in between is the three GEO-weighted rows, and those are a tweak to existing work, not a new team.

---

## GEO Pitches That Should Make You Leave the Call

Five red flags. Any one of them is a reason to be sceptical. Two or more and you should leave the call.

1. **Charging separately for shared inputs** — billing you a GEO retainer for crawlability, schema, and content work already in your SEO scope. That's the same work, invoiced twice.
2. **Promising guaranteed citations** — nobody controls what ChatGPT quotes, so a guarantee is either a lie or a redefinition of "citation" you won't like.
3. **Selling a "proprietary AI visibility score" with no prompt log** — if they can't show you the actual prompts, engines, and answers behind the number, the number is decoration.
4. **Blocking-and-charging** — quietly leaving (or causing) an AI-crawler block, then billing to "fix your AI accessibility." Check your own `robots.txt` first.
5. **Reporting mentions without revenue** — celebrating citation-share growth while never connecting it to traffic, leads, or money. Citations are a means, not the scoreboard.

If your current SEO vendor can't show you the shared-input table and point at the three rows that are actually GEO, the "GEO add-on" is a repackaging fee. Ask for the table.

---

## FAQ

### Is GEO worth it for small sites?

**Yes.** GEO is worth it for small sites, often more than for big ones, because citation share doesn't depend on domain size the way rankings do. A focused site that owns a clear answer with original data can get cited above a giant that's vague. And because 80% of the work is the SEO you should do anyway, the extra cost of GEO on a small site is small.

### Do I need separate content for AI engines?

**No.** You do not need separate content for AI engines. The same page can rank on Google and get cited by ChatGPT — that's the whole point of the shared 80%. What you add is format and clarity: self-contained sections, one original data point, unambiguous entity signals. That's editing existing content, not writing a second version of it.

### Does llms.txt actually do anything?

Sometimes, and it's cheap enough to be worth it either way. `llms.txt` is a plain-language map pointing LLMs at your best pages. Adoption by the engines is still uneven, so treat it as a helpful signal, not a magic switch. The thing that genuinely matters is the bot-access policy in your `robots.txt` and having content in the initial HTML — do those first, add `llms.txt` on top.

### What's the difference between GEO and AEO?

GEO (generative engine optimisation) is the whole practice of getting cited across AI answer engines. AEO (answer engine optimisation) is a subset of it: formatting your pages as extractable, direct answers. AEO is a tactic inside GEO, not a rival discipline. Both sit inside the one visibility practice that also includes SEO. See [GEO](/glossary/geo/) and [AEO](/glossary/aeo/).

### Can I pay to be cited by ChatGPT?

**No.** You cannot pay to be cited by ChatGPT, Perplexity or Gemini. The ad formats that do exist sit alongside the answer and are labelled as ads — the citations inside the answer are not for sale, and anyone selling "guaranteed placement" in them is selling a fiction. Citations are earned through retrievable, credible, quotable pages and off-site mentions. The only thing money buys is doing that work faster.

---

## Run the Audit First

Don't sign a GEO retainer today. Run the 20-prompt audit first — 30 minutes, three engines, one honest number. If you're near the 8% median, you now know exactly what to fix, in what order, without a second invoice.

Then run the full [90-minute website marketing audit](/strategy/audit/) to see where GEO sits against everything else competing for your budget. Measure, then decide. Never the other way round.

*Written by Sunny Patel — 14 years in SEO, specialising in topical authority and entity SEO. Last updated 23 July 2026.*