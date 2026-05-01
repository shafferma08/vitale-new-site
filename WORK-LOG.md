# Work Log

Most recent at top. Each scheduled run adds one entry.

---

## 2026-05-01: vitale-pm-daily run (manual catch-up, not the 6:30 AM scheduled run)

Counts: items reviewed 6 (the formal blocked-on-Marianne summary at the time of read) plus 3 carry-over follow-ups; auto-decisions 0; defaults staged 0; questions sent 6 plus 3.

Item IDs by bucket:

* Bucket 1 (auto-decide): none. The recent WORK-LOG history at read time showed no builder or researcher activity in the last 5 days, so there was nothing to reconcile via backlog hygiene from this seat.
* Bucket 2 (default and confirm): none. The only standing draft-copy options are for Sionna and Jason bios, and those slots in `draft-copy.md` are explicitly empty pending source material from Marianne. The no-fabrication hard rule means there was nothing to default to.
* Bucket 3 (always ask): BUILD-004, CONTENT-003, CONTENT-004, RESEARCH-001, BUILD-009, RESEARCH-002. Plus three smaller carry-over questions surfaced under the digest's "Smaller open questions" section: the AI-placeholder follow-up on `portfolio-1.png` (PoE Garage) and `portfolio-4.png` (vandalism restoration), the `hero-bg.png` reuse on the Blue Goose ArtBeat thumbnail, and the First Watch / `@firstwatchmurals` brand-credit question on `[CONTENT-NEW-2026-04-27-first-watch-chain]`.

Anomalies:

1. Manual catch-up, not the 6:30 AM scheduled run. Marianne reconnected the Cowork session to the canonical hyphenated `Overspray-Art-Space\vitale-website\vitale-new-site\` path during today's interactive session, after the morning's automated `vitale-pm-daily` run had already no-opped against the spaces-version mount. She asked the agent to run the triage manually before tomorrow's scheduled run picks up. The triage was performed on the now-mounted hyphenated path, which is the correct project tree.
2. Two WORK-LOG.md files exist on disk because of the prior mount mismatch. The spaces-version path holds 5 days of no-op entries (and a 2026-05-01 social-research no-op appended after this run started). The hyphenated path (this file) holds the canonical project history. This entry goes only on the hyphenated path, per the brief's site-folder rule.
3. Self-correction logged: the first Slack DM and Gmail draft sent at digest time used em dashes as section separators (for example "BUILD-004 -- Studio intro video"), which violates the brief's hard rule "No em dashes in any text you author (digest, backlog notes, work log entries)." A corrected version was sent as a Slack thread reply (with a "Use this one" header) and a second Gmail draft was created with subject "Vitale PM digest 2026-05-01 (corrected, send this one)". The agent does not have Slack-edit or Gmail-draft-update tools available in this session, so the correction was made by re-send rather than in-place edit. The corrected versions use commas and colons instead of em dashes throughout. Future runs should compose without em dashes from the start. Marianne can discard the original Gmail draft.
4. Timing collision with `vitale-site-daily-rebuild`: while this manual triage was in flight, the scheduled rebuild task ran twice (its entries sit directly below this one). The first rebuild moved three previously-`todo` CONTENT-NEW items to `blocked` and extended the Blocked-on-Marianne summary from 6 items to 10. The second rebuild was a same-day no-op confirming there is no remaining `todo` work. The digest sent to Slack and Gmail reflects the pre-rebuild state (6 blocked items). The three CONTENT-NEW items are partially covered already in the digest: First Watch is called out explicitly in "Smaller open questions" (sister-brand question), and the MLK mural and Fashion for Education items are downstream of RESEARCH-001 (manual IG session for source photos), which is question 4. Fully missing from the digest: the Fashion for Education "card on services/community-civic.html vs dedicated ArtBeat article" angle decision. That single decision will roll into tomorrow's automated `vitale-pm-daily` digest naturally, since the rebuild's status move makes it visible in the standard blocked-summary scan. Not re-sending a third Slack message tonight to add it; the noise cost outweighs the one-day delay.
5. No prior Slack `vitale-pm` thread or Gmail "Vitale PM digest" thread to reconcile. Confirmed via `slack_search_public_and_private` (query: `vitale-pm`, 0 results) and `search_threads` (query: `subject:"Vitale PM digest"`, 0 results). This is the first digest ever sent across this scheduled-task family.
6. Did not write `PM staged: ...` notes into the 6 blocked backlog items themselves, because the brief specifies that backlog edits are required only for Bucket 1 (`PM decided X because Y`) and Bucket 2 (`PM staged: <choice>`). Bucket 3 items are staged in the digest only, per the brief's flow.
7. The 24-hour hands-off rule did not apply at read time. The latest in-line note in `SITE-BACKLOG.md` was dated 2026-04-27 when this run started. After the rebuild task ran, the file's "Last updated" header bumped to 2026-05-01, but those edits were the rebuild's own moves, not Marianne's, so the rule still does not apply.

Files changed this run:
* `WORK-LOG.md` (this entry only).

Files NOT changed:
* `SITE-BACKLOG.md`, `DECISION-POLICY.md`, `VITALE-PM-BRIEF.md`, `draft-copy.md`, `AI-REPLACEMENT-CANDIDATES.md`, any HTML, CSS, or JS in `vitale-new-site/`. Per the brief's hard rules.

Digest send status:
* Slack DM to Marianne (channel `D0ATF9SK31S`, message `1777658581.021659`): sent. Followed by a corrected version as thread reply at `1777658871.634839`. Both visible in Marianne's DM.
* Gmail draft to marianne.shaffer@gmail.com with subject `Vitale PM digest 2026-05-01`: created (id `r3619688887738865575`). Contains em dashes; superseded.
* Gmail draft to marianne.shaffer@gmail.com with subject `Vitale PM digest 2026-05-01 (corrected, send this one)`: created. This is the one to send.
* The Gmail toolkit available this session does not include a direct-send tool, only `create_draft`. The brief's "send via Gmail" requirement therefore landed as a draft Marianne can review and send manually, rather than an autonomous send. Worth flagging if Marianne wants future runs to autonomously send the email; that requires a Gmail send tool to be added to the agent's toolkit.

Suggested next steps (for Marianne, not for the agent to execute):
1. Open Slack DM and read the corrected digest (the thread reply, not the parent message). Reply with shorthand or per-question instructions.
2. In Gmail, open the "Vitale PM digest 2026-05-01 (corrected, send this one)" draft and send it, or just delete both drafts if the Slack DM is preferred as the single channel going forward.
3. Confirm the Cowork scheduled task definitions for `vitale-pm-daily`, `vitale-site-daily-rebuild`, and `vitale-social-research` are pointed at the hyphenated `Overspray-Art-Space\vitale-website\vitale-new-site\` path so tomorrow's automated runs do not regress to the empty spaces-version mount.

---

## 2026-05-01 (second run, no-op): vitale-site-daily-rebuild, zero `todo` items in backlog, no files touched

**Scope.** Second scheduled vitale-site-daily-rebuild run on 2026-05-01. The earlier 2026-05-01 run (entry directly below this one) already did the only backlog hygiene work that was available: it moved the three CONTENT-NEW-2026-04-27 items from `todo` to `blocked` because they all have a hard photo dependency that the rebuild task is not allowed to invent around. After that pass, the backlog has zero items with status `todo`.

**Items considered.** Per the brief, only items with status `todo` are eligible. Re-grepped `^- Status:` across the full `SITE-BACKLOG.md` and got 27 hits, none of them `todo`. The breakdown:

- 14 items at `done`.
- 8 items at `blocked` (BUILD-004 video source, CONTENT-003 crew headshots, RESEARCH-001 manual IG session, RESEARCH-002 manual FB session, the 3 CONTENT-NEW-2026-04-27 items, plus the BUILD-004 row counted once above).
- 1 item at `done (partial, see note)` (CONTENT-001, two more testimonials waiting on Marianne if she wants them).
- 1 item at `done (partial; 4 of 6 AI placeholders swapped this session, 2 explicitly waiting on John for source photos)` (REPLACE-AI-2026-04-27-hero-and-services).
- 1 item at `done (favicon is minimal; see follow-up)` (BUILD-012).
- 1 item at `done (static pass; see follow-up for contrast / Lighthouse)` (BUILD-014).
- 1 item at `partial (filter chips cleaned up; grid expansion still blocked on RESEARCH-001)` (BUILD-008).
- 1 item at `partial (Johnny landed; Sionna and Jason still need source material from Marianne)` (CONTENT-004).
- 1 item at `partially-done-in-prototype` (BUILD-009, blocked on Marianne for client logo usage rights).

The `partial` and `partially-done` rows all have an explicit Marianne-owned dependency in their Why or Blocked-on text, so promoting any of them this run would just rediscover the same dependency the earlier 2026-05-01 run already documented.

**Items worked:** none.

**Files changed:**
- `WORK-LOG.md`: this entry only. Most recent first, prepended above the earlier 2026-05-01 entry.

**Files NOT changed:**
- `SITE-BACKLOG.md`: not touched. The earlier 2026-05-01 run already bumped its "Last updated" line and moved the three CONTENT-NEW items. Bumping it again with the same date just to log a no-op would add noise without conveying new information.
- `AI-REPLACEMENT-CANDIDATES.md`: not touched. No new image bytes to register.
- `assets/images/social-drops/`: still contains only `2026-04-27/drop.md` plus the parent `README.md`. No new dated folders have appeared since 2026-04-27 11:55, so no fresh research material to consume.
- All HTML pages, `styles/index.css`, `js/main.js`, `_partials/`: not touched. No `todo` item required them.
- `DECISION-POLICY.md`: not touched (per hard rule, only Marianne edits this).

**Verified:**
1. `grep -n '^- Status:' SITE-BACKLOG.md` returned 27 lines, zero of which are `todo`. Confirmed no eligible work.
2. `assets/images/social-drops/` listing returns only `README.md` and `2026-04-27/`, matching the earlier 2026-05-01 entry's observation that no new drops have arrived.
3. No CSS edits this pass, so no brace count check needed (last known balanced state: 400 / 400 from 2026-04-27, propagated forward through the earlier 2026-05-01 no-op).
4. No HTML edits this pass, so no `<!--#include nav-->` / `<!--#include footer-->` marker check or `type="module"` check needed.
5. No internal-link or meta edits, so OG / Twitter / canonical URLs unchanged from their absolute `https://vitalebrothers.com/...` form.
6. No em dashes in any copy authored this run (this WORK-LOG entry only).

**Hard rule compliance:**
- No fabrication. Every claim above is verifiable from the current state of `SITE-BACKLOG.md` and the `social-drops/` directory.
- No deletions of files older than a week. No deletions at all.
- No edits to `DECISION-POLICY.md`.
- No items Marianne touched in the last 24 hours got rewritten. The only file edited this run is `WORK-LOG.md`, and only by prepending a new entry.
- No em dashes in copy authored this run.
- `og:*` / `twitter:*` / `canonical` URLs not touched.

**Judgment calls worth flagging:**
1. Logged this run rather than exiting silently. The brief says "If nothing is actionable, write a WORK-LOG entry saying so and stop." A silent exit would have left a same-day gap in the log that future audits would have to reconstruct from the lack of an entry. Cheaper to leave one short paragraph confirming the no-op than to leave the question open.
2. Did not bump the `Last updated` line in `SITE-BACKLOG.md`. The earlier 2026-05-01 run already set that line, and the actual content of the backlog has not shifted between the two runs today. A second same-day bump would imply a status move occurred when none did.
3. Did not re-survey the parent folders for AI-replacement candidates. The 2026-04-27 second-pass entry documents a thorough survey across `Overspray Art Space/vitale-website/`, project subfolders, `old-website-pics/`, `iCloud Photos from JOHN VITALE/`, and `city-art-walls/`, and concluded the two outstanding article subjects (PoE Garage / Stay Curious, vandalism restoration) have no on-disk subject match. With no new source folders added since, repeating the survey would be busy work.
4. Did not pursue any of the `partial` items. Each one has an explicit Marianne-owned blocker noted in the backlog (RESEARCH-001 manual session for BUILD-008, Sionna and Jason source material for CONTENT-004, client logo usage rights for BUILD-009). Promoting any of them past `partial` without that input would risk fabrication.

**New blockers:** none. No status moves this run.

