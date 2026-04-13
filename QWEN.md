# Qwen — Project Instructions

> Instructions for using Qwen (via Ollama, OpenWebUI, or Qwen API) as an AI coding assistant on this project.

## Project Summary

**Ecuador Tierra Viva Foundation** — NGO website for a cultural and environmental organization in Ecuador.

| Field | Value |
|---|---|
| Stack | Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4 |
| Output | Static HTML export (`out/` → `ecuador-tierraviva-html/`) |
| Entry point | `src/app/page.tsx` |
| Components | `src/components/*.tsx` (14 components) |
| Styles | `src/globals.css` (CSS custom props) + Tailwind utilities |

## Using Qwen Locally (Ollama)

```bash
# Run Qwen 2.5 Coder (recommended for code tasks)
ollama run qwen2.5-coder

# Or via OpenWebUI at localhost:3000 (if running)
# Select model: qwen2.5-coder:7b or qwen2.5-coder:14b
```

## Prompt Strategy for This Project

When asking Qwen to modify components, always include:

1. **The component file content** (paste from `src/components/`)
2. **CSS custom properties** (relevant vars from `globals.css`)
3. **The constraint**: static export — no server components with dynamic data, no API routes

### Example prompt template
```
Project: Ecuador Tierra Viva — Next.js 16 + React 19 + TypeScript + Tailwind v4. Static export.

File: src/components/[ComponentName].tsx
[paste file content]

Task: [describe what you want to change]

Constraints:
- Use 'use client' only if hooks/state are needed
- Images referenced as /images/filename.ext (no next/image optimization)
- Use CSS classes from globals.css or Tailwind utilities, not inline styles
```

## Key Files to Provide as Context

| Task | Files to include |
|---|---|
| Style changes | `globals.css` + target component |
| New section | `src/app/page.tsx` + existing similar component |
| Navigation | `NavBar.tsx` + `globals.css` |
| Content updates | Target component only |
| Build issues | `next.config.ts` + `package.json` |

## Shared Rules

See `AGENTS.md` for rules that apply to all AI assistants on this project.

## Qwen Model Recommendations

| Task | Recommended Model |
|---|---|
| Code generation/editing | `qwen2.5-coder:7b` or `qwen2.5-coder:14b` |
| Content writing (English/Spanish) | `qwen2.5:7b` or `qwen3:8b` |
| Large file analysis | `qwen2.5-coder:14b` |
| Quick fixes | `qwen2.5-coder:1.5b` |

## Token Budget Tips

Qwen context windows vary by model. For large files:
- Use `head -N file.tsx` to share only relevant sections
- Paste only the function/component that needs changing, not the whole file
- For `globals.css`, extract only the CSS variables block
