# Review notes: Website Marketing Audit: The 90-Minute Framework and Checklist

File: `content/clusters/strategy/website-marketing-audit.md`
Register: sunny-voice
Category: content · Leverage: high

---

FILE: /home/user/Site-marketing/content/clusters/strategy/website-marketing-audit.md (revisions applied in place)

1) VOICE MATCH — strong overall, one systemic leak
- The good: "a funnel, not a favour", "your buyer is on a train with two bars and one thumb", "produce it before lunch" — that's the register.
- FAIL (scaffolding leak, 3 instances): "*(Neutral-doc register from here to the end of the table — instructions people follow under a timer shouldn't have jokes in them.)*" — internal editorial annotation published as reader copy. A reader has no idea what "neutral-doc register" means; the repo's own rule (linkedin-launch-sequence.md line 5) says never let scaffolding leak into copy. FIX: deleted all three asides; the Block 4/5 versions kept their useful reader instruction as plain copy ("Load each page on your phone and answer yes or no…" / "Score against the rubric below, not against how much the fix annoys you").
- Motif drift: "speed scores are a hobby; revenue-weighted fixes are a job" — plan says same words as pillar, deliberate motif. Pillar (line 132) is two sentences with capitals. FIX: restored "**Speed scores are a hobby. Revenue-weighted fixes are a job.**"
- Muddle: "Open the three tabs, open the Sheet" — the Sheet IS one of the three. FIX: "Open Search Console in one tab, GA4 in another, the Sheet in a third — and start the clock."

2) STRUCTURE — plan delivered, two spec misses
- All 11 sections, 4 tables, 5×5 grid, 3 Q&As, 5 FAQs, all 13 internal links (incl. both glossary), reciprocal pillar link with the "website marketing playbook" anchor, all 7 named claims present. Anchor slugs match github-slugger output. Word count 3,250 w/ tables, 2,648 prose-only — in band after trims.
- FAIL: "[Copy the free checklist](/audit-checklist/), block 90 minutes tomorrow…" — the close paragraph opens with a link, violating the plan's "Never link from a paragraph's first word." FIX: reordered to "Block 90 minutes tomorrow morning before standup, [copy the free checklist]…".
- Definition block was ~64 words vs the 40–60 spec. FIX: trimmed to ~57 ("You run it on a live site with traffic and history… top ten fixes, ranked by revenue impact").

3) WEDGE — genuinely differentiating, kept intact
- The wedge survives contact: timer-is-the-method framing, £0 tooling with "a funnel, not a favour", the 8%/30% owned data, and the kill-shot "Ten ordered fixes done beats 200 checkpoints acknowledged" stated once, hard, in Block 5. Delete-don't-defer is the anti-incumbent move no Semrush template would ship. Block 4's 5-question checklist alone reads incumbent-generic, but the Lighthouse "No — load it on your phone" Q&A and the leaks-not-scores rule pull it back. No changes needed.

4) SHIP-READINESS — one ship-blocker, one practical gap
- BLOCKER (rubric inverted): "| **3** | … | Small: a copy change, a setting, deleting pages…|" with "| **1** | … | Large: a migration…|". Priority = Impact ÷ Effort sorted descending, so low Effort number must mean small job — the rubric had it backwards, and it contradicted the draft's own worked example ("prune dead pages" logged Effort 1 while the rubric filed "deleting pages" under Effort 3). A reader following the rubric produces an exactly inverted fix list — cheap wins sunk, dev sprints floated. FIX: swapped the Effort column (1=Small, 2=Medium, 3=Large) and added one plain-copy line: "Effort is the divisor, so cheap fixes float to the top and expensive ones sink unless the money justifies them." Worked example now reconciles with the rubric. The Sheet's tab-4 dropdowns must match this orientation — added to the build check.
- Practicality gap: 60 fresh-chat answers in 30 min = 30s each with logging; draft just said "Yes, it's brisk." FIX: added the pacing setup ("prompts pre-written in the Sheet, one browser window per engine, paste–read–tick, next"). The Day-3 stopwatch validation gate remains the real test — if Block 2 busts by >20%, cut prompts, not the claim.
- Carried-forward launch dependencies (already flagged in production notes, still open): /audit-checklist/ redirect must be wired to the copy-to-own Sheet; /content/audit/ + /conversion/audit/ routing conflict with the stack ADR needs site-wide reconciliation or these links 404 on this page AND the pillar.
- Verified sound: all Priority arithmetic (3.0/2.0/1.5/1.0/1.0/0.67), 310/1,240=25%, "two-thirds done" at 1:00, meta description 149 chars, 8%/≥30% phrasing matches the pillar and the locked study wording, HowTo durations sum to PT1H30M.

VERDICT: ship after the rubric fix (applied) — remaining blockers are infra (redirect + routing), not content.
