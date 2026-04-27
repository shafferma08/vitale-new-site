# Vitale Bros. Site Rebuild — Backlog

Last updated: 2026-04-27 (interactive session: contact-form Cognito styling + 4 of 6 AI placeholders swapped, 2 awaiting source photos from John)

## How this works

This file is the shared memory between two scheduled tasks:

1. **`vitale-social-research`** (mid-morning daily) browses the public Vitale Bros. Instagram and Facebook pages, downloads new photos to `/assets/images/social-drops/YYYY-MM-DD/`, writes a `drop.md` metadata file, and adds new `[CONTENT-NEW-*]` or `[REPLACE-AI-*]` items to this backlog tagged track `content` and priority P1.
2. **`vitale-site-daily-rebuild`** (early morning daily) reads this file, picks 1 to 3 unblocked `todo` items, does the work in `/vitale-new-site/`, updates statuses here, and logs a dated line in `WORK-LOG.md`.

The researcher leaves work behind, the builder consumes it. They do not run in the same session.

Statuses: `todo`, `in-progress`, `done`, `blocked`.

Tracks: `build`, `design`, `content`, `research`.

Item ID conventions:
- `[CONTENT-NEW-YYYY-MM-DD-slug]` — new project or content block sourced from social drops on that date.
- `[REPLACE-AI-image-name]` — swap a known AI placeholder with a real photo. Marianne maintains the AI placeholder list in `AI-REPLACEMENT-CANDIDATES.md`; researcher matches incoming photos against it.

**Marianne's review points:** anything marked `blocked` is waiting on her. Anything marked `done` should be opened and sanity-checked before next deploy.

**Important context:** many design decisions already live in `prototype.html` (warmer palette, hero redesign, press bar, testimonials, FAQ, dense portfolio grid). A lot of the build work is *porting those treatments into the real multi-page structure*, not reinventing them.

**Shared nav/footer partials:** As of 2026-04-17, nav and footer live in `_partials/nav.html` and `_partials/footer.html`. They get inlined into each page at build time by a Vite plugin in `vite.config.js` (looks for `<!--#include nav-->` and `<!--#include footer-->` markers). Edit the partials once and every page updates. The active-nav highlight is set at runtime by `initActiveNav()` in `js/main.js` based on URL path. Don't copy-paste nav or footer HTML back into individual pages.

---

## P0 — Ship-blockers

### [BUILD-001] Contact form submits to nowhere
- Track: build
- Status: done
- Why: `/contact.html` had `<form action="#">`, so submissions were vanishing.
- What changed (2026-04-27): Marianne confirmed the studio uses Cognito Forms (existing form key `7GILyqMqCEOzXnDEIPu9-w`, form id `1`) and provided both the seamless embed and iframe versions. Wired the seamless embed into `/contact.html`: the entire native HTML form (name, email, phone, service select, message, submit button) was replaced with a single `<script src="https://www.cognitoforms.com/f/seamless.js" data-key="7GILyqMqCEOzXnDEIPu9-w" data-form="1"></script>` inside the existing `.contact-form` card. Picked seamless over iframe because the iframe is fixed at 1066px tall, doesn't dynamically resize to content, and renders in its own document so it doesn't inherit the page's typography or palette. Seamless renders inline and inherits the surrounding font and base color where it can. The card chrome (`.contact-form` padding, background, border, radius), the "Start Your Project" h2, and the contact-info side column were all preserved. Added a small `.contact-form__cognito` wrapper rule to `styles/index.css` plus two `.cog-cognito` / `.cog-form` selectors to make sure the injected form doesn't overflow the card padding. Success state, honeypot, validation, and submission delivery are all handled by Cognito on their end (no custom JS needed). The success page and notification email destinations are configured in the Cognito dashboard, so any tweaks there happen outside this repo.
- Follow-up for Marianne: (1) Open `/contact.html` in a browser and submit a test entry to confirm it lands in the Cognito inbox and the success page reads right. (2) Confirm the notification email destination in the Cognito dashboard points at the correct address (info@vitalebrothers.com or wherever you want submissions to go). (3) The old form had a "Service Needed" select with options like Commercial Mural, Residential Mural, Live Painting Event, Branding & Design, Signs & Canvas, Other. If your Cognito form doesn't already include that field, consider adding it on Cognito's side so the routing inside the inbox can match the new service taxonomy. (4) The Font Awesome arrow icon and original brand-red button styling came from the old custom form; the Cognito embed will render its own submit button styled by Cognito's stylesheet. If you want the button to match the rest of the site's `.btn--primary` treatment exactly, that's a Cognito Forms custom-CSS task in their dashboard, not a repo edit.

