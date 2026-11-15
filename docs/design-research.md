# Copywriting Portfolio: Website Design Research

Goal: a clean site where hiring managers and creative directors can find, read, and judge Jade's copywriting quickly.

---

## 1. Who the reader is and how they review

- **They don't have much time.** Guides keep saying reviewers spend **under ~10 minutes** on a portfolio, and often look at just 2–3 pieces. The site has to answer "can this person write the thing we need?" within seconds.
- **They came for the work, not the design.** Employers "want to look directly at your previous projects, not your web design" (Authory). The design should step back and let the copy do the talking.
- **What they look for** (from creative-director and hiring-manager interviews):
  1. A few excellent pieces rather than many average ones ("one or two immaculate centrepieces")
  2. Samples relevant to their industry and format
  3. Evidence of thinking: how a brief became the copy, and how complex ideas were simplified
  4. Results where available (conversion lifts, open rates, engagement)
  5. A consistent voice and flawless proofreading. A typo on a copywriter's site is fatal.

---

## 2. Recommended site structure

Keep it to 4 top-level pages. Fewer clicks means more of the reviewer's time goes to reading.

| Page | Purpose |
|---|---|
| **Home** | Positioning line, 3–6 featured pieces, contact button visible above the fold |
| **Work** (index) | All samples, filterable by format / industry |
| **Individual piece** (one per sample) | The copy itself plus a short case-study wrapper |
| **About + Contact** | Short bio, résumé PDF download, email / LinkedIn, client logos or testimonials |

### Home page: top to bottom
1. **One-sentence positioning statement**, e.g. *"Copywriter for B2B SaaS and lifestyle brands, writing web, email, and campaign copy that converts."* This is the first sample they read, so write it with care.
2. **Primary call to action:** "View work" plus a quiet "Download résumé" / "Email me".
3. **Featured work grid** (3–6 cards). Each card shows: client/brand, format tag (Email · Web · Social · Ads · Long-form), one-line outcome or hook, thumbnail.
4. **Proof strip:** client logos, a short testimonial, or 2–3 headline metrics.
5. **Footer:** contact details repeated.

### Work index
- Cards in a 2–3 column grid on desktop, one column on mobile.
- **Filter chips** by *format* (Website · Email · Social · Ads · Product · Long-form/Blog · Brand voice) and optionally by *industry*. Hiring managers often want "show me your email work" immediately.
- Each card has the same fields so pieces are easy to compare at a glance.

### Individual piece page: the key template
Put a **summary block above the work**, then the work, then the detail. A reviewer can get the gist in 15 seconds or read deeper if interested.

```
[Title / Client]                         [Format tag] [Industry tag]
-------------------------------------------------------------------
At a glance:  Role · Deliverable · Audience · Result (if known)
-------------------------------------------------------------------
The brief     2–3 sentences: the problem / goal
The approach  2–4 bullets: strategy, voice choices, constraints
-------------------------------------------------------------------
THE WORK      ← the actual copy, shown in context
-------------------------------------------------------------------
The result    metrics, client quote, or intended outcome (for spec work)
[← Previous piece]                                   [Next piece →]
```

This follows the **Problem → Solution → Result** format most guides recommend. Keep it short (bullets over paragraphs), because reviewers want the copy, not an essay about it.

**Spec or unpublished work:** label it honestly ("Spec piece" tag) and frame the result as the intended goal.

---

## 3. Showing the copy itself (where most portfolios fail)

Present each piece in the format that's quickest to read, not just as a screenshot:

| Format | Best presentation |
|---|---|
| Web pages / landing pages | Full-page screenshot in a browser frame **plus** the key copy as live text below (selectable, readable on mobile) |
| Email | Rendered email in a phone/desktop mockup; subject line + preview text shown as text above it |
| Social / ads | Grid of post mockups; caption text visible without zooming |
| Long-form / blog | Excerpt (first ~300 words) as real text + "Read full piece" link to the live URL or a PDF |
| Taglines / naming / brand voice | Large typographic display: the line itself is the visual |
| Print / packaging | Photo or mockup, with the copy transcribed beneath |

