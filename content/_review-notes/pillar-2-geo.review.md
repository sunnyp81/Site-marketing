# Review notes: Pillar #2 — GEO for Established Websites: How to Get Cited by ChatGPT, Perplexity and Gemini

File: `content/pillars/geo-for-established-websites.md`
Register: sunny-voice
Category: content · Leverage: high

---

GRADE SUMMARY — strong draft; the three plan-overrides in the handoff all verified correct against ground truth (methodology file, topical map, glossary batch). Fixes below applied; ships after the pre-publish checklist.

1) VOICE MATCH — B+, five flunks (same failure modes Pillar #1's review caught):
- "Same underlying work, two output surfaces." — "output surfaces" is analyst-deck vocab (precedent: "fragmenting" was struck from Pillar #1). Fixed: "Same work, two places it shows up."
- "A word of honesty, because it's the kind of honesty that gets a study cited rather than dismissed:" — strategy-doc reasoning leaked onto the page (precedent: "That's the entity"). Announcing honesty as a citation tactic undermines the honesty. Fixed: "Straight talk: 50 sites is a pilot."
- "Here's the honest split, so this reads as a guide and not a hit job." — same leak; the page narrating its own editorial intent. Fixed: clause cut.
- "skeptics" / "skeptical" — US spellings in a UK-English house ("optimisation", "per cent", the map's "A Sceptic's Guide"). Fixed: sceptics/sceptical.
- "— in that order, sooner rather than later." — tacked-on tail muddles the beat (precedent: "pours fuel on a working fire"); the next paragraph already makes the start-now point. Fixed: ends "— in that order."

2) STRUCTURE — A-, delivered the plan with justified overrides; two gaps:
- Five-vs-three contradiction never reconciled: intro says the 20% "is exactly five inputs"; the table callout says "There are three." A careful reader (the exact reader this page arms) trips on it. Fixed: reconciling paragraph after the callout (two of the five live inside shared rows — topical depth, digital PR; three get their own rows) + Step 3 opener rewritten to match ("first three decide whether you CAN be retrieved, last two whether you're WORTH quoting" — also fixes the old opener's "access and self-containment first" which contradicted the list order).
- Plan specified a yes/no checklist in Step 2; draft shipped only the user-agent code block. Fixed: 4-item yes/no checklist added with a concrete `curl -A "GPTBot"` test.
- Verified intact: 40–60-word definition block (~52w), TL;DR anchor list, 4-row acronym table, 15-row shared-inputs table, per-engine table + ordered-list twin of the diagram, neutral-doc methodology box, gerund-first red flags, 5 FAQs with Yes/No first words, single-CTA close, one up-link to Pillar #1 ("the existing-site playbook", not paragraph-first-word), all 17 internal links real and trailing-slashed. 8% and 1–2-month lag match Pillar #1 exactly (lines 96/237/244); Ahrefs stat verbatim per production note.

3) WEDGE — A on architecture (the table + "point at the rows" callout is genuinely un-incumbent; the honest-pilot framing IS the differentiation), but two lines quietly faked the data the wedge depends on:
- "What separated the sites that got cited from the ones that didn't wasn't budget or domain age." — a segmentation claim from a pilot the methodology doc says "cannot be segmented." Incumbents fake data; we can't. Fixed: reframed as a qualitative pattern from the prompt logs, tested-negative dropped.
- "a confident few assumed it was 30-40% (it almost never is that either)" — a distribution claim with no distribution, and it diverges from Pillar #1's wording ("a few assumed it was much higher"). Fixed: aligned qualitative.
- "We're now running the same instrument across 200+ sites" — tense violation; wave 1 fields Aug 2026 (today is 23 Jul). The methodology file's own production note mandates future tense. Fixed: "now being scaled… first wave fielding in August 2026."

4) SHIP-READINESS — three reader-facing traps:
- robots.txt and llms.txt were ONE code block; a reader pasting it ships llms.txt comments into robots.txt. Fixed: two labelled blocks, and the llms.txt sample now follows the actual llmstxt.org format (H1 / blockquote / link list) instead of comment lines.
- OAI-SearchBot named as a crawler "that decides whether you exist," then omitted from the robots.txt allow sample. Fixed: added.
- "there is no sponsored-citation product" — a sceptic waves Perplexity's ad units at you. Fixed: one clause — ads exist alongside the answer and are labelled; the citations aren't for sale.
- Methodology box claimed the pilot ran "from a consistent US location" — a v2-study control not attested for the informal pilot. Removed (don't over-specify the pilot).
- Timeline tension: per-engine "days to weeks" vs Pillar #1's "first signal 2–4 months." Fixed with one caveat line: the clocks start when the shared 80% is already working.
- Production notes hardened: three-traits must stay qualitative; llms.txt/robots.txt never re-merged; future-tense guard on the 200-site study.
- Noted, not this page's fix: repo-wide slug drift /measurement/ai-traffic/ (Pillar #1, this page) vs /measurement/tracking-ai-traffic/ (methodology doc, 90-day plan) — needs a one-slug decision before launch.

Revised file written to /home/user/Site-marketing/content/pillars/geo-for-established-websites.md. Ship-ready pending the standard pre-publish checklist (schema, image asset, external-link verification).