### [CONTENT-001] Replace placeholder testimonials with real ones
- Track: content
- Status: done (partial, see note)
- Why: live site has 8 real named testimonials (Ashley Cantero, Dan Pemberton/Pesky Pelican, Melissa Phillips, Michael Sheehan, Elizabeth Young, Amanda Hargett, plus two more). New site uses generic "Michael R., Sarah L., James T." placeholders.
- What changed (2026-04-18): replaced the 3 generic placeholder cards in `index.html` with the 6 real named testimonials from `prototype.html` (Ashley Cantero, Dan Pemberton, Melissa Phillips, Michael Sheehan, Elizabeth Young, Amanda Hargett). Grid already set to `repeat(3, 1fr)` so they flow as 2 rows of 3 on desktop. No CSS changes needed.
- Follow-up for Marianne: the backlog mentions "plus two more" testimonials on the live site that aren't captured in the prototype. If those two exist and you want them on the new site, grab the text and attribution from vitalebros.com and I'll add them. Not blocking deploy, but worth capturing.

### [BUILD-002] Service cards route to individual service pages
- Track: build
- Status: done
- Why: all 4 service cards on the homepage link to `/projects.html`, so the "pick a service, see examples" promise is broken.
- What changed (2026-04-20): created 4 new service pages under `/services/`: `commercial.html`, `residential.html`, `live-events.html`, `community-civic.html`. Each page has a `.page-header` (matching projects.html/about.html), an overview section with copy plus 3 iconed "what we do" bullets, a featured-work block, and a dedicated CTA. Live & Events also includes a 4-step "how a live paint runs" block on a cream surface. Community & Civic also includes a 3-card "signature civic work" section linking out to the matching ArtBeat articles for SHINE Festival, Power to the Patients, and vandalism restoration. Homepage service cards in `index.html` were relabeled and re-pointed to the new taxonomy: Commercial Murals, Residential, Live & Events, Community & Civic. Mapping decision: the old "Branding & Design" and "Signs & Canvas" buckets didn't match the prototype's 4-bucket taxonomy used by BUILD-005, so the homepage card labels were brought into alignment with the prototype and the new service pages. Added CSS for `.service-overview`, `.service-point`, `.service-work`, `.service-howit`, `.service-signature`, and `.signature-card` (roughly 170 new lines), plus responsive rules at 1024px and 768px. Nav partial was not changed; no services dropdown was added. Marianne can decide later whether to add `/services/` to the top nav.
- Follow-up for Marianne: check the 4 new pages and confirm the copy/tone feels right. Flag if she wants "Services" added to the main nav, and whether "Branding & Design" / "Signs & Canvas" should live as sub-pages or be folded into Commercial.

### [DESIGN-001] Rewrite hero headline and subhead
- Track: design
- Status: done
- Why: "Making Walls Come Alive" was generic. Live site's "Bringing Art to the Community Since 1992" actually says who they are.
- What changed (2026-04-18): created `draft-copy.md` with 3 hero options: (A) longevity-led "Bringing Art to the Community Since 1992", (B) place-led "The Studio That Paints St. Pete", (C) scope-led "Murals for Stadiums, Storefronts, and Everything in Between". Each option includes kicker, headline, subhead, CTAs, and a short note on when it works best.
- What changed (2026-04-27): Marianne picked Option A (Longevity first). Wired into `index.html`: kicker now reads "St. Petersburg, FL, Est. 1992" (comma instead of em dash, per her preference), the four-line headline stack now reads "Vitale Bros." / "Bringing Art" / "to the Community" / "Since 1992." with "Since 1992." carrying the `hero__title-accent` red treatment, and the subhead now reads "Three decades of murals, live painting, and public art across St. Pete, Tampa, and beyond. A family studio that shows up, listens, and paints walls people want to stand in front of." The page `<title>`, meta description, and the matched og / twitter title and description tags were all updated to mirror the new positioning ("Vitale Bros. | Bringing Art to the Community Since 1992" plus a description that names the three-decade range and the four work types). The mural slideshow, ken-burns animation, panel-behind-text treatment, scrim, slide dots, and CTAs were all preserved untouched.
- Follow-up for Marianne: open `index.html` and confirm the new headline reads cleanly across all four mural slides (especially the brighter Retro Elvis frame). Spot-check the link preview on a fresh paste into Slack, LinkedIn, or the Meta debugger after deploy to confirm the new og:title and og:description take.

### [BUILD-003] Restore Instagram "Daily Art Feed" section
- Track: build
- Status: done
- Why: live site has it, new site dropped it. Social proof and freshness live here.
- What changed (2026-04-18): ported the 6-tile IG grid from `prototype.html` into `index.html` as a static section between Testimonials and CTA. Each tile links out to instagram.com/vitalebros in a new tab. Added `.ig-feed` styles to `styles/index.css` (6-column grid on desktop, 3 on tablet, 2 on mobile) with hover scale and a subtle gradient overlay. IG icon via Font Awesome (already loaded). Chose static over live embed per the backlog's "start static" guidance: safer, faster, and doesn't require an IG Graph API token. Uses existing local images in `assets/images/` (rays, bucs-murals, retro, backyard-murals).

### [BUILD-004] Restore studio intro video
- Track: build
- Status: blocked
- Why: live site has a short video, new site dropped it.
- Blocked on: Marianne confirming where the video file lives. Could be YouTube (`@johnvitale8133`) or a direct file.
- Action once unblocked: embed on homepage or About page, with a poster frame and muted autoplay.
- Status note (2026-04-25): item was carrying status `todo` despite the description naming Marianne as the dependency. Bumped to `blocked` so the P0 todo list reflects what's actually shippable without her input. Nothing else changed.

