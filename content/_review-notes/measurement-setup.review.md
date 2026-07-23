# Review notes: Analytics + Citation Monitoring Setup Guide

File: `content/ops/measurement-and-citation-monitoring-setup.md`
Register: technical-spec
Category: infrastructure · Leverage: medium

---

**Verdict: strong draft, one ship-blocker fixed, ships now.** Verified against the pillar, the stack ADR, and the topical map on disk.

**VOICE MATCH — pass with one trim.**
- Body holds dry technical-spec register; terse `Position:` assertions match the sibling ADR house style; exactly two `> Sunny:` blockquotes (§4, §9) matching `stack-and-scaffold.md` convention; full narrative voice correctly quarantined in §9.
- Offender: "'The first time a robot sent us a human' is the emotional beat of the teardown" (§4 capture line) — "emotional beat" is Sunny-editorial leaking into the technical core. Fixed: recast as a spec instruction ("dated, engine named, screenshotted. The teardown's 'first time a robot sent us a human' exhibit.") — the quote survives as a labelled future-copy fragment, the editorialising doesn't.
- Offender (precision, not voice): "gtag.js, loaded by a single site-wide Astro island" — an island is a hydrated component; a site-wide script in BaseLayout is not one. In a technical spec the mechanism name is load-bearing. Fixed: "inline consent loader in `BaseLayout`. Not an Astro island."

**STRUCTURE — pass with documented deviations.**
- All plan elements present: §0–§10, milestones, 2 checklists, Q&A block, mermaid diagram, regex block, 3 schemas, capture lines on every section, claims register.
- Deliberate deviations are correct calls and are recorded in the production-notes block: 3 engines / ÷60 (pillar consistency beats the plan's 4-engine ÷160 — verified the pillar says "three main engines" and 8% median from 50 sites), `/technical/bots/` (verified `/technical/ai-crawlers` exists nowhere; glossary batch-01 confirms `/technical/bots/`), companion Sheet/prompt-set flagged as separate build tasks.
- Length: ~4,000 words vs the plan's 2,000–2,500. Accepted: the overage is the 20-row prompt table (which the plan wants published verbatim later) and the consent section (legally required, absent from the plan). Nothing padded; did not cut.

**WEDGE — genuinely differentiating, and the biggest fix strengthens it.**
- Capture lines, the falsifiable Perplexity-first prediction, publish-the-zeros, "tools we didn't buy" — no incumbent writes any of that.
- The §1 fix adds a wedge line an incumbent can't copy: crawlers never consent, so what an LLM crawler fetches is still a zero-JS page — the measurement stack passes the site's own crawlability audit.

**SHIP-READINESS — one blocker, four real nits, all fixed.**
1. **BLOCKER — the draft's own CI would reject it.** "gtag.js, loaded by a single site-wide Astro island" + the claim it was "reconciled with the stack ADR's 0-KB-JS rule." The ADR's release gate #2 is a merge-blocking CI check: "0 KB JS on article routes (island count = 0 on content pages)." A site-wide island fails it; "consistent with" was false. The ADR delegated the analytics decision here ("No analytics decision here — owned by the Measurement section deliverable"), so the fix is an explicit recorded **amendment**: inline consent loader (<1 KB, zero external requests pre-consent), gtag injected only post-consent, gate re-worded, amendment noted in the production comments for mirroring into the ADR.
2. **GA4 regex would silently miss subdomains.** Bare alternation (`chatgpt\.com|…`) under GA4's full-match regex semantics misses `www.perplexity.ai` / `m.chatgpt.com`. Fixed: `(.*\.)?(…)` prefix + a note on full-match semantics + quarterly referrer-list review added to the §8 cadence.
3. **Hardcoded ÷60 denominator fakes declines.** "citation share = (count of score-2 checks) ÷ 60" — an engine outage or refused prompt would read as absence. Fixed: denominator = completed checks; new rule (retry within 5 working days, blank score + reason, excluded from denominator); `notes` field added to `monthly_rollup`; per-engine derivation (needed for the Perplexity-first prediction) now stated.
4. **Milestone self-contradiction.** Day 0 demands §2–§4 "before the first page publishes," but §3's sitemap submission requires the publish. Fixed in both §3 preamble and the milestone row.
5. Minors: mermaid `\n` in unquoted labels renders literally in current mermaid — quoted labels + `<br/>`; "a pillar orphaned without a submitted sitemap" misuses "orphaned" (an SEO term of art meaning no internal links) — reworded; all internal links normalised to the pillar's trailing-slash convention (draft mixed `/visibility/geo` with `/how-to-market-a-website/`).
- Confirmed clean: 8% median / ≥30% bar / three engines match the pillar verbatim; dashboard's "4 of 6 numbers" claim checks out against the pillar's six-numbers table; `/measurement/zero-click-reporting/` is new but matches the topical map's "SEO Reporting in a Zero-Click World" entry; claims register internally consistent.
- Revised file written to `/home/user/Site-marketing/content/ops/measurement-and-citation-monitoring-setup.md`. Outstanding (unchanged): the two companion build tasks — Sheet template and prompt-set v1.
