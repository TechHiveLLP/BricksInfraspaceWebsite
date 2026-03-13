# Bricks Infraspace — Project Knowledge Base

> **Purpose:** This file is the single source of truth for AI agents working on this project. It captures architecture, conventions, data flows, and gotchas so that every session starts with full context. Update this file whenever the project evolves — use the `/learn-codebase` skill to trigger a re-scan.

---

## Project Overview

**Company:** Bricks Infraspace — a construction consultancy and turnkey contracting firm based in Ahmedabad, India.
**Domain:** [bricksinfraspace.com](https://bricksinfraspace.com)
**Tagline:** "Building Better Tomorrow"
**Built by:** TechHive LLP

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x |
| React | React | 19.x |
| Styling | Tailwind CSS | 3.4.x |
| Icons | lucide-react | 0.563+ |
| Forms | Web3Forms (external API) | — |
| Deployment | Static export → GitHub Pages | `output: "export"` |
| Fonts | Geist, Geist Mono (next/font/google) | — |

---

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Start (after build) | `npm start` |
| Lint | `npm run lint` (ESLint 9 flat config) |

---

## Project Structure

```
├── Agent.md                    ← This file (project knowledge for agents)
├── WebsiteInfo.md              ← Original content brief from client
├── CNAME                       ← Custom domain: bricksinfraspace.com
├── next.config.ts              ← Static export, unoptimized images, trailing slash
├── tailwind.config.js          ← CSS variable-based theme colors
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout: Header + Footer wrapper, SEO metadata, JSON-LD
│   │   ├── page.tsx            ← Homepage: Hero → About → Services → Projects → CTA
│   │   ├── globals.css         ← CSS variables, custom utilities (.text-gradient, .glass, .hero-pattern)
│   │   ├── robots.ts           ← SEO: allow all
│   │   ├── sitemap.ts          ← SEO: 6 routes
│   │   ├── about/page.tsx      ← Founder bios (Preet & Nilam Doshi), mission/vision, core values
│   │   ├── careers/            ← Job application form (Web3Forms)
│   │   ├── contact/            ← Contact form (Web3Forms) + info cards
│   │   ├── projects/           ← Gallery with completed/ongoing/heritage sections
│   │   └── services/page.tsx   ← 3 service detail sections with alternating layout
│   ├── components/
│   │   ├── Header.tsx          ← Sticky nav, mobile hamburger menu ("use client")
│   │   ├── Footer.tsx          ← 4-column footer with contact info
│   │   ├── Hero.tsx            ← Hero banner with stats (35+ years, 5M+ sq ft)
│   │   ├── AboutSection.tsx    ← Homepage about preview
│   │   ├── ServicesSection.tsx  ← 3-service card grid
│   │   ├── ProjectsSection.tsx  ← Homepage project preview (completed cards + ongoing progress bars)
│   │   ├── CTASection.tsx      ← Red CTA banner with contact buttons
│   │   ├── BeforeAfterSlider.tsx ← Interactive drag/touch image comparison ("use client")
│   │   └── ProjectGallery.tsx  ← Fullscreen modal gallery with keyboard nav ("use client")
│   └── config/
│       ├── projects.ts         ← Central project data, helpers (getProjectCover, getProjectImages)
│       └── projectImages.ts    ← Image path mappings per project key
└── public/
    └── photos for website /    ← All project & team photos (NOTE: folder names have spaces)
        ├── completed projects / ← credai, dutron, hr Group, icai, medrical one
        ├── ongoing projects /   ← Anantbaug, anjani, dutron, shivalik, Suryam
        ├── heritage/            ← before/ and after/ pairs
        ├── nilam_s photo/       ← Co-founder photo
        └── preet_s photo/       ← Founder photo
```

---

## Architecture & Patterns

### Rendering Strategy
- **Static export** (`output: "export"` in next.config.ts) — no server-side rendering.
- `trailingSlash: true` for GitHub Pages compatibility.
- `images.unoptimized: true` because Next.js image optimization requires a server.

### Component Model
- **Server components** by default (no `"use client"` directive).
- **Client components** where interactivity is needed: Header, BeforeAfterSlider, ProjectGallery, CareersPage, ContactPage, ProjectsPage.
- State management via React hooks only (`useState`, `useRef`, `useCallback`, `useEffect`).

### Data Flow
- **No database or CMS.** All content is hardcoded in config files and page components.
- `src/config/projects.ts` — central registry of all projects (completed + ongoing).
- `src/config/projectImages.ts` — maps project keys to image file paths.
- To add a new project: add entry to `projects.ts`, add images to `projectImages.ts`, place photos in `public/photos for website /`.

### Form Submissions
- **Web3Forms API** — external service, no backend needed.
- Contact form key: `e1a3b11b-877c-4856-bfb7-01e37ef26a52`
- Careers form key: `36b97add-0818-4219-b68a-d736c5bfe7f4`
- Both forms handle loading, success, and error states.

### Styling
- Tailwind CSS with **CSS custom properties** defined in `globals.css`.
- Primary color: `#B22222` (firebrick red), dark variant: `#8B1A1A`.
- Custom utilities: `.text-gradient`, `.bg-gradient-primary`, `.hero-pattern`, `.glass`.
- Responsive: mobile-first with `md:` and `lg:` breakpoints.

### SEO
- Metadata exports on all pages (title, description, OpenGraph, Twitter cards).
- JSON-LD Organization schema in root layout.
- `robots.ts` and `sitemap.ts` for crawler guidance.
- All images have alt text.

### Path Alias
- `@/*` maps to `./src/*` (configured in tsconfig.json).

---

## Key Business Data

| Fact | Value |
|------|-------|
| Experience | 35+ years (group experience) |
| Built space | 5M+ sq. ft. delivered |
| Founder | Preet Doshi |
| Co-founder | Nilam Doshi |
| Phone | +91 89800 37007 |
| Email | bricksinfraspace@gmail.com |
| HR Email | bricksinfra.hr@gmail.com |
| Address | 603, Shapath 5, SG Highway, Ahmedabad |
| Core Services | Construction Consultancy, Turnkey Contracting, Project Management, Heritage Restoration |

### Projects Registry

**Completed:** Dutron Corporate House, ICAI Bhavan, Credai Garden, HR Group, Savy Civic - Medrical One

**Ongoing:** Anjani Farms, Dutron Phase 2, Shivalik Institute, Suryam - By The Waters, Sage - By Repose, Anantbaug Villas, Anantbaug Villas 2

---

## Gotchas & Important Notes

1. **Folder names with spaces:** The `public/photos for website /` directory tree has spaces and trailing spaces in folder names. The `img()` helper in `projectImages.ts` uses `encodeURI()` to handle this. Always use that helper for new image paths.
2. **Static export limitations:** No API routes, no ISR, no SSR, no middleware, no `next/headers`. All pages must be fully static.
3. **Unoptimized images:** `<Image>` from Next.js works but without optimization. Consider image sizes for performance.
4. **Heritage section:** Uses before/after image pairs from `public/photos for website /heritage/`. Data is in `heritageItems` array in `projects.ts`.
5. **No testing setup:** No test framework is configured. If adding tests, install vitest or jest.
6. **No CI/CD config:** Deployment appears manual. Build output goes to `out/` directory.
7. **Scripts folder:** Currently empty — available for build/deploy scripts.
8. **Services page images:** Currently using Unsplash placeholder URLs, not local images.

---

## How to Add Content

### Adding a New Project
1. Add images to `public/photos for website /completed projects /` or `ongoing projects /`.
2. Add image paths in `src/config/projectImages.ts` using the `img()` helper.
3. Add project entry in `src/config/projects.ts` (completed or ongoing array).
4. Set `featured: true` if it should appear on the homepage.

### Adding a Heritage Before/After
1. Add before image to `public/photos for website /heritage/before/`.
2. Add after image to `public/photos for website /heritage/after/`.
3. Add entry to `heritageItems` array in `src/config/projects.ts`.

### Adding a New Page
1. Create `src/app/<route>/page.tsx`.
2. Optionally add `layout.tsx` for metadata.
3. Add route to `src/app/sitemap.ts`.
4. Add navigation link in Header component's `navLinks` array.

---

## File Change Impact Map

| If you change... | Also check/update... |
|------------------|----------------------|
| `projects.ts` | `projectImages.ts`, Projects page, ProjectsSection |
| `projectImages.ts` | Ensure image files exist in `public/` |
| `globals.css` (CSS vars) | `tailwind.config.js` (mirrors the vars) |
| Header nav links | Sitemap, Footer links |
| Contact details | Header, Footer, Contact page, CTA section |
| `next.config.ts` | Build output, deployment workflow |
