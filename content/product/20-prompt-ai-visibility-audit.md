# 20-Prompt AI Visibility Audit — Tool Spec v1

<!--
INTERNAL BUILD DOCUMENT. Not a public page; no public URL in the topical map.
The only inbound link is from the pillar Step 1 section once the tool ships.
No SEO meta block on purpose — this is an engineering artifact, not a page.

Production notes / infra requirements:
- 3 outbound API integrations (OpenAI, Perplexity Sonar, Google Gemini). Keys in secrets manager, not env-committed.
- Per-audit cost metering + hard kill-switch (see §3). Requires per-run cost accumulator.
- Transactional email provider for results email (§6). No marketing-list write on v1 email gate beyond audit record.
- Postgres (or equivalent) for the 3 tables in §7. `cited_domains` needs JSON column support.
- Rate-limit store keyed on normalised email (§5): 1 audit / email / 7 days.
- Landing surface /tools/ is NET-NEW (§9). Confirm routing/hosting for a new top-level path before D4.
-->

## §0 — Spec header

| Field | Value |
|---|---|
| Product | 20-Prompt AI Visibility Audit (standalone citation-share checker) |
| One-line definition | User enters domain + category; tool runs the published 20-prompt pilot methodology across 3 engines and returns a citation-share score benchmarked against the 8% median from the 50-site pilot. |
| Doc summary | Build spec for the standalone citation-share checker: 20 fixed-structure prompts, 3 engines, one score benchmarked against the 8% pilot median. Ship target: 5 working days, team of 2. |
| Owner | Sunny |
| Builder | Sunny + 1 engineer |
| Status | Draft — pending kickoff |
| Ship target | 5 working days from kickoff |
| Version | v1 (prompt-set v1) |
| Primary purpose | Lead instrument for `/strategy/audit` — not a SaaS product |

**Assumptions stated up front:** (a) the "8% median" is the **pilot** figure — 50 established sites, 20 prompts, 3 engines — from the published Citation-Share Study lineage (`/research/citation-share-study/`); the expanded v2 study (200+ sites, 4 engines, 3 runs per prompt, mentions half-weighted) is a **different instrument and is not what this tool scores against**. The 8% is treated here as a *frozen constant* per prompt-set version (§4, §7). (b) "Current default model" and "current pricing" mean as-of build date and are pinned in config, not hardcoded. (c) All three engine APIs expose recoverable citation data — the single riskiest assumption, constrained in §3.

---

## §1 — Why this exists / positioning constraints

1. **The tool IS the study instrument — specifically the pilot instrument**, i.e. the manual method the pillar's Step 1 publishes: 20 prompts, 3 engines, fresh context, single run, cited-with-link scoring. Zero divergence — any divergence invalidates the benchmark comparison. (The v2 study runs each prompt 3× across 4 engines and half-weights mentions; that instrument costs 4× the calls and cannot finish in 4 minutes. The tool mirrors the pilot, and the methodology page says so.)
2. **Methodology is public and reproducible.** Every score must be reproducible by hand from the linked methodology page; the results screen links to it. Reproducibility is the wedge, stated as a test (§10, D5).
3. **It is a lead instrument, not a SaaS.** No accounts, no dashboards, no run history in v1. It exists to hand the user one number and a next step.

---

## §2 — The 20 prompts

Four intent classes × 5 prompts, matching the pilot mix from pillar Step 1. Two variable slots only: `{category}` and `{brand}`. Prompts are **fixed templates, not user-editable in v1** — editable prompts destroy benchmark comparability, which is the entire product.

| # | Prompt template | Intent class | Variable slots |
|---|---|---|---|
| 1 | What's the best {category} for a small business? | best-tool | category |
| 2 | What are the top {category} options right now? | best-tool | category |
| 3 | Which {category} do experts recommend? | best-tool | category |
| 4 | What's the best {category} for beginners? | best-tool | category |
| 5 | What's the most reliable {category} available today? | best-tool | category |
| 6 | How do I choose a {category}? | how-do-I | category |
| 7 | What should I look for in a {category}? | how-do-I | category |
| 8 | How do I get started with {category}? | how-do-I | category |
| 9 | What's the easiest way to compare {category}? | how-do-I | category |
| 10 | How do I avoid common mistakes when picking a {category}? | how-do-I | category |
| 11 | {brand} vs alternatives — which should I pick? | comparison | brand |
| 12 | How does {brand} compare to other {category}? | comparison | brand, category |
| 13 | What are the best alternatives to {brand}? | comparison | brand |
| 14 | What's the difference between the top {category} options? | comparison | category |
| 15 | Which {category} offers the best value for money? | comparison | category |
| 16 | Is {brand} legit? | trust | brand |
| 17 | Is {brand} worth it? | trust | brand |
| 18 | Are {category} worth the money? | trust | category |
| 19 | What do reviews say about the best {category}? | trust | category |
| 20 | Is it worth paying for a {category} or are free ones fine? | trust | category |

