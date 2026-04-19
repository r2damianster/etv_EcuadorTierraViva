# Arquitectura del proyecto — ETV

## Tipo de sitio
Sitio web estático (HTML puro). No hay framework activo, no hay servidor backend, no hay base de datos.

## Árbol de archivos relevante
```
ecuador-tierraviva-html/
├── index.html              ← Página única principal (SPA-like)
├── _not-found.html         ← Página 404 personalizada
├── 404.html                ← Alias de 404
├── favicon.ico
├── images/                 ← Todos los assets (JPG, PNG, GIF, SVG)
│   ├── bg-etv.jpg          ← Hero background
│   ├── logo-etv.png        ← Logo principal (confirmar nombre)
│   └── [~100+ archivos]
└── .claude/                ← Sistema de contexto Claude Code
```

## Secciones del index.html
El sitio original en Next.js tenía estas secciones (verificar en HTML actual):
1. **NavBar** — navegación principal
2. **Hero** — imagen de portada + CTA
3. **OurImpact** — métricas de impacto
4. **WhatWeDo** — áreas de trabajo
5. **FeaturedProject** — proyecto destacado
6. **Projects** — grid de proyectos
7. **Festiartes** — festival de artes
8. **Partners** — aliados y socios
9. **InvestmentOps** — oportunidades de inversión
10. **AboutUs** — quiénes somos
11. **Archive** — archivo histórico
12. **Footer** — contacto y redes

## Origen del HTML
Exportación estática generada con `next build` + `output: "export"` desde el proyecto fuente Next.js. El HTML resultante es autocontenido.

## Hosting
- **Plataforma:** Vercel (static hosting)
- **Dominio:** ecuador-tierraviva.org
- **CDN:** Vercel Edge Network (global)

## Limitaciones del sitio estático
- Sin formularios funcionales (requeriría servicio externo como Formspree)
- Sin búsqueda interna
- Sin CMS (cambios = editar HTML directamente)
- Sin analytics integrado (agregar Google Analytics si se necesita)
