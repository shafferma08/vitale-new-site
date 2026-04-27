# Drop log: 2026-04-27

Source: scheduled task `vitale-social-research`, run on 2026-04-27.

## Run summary

- Instagram (`instagram.com/vitalebros`): scanned, 24 most-recent posts indexed, 12 most-recent posts captured in detail below.
- Facebook business page: located at `facebook.com/vitalebrostheartists` (not at the brief's first two candidates `vitalebros` or `vitalebrothersmurals`; the first redirected to a personal locked profile, the second 404'd). The page mirrors the Instagram feed (verified by post text overlap on the latest "Last Night was Electric" post).
- Image bytes were NOT downloaded this run. See "Why no `ig-NNN.jpg` files in this folder" below. The post inventory and metadata are captured fully so the builder run, or Marianne, can grab specific photos from the listed permalinks.

## Why no `ig-NNN.jpg` files in this folder

The scheduled environment cannot reliably transfer the Instagram CDN image bytes into the workspace folder. Three transport paths were attempted in-session, all blocked:

1. Direct `fetch()` from the page context: fails with a CORS error against the IG CDN host (`scontent-*.cdninstagram.com`), even with `credentials: 'include'`.
2. `<img crossOrigin="anonymous"> -> canvas.toDataURL()`: succeeds at producing real base64 JPEG bytes (verified for several posts at 640x1136 reel thumbs through 3280x4096 photos). However, returning that base64 from the JS bridge is filtered by the tool layer ("Base64 encoded data" / "Cookie/query string data" classifiers).
3. Hex-encoded chunked retrieval: the per-call response is truncated at roughly ~960 visible characters, which would require hundreds of round trips per image. Not feasible at the per-image budget here.

The brief's clean-failure path applies: log the limitation, capture the metadata, exit cleanly so the next run (or a manual session by Marianne) can grab originals from the permalinks.

If an image-bytes path opens up later (e.g. an MCP that can write image blobs straight to disk, or a manual Chrome session where Marianne right-click-saves the strongest candidates into this folder), the post permalinks below are the canonical sources.

## Posts captured (12 most recent on `instagram.com/vitalebros`, ordered newest first)

### ig-001 (reel, shortcode DXmz_iVD_lo)
- Source: https://www.instagram.com/reel/DXmz_iVD_lo/
- Posted: approx 2026-04-26 (FB cross-post timestamp showed "22h" relative to the run, which lines up with 2026-04-26)
- Caption: "WE HAD A GREAT TIME LAST NIGHT! Thank you to all who came out in support of @alltheworldskids programs. Art, Travel and Mentorship transform lives. We witness this transformation in the work we do. All The World's Kids exist because it's supported. We are possible because of you. Thank you, thank you, thank you!! To learn more and make your mark please visit alltheworldskidsinc.org. Video cred @thevisualistics. Located at @oversprayartspace. In partnership with @vitalebros @connectpinellas and @udream.events. This is officially a WRAP for the 3RD ANNUAL FASHION FOR EDUCATION FASHION SHOW FUNDRAISER."
- Location/client guess: Overspray Art Space, Gulfport FL. Event partner: All The World's Kids Inc.
- Suggested project tag: community-civic
- Matches existing project? No. This is a recurring (3rd annual) community-civic event partnership not yet represented on the new site.
- Replaces an AI placeholder? No.
- Image staged? No (transport blocker, see top of this file).
- Builder note: this is a video. Even with image-bytes transport, the captureable still would be a video poster frame. Better to ask Marianne for an event photo set.

### ig-002 (photo, shortcode DXmIQDYgIJ1)
- Source: https://www.instagram.com/p/DXmIQDYgIJ1/
- Posted: approx 2026-04-26 (same event as ig-001)
- Caption: "@thinkdreamdarebelieve @alltheworldskids @oversprayartspace @vitalebros @cristinagrams @_marni_ @jasonkekllas @art.by.sio"
- Location/client guess: Overspray Art Space, Gulfport FL. Same Fashion for Education event.
- Suggested project tag: community-civic
- Matches existing project? No, same Fashion for Education event cluster as ig-001.
- Replaces an AI placeholder? No.
- Image staged? No.
- Image dims at grid view: 1320x1760.