---

## P1 — High value

### [DESIGN-002] Shift palette to warmer off-black and cream
- Track: design
- Status: done
- Why: pure `#080808` and white reads as Netflix. Off-black (`#141210`) and cream (`#f4ece1`) reads as gallery, and sets them apart from every other muralist site.
- What changed (2026-04-19): rewrote the `:root` token block in `styles/index.css`. Dark tokens shifted warm: `--color-bg` `#080808` to `#141210`, `--color-bg-alt` `#111111` to `#1c1a17`, `--color-bg-card`/`--color-bg-elevated`/`--color-surface` follow the same warm shift. `--color-primary` `#e01f26` to `#d91e25`, `--color-primary-dark` `#b01319` to `#a81217`, `--color-primary-glow` retuned. Text tokens softened: `--color-text` to `#f6f2ec`, muted/subtle warmed slightly. Added 6 NEW cream-surface tokens for the prototype's light sections: `--color-bg-cream`, `--color-bg-cream-alt`, `--color-paper`, `--color-ink`, `--color-ink-muted`, `--color-border-cream`. Updated three legacy hardcoded references (`.nav--scrolled`, `.nav__mobile`, `--gradient-dark`) from `rgba(8,8,8,*)` to `rgba(20,18,16,*)`. The hero scrim's hardcoded `rgba(8,8,8,*)` values were rewritten as part of DESIGN-003. All CSS rules use `var(--color-*)` tokens, so the shift propagates everywhere automatically. CSS brace count balanced (296/296).

### [DESIGN-003] Redesign hero with panel-behind-text treatment
- Track: design
- Status: done
- Why: current hero scrim darkens 44% of the viewport to make text legible. Panel behind text keeps the mural legible across its full width.
- What changed (2026-04-19): rewrote `.hero__scrim` in `styles/index.css` to drop the heavy left-column wash. Scrim now only darkens the top 28% (so nav stays readable) and the bottom 55% (for slide dots and depth), leaving the middle of the mural fully visible. Added panel styling to `.hero__inner`: `max-width: 620px`, `padding: 36px 40px`, `background: rgba(20,18,16,0.78)`, `backdrop-filter: blur(16px) saturate(110%)`, subtle border. Mobile rule at `@media (max-width: 480px)` shrinks panel padding to `24px 22px`. No HTML change needed; the existing `.hero__inner` element became the panel. Slideshow, ken-burns animation, and dots indicator preserved.

### [CONTENT-002] Press logos "Featured In" bar on homepage
- Track: content
- Status: done
- Why: Fox 13, Tampa Bay Times, St. Pete Catalyst, Creative Loafing credentials currently live only on the ArtBeat page. Move a logo strip to homepage above the fold.
- What changed (2026-04-19): added a `<section class="proof">` block to `index.html` between hero and Our Story, and matching `.proof` / `.proof__row` / `.proof__label` / `.logo-chip` styles to `styles/index.css`. Used the prototype's text-based "logo chip" treatment rather than image logos: it ships immediately, scales cleanly, and avoids hunting down SVG/PNG with usage-rights questions. Six outlets linked to their respective ArtBeat articles: Fox 13 Tampa Bay, St. Pete Catalyst, Creative Loafing, ilovetheburg, Tampa Bay Times, Eyes on the Streets. All 6 article pages confirmed to exist. Cream background (`--color-bg-cream`) provides visual contrast against the dark hero above and dark Our Story below. Mobile collapses the label-and-logos grid to a single column.
- Follow-up for Marianne: if she'd rather show actual outlet logos (real SVGs/PNGs) than the text treatment, drop them in `assets/images/press/` and I can swap. Also: BUILD-009 (the "Trusted by" client strip) was intentionally NOT added here, because it's still blocked on usage rights confirmation.

### [BUILD-005] Community & Civic service page
- Track: build + content
- Status: done
- Why: new site dropped "Community Street Art" in favor of "Live Painting" and "Signs & Canvas." SHINE Festival and Power to the Patients work is some of the strongest material they have, and it doesn't fit cleanly in the three remaining buckets.
- What changed (2026-04-20): built as part of BUILD-002. `/services/community-civic.html` now carries the full civic pitch: public art / festivals, advocacy / nonprofit, and restoration / vandalism recovery. A dedicated "Signature Civic Work" section spotlights three landmark projects as cards (SHINE Mural Festival, Power to the Patients, Vandalism Restoration), each linking to its matching ArtBeat article (`artbeat-catalyst-shine.html`, `artbeat-ilovetheburg-patients.html`, `artbeat-cltampa-restore.html`). CTA reframes the contact ask for civic and nonprofit partners ("Start a Conversation") rather than the generic commercial ask. No project pages for SHINE or Power to the Patients exist yet, so the signature cards link to the ArtBeat stories, which is the best content we currently have.
- Follow-up for Marianne: if she wants dedicated `/project-shine.html` and `/project-power-to-the-patients.html` pages (with full photo sets), flag that and we can build them in a future run.

