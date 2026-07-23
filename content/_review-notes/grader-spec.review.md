# Review notes: Free Site Marketing Grader — Product Spec + Launch Landing Copy

File: `content/product/site-marketing-grader.md`
Register: technical-spec
Category: product · Leverage: high

---

GRADE SUMMARY — VOICE A-, STRUCTURE B+, WEDGE A, SHIP-READINESS B. Strong draft; fixes are surgical, not structural.

1) VOICE MATCH (technical-spec, Part A / Sunny, Part B)
- Part A holds the flat RFC register almost throughout. Two slips:
  - §7: "*This is the section an engineer argues with. If a request is neither (a) nor (b), it loses.*" — writer's-room meta-commentary leaked from the PLAN (which said "make it fight-ready" as an instruction, not copy) into the shipped spec. FIX: rewritten as a normative rule: change requests are evaluated against the cutline; neither (a) nor (b) means rejected.
  - §5 wireframe: "[🔒 enter email to open]" — emoji inside a spec artifact. FIX: "[LOCKED — enter email]".
  - Kept deliberately: "The composite is not de-emphasised; it does not exist." — rhetorical but normative; it is the named position doing work.
- Part B Sunny voice lands (short lines, dry, first-person scars). One rule break: "**Do you need my email?** / For the fix list, yes." — plan mandates Yes/No first word for boolean FAQs (extractability). FIX: "Yes — for the fix list."

2) STRUCTURE (vs plan)
- All 10 sections delivered; all four weight sets sum to 100; 3 assets present (mermaid, wireframe, rules table); 4,060 words in the 3,600–4,200 band; register switch marked. Good.
- Schema/prose mismatch: §4 text promises rows "tagged `source=grader`" and pinning to prompt-set v1, but the `prompt_results` DDL has neither column — and the sibling audit spec calls prompt-set versioning "load-bearing." FIX: added `prompt_set_version` and `source` columns.
- `leads (… consented_to_dataset bool …)` contradicts §6, which specifies a plain-sentence notice and bans checkboxes — there is no consent event to store a bool from. FIX: column renamed `dataset_notice_version`; §6 states the logging explicitly.
- Inferred-slug flagging inconsistent: only `/content/pruning/` carried an "inferred" caveat, but nearly every catalog slug is unpublished (repo has only the /strategy/ cluster live). FIX: one footnote under the catalog covering all derived slugs, tied to the wk-1 catalog milestone that already exists in §9.
- "`cwv-poor` → `/technical/audit/`" maps a CWV failure to the general technical-audit page when the topical map has a dedicated page ("Core Web Vitals for Revenue"). FIX: remapped to `/technical/core-web-vitals/`.

3) WEDGE
- Genuinely differentiated and — the important part — structurally enforced rather than asserted: composite nonexistent (§1), Priority Stage = first non-Pass (§3), scorecard never sorted by score (§5, §8), 10-item cap (§5), gauge ban with rationale (§8), dataset flywheel with the self-selection honesty rule (§4). "A 40 in Measure outranks a 20 in Amplify" appears in both registers. Landing leads with citation share vs the 8% median — the number no incumbent has. No score-soup tells anywhere. This does NOT read like HubSpot would write it.
- One credibility dent: "60 LLM queries ≈ $0.35–0.50/run" contradicts the sibling spec's "≤$0.40 total API cost… kill-switch at $0.60" for the same 60 queries — the two specs share the engine and must share the number. FIX: harmonized to ≈$0.40 (audit-engine figure), ≤$0.50 with retries, $0.60 kill-switch.

4) SHIP-READINESS
- CTA dead-ends: "### [Grade my site](/grader/)" — the landing page IS /grader/; the button links the page to itself. FIX: in-page anchor to the input form (#grade) with a deploy note.
- Rate-limit message "Here's the last report: [link]" hands a tokenised report URL to whoever re-enters the domain, with no statement of gate state. FIX: §2 note — a shared results URL always renders gated for a new visitor; unlock is per-visitor via email and never encoded in the URL.
- "a citation share over <60 answers is never shown" — garbled phrasing a reader trips on. FIX: "computed over a denominator smaller than 60 answers."
- §2 topic validation "2–6 words; not empty; not a single character" — redundant; tightened. Indexed-floor mechanism now names the SERP API (kills the scraping ambiguity).
- Everything else checked clean: gating consistent across §4/§5/§6, degraded-output rules coherent, calibration gate matches ledger claim #7, all three required landing internal links present, meta description matches plan.
