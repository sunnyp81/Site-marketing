# Review notes: Named-Site Teardown Template

File: `content/teardowns/teardown-template.md`
Register: neutral-doc
Category: content · Leverage: medium

---

VOICE MATCH — mostly clean neutral-doc; two leaks of internal strategy language into the PUBLIC Part A, which undermines the "check we're not rigged" framing:
- "a moat that compounds — rather than a one-off opinion piece" (intro, feeds the public lead). A methodology page telling a torn-down owner they are moat fodder reads as incumbent-cynical. FIXED → "one tagged datapoint in a longitudinal record that cannot be backfilled".
- "this is the wedge, so nothing here overrides them" (S4). "Wedge" is strategy-memo vocabulary, not methods vocabulary. FIXED → "the identical instrument is what makes a teardown's figure comparable to the benchmark, so nothing here overrides them." Sanctioned punchy lines ("dunk on", "rounded up to be nice", "the dataset is the product") are plan-specified and kept; both Sunny-voice slots are correctly fenced.

STRUCTURE — delivers everything the plan specified (7-step checklist, fenced skeleton with word budgets summing to exactly 1,500, 6×3 rubric + bands, allowed/forbidden table, 10 rules + 8-box checklist, 9-column CSV, data-flow line, all internal links, worked specimen). Deviations from plan (4 engines, per-site grammar instead of "prompt-bank-v1", proxy metrics, Part A/B split, media/content vertical dropped) are all verified correct against citation-share-study-methodology.md v2.0 — the plan was wrong, the draft is right. One structural gap: the production note said methodology.md = "front-matter + Part A verbatim", which would publish the page headless (no definitional lead — against the house inverted-pyramid rule). FIXED → note now includes H1 + opening definition paragraph in the public extract. Part A = 2,257 words, inside the 2,000–2,500 target.

WEDGE — genuinely differentiating, and mechanically so, not rhetorically: same 20-prompt grammar/4 engines/2-of-3 stability/0.5-mention weights as the study, methodology_version per row, cohort_tag=teardown reported alongside (never inside) the random-sample median, immutable-log re-scoring for version comparability. That is the "every teardown adds a datapoint" claim made auditable. The fix was to stop SAYING wedge/moat in the public copy and let the mechanism carry it (internal Part B keeps the moat talk, correctly). One S4 factual slip fixed: prompts are seeded from category/top pages/adjacent alternatives/problem-solved — not "competitors" (the study's branded-adjacent type never names competitors).

SHIP-READINESS — four real defects found and fixed:
1. THE SPECIMEN VIOLATED ITS OWN RUBRIC — the exact thing a hostile reader checks on a fairness page. Citation share "~10% blended, just above the 8% pilot median" was scored 2 when the anchor says 3 = "at the current published median"; "40% of indexed pages earn no traffic" (60% earn) was scored 2 when the anchor says 3 = "roughly half earn traffic". FIXED → both to 3, total 15/30 → 17/30, still Strengthen band, verdict prose unchanged. (Engine-share math verified correct: 2/18=11%, 2.5/19=13%, 1/17=6%, 1.5/18=8%, equal-weight blend 9.6%≈10%.)
2. "B2B services / wholesale" broke the "exactly one of the eight verticals" rule in the same section that states it. FIXED → "B2B services".
3. Silent divergence from the study frame: study excludes former clients outright; teardown allowed them with disclosure while claiming "the same frame as the Citation-Share Study". FIXED → divergence now stated and justified (teardown rows never enter benchmark medians).
4. The 4-hour cap collided untreated with the instrument's 72-hour stability window and the 5-business-day right-of-reply. FIXED → S0 now says the cap is labour, not elapsed time; start runs + reply email first.
Link hygiene: /measurement/tracking-ai-traffic flipped to /measurement/ai-traffic (7 shipped files vs 2 — the draft picked the minority slug); /strategy/audit → /strategy/audit/ (dominant form, 15+ occurrences); production notes updated to record both decisions.

NOT FIXED, FLAG UPWARD: (a) content/teardowns/001-first-named-site.md (Zapier) already exists with provisional scores — M3 requires methodology.md live before any named critique publishes, and that draft must be validated against this template first; (b) methodology.md and dataset.csv are still M1 to-dos; publish-blocking on the CSV row is unenforced until the file exists; (c) pillar canonical (/how-to-market-a-website/ vs /strategy/playbook) remains upstream-unresolved.

VERDICT: ship. All fixes applied in place at /home/user/Site-marketing/content/teardowns/teardown-template.md.
