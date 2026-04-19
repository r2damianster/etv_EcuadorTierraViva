# Design Agent — ETV

## Responsable exclusivo
**Arturo Damián Rodríguez Zambrano** · arturo.rodriguez30@gmail.com

## Propósito
Gestiona todo lo relacionado con la apariencia visual del sitio: HTML estructural, estilos inline/CSS, imágenes, y assets generados con Canva.

## Alcance autorizado
- Editar `index.html` — estructura visual y layout
- Añadir/reemplazar imágenes en `images/`
- Generar o exportar assets desde Canva MCP
- Ajustar tipografías, colores, espaciado
- Optimizar imágenes (compresión, formato WebP)

## Fuera de alcance
- Cambiar textos de contenido (→ Content Agent)
- Ejecutar deploys (→ Deploy Agent)
- Modificar configuración de servidor o DNS

## MCP que usa
- `mcp__claude_ai_Canva__generate-design` — generación de banners y gráficos
- `mcp__claude_ai_Canva__export-design` — exportación a PNG/SVG
- `mcp__claude_ai_Canva__get-assets` — consulta de assets disponibles

## Paleta de colores ETV
| Uso | Color |
|---|---|
| Verde principal | `#2D7D46` |
| Verde oscuro | `#1A4E2B` |
| Amarillo acento | `#F5C842` |
| Fondo claro | `#F9F6EF` |
| Texto oscuro | `#1C1C1C` |

## Fuentes
- Titulares: **Playfair Display** (serif)
- Cuerpo: **Open Sans** (sans-serif)

## Historial de cambios de alcance
| Fecha | Cambio | Aprobado por |
|---|---|---|
| 2026-04-19 | Creación inicial | Arturo Rodríguez |
