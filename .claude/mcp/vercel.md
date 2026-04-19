# MCP Vercel — ETV

## Responsable exclusivo
**Arturo Damián Rodríguez Zambrano** · arturo.rodriguez30@gmail.com

## ID del servidor
`0ce0591e-5cce-4ee9-afd9-80965f1ac690`

## Agente que lo usa
[Deploy Agent](../agents/deploy-agent.md)

## Herramientas autorizadas para este proyecto
| Herramienta | Propósito | Requiere confirmación |
|---|---|---|
| `deploy_to_vercel` | Deploy del sitio | Sí — siempre |
| `list_deployments` | Ver historial | No |
| `get_deployment` | Estado de un deploy | No |
| `get_deployment_build_logs` | Debug de build | No |
| `get_runtime_logs` | Logs de producción | No |
| `list_projects` | Ver proyectos en cuenta | No |
| `get_project` | Info del proyecto ETV | No |

## Herramientas NO autorizadas en este proyecto
- `check_domain_availability_and_price` — solo si Arturo lo solicita
- `list_teams` — solo consulta, sin modificaciones

## Configuración del proyecto en Vercel
- **Nombre del proyecto:** ecuador-tierraviva (confirmar en dashboard)
- **Framework:** Static / HTML
- **Build command:** (ninguno — HTML estático)
- **Output directory:** `.` (raíz del repo)

## Procedimiento de emergencia (rollback)
```
1. list_deployments → identificar el deployment previo estable
2. get_deployment → confirmar que el deployment previo tenía status "READY"
3. Comunicar a Arturo el deployment ID para rollback manual en dashboard
   (Vercel MCP no tiene rollback directo — se hace desde la UI de Vercel)
```
