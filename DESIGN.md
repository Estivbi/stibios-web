# DESIGN.md — stibios-web

Fuente de verdad visual. El agente `frontend` la lee antes de tocar interfaz. Nada de valores a mano fuera de estos tokens.

## Dirección

- **Una frase:** Instrumento de precisión en modo claro — superficies planas, bordes finos en vez de sombras, un acento cian/morado usado con disciplina, nunca decorativo.
- **Referencia principal:** Linear (linear.app) — se toman sus principios estructurales (bordes de cabello en vez de glow, vocabulario de radios cerrado, jerarquía por nivel de superficie, tracking ajustado en titulares grandes, un acento usado con moderación). **No se copia su paleta** (Linear es oscura; Stibios pasa a claro) ni su tipografía (Stibios mantiene Inter + JetBrains Mono y sus pesos en negrita ya establecidos).
- **Intensidad de estilo:** MEDIA — producto propio pero orientado a conversión (pymes no técnicas), no un dashboard SaaS.

## Tokens

### Color

| Rol | Token | Valor | Uso |
|---|---|---|---|
| Fondo (canvas) | `--color-stibios-bg` | `#FFFFFF` | Fondo de página, full-bleed |
| Superficie | `--color-stibios-surface` | `#F8FAFC` | Cards, nav, secciones contenidas |
| Superficie elevada | `--color-stibios-surface-raised` | `#F1F5F9` | Paneles anidados, hover de superficie |
| Borde (hairline) | `--color-stibios-border` | `#E2E8F0` | Separación por defecto — nunca sombra |
| Borde fuerte | `--color-stibios-border-strong` | `#CBD5E1` | Foco, separadores de mayor contraste |
| Texto | `--color-stibios-text` | `#0F172A` | Titulares, texto de máximo contraste |
| Texto secundario | `--color-stibios-dim` | `#475569` | Cuerpo de texto, metadatos |
| Texto terciario | `--color-stibios-dim-2` | `#94A3B8` | Placeholder, iconos inactivos |
| Acento | `--color-stibios-accent` | `#0E7490` | Única acción primaria por pantalla: CTA, enlaces, estados activos |
| Acento (hover) | `--color-stibios-accent-hover` | `#0891B2` | Hover/active del acento — el cian "vivo" original, reservado para interacción |
| Morado (soporte) | `--color-stibios-purple` | `#7C3AED` | Acento secundario — tags, productos propios. Nunca como CTA principal |
| Éxito | `--color-stibios-success` | `#059669` | Estados live, confirmaciones |
| Aviso | `--color-stibios-warning` | `#D97706` | Estados beta/en desarrollo |

Reglas de uso (de Linear, adaptadas): el acento (`--color-stibios-accent`) es la única acción cromática primaria por pantalla — nunca dos CTAs del mismo peso visual compitiendo. El morado es de apoyo (badges, productos propios), nunca sustituye al acento en un botón principal. Separación entre superficies: borde hairline (`--color-stibios-border`), no sombra. Sombra solo para elevación real (modales, dropdowns), nunca para "glow" decorativo.

### Tipografía

- Titulares: Inter, `font-bold` (700), tracking ajustado (`tracking-tighter` / `-0.02em` en 48px+)
- Cuerpo: Inter, `font-normal` (400) a `font-medium` (500)
- Mono: JetBrains Mono — labels, badges, metadatos, UI técnica (como ya se usa en todo el sitio)
- Escala: se mantiene la actual de Tailwind arbitrario (`text-sm` → `text-8xl`), sin introducir una escala nueva. Los tamaños grandes (`text-5xl` en adelante) llevan `tracking-tighter` o `tracking-tight`.

### Espaciado, radios y elevación

- Escala de espaciado: la escala por defecto de Tailwind (base 4px) — no se introduce una nueva.
- Radios — vocabulario cerrado a 3 roles, inspirado en Linear:
  - **Cards y paneles grandes:** `rounded-2xl` (16px)
  - **Botones, inputs, badges:** `rounded-lg` (8px)
  - **Pills (CTAs redondeados, tags):** `rounded-full`
  - No usar otros radios sueltos (`rounded-xl`, `rounded-3xl`) en componentes nuevos; los existentes se migran al tocar ese componente.
- Sombras/bordes: elevación por borde hairline (`border border-stibios-border`), no por sombra. Excepción: elementos realmente flotantes (modal, dropdown) pueden llevar `shadow-sm` sutil (`0 2px 8px rgba(15, 23, 42, 0.06)`), nunca el glow de color que tenía el tema oscuro.

### Movimiento

- Duraciones y curvas: se mantienen las existentes (`transition-all duration-200/300`, easing por defecto de Tailwind).
- Respeta `prefers-reduced-motion` (ya implementado en varios componentes; extender donde falte).

## Componentes base

- **Botón primario:** fondo `--color-stibios-accent`, texto blanco, `rounded-lg`, sin sombra decorativa. Hover: `--color-stibios-accent-hover`.
- **Botón secundario/ghost:** fondo transparente, borde `--color-stibios-border`, texto `--color-stibios-text`. Hover: borde `--color-stibios-border-strong`.
- **Card:** fondo `--color-stibios-surface`, borde `--color-stibios-border`, `rounded-2xl`. Hover (si es interactiva): borde `--color-stibios-accent` o `--color-stibios-border-strong`, nunca glow de color.
- **Badge/tag:** fondo `--color-stibios-surface-raised`, texto `--color-stibios-dim`, `rounded-lg` o `rounded-full` según contexto, mono.
- **Input:** fondo blanco, borde `--color-stibios-border`, `rounded-lg`. Foco: borde `--color-stibios-accent`.

## Hacer / No hacer

### Hacer
- Separar superficies con borde hairline, no con sombra ni glow.
- Usar el acento con moderación — una acción primaria por pantalla.
- Mantener el morado como color de apoyo, nunca como CTA principal.
- Revisar contraste AA en cada combinación texto/fondo nueva (el acento `#0E7490` y el morado `#7C3AED` ya están verificados sobre blanco).

### No hacer
- No usar los valores neón del tema oscuro anterior (`#00D1FF`, `#AD00FF`) ni sus `rgba()` sueltos — quedan eliminados.
- No escribir colores a mano (`rgba(...)`, hex) fuera de estos tokens.
- No usar más de 3 radios distintos en un mismo componente nuevo.
- No usar sombras de color/glow para destacar una card — eso es el lenguaje del tema oscuro anterior.

## Responsive y accesibilidad

- Puntos de corte: móvil (<640px), tablet (640–1024px), escritorio (1024px+) — los breakpoints `sm`/`md`/`lg` de Tailwind ya en uso.
- Contraste mínimo AA: `--color-stibios-text` sobre `--color-stibios-bg` y `--color-stibios-surface` pasa AAA; `--color-stibios-dim` y `--color-stibios-accent` sobre blanco pasan AA para texto normal.
- Foco visible en todo elemento interactivo (anillo o borde de `--color-stibios-accent`).
- Objetivos táctiles de al menos 44px en móvil.
