# AGENTS.md

## Project Overview

Next.js 15 (App Router) site for VSG Bliss - a curated lounge experience. Static generation ready for deployment.

## Developer Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint    # ESLint
```

## Architecture

- **Framework:** Next.js 15 with App Router (`app/` directory)
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Fonts:** Noto Serif (headlines), Manrope (body)
- **Components:** React Server Components by default, `'use client'` for interactivity

## Design System

Design tokens in `app/globals.css` and `lib/design-system.ts`:

| Token | Value |
|-------|-------|
| Background | `#131313` |
| Primary | `#4E0707` (Burgundy) |
| Accent | `#E9C349` (Gold) |
| Text | `#e5e2e1` |
| Muted | `#dbc0bd` |

**Important:** No borders - use tonal color shifts (`surface-container-low`, `surface-container-high`).

## Key Files

- `app/layout.tsx` - Root layout with Navigation/Footer
- `app/page.tsx` - Home page
- `components/Hero.tsx` - Reusable hero section
- `components/Navigation.tsx` - Glassmorphism nav bar
- `components/Footer.tsx` - Site footer

## Pages

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/events` | `app/events/page.tsx` |
| `/artists` | `app/artists/page.tsx` |
| `/contact` | `app/contact/page.tsx` |

## Deployment

Ready for Railway or any Node.js host. Build output is static - can also deploy to Vercel/Cloudflare.