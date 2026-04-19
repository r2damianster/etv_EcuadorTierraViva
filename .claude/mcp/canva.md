# MCP Canva — ETV

## Responsable exclusivo
**Arturo Damián Rodríguez Zambrano** · arturo.rodriguez30@gmail.com

## ID del servidor
`b30e0f93-3a46-41c1-9f3b-66fbd31e380c`

## Agente que lo usa
[Design Agent](../agents/design-agent.md)

## Herramientas autorizadas para este proyecto
| Herramienta | Propósito | Requiere confirmación |
|---|---|---|
| `generate-design` | Crear banners, gráficos | No |
| `generate-design-structured` | Diseño con estructura definida | No |
| `export-design` | Exportar PNG/SVG/PDF | No |
| `get-assets` | Consultar assets disponibles | No |
| `get-design` | Ver diseño existente | No |
| `get-design-thumbnail` | Preview rápido | No |
| `search-designs` | Buscar diseños guardados | No |
| `list-brand-kits` | Ver guías de marca | No |
| `upload-asset-from-url` | Subir imagen externa | Sí |

## Herramientas NO autorizadas en este proyecto
- `create-folder`, `move-item-to-folder` — gestión de cuenta, no de proyecto
- `comment-on-design`, `reply-to-comment` — usar solo si hay revisión activa

## Guía de marca ETV en Canva
- Buscar brand kit con `list-brand-kits` antes de crear cualquier diseño
- Siempre usar los colores ETV (#2D7D46, #F5C842, #F9F6EF)
- Fuentes: Playfair Display (títulos) + Open Sans (cuerpo)
- Logo: archivo `images/logo-etv.png` (o buscar en Canva con "ETV logo")

## Formatos de exportación por tipo de asset
| Tipo | Formato | Resolución |
|---|---|---|
| Banner web | PNG | 1200×400 px |
| Hero image | JPG | 1920×800 px |
| Ícono/logo | SVG | — |
| Imagen de proyecto | JPG | 800×600 px |
