# Review notes: Expanded Citation-Share Study: Methodology + PR Angle (200+ Sites)

File: `content/research/citation-share-study-methodology.md`
Register: neutral-doc
Category: research · Leverage: high

---

VOICE MATCH (neutral-doc) — B+, two slips, both fixed:
- §3: "Hand-picked samples are the incumbent tell: they let a study choose the cases that flatter its thesis." "Incumbent tell" is internal strategy-doc shorthand, not methods-doc register; a journalist quoting this section trips on it. FIX: "A hand-picked sample lets a study choose the cases that flatter its thesis." Same argument, no swagger.
- §8: "A methods document that hides its limitations gets one story; one that publishes them gets cited by other studies." That sentence admits the section exists for coverage — fine in the plan, wrong on the public page. FIX: rewritten as a reliability rationale ("a benchmark is only as reliable as the caveats that travel with it").
- Everything else holds register: definition blocks are extractable, positions are asserted then defended in one sentence, no hedging outside §8. §1's "That world is contracting" is essayistic but within tolerance for an opening.

STRUCTURE — A-, with one plan conflict resolved in the draft's favour:
- All planned sections present; §8 PR split executed as a genuinely separate noindex file rather than a comment fence — better than the plan's own recommendation, keep it.
- Plan conflict: plan §2 says "a citation to a subdomain counts as absent," but the plan's own §5 mermaid says "dedupe to registrable domain." The draft resolved this correctly (own subdomains count, third-party syndicated copies don't) and defends it in the worked example. Endorsed, no change.
- Missing planned internal links, now added: /visibility/geo/ (§1, on "before any GEO work") and /measurement/tracking-ai-traffic/ (§2, at mention share — plan placed it in §2, draft had it only in FAQ footer).
- 220 vs the plan's arithmetically wrong 222: draft's correction stands.
- Length: 2,131 words vs plan's 2,800 floor. The draft's anti-padding argument is right, but it left one genuine gap that also closed some distance (see ship-readiness #2). Now ~2,350. Remaining shortfall accepted: the plan's own critique says padded methods docs die in citation, and every named claim is covered.

WEDGE — A. This does not read like an incumbent one-off: full prompt grammar in a code block, published weights with defenses (0.5 mention, median-not-mean, equal engine weights), versioned methodology with changelog, re-score rule, limitations with the conflict named. The moat sentence is explicit twice ("anyone can replicate the instrument, but no one can backfill the longitudinal record"). The FAQ "Can I run this on my own site? Yes." is the anti-incumbent move — an incumbent gates the method; this doc gives it away and keeps the time series.

SHIP-READINESS — 6 defects found and fixed:
1. CADENCE CONTRADICTION (would be caught by any journalist): §7 said "Waves are quarterly — January, April, July and October" while the table showed Wave 1 = August 2026 and an Aug→Oct two-month gap. FIX: Wave 1 named the off-grid launch wave; the Jan/Apr/Jul/Oct grid explicitly begins at wave 2; spec-table Refresh row aligned.
2. NO STATISTICAL TREATMENT OF DELTAS: §7 sells quarterly deltas as trend claims but never said how a delta is distinguished from noise — the exact question a skeptical reader asks before quoting "citation share moved N points." FIX: added a "How wave-over-wave change is reported" block (IQR + bootstrap CIs on segment medians; trend = persists two waves or exceeds within-wave run spread; engine-level shifts reported alongside site-level deltas).
3. SCHEMA/PROSE MISMATCH: §2 defines four logged states including "no answer"; the `observations` schema enum listed only three. FIX: `state` comment now `cited | mention | absent | no_answer`.
4. "PILOT (v1, unpublished)" in the changelog is false — the pillar publicly cites the 8% figure (line 96 of how-to-market-a-website.md). FIX: "findings cited on this site; methodology not previously published."
5. GEMINI/AI MODE AMBIGUITY: "Gemini | AI Mode" with no note invites confusion with AI Overviews (both are Google answer surfaces). FIX: note added distinguishing them.
6. Minor: "Any site site.marketing consults for" (double-word stumble) → "Any current or former client of site.marketing"; "four waves (one year)" → "(roughly one year)" since the launch-wave offset makes waves 1–4 span ~9 months.

FILES: all fixes applied to /home/user/Site-marketing/content/research/citation-share-study-methodology.md. The internal playbook (/home/user/Site-marketing/content/research/citation-share-study-pr-playbook.md) passes as-is — Sunny register correct, no-real-figures-until-wave-1 rule present, mainstream-after-trade sequencing sound — shipped unchanged below. Pillar reciprocal links verified at lines 96 and 215. SHIP.
