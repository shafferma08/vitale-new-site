# Vitale Bros. site — project context

Personal context loads from `C:\Users\mshaf\Documents\CLAUDE.md`. This file is the project-specific layer.

## What this repo is

- One-file-per-page static site for vitalebrothers.com (~21 content pages).
- No bundler. Pages open by double-click (file://). `build.js` is now a no-op pass-through; do not reinstate Vite or the partials system.
- Two scheduled tasks share `SITE-BACKLOG.md` as state: `vitale-social-research` (mid-morning) and `vitale-site-daily-rebuild` (early morning).
- A third scheduled task, `vitale-pm-daily`, reads `DECISION-POLICY.md` and `SITE-BACKLOG.md` each morning and sends a single triage digest to Slack DM + Gmail.

## Hard rules (override everything)

- No em dashes in any copy I author (page copy, meta descriptions, alt text, backlog notes, work-log entries, digests).
- No fabrication of facts, dates, client names, or quotes. If I do not know, stage a question rather than invent.
- No deletions of any file or folder more than a week old without explicit sign-off.
- No edits to backlog items Marianne touched in the last 24 hours.
- Never edit `DECISION-POLICY.md`. Only Marianne does.
- Do not break double-click viewing: relative paths only, no `type="module"` on script tags, no ES module imports/exports in client JS.
- OG / Twitter / canonical URLs stay absolute `https://vitalebrothers.com/...`. Only on-page assets get relative paths.

## Workflow conventions

- Copy changes: draft 2 to 3 options in `draft-copy.md`, wait for Marianne's pick, wire verbatim. Do not edit the source text when wiring.
- Image swaps: `AI-REPLACEMENT-CANDIDATES.md` is the registry of placeholders. The researcher matches incoming social-drop photos against it; the builder does the swap and adds a `**Replaced:** YYYY-MM-DD with assets/images/...` line.
- Every change updates `SITE-BACKLOG.md` (status move + dated `What changed (YYYY-MM-DD):` note) and adds a `WORK-LOG.md` entry in the established format: Files changed / Files NOT changed / Verified / Judgment calls worth flagging.
- After CSS edits, confirm brace count balance (currently 383 / 383).
- After HTML page edits, confirm zero `<!--#include nav-->` / `<!--#include footer-->` markers remaining and zero `type="module"` on the `js/main.js` script tag.
- Decision policy buckets (see `DECISION-POLICY.md` for the authoritative list): Bucket 1 auto-decide and log a one-line note; Bucket 2 stage a default and ask Marianne to override via the daily digest; Bucket 3 always ask, never pick.

## Repo layout

- Root: 21 content pages — 5 top-level (`index`, `about`, `projects`, `artbeat`, `contact`), 5 project detail (`project-*.html`), 6 ArtBeat articles (`artbeat-*.html`), 4 service pages under `services/`, plus `404.html`.
- `_partials/nav.html` and `_partials/footer.html`: decorative source-of-truth, NOT consumed at view time after the 2026-04-26 inlining conversion. Edit them only as a parallel reference; the live nav/footer markup lives inlined in each page.
- `_prototypes/`: design reference, not shipped.
- `.backup-preinclude/` and `dist/`: stale post-conversion. Leave in place.
- `services/`: sub-depth pages. Internal links from these pages need `../` prefix.
- `styles/index.css`: single stylesheet. All design tokens live in the `:root` block.
- `js/main.js`: single classic script. No modules.
- `assets/images/social-drops/YYYY-MM-DD/`: research-task drop folders. Each contains a `drop.md` metadata file plus image files when transport succeeds.

## Brand

- Warm palette (DESIGN-002, 2026-04-19):
  - Off-black backgrounds: `#141210` (`--color-bg`), `#1c1a17` (`--color-bg-alt`).
  - Cream surfaces: `#f4ece1` (`--color-bg-cream`), `#ebe2d2` (`--color-bg-cream-alt`), `#f9f3e8` (`--color-paper`).
  - Vitale red: `#d91e25` (`--color-primary`), `#a81217` (`--color-primary-dark`).
- Type stack: Bebas Neue display, Oswald heading, Inter body. Loaded from Google Fonts.
- Do not drift back to pure `#000` / `#080808` / pure white. That is the Netflix tone the site explicitly moved away from.

## Voice

- Place-rooted, plain, family-studio. Anchor: "Three decades of murals, live painting, and public art across St. Pete, Tampa, and beyond. A family studio that shows up, listens, and paints walls people want to stand in front of."
- Avoid generic muralist cliches (passion for, dedicated to, vibrant, bring to life).
- Service taxonomy: Commercial Murals, Residential, Live and Events, Community and Civic. The old "Branding and Design" / "Signs and Canvas" buckets were folded into Commercial.

## Things to verify before claiming done

- After CSS: brace count balanced.
- After HTML: zero include markers, zero `type="module"`, double-click load test on at least one root page and one `services/` page.
- After copy: zero em dashes in the new text.
- After link or meta edits: internal links resolve, `og:*` / `twitter:*` / `canonical` stayed `https://` absolute.

## House rules

- Do not run `npm run build` or `node build.js` to view the site. Open the HTML file directly.
- No new tooling, no new dependencies without explicit ask.
- Cognito Forms is the contact handler. Form key `7GILyqMqCEOzXnDEIPu9-w`, form id `1`, seamless embed at `contact.html`. Site-side wrapper styles live in `styles/index.css` (`.contact-form__cognito`, `.cog-cognito`, `.cog-form` overflow guards). Updating Cognito's own form styling to match the site palette is in scope: the editable styles live in the Cognito dashboard's custom CSS panel and the goal is `.btn--primary` parity on the submit button plus form fields that read on the cream card.
- For research runs: Chrome MCP only, no fall-through to bash curl or Python `requests`. If the transport blocks, log it and exit cleanly.
- Daily PM digest sends to both Slack DM (tagged `vitale-pm`) and Gmail. If one channel fails, log it and proceed with the other.
- The `vitale-pm-daily` task never edits HTML, CSS, JS, or `DECISION-POLICY.md`. The rebuild task owns site files.