### [CONTENT-003] Replace initial-letter avatars on About with real photos
- Track: content
- Status: blocked
- Why: About page shows "JV", "S", "J" in circles instead of photos of Johnny, Sionna, Jason.
- Blocked on: Marianne providing headshots (studio shots or action shots).
- When unblocked: crop to square, optimize, swap into the crew grid.

### [RESEARCH-001] Pull 10-15 recent project photos from Instagram
- Track: research
- Status: blocked
- Why: projects page only has 5 items. IG has much more current work.
- Blocked on: manual Chrome research session (Marianne logged in, Chrome extension active).
- Action when running: browse `instagram.com/vitalebros`, save top 10-15 images + captions + locations into `/assets/images/social-drops/` and `/content/social-drops.md`.
- Update (2026-04-27): the scheduled-task `vitale-social-research` run on 2026-04-27 indexed the 24 most recent IG posts and captured detailed metadata (permalinks, captions, post dates, suggested project tags) for the top 12 in `/assets/images/social-drops/2026-04-27/drop.md`. Image bytes were NOT staged this run (transport blockers documented at the top of that file). The drop.md identifies four distinct project clusters worth surfacing on the site, three of which are filed as the new P1 backlog items below. The drop.md also lists positions 13-24 of the grid as a watchlist so the next research pass can promote them into ig-NNN entries.

### [CONTENT-NEW-2026-04-27-stpete-mlk-mural] New mural at MLK + 26th Ave N, St Pete (Hoka-sponsored)
- Track: content
- Status: todo
- Why: a fully-named, fully-credited new mural at a well-defined St Pete corner with a national brand sponsor (Hoka) and a named curator (Janna Angell). Posted 2026-04-15 on `instagram.com/p/DXJ5714AILj`. This is exactly the kind of complete story (who painted, where, who paid, who curated) the site's portfolio is currently thin on, so it warrants a dedicated project page rather than just another card in the grid.
- Photos: not staged this run; permalink in `assets/images/social-drops/2026-04-27/drop.md` under entry ig-012. Image dimensions verified at 1440x1864 on the post page. Marianne can right-click-save the carousel images from the IG post directly, or this item stays parked until the manual research session in RESEARCH-001 happens.
- Suggested action: once photos land, build `/project-stpete-mlk.html` following the same template as `project-bucs.html` / `project-rays.html`. Caption to lift from the IG post: location (corner of MLK Jr St + 26th Ave N), artists (@vitalebros), sponsor (@hoka), curator (@jannaangell). Add a card to `projects.html` with `data-category="commercial"` and re-add the "Live & Events" / "Community & Civic" filter chips per BUILD-008's follow-up note if this brings the grid count to a reasonable density.

### [CONTENT-NEW-2026-04-27-first-watch-chain] First Watch restaurant chain murals (Wisconsin, Texas, plus a third)
- Track: content
- Status: todo
- Why: at least three distinct First Watch locations have surfaced on the IG feed (Wisconsin, Leander TX, plus a "24 hour mural" reel that may be a third location). This is a recurring national-chain commercial account, which the site doesn't currently surface anywhere. A "trusted-by-national-chains" angle is one of the strongest possible commercial-side credibility plays. Captions credit `@firstwatchmurals` and `@middle_vitale_murals` as collaborators, which suggests the chain work is co-branded with another Vitale-family entity.
- Photos: not staged this run; permalinks in `drop.md` under entries ig-003 (Wisconsin) and the watchlist entries DXB7328uJwG (24-hour reel) and DWn93GnCd-D / DWl1K3clcWV (Leander Texas). All are reels except DWl1K3clcWV which is a still photo.
- Suggested action: depending on photo availability, this is either (a) a new commercial-clients sub-section on `services/commercial.html` listing First Watch as a named recurring client, or (b) a dedicated project page covering the chain rollout. Decision blocked on Marianne confirming whether `@firstwatchmurals` is a sister brand (distinct site / distinct credit) or just an account run by the same team. If the latter, the work is straightforwardly a Vitale Bros. commercial story.

### [CONTENT-NEW-2026-04-27-fashion-for-education] 3rd Annual Fashion for Education event coverage
- Track: content
- Status: todo
- Why: multi-post event coverage at Overspray Art Space partnering All The World's Kids Inc. on their 3rd annual fundraiser. Strong community-civic story with a clear narrative arc (pre-event teasers, setup, recap), a named charity beneficiary (alltheworldskidsinc.org), and a venue tie-in (Overspray Art Space). Fits the existing Community & Civic service page (BUILD-005) and could either become a Signature Civic Work card on `services/community-civic.html` or an ArtBeat-style article on the partnership.
- Photos: not staged this run; permalinks in `drop.md` under entries ig-001 (event recap reel), ig-002 (tagged event photo), ig-004 (event setup high-res photo, 3280x4096 grid dim), ig-005 (pre-event teaser reel), plus watchlist entries DW3tTcRD8Ec and DWyhIdHAcze (earlier teasers).
- Suggested action: when photos land, simplest first move is a new Signature Civic Work card on `services/community-civic.html` next to the existing SHINE / Power to the Patients / Vandalism Restoration cards, linking to either an external alltheworldskidsinc.org partner page or to a new in-site short post. Defer the dedicated ArtBeat article until photos are in hand and Marianne signals which angle she wants featured.

