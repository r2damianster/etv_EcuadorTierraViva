@AGENTS.md

# Claude Code — Project Instructions

## Project Identity

**Ecuador Tierra Viva Foundation** — cultural and environmental NGO website.
Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Static export.

Source: `ecuador-tierraviva/` → Export output: `ecuador-tierraviva-html/`

## Windows / Token Optimization

Large command outputs MUST be piped through Ollama to avoid context overflow:

```bash
<command> | ollama run llama3.2 "Summarize. Focus on errors or relevant changes. Be concise."
```

Apply this to: `npm run build`, `git diff`, long lint output, test runs.

## Key Conventions

- **Styling**: CSS custom properties in `globals.css` + Tailwind v4 utilities. Never inline styles for layout — use CSS classes.
- **Images**: All assets in `public/images/`. Reference as `/images/filename.ext`. No `next/image` optimization (disabled in config).
- **Components**: One component per file in `src/components/`. Client components get `'use client'` directive only when they use hooks/state.
- **Static export**: `next.config.ts` has `output: "export"`. No dynamic routes or server-only APIs.
- **Sections as anchors**: Section IDs match nav links (e.g., `id="home"`, `id="what-we-do"`).

## Build & Deploy

```bash
npm run dev          # development server
npm run build        # static export → out/
```

After build, copy `out/` contents to `../ecuador-tierraviva-html/` for the HTML snapshot.

## Component Map

| Component | Section ID | Purpose |
|---|---|---|
| NavBar | — | Sticky nav, smooth scroll links |
| Hero | #home | Auto-sliding background images (5s) |
| OurImpact | #impact | Stats/metrics cards |
| WhatWeDo | #what-we-do | Four program pillar cards |
| FeaturedProject | #featured | Highlighted active project |
| Projects | #projects | Grid of active + executed projects |
| Festiartes | #festiartes | FESTI-ARTES cultural program detail |
| Partners | #partners | Partner logos |
| InvestmentOps | #partner-with-us | CTA for donors/partners |
| AboutUs | #about | Team members |
| Archive | #archive | Historical project records |
| Footer | — | Contact + social links |

## Content Reference

- Phone: +593 988 500 314
- Email: info@ecuador-tierraviva.org
- Address: Vicente Ramon Roca E8-18 y 6 de diciembre. 4B, Quito
- Social: X `@ETV_foundation` · IG `@ecuador_tierraviva` · FB `ecuadortierravivaorg` · TikTok `@ecuadortierraviva`