Rules:
- **Never make reviewers zoom to read.** Tiny screenshots of text are the most common complaint. Pair images with real text.
- **Avoid forced PDF downloads** as the main way to view work. Inline first; the PDF is optional.
- **Link to live versions** when they exist (adds credibility), but keep an archived copy because live pages change.
- **Highlight the copy you wrote** if the deliverable was a team effort (e.g. "My role: headline, body, CTAs").

---

## 4. Visual design guidelines ("clean")

- **Typography leads.** It's a writing portfolio, so the type is the brand.
  - A readable serif or humanist sans for body (e.g. *Source Serif*, *Literata*, *Inter*, *IBM Plex Sans*), 18–20px, line length ~60–75 characters, line-height ~1.6.
  - One accent display face for headings at most.
- **Lots of white space**, one accent color, near-black text on off-white (or a proper dark mode).
- **Consistent card grid.** Same aspect ratio thumbnails and the same metadata fields on every card.
- **Minimal motion.** No auto-playing sliders or heavy animations that slow the reviewer down.
- **Mobile-first.** Recruiters often open links from email or LinkedIn on their phone.
- **Fast.** Optimise images (WebP/AVIF, lazy-loading); aim for under 2s load.
- **Accessible.** Real text (not text baked into images) also helps screen readers and search.

---

## 5. Reviewer-friendly extras

- **"Start here" / Top 3** on Home for reviewers who will only look at three things.
- **Résumé PDF** one click from every page (header button).
- **Contact always visible** in the header: email link (not just a form) plus LinkedIn.
- **Prev / Next navigation** on piece pages so reviewers can keep reading without going back to the index.
- **Shareable per-piece URLs** (`/work/brand-email-launch`) so a hiring manager can forward a specific sample to a colleague.
- **Optional tailored landing pages** (e.g. `/for/saas`) that show only relevant samples when applying to a specific role.
- **Testimonials next to the work they're about**, not dumped on a separate page.
- **Basic analytics** (e.g. Plausible / GoatCounter) to see which pieces get opened.

---

## 6. Things to avoid

- Too many samples (aim for **8–12 strongest**, 3–6 featured)
- Clever but unclear navigation labels ("Musings", "Stuff I Made"); use plain "Work", "About", "Contact"
- Splash pages, intro animations, or a long bio before any work
- Work hidden behind passwords without explanation (if NDA, show a redacted version or describe it)
- Inconsistent presentation between pieces
- Any typo, anywhere

---

## 7. Build / hosting options

| Option | Pros | Cons |
|---|---|---|
| **Static site in this repo** (plain HTML/CSS, or Astro / Eleventy) hosted free on **Netlify** or **GitHub Pages** | Free, fast, full design control, content as Markdown files (one file per sample) | Needs light technical upkeep |
| **Squarespace / Wix / Framer** | Easy visual editing, polished templates | Monthly cost, template look-alike risk |
| **Copyfolio / Authory / Contra / Clippings.me** (writer-specific) | Set up in minutes, built for writing samples, Authory auto-imports published articles | Less unique, limited layout control |

**Recommendation for this repo:** a static site (Astro or Eleventy) where each sample is a Markdown file with front-matter fields (`title`, `client`, `format`, `industry`, `result`, `featured`, `spec`). That drives the filterable Work grid and the consistent piece template automatically. Deploy to Netlify with a custom domain (e.g. `jade[surname].com`).

Example sample file:
```markdown
---
title: "Spring launch email series"
client: "Acme Skincare"
format: Email
industry: Beauty / DTC
role: "Concept, subject lines, body copy"
result: "32% open rate, 4.1% CTR (vs 2.3% baseline)"
featured: true
spec: false
cover: /images/acme-email.webp
---
**The brief:** ...
**The approach:** ...
```

