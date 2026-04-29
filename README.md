# Solea Coming Soon

Standalone coming-soon page for Solea, a sun-inspired café opening in Abu Dhabi on May 1, 2026.

## Status

This repository contains the temporary pre-launch page only. It is separate from any future full Solea website and can be deployed independently to static hosting.

## Brand

- Name: Solea
- Tagline: Taste the sun
- Launch message: Pre-orders begin May 1, 2026 in Abu Dhabi
- Fonts: DM Serif Display and Inter

## Tech Stack

- Plain HTML, CSS, and JavaScript
- No framework
- No build step
- No runtime dependencies

The `package.json` exists only for local server convenience.

## Run Locally

After cloning from GitHub:

```sh
git clone https://github.com/7mdz9/Solea.git
cd Solea
npx serve .
```

Open the URL printed by `serve`, usually:

```text
http://localhost:3000
```

From the original local workspace, serve the project folder:

```sh
cd /Users/mohamed.alteneiji/Solea/solea-coming-soon
npx serve .
```

Python works too:

```sh
cd /Users/mohamed.alteneiji/Solea/solea-coming-soon
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser. A local HTTP server is preferred for checking Google Fonts and browser behavior.

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