### [REPLACE-AI-2026-04-27-hero-and-services] Swap AI placeholders for real photos
- Track: content
- Status: done (partial; 4 of 6 AI placeholders swapped this session, 2 explicitly waiting on John for source photos)
- Why: the original automation plan was for the daily research run to grab real photos off Instagram and the daily build run to swap them in. Image-byte transport from IG is hard-blocked in the scheduled environment (CORS + base64 filter; full detail in 2026-04-27 work-log entry). Marianne pointed out the project folders under `assets/images/` and the parent `vitale-website/` already contain plenty of real photos. This run sources from those folders directly.
- What changed (2026-04-27, first pass): replaced bytes in `assets/images/hero-bg.png` with `assets/images/rays/inprogress-tangredi.jpg` (Tampa Bay Rays mural in progress, wide horizontal, "TAMPA BAY" lettering, skater + woman with skateboards). Replaced bytes in `assets/images/services-bg.png` with `assets/images/rays/john-inprogress-briantangredi.jpg` (John mid-stroke close-up). Filenames kept so all `og:image` and `twitter:image` references on every page propagate without HTML edits.
- What changed (2026-04-27, second pass): replaced bytes in `assets/images/portfolio-3.png` with `vitale-website/old-website-pics/10/marilyn1.jpg` (wide shot of the actual Playhouse Theater Marilyn Monroe mural in St Pete, direct subject match for the Fox 13 article). Replaced bytes in `assets/images/portfolio-2.png` with `city-art-walls/Trails Crossing Images/RickyWatts-MarkRapien-SHINE-2021.jpg`, resized in place from 6000x4000 (8.8 MB) to 1400x933 JPEG quality 85 (152 KB) for thumbnail-appropriate page weight. Subject caveat on portfolio-2: it's artist Ricky Watts at SHINE 2021, not a Vitale Bros mural; defensible because the article is about the festival the Vitale Bros participated in. AI-REPLACEMENT-CANDIDATES.md updated with `**Replaced:**` lines for all four swapped placeholders.
- Open follow-ups: 2 of 6 AI placeholders still in place. `portfolio-1.png` (PoE Garage / Stay Curious by Tes One + Bask, Vitale paint contribution) and `portfolio-4.png` (St Pete vandalism restoration). Surveyed all parent folders (`Overspray Art Space/vitale-website/`, project subfolders, `old-website-pics/`, `iCloud Photos from JOHN VITALE/`, `city-art-walls/`); no subject matches found for either. Marianne to ask John whether he has phone-camera shots from the PoE Garage job and the actual restoration jobs. Plus `hero-bg.png` doing double-duty as the Blue Goose ArtBeat thumbnail (`artbeat.html` line 128) is now showing the Tampa Bay Rays mural with alt text "Article: Blue Goose Debut" — same article-thumb-mismatch problem; needs a Blue Goose-specific photo from John or a layout change to make that card text-only.

---

## P2 — Enhancement

### [BUILD-006] FAQ section on homepage
- Track: build
- Status: done
- Why: cost, timeline, durability, permits, brand-matching, and travel are the six questions every potential client asks. Answering them upfront qualifies leads.
- What changed (2026-04-21): ported the split-column FAQ accordion from `prototype.html` into `index.html` as a new `<section class="faq" id="faq">` placed between the Instagram feed and the big CTA. Left side (360px on desktop) carries the section label, title, a short intro, and a red "Still Got Questions? Ask Us" button that links to `/contact.html`. Right side has 6 accordion items (cost, timeline, durability, permits, brand/concept, travel). First item is open by default; each item toggles via a real `<button>` with `aria-expanded` for keyboard and screen-reader support. Plus-to-x rotation on the toggle icon matches the prototype. Added `.faq`, `.faq__wrap`, `.faq__side`, `.faq__intro`, `.faq__list`, `.faq__item`, `.faq__q`, `.faq__a` styles to `styles/index.css` (dark `--color-bg-alt` surface, hairline `--color-border` dividers). Responsive: at <=1024px the grid collapses to 1 column; at <=768px padding shrinks to `sp-20`. Added `initFaqAccordion()` to `js/main.js` and wired it into the DOMContentLoaded bootstrap. CSS brace count still balanced (362/362).

### [BUILD-007] Process section (4 steps)
- Track: build
- Status: done
- Why: demystifies the mural commission process.
- What changed (2026-04-21): ported the 4-step process block from `prototype.html` into `index.html` as a new `<section class="process" id="process">` placed between the Services grid and Featured Work. Cream surface (`--color-bg-cream`) bridges the dark Services section above and the dark Featured Work section below, matching the prototype's alternating rhythm. Header uses the standard `.section-label` + `.section-title` pair with "How We Work" and "From napkin sketch to finished wall." copy. Four steps (Brief & Visit, Sketch & Quote, Paint, Unveil & Protect) sit in a 4-column grid on desktop, 2-column at <=1024px, 1-column at <=768px. Each `.step` card has a big red numeral, an uppercase title, and a short descriptive paragraph; hover lifts the card with a soft shadow. Styles added as a new block in `styles/index.css` just before SCROLL REVEAL. All four steps inherit the site's existing `.reveal` scroll-in animation with staggered delays. CSS brace count balanced (362/362).

