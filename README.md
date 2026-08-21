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
npm run build    # production build
npm run start    # run the production build
npm run lint     # ESLint
```

## Deploying (static export → GoDaddy hosting)

This site is configured as a fully static export (`output: "export"` in
`next.config.ts` — see `src/app/page.tsx` etc., none of them use
server-only features, so this works cleanly). `npm run build` produces a
plain HTML/CSS/JS bundle in `out/` that you upload to any static web host,
including GoDaddy's cPanel/shared "Web Hosting" plan.

**Steps:**

1. Build it:
   ```bash
   npm run build
   ```
   This creates the `out/` folder — that's the entire site.

2. Log into GoDaddy → your hosting plan → **File Manager** (or connect via
   FTP/SFTP using the credentials from your hosting dashboard).

3. Upload **the contents of `out/`** (not the folder itself) into your
   site's web root — usually `public_html/`. So `out/index.html` becomes
   `public_html/index.html`, `out/about/` becomes `public_html/about/`,
   etc.

4. That's it — no build step runs on GoDaddy, no Node.js needed there.
   `.htaccess` (included in `public/`, so it ships in `out/`) makes the
   custom 404 page work and adds basic caching/compression for Apache.

**Every time you change the site:** re-run `npm run build` and re-upload
the new `out/` contents (overwrite the old ones) — there's no
auto-deploy-on-push with this approach, unlike Vercel.

### If you outgrow static hosting later

If you ever add something that needs a server (real search, dynamic user
accounts, an API, etc.), remove `output: "export"` from `next.config.ts`
and deploy to Vercel (or any Node.js host) instead — the rest of the code
doesn't need to change.

## Content notes

Placeholder values that still need to be swapped for the real business:
contact info/address in `src/components/Footer.tsx`, and the site domain
in `src/lib/site.ts` (used for canonical URLs, sitemap, and Open Graph
metadata — update it once you know your final domain).
