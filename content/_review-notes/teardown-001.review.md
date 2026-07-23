# Review notes: Teardown #001: First Named-Site Teardown

File: `content/teardowns/001-first-named-site.md`
Register: sunny-voice
Category: content · Leverage: high

---

**Verdict: right architecture, three real defects. All fixed; file updated in place at /home/user/Site-marketing/content/teardowns/001-first-named-site.md. Still gated (correctly) behind the four pre-publish blockers.**

1) VOICE MATCH
- The template overrides the brief: sunny-voice lives in exactly two sanctioned slots (S5 rule 10); everything else is neutral-doc. Draft leaked voice in four places:
  - Lead: "Great at the old game, a step behind on the new one." → replaced with a neutral extractable verdict (score, band, named finding in the first 100 words).
  - §5: "not the technical trivia that a site this healthy doesn't need" → flattened; the sneer risked S5 rule 3 territory.
  - §6: "Two things, minimum, and Zapier earns more than two" → meta-commentary cut; three concrete items remain.
  - Slot 1 verdict was a 58-word run-on — legal but not Sunny. Tightened; closing one-liner was already the best sentence on the page and is untouched.

2) STRUCTURE
- Following the committed template over the stale plan (7 sections, /30 bands, 3 fixes, no FAQ) was the right call — the template is canonical and dataset-enforcing.
- Misses fixed: missing pillar link for the sequence stage (template's link table requires it) → added in §4; "/strategy/audit" missing its canonical trailing slash → "/strategy/audit/"; missing DIY-instrument link → /measurement/citation-monitoring added in §2; meta description was ~166 chars → trimmed to ~142.
- Internal contradiction: production notes said "three of the six metric scores are marked PROVISIONAL", body marked two → reconciled to two.

3) WEDGE
- Names names with receipts — mostly lands. Two failures against its own standard, both fixed:
  - "run against a single public-search answer surface" — an anonymous surface is the exact incumbent sin the series attacks. Now labelled (logged-out, US locale, dated, second-reviewer verified), with a pre-publish blocker to name the vendor or drop the table once instrument figures land. Added the actual competitor URLs the surface cited (Make's guide, n8n's template, Relay.app's how-to) — clickable receipts, also added to frontmatter sources.
  - "~8–12% (pre-read estimate)" — a % band from n=4 is fake precision. Relabelled as an explicit extrapolation ("~10% region if the pattern held"), never the figure of record.

4) SHIP-READINESS
- **Scoring error (confirmed):** citation share scored 2 with observed "~8–12%" — S3 anchors the 8% median at 3, and "scores are never rounded" cuts both ways. Re-scored 3 (provisional). Total 21→22/30; band unchanged (Amplify-ready holds 19–24 even at ±2).
- **Factual error (confirmed by live re-run, 2026-07-23):** row 4 claimed Zapier "Present — via Zapier's own blog" on "best no-code app builder 2026". On the verified re-run Zapier is absent (Bubble, FlutterFlow, Glide, Softr, Jotform cited); Zapier's own guide surfaced under the *category* probe instead. Corrected — and it sharpens the thesis: absent on 2 of 4 prompt types. All four pre-read rows are now second-reviewer-verified with dated observations; rows 1–3 confirmed as drafted (the "most widely adopted" quote is verbatim).
- "Estimates disagree by a factor of four" — 2.6M→12M is >4.6× → "more than a factor of four".
- Indexed-vs-valuable "thin long tail by construction" was inference stated as observation (S5 rule 2) → reframed as "in our scoring… not independently verified".
- Correctly NOT publishable yet: the four gates (instrument run, first-party crawl, right-of-reply ≥5 business days, legal checklist + dataset.csv row) are real and properly declared. The empty four-engine table is acceptable only because the gate exists; it must be filled or the page doesn't ship.

Probe sources: [Make guide](https://www.make.com/en/how-to-guides/automatically-save-gmail-attachments-to-google-drive), [n8n template](https://n8n.io/workflows/6466-automatically-save-gmail-attachments-to-google-drive/), [Relay.app how-to](https://www.relay.app/how-to/automatically-save-gmail-attachments-to-google-drive), [Gumloop list](https://www.gumloop.com/blog/no-code-automation-tools), [Bubble list](https://bubble.io/blog/best-no-code-app-builder/), [Parseur comparison](https://parseur.com/blog/zapier-n8n-make).
