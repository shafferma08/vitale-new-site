# Social Drops

Staging area for photos pulled from the Vitale Brothers' public Instagram and Facebook pages by the `vitale-social-research` scheduled task.

## How it's organized

Each daily research run creates a dated subfolder:

```
social-drops/
  2026-04-27/
    ig-001.jpg
    ig-002.jpg
    fb-001.jpg
    drop.md          <- metadata for everything in this folder
  2026-04-28/
    ...
```

## What's in `drop.md`

Per-image metadata: source URL, caption, post date, location/client guess, suggested project tag, plus a quick assessment of whether this image belongs in an existing project page or warrants a new one.

## How items move out of here

Each daily run also adds one or more `[CONTENT-NEW-YYYY-MM-DD-...]` items to `/SITE-BACKLOG.md`. The next morning, the existing `vitale-site-daily-rebuild` task picks them up and builds the actual pages, project cards, or image swaps. Once a backlog item is `done`, the photos in this folder have been integrated into the site and the dated subfolder can be archived (but not deleted) for traceability.

## What goes here vs. what doesn't

Goes here: real photos from John's IG/FB posts, behind the scenes shots, finished murals, in progress shots, anything authentic.

Does not go here: AI generated images, stock photos, screenshots of someone else's work, anything we don't have rights to use.
