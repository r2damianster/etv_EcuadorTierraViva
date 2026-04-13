# Agent Rules — Ecuador Tierra Viva

Shared instructions for ALL AI coding assistants (Claude, Qwen, GPT, Gemini, etc.).

## Project Context

**Ecuador Tierra Viva Foundation** website — a cultural and environmental NGO in Ecuador.
Built with **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**, compiled as a **static HTML export**.

Source repo: `ecuador-tierraviva/` → Static output: `ecuador-tierraviva-html/`

## Hard Rules

1. **Static export only** — no server-side rendering, no API routes, no dynamic segments. `next.config.ts` enforces `output: "export"`.
2. **No `next/image`** — images are unoptimized. Reference images as `/images/filename.ext` directly in `<img>` tags.
3. **`'use client'` only when necessary** — add only to components that use React hooks (`useState`, `useEffect`, etc.).
4. **CSS custom properties first** — use variables from `globals.css` (`hsl(var(--color-primary))`, etc.) before adding new Tailwind utilities or inline styles.
5. **No inline layout styles** — use CSS classes. Inline styles are acceptable only for dynamic values (e.g., computed colors, conditional widths).
6. **Preserve section IDs** — anchor IDs (`id="home"`, `id="projects"`, etc.) are used by NavBar for smooth scrolling. Do not rename them.
7. **Single-page architecture** — all sections are on `page.tsx`. Do not create sub-pages unless explicitly requested.
8. **No mocking** — if you need real contact info, use the data in `Footer.tsx`. Do not invent placeholder data.

## Code Style

- TypeScript strict mode — no `any`, no implicit returns
- Functional components only — no class components
- Named exports for components (`export default function ComponentName`)
- Props typed inline or with `interface`, not `type` aliases for component props

## File Structure

```
src/
  app/
    layout.tsx      # Root layout
    page.tsx        # Assembles all sections (do not restructure)
  components/       # One component per file, PascalCase filename
  globals.css       # All CSS custom properties and global styles
public/
  images/           # Static image assets
```

## Workflow Checklist

Before delivering changes:
- [ ] Does it build? (`npm run build` → no errors)
- [ ] Are section IDs preserved?
- [ ] Are images referenced correctly (`/images/...`)?
- [ ] Is `'use client'` only on components that need it?
- [ ] No new `any` types introduced?

## AI-Specific Instructions

- Claude Code → `CLAUDE.md`
- Qwen → `QWEN.md`
- Other agents → follow this file as the baseline
