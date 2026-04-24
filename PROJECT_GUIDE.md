# Project Guide

## Architecture

This is a single-page static site. The page has no framework, no build step, and no production JavaScript beyond the countdown timer.

The source design came from `Solea_Coming_Soon.html`. The visual design, copy, colors, typography, botanical corner flourishes, countdown structure, and launch target were preserved while the code was split into maintainable files.

## Files

`index.html`

Owns the document structure, metadata, Google Fonts link, decorative inline botanical SVGs, logo image reference, countdown markup, and contact links. Edit this file for copy, metadata, or markup changes.

`styles/main.css`

Owns all visual styling, design tokens, layout, animation, and responsive behavior. Edit this file for spacing, typography, color, and breakpoint changes.

`scripts/countdown.js`

Owns the countdown calculation and post-launch state. Edit this file only for timer behavior.

`public/assets/logo.png`

Contains the provided source logo image as exact PNG bytes extracted from the original embedded base64 image. The brief referred to an inline logo SVG, but the supplied file used a base64 PNG inside an `<img>`.

`public/assets/logo.svg`

Kept as a compatibility/provenance asset because the requested structure named `logo.svg`. The page uses `logo.png` for better transfer size and faster mobile LCP.

`robots.txt`

Allows crawlers to index the page.

`package.json`

Provides optional local server scripts. It does not define a build pipeline or dependencies.

## Design System

Design tokens live at the top of `styles/main.css` in `:root`.

Colors:

- `--cream`, `--cream-deep`, `--cream-soft`
- `--bronze`, `--bronze-light`, `--bronze-deep`
- `--sage`, `--sage-light`, `--sage-deep`
- `--terracotta`, `--terracotta-soft`
- `--olive-deep`, `--ink`, `--muted`, `--dim`

Typography:

- Fraunces for the main wordmark-style title, countdown numerals, date emphasis, and post-launch message
- Cormorant Garamond italic for the tagline, launch line, and contact details
- Inter for labels, controls, and structural UI text

Only the used Google Fonts weights are loaded:

```text
Cormorant Garamond italic 400
Fraunces 400, 500
Inter 300, 500
```

## Countdown

The launch target is fixed and must not be changed without an explicit launch decision:

```js
new Date("2026-05-01T00:00:00+04:00")
```

The timer updates once per second. Values are derived from the visitor device clock, so a wrong local clock can show an inaccurate remaining time. There is no server-side time authority in this static project.

When the target time has passed, `scripts/countdown.js` adds `.launched` to `document.body`, sets all values to zero, hides the countdown through CSS, and reveals the existing post-launch message.

## Responsive Strategy

The base layout keeps the original desktop composition. Additional breakpoints cover common modern devices:

- `max-width: 720px`: countdown switches from 4 columns to 2 columns
- `max-width: 480px`: mobile logo scales to about 30-40% viewport width, contact details stack, corners shrink, and touch targets remain at least 44px tall
- `max-width: 380px`: the title has an extra small-screen guard
- `721px-1024px`: tablet corner flourishes use a medium size
- short-height tablet and desktop queries: vertical spacing, logo size, and countdown padding tighten so landscape tablets and 1280x800 laptops stay balanced

Desktop viewports at 1440px and above keep the original full composition and the 880px content max width.

## Performance Notes

The page is static and lightweight. CSS and JavaScript are loaded as external files for cacheability and maintainability. The script is deferred.

Google Fonts keep the original font families but load only used weights with `display=swap`.

The botanical SVGs remain inline because they are small, decorative, and not reused elsewhere. They are marked `aria-hidden`.

The logo asset is external so the HTML stays small and the browser can cache it.

## Accessibility

The page keeps `lang="en"` and uses visible labels for links. The logo image has alt text. Decorative SVGs and inline icons are hidden from assistive technology.

The countdown container has:

```html
aria-live="polite"
```

This lets assistive technology receive timer updates without interrupting the user.

## Known Limitations

The countdown depends on the visitor device clock. A server-backed time source would be more authoritative, but that would add infrastructure to a page intended to stay static.

There is no analytics, tracking, form handling, or third-party service integration.

The supplied design source contained a PNG logo, not a reusable vector SVG. The PNG is used by the page for performance. `logo.svg` is retained as a compatibility wrapper only.

## Launch Transition

On May 1, 2026, deploy the main Soléa launch or pre-order site to the production domain. This coming-soon repository can then be archived or kept as a historical static page.

If the same domain is reused, replace the deployment target with the main site rather than modifying this temporary page into a full product site.
