# Personal academic site of Emanuele Franceschi

Static site (no build step), served by GitHub Pages. Owner: Emanuele Franceschi, economist at the ECB. Private site; views are his own.

## Owner's preferences
- Plain, direct answers. No pleasantries, no filler, no emoji, no hedging. Say when unsure; do not invent facts.
- Metric units. Challenge the owner if something he states is wrong.
- Change only what is asked. Do not redesign unprompted. No screenshots unless asked.
- Make a zip of the files only when asked.

## Files
- `index.html`: layout, styles, page logic. Template language "x-dc" (`<sc-if>`, `<sc-for>`, `{{ }}`) with a script block at the bottom (`class Component extends DCLogic`, `renderVals()`). Runtime is `support.js`: do not edit. Page routes use the URL hash: #home, #research, #resources, #cv, #contacts, #privacy.
- `site-data.js`: ALL content (texts, research entries, resources, contacts, privacy text, settings). Edit this for content changes. Header comment explains hide / comment out / delete / add.
- `build-info.js`: empty stub; the GitHub workflow overwrites it in the published copy with the last-commit date and commit id. Never commit a real one.
- `assets/` pictures; `fonts/` Inter (self-hosted, keep licence); `vendor/` React (self-hosted); `papers/` PDFs (`cv.pdf` = CV page); `charts/` chart images (`placeholder.svg` default).
- `.github/workflows/pages.yml`: deploys to Pages at every push to main/master and sets the footer date. Pages source must be "GitHub Actions".
- `guide.md`: step-by-step guide written for the owner (editing, pictures, GitHub, domain move, analytics, charts, CV, PDFs). Keep it in sync when behaviour changes. Not published.

## Decisions to keep
- Font: Inter, self-hosted. Never add Google Fonts or any third-party CDN: visitors' IP addresses must not go to third parties (GDPR).
- Google Analytics only after consent: banner with equal Accept/Decline; Consent Mode defaults deny ad storage; Google signals and ad personalisation off; loaded only if `analyticsId` is a real ID (placeholder `G-XXXXXXXXXX` = off). Consent stored in localStorage `ga-consent`.
- Emails are base64 in `site-data.js` (`email64`) and shown on click. Never write an address in plain text.
- No numeric eyebrows, no counters, no status tags ("in progress" tags removed). Research entries: year left of title, venue and coauthors larger. Section "Other writings" is named "Other".
- ECB blue accents via `--ecb` token, discreet.
- Local PDF links get `?v=<commit id>` appended for cache busting (only relative paths).
- Resources page: three independent columns (data, codes, blogs); stacked and collapsible below 1000 px. Phone breakpoint 700 px.
- Entries can be hidden with `hidden:true`; last item of a research list ends with `]}`, so hide rather than comment it out.

## Open items
- `analyticsId` placeholder. Privacy text in `privacy` has `[BRACKET]` fields to fill; legal notice (Impressum) may be required. Not legal advice.
- `papers/cv.pdf` is a placeholder file.
- Some links to papers still point to the old repo `ceschi/ceschi.github.io`; move PDFs into `papers/` and use relative links.
- The deploy workflow was written from documentation and never run; check the Actions tab on first push.
- Domain move from Google Sites planned (guide section 7).

## Local preview
`python3 -m http.server 8000` in this folder, open http://localhost:8000. Double-clicking index.html does not work.
