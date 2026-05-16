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
├── index.html              ← Página principal (EN primario + script i18n)
├── _not-found.html         ← 404
├── 404.html
├── favicon.ico
├── images/                 ← Todos los assets gráficos
├── locales/                ← Sistema i18n EN/ES
│   ├── en.json             ← Textos en inglés (122 claves)
│   ├── es.json             ← Traducciones en español (122 claves)
│   └── i18n.js             ← Motor toggle EN↔ES (text-node walker)
└── .claude/
    ├── settings.json       ← Hook PostToolUse check-i18n-parity
    ├── hooks/
    │   └── check-i18n-parity.py  ← Verifica paridad de claves JSON
    ├── agents/
    │   ├── translate-agent.md    ← Agente de sincronización i18n
    │   └── ...
    ├── mcp/
    └── docs/
```

## Sistema i18n EN/ES
- **Idioma primario:** inglés (EN). El HTML queda en inglés.
- **Toggle:** botón EN/ES inyectado en navbar por `i18n.js`
- **Motor:** text-node walker — sin `data-i18n` en HTML, cero modificación al markup
- **Persistencia:** `localStorage('etv-lang')`
- **Archivos de traducciones:** `locales/en.json` y `locales/es.json`

### Regla de oro i18n
**Al agregar o cambiar texto en el sitio:**
1. Agregar/actualizar clave en `locales/en.json`
2. Agregar/actualizar la misma clave en `locales/es.json`
3. Verificar: `python .claude/hooks/check-i18n-parity.py`

El hook `PostToolUse` lanza la verificación automáticamente tras editar cualquier `locales/*.json`.

## Imports de contexto extendido
@.claude/docs/architecture.md
@.claude/docs/workflow.md
@.claude/docs/contacts.md
@.claude/agents/README.md
@.claude/agents/translate-agent.md
@.claude/mcp/README.md

## Reglas de trabajo en este proyecto
1. Nunca editar archivos de `images/` sin respaldo previo.
2. Todo commit debe ir firmado: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
3. No commitear sin instrucción explícita de Arturo.
4. El deploy a Vercel se ejecuta solo tras aprobación del responsable de deploy.
5. Los cambios al `index.html` requieren revisión de contenido antes de publicar.
6. Responder siempre en español.
