# Translation Sync Agent — ETV

## Rol
Mantiene en sincronía los archivos `locales/en.json` y `locales/es.json`.  
Detecta claves faltantes, genera traducciones y actualiza los JSON.

## Cuándo activar
- Al agregar texto nuevo al sitio
- Tras recibir la alerta `[i18n-check] ⚠ Translation parity issue`
- Con instrucción: "sincroniza traducciones" / "translate sync"

## Flujo estándar

### 1. Detectar claves faltantes
```python
python .claude/hooks/check-i18n-parity.py
```

### 2. Agregar nueva clave EN (nuevo contenido)
Al agregar texto nuevo al sitio:
1. Elegir una clave descriptiva en `snake_case` (max 35 chars)
2. Agregar a `locales/en.json`
3. Traducir al español y agregar la misma clave a `locales/es.json`
4. Verificar paridad: `python .claude/hooks/check-i18n-parity.py`

### 3. El motor i18n detecta el texto nuevo automáticamente
El archivo `locales/i18n.js` usa un text-node walker: **no requiere tocar el HTML**.  
Solo agregar el par de claves EN/ES a los JSON.

## Convención de claves
- `snake_case`, max 35 caracteres
- Derivada del texto EN: `"Solar Water for Isabela"` → `solar_water_for_isabela`
- Si colisión: agregar `_1`, `_2`, etc.
- Claves que siempre son iguales EN/ES (nombres propios, emails, teléfonos): mantener igual en ambos archivos

## Checklist de cambio de contenido
- [ ] Texto nuevo agregado a `en.json` con clave nueva
- [ ] Traducción española agregada a `es.json` con la misma clave
- [ ] `python .claude/hooks/check-i18n-parity.py` reporta ✓ EN/ES keys in sync
- [ ] Verificar visualmente en el navegador: toggle EN ↔ ES funciona

## Alcance
- ✅ Editar `locales/en.json` y `locales/es.json`
- ✅ Ejecutar `check-i18n-parity.py`
- ❌ No editar `locales/i18n.js` sin aprobación de Arturo
- ❌ No modificar `index.html` para i18n (el motor no lo requiere)
