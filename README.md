# SteerlingPath

Marketing site built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, Turbopack) — routing, SSR/SSG, image optimization
- **TypeScript** — strict mode
- **Tailwind CSS v4** — brand tokens defined in `src/app/globals.css`

## Project structure

```
src/
  app/
    page.tsx                Home
    about/, services/, placement/, pricing/, success-stories/
  components/
    Header.tsx, Footer.tsx   Shared layout, nav
  lib/nav.ts                 Shared nav link data
public/images/                Logo + photography
```

Every "get started" style CTA site-wide points to
`mailto:Contact@steerlingpath.com` for now — there's no account system or
job board yet, just the marketing pages.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build (webpack — see note below)
npm run start    # run the production build as a real Node server
npm run lint     # ESLint
```

## Deploying (GoDaddy — Node.js hosting)

GoDaddy's build environment runs this as a live Node.js server: it runs
`npm run build` then `npm run start`, and health-checks that a port comes
up. Because of that, this is a normal server-rendered Next.js deploy —
**not** a static export (`output: "export"` would break `npm start`
entirely, since a static export has no server to start).

Two things were changed specifically to make this host work:

1. **`build` uses `--webpack` instead of Turbopack.** Next.js 16 defaults
   to Turbopack, which needs to spawn a subprocess and bind a local port
   while processing CSS. GoDaddy's build sandbox blocks that
   (`Permission denied (os error 13)`), so `package.json` forces the
   classic webpack bundler instead, which doesn't need it.
2. **No `output: "export"` in `next.config.ts`.** Keeps `next start`
   working as an actual server, which is what GoDaddy expects to run.

With those two things in place, GoDaddy's own pipeline handles the
install/build/start — there's nothing else to configure here. Push to
`main` and let it redeploy.

### If GoDaddy ever gives a Turbopack error again

That means something re-added Turbopack to the build path — check
`package.json`'s `build` script still has `--webpack`.

### If you want the cheaper "upload static files" route instead

If you'd rather use GoDaddy's plain file-hosting (cPanel/FTP, no Node.js
runtime, no monthly app-hosting cost) instead of the Node-hosted setup
above, that's also possible — it needs `output: "export"` back in
`next.config.ts` plus a couple of related tweaks (unoptimized images,
trailing slashes, an `.htaccess`). Ask and I'll switch it back; the two
approaches are mutually exclusive, so pick one.

## Content notes

Placeholder values that still need to be swapped for the real business:
contact info/address in `src/components/Footer.tsx`, and the site domain
in `src/lib/site.ts` (used for canonical URLs, sitemap, and Open Graph
metadata — update it once you know your final domain).