---

## 8. Where the current Clippings.me site fits

Current portfolio: <https://www.clippings.me/jade-robertson>. Each sample is a card that **links out to the live website** Jade wrote for.

**What it already does well:** it's a writer-specific host (option 3 in the table above). Samples sit in one place with thumbnails, and the live links prove the work is real and published.

**Gaps compared with what reviewers want:**

| Gap | Why it matters | Fix |
|---|---|---|
| Clicking a sample takes the reviewer **off the portfolio** | Reviewers land on a full client site, have to work out which words are Jade's, and often don't come back for a second piece | Show the copy (or key excerpts plus a screenshot) on the portfolio itself; keep the live link as "See it live" |
| **No context** per piece (brief, role, audience, result) | Hiring managers want to see the thinking and outcomes, not only the finished page | Add the "at a glance" block from section 2 to every sample |
| **Link rot**: client sites get redesigned, rewritten, or taken down | A dead or rewritten link loses the sample entirely | **Archive now**: full-page screenshot + saved copy text of every linked page |
| Hard to tell **which copy was Jade's** on a site with many contributors | Weakens the credit | State "My role: homepage, product pages, CTAs" on each sample |
| Limited control over grouping, featured pieces, and layout | Can't put a "Top 3" first or filter by format | Use Clippings sections by format at minimum; the custom site gives full control |

**Suggested path:**
1. **Now (quick wins, still on Clippings):** archive every linked page; write a 2–3 line description per clip (brief · role · result); reorder so the 3 strongest are first; group clips into sections by format or industry; tighten the bio into a one-line positioning statement.
2. **Next:** build the custom site in this repo, using the Clippings list as the content inventory. Each clip becomes one Markdown sample file with the archived screenshot, the copy as text, and the live link.
3. **After launch:** point the Clippings profile (and LinkedIn / CV) to the new site, or keep Clippings as a secondary listing.

## 9. Next steps

1. Gather 8–12 candidate samples; pick the top 3–6 to feature.
2. For each, write the at-a-glance block (role, deliverable, audience, result).
3. Write the one-line positioning statement and a ~100-word bio.
4. Choose the build route (recommended: Astro/Eleventy + Netlify).
5. Build Home → Work index with filters → piece template → About/Contact.
6. Test on mobile; have someone unfamiliar time how fast they can find an email sample.

---

## Sources

- [Authory: Copywriter websites](https://authory.com/blog/copywriter-websites)
- [Authory: 10 copywriting portfolio examples](https://authory.com/blog/10-copywriting-portfolio-examples-to-inspire-you-attract-more-clients)
- [Colorlib: Best copywriter websites](https://colorlib.com/wp/best-copywriter-websites)
- [My Codeless Website: Copywriter website examples](https://mycodelesswebsite.com/copywriter-website/)
- [Mirasee: Copywriting portfolio examples that convert](https://mirasee.com/blog/copywriting-portfolio/)
- [SiteBuilderReport: Copywriting portfolio examples](https://sitebuilderreport.com/inspiration/copywriting-portfolio-examples)
- [Copyfolio: Gari Cruze on what creative directors look for](https://blog.copyfol.io/gari-cruze-interview-copywriting-portfolio)
- [Copyfolio: How to create a copywriting portfolio](https://blog.copyfol.io/copywriting-portfolio)
- [ilovecreatives: What copywriters need to know about getting hired](https://ilovecreatives.com/resources/what-copywriters-need-to-know-about-getting-hired)
- [Creativepool: 10 things to look for when hiring a copywriter](https://creativepool.com/magazine/workshop/10-things-to-look-for-when-hiring-a-copywriter)
- [HubSpot: Copywriting portfolio](https://blog.hubspot.com/marketing/copywriting-portfolio)
- [Copy Posse: 9-step formula for writing the perfect case study](https://copyposse.com/blog/9-step-formula-for-writing-the-perfect-case-study)
