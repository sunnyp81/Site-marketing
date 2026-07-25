---
title: "Crawl budget"
description: "Crawl budget is the amount of crawling a search engine or AI bot allocates to a site over a given period, determined by the site's server health, its perceived value, and the freshness of…"
term: "Crawl budget"
datePublished: 2026-07-23
dateModified: 2026-07-23
author: sunny
---

# Crawl budget

**Crawl budget is the amount of crawling a search engine or AI bot allocates to a site over a given period, determined by the site's server health, its perceived value, and the freshness of its content. It caps how many URLs get crawled and how often, which in turn governs how quickly new and updated pages are discovered.**

## Why crawl budget matters for an existing site

Under 10,000 URLs, classic crawl budget is a hobby worry. Google will happily crawl a small, healthy site; obsessing over crawl efficiency at that size is optimising a problem you don't have. The 2026 problem is a different one, and it's self-inflicted: a stale `robots.txt` quietly blocking GPTBot, ClaudeBot, or PerplexityBot is a citation embargo you signed yourself. The AI engines can't cite a page they were never allowed to fetch. So before you touch anything clever, verify four bots have access — GPTBot, ClaudeBot, PerplexityBot, and Google-Extended. It's a five-minute check, and every AI citation you'll ever earn is on the other side of it.

**Q: Should a small site worry about crawl budget?**
**A: No, if you're under ~10,000 URLs — worry about AI-bot access instead.** At that scale Google crawls you fine. The failure that actually costs you citations is a `robots.txt` or firewall rule blocking AI crawlers, so audit bot access first and leave classic crawl-budget tuning to sites with six-figure URL counts.

**Related:** [Topical authority](/glossary/topical-authority/) · [Dark AI traffic](/glossary/dark-ai-traffic/)
**Read up:** [How to Market a Website in 2026 — Step 2: Fix](/how-to-market-a-website/) · [Technical Foundation](/technical/) <!-- pillar + section ROOT are LIVE day one. Deep parents /technical/bots/ (llms.txt & AI crawlers) and /technical/audit/ are [PHASE-2] — Section 4 not in the day-one batch; wire when it ships. -->
