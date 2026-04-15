# Copilot Instructions — Bricks Infraspace Website

## Project Overview

This is the website for **Bricks Infraspace**, a construction consultancy and turnkey contracting firm based in Ahmedabad, India. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS 3.

## GitHub Pages Compliance

This site is deployed as a **static export to GitHub Pages**. All changes MUST comply with these constraints:

- **Static export only** — `output: "export"` in `next.config.ts`. No API routes, no SSR, no ISR, no middleware, no `next/headers`, no `next/cookies`, no server actions.
- **No image optimization** — `images.unoptimized: true` is required. `<img>` tags or Next.js `<Image>` both work, but no server-side processing.
- **Trailing slashes** — `trailingSlash: true` is required for GitHub Pages routing.
- **File size limits** — Individual files must be under **100MB** (Git hard limit). Keep assets lean; compress images and videos before committing.
- **Repo size** — Keep total repo size under **1GB**. Large source files (e.g., raw .MOV videos) must be `.gitignore`d — only commit web-optimized versions.
- **No server dependencies** — No database, no server-side APIs, no environment variables that require runtime. Forms use Web3Forms (client-side POST to external API).
- **Custom domain** — The `CNAME` file must remain with `bricksinfraspace.com`. Do not delete or modify it.

## Tech Stack & Commands

| Tool | Details |
|------|---------|
| Framework | Next.js 15 (App Router), static export |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 with CSS custom properties |
| Icons | lucide-react |
| Forms | Web3Forms (external API, client-side) |
| Dev | `npm run dev` |
| Build | `npm run build` (output → `out/`) |
| Lint | `npm run lint` |

## Project Structure

- `src/app/` — Pages using App Router. Each route has `page.tsx`, optionally `layout.tsx` for metadata.
- `src/components/` — Reusable components. Use `"use client"` only when interactivity is needed.
- `src/config/` — Data files (`projects.ts`, `projectImages.ts`). All content is hardcoded here, no CMS.
- `public/` — Static assets served as-is. Note: `public/photos for website /` has spaces in folder names — use `encodeURI()` via the `img()` helper in `projectImages.ts`.
- `public/videos/` — Web-optimized video files (MP4, compressed). Source videos in `public/video for website/` are gitignored.

## Coding Conventions

- **Server components by default.** Only add `"use client"` when hooks or browser APIs are needed.
- **Tailwind for all styling.** No CSS modules, no styled-components. Custom utilities are in `globals.css`.
- **CSS custom properties** for theme colors. Primary: `#B22222` (firebrick red). Defined in `globals.css`, mirrored in `tailwind.config.js`.
- **Path alias:** `@/*` maps to `./src/*`.
- **Responsive design:** Mobile-first with `md:` and `lg:` breakpoints.
- **All images need alt text** for accessibility and SEO.
- **SEO:** Every page should export metadata (title, description, OG tags). Root layout has JSON-LD Organization schema.

## Content Management

There is no CMS. All content is hardcoded:

- **Projects:** Add to `src/config/projects.ts` and `src/config/projectImages.ts`. Images go in `public/photos for website /`.
- **Pages:** Create `src/app/<route>/page.tsx`. Update `sitemap.ts` and Header nav links.
- **Contact info:** Duplicated in Header, Footer, Contact page, and CTA section — update all when changing.

## Important Notes

- Folder names under `public/photos for website /` have **spaces and trailing spaces**. Always use the `img()` helper from `projectImages.ts` for image paths.
- The `scripts/` folder is available for build/deploy scripts.
- No test framework is configured. If adding tests, use Vitest.
- Always run `npm run build` to verify the static export succeeds before considering a change complete.