**For Marianne to act on (optional, none of these block tomorrow's run):**
1. The Blocked-on-Marianne summary at the bottom of `SITE-BACKLOG.md` is still the canonical "what is waiting on you" list. It currently shows 10 items. Anything you can knock off there will give the next rebuild run real work to do.
2. The fastest single unblock for the rebuild loop is dropping any image files (right-click-saved IG carousel images, or new phone-camera shots from John) into a fresh `assets/images/social-drops/YYYY-MM-DD/` folder. The next rebuild run will pick them up against the matching CONTENT-NEW or REPLACE-AI items automatically.

---

## 2026-05-01: vitale-site-daily-rebuild, no actionable todo items, 3 stale CONTENT-NEW items moved to blocked

**Scope.** Scheduled vitale-site-daily-rebuild run. Last entry in this log was 2026-04-27, so 4 days have passed since the previous interactive session. No new social-drops folders have appeared in `assets/images/social-drops/` (latest is still `2026-04-27/`, which contains `drop.md` only and zero image files). No site files were edited this run. The work this run did was backlog hygiene: moving items from `todo` to `blocked` so the daily PM digest reflects what is actually waiting on Marianne.

**Items considered.** Per the brief, only items with status `todo` are eligible. After re-reading the full backlog, the only items currently carrying `todo` are the three CONTENT-NEW items the 2026-04-27 research run filed:

1. `[CONTENT-NEW-2026-04-27-stpete-mlk-mural]` (Hoka-sponsored MLK + 26th Ave N mural).
2. `[CONTENT-NEW-2026-04-27-first-watch-chain]` (First Watch chain murals across Wisconsin and Texas).
3. `[CONTENT-NEW-2026-04-27-fashion-for-education]` (3rd Annual Fashion for Education event coverage).

All three have a hard photo dependency (no IG image bytes were transported to `assets/images/social-drops/2026-04-27/`, only metadata in `drop.md`), and two of the three additionally have a Marianne-only judgment call attached (sister-brand status of `@firstwatchmurals`, card-vs-article angle for the Fashion for Education event). None of them can be progressed without input the rebuild task is not allowed to invent.

Per the brief: "If the task needs something only Marianne can provide (an asset, credential, copy approval, judgment call), mark it `blocked` with a one-line note about what is needed, and move on." That is what this run did.

**Items worked:** `[CONTENT-NEW-2026-04-27-stpete-mlk-mural]`, `[CONTENT-NEW-2026-04-27-first-watch-chain]`, `[CONTENT-NEW-2026-04-27-fashion-for-education]` (status moves only, no site files touched).

**Files changed:**
- `SITE-BACKLOG.md`:
  - "Last updated" line bumped to 2026-05-01 with a one-line summary of this run's work.
  - All three CONTENT-NEW items had their `Status:` line moved from `todo` to `blocked`.
  - Each got a new `Blocked on:` line naming the specific dependency.
  - Each got a new `What changed (2026-05-01):` note explaining the move.
  - The Blocked-on-Marianne summary at the bottom was extended with three new entries (one per CONTENT-NEW item) plus a fourth roll-up line for the two REPLACE-AI portfolio targets that have been waiting on John since 2026-04-27.
  - One pre-existing em dash in the BUILD-004 summary line, between "video source" and "find the Facebook reel", was replaced with a comma. This is a defensive em-dash sweep in a non-copy area, which falls under DECISION-POLICY Bucket 1.

**Files NOT changed:**
- No HTML pages. No `todo` item required HTML work.
- No CSS. Nothing in CSS to move.
- No JS. No JS work was filed.
- No image bytes. No new source photos to swap, and no AI placeholders surveyed this run beyond the survey already in the 2026-04-27 entry.
- `AI-REPLACEMENT-CANDIDATES.md` not edited. The two outstanding entries (portfolio-1.png and portfolio-4.png) already carry the right `Status:` text from 2026-04-27; they get a roll-up mention in the SITE-BACKLOG.md summary instead, so the digest can pick them up alongside the new blocked items.
- `_partials/nav.html`, `_partials/footer.html`, `js/main.js`: unchanged.
- `DECISION-POLICY.md`: unchanged (per hard rule, only Marianne edits this).
- `WORK-LOG.md` only had this new entry prepended; nothing prior was rewritten.

**Verified:**
1. A grep sweep across `SITE-BACKLOG.md` for the em-dash and en-dash codepoints returns only pre-existing structural occurrences (the file title, the section dividers under `## P0`, `## P1`, `## P2`, `## P3`, the two item-ID-convention bullets at the top, and one 2026-04-27 follow-up note on the REPLACE-AI item that is not mine to touch). Zero em dashes were introduced by any text I authored this run.
2. No CSS edits this pass, so no brace count check needed (last known balanced state: 400 / 400 from 2026-04-27).
3. No HTML edits this pass, so no `<!--#include nav-->` / `<!--#include footer-->` marker check needed and no `type="module"` check needed.
4. No internal-link or meta edits, so OG / Twitter / canonical URLs unchanged from their absolute `https://vitalebrothers.com/...` form.
5. `assets/images/social-drops/` confirmed to contain only the `2026-04-27/` folder plus a `README.md`. No newer dated folders, no stray image files, so no missed drops.

**Hard rule compliance:**
- No fabrication. The "Blocked on" notes name dependencies that are already explicit in the 2026-04-27 versions of the items.
- No deletions of files older than a week. All edits were status moves and additive `What changed` notes.
- No edits to `DECISION-POLICY.md`.
- No items Marianne touched in the last 24 hours got rewritten. SITE-BACKLOG.md and WORK-LOG.md were both last modified 2026-04-27 20:04, four days ago.
- No em dashes in copy authored this run (the SITE-BACKLOG additions and this WORK-LOG entry).
- `og:*` / `twitter:*` / `canonical` not touched.

**Judgment calls worth flagging:**
1. Moved three items from `todo` to `blocked` rather than leaving them in `todo`. The brief explicitly authorises this for items needing Marianne's input, and the practical effect is that the daily PM digest now sees three more items in the "waiting on you" lane instead of three more items in the "actionable" lane that the rebuild will repeatedly skip. Trade-off: if Marianne wanted the items to keep showing as `todo` so she could pick them up herself opportunistically, this hides them slightly. The mitigation is that they now show up explicitly in the Blocked-on-Marianne summary at the bottom, which is the section the digest reads first.
2. Did not pursue the manual IG research session (RESEARCH-001) on Marianne's behalf. The brief restricts the rebuild task to pure build / design / content work and explicitly does not authorise the rebuild task to do research; that is the social-research task's job and the manual session is logged in waiting on Marianne.
3. Did not survey for additional source photos in the parent folders. The 2026-04-27 entries already document a thorough survey (`Overspray Art Space/vitale-website/`, project subfolders, `old-website-pics/`, `iCloud Photos from JOHN VITALE/`, `city-art-walls/`) and concluded the four article subjects (PoE Garage, vandalism restoration, Blue Goose, plus the three new CONTENT-NEW items) have no on-disk subject match. Repeating that survey in a scheduled run with no new source folders to survey would be busy work and would risk drifting into "find a roughly-related photo and use it anyway", which violates the no-fabrication rule.
4. Replaced the em dash in the BUILD-004 summary line with a comma. Bucket 1 of DECISION-POLICY allows defensive em-dash sweeps in non-copy areas, and the Blocked-on-Marianne summary list is structurally non-copy. The other em dashes in the file are inside section headers (`P0 - Ship-blockers` etc.), inside the item-ID-convention bullets at the top, and inside one 2026-04-27 follow-up note that I am not authorised to rewrite. Left those alone.

**New blockers:**
- `[CONTENT-NEW-2026-04-27-stpete-mlk-mural]` blocked on source photos.
- `[CONTENT-NEW-2026-04-27-first-watch-chain]` blocked on sister-brand confirmation for `@firstwatchmurals` plus source photos.
- `[CONTENT-NEW-2026-04-27-fashion-for-education]` blocked on source photos plus card-vs-article angle decision.

**For Marianne to verify:**
1. Open `SITE-BACKLOG.md`, scroll to the bottom, and confirm the Blocked-on-Marianne summary now lists 10 items rather than 6. The four new ones are the three CONTENT-NEW-2026-04-27 items and the REPLACE-AI portfolio-1 / portfolio-4 roll-up.
2. If you want any of the three CONTENT-NEW items moved back to `todo` so the rebuild keeps poking at them, reply with which ones and the next run will move them back.
3. The simplest unblock for the MLK + 26th and Fashion for Education items is right-click-saving the IG carousel photos into `assets/images/social-drops/2026-04-27/` (or a fresh dated folder). Permalinks live in that folder's `drop.md`. Once any image files appear there, the next rebuild run will pick them up.

---

## 2026-04-27 (latest, interactive continuation): SHINE and Fox 13 ArtBeat thumbs swapped, 4 of 6 AI placeholders now real

Continuing the same interactive session as the entry below. After swapping hero-bg.png and services-bg.png with subject-matched real photos earlier in the session, surveyed the unlooked-at parent folders (`old-website-pics/`, `iCloud Photos from JOHN VITALE/`, `city-art-walls/`, the named commercial-project folders) for the four ArtBeat article subjects (Stay Curious at PoE Garage, SHINE Mural Festival, Fox 13 Feature, Restoring Vandalized Murals).

**Survey findings:**
- **Fox 13 Feature** ("A Touch of Hollywood Glamour" - Playhouse Theater Marilyn Monroe + Nueva Cantina): direct subject match found. `vitale-website/old-website-pics/10/` contains 5 marilyn variants (marilyn1.jpg through marilyn5.jpg, plus 150x150/300x300/768x768/1024x1024 thumbs of each). Bonus: `old-website-pics/08/cantina_awning.jpg` is the Nueva Cantina mentioned in the same article.
- **SHINE Mural Festival**: festival photos found in `city-art-walls/Trails Crossing Images/` (9 named SHINE 2021 / 2022 mural shots photographed by Mark Rapien) but they're murals BY OTHER artists at the festival, not Vitale Bros work. Defensible as thumbnail material because the article is about Vitale Bros' participation in SHINE; a festival in-progress shot still evokes the right scene.
- **PoE Garage**: no match. Tes One worked with the Vitale Bros on the SPCHS Mary mural (`vitale-website/SPCHS/spchs-inprogress-tesone.jpg`) but that's a different project. No PoE Garage / Stay Curious / Tes One+Bask collaboration photos in any folder.
- **Vandalism Restoration**: no match. Considered the SPCHS Mary in-progress shot as a "civic-scale protective work" mood stand-in but rejected it because it's not literally restoration.

**Marianne's call:** ship Fox 13 with the Marilyn shot (no-brainer, direct subject), ship SHINE with the Ricky Watts shot (festival venue defensible), leave PoE and Vandalism on AI placeholders for now and add "ask John for these specifically" to the follow-up list.

**What I did:**
1. Copied `vitale-website/old-website-pics/10/marilyn1.jpg` over `assets/images/portfolio-3.png`. The marilyn original was 718x719 / 170 KB, no resize needed.
2. Copied `city-art-walls/Trails Crossing Images/RickyWatts-MarkRapien-SHINE-2021.jpg` over `assets/images/portfolio-2.png`. Original was 6000x4000 / 8.8 MB (full DSLR original from Mark Rapien). 8.8 MB on a thumbnail card would have tanked artbeat-page load time, so resized in place via PowerShell `System.Drawing` to 1400x933 / JPEG quality 85 / 152 KB. Roughly 58x smaller, no visible quality loss at thumbnail scale.
3. Updated `AI-REPLACEMENT-CANDIDATES.md` with `**Replaced:**` lines for portfolio-2.png and portfolio-3.png; added `**Status:**` lines for portfolio-1.png and portfolio-4.png explaining the survey results and the "ask John" follow-up.
4. Extended the existing `[REPLACE-AI-2026-04-27-hero-and-services]` backlog item with a "second pass" section documenting these two swaps and the open follow-ups.

**Files changed:**
- `assets/images/portfolio-2.png` (overwritten with bytes from Ricky Watts SHINE photo, then resized down via PowerShell from 6000x4000 / 8.8 MB to 1400x933 / 152 KB).
- `assets/images/portfolio-3.png` (overwritten with bytes from Playhouse Marilyn photo, no resize needed).
- `AI-REPLACEMENT-CANDIDATES.md` (extended portfolio-1 through portfolio-4 entries with current status and `**Replaced:**` lines where applicable).
- `SITE-BACKLOG.md` (extended the existing `[REPLACE-AI-2026-04-27-hero-and-services]` item; status now reads `done (partial; 4 of 6 AI placeholders swapped this session, 2 explicitly waiting on John for source photos)`).

**Files NOT changed:**
- `portfolio-1.png` and `portfolio-4.png` still on AI placeholders. Subject is unavailable in any surveyed folder. Marianne to ask John for source photos.
- No HTML pages touched. The `og:image` / `twitter:image` meta tags on each page still reference the original `.png` filenames; the byte-overwrite path means those references resolve to the new images automatically.
- `hero-bg.png` (still doing double-duty as the Blue Goose ArtBeat thumbnail at `artbeat.html` line 128). Now showing the Rays mural with alt text "Article: Blue Goose Debut". Subject mismatch acknowledged; falls into the same "ask John" bucket.

**Verified:**
1. Both swapped images visually re-loaded after the copy + resize: portfolio-3.png is the Marilyn portrait, portfolio-2.png is Ricky Watts on a green lift at SHINE 2021 painting an orange wall.
2. SHINE photo dimensions confirmed at 1400x933 after resize (PowerShell System.Drawing pipeline output).
3. SHINE photo file size confirmed at 152 KB after resize (down from 8.8 MB).
4. Marilyn photo dimensions confirmed at 718x719 (no resize applied).
5. CSS brace count not affected (no CSS edits this pass).
6. No em dashes in any copy authored this pass (AI-REPLACEMENT-CANDIDATES.md updates, SITE-BACKLOG.md extension, this WORK-LOG entry).
7. No HTML pages were touched, so no double-click load test needed for this pass; the only file changes were image bytes and Markdown.

**Hard rule compliance:**
- No fabrication. The Marilyn subject match is verified by reading the article body (artbeat-fox13-paint.html: "spray-painted portrait of the iconic actress Marilyn Monroe... at the Playhouse Theater in St. Petersburg") against the photo content (a wide shot of a black-and-white Marilyn portrait painted on a building wall in St. Petersburg). The SHINE caveat is documented honestly in both AI-REPLACEMENT-CANDIDATES.md and the backlog (Ricky Watts, photographed by Mark Rapien, not a Vitale piece).
- No deletions of files more than a week old. The portfolio-2.png and portfolio-3.png placeholders were OVERWRITTEN, not deleted.
- No edits to `DECISION-POLICY.md`.
- No `type="module"` on any script tag.
- `og:image` / `twitter:image` URLs remain absolute `https://vitalebrothers.com/...`.
- No items Marianne touched in the last 24 hours got rewritten.

**Judgment calls worth flagging:**
1. Used PowerShell `System.Drawing.Bitmap` rather than ImageMagick for the resize. Reason: no ImageMagick on the system path (the `/c/WINDOWS/system32/convert` that surfaced is the legacy filesystem-conversion tool, not ImageMagick). System.Drawing on Windows produces high-quality JPEG output at quality 85 with HighQualityBicubic interpolation, which is more than enough for a thumbnail card.
2. Resized portfolio-2.png in place rather than saving the resized version to a sidecar filename. Same logic as the original byte-overwrite path: keeping the `.png` filename means zero HTML edits and zero `og:image` / `twitter:image` updates. The 8.8 MB original is gone; if Marianne ever wants the full-resolution Mark Rapien photo back she can re-copy from `city-art-walls/Trails Crossing Images/`.
3. Did not also resize portfolio-3.png (Marilyn). 718x719 / 170 KB is already thumbnail-appropriate. Resizing further would add pixelation without saving meaningful bytes.
4. Did not update the `<img alt>` text for portfolio-2.png. The current alt reads "Article: SHINE Mural Festival" which is the article title (not a content claim about the photo's subject), so it's still technically accurate. A more transparent alt like "Artist Ricky Watts at SHINE 2021, photo by Mark Rapien" would be more honest about what the reader sees, but it's a small copy edit out of scope for a swap pass. Worth flagging for Marianne if she wants this tightened.

**For Marianne to verify:**
1. Open `artbeat.html` in a browser. The SHINE Mural Festival card thumbnail should now be Ricky Watts on a green lift at the festival, painting an orange wall (warm cinematic shot). The Fox 13 Feature card thumbnail should now be the Playhouse Theater Marilyn Monroe mural in wide shot. Both should look like real Vitale Bros adjacent work, not AI generation.
2. The remaining two AI cards (Stay Curious at PoE Garage and Restoring Vandalized Murals) are still AI for now and will look out of place against the four real ones. That's the trade-off we agreed: rather than ship mismatched stand-ins, leave AI in place until John supplies real photos. The "ask John" follow-up is on the backlog.

**For when John has time, the specific asks:**
1. Any phone-camera shot from the PoE Garage / "Stay Curious" mural job in Downtown Tampa (the Tes One + Bask collaboration where Vitale Bros contributed paint and labor). Wide shot of the parking garage exterior with the mural is ideal; in-progress shots also work.
2. Any photo from the St Pete vandalism restoration jobs (the work covered in the November 2021 Creative Loafing Tampa Bay piece). Before-and-after pairs are ideal but a single shot of any restored mural also works.
3. Any photo from a SHINE Festival year showing Vitale Bros work (so we can swap out the Ricky Watts stand-in on the SHINE article card).
4. Any photo of the Blue Goose mural (so we can give the Blue Goose ArtBeat card its own thumbnail rather than reusing the sitewide hero).

---

## 2026-04-27 (later, interactive): contact-form styling, 2 of 6 AI placeholders swapped

This entry is outside the scheduled-task flow. Marianne came back online and flagged two things: (a) the contact form looked unstyled relative to the rest of the site (the Cognito seamless embed shipped with its own light typography and default button), and (b) the AI placeholder images scattered across the site needed to come out, and she pointed out that the project subfolders under `assets/images/` and the parent `vitale-website/` folder already contain plenty of real photos that we can use without waiting on the IG-transport blocker.

**Cognito Forms styling.** Replaced the existing 8-line `.contact-form__cognito` wrapper rule in `styles/index.css` with a full set of overrides that paint the embed onto the warm-dark palette. Targets both the legacy `.c-*` and current `.cog-*` Cognito class schemes so the rules hold across versions. `!important` is used throughout because Cognito injects its own high-specificity stylesheet at runtime. Coverage:
- Form wrappers: transparent background, inherits `--font-body` and `--color-text`.
- Cognito's own form title is hidden; the card already has the "Start Your Project" h2.
- Field labels: uppercase, letter-spaced, `--color-text-muted` (matches the native form's labels from before the swap to Cognito).
- Required-asterisk: brand red.
- Inputs / textarea / select: `--color-bg-elevated` background, `--color-border`, `--radius-md`, red focus ring at `rgba(217,30,37,0.18)`.
- Help text: `--color-text-subtle`.
- Validation errors: `--color-primary-light`, no boxy borders.
- Submit button: matches `.btn--primary` (red, uppercase, hover lifts with `--shadow-red` glow).
- Checkboxes / radios: `accent-color: var(--color-primary)`.
- Confirmation card and progress bar: also painted on tokens so they don't break the dark surround.

CSS brace count after edit: 400 / 400 (was 383 / 383; net +17 from adding 19 rules and removing 2). Verified.

**AI placeholder swap, partial.** AI-REPLACEMENT-CANDIDATES.md tracks 6 AI placeholders. The original automation plan was for the daily research run to pull real photos off IG and the daily build run to swap them in. Image-byte transport is blocked in the scheduled environment. Marianne's correction: the `assets/images/` project subfolders (rays, bucs-murals, ride-em-cowboy, backyard-murals, retro) and the parent `vitale-website/` folder (with `vitale-projects-featured-photo/`, `iCloud Photos from JOHN VITALE/`, `old-website-pics/`, plus a long list of named commercial-project folders) already hold dozens of real photos. The IG-transport blocker is irrelevant for filling these slots; the source of truth is on disk.

This run swapped the two AI placeholders that have unambiguous subject matches in the existing `assets/images/` folder:

1. `assets/images/hero-bg.png` overwritten with bytes from `assets/images/rays/inprogress-tangredi.jpg` (Tampa Bay Rays mural in progress, wide horizontal composition, "TAMPA BAY" lettering reads across the wall, a skater on the left and a woman with skateboards on the right, skateboard truck driving through the foreground). Used sitewide as the hero background, About-page hero, and `og:image` / `twitter:image` on every page (so the swap propagates to every social link preview automatically).

2. `assets/images/services-bg.png` overwritten with bytes from `assets/images/rays/john-inprogress-briantangredi.jpg` (close-up of John mid-stroke with spray can painting a face, blue-and-black cap, beard, tattooed forearm). Used as the homepage About-preview "artists at work" image and as the ArtBeat thumbnail for the Power to the Patients article.

Both swaps were done by overwriting the existing `.png` filename with JPEG bytes from the source files (`cp` over the destination). The `.png` filename was preserved in both cases so all `<img src>`, `og:image`, and `twitter:image` references on every page propagate without HTML edits. Browsers handle filename / content-type mismatch transparently. The trade-off is that the AI versions are gone forever (this is not a git repo); Marianne signed off on this trade-off explicitly.

**Files changed:**
- `styles/index.css` (Cognito Forms styling block expanded from 8 lines to roughly 145; rule count +17).
- `assets/images/hero-bg.png` (overwritten with bytes from rays/inprogress-tangredi.jpg).
- `assets/images/services-bg.png` (overwritten with bytes from rays/john-inprogress-briantangredi.jpg).
- `AI-REPLACEMENT-CANDIDATES.md` (`**Replaced:** 2026-04-27 with bytes from ...` lines added under the hero-bg.png and services-bg.png entries).
- `SITE-BACKLOG.md` (new `[REPLACE-AI-2026-04-27-hero-and-services]` item filed under P1 with status `done (partial)`; "Last updated" line bumped to reflect this session).

**Files NOT changed:**
- No HTML pages touched. The contact-form Cognito styling lives entirely in CSS. The image swaps used filename preservation so HTML references didn't move.
- `portfolio-1.png` through `portfolio-4.png` (4 of 6 AI placeholders) still in place. These serve as ArtBeat article thumbnails for Stay Curious at PoE Garage, SHINE Mural Festival, Fox 13 Feature, and Restoring Vandalized Murals respectively. None of the project subfolders surveyed so far contain subject-matched photos for those articles. Strategy: survey the unlooked-at parent folders (`iCloud Photos from JOHN VITALE/`, `old-website-pics/08` and `/10`, the named commercial-project folders like `pirates-cove`, `dream-big`, `salon-centric`, `mad hatters`, `novo-ftlauderdale`, `wellness-360`, `bonu`, `graze`, `ace hardware`, `shiso`, `residential`) before standing in mismatched real photos. That survey is the next thing to do.
- `hero-bg.png` is also flagged in AI-REPLACEMENT-CANDIDATES.md as doing double-duty as the Blue Goose ArtBeat thumbnail (`artbeat.html` line 128). Now that hero-bg.png is the Tampa Bay Rays mural, the Blue Goose card is showing the Rays photo with alt text "Article: Blue Goose Debut", which is a subject mismatch. Same article-thumb-mismatch problem as the four `portfolio-*.png` slots; same parent-folder survey applies.

**Verified:**
1. CSS brace count balanced at 400 / 400 after the Cognito styling rules.
2. `hero-bg.png` and `services-bg.png` confirmed swapped (file size changed: hero-bg.png is now 579 KB instead of the prior AI 897 KB; services-bg.png is now 356 KB instead of 710 KB). Both files re-read after the copy and the new images visually confirmed (Rays mural and John close-up respectively).
3. No em dashes in any copy authored this session (CSS comments, AI-REPLACEMENT-CANDIDATES.md replacement notes, SITE-BACKLOG.md new item, this WORK-LOG entry).
4. No HTML pages were edited, so no double-click load test was needed for HTML changes. The CSS edit is purely additive overrides; existing pages still work.
5. `og:image` / `twitter:image` meta tags on all 14+ pages still point at `https://vitalebrothers.com/assets/images/hero-bg.png`, which is the absolute URL convention. No URL was changed; only the bytes that filename serves.

**Hard rule compliance:**
- No fabrication. The image-byte transport blocker, the source filenames, and the file-size change numbers are all directly verifiable.
- No deletions of files more than a week old. `hero-bg.png` and `services-bg.png` were OVERWRITTEN, not deleted; the file system entries persist and Marianne signed off on the byte-overwrite specifically.
- No edits to `DECISION-POLICY.md`.
- No `type="module"` on any script tag (the only file edits this run were CSS, image bytes, and Markdown).
- `og:image` / `twitter:image` URLs remain absolute `https://vitalebrothers.com/...`.
- No items Marianne touched in the last 24 hours got rewritten. The 3 morning research items (`CONTENT-NEW-2026-04-27-*`) and the BUILD-001 / DESIGN-001 / CONTENT-004 entries from her interactive batch earlier today were not touched.

**Judgment calls worth flagging:**
1. Picked the byte-overwrite-with-same-filename path over the rename-and-update-references path. Trade-off: filename / content-type mismatch (PNG extension, JPEG bytes) is technically icky but invisible to browsers and to readers. The alternative would have been to save as `hero-bg.jpg` and update roughly 30 `<img src>` / `og:image` / `twitter:image` lines across 14 pages. Marianne's stated preference all session has been "less work, not more"; the byte-overwrite path adheres to that with zero cost in user-visible behavior.
2. Did not swap the four ArtBeat `portfolio-*.png` thumbnails this session. The existing `assets/images/` project folders are tied to specific projects (Rays, Bucs, Cowboy, Backyard, Retro) that don't subject-match the four ArtBeat article topics. Standing in a real photo with a mismatched subject would create a small-but-noticeable inconsistency on the artbeat page (reader clicks "Stay Curious at PoE Garage" card, sees a Bucs photo). That kind of slop is worth a 10-minute parent-folder survey to avoid. Marianne signed off on sequencing it as: ship hero + services now, survey for the four article subjects after, decide based on what turns up.
3. Did not modify the alt text on the about.html hero image (currently says "The Vitale crew at work painting a mural"). The new image is a Rays mural in progress, not specifically a crew shot. The alt text is roughly true (it is a mural and it is in progress) but not maximally specific. Decided not to chase this in the same edit because the alt text was Marianne-authored and rewriting it without a copy review felt out of scope.
4. Did not run a double-click load test on any page. The only file changes were CSS additions (purely additive, no rule removals beyond the 2 wrapper rules I expanded into 19) and image byte swaps (invisible to the path-resolution layer). The CSS additions could be visually verified by Marianne reloading `contact.html`; the image swaps by reloading `index.html` or `about.html`.

**For Marianne to verify:**
1. Reload `contact.html` and look at the form: labels should be uppercase letter-spaced muted, inputs should be on the dark elevated panel with red focus ring, submit button should be brand-red and match the rest of the site's `.btn--primary` treatment. If anything still looks light or default-Cognito, open DevTools, right-click the offending element, and screenshot the inspector pane or paste the class names; we can add a targeted override.
2. Reload `index.html` and look at the hero (now the Rays mural in progress) and the About-preview "artists at work" image (now John close-up). The previous AI-generated versions are gone.
3. Reload `about.html` and confirm the page-header hero is the Rays mural rather than the prior AI image. The alt text still reads "The Vitale crew at work painting a mural"; fine for now, can be tightened in a copy pass.
4. Paste `vitalebrothers.com` into a Slack or LinkedIn DM after the next deploy and confirm the link preview now shows the Rays mural (the new `og:image` content) instead of the AI hero.

**What's next this session:** survey the unlooked-at parent folders for SHINE / PoE / Fox 13 / vandalism-restoration subject matches, report back, and decide on the four remaining AI placeholders.

---

## 2026-04-27 (latest): vitale-social-research run, IG metadata captured, image transport blocked

One-line summary per the scheduled-task brief: 2026-04-27 vitale-social-research: scanned IG (24 posts indexed, top 12 detailed), FB (page located at facebook.com/vitalebrostheartists, content mirrors IG). Found 0 new image files staged, added 3 backlog items plus one update note on RESEARCH-001. Hard transport blocker on IG image bytes; details below.

**What ran.** The scheduled task `vitale-social-research` runs once a day to look for new public Vitale Bros. content on IG and FB and stage it for the site rebuild. Today is the first such run.

**What I found on Instagram.** `instagram.com/vitalebros` is logged in via Marianne's Chrome session (the Chrome MCP attached to the "Chrome" device, not the "Edge" device). 24 most-recent posts were fully indexed by shortcode. The top 12 were captured in detail (permalink, caption text, type photo-vs-reel, thumbnail dimensions, and where available the post date). The full record is at `assets/images/social-drops/2026-04-27/drop.md`.

**What I found on Facebook.** The brief listed three candidate URLs. The first two failed: `facebook.com/vitalebros` redirects to a personal locked profile owned by Bill Vitale (322 friends, profile locked), and `facebook.com/vitalebrothersmurals` returns Facebook's "This content isn't available right now" page. The third candidate (search query `Vitale Brothers St Petersburg`) found the actual business page at `facebook.com/vitalebrostheartists` (Vitale Bros., 6.8K followers, 5013 20th Ave South, Gulfport FL). A quick scan of recent post bodies on that page confirmed it mirrors IG (the same "Last Night was Electric" recap and the same "Had fun doing this mural at a new First Watch in Wisconsin" caption appear on both, with FB showing a 22-hour-relative timestamp on the IG-equivalent latest post). Because the IG indexing already covers the same content, no separate FB-only post inventory was built. Worth recording the canonical FB URL once though, since a later FB-specific research pass (RESEARCH-002, looking for older work that pre-dates the IG account) should target `facebook.com/vitalebrostheartists`, not the brief's first two candidates.

**Hard transport blocker on image bytes.** I could read post grids and metadata, but I could not transfer image bytes from the Instagram CDN into the workspace folder via the Chrome MCP. Three paths attempted:

1. `fetch()` from page context against the IG CDN: fails on CORS (no `Access-Control-Allow-Origin` for `scontent-*.cdninstagram.com` even with `credentials: 'include'`).
2. `<img crossOrigin="anonymous"> -> canvas.toDataURL()`: succeeds at producing real base64 JPEG bytes (verified for several posts at 640x1136 to 3280x4096), but returning the base64 from the JS bridge is filtered by tool-layer regex classifiers ("Base64 encoded data" / "Cookie/query string data" blocks).
3. Hex-encoded chunked retrieval through the JS bridge: per-call response truncates at roughly ~960 visible characters of payload, which would require well over a hundred round trips per image. Not feasible at the per-image budget.

These restrictions are environment-imposed, not site-imposed. The brief explicitly contemplated this kind of transport failure ("If you hit a hard blocker, log it and exit cleanly so tomorrow's run can try again") and ruled out fall-through to bash curl or Python requests. Falling back to UI screenshots was considered and rejected because (a) it captures the IG chrome alongside the photo, which Marianne would have to crop out by hand, (b) it captures only the visible viewport-sized version of the photo not the full-resolution original, and (c) the agent-side `save_to_disk` path returned by the screenshot tool was not findable from the bash mounts available in this session.

So the run did the next-best thing: capture all 12 post permalinks, all 12 captions (the most useful ones at full length, others abridged where the grid alt text was the only source), the post dates where they were readable, the thumbnail dimensions where they were captured, and a triage of which posts represent meaningful new project clusters worth promoting into backlog items.

**Project clusters identified.** Three clusters of posts are concrete enough to warrant new backlog items:

1. **St Pete MLK + 26th mural sponsored by Hoka** (single post, DXJ5714AILj, posted 2026-04-15). Filed as `[CONTENT-NEW-2026-04-27-stpete-mlk-mural]`.
2. **First Watch chain murals across at least 3 locations** (4 posts: DXmGfFtgXvs Wisconsin, DXB7328uJwG 24-hour reel, DWn93GnCd-D Leander Texas reel, DWl1K3clcWV Leander Texas photo). Filed as `[CONTENT-NEW-2026-04-27-first-watch-chain]`.
3. **3rd Annual Fashion for Education event at Overspray, partnering All The World's Kids** (6+ posts spanning ig-001 / ig-002 / ig-004 / ig-005 plus watchlist entries DW3tTcRD8Ec and DWyhIdHAcze). Filed as `[CONTENT-NEW-2026-04-27-fashion-for-education]`.

A fourth cluster, the St Pete Running Co commercial mural (DW4euYauxhs), surfaced but is a single-post reference and may be the same project as the Hoka-sponsored MLK + 26th mural (the original poster who shared MLK + 26th was `@stpeterunningandcoffee`, which is suspiciously close to `@stpeterunningco`). Did not file a separate backlog item; called out in `drop.md` for Marianne to disambiguate.

**Files added:**
- `assets/images/social-drops/2026-04-27/drop.md` (full IG post inventory with metadata for the 12 most recent posts, plus a watchlist of positions 13-24, plus the four project clusters).

**Files changed:**
- `SITE-BACKLOG.md`: added 3 new P1 backlog items (`[CONTENT-NEW-2026-04-27-stpete-mlk-mural]`, `[CONTENT-NEW-2026-04-27-first-watch-chain]`, `[CONTENT-NEW-2026-04-27-fashion-for-education]`) immediately below RESEARCH-001 in the P1 section. Also added a brief 2026-04-27 update note inside the existing RESEARCH-001 item pointing at the new drop.md (no status change). "Last updated" line at the top of the file extended with a parenthetical noting which run touched it.

**Files NOT changed:**
- No image files were staged this run (the transport blocker section above explains why).
- No HTML or CSS was touched. Building is the other agent's job, per the brief.
- No existing backlog items had their statuses moved or "what changed" notes rewritten; only the in-place RESEARCH-001 update note was added.

**Verified:**
1. drop.md exists at the canonical path `assets/images/social-drops/2026-04-27/drop.md` and is internally consistent (12 ig-NNN entries match the 12 shortcodes captured from the grid).
2. The 3 new backlog items follow the brief's required `[CONTENT-NEW-YYYY-MM-DD-slug]` ID convention and carry track `content`, status `todo`, and the required Why / Photos / Suggested action lines.
3. None of the 3 new items overlap with any of the 6 existing AI-replacement targets in `AI-REPLACEMENT-CANDIDATES.md`. Specifically: portfolio-1 (PoE Garage), portfolio-2 (SHINE Festival), portfolio-3 (Fox 13 Feature), portfolio-4 (Restoring Vandalized Murals), hero-bg.png (sitewide hero), and services-bg.png (artists-at-work) all have specific subject criteria that none of today's 12 posts match. None of the 3 new items are filed as `[REPLACE-AI-*]` either, which is correct.
4. No em dashes in any copy authored this run (drop.md, the 3 backlog items, this WORK-LOG entry).

**Hard rule compliance:**
- Did not invent captions, dates, or client names. Where the IG post page exposed a `<time datetime>` attribute (e.g. DXJ5714AILj at 2026-04-15), the date is recorded exactly as the page reports it. Where the date wasn't readable from the page (most reels in this batch), the entry says approx-or-unknown. Where the caption was truncated in the grid alt text, the entry says so or notes "see caption" rather than guessing.
- Did not delete or rewrite any existing backlog item. The RESEARCH-001 update is appended; the rest of that item is untouched.
- Did not edit any HTML or CSS.
- Did not log in to any account (the user was already logged in via her existing Chrome session, which is the supported state per the brief).

**Judgment calls worth flagging:**
1. Filed the Hoka-sponsored MLK + 26th mural as a `[CONTENT-NEW-*]` item rather than a `[REPLACE-AI-*]` item. None of the 6 listed AI placeholders specifically call out a brand-sponsored St Pete street mural, so the swap path doesn't apply.
2. Did not file the position-13-24 watchlist entries as their own backlog items. They're listed in drop.md so the next research pass can promote them, but spinning up 12 more `[CONTENT-NEW-*]` items today would mostly add noise (several of those are no-caption reels with no obvious project tie). The 3 items I did file all have at least one named client, location, or partner.
3. Did not tear down the social-drops folder structure when no images landed. The 2026-04-27 folder contains only `drop.md`. That's intentional: the dated folder is the canonical record of what the daily run looked at, even when no images were transferred. Future runs should treat its presence as evidence the run occurred and the metadata is the authoritative log.
4. Did not pursue the screenshot fallback as a synthetic image source. Reasoning above. The trade-off was: lower-quality images that include IG chrome and would have to be hand-cropped, vs. a clean metadata record that lets Marianne grab the originals at full quality. The metadata record is more useful long-term.
5. Did not click links inside the IG or FB UIs (the modals, dropdowns, etc.) beyond what was needed to read the post grids and a few post pages. The page is logged in to Marianne's session and has admin tooling visible (Manage Page on FB, Switch into Vitale Bros.'s Page button, etc.). I avoided that surface entirely.

**Cross-session path note:** the brief's site-folder paths use slash-style. In this session the equivalent bash path is `/sessions/beautiful-inspiring-cori/mnt/Vitale Brothers/...`. All file edits this run were performed via the user-side path `C:\Users\mshaf\Documents\Overspray Art Space\vitale-website\vitale-new-site\`. No work was done in the session scratchpad.

**For Marianne to act on (optional, none of these block tomorrow's run):**
1. The 3 new backlog items above describe what the next builder run could do *if* photos land. The fastest unblock is a few right-click-saves on the IG posts called out in `drop.md` (especially DXJ5714AILj for the MLK + 26th mural and DXmGfFtgXvs for First Watch Wisconsin, since those are the highest-value individual photos). Drop them into the dated folder under any filename and the next builder run can pick them up.
2. If the @stpeterunningandcoffee vs @stpeterunningco distinction (DW4euYauxhs vs DXJ5714AILj) is relevant to the project taxonomy, a one-line confirm here will let the next run merge or split those.
3. If the @firstwatchmurals account is co-credited with another Vitale-family entity (suggested by the @middle_vitale_murals tag also appearing on the chain murals), confirm whether that's a sister brand with its own site or just an account run by the same crew. Decision affects whether the chain story sits inside Vitale Bros. or links out.

---

## 2026-04-27 (later): interactive session, BUILD-001 / DESIGN-001 / CONTENT-004 (partial) landed

This entry is outside the normal scheduled-task flow. After the no-op idle run earlier today, Marianne came online and asked for a prompt covering everything that needed her input. She answered four questions in one batch (BUILD-001, DESIGN-001, CONTENT-004, BUILD-004) which unblocked three items immediately and parked the fourth on a manual research step.

**BUILD-001 (done):** Marianne uses Cognito Forms (existing form key `7GILyqMqCEOzXnDEIPu9-w`, form id `1`) and gave me both the seamless and iframe versions of the embed. I wired the seamless version into `/contact.html`, replacing the entire native HTML form (name, email, phone, service select, message, submit button) with a single `<script src="https://www.cognitoforms.com/f/seamless.js" data-key="7GILyqMqCEOzXnDEIPu9-w" data-form="1"></script>`. Picked seamless over iframe because the iframe is fixed at 1066px tall and renders in its own document, so it doesn't inherit the page typography or palette and looks foreign next to the surrounding card. Seamless renders inline and inherits where it can. The card chrome (`.contact-form` padding, background, border, radius), the "Start Your Project" h2, and the contact-info side column were all preserved. Added a small `.contact-form__cognito` wrapper rule plus `.cog-cognito` / `.cog-form` overflow guards so the injected form stays within the card padding. Submission delivery, validation, success state, and notification email are all handled by Cognito on their end (no custom JS).

**DESIGN-001 (done):** Marianne picked Option A (Longevity first). Wired into `index.html`: kicker is now "St. Petersburg, FL, Est. 1992" (comma instead of em dash, per her preference), the four-line headline stack reads "Vitale Bros." / "Bringing Art" / "to the Community" / "Since 1992." with "Since 1992." carrying the `hero__title-accent` red treatment, and the subhead reads "Three decades of murals, live painting, and public art across St. Pete, Tampa, and beyond. A family studio that shows up, listens, and paints walls people want to stand in front of." The `<title>`, meta description, and the matching og / twitter title and description tags were all updated to mirror the new positioning. Mural slideshow, ken-burns animation, panel-behind-text treatment, scrim, slide dots, and CTAs preserved untouched.

**CONTENT-004 (partial):** Marianne picked Option B (Medium, ~95 words) for Johnny. Wired into `about.html`: a new `<p class="team-card__bio">` was added inside Johnny's team card after his role line, carrying the Option B copy verbatim from `draft-copy.md`. Sionna and Jason cards left as-is until their material lands. Added a `.team-card__bio` CSS rule (left-aligned text, top border separator, 1.7 line height, muted text color) and added `align-items: start;` to `.team__grid` so cards top-align. Johnny's card is now visibly taller than Sionna's and Jason's. That asymmetry is honest about the current state and self-corrects when their copy lands.

**BUILD-004 (still blocked):** Marianne thinks the studio video came from a Facebook reel but would have to find it. Item stays blocked. The status note in the backlog is unchanged; the Why line is updated to mention "find the Facebook reel" so the dependency is more specific.

**Files changed:**
- `index.html` (page title, meta description, og:title, og:description, twitter:title, twitter:description, hero kicker, hero headline lines, hero description)
- `about.html` (added `<p class="team-card__bio">` inside Johnny's team card)
- `contact.html` (replaced entire `<form class="contact-form">` and its nested fields with a `<div class="contact-form">` carrying a `<div class="contact-form__cognito">` wrapper holding the Cognito seamless script tag)
- `styles/index.css` (added `align-items: start;` to `.team__grid`; added new `.team-card__bio` rule below `.team-card__role`; added new `.contact-form__cognito` rule plus a `.cog-cognito, .cog-form` max-width guard below `.contact-form__title`)
- `SITE-BACKLOG.md` (BUILD-001 status from `blocked` to `done`; DESIGN-001 status from `done (draft stage)` to `done`; CONTENT-004 status from `done (partial, draft stage)` to `partial`; BUILD-004 dependency line updated to name the Facebook reel hunt; "Blocked-on-Marianne summary" rewritten to drop BUILD-001 and add CONTENT-004 explicitly; "Last updated" bumped to 2026-04-27)

**Files added:** none.

**Verified:**
- CSS brace count: 383 open / 383 close. Balanced after the three new rules and the one property addition.
- No em dashes introduced in any copy authored this session (hero, meta tags, bio paragraph, backlog notes, work log).
- Hero copy matches Option A exactly as drafted in `draft-copy.md`.
- Johnny bio matches Option B exactly as drafted in `draft-copy.md` (no edits to the source text).
- Cognito embed script tag is the seamless variant with the correct data-key (`7GILyqMqCEOzXnDEIPu9-w`) and data-form (`1`) values that Marianne provided.

**Judgment calls worth flagging:**
1. Picked seamless over iframe for Cognito without a follow-up question. Reasoning is in the BUILD-001 backlog note. If Marianne wants the iframe instead (simpler isolation, no style-bleed risk), it's a one-block swap.
2. Did NOT add a Cognito-side custom style override to make their default submit button match the site's `.btn--primary` red. That kind of visual matching lives in the Cognito Forms dashboard's custom CSS panel, not in the site repo, so it's a Marianne task if she wants pixel-perfect alignment between her contact form and the rest of the site's button treatment.
3. Did NOT add a "Service Needed" select to the Cognito form. The original native form had one (Commercial Mural, Residential Mural, Live Painting Event, Branding & Design, Signs & Canvas, Other) but the Cognito form schema is owned by Marianne in their dashboard. Adding it on Cognito's side is a one-minute job for her; doing it from the repo would require us to override their form, which defeats the point of using Cognito.
4. Picked the team-card-internal placement for Johnny's bio over a separate "Founder Spotlight" block above the team grid. The internal placement keeps the visual taxonomy ("here's the crew, with details") rather than splitting it into two narratives. Cost is the height asymmetry between Johnny's card and the other two until Sionna and Jason copy lands. Worth the trade.
5. The `align-items: start;` change to `.team__grid` affects every page that uses the team grid, which is just `about.html` (no other page references it). On mobile the grid collapses to 1 column anyway, so the change is invisible there.
6. Did NOT touch the existing em dashes elsewhere on the site (the BUILD-012 follow-up flagged a global em-dash cleanup as a separate item). The new copy is em-dash-free; the existing pre-existing em dashes in other pages stay until Marianne explicitly asks for a sweep.

**For Marianne to verify before next deploy:**
1. Open `index.html` and scroll the hero through all 4 mural slides. The new headline ("Bringing Art / to the Community / Since 1992.") should read cleanly across all four. Especially watch the Retro Elvis frame (brightest of the four).
2. Open `contact.html` and submit a test entry through the Cognito form. Confirm it lands in the inbox configured in your Cognito dashboard, the success page reads right, and the notification email goes where you want it. Add a "Service Needed" select on the Cognito side if you want to preserve that routing field from the old form.
3. Open `about.html` and look at the team grid. Johnny's card has the new bio paragraph below his role; Sionna and Jason cards are unchanged. The cards top-align rather than stretch to equal heights, so Johnny is taller until their bios land. Confirm the visual feels right.
4. After deploy, do a fresh paste of `https://vitalebrothers.com/` into Slack or LinkedIn and confirm the new og:title and og:description render in the link preview.

**Blocked items remaining:** BUILD-004 (Facebook reel video), CONTENT-003 (crew headshots), CONTENT-004 (Sionna and Jason bio material), RESEARCH-001 (manual IG session), RESEARCH-002 (manual FB session), BUILD-009 (client logo rights). Six items, all needing a small action from Marianne.

---

## 2026-04-27: idle run, no autonomous work remaining (post-conversion verification)

No-op run. Same outcome as the 2026-04-26 idle run (zero `todo` items, all remaining work blocked on Marianne), but with one extra wrinkle worth flagging: the major no-build conversion that landed late on 2026-04-26 happened AFTER the prior idle run's defensive check, so several of that run's "all good" claims (in particular "all 21 content pages still inherit the shared nav and footer partials") were already stale by the end of the same day. This run re-ran the defensive check against the current post-conversion reality so today's "nothing to do" verdict is grounded in what actually exists on disk now, not what existed before the conversion.

**Backlog state at start of run:** zero items carry status `todo`. The 23 backlog items are still in one of three states:

1. **Done** (16 items): CONTENT-001 (partial), BUILD-002, DESIGN-001 (draft), BUILD-003, DESIGN-002, DESIGN-003, CONTENT-002, BUILD-005, BUILD-006, BUILD-007, CONTENT-004 (partial draft), BUILD-010, BUILD-011, BUILD-012, BUILD-013, BUILD-014.
2. **Blocked on Marianne** (5 items): BUILD-001 (contact form handler), BUILD-004 (studio video source), CONTENT-003 (crew headshots), RESEARCH-001 (manual IG session), RESEARCH-002 (manual FB session).
3. **Partial, also blocked on Marianne** (2 items): BUILD-008 (filter chips cleaned, 12-to-20 item portfolio expansion still parked behind RESEARCH-001), BUILD-009 (waiting on client logo usage rights).

Per the scheduled-task rule "If nothing is actionable (all remaining todos are blocked), write a WORK-LOG entry saying so and stop," that's what this run is doing.

**Defensive site-state check (post-conversion).** Re-verified the things that the 2026-04-26 conversion may have invalidated. All checks held:

1. CSS brace count in `styles/index.css` is still balanced at 380 / 380 (the conversion didn't touch the stylesheet).
2. Zero leftover `<!--#include nav-->` or `<!--#include footer-->` markers across the 21 content pages. The conversion successfully inlined both partials into every page. (This invalidates the prior idle-run check that claimed pages still inherit the shared nav and footer partials; that's no longer the mechanism. The partials at `_partials/nav.html` and `_partials/footer.html` are now decorative source-of-truth files, not consumed at view time.)
3. Zero remaining `type="module"` attributes on the `js/main.js` script tag across the 21 content pages. The conversion follow-up patch (stripping `type="module"` so `file://` browsers will load the script) is intact.
4. `--color-text-subtle` is still `#988b7e` in `:root`, so the BUILD-014 AA contrast fix from 2026-04-25 is intact.
5. No malformed HTML, no missing CSS file, no broken-looking image references introduced by the conversion. Each of the 21 pages closes cleanly with `</body></html>`.
6. The 6 blocked items in the backlog summary at the bottom of `SITE-BACKLOG.md` still match the 6 blocked items earlier in the document.

**Files added:** none.

**Files changed:** none. Site tree untouched. Backlog untouched (no item statuses moved, no "what changed" notes added). The "Last updated" date in `SITE-BACKLOG.md` was deliberately left at 2026-04-25, since nothing about the backlog itself changed and bumping the date would falsely imply a status update.

**Verified:**

1. No site files were modified during this run.
2. CSS brace count still balanced (380 open / 380 close).
3. All 21 content pages have inlined nav and footer (zero include markers remaining).
4. All 21 content pages load `js/main.js` without `type="module"`.
5. No em dashes in any copy authored this run (this WORK-LOG entry).

**Judgment calls worth flagging:**

1. The strictest reading of the scheduled-task rules is "stop and write a WORK-LOG entry." Same set of off-rule alternatives I considered last run was considered again and rejected for the same reasons: (a) global em-dash cleanup across page titles (BUILD-012 follow-up explicitly says "flag it as a separate item" if Marianne wants it, so it's not authorized), (b) pre-staging contact form HTML for BUILD-001 (would have to be undone if Marianne picks a handler other than the one I guessed), (c) drafting Sionna and Jason bios from nothing (the no-fabrication rule applies to copy too).
2. Did not bump the "Last updated" date in `SITE-BACKLOG.md`. Same reasoning as the prior idle run: the convention is to bump that date when statuses or notes move. Nothing in the backlog moved, so the date stays at 2026-04-25 to remain truthful about when item statuses were last touched.
3. Did not run the static accessibility audit, link audit, or contrast audit again. The site files haven't changed since they last ran clean (BUILD-010, BUILD-014), so re-running is busywork. If the no-build conversion had touched any HTML or CSS structure (it didn't beyond inlining and path rewrites), I would re-run them.
4. Considered cleaning up the stale `dist/` folder and `.backup-preinclude/` folder that the no-build conversion notes flagged as "stale relative to the source now, but were left in place rather than deleted." Decided against: the no-deletions constraint is explicit, the conversion notes themselves said "I'd want your sign-off before doing any of that," and the folders take no real footprint relative to `node_modules/`. If Marianne wants them gone, she can say so.

**No new blockers introduced.** The 5 blocked-on-Marianne items and the 2 partial-blocked items remain exactly as they were at the start of the run.

**For Marianne to unblock the next active run, any one of the following gives the next scheduled run real work to do** (unchanged from the previous idle-run summary, repeated here so this entry stands alone):

1. **BUILD-001 (contact form handler):** pick Formspree, Netlify Forms, Basin, or a custom endpoint. Cheapest is Formspree (free tier covers up to 50 submissions per month). Send the endpoint URL once you have one and the next run can wire `<form action>`, add a success state, and add a honeypot field.
2. **BUILD-004 (studio video source):** confirm whether the studio intro video lives on YouTube (the `@johnvitale8133` channel) or as a direct video file. If YouTube, the next run can drop in an embed with a poster frame. If a file, point me at it and I can wire a muted autoplay version on the homepage or About page.
3. **CONTENT-003 (crew headshots):** drop 3 headshots (Johnny, Sionna, Jason) into `assets/images/crew/` (or anywhere; I'll move them). Square framing preferred but not required; the next run will crop and optimize.
4. **CONTENT-004 (Sionna and Jason bios):** in `draft-copy.md` there are bullet-list templates for both bios. Send years in the craft, specialty, signature project, last name (if shown on the site), and an optional quote, and the next run will draft them in the same three-options structure as Johnny's. Also: pick A, B, or C for Johnny's bio, or redirect.
5. **DESIGN-001 (hero copy):** in `draft-copy.md` there are three hero options. Reply "go with A" (or B or C, or a redirect) and the next run can wire the chosen option into `index.html` plus the meta description.
6. **RESEARCH-001 (Instagram research session):** when you have time, hop into Chrome with the extension active, browse `instagram.com/vitalebros`, and save the top 10 to 15 recent project images plus captions and locations. The next run can then expand the portfolio grid, restore the Live & Events and Community & Civic filter chips, and port the prototype's 12-column span grid (the rest of BUILD-008).
7. **RESEARCH-002 (Facebook research session):** same shape as RESEARCH-001 but for older work that may live on FB but not IG.
8. **BUILD-009 (client logos):** confirm which named commercial clients (Pesky Pelican, The Playhouse, Bayfront Health, etc.) the studio has logo usage rights for, and the next run can build the "Trusted by" client strip on the homepage just below the existing press credentials bar.

If you'd rather have a small piece of polish work done that is currently outside the backlog, the same two reasonable candidates the prior idle run flagged are still valid: (a) global em-dash cleanup across page titles and meta descriptions (called out in the BUILD-012 follow-up), and (b) the runtime-only half of BUILD-014 that needs a real browser (keyboard nav focus-ring check, Lighthouse / axe pass on the homepage and one article page). I won't touch either without an explicit go-ahead, but they're the lowest-friction next moves if you want to keep momentum without unblocking a heavier item.

**Cross-session path note:** the scheduled task brief lists the site folder as `/sessions/trusting-zen-fermi/mnt/vitale-new-site/`, but in this session that path is `/sessions/confident-admiring-einstein/mnt/vitale-new-site/`. The leading session segment changes per scheduled-task invocation; the folder contents are the same persistent user-mounted directory. Site reads and edits this run were performed against the file path `C:\Users\mshaf\Documents\Overspray Art Space\vitale-website\vitale-new-site\`, which is the canonical user-side path. No work was done in any session-scratchpad location.

---

## 2026-04-26 (later): no-build conversion, all 21 pages now openable by double-click

This entry is outside the normal scheduled-task backlog flow. Marianne flagged a real pain point in conversation: opening any HTML file directly in a browser produced an unstyled wall of text, because (a) the site used absolute paths like `/styles/index.css` that fail under `file://` and (b) the `<!--#include nav-->` and `<!--#include footer-->` markers stayed as raw HTML comments without the build step to expand them. She asked whether to throw the site out and start over in another tool. We agreed instead to do a one-pass conversion: switch every absolute path to a depth-aware relative path, and inline the nav and footer partials directly into each page. The partials system was a clever convenience, but the cost was that nothing was viewable without running the build. With ~21 pages and edits running roughly weekly, inlining is a fine tradeoff.

**What I did.** Wrote a single Python conversion script (kept in the session scratchpad, not committed) that walks all 21 content pages, computes each one's depth (0 for root pages, 1 for `services/*`), inlines the nav and footer partials with depth-aware paths, and rewrites every absolute `/...` value in `href`, `src`, `action`, `poster`, and `srcset` attributes to a path relative to the page's own folder. The OG / Twitter social meta tags (`og:url`, `og:image`, `twitter:image`) keep absolute `https://` URLs by design, so the script masks them before the rewrite and restores them after. `mailto:`, `tel:`, `data:`, `#anchor`, `http(s)://`, and `//protocol-relative` URLs are all left alone. The bare home href `"/"` is rewritten to `"index.html"` (or `"../index.html"` from a services page) so a double-click resolves correctly. Ran the script once across all 21 pages.

**What changed in the file tree:**
- All 5 top-level pages (index, about, projects, contact, artbeat).
- All 5 project detail pages (rays, bucs, cowboy, backyard-escapes, retro).
- All 6 ArtBeat article pages (catalyst-shine, cltampa-restore, eyes-tampa, fox13-paint, ilovetheburg-patients, tbt-blue-goose).
- All 4 service pages (commercial, residential, live-events, community-civic).
- The 404 page.

**What did NOT change:**
- `styles/index.css` (the CSS itself was untouched, brace count still 380 / 380).
- `js/main.js` (no edits, still loads via the relative path on every page now).
- `_partials/nav.html` and `_partials/footer.html` (left in place, intentionally; if Marianne ever wants to revive the partial system, the source of truth still exists).
- `build.js` and `serve.js` (they still work; the include expansion is now a no-op pass-through, so `npm run build` produces a `dist/` folder identical to the source minus dotfiles, which is harmless).
- `package.json` and `vite.config.*` (no Vite is involved, despite the prior work logs sometimes calling the system "Vite includes". The actual setup was a 90-line Node script in `build.js`).
- The `dist/` folder and `.backup-preinclude/` folder are stale relative to the source now, but were left in place rather than deleted.
- `SITE-BACKLOG.md` was not touched. This work was not a backlog item.

**Verified:**
- Zero `<!--#include` markers remain in any of the 21 content pages.
- Zero leftover absolute paths in `href` / `src` / `action` / `poster` / `srcset` attributes across the 21 pages, with the exception of the OG / Twitter meta tags which intentionally keep absolute URLs.
- Each of the 17 root pages references `styles/index.css` and `js/main.js` (no leading slash, no `../`).
- Each of the 4 services pages references `../styles/index.css` and `../js/main.js`.
- Each of the 21 pages contains exactly one inlined `<nav class="nav"` and exactly one inlined `<footer class="footer"`.
- Spot-checked 3 pages (one root page, one services page, one project detail page) end-to-end: every internal nav link, footer link, and asset reference resolves to a real file on disk relative to that page's location.
- CSS brace count in `styles/index.css` still balanced at 380 / 380.

**Judgment calls worth flagging:**
1. Indentation got slightly compounded inside the inlined nav and footer (the partials had their own 2-space leading indent, and the include marker was on a 2-space line in the consuming page, so inlined lines now sit at 4 spaces in some places). Functionally identical, only a cosmetic artifact, won't affect rendering. I considered running an indentation pass but decided not to, since (a) it'd make the diff harder to read at review time and (b) it doesn't matter for the actual site.
2. The "active nav" highlight is set at runtime by `initActiveNav()` in `js/main.js` based on URL path. That logic was written for absolute paths like `/about.html`, which is also what the URL bar will show when served from a real host. For local file:// preview, the URL will be the on-disk path, so the active-nav highlight may not match what you see when deployed. This is cosmetic, only affects file:// preview, and resolves itself the moment the site is served from any HTTP source. If it bothers you in local preview, I can patch `initActiveNav()` to also check filename suffixes.
3. The `<a href="/" class="nav__logo">` home link became `<a href="index.html">` on root pages and `<a href="../index.html">` on services pages. That works on file:// and on a real host. The only edge case is if the host ever rewrites trailing slashes ("vitalebrothers.com/" without a path), the relative form still resolves correctly because browsers treat `index.html` as relative to the current URL.
4. Did NOT delete `_partials/`, `dist/`, `build.js`, `serve.js`, `vite-related node_modules`, or `.backup-preinclude/`. The "no deletions" constraint applies, plus several are still useful: `_partials/` is the source of truth if Marianne wants to re-introduce the partial system; `build.js` and `serve.js` still work if she wants a local dev server; the backup folder is exactly what we'd grab from if she wanted to revert.
5. Did NOT touch any text content. Hero copy, FAQ copy, testimonials, the press bar, and so on are all unchanged.

**For Marianne to verify:**
1. Open `index.html` directly in a browser by double-clicking. It should now look correct: warm dark palette, hero with the panel-behind-text treatment, press bar, services grid, process steps, featured work, testimonials, Instagram tiles, FAQ, CTA, footer. The mural slideshow should crossfade. The FAQ accordion should open and close on click.
2. Open `services/commercial.html` directly. Same thing should happen with `../`-prefixed assets resolving from the services subfolder.
3. Click around: the nav links, the home logo, the "View Our Work" button, the press chips, the service cards, the work cards, all should navigate to other on-disk pages without 404ing.
4. If it still looks broken, hit Ctrl+Shift+I (or Cmd+Option+I on Mac) and look at the Console and Network tabs. Any 404s on `styles/index.css`, `js/main.js`, or any image will tell us what's wrong, and we can fix it from there.
5. The next backlog work session can keep using the existing flow exactly as before. The conversion did not touch any of the still-blocked items, the in-flight follow-ups, or the backlog file itself.

**Optional cleanup later (none of this is urgent):**
- Once you're confident the no-build flow is what you want, the `dist/` folder, the `.backup-preinclude/` folder, and the `node_modules/vite` directory can come out to slim the repo. I'd want your sign-off before doing any of that.
- The `build.js` and `serve.js` scripts can also retire, or stay as a fallback local dev server. Your call.
- `_partials/nav.html` and `_partials/footer.html` are now decorative. If you want one shared source again, I can write a tiny "re-bake" script that walks the inlined pages and offers to re-inline from the partials when you want to push a nav/footer change to all 21 pages at once.

**Follow-up after first browser preview (same day):** Marianne reported that double-clicking the file still produced mostly-blank content even after the conversion. Root cause was the `<script src="js/main.js" type="module">` tag. Browsers refuse to load ES modules over the `file://` protocol (CORS for module scripts), so `js/main.js` never ran. The site relies on JS to add a `reveal--visible` class to every `.reveal` element via IntersectionObserver, and the base `.reveal` rule sets `opacity: 0` until that class lands. With JS blocked, every reveal-marked section stayed invisible. Inspected `js/main.js` and confirmed it has zero `import` / `export` statements, so the `type="module"` attribute was never load-bearing in the first place. Patched all 21 pages by stripping the ` type="module"` attribute from the main.js script tag. After patch: every page has a plain `<script src="js/main.js"></script>` (or `<script src="../js/main.js"></script>` from the services pages), which browsers load just fine over `file://`. Confirmed zero remaining occurrences of `type="module"` across the 21 content pages. Reload `index.html` in the browser; the `.reveal` content should fade in on scroll, the hero slideshow should crossfade every 6s, the FAQ accordion should toggle, and the magnetic-button hover should work. If it still looks blank in any specific section, send a screenshot and the DevTools Console output and we can trace from there.

---

## 2026-04-26: idle run, no autonomous work remaining

No-op run. Confirmed there is no actionable work in the backlog and exited without touching any site files.

**Backlog state at start of run:** zero items carry status `todo`. Every one of the 23 backlog items is now in one of three states:

1. **Done** (16 items): CONTENT-001 (partial), BUILD-002, DESIGN-001 (draft), BUILD-003, DESIGN-002, DESIGN-003, CONTENT-002, BUILD-005, BUILD-006, BUILD-007, CONTENT-004 (partial draft), BUILD-010, BUILD-011, BUILD-012, BUILD-013, BUILD-014.
2. **Blocked on Marianne** (5 items): BUILD-001 (contact form handler choice), BUILD-004 (studio video source), CONTENT-003 (crew headshots), RESEARCH-001 (manual IG session), RESEARCH-002 (manual FB session).
3. **Partial, also blocked on Marianne** (2 items): BUILD-008 (filter chips cleaned, the 12 to 20 item portfolio expansion is parked behind RESEARCH-001), BUILD-009 (waiting on client logo usage rights).

The previous run (2026-04-25) closed with the explicit prediction "There is essentially no autonomous work remaining until at least one blocker clears." That prediction held. Per the scheduled-task rule "If nothing is actionable (all remaining todos are blocked), write a WORK-LOG entry saying so and stop," I'm doing exactly that.

**Defensive site-state check.** Before writing this entry I ran a small sanity check against the claims left by the 2026-04-25 run, since the longer the backlog sits between active runs the more useful it is to confirm nothing has drifted. All four checks held: CSS brace count balanced at 380 open / 380 close in `styles/index.css`; the `--color-text-subtle` token in `:root` is still `#988b7e`; all 21 content pages (5 top-level, 5 project detail, 6 ArtBeat articles, 4 service pages, plus 404) carry both `<!--#include nav-->` and `<!--#include footer-->`; `_partials/footer.html` still uses `<h3>` for the `.footer__col-title` elements (the heading-hierarchy fix from BUILD-014 is intact). One adjustment to the previous run's bookkeeping: the 2026-04-22 work log claimed "exactly 1 CSS link" per content page, but each page actually has 2 (the site stylesheet at `/styles/index.css` and the Font Awesome CDN at `cdnjs.cloudflare.com`). The 2-link layout is correct and has been in place from the start of the rebuild; the 2026-04-22 claim was imprecise wording, not a regression. Noting it here so future runs don't get tripped up by the same gotcha.

**Files added:** none.

**Files changed:** none. Site tree untouched. Backlog untouched (no item statuses moved, no "what changed" notes added). The "Last updated" date in `SITE-BACKLOG.md` was deliberately left at 2026-04-25, since nothing about the backlog changed and bumping the date would falsely imply a status update.

**Verified:**
- No site files were modified during this run.
- CSS brace count still balanced (380 open / 380 close).
- All 21 content pages still inherit the shared nav and footer partials.
- No em dashes in any copy authored this run (this WORK-LOG entry).

**Judgment calls worth flagging:**
1. The strictest reading of the scheduled-task rules is "stop and write a WORK-LOG entry." I considered three off-rule alternatives and rejected each: (a) doing the global em-dash cleanup across page titles and descriptions that BUILD-012's follow-up flagged, but the follow-up explicitly says "flag it as a separate item" if Marianne wants it, so it's not authorized work; (b) pre-staging the contact form HTML for BUILD-001 (Formspree, Netlify Forms, and Basin all have slightly different markup), but committing to one handler ahead of Marianne's pick would just have to be undone if she chose differently; (c) sketching draft bios for Sionna and Jason in `draft-copy.md` to unblock CONTENT-004, but the rule "If images/content aren't present, don't substitute random stock; mark the task blocked instead" applies to copy too, and inventing biographical details for real people is exactly what that rule is meant to prevent.
2. Did not bump the "Last updated" date in `SITE-BACKLOG.md`. The convention across previous runs has been to bump the date when statuses or notes move. This run moved nothing in the backlog itself, so the date stays at 2026-04-25 to remain truthful about when item statuses were last touched.
3. Did not add the "2 CSS links per page is normal" detail to the backlog. It's a footnote about prior work-log accuracy, not a backlog change, so it lives only here in the work log.

**No new blockers introduced.** The 5 blocked-on-Marianne items and the 2 partial-blocked items remain exactly as they were at the start of the run.

**For Marianne to unblock the next active run, any one of the following will give the next scheduled run real work to do:**
1. **BUILD-001 (contact form handler):** pick Formspree, Netlify Forms, Basin, or a custom endpoint. Cheapest and fastest is Formspree (free tier covers up to 50 submissions per month). Once you say "use Formspree" and create an account, send the form endpoint URL and the next run can wire `<form action>`, add a success state, and add a honeypot field.
2. **BUILD-004 (studio video source):** confirm whether the studio intro video lives on YouTube (the `@johnvitale8133` channel) or as a direct video file. If YouTube, the next run can drop in an embed with a poster frame. If a file, point me at it and I can wire a muted autoplay version on the homepage or About page.
3. **CONTENT-003 (crew headshots):** drop 3 headshots (Johnny, Sionna, Jason) into `assets/images/crew/` (or anywhere; I'll move them). Square framing is preferred but not required; the next run will crop and optimize. Studio shots and action shots both work.
4. **CONTENT-004 (Sionna and Jason bios):** in `draft-copy.md` there are bullet-list templates for both bios. Send years in the craft, specialty, signature project, last name (if shown on the site), and an optional quote, and the next run will draft them in the same three-options structure as Johnny's. Also: pick A, B, or C for Johnny's bio, or redirect.
5. **DESIGN-001 (hero copy):** in `draft-copy.md` there are three hero options. Reply "go with A" (or B or C, or a redirect) and the next run can wire the chosen option into `index.html` plus the meta description.
6. **RESEARCH-001 (Instagram research session):** when you have time, hop into Chrome with the extension active, browse `instagram.com/vitalebros`, and save the top 10 to 15 recent project images plus captions and locations. The next run can then expand the portfolio grid, restore the Live & Events and Community & Civic filter chips, and port the prototype's 12-column span grid (the rest of BUILD-008).
7. **RESEARCH-002 (Facebook research session):** same shape as RESEARCH-001 but for older work that may live on FB but not IG.
8. **BUILD-009 (client logos):** confirm which named commercial clients (Pesky Pelican, The Playhouse, Bayfront Health, etc.) the studio has logo usage rights for, and the next run can build the "Trusted by" client strip on the homepage just below the existing press credentials bar.

If, instead, you'd like a small piece of polish work done that is currently outside the backlog, two reasonable candidates I noticed while reviewing the prior runs are: (a) a global em-dash cleanup across page titles and descriptions (called out in the BUILD-012 follow-up), and (b) the runtime-only half of BUILD-014 that needs a real browser (keyboard nav focus-ring check, plus a Lighthouse / axe pass on the homepage and one article page). I won't touch either without an explicit go-ahead, but they're the lowest-friction next moves if you want to keep momentum without unblocking a heavier item.

---

## 2026-04-25: WCAG contrast audit, subtle-text fix, BUILD-004 status cleanup

Very small run. Most of the backlog is either `done` or `blocked` on Marianne. The two pieces of actionable work this run were (a) a status accuracy fix on BUILD-004 (it was carrying `todo` despite the description naming Marianne as the dependency) and (b) the color-contrast portion of the BUILD-014 follow-up, which is the only one of the three remaining accessibility runtime checks that doesn't actually need a browser (it's static math on the design tokens).

- **BUILD-004 (todo to blocked):** Status was inconsistent with the description. The Why/Blocked-on lines clearly named Marianne as the gate (she needs to confirm whether the studio video lives on YouTube or as a direct file), but the status field still read `todo`, which made it look pickable on a fast scan of the P0 list. Bumped to `blocked`. No code changed. This brings the P0 tier to a clean state: 5 of 6 P0 items are `done`, 1 is `blocked` on Marianne (BUILD-001 contact form handler), and BUILD-004 is the second `blocked`. Nothing in P0 is actionable without her input.
- **BUILD-014 (contrast portion of the follow-up, done):** Ran a static WCAG 2.1 contrast audit over the design tokens in `styles/index.css`. Computed luminance and contrast ratios for the 20 most-used text-on-surface pairs plus 5 common translucent overlays (the `rgba(255,255,255,0.65)` muted variant on dark, etc.). Body text on every dark surface clears AAA (16.76:1 down to 13.48:1), ink on cream clears AAA, `--color-text-muted` on dark clears AA, white on `--color-primary` button label clears AA, `--color-primary-dark` on cream and white both clear AA or better. Three pairs were below the AA-normal bar: (a) `--color-text-subtle` (`#5a5249`) on `--color-bg` came in at 2.44:1 (FAIL), (b) `--color-primary` (`#d91e25`) on dark at 3.70:1 (AA-Large only), (c) `--color-primary` on cream at 4.31:1 (AA-Large only). Fix: bumped `--color-text-subtle` from `#5a5249` to `#988b7e`. New value lands at 5.63:1 on `--color-bg` (the footer surface) and 5.23:1 on `--color-bg-card` (the blog-card surface), clearing AA on every dark surface where the token is actually used (footer copyright text, footer address span in the partial, blog-card meta line on artbeat, contact-form placeholders). Hue stays in the same warm sepia family, just lifted in luminance, so the visual change is "the small print is a little easier to read" rather than "the palette shifted." Token still reads visibly subtler than `--color-text-muted` (`#9a8f80`, 5.89:1 on bg), preserving the three-step text hierarchy the site relies on. The two `--color-primary` low-contrast pairs (red on dark, red on cream) were left as-is: they are only used on display-size headings, button surfaces, hover accents, and section labels (all of which qualify as AA-Large per WCAG, which 3.70:1 and 4.31:1 both clear). They should not be used for body-size text. The audit script is saved at `/sessions/great-tender-clarke/mnt/outputs/contrast.py` so it can be re-run after any future palette change.

**Files added:**
- None inside the site tree. Audit script lives at `/sessions/great-tender-clarke/mnt/outputs/contrast.py` (scratchpad, not committed).

**Files changed:**
- `styles/index.css` (one line: `--color-text-subtle` from `#5a5249` to `#988b7e`)
- `SITE-BACKLOG.md` (BUILD-004 status from `todo` to `blocked` with a one-line note; BUILD-014 picked up a `What changed (2026-04-25)` bullet covering the contrast audit and fix; the existing follow-up was edited so the contrast item is no longer listed as outstanding, with keyboard nav and Lighthouse / axe still flagged; "Last updated" bumped to 2026-04-25)

**Verified:**
- CSS brace count still balanced (380 open / 380 close) after the one-line token change.
- Re-ran the audit against the new `#988b7e` value: footer copyright on `#141210` 5.63:1 AA, footer address span on `#141210` 5.63:1 AA, blog-card meta on `#1c1a17` 5.23:1 AA. All three AA passes confirmed.
- New token value still reads subtler than `--color-text-muted` (5.89:1) and brighter than `--color-text` (16.76:1), so the three-tier text hierarchy is intact.
- Confirmed the four real usages of `--color-text-subtle` in the site tree: `_partials/footer.html` (inline style on the address span), `styles/index.css` line 1289 (`.footer__copyright`), line 1573 (`.blog-card__meta`), line 1687 (`.contact-form__*::placeholder`). The dist/ and .backup-preinclude/ matches are build artifacts and historical backups, not edited.
- No em dashes in any of the copy authored this run (BACKLOG note, WORK-LOG entry, or comments).

**Judgment calls worth flagging:**
1. Picked `#988b7e` over a brighter alternative like `#9a8d80` (which clears AA with more headroom) because `#9a8d80` is only 2 hex digits away from `--color-text-muted` (`#9a8f80`, 5.89:1) and would erase the visual distinction between the muted and subtle tiers. `#988b7e` keeps a clear gap (5.23 to 5.63 for subtle, 5.47 to 5.89 for muted) while still clearing AA everywhere the token is actually used.
2. Did not touch `--color-primary` even though red-on-dark (3.70:1) and red-on-cream (4.31:1) miss the AA-normal threshold. Those two pairings are used only at display sizes (hero headlines, section labels with large letterspacing, big button surfaces, hover accents), which qualify as "large text" per WCAG and clear the 3.0:1 large-text bar. Touching the brand red would shift the studio's visual identity, which is a Marianne decision rather than an accessibility fix. Worth raising as a separate backlog item if she wants the brand red to clear AA at body-size text.
3. Did not promote the audit script into the site tree. It's a one-off check; running it after future palette changes is a copy-and-run, and committing a small Python file into a Vite/HTML repo just adds noise.
4. Considered shifting the form placeholder rule to use `--color-text-muted` instead of `--color-text-subtle` so the placeholder is brighter still. Decided against: WCAG 1.4.3 explicitly exempts placeholder text from contrast requirements (it's "incidental"), and the placeholder being slightly subtler than the entered value is the standard convention. The new `#988b7e` already raises the placeholder contrast from 2.44:1 to 5.23:1, which is comfortably readable. Leaving it alone.

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne. After this run, the entire backlog is in one of three states: done, blocked on Marianne, or done-partial-with-Marianne-follow-up. There is essentially no autonomous work remaining until at least one blocker clears.

**For Marianne to review before next deploy:**
1. Open `index.html` and scroll to the footer. The copyright line and the "St. Petersburg, FL" address span should look slightly brighter and easier to read against the dark footer than before. Same on every other page (the footer is a shared partial).
2. Open `artbeat.html` and look at the small uppercase meta line under each blog card title (publication name, date, etc). It should also read slightly brighter.
3. Open `contact.html` and check the form input placeholder text. Should also be more legible.
4. Decide on the brand-red question. Currently `--color-primary` (`#d91e25`) is used for headlines, large buttons, and accents, all of which clear WCAG AA-Large. If she ever wants to use red for body-size text, the token would need to shift to `--color-primary-dark` (`#a81217`, which already clears AA at 7.60:1 on white) or to a new mid-tone. Not urgent.
5. The remaining BUILD-014 runtime checks (keyboard nav, Lighthouse / axe) still want a proper in-browser pass. Both need a real browser, neither needs me.
6. Run `npm run build` (or `npm run dev`) locally to confirm the Vite include pipeline still resolves cleanly. Only one CSS line changed this run, so nothing structural should have shifted.

---

## 2026-04-24: project filter chip cleanup (partial BUILD-008)

Very small run. Almost every backlog item is either `done`, `blocked` on Marianne, or in a draft state waiting on her to pick an option. The only backlog item not fully blocked that still had actionable work was BUILD-008, and only the filter chip half of it (not the portfolio expansion or the 12-column grid port, both of which depend on RESEARCH-001).

- **BUILD-008 (partial, done for now):** Removed the "Live Painting" (`data-filter="live"`) and "Signs & Canvas" (`data-filter="signs"`) filter chips from `projects.html`. Both chips were filtering to zero matching items against the current 5-project portfolio, which made the chip row an empty-state trap for any visitor who clicked them. The remaining chips are All Projects (5), Commercial (4: Rays, Bucs, Cowboy, Retro & Pin-Up), Residential (1: Backyard Escapes). The filter handler `initProjectsFilter()` in `js/main.js` was not touched; it iterates `.filter-btn` elements at runtime and doesn't care how many chips exist. No CSS change needed. The card `data-category` values were intentionally not re-shuffled into more granular buckets; re-categorization waits until RESEARCH-001 is unblocked and more items land, at which point the filter row can be expanded back to align with the service-page taxonomy (Commercial, Residential, Live & Events, Community & Civic).

**Files added:** none.

**Files changed:**
- `projects.html` (removed the two zero-result filter chips; rest of the file is unchanged)
- `SITE-BACKLOG.md` (BUILD-008 status moved from "done-in-prototype, todo-in-real-site" to "partial", with a what-changed note and a follow-up capturing what still depends on RESEARCH-001; "Last updated" bumped to 2026-04-24)

**Verified:**
- `projects.html` structure intact: 3 filter chips remain (All Projects, Commercial, Residential), all 5 `.work-card` entries preserved, nav and footer partials unchanged.
- `js/main.js` `initProjectsFilter()` works by reading the chips from the DOM at runtime, so removing the two empty chips needs no JS change.
- No em dashes in any copy touched this run (backlog note, work log entry, or HTML).
- No new blockers introduced. Existing blocked items (BUILD-001, BUILD-004, CONTENT-003, RESEARCH-001, RESEARCH-002, BUILD-009) still waiting on Marianne.

**Judgment calls worth flagging:**
1. The simplest fix would have been renaming "Live Painting" to "Live & Events" (to align with the service page taxonomy) and keeping it visible, even though it currently filters to zero. I went with removing the chip instead: an empty-filter chip is a dead-end for the user, while the absence of the chip is quietly accurate for the 5-item state. Once RESEARCH-001 unblocks and new Live & Events projects land, the chip can be added back in the same run that categorizes them.
2. I intentionally did not touch the `data-category` values on the existing 5 cards. Re-categorizing the Rays or Bucs into a "sports" bucket, for instance, is a real taxonomy decision and makes sense only when there are enough items to support the split. With 4 of 5 items in "commercial", splitting now would make every other chip look underpopulated.
3. The 12-column span grid from the prototype (`.x-hero`, `.x-tall`, `.x-wide`, `.x-med`, `.x-sm`) was not ported this run. With 5 items, the visual rhythm of a span grid falls flat (you need 8 to 12 cards to get the dense, varied-size look the prototype is after). Ports better once content exists.

**For Marianne to review before next deploy:**
1. Open `/projects.html` in a browser and confirm the filter chip row now shows only "All Projects", "Commercial", and "Residential". Click each and confirm the grid filters cleanly (should show 5, 4, and 1 cards respectively).
2. The backlog status on BUILD-008 is now "partial". The rest of BUILD-008 (the 12-column grid and the 12 to 20 item portfolio expansion) is parked on RESEARCH-001, which is a manual Chrome session that needs her logged in.
3. Run `npm run build` (or `npm run dev`) locally to confirm nothing else shifted; no new partials, no CSS edits this run.

---

## 2026-04-23: link audit, accessibility heading pass, team bio drafts

Worked three items: BUILD-010 (P3, link audit), BUILD-014 (P3, accessibility pass), and CONTENT-004 (P2, team bios). No items required Marianne's input to start, though CONTENT-004 lands partially and needs her to send material for the Sionna and Jason drafts.

- **BUILD-010 (done):** Ran a Python audit over every `.html` file on the site (21 pages). It expands the `<!--#include nav-->` and `<!--#include footer-->` partials before scanning, harvests every `href` / `src` / `action` / `srcset` URL, and checks each internal one resolves on disk. Same-page fragments validate against the page's own id set; cross-page fragments validate against the target file's id set. 710 internal links OK, 167 external links reported as skipped (not validated, since this environment cannot make arbitrary outbound requests), 0 broken. Ran a companion scan of every `url(...)` reference in `styles/index.css` plus inline `style=` url refs across HTML: zero broken on either side. No site files were touched. The audit script itself sits at `/sessions/wonderful-gifted-shannon/link-audit.py` as a scratchpad, not committed into the site tree.
- **BUILD-014 (done, static pass):** Static accessibility scan over all 21 content pages. Covered: images without an alt attribute, anchors and buttons with no accessible name, inputs without a label or aria-label or placeholder, heading hierarchy (single h1 per page, no level-skips when descending), and `<html lang>`. First pass surfaced 22 issues, all heading hierarchy skips. Fixed them: footer column titles (in the shared partial, so a single edit propagates) went from h4 to h3, which cleared the `h2 -> h4` skip on every page that inherits the shared footer. The "EST. 1992" heading on about.html went from h3 to h2 and `.about-story__text h3` in `styles/index.css` was widened to `.about-story__text h2, .about-story__text h3` so the visual treatment is preserved. The 5 work-card titles on projects.html, the 6 blog-card titles on artbeat.html, and the contact form's "Start Your Project" heading all went from h3 to h2. The 6 ArtBeat article detail pages had their "Want the full story?" heading bumped from h4 to h2; the inline `.article-meta-box h4` selector in `artbeat-catalyst-shine.html` was updated to `.article-meta-box h2` so the size is preserved (the other 5 articles use inline style attributes on the heading directly, so no selector change was needed there). Second run: 0 issues. Alt text, form labels, and `<html lang>` were already clean on all 21 pages.
- **CONTENT-004 (done, partial, draft stage):** Added a new "[CONTENT-004] Team bios for the About page" section to `draft-copy.md`. Three Johnny Vitale bio options are drafted from material that already lives on the new site (the About story, his direct quotes from the SHINE, Fox 13, and Creative Loafing ArtBeat articles, and the existing project names): Option A is a short 55-word version, Option B is a medium 95-word version that names specific projects, Option C is a quote-led 75-word version. Sionna and Jason sections are intentionally empty with explicit lists of what's needed (years in the craft, specialty, signature project, last name if shown, optional quote), because there is no source material on the new site for either of them, the live site at vitalebrothers.com is not reachable from this scheduled-task environment, and the project constraint is to not invent content. One open question was flagged: the Blue Goose ArtBeat article credits "Johnny, Paul, and Joey Vitale" as the three exhibiting brothers, but the team grid on about.html only shows Johnny, Sionna, and Jason. Marianne should confirm whether Paul and Joey are still part of the studio or historical-only.

**Files added:**
- None. The audit scripts live outside the site tree and were not committed.

**Files changed:**
- `_partials/footer.html` (the 4 footer column titles: h4 to h3)
- `about.html` ("EST. 1992" heading: h3 to h2)
- `projects.html` (5 work-card titles: h3 to h2)
- `contact.html` (contact form "Start Your Project" heading: h3 to h2)
- `artbeat.html` (6 blog-card titles: h3 to h2)
- `artbeat-catalyst-shine.html` ("Want the full story?" h4 to h2, and `.article-meta-box h4` selector to `.article-meta-box h2`)
- `artbeat-cltampa-restore.html`, `artbeat-eyes-tampa.html`, `artbeat-fox13-paint.html`, `artbeat-ilovetheburg-patients.html`, `artbeat-tbt-blue-goose.html` ("Want the full story?" h4 to h2; the sizing style is inline on each of these, so it carried over automatically)
- `styles/index.css` (widened `.about-story__text h3` to `.about-story__text h2, .about-story__text h3`)
- `draft-copy.md` (appended the CONTENT-004 bio drafts section)
- `SITE-BACKLOG.md` (statuses plus what-changed notes on BUILD-010, BUILD-014, CONTENT-004; "Last updated" date)

**Verified:**
- Link audit: 710 internal links OK, 0 broken, across 21 pages, with partials expanded.
- CSS `url()` and inline HTML `style=` url refs: 0 broken.
- Accessibility audit: 22 issues found first pass, 0 after fixes.
- CSS brace count balanced (380 open / 380 close) after the `.about-story__text` selector change.
- No em dashes introduced in any file touched this run. Existing em dashes in `about.html` (8 in body copy) and in `styles/index.css` (12 in CSS comments) are pre-existing and flagged in the BUILD-012 follow-up for a separate cleanup pass.

**Judgment calls worth flagging:**
1. Footer column titles now render as `<h3>` instead of `<h4>`. Visual treatment is unchanged (the `.footer__col-title` rule is class-based and untouched), so the only effect is semantic. This was the lightest fix that cleared 19 of 22 skip warnings in one edit.
2. Work-card titles on projects.html, blog-card titles on artbeat.html, and the contact form title all went from h3 to h2. Each card is semantically the heading of its own content block, so h2 is defensible. Visually nothing changes because the styling is class-based on each. If Marianne prefers the old h3 treatment for any reason, the easiest path is a single find-and-replace per page, paired with re-widening the headings-rule selectors in `styles/index.css`.
3. For the "Want the full story?" block inside the ArtBeat article pages, the bump from h4 to h2 does shift the visual-only interpretation of that meta-box. The existing inline font-size rules keep it readable, but semantically this now reads as a second top-level section of the article. If Marianne would rather treat it as a sub-section of the article body, the right move is to turn the article-hero heading into h1 (already the case) and leave the meta-box at h2; that's the current state.
4. For CONTENT-004, the decision not to invent content for Sionna and Jason is deliberate: the scheduled-task constraints explicitly say "If images/content aren't present, don't substitute random stock; mark the task blocked instead." Drafting a plausible-sounding bio for Sionna or Jason from nothing would be exactly the kind of fabrication the constraint is trying to prevent, even if it might survive a first read. The partial draft puts Johnny's options on the page so there is still progress to react to, while leaving the two gaps explicit.

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne. CONTENT-004 now also has a soft dependency on Marianne, but it's structured as a follow-up (pick a Johnny option, send material for Sionna and Jason) rather than a hard blocker.

**For Marianne to review before next deploy:**
1. Open `index.html`, `about.html`, `projects.html`, `artbeat.html`, `contact.html`, and any one ArtBeat article in a browser. Everything should look identical to the last deploy. The changes this run were almost entirely heading-tag swaps on class-styled elements, so the visual rendering should not have shifted.
2. Open `draft-copy.md` and look at the new CONTENT-004 section. Pick a Johnny option (A, B, or C) or redirect. Send material for Sionna and Jason using the bullet list in each section as a template. Also answer the Paul / Joey question at the bottom.
3. Run a Lighthouse or axe accessibility scan in DevTools on the homepage and one article page. The static pass cleared heading hierarchy, alt text, form labels, and `<html lang>`. Remaining runtime checks are color contrast on the palette, keyboard focus visibility, and ARIA landmark duplication. Flag any failures and they can be handled in a future pass.
4. Run `npm run build` (or `npm run dev`) locally to confirm the Vite include pipeline still resolves. No new partials introduced; the existing footer partial was edited in place.

---

## 2026-04-22: 404 page, sitemap, robots, and site-wide social meta

Worked three P3 items, all pure-build deploy-hygiene work with no Marianne input needed: BUILD-011 (404 page), BUILD-013 (sitemap + robots), and BUILD-012 (favicon + Open Graph + Twitter card).

- **BUILD-011 (done):** Added `404.html` at the site root. Uses the existing `<!--#include nav-->` / `<!--#include footer-->` partial system so it inherits the shared nav and footer automatically. Structure: a themed `page-header` hero with a faded mural background (18% opacity `hero-bg.png`) on top of the usual radial gradient, headline "This Wall Is Still Blank.", a one-line explanation, and two buttons (Back to Home, Browse Projects). Below that, a 4-card "Where to next" grid pointing to About, Projects, ArtBeat, and Contact using existing `.reveal` staggered animations. The meta block includes `<meta name="robots" content="noindex">` so the 404 page won't get indexed. CSS block (roughly 90 lines) added to `styles/index.css` just before the `SCROLL REVEAL` section, plus responsive rules at 1024px (2-column) and 768px (1-column, shorter hero). No new JS.
- **BUILD-013 (done):** Added `sitemap.xml` and `robots.txt` at the site root. The sitemap lists all 20 public pages with differentiated priority and changefreq values (home 1.0 weekly; projects 0.9 weekly; about, artbeat, services 0.8; project detail + contact 0.7 yearly; ArtBeat articles 0.6 yearly). 404.html is deliberately excluded because it carries noindex. Robots.txt permits everything, blocks the dev scaffolding paths (`/_partials/`, `/_prototypes/`, `/.backup-preinclude/`, `/node_modules/`) in case they get deployed by accident, and points at the sitemap URL. Verified the sitemap parses as valid XML with 20 url entries.
- **BUILD-012 (done, with a favicon caveat):** Added a uniform favicon + Open Graph + Twitter card meta block to every page via a Python script, then did a small indent cleanup pass to fix an inserted-line indentation glitch. Covered 21 pages total: 5 top-level (index, about, projects, contact, artbeat), 5 project detail pages, 6 ArtBeat articles, 4 service pages, and 404. Favicons point at the existing `/assets/images/logo-red.png`. OG image is the site-wide `/assets/images/hero-bg.png`. og:title and og:description are mirrored from each page's own title and description. og:type is `article` for the 6 ArtBeat detail pages and `website` everywhere else. Twitter card is `summary_large_image`. Absolute URLs are used for both og:url and all image references, so previews work off any host. Verified: exactly one copy of each new tag per page across all 21 pages (no duplicates), plus nav include, footer include, and the CSS link are all still in place on every page.

**Files added:**
- `404.html`
- `sitemap.xml`
- `robots.txt`

**Files changed:**
- `styles/index.css` (added `404 PAGE` CSS block just before `SCROLL REVEAL`, roughly 90 lines; added `.notfound-links__grid` entries to the 1024px and 768px media queries; added `.notfound-links` padding override and `.page-header--404` min-height override to the 768px query)
- `index.html`, `about.html`, `projects.html`, `contact.html`, `artbeat.html` (added head meta block)
- `project-backyard-escapes.html`, `project-bucs.html`, `project-cowboy.html`, `project-rays.html`, `project-retro.html` (added head meta block)
- `artbeat-catalyst-shine.html`, `artbeat-cltampa-restore.html`, `artbeat-eyes-tampa.html`, `artbeat-fox13-paint.html`, `artbeat-ilovetheburg-patients.html`, `artbeat-tbt-blue-goose.html` (added head meta block with og:type=article)
- `services/commercial.html`, `services/residential.html`, `services/live-events.html`, `services/community-civic.html` (replaced partial OG block with the full block)
- `SITE-BACKLOG.md` (statuses + what-changed on BUILD-011, BUILD-012, BUILD-013)

**Verified:**
- CSS brace count balanced (380 open / 380 close).
- No em dashes in any file authored this run: `404.html`, `sitemap.xml`, `robots.txt`, the new `404 PAGE` CSS block, or any of the WORK-LOG / BACKLOG notes. Existing em dashes inside pre-existing page titles and descriptions were preserved rather than rewritten (see follow-up below).
- Every content page (21 total) has exactly 1 of each: favicon link, apple-touch-icon link, og:title, og:description, og:url, og:type, og:image, twitter:card, twitter:title, twitter:description, twitter:image.
- Every content page still has exactly 1 CSS link, 1 `<!--#include nav-->`, and 1 `<!--#include footer-->`.
- 404.html's internal links and asset references all resolve on disk (about, projects, artbeat, contact pages, logo-red.png, hero-bg.png, partials, main.js, css).
- sitemap.xml parses as valid XML with 20 url entries.

**Judgment calls worth flagging:**
1. Favicon is deliberately minimal: a single `logo-red.png` linked as both `icon` and `apple-touch-icon`. Browsers will scale it, but for crispness a proper multi-size set (16x16, 32x32, 180x180, 192x192, .ico) is the right next step; I'd rather Marianne run the existing mark through realfavicongenerator.net than invent a lower-quality generated set here. The head markup is set up so swapping in a proper set is a single search-and-replace across all pages.
2. OG image uses the existing `hero-bg.png` rather than a purpose-built 1200x630 share card. It works, but a card with a logo lockup and tagline would read sharper in link previews. Flagged as a follow-up for Marianne.
3. A handful of existing page titles and descriptions contain em dashes (the homepage title and the About page title both use one as a separator). These got mirrored verbatim into og:title / twitter:title rather than rewritten, because the OG title is supposed to match the real page title. A global em-dash cleanup across page titles and descriptions would be its own backlog item if Marianne wants it.
4. The sitemap assumes `https://vitalebrothers.com` as the canonical host. If the real host ends up being `www.vitalebrothers.com` or a different domain, every absolute URL in the sitemap and the OG blocks will need one find-and-replace.
5. robots.txt includes the dev-scaffolding disallows as a safety net. Depending on how Marianne deploys (if the build output is scoped cleanly and those folders never ship), those lines are harmless but unnecessary; they can come out later without consequence.

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne.

**For Marianne to review before next deploy:**
1. Open `404.html` in a browser, or hit any nonsense URL on a dev server, and confirm the 404 page feels on-brand. Check the copy: "This Wall Is Still Blank." plus the "Where to next" cards.
2. Configure the host to serve `/404.html` on 404 responses. Netlify and Vercel pick this up automatically if the file is at the site root. Apache: `ErrorDocument 404 /404.html`. Nginx: `error_page 404 /404.html;`.
3. Test a social share preview on one page after deploy (a paste into Slack, LinkedIn, or the Meta debugger) and confirm the image, title, and description all render.
4. Decide on the favicon path. Either (a) keep the single PNG, or (b) generate a proper multi-size favicon set through a tool and drop it in `/assets/images/favicons/`. I can wire in the new markup once the files exist.
5. Decide on the share-card path. Either (a) keep `hero-bg.png` as the default, or (b) send a 1200x630 purpose-built card and I'll swap the og:image / twitter:image URLs site-wide.
6. Double-check that `https://vitalebrothers.com` is the right canonical host for the sitemap and OG URLs. If not, flag it and I'll swap globally.
7. Run `npm run build` (or `npm run dev`) locally to confirm the Vite include pipeline still resolves cleanly; no changes to partials this run, but the new 404 page goes through the same include pipeline.

---

## 2026-04-21: process steps and FAQ accordion ported to homepage

Worked two P2 backlog items, both "done-in-prototype, todo-in-real-site" ports. No items required Marianne's input.

- **BUILD-007 (done):** Added a new `<section class="process">` to `index.html` between Services and Featured Work. Cream surface (`--color-bg-cream`) so it contrasts with the dark sections on either side, matching the prototype's alternating rhythm. Header reads "How We Work / From napkin sketch to finished wall." followed by a short intro about 4-to-6-week timelines. Four step cards in a grid: 01 Brief & Visit, 02 Sketch & Quote, 03 Paint, 04 Unveil & Protect. Each card has a big Bebas Neue numeral in Vitale red, uppercase Oswald title, and a short description. Cards lift with a subtle shadow on hover. Copy was ported verbatim from `prototype.html` (no em dashes in the original, none added).
- **BUILD-006 (done):** Added a new `<section class="faq">` between the Instagram feed and the big CTA. Split-column layout: the left side (360px on desktop) has section label, title ("A few common questions."), short intro, and a red "Still Got Questions? Ask Us" CTA that routes to `/contact.html`. The right side holds the accordion, 6 items covering cost, timeline, durability, permits, brand/concept, and travel. Implemented each question as a real `<button>` with `aria-expanded`, so keyboard and screen-reader users can use it. First item is open by default. The plus icon rotates 45 degrees to an x when open, just like the prototype. Wired up a small `initFaqAccordion()` function in `js/main.js` and called it in the DOMContentLoaded bootstrap.

**Files changed:**
- `index.html` (added `<section class="process" id="process">` between services and work; added `<section class="faq" id="faq">` between ig-feed and cta)
- `styles/index.css` (added ~145 lines: new PROCESS and FAQ blocks placed just above SCROLL REVEAL; added 2 rules to the 1024px media query and 3 rules to the 768px media query)
- `js/main.js` (added `initFaqAccordion()` and wired it into the DOMContentLoaded init list)
- `SITE-BACKLOG.md` (statuses + what-changed on BUILD-006 and BUILD-007)

**Verified:**
- CSS brace count balanced (362 open / 362 close).
- No em dashes in any new HTML, CSS comments, or JS comments (scanned programmatically).
- No class-name collisions: prior to this run, no `.process`, `.faq`, `.step`, or `.step__*` selectors existed anywhere in `styles/index.css`.
- Section order in `index.html`: nav, hero, proof, about-preview, services, **process**, work, testimonials, ig-feed, **faq**, cta, footer. Ten `<section>` opens, ten closes. 142 div opens, 142 div closes.
- FAQ toggle uses `classList.toggle('is-open')` and flips `aria-expanded`, so it degrades cleanly if JS fails (the first item is open by default via the `is-open` class in the HTML).

**Judgment calls worth flagging:**
1. Placement for Process was "between Services and Work" instead of the prototype's "between Hero and Services" slot. The real site already has an "Our Story" block and a press bar above Services, so inserting Process right under Services keeps the narrative (what we do, how we work, proof of work) intact without stacking three intro-style sections before the portfolio.
2. Placement for FAQ was "between Instagram feed and the big CTA." The prototype puts FAQ right before its closing CTA, which is the standard persuasion architecture (answer objections, then ask). Keeping that order.
3. The prototype's FAQ CTA pointed to `#contact` (an anchor to the CTA block on the same page). On the real site, `/contact.html` is a separate page, so the button routes there instead.

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne.

**For Marianne to review before next deploy:**
1. Open `index.html` in a browser and scroll. New "How We Work" cream strip should appear below the 4 service cards; new FAQ accordion should appear just above the red CTA block.
2. Click each FAQ question (and tab through them with the keyboard) to confirm the accordion opens and closes cleanly, and that the plus icon rotates to an x.
3. Read the FAQ copy (especially the $4,000 to $40,000+ price band, the 7-to-10-year durability claim, and the SalonCentric / Las Vegas travel reference). Flag anything that should be reworded, made more hedged, or removed.
4. Run `npm run build` (or `npm run dev`) locally to confirm the Vite include pipeline still resolves; no new partials were introduced so nothing structural should have shifted.

---

## 2026-04-20: four service pages built, homepage cards rewired

Worked two backlog items: BUILD-002 (P0) and BUILD-005 (P1). BUILD-005 is a direct subset of BUILD-002, so both landed in one pass. No items required Marianne's input.

- **BUILD-002 (done):** Created 4 new service pages under `/services/`: `commercial.html`, `residential.html`, `live-events.html`, `community-civic.html`. Each uses the existing `.page-header` treatment (matching projects.html / about.html) for a consistent inner-page feel, then an overview section with narrative copy plus 3 iconed "what we do" bullets, then either featured work cards (commercial, residential), a 4-step "how a live paint runs" block (live-events, on a cream surface), or a 3-card "signature civic work" section (community-civic). All four end with a dedicated CTA that reframes the contact ask per service (Request a Quote, Start Your Project, Check Our Availability, Start a Conversation). Homepage service cards in `index.html` were relabeled and re-pointed from generic titles ("Murals", "Branding & Design", "Live Painting", "Signs & Canvas") to the 4-bucket taxonomy that matches prototype.html and the new pages: Commercial Murals, Residential, Live & Events, Community & Civic. Service card images were also updated so each thumbnail reflects the service (Bucs for commercial, backyard pool for residential, Rays in-progress for live, retro 82 Degrees for civic). Nav partial intentionally NOT modified; the homepage cards and any future dropdown can be added once Marianne confirms the taxonomy. All internal links verified present (project pages, ArtBeat articles, contact, projects).
- **BUILD-005 (done):** Covered as part of BUILD-002. The community-civic page explicitly addresses the three content buckets the backlog called out: SHINE Mural Festival, Power to the Patients, and vandalism restoration. The three signature cards each link to the matching existing ArtBeat article (catalyst-shine, ilovetheburg-patients, cltampa-restore). Also spells out who should reach out (nonprofits, school districts, community partners) and frames pricing as case-by-case.

**Files added:**
- `services/commercial.html`
- `services/residential.html`
- `services/live-events.html`
- `services/community-civic.html`

**Files changed:**
- `index.html` (the 4 service cards in the `.services__grid` block were renamed, re-pointed, and given new thumbnail images)
- `styles/index.css` (added ~170 lines of new CSS under a new "SERVICE PAGES" section just above SCROLL REVEAL; added responsive rules for `.service-howit__grid`, `.service-signature__grid`, and `.service-work__header` at both 1024px and 768px breakpoints)
- `SITE-BACKLOG.md` (status + what-changed on BUILD-002 and BUILD-005)

**Verified:**
- CSS brace count balanced (333 open / 333 close).
- No em dashes in any of the new service-page copy. The em dashes that remain in `index.html` are pre-existing (hero kicker, meta tags, comments) and were not touched.
- All linked project pages, ArtBeat articles, and images referenced from the 4 new pages exist on disk.
- Service pages use `<!--#include nav-->` and `<!--#include footer-->` so the shared partials system keeps them in sync with the rest of the site.

**Judgment call worth flagging:** the homepage used to have cards for "Branding & Design" and "Signs & Canvas." Those labels didn't map cleanly to the 4-bucket taxonomy in `prototype.html` or in the new `/services/` pages, so the homepage was brought into alignment with the prototype. Signs-and-canvas work still fits naturally under Commercial Murals; branding-and-design is also a commercial discipline. If Marianne wants those as first-class service pages instead (or wants to keep both taxonomies around), flag it and we can add them.

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne.

**For Marianne to review before next deploy:**
1. Open the 4 new pages in a browser (/services/commercial.html, /services/residential.html, /services/live-events.html, /services/community-civic.html) and skim the copy. Call out anything that needs rewording, and flag any missing service areas.
2. On the homepage, confirm the 4 service cards (new labels, new thumbnails) read right and click through to the correct service page.
3. Decide whether to add a "Services" item (or dropdown of the 4) to the main nav in `_partials/nav.html`. Currently services are only reachable from the homepage cards and future cross-links.
4. Decide whether "Branding & Design" and "Signs & Canvas" deserve their own pages (or sub-sections inside Commercial). Flag the answer and we can adjust.
5. Run `npm run build` (or `npm run dev`) locally to confirm the Vite include pipeline picks up the new `/services/` folder correctly. The partials plugin walks all `.html` files, so it should work without config changes.

---

## 2026-04-19: warm palette, panel-behind-text hero, press credentials bar

Worked three P1 items, all prototype-to-real-site ports. No items required Marianne's input.

- **DESIGN-002 (done):** Rewrote the `:root` design token block in `styles/index.css` to match the prototype's warmer palette. Dark surfaces shift from pure `#080808` to off-black `#141210`; primary red shifts from `#e01f26` to `#d91e25`; text from `#f2f2f2` to `#f6f2ec`. Added 6 new cream-surface tokens (`--color-bg-cream`, `--color-bg-cream-alt`, `--color-paper`, `--color-ink`, `--color-ink-muted`, `--color-border-cream`) so future ports of the cream-themed sections (process, testimonials, FAQ) can pull from them. Replaced 3 legacy hardcoded `rgba(8,8,8,*)` references in the nav scrolled-state, mobile menu overlay, and `--gradient-dark` token. Because every rule already references `var(--color-*)`, the warmer palette propagates across all 16 site pages with no per-page edits.
- **DESIGN-003 (done):** Replaced the heavy left-column scrim on the hero with a panel-behind-text treatment. Scrim now only darkens the top 28% (nav legibility) and the bottom 55% (slide dots and depth). Added panel styling to `.hero__inner`: warm semi-transparent background `rgba(20,18,16,0.78)`, 16px backdrop blur with 110% saturation, 36px x 40px padding, subtle border. Mobile rule shrinks padding to 24x22. Slideshow, ken-burns animation, and dots indicator all preserved. No HTML changes needed; the existing `.hero__inner` element became the panel.
- **CONTENT-002 (done):** Added a press credentials section to `index.html` between hero and Our Story. Cream-surface bar with the label "As featured in" and 6 text-based logo chips (Fox 13 Tampa Bay, St. Pete Catalyst, Creative Loafing, ilovetheburg, Tampa Bay Times, Eyes on the Streets), each linking to its corresponding ArtBeat article. Used the prototype's text-chip approach rather than image logos: it ships now, scales cleanly, and avoids the SVG/PNG sourcing and usage-rights questions. Cream background sets it apart from the dark hero above and dark Our Story below. Companion `.proof` / `.proof__row` / `.proof__label` / `.logo-chip` styles added to `styles/index.css` directly above the OUR STORY section. The companion "Trusted by" client strip from the prototype was intentionally skipped because BUILD-009 is still blocked on Marianne confirming logo usage rights.

**Files changed:**
- `styles/index.css` (rewrote `:root` token block lines 12-48; rewrote `.hero__scrim` lines 451-480; rewrote `.hero__inner` lines 490-501; added `.proof` block above `.about-preview`; updated `.nav--scrolled` and `.nav__mobile` background colors; added 1 line to mobile media query for `.hero__inner` padding)
- `index.html` (added `<section class="proof" id="press-bar">` block between `</section>` of hero and `<section class="about-preview">`)
- `SITE-BACKLOG.md` (statuses + what-changed notes on DESIGN-002, DESIGN-003, CONTENT-002)

**Verified:**
- CSS brace count balanced (296 open / 296 close).
- All 6 ArtBeat article URLs referenced in the press chips exist as files.
- No remaining `#080808` or `rgba(8,8,8,...)` references in `styles/` or `_partials/`.
- Section nesting in `index.html` clean (hero, proof, about-preview, services, work, testimonials, ig-feed, cta).

**No new blockers introduced.** Existing blocked items (BUILD-001 contact form, BUILD-004 video, CONTENT-003 headshots, RESEARCH-001 IG, RESEARCH-002 FB, BUILD-009 client logos) still waiting on Marianne.

**For Marianne to review before next deploy:**
1. Open `index.html` in a browser. The whole site should feel slightly warmer and less Netflix-y. Spot-check the about, projects, contact, and artbeat pages, since they all inherit the same tokens.
2. The hero now has the mural visible across the full width, with a frosted dark panel carrying the headline on the left. Check legibility across the four slideshow images, especially the brighter Retro Elvis frame.
3. New cream-colored "As featured in" strip appears just below the hero. Confirm the 6 outlets and links feel right (each chip links to the matching ArtBeat article on this site).
4. If she'd rather show actual outlet logos than text chips, send SVG/PNGs and I'll swap. Same goes for adding a "Trusted by" client row once usage rights are confirmed for BUILD-009.
5. Run `npm run build` (or `npm run dev`) on her machine to confirm the Vite include pipeline still resolves, since the rollup binary mismatch keeps me from running it in this sandbox.

---

## 2026-04-18: homepage content port (real testimonials, IG feed, hero copy draft)

Worked three P0 items, all from prototype-to-real-site porting.

- **CONTENT-001 (done, partial):** Replaced the 3 generic "Michael R. / Sarah L. / James T." placeholder testimonials on `index.html` with the 6 real named testimonials that Marianne already approved in `prototype.html` (Ashley Cantero, Dan Pemberton / Pesky Pelican, Melissa Phillips, Michael Sheehan, Elizabeth Young, Amanda Hargett). Existing `.testimonials__grid` already had a 3-column layout, so they flow as 2 rows of 3 on desktop, 2 columns on tablet, 1 on mobile. No CSS changes needed. The backlog hint said "8 total" but the prototype only captures 6, so 2 are still unaccounted for; flagged for Marianne.
- **BUILD-003 (done):** Ported the Instagram "Daily Art Feed" section from prototype to `index.html`, placed between Testimonials and CTA. Static 6-tile grid, each tile links to instagram.com/vitalebros. Added `.ig-feed` styles to `styles/index.css` matching the existing dark-theme token system (6 columns desktop, 3 tablet, 2 mobile; hover scale; subtle gradient overlay; FA Instagram glyph in the corner). All 6 images referenced already exist in `assets/images/`.
- **DESIGN-001 (done, draft stage):** Created `draft-copy.md` with 3 hero headline options for Marianne to pick from: (A) longevity-first "Bringing Art to the Community Since 1992", (B) place-first "The Studio That Paints St. Pete", (C) scope-first "Murals for Stadiums, Storefronts, and Everything in Between". Each has kicker, headline, subhead, CTAs, and a when-it-works note. Hero HTML in `index.html` was not touched; that waits on her pick.

**Files changed:**
- `index.html` (testimonials section expanded; new `<section class="ig-feed">` added)
- `styles/index.css` (new `.ig-feed` block around line 977, plus 2 lines in the tablet and mobile media queries)
- `draft-copy.md` (new file)
- `SITE-BACKLOG.md` (statuses + what-changed notes on CONTENT-001, BUILD-003, DESIGN-001)

**No new blockers introduced.** The existing blocked items (BUILD-001, BUILD-004, CONTENT-003, RESEARCH-001, RESEARCH-002, BUILD-009) are still waiting on Marianne.

**For Marianne to review before next deploy:**
1. Open `index.html` in a browser and scroll: testimonials section now has 6 cards (should be a 3 by 2 grid on desktop); Instagram section appears just above the CTA.
2. Open `draft-copy.md` and pick a hero option. Reply "go with A" (or B, C) and the next run will wire it in.
3. Decide whether to hunt down the 2 missing testimonials on the live site. If yes, send the quotes and I'll add them.
4. Run `npm run build` (or `npm run dev`) on your machine to confirm the Vite include pipeline still resolves cleanly with the new section in place.

---

## 2026-04-17 (later) — shared nav/footer partials

Refactored nav and footer into `_partials/nav.html` and `_partials/footer.html`. Added a Vite plugin to `vite.config.js` that expands `<!--#include name-->` markers at build time. Replaced nav and footer blocks across all 16 content pages (not prototype.html) with the include markers. Added footers to the 6 artbeat article pages that previously had none. Added `initActiveNav()` and `initDynamicYear()` to `js/main.js` so the active-link highlight and copyright year work from the shared partial. Backup of pre-change files in `.backup-preinclude/`. Verified transform with `verify-partials.mjs` (16/16 pass). Full `npm run build` not runnable in this sandbox due to Windows-vs-Linux rollup binary mismatch; Marianne should run `npm run build` or `npm run dev` on her machine to confirm.

Files to review: `_partials/nav.html`, `_partials/footer.html`, `vite.config.js`, `js/main.js`. Fixed content drift: footer now consistently says "Elevating" (one page had "Celebrating"), uses `&amp;` everywhere, and all pages have a footer.

---

## 2026-04-17 — backlog created

Drafted `SITE-BACKLOG.md` with 20 tasks across P0-P3. No code changes yet. Next run: picks from P0, starts with items that aren't blocked on Marianne.
