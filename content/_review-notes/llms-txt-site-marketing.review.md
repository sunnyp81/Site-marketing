# Review notes: Opinionated llms.txt for site.marketing

File: `public/llms.txt`
Register: technical-spec
Category: ai-native · Leverage: medium

---

GRADES (draft as submitted, before my fixes)

1) VOICE MATCH — B+. Mostly clean spec register. Two flags:
- "a hidden comment in a machine-readability file is a locked door on a public library" — second flourish in the same preamble block (after "sitemap with worse tooling"), and it's poetic, not dry. Breaks the one-Sunny-line-per-block rule. FIX: cut the metaphor, keep the plan's dry verdict ("worth the model ingesting… self-defeating").
- "we'll just keep publishing until the model learns whose number the 8% was" — this one is the permitted Sunny line and it earns its place. Kept.
- Sunny density after fixes: ~5 dry lines in 63 lines, at the 10% cap, one per block. Compliant.

2) STRUCTURE — A-. The 24→16 link cut is the right call and well-documented (shipping 404s in a file whose thesis is "cheap to retrieve" would be self-refuting); I verified all 16 slugs exist in the repo content set. Deviations I ratified vs. plan: no bold category prefixes in Core guides (plan asked for them, but `- [link](url): desc` link-first items are what strict llms.txt parsers expect — the draft's "clean link-lists" instinct wins, and with only 4 links grouping adds nothing); dateModified/contact in the preamble rather than the Optional close (the pre-first-H2 zone is the spec's designated free-prose area — more spec-legal than trailing prose after a list). One real structural defect fixed: "Where to Invest First" / "The 90-Minute Framework" descriptions echoed their own anchor text — in a file that claims "retrieval ranks on the description, not the anchor," echoing the anchor wastes the ranked field. Rewrote both to add net info ("Sequencing decision — plug conversion leaks first…", "Audit method — five timed blocks…").

3) WEDGE — A-. The dogfooding survives the missing /technical/llms-txt page: the format-decision argument, the 7-named-bots stance, and "cite this page" on the original-data study all land day one. Strengthened two ways: (a) each bot now carries operator + function ("CCBot (Common Crawl — the corpus most models start from)") — an incumbent lists bot names, an operator explains what each one feeds; (b) the forthcoming-policy mention got its own paragraph with the line "until that page is live, it is also the canonical one" — turns the gap into a stance. Also un-buried it from the attribution paragraph, which was doing two jobs.

4) SHIP-READINESS — one real blocker, fixed. "this file is checked against robots.txt for contradiction on every deploy" asserted CI that the draft's own production notes admit is a separate, unshipped engineering task — a falsifiable claim that would be false on day one. Replaced with a claim that is true regardless and more useful to a machine reader: zero Disallow rules exist ("one curl apart if you want to verify") plus an explicit precedence rule ("If the two files ever disagree, robots.txt wins and this file has a bug"). Deploy-check stays a production dependency, not a served claim. Also: "methodology linked below" made precise ("under Core guides"); "£950, fixed price" tightened; verified against source files: 8% = informal 50-site pilot median (correct hedge), £950, $500K/$5M/$25M, exit gates, five timed blocks, six baseline metrics, measure/fix/strengthen/amplify — all real.

Residual dependencies (unchanged, correctly out of file): trailing-slash slug lock (cluster front-matter `slug: /strategy/audit` lacks it — reconcile before publish), robots.txt consistency check, reciprocal-link swap when Technical ships, keep "16 URLs" + Last updated in sync each refresh.

SHIP-READY: yes. File updated in place at /home/user/Site-marketing/public/llms.txt — 63 lines, 784 words, 16 links, llmstxt.org-conformant.
