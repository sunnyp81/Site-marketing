# Review notes: Productised 90-Minute Audit — Offer Page, Delivery Template, Pricing

File: `content/offers/90-minute-website-audit.md`
Register: sunny-voice
Category: monetisation · Leverage: high

---

VOICE MATCH — strong overall; sunny-voice holds through A ("retainer pitch in a trench coat", "calendar Tetris"), Asset B stays neutral-doc with sanctioned verdict slots per teardown-template convention.
- Quote: "Yes, all three, provided the site is at least two years old" (frontmatter FAQ) — "provided" is contract-lawyer, body copy says "if". Fixed: aligned to "if".
- Quote: "Then you don't pay." (A5 Q&A) — buyer already paid; imprecise, and precision is this page's whole register. Fixed: "Then you get your money back."

STRUCTURE — all A1–A8 and B1–B7 delivered; deviations (C moved to /ops/, B leading with fixes not score) are documented and correct. Two misses:
- Plan A8 specifies FAQ #2 = refunds. Draft's FAQ swapped refunds for a discovery-call question already covered in A5's Q&A block, and frontmatter faqs[] didn't match the visible FAQ (frontmatter had the refund Q, body had Fix Sprint + discovery). FAQPage schema must mirror visible content. Fixed: both now carry the same 5 pairs (turnaround, access, site types, refund, Fix Sprint), refund answer gains the "how do I claim" mechanics a real buyer asks.
- Frontmatter/body FAQ text drifted ("three hours or so" vs "three hours"; "(Tally)" in one, not the other). Fixed: identical.

WEDGE — concept lands (free-method hook, no-call, price-on-page, "the free page IS the lite tier" in Asset C). But the wedge's promise is side-by-side verifiability, and three lines fail that exact test against the live free pages:
- Quote: "Written up across the seven disciplines the playbook is built on" — the pillar says FIVE disciplines ("Website marketing in 2026 is five disciplines working together"). An incumbent gets discipline counts wrong; this site can't. Fixed: "Seven scored sections — the playbook's five disciplines, plus strategy and measurement" (A2, B2, plus a locked note in production notes; scorecard column renamed Discipline → Area).
- Quote: "Exactly 15. Ranked by revenue-to-effort using the free method's own rubric" / "Priority = Impact ÷ Effort" — the free page's rubric is "Priority = Revenue impact ÷ Effort" and it says "Take the top ten. Delete the rest." Fifteen paid fixes vs a public ten-cap is an unreconciled contradiction a careful reader will catch. Fixed: exact rubric phrasing everywhere + a one-paragraph reconciliation in A2 and B3 (ten is the self-run cap; done-for-you ranks a longer raw list; same delete-the-rest rule; guarantee priced against all fifteen).
- Quote: "runs this same instrument on a real site, scored the same way... Read a few." — teardowns score /30 on six outside-in metrics, not the /70 scorecard, and zero named teardowns are live, so "read a few" points at nothing. Fixed: bullet now claims only what's true (shared 20-prompt instrument, outside-in, rules-published-before-scores) and adds the inside-vs-outside distinction, which actually strengthens the paid pitch; production note says upgrade when teardown #1 ships.

SHIP-READINESS —
- Quote (Asset C): "Tier 2 rises proportionally, £2,400 → £2,900" — that's +21% vs Tier 1's +32%; not proportional. Fixed: states the asymmetry and why it's fine.
- Deferred-link gating existed only in the top production notes; added an inline GATE comment at the FAQ paragraph that actually contains /conversion/audit/ and /technical/audit/ so the pre-publish editor can't miss it.
- Everything else checks out against repo sources: 14 years (about page), 8% median / ≥30% good (study + pillar), five timed blocks / six numbers (free audit page), Measure→Fix→Strengthen→Amplify (pillar), LinkedIn URL, capacity math (£3,800/£4,300/£9,600, £51,600 ceiling), £211/hr, trailing-slash slugs.
- Both files updated on disk; ready to ship pending the two known launch gates (Stripe/Tally/post-payment email wired; teardown #1 or the softened proof line as shipped).