### [BUILD-008] Dense portfolio grid with working filter chips
- Track: build
- Status: partial (filter chips cleaned up; grid expansion still blocked on RESEARCH-001)
- Why: current `/projects.html` has 5 items and filter chips for categories that don't have projects.
- Action: expand portfolio to 12 to 20 items (will need RESEARCH-001), build 12-column grid with real working filters.
- What changed (2026-04-24): cleaned up the filter chip row on `projects.html` so every visible chip resolves to at least one project. Removed the "Live Painting" (data-filter="live") and "Signs & Canvas" (data-filter="signs") chips, which each filtered to zero items on the current 5-item portfolio. Remaining chips are All Projects (5), Commercial (4: Rays, Bucs, Cowboy, Retro & Pin-Up), and Residential (1: Backyard Escapes). No CSS or JS change needed: `initProjectsFilter()` in `js/main.js` iterates over whatever `.filter-btn` elements exist in the DOM, so removing buttons is a pure HTML edit. Data-category values on the 5 cards were intentionally not touched; re-categorizing them into more granular buckets (Sports, Live & Events, Community) is a decision to revisit once RESEARCH-001 unblocks the portfolio expansion and there are enough items to populate those buckets meaningfully. The prototype's 12-column span grid (`.x-hero`, `.x-tall`, `.x-wide`, `.x-med`, `.x-sm`) also stays unported for the same reason: with only 5 items, a span-based layout looks sparse; it makes sense to wait until there are 12 to 20 items before porting it.
- Follow-up for Marianne: once RESEARCH-001 is unblocked (the manual Instagram research session) and new project cards land, the next run can (1) restore the Live & Events and Community & Civic filter chips, aligning the taxonomy with the service pages taxonomy from BUILD-002, and (2) port the prototype's 12-column span grid so the portfolio feels dense rather than gridded-even.

### [BUILD-009] "Trusted by" client logos strip
- Track: build + research
- Status: partially-done-in-prototype
- Why: named commercial clients build trust faster than testimonials alone.
- Blocked on: Marianne confirming which clients we can show logos for (Pesky Pelican, The Playhouse, Bayfront Health, etc.). Usage rights matter.

### [CONTENT-004] Proper bios for Johnny, Sionna, Jason
- Track: content
- Status: partial (Johnny landed; Sionna and Jason still need source material from Marianne)
- Why: About page is thin. Live site has partial info. Bios should cover: years in the craft, specialty, signature project.
- What changed (2026-04-23): added a new "[CONTENT-004] Team bios for the About page" section to `draft-copy.md`. Three Johnny Vitale bio options (short 55 words, medium 95 words, quote-led 75 words) drafted entirely from source material that already lives on the new site: the About page story, the Fox 13 / St. Pete Catalyst / Creative Loafing quotes inside the ArtBeat articles, and the existing project names. Sionna and Jason sections are intentionally left as empty placeholders with an explicit list of what's needed (years in the craft, specialty, signature project, last name if shown, optional quote), because there is no source material on the new site for either of them and the scheduled-task constraint is to not invent content. Also flagged one open question: the Blue Goose ArtBeat article names "Johnny, Paul, and Joey Vitale" as the three exhibiting brothers, but the team grid only shows Johnny, Sionna, and Jason. Marianne should confirm whether Paul and Joey are still part of the crew / brand.
- What changed (2026-04-27): Marianne picked Option B (Medium, ~95 words) for Johnny. Wired into `about.html`: a new `<p class="team-card__bio">` was added inside Johnny's team card after his role line, carrying the full Option B copy verbatim from `draft-copy.md`. The Sionna and Jason cards were left as-is (avatar, name, role) since their source material hasn't landed yet. Added a `.team-card__bio` rule to `styles/index.css` (left-aligned text, top border to separate from name/role, 1.7 line height, muted text color) and added `align-items: start;` to `.team__grid` so cards top-align. Effect: Johnny's card is now visibly taller than Sionna's and Jason's. That asymmetry is honest about the current state (Johnny is the only one with a bio) and self-corrects when Sionna and Jason copy lands.
- Follow-up for Marianne: (1) Send the 4 bullet-list items for Sionna and Jason (years in the craft, specialty, signature project, last name if shown, optional quote) and the next run can draft their bios in the same three-options structure. (2) Answer the Paul / Joey question so we know whether to add them to the team grid or leave them as past-tense references in the Blue Goose ArtBeat article only.

### [RESEARCH-002] Cross-reference projects on Facebook for stories we don't have
- Track: research
- Status: blocked
- Why: older work (pre-2018 ish) may be on FB but not IG.
- Blocked on: manual Chrome research session.

---

## P3 — Polish

