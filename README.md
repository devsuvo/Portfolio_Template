# Suvo Dev – Digital Agency Website

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

> The npm scripts call `node node_modules/next/dist/bin/next` directly, because the
> `&` in the parent folder name ("React & Next JS") breaks the normal `next` command on Windows.

## Where to edit

| What | File |
| --- | --- |
| All text, links, images (Unsplash URLs) | `src/data/site.js` |
| Colors, font sizes, animations | `src/app/globals.css` (`@theme` block) |
| Header / footer | `src/components/layout/` |
| Home page sections | `src/components/sections/` |
| Buttons, badge, counters, logo | `src/components/ui/` |
| Inner pages (blog, pricing, login, …) | `innerPages` in `src/data/site.js` → `src/app/[slug]/page.js` |
| Contact page | `src/app/contact/page.js` |
