# Jade Robertson: Copywriting Portfolio

A clean, fast portfolio site that puts the writing first. Built with [Eleventy](https://www.11ty.dev/); every writing sample is a Markdown file.

## Pages

| URL | What it is |
|---|---|
| `/` | Positioning line, three featured pieces, "What I write" overview |
| `/work/` | Every sample, grouped and filterable by section (Websites, Blogs, Short Stories) |
| `/work/<sample>/` | One sample: at-a-glance details, "See it live" link, then the full copy |
| `/about/` | Bio, what Jade writes, contact |

## Run it locally

```bash
npm install
npm start          # http://localhost:8080, reloads as you edit
npm run build      # outputs the static site to _site/
```

## Adding or editing work

Each sample is a file in `content/samples/`. The number prefix only keeps the folder tidy; the URL drops it (`07-tooth.md` → `/work/tooth/`).

```markdown
---
title: "Spring launch email series"
client: "Acme Skincare"
published_on: "Acme newsletter"
section: "Emails"            # groups and filters on the Work page; a new value creates a new section
format: "Email"              # tag shown on the card
industry: "Beauty / DTC"
type: "client"               # or "personal" (shown as Personal work)
live_url: "https://…"
published: "2026-03-01"      # YYYY-MM-DD, or leave ""
role: "Concept, subject lines, body copy"
result: "32% open rate"      # shown highlighted when filled in
featured: true               # true = shown under "Start here" on the home page
order: 10                    # position in lists
excerpt: "One or two lines for the card."
---
## Copy

The copy itself, in Markdown. Write **[CTA] Book now** to show a button label.
```

Blank fields (`role`, `result`, `published`) are hidden on the page until they're filled in.

Site-wide details (name, positioning line, intro, email, LinkedIn, optional résumé link) are in `src/_data/site.json`. To add a résumé, put the PDF in `src/assets/` and set `"resume": "/assets/your-file.pdf"`.

## Deploy

`netlify.toml` is set up: connect this repo in Netlify and it builds with `npm run build` and publishes `_site/`. Any static host works the same way.

## Other files

- `content/REVIEW.md`: checklist of things to confirm or fix in the copy before launch
- `content/bio.md`: original bio from Clippings.me
- `docs/design-research.md`: the research behind the design
