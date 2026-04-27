# AI-Generated Images To Replace

Last updated: 2026-04-27 (filenames confirmed by Marianne)

These are the AI-generated placeholder images currently on the site. The `vitale-social-research` task watches for real photos that could replace them and files `[REPLACE-AI-*]` items in `SITE-BACKLOG.md` when matches turn up. The `vitale-site-daily-rebuild` task does the actual swap.

## Replacement targets

### `assets/images/hero-bg.png`
- **Used as:** sitewide hero background mural, About page "crew at work" hero image, OG/Twitter share card on every page (so the swap propagates to every social link preview).
- **Looking for:** a wide, high-resolution hero shot. Either the crew actively painting on a wall, or a finished signature mural shot at angle. Should still read well at 1920px wide and survive the dark scrim and panel-behind-text treatment from DESIGN-003.
- **Replaced:** 2026-04-27 with bytes from `assets/images/rays/inprogress-tangredi.jpg` (Tampa Bay Rays mural in progress, wide horizontal composition with skater + woman on skateboards; "TAMPA BAY" lettering reads across the wall). The .png filename was kept so all `og:image` and `twitter:image` references on every page propagate automatically without HTML edits. File now contains JPEG bytes; browsers handle this transparently.

### `assets/images/services-bg.png`
- **Used as:** "Vitale Bros. artists at work" image in the index.html About preview section. Also the ArtBeat thumbnail for the Power to the Patients article.
- **Looking for:** an action shot of John, Sionna, or Jason actively painting. Lift and ladders ok, brushes mid-stroke ideal. Square or 4:3 crops well here.
- **Replaced:** 2026-04-27 with bytes from `assets/images/rays/john-inprogress-briantangredi.jpg` (close-up of John mid-stroke with spray can painting a face, blue cap and tattoos visible). Filename kept for the same reason as hero-bg.png. Works for both the homepage About-preview block and as an ArtBeat thumbnail for the Power to the Patients article.

### `assets/images/portfolio-1.png`
- **Used as:** ArtBeat card thumbnail for "Stay Curious at PoE Garage" (Eyes On The Streets / Tampa article).
- **Looking for:** a real photo of the PoE Garage mural in Tampa. Wide or square crop both work.
- **Status:** AI placeholder still in place as of 2026-04-27. Surveyed all parent folders (`Overspray Art Space/vitale-website/`, project subfolders, `old-website-pics/`, `iCloud Photos from JOHN VITALE/`, `city-art-walls/`); no PoE Garage / Stay Curious / Tes One+Bask collaboration photos found. Tes One worked with the Vitale Bros on the SPCHS Mary mural (`vitale-website/SPCHS/spchs-inprogress-tesone.jpg`) but that's a different project. Marianne to ask John whether he has phone-camera shots from the PoE Garage job.

### `assets/images/portfolio-2.png`
- **Used as:** ArtBeat card thumbnail for "SHINE Mural Festival" (St Pete Catalyst article).
- **Looking for:** a photo from any SHINE Festival year showing John or the crew painting their festival wall, or the finished SHINE mural.
- **Replaced:** 2026-04-27 with bytes from `city-art-walls/Trails Crossing Images/RickyWatts-MarkRapien-SHINE-2021.jpg`, resized in place from 6000x4000 (8.8 MB) to 1400x933 JPEG quality 85 (152 KB) for thumbnail-appropriate page weight. Subject caveat: this is artist Ricky Watts at SHINE 2021, not a Vitale Bros mural. Defensible because the article is about the festival the Vitale Bros participated in, and the photo evokes the SHINE scene. If a real Vitale-at-SHINE shot turns up, swap. Photographer credit: Mark Rapien.

### `assets/images/portfolio-3.png`
- **Used as:** ArtBeat card thumbnail for "Fox 13 Feature" article.
- **Looking for:** any photo from the Fox 13 segment, behind-the-scenes shot, or a recognizable mural Fox 13 covered.
- **Replaced:** 2026-04-27 with bytes from `vitale-website/old-website-pics/10/marilyn1.jpg` (wide shot of the actual Playhouse Theater Marilyn Monroe mural in St Pete, with cherry picker and palm in frame). Direct subject match for the Fox 13 article, which centers on the Playhouse Marilyn portrait. 718x719, 170 KB, no resize needed. Bonus: `vitale-website/old-website-pics/08/cantina_awning.jpg` is the Nueva Cantina mentioned in the same article and is available if the Fox 13 thumbnail ever needs a swap.

### `assets/images/portfolio-4.png`
- **Used as:** ArtBeat card thumbnail for "Restoring Vandalized Murals" (Creative Loafing Tampa article).
- **Looking for:** a before/after restoration shot, or an in-progress restoration with paint covering the vandalism.
- **Status:** AI placeholder still in place as of 2026-04-27. Surveyed all parent folders; no before/after restoration photos found. The `vitale-website/SPCHS/spchs-inprogress-tesone.jpg` shot (Mary face mural in progress with crew on scaffolding) was considered as a "civic-scale protective work" mood stand-in but rejected because it's not literally restoration. Marianne to ask John whether he has photos from the actual restoration jobs.

## Note on hero-bg.png reuse

`hero-bg.png` also shows up as a fallback ArtBeat thumbnail on the Blue Goose article card (`artbeat.html` line 128). When that hero image gets replaced, we should also pick a Blue Goose-specific photo for that card so the article doesn't share a thumbnail with the global hero.

## How the researcher uses this file

When the daily research run finds a new IG or FB post, it checks the caption, location, and visible content against the "Looking for" notes above. Strong matches get filed as `[REPLACE-AI-portfolio-N-png]` backlog items. Loose matches get filed as regular `[CONTENT-NEW-*]` items so they're still captured but don't trigger an automatic swap.

## How to add to this list

If Marianne identifies more AI placeholders later, append them to the "Replacement targets" section in the same format. Don't remove entries when they're swapped; instead, add a `**Replaced:** YYYY-MM-DD with assets/images/path/to/real.jpg` line so we keep the audit trail.
