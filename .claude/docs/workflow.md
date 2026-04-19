# Flujo de trabajo — ETV

## Ciclo estándar de cambios

```
1. PLANIFICACIÓN
   Arturo describe el cambio → Claude identifica el agente responsable

2. IMPLEMENTACIÓN
   Agente asignado edita los archivos dentro de su alcance
   (Design → index.html estructura/estilos)
   (Content → index.html textos/meta)

3. REVISIÓN
   Review Agent ejecuta checklist pre-deploy
   Reporta hallazgos a Arturo

4. APROBACIÓN
   Arturo aprueba o solicita correcciones

5. DEPLOY
   Deploy Agent ejecuta deploy via Vercel MCP
   Verifica URL de producción

6. COMMIT (si aplica)
   Solo si Arturo lo solicita explícitamente
```

## Flujo de assets (imágenes)
```
Fuente (Canva / Drive / local)
  → Design Agent descarga/genera el asset
  → Guarda en images/ con nombre descriptivo (kebab-case)
  → Referencia en index.html con ruta relativa: images/nombre-archivo.jpg
  → Review Agent verifica alt text
  → Deploy Agent publica
```

## Convenciones de nombres de archivos
| Tipo | Convención | Ejemplo |
|---|---|---|
| Imagen de proyecto | `proyecto-[nombre].jpg` | `proyecto-arajuno.jpg` |
| Banner/hero | `banner-[seccion].jpg` | `banner-hero.jpg` |
| Logo/ícono | `logo-[entidad].png` | `logo-lata-foundation.png` |
| Foto de persona | `equipo-[nombre].jpg` | `equipo-dunia.jpg` |

## Comandos de mantenimiento
```bash
# Ver archivos modificados sin commitear
git status

# Ver diferencias
git diff index.html

# Ver historial de cambios
git log --oneline -10
```

## Checklist pre-deploy (rápida)
- [ ] Cambios revisados por Review Agent
- [ ] Arturo aprobó
- [ ] Imágenes nuevas en `images/` y referenciadas correctamente
- [ ] Meta tags actualizados si cambió el contenido principal