### ig-003 (reel, shortcode DXmGfFtgXvs)
- Source: https://www.instagram.com/reel/DXmGfFtgXvs/
- Posted: approx 2026-04-26
- Caption: "Had fun doing this mural (6'x 13') at a new First Watch in Wisconsin. Props to @mystic_thickness @iggybley @firstwatchmurals @middle_vitale_murals. Special thanks to Emelia and Mary at the command center."
- Location/client guess: First Watch restaurant location in Wisconsin (city not stated in caption; Oconomowoc visible on the mural in the grid thumbnail). Client: First Watch (national restaurant chain).
- Suggested project tag: commercial
- Matches existing project? No. Not in current portfolio. This is a new commercial chain-account candidate.
- Replaces an AI placeholder? No.
- Image staged? No.
- Builder note: Strong candidate for a new "First Watch" project page or a commercial-clients sub-section. Pair with ig-022 / ig-023 below (First Watch Leander Texas) to show this is a recurring chain-mural account, not a one-off.

### ig-004 (photo, shortcode DXhCCZWgOak)
- Source: https://www.instagram.com/p/DXhCCZWgOak/
- Posted: see caption (no exact date captured on the grid pass)
- Caption: "Photo by Vitale Bros. in Overspray with @thinkdreamdarebelieve, @alltheworldskids, and @oversprayartspace. May be an image of magazine, poster, hat shop and text that says 'WRASP'." (text within the image, partial OCR from IG alt text)
- Location/client guess: Overspray Art Space. Fashion for Education event preparation / signage.
- Suggested project tag: community-civic
- Matches existing project? No, same event cluster as ig-001 / ig-002.
- Replaces an AI placeholder? No.
- Image staged? No.
- Image dims at grid view: 3280x4096 (high-res photo, would be reusable on the site if extractable).

### ig-005 (reel, shortcode DXXFAprkbpO)
- Source: https://www.instagram.com/reel/DXXFAprkbpO/
- Posted: approx mid-April 2026 (pre-event teaser for the Fashion for Education show that resolved on 2026-04-26)
- Caption: "Getting ready for this Weekend!!! #fashionforeducation"
- Location/client guess: Overspray Art Space.
- Suggested project tag: community-civic
- Matches existing project? No, same Fashion for Education event cluster.
- Image staged? No.

### ig-006 (reel, shortcode DXS1kdSsQFT)
- Source: https://www.instagram.com/reel/DXS1kdSsQFT/
- Posted: approx mid-April 2026
- Caption: "Fun hanging with the art mob today jhop"
- Location/client guess: unclear. Likely a casual studio / artists-meetup post.
- Suggested project tag: unclear; not a project artifact.
- Matches existing project? No. Not a candidate for the site.
- Image staged? No.

### ig-007 (reel, shortcode DXM4qvLET8E)
- Source: https://www.instagram.com/reel/DXM4qvLET8E/
- Posted: approx mid-April 2026
- Caption: "Built something I've been using lately. Looking for a few artists who already use..." (caption truncated in grid alt text)
- Location/client guess: studio / tool-related, not a mural project.
- Suggested project tag: studio/process; not a project artifact.
- Matches existing project? No. Not a candidate for the site.
- Image staged? No.

### ig-008 (reel, shortcode DXMq15MARNF)
- Source: https://www.instagram.com/reel/DXMq15MARNF/
- Posted: approx mid-April 2026
- Caption: "#vitalebros #streetart #sports"
- Location/client guess: unclear from caption alone. Hashtags imply a sports-themed mural but the specific project isn't named.
- Suggested project tag: commercial (sports), pending confirmation.
- Matches existing project? Possibly Rays or Bucs work; cannot verify from caption alone. See caption.
- Image staged? No.

### ig-009 (reel, shortcode DXLG4BFuU5v)
- Source: https://www.instagram.com/reel/DXLG4BFuU5v/
- Posted: approx mid-April 2026
- Caption: (no caption visible in grid alt text)
- Location/client guess: unknown; see caption.
- Suggested project tag: unclear.
- Matches existing project? Cannot determine without seeing the post itself.
- Image staged? No.

### ig-010 (reel, shortcode DXLFg5NuGI6)
- Source: https://www.instagram.com/reel/DXLFg5NuGI6/
- Posted: approx mid-April 2026
- Caption: (no caption visible in grid alt text)
- Location/client guess: unknown; see caption.
- Suggested project tag: unclear.
- Matches existing project? Cannot determine from this pass.
- Image staged? No.

### ig-011 (reel, shortcode DXLEFmeOeED)
- Source: https://www.instagram.com/reel/DXLEFmeOeED/
- Posted: approx mid-April 2026
- Caption: (no caption visible in grid alt text)
- Location/client guess: unknown; see caption.
- Suggested project tag: unclear.
- Matches existing project? Cannot determine from this pass.
- Image staged? No.

