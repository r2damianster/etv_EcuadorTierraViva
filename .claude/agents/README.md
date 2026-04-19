# Agentes IA — Ecuador Tierra Viva

Cada agente tiene un **responsable exclusivo** que aprueba sus acciones y mantiene su ficha actualizada.

| Agente | Archivo | Responsable | Alcance |
|---|---|---|---|
| Design Agent | [design-agent.md](design-agent.md) | Arturo Rodríguez | UI, layout HTML/CSS, assets Canva |
| Content Agent | [content-agent.md](content-agent.md) | Arturo Rodríguez | Textos, traducciones, SEO copy |
| Deploy Agent | [deploy-agent.md](deploy-agent.md) | Arturo Rodríguez | Build, Vercel deploy, dominios |
| Review Agent | [review-agent.md](review-agent.md) | Arturo Rodríguez | QA, accesibilidad, links rotos |

## Cómo activar un agente
Invocar desde Claude Code con la instrucción:
```
Activa el [Nombre] Agent para [tarea concreta]
```
Claude cargará la ficha del agente y trabajará dentro de su alcance definido.

## Regla de responsabilidad
- Ningún agente puede realizar acciones fuera de su alcance sin aprobación del responsable.
- Si una tarea cruza el alcance de dos agentes, el responsable decide cuál lidera.
- Los cambios al alcance se documentan en la ficha del agente con fecha.