### [BUILD-010] Audit all links for 404s
- Track: build
- Status: done
- Why: baseline hygiene, and the prototype exercise surfaced several routes that don't exist yet (service sub-pages, artbeat articles).
- What changed (2026-04-23): wrote a Python audit that walks all 21 content pages, expands the `<!--#include nav-->` and `<!--#include footer-->` partials to also cover links inside the shared nav and footer, harvests every href / src / action / srcset URL, and verifies each internal link resolves on disk. Validates same-page fragments against the page's own id set and cross-page fragments against the target file's id set. Covers 710 internal links; all resolved. 167 external links are reported as skipped (not validated, since the scheduled-task environment cannot make arbitrary outbound requests). Also ran a companion scan of every `url(...)` reference in `styles/index.css` plus inline `style=` url refs across HTML: zero broken. No site files were changed by this item, since nothing was broken. The audit script itself lives at `/sessions/wonderful-gifted-shannon/link-audit.py` and can be re-run from any future session by copying it into the site folder if desired; it intentionally was NOT committed into the site tree.

### [BUILD-011] Build a 404 page
- Track: build + design
- Status: done
- What changed (2026-04-22): created `/404.html` using the same `<!--#include nav-->` and `<!--#include footer-->` partial system as the rest of the site. The page has two sections: a themed hero that reuses `.page-header` with a `--404` modifier (a faded `hero-bg.png` sits at 18% opacity behind the copy, the usual `.page-header__bg` radial gradient stays on top), and a 4-card "Where to next" grid pointing users back to About, Projects, ArtBeat, and Contact. Copy leans into the studio voice ("This wall is still blank.") without inventing anything. Meta includes `<meta name="robots" content="noindex" />` so the 404 page can't accidentally end up in search results. Added a new `404 PAGE` CSS block to `styles/index.css` just before `SCROLL REVEAL` (roughly 90 lines) plus two responsive rules (2-column at <=1024px, 1-column and a shorter hero at <=768px). Also reused existing `.btn`, `.btn--primary`, `.btn--ghost`, `.reveal`, `.section-label`, and `.section-title` classes so the page matches the rest of the site visually without new components.
- Follow-up for Marianne: on deploy, the host needs to be configured to serve `/404.html` on 404 responses. Netlify, Vercel, and most static hosts pick this up automatically by convention. If the host is Apache-style, add `ErrorDocument 404 /404.html` to `.htaccess`. If Nginx, the relevant line is `error_page 404 /404.html;`.