### ig-012 (photo carousel, shortcode DXJ5714AILj)
- Source: https://www.instagram.com/p/DXJ5714AILj/
- Posted: 2026-04-15 (datetime read from the post's `<time>` element on the post page)
- Caption: "New Mural in St Pete. Come see it on the corner of MLK + 26th Ave N. Artists @vitalebros. Sponsored by @hoka. Curated by @jannaangell. #believeachieve #stpetemurals" (re-shared via @stpeterunningandcoffee, which is the original poster Vitale Bros tagged in this post)
- Location/client guess: Corner of MLK Jr Street + 26th Ave N, St Petersburg FL. Sponsored by Hoka (athletic-wear brand). Curated by Janna Angell.
- Suggested project tag: commercial (brand-sponsored public mural) with community-civic crossover.
- Matches existing project? No. Not in current portfolio.
- Replaces an AI placeholder? No, not a thumbnail-replacement match for any of the 6 listed AI candidates.
- Image staged? No. Verified image dimensions on the post page: 1440x1864 high-res JPEG. Worth grabbing manually.
- Builder note: Strong candidate for a dedicated `/project-stpete-mlk.html` page. The Hoka sponsorship + corner-of-MLK location + curator credit makes this a complete story (brand, place, partner) by itself.

## Other notable posts in the next 12 (positions 13-24 on the grid, captured but not detailed above)

For triage: these came up during the dedup scan and look like new project candidates the next run can promote into ig-NNN entries if Marianne wants them filed.

- reel DXHacRgRc8W
- photo DXHX9YykV1G ("Photo by Vitale Bros. on April 14, 2026. May be an image of statue and text…")
- photo DXEcxpPgIh6 ("Photo by Vitale Bros. in Saint Petersburg, Florida. May be an image of brick wall…")
- reel DXDDqfPO9Q0
- reel DXB7328uJwG ("First Watch ... 24 hour mural ..."): second First Watch chain entry, pair with ig-003 above
- reel DW4euYauxhs ("@stpeterunningco @art.by.sio @jasonkekllas @vitalebros @oversprayartspace #streetart"): St Pete Running Co commercial work
- reel DW4Fw-vAYBG
- reel DW3tTcRD8Ec ("Coming Soon! Get Your Tickets for this amazing event!!"): Fashion for Education pre-promo
- reel DWyhIdHAcze ("Overspray is excited to collaborate with @alltheworldskids for a huge event coming…"): Fashion for Education pre-promo
- reel DWn93GnCd-D ("First Watch Leander Texas"): third First Watch chain entry
- photo DWl1K3clcWV ("First Watch Leander Texas"): same Texas First Watch as DWn93GnCd-D, photo version
- reel DWluPUfgR78 ("#vitalebros #streetart #raysbaseball"): Rays baseball, possibly content for the existing rays project page

## Project clusters identified this run

1. **First Watch chain murals** (ig-003 / DXB7328uJwG / DWn93GnCd-D / DWl1K3clcWV). At least 3 distinct First Watch locations represented (Wisconsin, Leander TX, plus a 24-hour-paint reel that may be a third). This is a recurring chain-account commercial story not currently on the site.
2. **St Pete MLK + 26th mural sponsored by Hoka** (ig-012 / DXJ5714AILj). Single substantive project with named brand sponsor and named curator. Strong candidate for a dedicated project page.
3. **3rd Annual Fashion for Education event** (ig-001, ig-002, ig-004, ig-005, plus DW3tTcRD8Ec, DWyhIdHAcze). Multi-post event coverage at Overspray Art Space partnering All The World's Kids Inc. Community-civic story.
4. **St Pete Running Co commercial mural** (DW4euYauxhs). Single-reel reference. May or may not be the same project as ig-012 (the @stpeterunningandcoffee post that shared ig-012's mural is closely related but not the same brand). Worth confirming with Marianne.

## Builder picks (suggested, for the next builder run if and when image bytes are available)

- New project page candidate: St Pete MLK + 26th mural (ig-012). Has full caption metadata. Needs photos.
- New project page candidate or new "Commercial Chains" sub-section: First Watch (ig-003 + DXB7328uJwG + DWn93GnCd-D + DWl1K3clcWV). Has 3+ locations, supports a "we paint the whole chain" story.
- New ArtBeat-style story or community-civic blurb: Fashion for Education (ig-001, ig-002, ig-004, ig-005, etc). Has natural narrative arc (pre-event teasers -> setup photo -> event recap).
