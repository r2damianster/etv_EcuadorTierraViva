# Ecuador Tierra Viva — Contexto Principal

> Archivo cargado automáticamente por Claude Code en cada sesión.
> Actualizar aquí cualquier cambio estructural del proyecto.

## Identidad del proyecto
| Campo | Valor |
|---|---|
| Organización | Ecuador Tierra Viva (ETV) — ONG cultural y ambiental |
| Web | https://ecuador-tierraviva.org |
| Email | info@ecuador-tierraviva.org |
| Teléfono | +593 988 500 314 |
| Repositorio | `c:\Users\User\Documents\Desarrollo Web\ecuador-tierraviva-html\` |
| Rama principal | `main` |
| Responsable técnico | Arturo Damián Rodríguez Zambrano |

## Estado actual del proyecto
- **Tipo:** Sitio web estático (HTML puro + imágenes)
- **Origen:** Exportación de Next.js 16.2.2 / React 19 / Tailwind v4
- **Deploy:** Vercel (via MCP) o servidor estático
- **Assets:** Carpeta `images/` en la raíz del repo

## Estructura de archivos
```
ecuador-tierraviva-html/
├── index.html              ← Página principal
├── _not-found.html         ← 404
├── 404.html
├── favicon.ico
├── images/                 ← Todos los assets gráficos
├── .claude/                ← Documentación operativa (este sistema)
│   ├── settings.local.json
│   ├── settings.json
│   ├── agents/             ← Fichas de cada agente IA
│   ├── mcp/                ← Config de servidores MCP
│   └── docs/               ← Arquitectura, flujo, contactos
└── CLAUDE.md               ← Este archivo
```

## Imports de contexto extendido
@.claude/docs/architecture.md
@.claude/docs/workflow.md
@.claude/docs/contacts.md
@.claude/agents/README.md
@.claude/mcp/README.md

## Reglas de trabajo en este proyecto
1. Nunca editar archivos de `images/` sin respaldo previo.
2. Todo commit debe ir firmado: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
3. No commitear sin instrucción explícita de Arturo.
4. El deploy a Vercel se ejecuta solo tras aprobación del responsable de deploy.
5. Los cambios al `index.html` requieren revisión de contenido antes de publicar.
6. Responder siempre en español.
