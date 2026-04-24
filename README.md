# Soléa Coming Soon

Standalone pre-launch landing page for Soléa, serving until pre-orders open on May 1, 2026.

## Status

This repository contains the temporary coming-soon page only. It is separate from the main Soléa website and can be deployed independently to any static hosting platform.

## Tech Stack

- Plain HTML, CSS, and JavaScript
- No framework
- No build step
- No runtime dependencies

The `package.json` exists only for local server convenience.

## Run Locally

From the project root:

```sh
npx serve .
```

Other static servers work too:

```sh
python3 -m http.server 8000
live-server
```

You can also open `index.html` directly in a browser. Some browsers may restrict Google Fonts or asset loading from `file://`, so a local HTTP server is the preferred check.

## Deploy

This project is platform-agnostic static HTML.

Vercel:

```sh
vercel
```

Vercel should auto-detect it as a static project. No build command is needed.

Netlify:

Drag and drop the project folder into Netlify, or connect the repository through Git. Leave the build command empty and publish the repository root.

Cloudflare Pages:

Connect the Git repository. Set the build command to empty and the output directory to `.`.

GitHub Pages:

In repository settings, enable Pages and deploy from the `main` branch root.

## License

MIT. See `LICENSE`.
