# Ecuador Tierra Viva — Foundation Website

Official website of the **Ecuador Tierra Viva Foundation**, a cultural and environmental organization working to improve quality of life in Ecuador through community-driven projects.

## Project Overview

| Field | Value |
|---|---|
| Organization | Ecuador Tierra Viva Foundation |
| Contact | info@ecuador-tierraviva.org · +593 988 500 314 |
| Location | Vicente Ramon Roca E8-18 y 6 de diciembre. 4B, Quito, Ecuador |
| Socials | [@ETV_foundation](https://x.com/ETV_foundation) · [Instagram](https://www.instagram.com/ecuador_tierraviva/) · [Facebook](https://www.facebook.com/ecuadortierravivaorg/) · [TikTok](http://tiktok.com/@ecuadortierraviva) |
| Tech Stack | Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 |
| Output | Static HTML export (`next export`) |
| Deploy | Static hosting (Vercel or similar) |

## Architecture

Single-page application with section-based navigation. All content is statically exported to the `out/` directory.

```
src/
├── app/
│   ├── layout.tsx       # Root layout, Outfit font, metadata
│   └── page.tsx         # Main page — assembles all sections
├── components/
│   ├── NavBar.tsx        # Sticky navigation bar
│   ├── Hero.tsx          # Auto-rotating image slider hero
│   ├── OurImpact.tsx     # Impact statistics/metrics
│   ├── WhatWeDo.tsx      # Four program pillars
│   ├── FeaturedProject.tsx  # Highlighted current project
│   ├── Projects.tsx      # Project cards grid (active + executed)
│   ├── Partners.tsx      # Partner organization logos
│   ├── InvestmentOps.tsx # Investment/partnership CTA
│   ├── AboutUs.tsx       # Team section
│   ├── Festiartes.tsx    # FESTI-ARTES cultural program detail
│   ├── Archive.tsx       # Historical/executed projects archive
│   └── Footer.tsx        # Contact info + social links
├── globals.css           # CSS custom properties + global styles
└── favicon.ico
public/
└── images/              # All static assets (photos, logos, icons)
```

## Program Areas

| Pillar | Description |
|---|---|
| Water & Climate Solutions | Sustainable water systems, climate-resilient infrastructure |
| Environmental Restoration | Watershed recovery, ecosystem protection |
| Community Development | Local economies, sustainable livelihoods |
| Education & Social Impact | Literacy, youth programs, community engagement |

## Key Projects

| Project | Status | Scale |
|---|---|---|
| FESTI-ARTES | Active | 500+ children, 2,000+ participants |
| Book Bus Literacy Program | Active | +10,000 children across Ecuador & Galápagos |
| Solid Waste Recycling Plant (La Concordia) | Executed | 45,000 people, EU-funded |
| Community Eco-Lodge | Executed | Sustainable tourism, Change for Children |
| Medical Brigades | Executed | Multiple provinces |
| Water Supply Projects | Executed | Rural communities |

## Development

```bash
npm install
npm run dev       # localhost:3000
npm run build     # generates static export to out/
```

The `out/` directory is what gets deployed. For an updated HTML snapshot, copy `out/` contents to the `ecuador-tierraviva-html/` sibling folder.

## AI Assistants

This project supports multiple AI coding assistants:

- **Claude Code** → see [`CLAUDE.md`](./CLAUDE.md)
- **Qwen / OpenWebUI** → see [`QWEN.md`](./QWEN.md)
- **Generic agents** → see [`AGENTS.md`](./AGENTS.md)

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).