### [BUILD-012] Favicon, Open Graph meta, Twitter card
- Track: build
- Status: done (favicon is minimal; see follow-up)
- Why: social link previews currently fall back to whatever the host default is.
- What changed (2026-04-22): added a uniform head-meta block to every content page (21 pages in total: the 16 root pages, the 4 service pages, and the new 404). The block includes: favicon (`/assets/images/logo-red.png` linked as both `rel="icon"` and `rel="apple-touch-icon"`), `og:site_name`, `og:type` (`website` everywhere except the 6 ArtBeat article pages which use `article`), `og:url` (absolute canonical per page), `og:title` and `og:description` (mirrored from each page's own `<title>` and `<meta name="description">`), `og:image` using the site-wide `/assets/images/hero-bg.png`, and the matching Twitter card set (`twitter:card=summary_large_image`, title, description, image). Stripped any pre-existing partial OG tags first (index.html and the 4 service pages already had the 3 basic ones) before re-emitting the full block, so there are no duplicates. Verified: each of the 21 pages has exactly one copy of each new tag, the partial includes (nav/footer) are still intact on every page, and the CSS link anchor is still in place. OG image uses absolute URLs so link previews render consistently off any domain.
- Follow-up for Marianne: (1) The favicon is a single PNG of the red logo linked as both `rel="icon"` and `rel="apple-touch-icon"`. Browsers will scale it, but for proper crispness across platforms the next step is to generate the standard multi-size set (16x16, 32x32, 180x180 for iOS, 192x192 for Android, plus a `.ico`) using realfavicongenerator.net or similar, and drop them into `/assets/images/favicons/`. I left the current markup minimal so swapping in that set is a single search-and-replace. (2) The OG image is the existing `hero-bg.png`. If you want a purpose-built share card (1200x630, with a logo lockup and a tagline), send the image and I'll swap. (3) A handful of existing page titles and descriptions contain em dashes (for example `index.html` and `about.html`). They were faithfully mirrored into `og:title` / `twitter:title` rather than rewritten, since the OG title is supposed to match the real page title. If you want a global em-dash cleanup across page titles, flag it as a separate item.

### [BUILD-013] sitemap.xml and robots.txt
- Track: build
- Status: done
- What changed (2026-04-22): created `/sitemap.xml` and `/robots.txt` at the site root. Sitemap lists all 20 public pages (home, about, projects, artbeat, contact, the 4 service pages, the 5 project detail pages, and the 6 ArtBeat articles) with per-section priorities (home 1.0, projects 0.9, about/artbeat/services 0.8, project detail and contact 0.7, ArtBeat articles 0.6) and change frequencies calibrated to how often each section actually changes (weekly for home/projects/artbeat, monthly for services/about/contact, yearly for detail pages). 404.html is intentionally excluded from the sitemap because it carries `noindex`. Robots.txt permits everything, disallows the dev scaffolding paths (`/_partials/`, `/_prototypes/`, `/.backup-preinclude/`, `/node_modules/`) in case they ever end up deployed, and points at the sitemap URL. Validated the sitemap parses as XML (20 url entries).

### [BUILD-014] Accessibility pass
- Track: build
- Status: done (static pass; see follow-up for contrast / Lighthouse)
- Action: axe/Lighthouse audit, fix any AA contrast issues, confirm all images have meaningful alt text, confirm keyboard nav reaches all interactive elements.
- What changed (2026-04-23): wrote a static accessibility audit that walks all 21 content pages with partials expanded and checks for: images without an alt attribute (missing, not empty), anchors and buttons with no accessible name (text, aria-label, aria-labelledby, title, or a labelled child), inputs / textareas / selects without a label / aria-label / placeholder, heading hierarchy (one h1 per page, no level-skips when descending), and a lang attribute on `<html>`. First pass surfaced 22 issues, all heading hierarchy skips. Fixed as follows: `_partials/footer.html` column titles went from `<h4 class="footer__col-title">` to `<h3 class="footer__col-title">` (all 4 columns), which fixed the `h2 -> h4` skip on every page that inherits the shared footer. Site pages: `about.html` "EST. 1992" was bumped from h3 to h2, with `.about-story__text h3` in `styles/index.css` widened to `.about-story__text h2, .about-story__text h3` so both tags keep the same visual treatment. `projects.html`: the 5 `.work-card__title` headings (Rays, Bucs, Backyard Escapes, Ride 'Em Cowboy, Retro & Pin-Up) went from h3 to h2. `contact.html`: the form's "Start Your Project" heading went from h3 to h2. `artbeat.html`: the 6 `.blog-card__title` headings went from h3 to h2. The 6 ArtBeat article detail pages had their "Want the full story?" heading bumped from h4 to h2, and the inline `.article-meta-box h4` rule in `artbeat-catalyst-shine.html` was updated to `.article-meta-box h2` so the sizing is preserved. Second run: 0 issues across all 21 pages. Alt text, form labels, and the `<html lang>` attribute were already clean on every page, no fixes needed there. CSS brace count still balanced (380 / 380).
- What changed (2026-04-25): ran a static WCAG 2.1 contrast audit over the design tokens in `styles/index.css`, covering the 20 most-used text-on-surface pairs plus 5 common translucent overlays. Body text on every dark surface clears AAA (16.76:1 down to 13.48:1), ink on cream clears AAA (16.67:1, 17.68:1), `--color-text-muted` (`#9a8f80`) on dark clears AA (5.89:1, 5.47:1), white on `--color-primary` button label clears AA (5.04:1), `--color-primary-dark` on cream clears AA (6.49:1) and on white clears AAA (7.60:1). Three pairs were below the AA-normal bar: (a) `--color-text-subtle` (`#5a5249`) on `--color-bg` came in at 2.44:1 (FAIL), (b) `--color-primary` (`#d91e25`) on dark at 3.70:1 (AA-Large only), (c) `--color-primary` (`#d91e25`) on cream at 4.31:1 (AA-Large only). Fix: bumped `--color-text-subtle` from `#5a5249` to `#988b7e`, which lands at 5.23:1 on `--color-bg-card` (the blog-card meta surface) and 5.78:1 on `--color-bg` (the footer surface), clearing AA on every dark surface where the token is actually used (footer copyright, footer address, blog-card meta line, contact-form placeholders). Token still reads visibly subtler than `--color-text-muted` (5.89:1 on `--color-bg`), preserving the three-step text hierarchy. The two `--color-primary` low-contrast pairs were left as-is: red on dark and red on cream are only used on display-size headings, button surfaces, hover accents, and section labels, all of which qualify as AA-Large (which the 3.70:1 and 4.31:1 ratios both clear). They should not be used for body-size text. Audit script lives at `/sessions/great-tender-clarke/mnt/outputs/contrast.py`.
- Follow-up for Marianne: the static HTML / CSS pass is now done. Two runtime checks still want a proper in-browser pass before shipping. (1) Keyboard nav: tab through every page in a browser and confirm the focus ring is visible, the mobile nav can be opened and closed without a mouse, and the FAQ accordion on `index.html` is keyboard-toggleable. (2) Lighthouse / axe: run an automated a11y audit in DevTools on the homepage and one article page to catch anything the static pass can't see (ARIA attribute validity, duplicate landmark labels, focus-trap issues, etc.). Neither is a blocker.

---

## Blocked-on-Marianne summary

For quick reference, the items waiting on you right now:

- BUILD-004 (video source — find the Facebook reel)
- CONTENT-003 (crew headshots)
- CONTENT-004 (Sionna and Jason bio source material)
- RESEARCH-001 (manual IG session)
- BUILD-009 (client logo usage rights)
- RESEARCH-002 (manual FB session)
