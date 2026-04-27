# Vitale Bros. Website

Static rebuild of [vitalebrothers.com](https://vitalebrothers.com), the studio site for Vitale Bros., a St. Petersburg family mural studio painting commercial, residential, live, and civic walls since 1992.

**Live preview:** https://shafferma08.github.io/vitale-new-site/

## What this repo is

- 21 hand-built HTML pages, no bundler, no framework, no build step.
- Single stylesheet at `styles/index.css` with warm-palette design tokens (off-black backgrounds, cream surfaces, Vitale red accent).
- Single classic script at `js/main.js` for the hero slideshow, scroll reveals, FAQ accordion, magnetic buttons.
- Cognito Forms handles the contact form embed.
- Pages are openable by double-click (relative paths everywhere, no `type="module"` on script tags).

## Repo structure

```
.
|-- index.html, about.html, projects.html, artbeat.html, contact.html
|-- project-*.html         5 project detail pages
|-- artbeat-*.html         6 ArtBeat article pages
|-- services/              4 service category pages
|-- styles/index.css       single stylesheet, all design tokens in :root
|-- js/main.js             single classic script
|-- assets/images/         photos and brand assets
|-- _partials/             nav and footer source-of-truth (decorative since the 2026-04-26 inlining)
|-- _prototypes/           design references, not shipped
|-- SITE-BACKLOG.md        active backlog and status
|-- WORK-LOG.md            dated build log
|-- CLAUDE.md              project context for AI-assisted edits
```

## Working on the site

1. Open the HTML file directly in a browser. No `npm run` needed.
2. Edit the relevant `.html` or `styles/index.css`.
3. Refresh the browser.

The `build.js` script in the repo is a no-op pass-through left over from a prior partials system. It can be ignored.

## Brand

Warm dark palette, not Netflix black. Primary accent is Vitale red `#d91e25`. Display type is Bebas Neue, headings Oswald, body Inter, all loaded from Google Fonts.
