# Fable's review notes on pillar #1 (kept for the record)

Notes from the review pass on the Opus draft. All fixes were applied to the final version at `content/pillars/how-to-market-a-website.md`.

---

## 1) VOICE MATCH

Mostly Sunny. Six lines flunked:

1. **"Search behaviour is fragmenting away from ten blue links."** — Analyst-deck speak. Sunny doesn't say "fragmenting". Fix: *"Search is leaving the ten blue links."*
2. **"That's the entity."** — Internal strategy-doc jargon leaked onto the page. Readers don't know or care what "the entity" is. Fix: *"That's the whole job."*
3. **"That assumption is the whole edge, because it's the one every incumbent guide ignores."** — "Incumbent" is pitch-deck vocabulary. Fix: *"every big-name guide ignores."*
4. **"some crawlers and most LLM retrievers may never see it"** — "may" is a hedge; the GEO checklist explicitly bans it and Sunny doesn't hedge. Fix: *"most LLM retrievers won't see it."*
5. **"paid pours fuel on a working fire"** — Muddled metaphor (fuel on fire = bad thing). Fix: *"paid is a multiplier on a machine that works."*
6. **FAQ: "It depends on whether you're fixing or scaling…"** — "It depends" as a first sentence is the most HubSpot move on the page, and it violates the answer-first rule. Fix: lead with a stated position and actual ratios.

## 2) GEO/AEO STRUCTURE

1. **Definition block is 25 words; spec says 40–60.** The bolded opener is too thin to be the extractable chunk. Fix: extend the bolded definition to ~50 words.
2. **No framework graphic.** Outline requires numbered list + image with descriptive alt. Draft has the list only. Fix: add image placeholder with real alt text (info also in HTML list, per checklist).
3. **No schema note anywhere.** Checklist requires Article + FAQPage + BreadcrumbList + Person schema, bot-access verification, initial-HTML rendering. Fix: production-notes comment block so it ships, not gets forgotten.
4. **Chunk dependency in FAQ:** "which is exactly what Step 3 is about" — fails the self-contained-chunk rule. Fix: rewrite standalone.
5. Stats: exactly 3 cited — meets the floor, barely. Kept all three; flagged for link verification pre-publish (Ahrefs URL especially).

## 3) OUTLINE ADHERENCE

1. **Step 1 AI-visibility section has zero internal links.** Outline mandates links to Tracking AI Traffic + AI Citation Monitoring. Fix: added.
2. **Step 2 checklist missing.** Outline: "Q&A block; checklist; internal links." Draft shipped two of three. Fix: added the fix-order checklist.
3. **"Website marketing plan" (secondary query) never covered.** No sequencing/quarter framing, no link to the Plan Template cluster page. Fix: added to the timeline section.
4. **"How to increase website traffic" (qualified-traffic framing) untouched.** Fix: one deliberate line in the scope section.
5. **Underweight: ~3,300 words vs 4,500–5,500 target.** Thinnest sections: six-metrics table (no prose support), Email (4 sentences), Digital PR, Repurposing. Fix: deepened those; revision lands ~4,300.
6. Mistakes section gerund rule: passes. TL;DR anchors: pass. Close: passes (one CTA).

## 4) WEDGE

1. **The five-disciplines list is the one section a competitor could have written.** It's a channel list wearing our clothes. Fix: map each discipline to its step in the sequence — the list itself now demonstrates the wedge.
2. **Email/Repurposing/PR subsections drift generic** ("owned audience is the moat" is on every HubSpot slide since 2019). Fix: added named positions and numbers ("a 2,000-person list that opens beats 50,000 visits that bounce"; use your own study as the PR asset).
3. **Cost FAQ hedges away the differentiation.** We have a budget-ratios page; the answer should state ratios. Fixed.
4. The 8%-median-citation-share original data is the paraphrase-proof asset and it's buried in Step 1. Fix: teased in the intro so it's in the first retrievable chunk.

---

## Pre-publish checklist (from the production-notes block)

- [ ] Verify SparkToro, Gartner, Ahrefs source links resolve
- [x] Framework image cut — the framework ships as the numbered list below it; no image needed.
- [ ] Article + FAQPage + BreadcrumbList schema in place
- [ ] Person schema for Sunny Patel with `sameAs` → LinkedIn
- [ ] GPTBot, ClaudeBot, PerplexityBot, Google-Extended access verified
- [ ] All content present in initial HTML (no client-side rendering)
- [ ] `dateModified` visible on the page
- [ ] Refresh reminder set for ~January 2027 with a 15%+ substantive change
