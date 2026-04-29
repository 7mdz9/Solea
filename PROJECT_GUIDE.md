# Project Guide

## Architecture

This is a single-page static coming-soon site for Solea, a sun-inspired café opening in Abu Dhabi on May 1, 2026. The page has no framework, no build step, and no production JavaScript beyond the countdown timer.

The rebrand source lives at `/Users/mohamed.alteneiji/Solea/_rebrand-source.html`. The deployed project keeps the existing multi-file structure:

- `index.html` owns document metadata and markup.
- `styles/main.css` owns the full visual system, layout, animation, and responsive behavior.
- `scripts/countdown.js` owns countdown behavior.

## Local Development

Serve the folder that contains `index.html`.

After cloning from GitHub:

```sh
git clone https://github.com/7mdz9/Solea.git
cd Solea
npx serve .
```

From the original local workspace:

```sh
cd /Users/mohamed.alteneiji/Solea/solea-coming-soon
npx serve .
```

Alternative Python server:

```sh
cd /Users/mohamed.alteneiji/Solea/solea-coming-soon
python3 -m http.server 8000
```

Do not start the server from `/Users/mohamed.alteneiji/Solea` unless you intend to inspect the parent workspace. The coming-soon app lives in `/Users/mohamed.alteneiji/Solea/solea-coming-soon`.

## Files

`index.html`

Owns the Solea document shell, Google Fonts links, stage markup, inline half-sun logo SVG, wordmark, blurb, countdown markup, launch date, and contact mail link. Edit this file for copy, metadata, or markup changes.

`styles/main.css`

Owns the Solea rebrand visual system: porcelain/oak/stone-moss/olive/earth/terracotta palette, DM Serif Display and Inter font variables, plaster-grain background, stage layout, logo styling, countdown styling, contact styling, animations, reduced-motion handling, and responsive breakpoints.

`scripts/countdown.js`

Owns the countdown calculation and post-launch state. Edit this file only for timer behavior.

`robots.txt`

Allows crawlers to index the page.

`package.json`

Provides optional local server scripts. It does not define a build pipeline or dependencies.

## Design System

Design tokens live at the top of `styles/main.css` in `:root`.

Colors:

- `--porcelain: #EEE9E4`
- `--oak: #C0AE94`
- `--stone-moss: #6D705A`
- `--olive: #4D4738`
- `--earth: #755F4A`
- `--terracotta: #B56A4E`

Typography:

- DM Serif Display for the Solea wordmark, blurb, date, and contact email
- Inter for body text, labels, tagline, and countdown numerals

Google Fonts loads:

```text
DM Serif Display roman and italic
Inter 300, 400, 500
```

## Countdown

The launch target is fixed and must not be changed without an explicit launch decision:

```js
new Date("2026-05-01T00:00:00+04:00")
```

The timer updates once per second. Values are derived from the visitor device clock, so a wrong local clock can show an inaccurate remaining time. There is no server-side time authority in this static project.

Countdown values are selected with `[data-unit="days"]`, `[data-unit="hours"]`, `[data-unit="minutes"]`, and `[data-unit="seconds"]` inside `#cd-grid`.

When the target time has passed, `scripts/countdown.js` clears the interval, hides `#cd-grid`, and reveals `#cd-launched`.

## Responsive Strategy

The layout centers a compact stage with generous vertical spacing. The countdown uses a flexible row with separators. At narrow mobile widths, spacing, unit widths, label tracking, and separator size tighten to keep the countdown readable.

Short-height viewports reduce the stage gap and vertical padding.

## Performance Notes

The page is static and lightweight. CSS and JavaScript are external files for cacheability and maintainability. The script is deferred.

There are no runtime image assets. The sun mark is inline SVG, and the background grain is a small inline SVG data image in CSS.

## Accessibility

The page uses `lang="en"` and readable text links. Decorative SVGs are hidden from assistive technology with `aria-hidden="true"`.

The countdown section has:

```html
aria-live="polite"
```

This lets assistive technology receive timer updates without interrupting the user. Motion is disabled for users who prefer reduced motion.

## Known Limitations

The countdown depends on the visitor device clock. A server-backed time source would be more authoritative, but that would add infrastructure to a page intended to stay static.

There is no analytics, tracking, form handling, or third-party service integration.

## Launch Transition

On May 1, 2026, deploy the main Solea launch or pre-order site to the production domain. This coming-soon repository can then be archived or kept as a historical static page.

If the same domain is reused, replace the deployment target with the main site rather than modifying this temporary page into a full product site.
