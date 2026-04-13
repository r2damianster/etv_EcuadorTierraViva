# Changelog

All notable changes to the Ecuador Tierra Viva website.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### In Progress
- Multi-language support (ES/EN)
- Contact form with email integration
- Project detail sub-pages

---

## [0.3.0] — 2026-04-13

### Added
- `CHANGELOG.md` — this file
- `QWEN.md` — AI assistant instructions for Qwen/OpenWebUI
- `AGENTS.md` — generic multi-agent rules shared across AI tools
- Comprehensive `README.md` with project architecture and program details
- `CLAUDE.md` — project-specific Claude Code instructions

### Changed
- Documentation fully updated to reflect real project content

---

## [0.2.0] — 2025 (estimated)

### Added
- `Archive.tsx` — historical/executed projects section
- `Festiartes.tsx` — dedicated FESTI-ARTES cultural program component
- `InvestmentOps.tsx` — investment and partnership CTA section
- Hero auto-rotating image slider (5s interval)
- Social media links in Footer (X, Instagram, Facebook, TikTok)

### Changed
- Migrated from plain HTML/CSS to Next.js 16 + React 19 + TypeScript
- Styling migrated to Tailwind CSS v4 with CSS custom properties
- Static export configuration (`output: "export"`)
- Image assets consolidated in `public/images/`

---

## [0.1.0] — Initial Next.js scaffold

### Added
- Next.js 16.2.2 project bootstrapped with `create-next-app`
- Core page sections: NavBar, Hero, OurImpact, WhatWeDo, FeaturedProject, Projects, Partners, AboutUs, Footer
- TypeScript + ESLint configuration
- Outfit font via `next/font`
- Static export to `out/` → mirrors `ecuador-tierraviva-html/`
