# Fable's shortlist reasoning

The shortlist keeps only what compounds: the canonical topical-map pages the pillar already links to (audit cluster, GEO pillar #2, glossary), one original-data moat (the expanded 8% study) that feeds everything else, one product (the Grader, with the 20-prompt audit as its cheap precursor), one monetisation path (the productised 90-minute audit that pillar #1's CTA already points at), and distribution that dogfoods the site's own claims (newsletter, repurposing pack, LinkedIn). Everything cut — Chrome extension, Slack app, community, cohort course, job board, comparison pages, book — is product/audience sprawl that needs traffic or data that doesn't exist yet. Sequence: positioning and stack first because every page inherits them, data methodology early because pillar #2, teardowns, the grader and PR all cite it, then content clusters, then tools, then the launch/distribution layer that packages all of it.

---

## Ship items (in dependency order)

1. **Positioning Statement + Homepage & About Copy** — `content/site/positioning-homepage-about.md`
   - Category: brand · Register: sunny-voice · Leverage: high · Effort: medium
   - Wedge: The only site for websites that already exist — 'sequence, not channels' as the brand promise, with a named human author instead of a faceless academy.

2. **Stack Pick + Repo Scaffold Recommendation** — `content/ops/stack-and-scaffold.md`
   - Category: infrastructure · Register: technical-spec · Leverage: high · Effort: low
   - Wedge: Chosen explicitly for LLM crawlability (content in initial HTML, chunk-clean markup) — the site is its own technical-foundation case study.

3. **Expanded Citation-Share Study: Methodology + PR Angle (200+ Sites)** — `content/research/citation-share-study-methodology.md`
   - Category: research · Register: neutral-doc · Leverage: high · Effort: medium
   - Wedge: Original, repeatable dataset nobody else has — the paraphrase-proof asset every pillar, teardown, grader score and podcast pitch cites.

4. **Glossary Batch #1 (8 Definition Pages)** — `content/glossary/batch-01.md`
   - Category: content · Register: sunny-voice · Leverage: high · Effort: low
   - Wedge: Definitions with a stance and a number in them, not Wikipedia paraphrase — cheap AEO wins that also satisfy the launch rule of 20 pages same-day.
   - Depends on: positioning-homepage-about

5. **Pillar #2 — GEO for Established Websites: How to Get Cited by ChatGPT, Perplexity and Gemini** — `content/pillars/geo-for-established-websites.md`
   - Category: content · Register: sunny-voice · Leverage: high · Effort: high
   - Wedge: Everyone else sells GEO as a new separate retainer; this pillar proves SEO and GEO share 80% of inputs and publishes original citation-share data to back it.
   - Depends on: positioning-homepage-about, citation-study-methodology, glossary-batch-01

6. **Website Marketing Audit: The 90-Minute Framework and Checklist** — `content/clusters/strategy/website-marketing-audit.md`
   - Category: content · Register: sunny-voice · Leverage: high · Effort: medium
   - Wedge: Time-boxed and revenue-weighted — 90 minutes to an ordered fix list, against the incumbents' 200-point checklists nobody finishes.
   - Depends on: positioning-homepage-about

7. **Website Marketing Budget: What to Spend Where (With Ratios)** — `content/clusters/strategy/website-marketing-budget.md`
   - Category: content · Register: sunny-voice · Leverage: medium · Effort: medium
   - Wedge: Budgets allocated by sequence stage, not channel splits — incumbents publish '% on SEO vs paid' tables that ignore what state the site is in.
   - Depends on: positioning-homepage-about, website-marketing-audit

8. **Website Marketing Plan Template: Quarter-by-Quarter Sequencing** — `content/clusters/strategy/website-marketing-plan-template.md`
   - Category: content · Register: sunny-voice · Leverage: medium · Effort: medium
   - Wedge: A plan with ordered gates ('don't amplify until X is fixed') instead of the incumbents' parallel-everything Gantt fantasy.
   - Depends on: website-marketing-audit

9. **SEO vs GEO vs CRO: Where to Invest First on an Existing Site** — `content/clusters/strategy/seo-vs-geo-vs-cro.md`
   - Category: content · Register: sunny-voice · Leverage: medium · Effort: low
   - Wedge: Gives one answer with conditions instead of 'it depends, buy all three' — the page incumbents structurally cannot write because they sell all three.
   - Depends on: positioning-homepage-about, pillar-2-geo

10. **Named-Site Teardown Template** — `content/teardowns/teardown-template.md`
   - Category: content · Register: neutral-doc · Leverage: medium · Effort: low
   - Wedge: Uses the same instrument as the citation study, so every teardown adds a datapoint to the moat instead of being a one-off hot take.
   - Depends on: citation-study-methodology

11. **Teardown #001: First Named-Site Teardown** — `content/teardowns/001-first-named-site.md`
   - Category: content · Register: sunny-voice · Leverage: high · Effort: medium
   - Wedge: Names names with original data attached — incumbents publish anonymised 'a client of ours' case studies nobody can verify or share.
   - Depends on: teardown-template

12. **20-Prompt AI Visibility Audit — Lightweight Tool Spec** — `content/product/20-prompt-ai-visibility-audit.md`
   - Category: product · Register: technical-spec · Leverage: high · Effort: low
   - Wedge: Fully transparent methodology — it is literally the study instrument turned into a tool, so the score is benchmarked against published data, not a black-box vanity number.
   - Depends on: citation-study-methodology

13. **Free Site Marketing Grader — Product Spec + Launch Landing Copy** — `content/product/site-marketing-grader.md`
   - Category: product · Register: technical-spec · Leverage: high · Effort: high
   - Wedge: Grades in sequence order and outputs an ordered fix list, not a 0-100 score soup — and every run feeds the citation-share dataset.
   - Depends on: ai-visibility-audit-tool, citation-study-methodology

14. **Productised 90-Minute Audit — Offer Page, Delivery Template, Pricing** — `content/offers/90-minute-website-audit.md`
   - Category: monetisation · Register: sunny-voice · Leverage: high · Effort: medium
   - Wedge: The free cluster page IS the sales page's proof — buy the done-for-you version of the exact public method, fixed scope, fixed price, no discovery-call theatre.
   - Depends on: website-marketing-audit

15. **Opinionated llms.txt for site.marketing** — `public/llms.txt`
   - Category: ai-native · Register: technical-spec · Leverage: medium · Effort: low
   - Wedge: Dogfoods the Technical Foundation cluster's llms.txt policy page — a site about getting cited that visibly optimises its own machine-readability.
   - Depends on: stack-scaffold

16. **Analytics + Citation Monitoring Setup Guide** — `content/ops/measurement-and-citation-monitoring-setup.md`
   - Category: infrastructure · Register: technical-spec · Leverage: medium · Effort: low
   - Wedge: The site practises its own 'Measure first' rule from day zero — launch metrics become future content ('what 90 days of a new authority site actually looks like').
   - Depends on: stack-scaffold

17. **90-Day Launch Plan** — `content/strategy/90-day-launch-plan.md`
   - Category: distribution · Register: neutral-doc · Leverage: high · Effort: medium
   - Wedge: Launches a complete topical section same-day instead of drip-publishing an orphaned pillar — the plan applies the site's own sequencing doctrine to its own launch.
   - Depends on: positioning-homepage-about, pillar-2-geo, grader-spec

18. **LinkedIn Launch Thread + 5-Post Announcement Sequence** — `content/distribution/linkedin-launch-sequence.md`
   - Category: distribution · Register: sunny-voice · Leverage: high · Effort: low
   - Wedge: Leads with an original number and a named position, not 'excited to announce' — every post is extractable data or a teardown, so the feed content is itself citation bait.
   - Depends on: positioning-homepage-about, launch-plan-90-day

19. **Pillar #1 Repurposing Pack: The Actual 12 Placements** — `content/distribution/pillar-1-repurposing-pack.md`
   - Category: distribution · Register: sunny-voice · Leverage: medium · Effort: medium
   - Wedge: Proves the 'one asset, twelve placements' cluster-page claim by actually doing it to our own pillar — the pack becomes the worked example that page links to.
   - Depends on: positioning-homepage-about

20. **Newsletter: Identity, Concept + First 3 Issues** — `content/distribution/newsletter-concept-first-3-issues.md`
   - Category: distribution · Register: sunny-voice · Leverage: high · Effort: medium
   - Wedge: The site's own thesis says email is the one channel answer engines can't intercept — not shipping a newsletter would contradict pillar #1's Step 4.
   - Depends on: positioning-homepage-about

21. **Podcast Guesting Kit: Target List + Pitch Template** — `content/distribution/podcast-guesting-kit.md`
   - Category: distribution · Register: neutral-doc · Leverage: medium · Effort: low
   - Wedge: Guesting (borrowed audiences, earned mentions LLMs learn from) instead of launching an own podcast into a void — pitches carry an original stat, not a bio.
   - Depends on: positioning-homepage-about, citation-study-methodology

