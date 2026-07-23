# Review notes: 20-Prompt AI Visibility Audit — Lightweight Tool Spec

File: `content/product/20-prompt-ai-visibility-audit.md`
Register: technical-spec
Category: product · Leverage: high

---

AUDIT — 20-Prompt AI Visibility Audit spec (file: /home/user/Site-marketing/content/product/20-prompt-ai-visibility-audit.md)

1) VOICE MATCH — mostly clean technical-spec; two leaks.
- "(NEW, from critique)" appeared 4× in shipped headings ("Frozen-median rule (NEW, from critique)"). Revision-process metadata does not belong in the artifact a builder reads. FIX: removed all four labels; the rules stand on their own.
- §9 register note was self-referential process talk: "keeping this document a single build spec, not a spec-plus-copywriting-deliverable." FIX: cut; replaced with one neutral framing line.
- Everything else (go/no-go phrasing, callouts, worked example) sits correctly in spec register.

2) STRUCTURE — one real deviation from plan, one missing anchor.
- Plan specified §9 as "copy blocks in Sunny voice, each labeled with its slot" and even supplied the H1; the draft shipped a constraints table with zero copy — so D4's "landing copy in" milestone had no source text. FIX: reinstated 7 labeled final copy blocks (H1, subhead, 3-step, transparency, data-proof, FAQ, CTA) in Sunny voice, with neutral spec framing, keeping the useful constraints inline.
- /measurement/citation-monitoring/ appeared only in the closing link table, never anchored in the body (plan: "the automate-it-ongoing sibling"). FIX: added as a text link in §6 element 6 ("score = snapshot; that page = monitoring") without violating the single-CTA rule.
- Plan's meta-description content was dropped entirely. FIX: restored as a "Doc summary" row in §0 (no public-page conceit needed).
- All 5 tables, 20-row prompt table, code block, formula block, wireframe-list present and final. Good.

3) WEDGE — carried but with a factual crack an incumbent competitor would exploit.
- "the 50-site study covered these same 3 engines, so v1 engine parity is a feature" — the repo's own published study (content/research/citation-share-study-methodology.md) is now v2: 200+ sites, FOUR engines including Claude, 3 runs/prompt, mentions at half-weight, no-answers excluded from the denominator. "The tool IS the study instrument" without naming WHICH instrument invites "your own study contradicts your tool." FIX: pinned the tool explicitly to the PILOT instrument (= pillar Step 1: 3 engines, single run, cited-with-link), stated why v2 can't be a 4-minute tool (240 calls, half-weighted mentions), and linked /research/citation-share-study/ — which the draft never linked despite the wedge being "benchmarked against published data."
- "Claude … no clean citation-retrieval API path at spec time" is false — Claude has a citation-capable search API and is literally in study v2. The wrong reason weakens the transparency wedge. FIX: Claude excluded for benchmark parity, not capability; AI Overviews keeps the no-API reason.
- Naming the tool's own divergence from study v2 (no-answer handling) SHARPENS the wedge: transparent enough to publish its own limits.

4) SHIP-READINESS — one arithmetic bug, three gaps.
- CONFIRMED bug: verdict bands "0–3% / 4–8% / 9–15% / 16%+" have gaps at real score values. Denominator is 60, so 2/60 = 3.33% and 5/60 = 8.33% land BETWEEN bands — unbandable scores on day one. FIX: bands redefined by cited-answer count (0–2 / 3–5 / 6–9 / 10+), which partitions every possible score.
- No-answer/refusal handling was unspecified: §6 covers 500s/timeouts, but an engine that answers with a refusal is neither a failure nor a citation. FIX: §4 rule — refusals count as answered/not-cited, denominator stays 60, divergence from study v2 stated on methodology page.
- Frozen-8% definition risk: study docs define citation share as link OR named mention (v2), while the tool scores cited-with-link only and claims "the number must match what 8% was computed from." If the pilot counted linkless mentions, the frozen constant is wrong. FIX: added D5 launch-checklist item to confirm the pilot computation or recompute before ship.
- Stale link statuses: /measurement/citation-monitoring/ and /distribution/digital-pr/ were flagged "inferred slug, unconfirmed" but both are live links in the pillar (lines 98 and 215). FIX: marked Confirmed with provenance. /tools/ net-new flag kept.
- Minor fixes: {brand} derived from domain root label was fragile → now prefilled + user-editable at input (comparability unaffected, brand prompts are site-specific by design); 4-minute target now notes per-engine parallelism; prompt_templates versioning notes new version = new rows, ids never reused; D5 gate now explicitly named as the API-vs-consumer-app divergence control.

VERDICT: draft was structurally sound with the load-bearing chain intact (§1 → §2 fixed templates → §4 → D5 gate), but had one score-breaking bug (band gaps), one false claim (Claude API), and an unnamed instrument ambiguity that undermined the wedge. All fixed; revised version written to disk and ship-ready. ~2,550 words — slightly over the 2,400 plan cap, spent on the reinstated §9 copy the plan required.