> **Callout — brand-aware split:** Exactly 5 of 20 use the `{brand}` slot (#11, #12, #13, #16, #17); the other 15 are category-only. Rationale: category prompts measure **discoverability** (does the engine reach you when the user never names you?); brand prompts measure **reputation retrieval** (when your name is in the query, does the engine cite you?). `{brand}` is prefilled from the domain's root label and **user-editable at input** (§5) — correcting the brand string does not break comparability, because brand prompts are site-specific by design.

---

## §3 — Engine coverage

v1 runs 3 engines × 20 prompts = **60 calls per audit**, parallelised per engine — serial execution misses the 4-minute wall-clock target (§5).

| Engine | Access method | Model / config | Fresh-context guarantee | Cost per audit (est.) |
|---|---|---|---|---|
| ChatGPT | OpenAI API | current default model, web-search tool ON | New request per prompt; no thread reuse; no memory | ~$0.18 |
| Perplexity | Sonar API | Sonar (current default) | Stateless per call | ~$0.10 |
| Gemini | Gemini API | current model, grounding ON | New request per prompt | ~$0.08 |

- **Explicitly OUT of v1 — for two different reasons, stated separately:**
  - **Claude:** excluded for **benchmark parity, not capability** — Claude has a citation-capable search API, but it was not in the pilot the 8% median comes from. The v2 study adds it and notes that adding an engine changes the blended figure by construction; the tool inherits the same discipline. First v1.1 candidate, arriving only with a re-frozen median (§4).
  - **Google AI Overviews:** no API path; even the v2 study keeps it observational-only.
  - Net: **the 8% median was computed on exactly these 3 engines, so v1 parity is a feature, not a gap** — adding engines the pilot never measured would break the comparison, not improve it.
- **Cost claim:** ≤ **$0.40** total API cost per full audit at current pricing. **Kill-switch at $0.60** — a per-run cost accumulator aborts and voids the run (no email, no partial score) if cumulative spend crosses the ceiling.

> **Constraint C3 — citation extraction is the riskiest assumption; it needs a per-engine fallback.** The score depends on extracting cited URLs from each engine's response, and the formats are not uniform: Perplexity Sonar returns structured citation objects reliably; Gemini grounding returns metadata with source URIs; **OpenAI's web-search responses do not reliably return structured citation objects** and may embed sources inline or omit machine-readable references. Required handling:
> - **Primary path:** parse each engine's structured citation field where it exists.
> - **Fallback path (ChatGPT especially):** extract URLs from the response body and annotation fields via URL regex, then normalise (§4 domain-match rules).
> - The D1 API spike (§10) must **prove all 3 engines return recoverable citations before any pipeline work.** If ChatGPT cannot yield citations via primary or fallback with acceptable reliability, it is descoped to v1.1 and v1 ships as a 2-engine tool — which changes the denominator and requires re-freezing the median (§4). Go/no-go on D1, not a day-5 surprise.

---

## §4 — Scoring

Per-answer logging mirrors pillar Step 1 exactly. For each of the 60 answers, capture: **mentioned?** (brand appears in text, no link), **cited-with-link?** (an owned-domain URL is returned as a citation), and **who was cited instead** (competitor domains extracted from the same answer).

An on-topic refusal or empty answer counts as **answered / not mentioned / not cited** — the denominator stays 60. (Study v2 excludes no-answers from its denominator; the tool takes the simpler pilot position, and the methodology page states the divergence.) Availability failures — timeouts, 500s — are different, and void the run (§6).

**Headline formula:**

```
citation_share = (answers where the user's domain is cited-with-link) / 60
```

Mention-share is reported as a **secondary number**, never blended into the headline.

```
mention_share = (answers where the brand is mentioned, with or without link) / 60
```

**Worked example:** 7 cited-with-link answers of 60 → 7 / 60 = **11.7%**. Rendered as: *"You: 11.7% — Median established site: 8%."*

> **Frozen-median rule.** The 8% comparison number and the verdict bands below are a **frozen constant pinned to prompt-set v1.** Individual audit runs feed the aggregate dataset (§7), but they never move a live median under a user's score. Re-benchmarking is a **deliberate, versioned event**: recompute the median, bump the prompt-set version, update the pillar stat and this spec together. Benchmark comparisons are only valid within a single prompt-set version.

> **Domain-match / normalisation rules.** "Domain is cited" is defined precisely, because the whole score rests on it:
> - Strip scheme, `www.`, path, query, fragment; lowercase; reduce to **registrable domain** (eTLD+1 via public-suffix list). `https://blog.example.com/x` → `example.com`.
> - **A cited URL matches the user** if its registrable domain equals the user's. **Subdomains count** (blog/docs/shop all credit the root); a different registrable domain does not.
> - **Competitor grouping** (§6 "top 5"): every non-user cited URL is normalised to registrable domain and counted by frequency across all 60 answers. Ranked by citation count; ties broken by first appearance.
> - Duplicate citations of the same domain **within one answer** count once for that answer (the unit is the answer, not the URL).

**Q&A block:**

- **Why is a link required, not just a mention?** A mention without a link is reputation, not visibility. The score measures whether an engine sends a user to you as a *source*; only a cited link does that. Mentions are reported separately so the distinction stays honest.
- **Why one blended score instead of per-engine?** Because the 8% median was computed blended across the pilot's three engines — the number benchmarked against 8% must match what 8% was computed from. Per-engine numbers are shown as secondary bars (§6), matching pillar Step 1's per-engine logging, not hidden.
- **Is 8% good?** No. 8% is the *median* — typical, and mediocre. It is the number to beat, not the number to celebrate.

**Verdict bands (four, no fifth) — defined by cited-answer count so every possible score of /60 lands in exactly one band:**

| Cited answers (of 60) | Citation share | Band | Meaning |
|---|---|---|---|
| 0–2 | 0–3.3% | Invisible | Engines effectively never cite you. |
| 3–5 | 5.0–8.3% | Typical | At or around the median established site. |
| 6–9 | 10.0–15.0% | Ahead | Above median; being retrieved meaningfully. |
| 10+ | ≥16.7% | Cited source | Engines treat you as a go-to source. |

---

## §5 — Input flow

1. **Enter domain.** Single field. Below it, `{brand}` prefilled from the root label, editable.
2. **Pick category.** Free-text field with autosuggest seeded from a ~200-entry category list (§10 risk mitigation). No taxonomy database in v1 — the resolved string goes straight into `{category}`.
3. **Email gate — BEFORE the run.** This is the lead capture, stated plainly. No email, no run.
4. **Run screen.** Per-engine progress across the 60-call run. Target wall-clock ≤ **4 minutes**.

**Validation rules:**

- Strip protocol and `www.`; reject non-resolving domains (DNS check).
- Category must be **2–6 words**; reject empty or single-character input.
- **1 audit per email per 7 days** (abuse control + scarcity).
- Email must be syntactically valid; normalised (lowercase, trim) before the rate-limit check.

---

## §6 — Output / results screen

Top to bottom, 7 elements:

1. **Headline score vs 8% median** — single comparison bar. The only chart on the page.
2. **Verdict band label** (from §4).
3. **Per-engine breakdown** — 3 rows (ChatGPT / Perplexity / Gemini), each showing that engine's cited count out of 20.
4. **"Who's getting cited instead"** — top 5 competitor domains by citation count (§4 grouping rules). This is the screenshot-bait element; it exists to be shared.
5. **Full 60-row evidence table, expandable** — columns: prompt, engine, mentioned Y/N, cited Y/N, cited domains.
6. **Methodology links** — the tool's methodology page, "reproduce this by hand" to pillar Step 1 (`/how-to-market-a-website/`), and one text link to `/measurement/citation-monitoring/` ("this score is a snapshot — that page is how you track it monthly"). Text links, not CTAs.
7. **Single CTA** → `/strategy/audit` — *"Your score is the first of six numbers. Here are the other five."*

**Under the Invisible and Typical bands only,** show a secondary "here's the fix" link to `/visibility/geo`.

> **Partial / failed-run rule.** The score assumes 60/60 completed. Availability failures (an engine 500s, times out, or is rate-limited mid-run) are handled explicitly, separate from the format-change risk in §10:
> - Failed calls auto-retry up to 2× with backoff.
> - **If any single engine completes fewer than 20/20 after retries, the entire run is VOIDED** — no score computed, no results email, and the audit does not count against the 7-day limit. The user sees a "we couldn't finish — try again shortly" state.
> - Rationale: a score over a denominator < 60 is not comparable to the 8% median and must never be shown or emailed. Denominator integrity is the same principle as the frozen-median and fixed-prompt rules.

**Results email spec:** Results also sent as **one plain-text email** — headline score, top-3 competitor domains, single CTA to `/strategy/audit`. **No PDF in v1.**

---

## §7 — Data model

```sql
-- One row per completed audit
audits (
  id            uuid primary key,
  domain        text,          -- normalised (§4)
  category      text,          -- resolved {category} string
  email         text,          -- normalised, rate-limit key
  prompt_set    text,          -- e.g. 'v1' — benchmark validity scope
  created_at    timestamptz,
  blended_score numeric,       -- citation_share, headline
  mention_score numeric,       -- secondary, never blended
  band          text           -- Invisible | Typical | Ahead | Cited source
)

-- 60 rows per audit (one per engine × prompt)
responses (
  audit_id      uuid references audits(id),
  engine        text,          -- chatgpt | perplexity | gemini
  prompt_id     int references prompt_templates(id),
  raw_answer    text,          -- retained 90 days, then dropped (see below)
  mentioned     bool,
  cited         bool,
  cited_domains jsonb          -- normalised registrable domains, this answer
)

-- The instrument itself, versioned
prompt_templates (
  id            int primary key,
  template      text,          -- e.g. 'Is {brand} legit?'
  intent_class  text,          -- best-tool | how-do-I | comparison | trust
  has_brand_slot bool,
  version       text           -- benchmark comparisons valid WITHIN a version
)
```

- **Prompt-set versioning is load-bearing:** a version bump inserts new rows (new ids; ids never reused), so a benchmark can never be silently corrupted. Comparisons are only valid within one `version`, and the frozen median (§4) is pinned to it.
- **Retention:** raw answers kept **90 days** for dispute/verification, then raw text is dropped while scores are retained.
- **Aggregate as a product feature:** every completed audit grows the benchmark dataset → **quarterly re-benchmark** of the 8% number (a deliberate versioned event, §4) → each refresh is a new PR asset, feeding the digital-PR motion at `/distribution/digital-pr/`.

---

## §8 — Build scope: in / out

| IN (v1) | OUT (v1) — with reason |
|---|---|
| Fixed 20-prompt templates | User-editable prompts — destroys benchmark comparability |
| 3 engine APIs (ChatGPT, Perplexity, Gemini) | Claude — pilot parity (§3); AI Overviews — no API path |
| Cited-domain extraction (structured + URL-parse fallback, no scraping) | Historical tracking / re-run dashboard — that's the monitoring page's job |
| Score + 4 verdict bands | Competitor-audit mode — different product |
| Email gate (lead capture) | PDF export — email covers v1 |
| Results page | White-label — not a lead instrument need |
| Results email (plain text) | Accounts / login — no persistence promise in v1 |
| Public methodology page | Multi-category per run — one category, one score |
| Per-run cost meter + kill-switch | API access — not a v1 audience |
| Partial-run voiding + retries | Paid tier — the paid product is the human audit |

**Scope rule:** anything OUT that gets requested **10+ times** becomes a v1.1 candidate — not a mid-build v1 scope change.

---

## §9 — Landing page copy

**Landing URL:** `/tools/ai-visibility-audit/` — **flag: `/tools/` is a net-new top-level surface**, the first entry under it. Confirm routing before D4.

**Reader:** owner or marketing lead of an established site who suspects they're invisible in AI answers but has no number. Arrival feeling: curiosity with mild dread. Post-score feeling: "I have a real number and a next step" → clicks the audit CTA.

Copy below is final v1 copy, one block per slot. Spec framing stays neutral; the copy itself is in site voice.

**[H1]**
> Find out if AI ever mentions your website. Takes 4 minutes.

**[Subhead]**
> We audited 50 established sites. The median one showed up in just 8% of AI answers. Most owners assumed zero. A few assumed plenty. Both were wrong — get your real number.

**[How it works — 3 steps]**
> 1. Enter your domain and your category.
> 2. We run the published 20-prompt audit across ChatGPT, Perplexity and Gemini — 60 fresh-context answers.
> 3. You get your citation share against the 8% median, plus who's getting cited instead of you.

**[Methodology-transparency block]** — this is the wedge; do not soften it.
> We're not hiding the method. It's published, start to finish — the prompts, the engines, the scoring. You could run this whole audit by hand from [the manual method](/how-to-market-a-website/) and [the Citation-Share Study](/research/citation-share-study/); this just does it in 4 minutes instead of an afternoon. If you don't trust your number, check our working. (New to the acronyms? [GEO](/glossary/geo), [AEO](/glossary/aeo).)

**[Social-proof-via-data block]** — data, not logos or testimonials.
> No testimonials on this page. Just the dataset: 50 established sites, 20 prompts, 3 engines, one median — 8%. Your score lands on the same scale, measured the same way.

**[FAQ — 4 Q&As]**
> **Is it free?** Yes. The 60 API calls cost us less than a coffee. The email address is the price.
>
> **Which engines?** ChatGPT, Perplexity and Gemini — the same three the 50-site benchmark used, so your score compares like-for-like. Claude joins when the benchmark does.
>
> **Why only 20 prompts?** Because the benchmark used 20. Change the prompts and the 8% comparison means nothing. Fixed prompts are the point, not the limitation.
>
> **What do you do with my email?** We email you your results, then we try to sell you an audit. Once. No drip sequence, no "just checking in".

**[CTA]** — single button into the input flow (§5). One button, one path.
> Run my audit — *4 minutes. 60 answers. One number.*

---

## §10 — Build plan

Team = Sunny + 1 engineer. 5 working days.

| Day | Milestone | Owner |
|---|---|---|
| D1 | Prompt templates finalised + engine API spike: **all 3 engines proven to return recoverable citations (primary or fallback) — go/no-go gate (§3, C3)** | Sunny (prompts) / engineer (APIs) |
| D2 | Scoring pipeline + data model + citation-domain extraction and normalisation (§4 rules) | Engineer |
| D3 | Input flow + results page (incl. partial-run voiding, §6) | Both |
| D4 | Landing copy in + email delivery + rate limiting + cost kill-switch | Sunny (copy) / engineer (infra) |
| D5 | **5-site validation run: tool scores vs same-day hand-run scores (consumer apps, pillar Step 1 method) must land within ±2 points — this gate is also what validates API-vs-app divergence. Else NO SHIP.** Launch checklist below. | Both |

**D5 launch checklist:**
- [ ] Methodology page live and linked from results screen; states pilot-parity position and the no-answer divergence from study v2 (§4).
- [ ] Pilot scoring definition confirmed: the frozen 8% was computed as cited-with-link under §4-equivalent rules; if the pilot counted linkless mentions, recompute the frozen constant from pilot raw data before ship.
- [ ] Pillar Step 1 (`/how-to-market-a-website/`) updated to link the tool (bidirectional).
- [ ] Frozen median + bands confirmed pinned to prompt-set v1.
- [ ] Cost kill-switch verified firing at $0.60.

**Named risks:**

1. **Engine citation formats change** → response-format tests run daily against all 3 engines; a break alerts before it corrupts scores.
2. **Category string too vague → garbage prompts** → autosuggest seeded from a ~200-category list; free-text still allowed but nudged.
3. **Cost blowout** → per-run cost meter + hard kill-switch at $0.60 (§3); run voided, not partially scored.

---

## Named claims / positions this spec takes

1. The 8% median citation share across 50 established sites is the benchmark; the tool's only job is placing you against it.
2. Fixed prompts beat editable prompts — comparability is the product; customisation is a different (paid, later) product.
3. Cited-with-link is the score; mentions are secondary. A mention without a link is reputation, not visibility.
4. 3 engines is correct for v1 because it matches the pilot instrument the 8% comes from — parity over coverage. Claude waits for a re-frozen median, not for an API.
5. 60 calls, ≤ $0.40, ≤ 4 minutes, ship in 5 days, ±2-point hand-verification tolerance.
6. Every audit run feeds the benchmark dataset — the tool refreshes its own headline stat quarterly, as a deliberate versioned event.

## Internal links

| Anchor context | Target | Status |
|---|---|---|
| Manual method the tool automates (Step 1) — bidirectional | `/how-to-market-a-website/` | Confirmed |
| Published study the benchmark descends from (§0, §9) | `/research/citation-share-study/` | Confirmed — linked from pillar; source doc `content/research/citation-share-study-methodology.md` |
| Primary CTA (results screen + email) | `/strategy/audit` | Confirmed |
| "Automate it ongoing" sibling (tool = snapshot, that page = monitoring) — §6 element 6 | `/measurement/citation-monitoring/` | Confirmed — linked from pillar Step 1 |
| "Your score is low — here's the fix" (Invisible/Typical bands) | `/visibility/geo` | Confirmed |
| Benchmark-dataset → PR motion (§7) | `/distribution/digital-pr/` | Confirmed — linked from pillar PR section |
| Glossary, inline from landing + methodology page | `/glossary/geo`, `/glossary/aeo` | Confirmed |
| Landing surface | `/tools/ai-visibility-audit/` | **Net-new surface — no `/tools/` path exists yet** |