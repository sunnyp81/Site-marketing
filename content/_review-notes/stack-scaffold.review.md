# Review notes: Stack Pick + Repo Scaffold Recommendation

File: `content/ops/stack-and-scaffold.md`
Register: technical-spec
Category: infrastructure · Leverage: high

---

VOICE MATCH — mostly clean technical-spec; four leaks fixed:
- "Good tool, wrong contest by a hair." — quippy flourish outside the one allowed voice moment. Cut to "Good tool, wrong contest."
- "This is a feature, not a bug — friction on JS is the point." — idiom, not spec. Replaced: "The friction is deliberate: adding client JS should require a decision, not a default."
- First-person plural outside the pull-quote, three times: "we pick root" (§4), "markup we cannot fully control" (§3 Q&A), "so we hand over the whole article" (§5). Register says no first person except the §1 pull-quote. All three rewritten declaratively.
- "Both are on the §1 review-date agenda" — the review date lives in the ADR header, not §1. Fixed the pointer.

STRUCTURE — plan compliance gaps:
- Internal links: plan requires 7; draft shipped 5. Missing `/technical/core-web-vitals` (now anchored to the Lighthouse gate in §6) and `/glossary/crawl-budget` (now anchored to requirement #2's rationale). `/how-to-market-a-website/` appeared only as plain text — now an actual link in §4.
- §6 header claimed "Together they cover all seven §2 requirements" but no gate touches req #3 (Markdown-native authoring). Fixed honestly: gates cover #1–#2, #4–#7; #3 is enforced by construction (git-only authoring — nothing to gate at release), stated explicitly.
- §7 owner-column omission (flagged in the delivery note) is fine — "Sunny + 1" stated once, table stays lean. Accepted.

WEDGE — carried correctly: self-audit thesis stated once in §1 ("the acceptance tests in §6 are literally the argument the site sells"), operationalized as runnable commands in §6, never sloganized. The pull-quote lands it. No incumbent would ship a stack doc whose CI gates are the marketing claim. No changes needed here beyond keeping repetition out.

SHIP-READINESS — four real defects a practitioner would catch:
1. SCORECARD MATH DOESN'T ADD UP. Headline claims "Astro 7/7, 11ty 6/7, Next.js 4/7" but the cells sum to 7 / 6.5 / 3.5 under half-point scoring and 7 / 6 / 3 under pass-only. Fixed two ways: stated an explicit scoring rule ("a point requires a full Pass; Partial scores zero") and corrected Next.js #4 from Partial to Pass (200 static pages genuinely builds inside the ceiling — the honest cell). Now 7 / 6 / 4 is arithmetically true. Also updated the 11ty verdict ("loses half a point" → "loses its point") and hardened req #3's pass test to include typed frontmatter, so 11ty's Partial is justified by the rubric rather than retrofitted in §3.
2. ROBOTS.TXT BUG. Named bot groups (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) each had only `Allow: /` — a crawler obeys ONLY its most specific user-agent group, so those four bots would ignore the `*` group's `Disallow: /ops/` and crawl the internal ADR the doc claims is excluded. Added `Disallow: /ops/` to every group, with a one-line note naming the trap.
3. MISLEADING CONFIG COMMENT. `filter: (page) => !page.includes('/ops/'),   // drafts excluded at generation` — the shown filter excludes nothing about drafts. Fixed: drafts are filtered in `getStaticPaths` in prod (so they never render and never reach the sitemap), comment now says so; added a `serialize` stub wiring `lastmod` to `dateModified`, since `@astrojs/sitemap` doesn't read frontmatter on its own.
4. PHANTOM DIRECTORY. Tree placed internal docs at `src/ops/` — a sibling of `pages/` that Astro would never render, so `/ops/*` URLs (which robots and sitemap rules reference) wouldn't exist. Moved to `src/pages/ops/` (plain markdown pages, rendered, noindex).
Minor: llms.txt block didn't follow the llms.txt convention (H1 + blockquote summary + markdown links, absolute URLs) — a doc deferring to `/technical/llms-txt` should model the format. Fixed. Defaults-table row "RSS lastBuildDate | Full-content | dateModified" mixed two facts in one cell — split into a coherent row. Production-notes comment said OG cache key is "dateModified hash" while §5 says "title + dateModified" — aligned.

Verdict: strong draft, right shape, wedge intact. The scorecard arithmetic and the robots.txt group bug were the two genuine blockers — both would be caught by exactly the reader this site courts. Fixed version ships.
