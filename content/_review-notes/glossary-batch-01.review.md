# Review notes: Glossary Batch #1 (8 Definition Pages)

File: `content/glossary/batch-01.md`
Register: sunny-voice
Category: content · Leverage: high

---

**Verdict: ship after fixes (now applied). Strong batch — the failures were seam-level, not structural.**

**1) VOICE MATCH — B+, one leak, one spelling wobble**
- Register separation is genuinely clean: all 8 definition blocks are neutral-extractable, zero first person, zero jokes; the stances are first-person, dry, opinionated — matches the byline convention in `content/site/positioning-homepage-about.md` ("first person, dry, opinionated" = Sunny; neutral reference labelled as such).
- LEAK: "Ours on this batch is the 8% median citation share" (Information gain stance). "This batch" is production-room vocabulary on a reader-facing page — nobody browsing /glossary/information-gain/ knows what a "batch" is. FIX: "Ours is the 8% median citation share from our audit of 50 established sites."
- SPELLING: "The optimized unit is the citation" (GEO definition) vs "Optimising to be cited" three lines down in the same page's table. Site is UK English throughout (pillar writes "per cent"). FIX: "optimised" — word count stays 55, so the "GEO defined in 55 words" meta survives.
- Best sunny lines land: "training data with a URL", "a citation embargo you signed yourself", "same work, same audit, same you."

**2) STRUCTURE — A-, spec followed, one internal contradiction**
- All 8 definition blocks verified 54–59 words (counted, not trusted). Skeleton identical across 8. Exactly one variable element per page. Metas under ~155 chars. No link opens a paragraph. Split-ready with front-matter + DefinedTerm stubs per entry.
- The draft's "Verified: 4 tables" claim is a miscount — it's 3 tables (GEO, E-E-A-T, Dark AI) + 1 formula block (Topical authority). The per-page spec wins over the plan's roll-up asset count; noted, not a content defect.
- Header comment error: "pages 5, 7 and 8 link up to the pillar + the live section ROOT" — page 5 (E-E-A-T) actually links to live /visibility/ and /content/ cluster pages, not a root. FIX: comment corrected so the Day-2 QA pass doesn't chase a phantom.
- CONTRADICTION + DIRECTION BUG: Topical authority stance said "The other two levers you earn slowly: historical data… and cost of retrieval drops every time you clean up rendering" — retrieval cost is the controllable-now lever, and two sentences later the text says so. Worse: "Bring the history down over time" — history goes UP over time. FIX: rewritten (~110 words, was ~140): history is the only slow variable, coverage + retrieval cost are on the table now, "Earn the history slowly. Bring the coverage all at once."
- GEO footer silently dropped the plan's third link (/measurement/ai-traffic/) with no trace. FIX: [PHASE-2] comment added, matching how pages 7–8 handle deferred targets.

**3) WEDGE — A. This is not what an incumbent would produce.**
- Every page carries a named stance and a number: 80% shared inputs / double-billing, 40–60 word chunk with the page as its own demo, 1-original-number bar, the authority formula stated verbatim, 4 sub-hour E-E-A-T proofs, 1 prompt → 6 named sub-queries, <10k URLs = ignore classic crawl budget, direct-traffic-is-lying + 20-prompt audit. Zero Wikipedia paraphrase.
- The 8% stat is real first-party data — verified against `content/pillars/how-to-market-a-website.md` (50-site audit, method public at /research/citation-share-study/) — and correctly deployed as the batch's only "proprietary" number; the rest are honestly framed as thresholds. That discipline is what keeps claim #3 from being self-refuting.
- The query fan-out worked example (6 named sub-queries for "How do I get my website cited by ChatGPT?") is the batch's most citable original asset, as planned, and it's ours — not patent language.
- 8 pages > topical map's 6-page glossary minimum; covers the launch quota with margin.

**4) SHIP-READINESS — one real reader-facing break, now fixed**
- BREAK: "It's a five-minute check that decides whether the last three pages of this glossary were even possible for you" (Crawl budget). Doubly broken: after the split there IS no "this glossary" container on the page, and even in-container, crawl budget is page 7 — only one page follows. Violates the batch's own chunk-independence rule on the page preaching bot access. FIX: "It's a five-minute check, and every AI citation you'll ever earn is on the other side of it."
- Link layer verified against the slug lock: all internal links trailing-slashed, locked namespaces respected, no dead deep URLs — deferred targets consistently [PHASE-2], provisional slugs flagged.
- Open item for Day 2 (flag, don't block): the stance paragraphs were drafted in sunny-voice by the assistant against the plan's "Sunny writes these" assignment — correctly disclosed; Sunny should overwrite or bless them before publish.
