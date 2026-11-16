# Content review checklist

The copy in `samples/` comes from the live pages linked on Clippings.me (November 2026) and from Jade's Google Drive folder (16 November 2026). Only formatting has been tidied. **No wording has been changed.** Everything below is for Jade to decide.

## Line-up (per Jade's instructions, 16 Nov 2026)

| # | Section | Piece | Featured |
|---|---|---|---|
| 01 | Websites | SuperSleeper homepage | |
| 02 | Websites | Parenting Collective homepage | |
| 03 | Websites | D'or Hairstylists homepage | ★ |
| 04 | Blogs | The importance of seeking professional advice for frenulum issues (Calibre Clinic) | ★ |
| 05 | Blogs | Kickboxing 101 (Champions Gym) | |
| 06 | Blogs | Choosing the Right Skin Rejuvenation Package (client to confirm) | |
| 07 | Blogs | SuperSleepers Guide: Composite Retaining Walls 101 | |
| 08 | Academic Writing | Google Analytics micro course | ★ |
| 09 | Academic Writing | AI in Marketing micro course (IMM) | |
| 10 | Academic Writing | Honours dissertation: the ethics of AI and consumer privacy (The IIE) | |
| 11–14 | Short Stories | Tooth, The House That Remembered, Her Whisper, 9 Goshawk Street | |

**Removed:** both DC Lab blogs ("The Blame Game" and "5 Reasons why your brand needs a graphic designer"). Jade asked to remove "the DC Lab blog"; this was read as both. Either one can be restored from git history if that's wrong.

## 1. Fill in for every sample

- **role** (client pieces): what Jade wrote, e.g. "Full homepage + service pages".
- **result** (client pieces): any metric, client feedback, or outcome. Leave blank if unknown; don't invent one.
- **published** (date, `YYYY-MM-DD`): missing on everything except 01 and 07.
- **live_url**: links for the three new blogs, if they're published.
- **note** (optional): 1–2 sentences in Jade's words, shown as a handwritten sticky note. Keep under ~30 words.

## 2. New pieces: details to confirm

- **06 Skin rejuvenation blog:** which client was it for? It currently says "Skin clinic". The document also ended with "Words: 859", which has been left off.
- **08 Google Analytics course:** who was it written for (IMM, like the AI course)? What year? The course describes Universal Analytics shutting down in July 2023 as upcoming. Adding the date tells reviewers to read it in that context.
- **09 AI in Marketing course:** confirm "IMM" is right and add the year.
- **10 Dissertation:** year? The title page names the author as Charnel Sweetman. Should the site mention that name, so it matches the degree certificate?
- **Full PDFs:** the academic pages show an excerpt only. To add a "Download the full PDF" button, export a PDF Jade is happy to make public, put it in `src/assets/`, and set `download: "/assets/file.pdf"`. For the dissertation, remove the student number, the interview transcripts and the consent form first; these were deliberately kept off the site.
- **Card summaries:** the short descriptions on the cards for 04, 06, 08 and 10 were written by Claude (the others use Jade's opening lines). Check that Jade is happy with them.

## 3. Confirm the live copy is still Jade's

- **02 Parenting Collective:** mentions "90+ podcast episodes" and has a long first-person "Learning Hub" section in Donna's voice. Mark which sections are Jade's.
- **01 SuperSleeper:** the line "To where it all began – with innovative design…" may have been edited after handover.
- **03 D'or Hairstylists:** the services list and product blurbs may be template or shop copy.

## 4. Proofreading fixes (applied 16 Nov 2026)

All of the fixes below have been made in the portfolio versions. The live client websites still have the original wording; Jade may want to pass these on to the clients.

| # | Was | Now |
|---|---|---|
| 02 | "over 21 years experience" | "over 21 years' experience" |
| 02 | "so is their sleep requirements" | "so are their sleep requirements" |
| 02 | "life time access" / "Life Time access" | "lifetime access" |
| 03 | "Kids Styling" (elsewhere "Kids' Styling") | "Kids' Styling" consistently |
| 04 | "The range of treatment options includes but are not limited to" | "Treatment options include, but are not limited to," |
| 04 | "It is dangerous to perform on your own frenulum-related procedure" | "It is dangerous to perform a frenulum-related procedure on yourself" |
| 04 | "We are discrete, professional" | "We are discreet, professional" |
| 05 | "knock out your opponent or force the referee to stop the fight - the boxer with the most points wins" | "…force the referee to stop the fight. If neither happens, the boxer with the most points wins!" |
| 05 | The hook: "to the side of the opponent's head and down. This punch is usually aimed at the torso." | "…thrown with the lead hand, aimed at the side of the opponent's head or body." |
| 05 | "Key defences Positions" | "Key defensive positions" |
| 05 | "guiding you every punch on the way" | "every punch of the way" |
| 06 | "Ceramides are a type of fat found in the membrane of cells that cover the nerves" | "Ceramides are fats (lipids) found naturally in the skin's outer layer." |
| 08 | "previously available only with a paid GA360 subscription" (no full stop) | add the full stop |
| 12 | "hum the Für Elise" | "hum Für Elise" |
| 13 | "Her legs where there were scales" | "Her legs, where there had been scales," |
| 13 | "the locked clinked" | "the lock clinked" |
| 14 | "rascal pulled on the leash" | "Rascal pulled on the leash" |
| 14 | "the neighbours house" / "the neighbours door" | "the neighbour's house" / "door" |
| 14 | "The old man had lead her" | "had led her" |
| 14 | "a stringing sensation" | "a stinging sensation" |
| 14 | "she was it's fertiliser" | "she was its fertiliser" |

## 5. Curation notes

- **13 Her Whisper** contains sensual and violent content. Consider leaving it off the version sent to corporate or B2B employers.
- **04 Frenulum blog** is now a featured piece (Jade's choice). It's a frank men's-health topic handled well, but expect some reviewers to be surprised by it on the home page.
- **Missing formats:** no email, social or ad samples yet.

## 6. Photo

`src/assets/img/jade.jpg` is only 200×200px. The same photo at 600×600px or larger will look sharper on high-resolution screens.
