# AGENTS.md — Contrato del equipo de agentes de stibios-web

Fuente de verdad para los agentes y las personas que trabajan en este repositorio.

**Reglas comunes (flujo SDD/TDD, ramas, commits, diseño, seguridad):** `.claude/stibios/base.md`. Léelas antes de empezar. Si algo de este archivo choca con la base, manda este archivo.

## Qué es stibios-web

La web pública de Stibios, el proyecto personal de Carolina (no es autónoma ni empresa registrada — es un trabajo aparte de su jornada por cuenta ajena, con el que busca clientes y, con suerte, construir algo propio a futuro). Muestra servicios de desarrollo web y automatización con IA, los productos propios (Padelmix, Madring Guide, Stibios Agents, Identica, Trend Agent) y un blog. Su objetivo de negocio es captar leads a través de `/contacto`.

Tablero de tickets: Jira, proyecto SW (`stibios.atlassian.net/jira/software/projects/SW`). Decisiones de arquitectura en `docs/adr/`. Estado actual en `docs/estado.md`.

## Stack

- Frontend: Astro 5 (SSG) + islas de React 19 (`client:idle`/`client:load`) + Tailwind CSS 4 + lucide-react
- Backend: ninguno propio. El formulario de contacto envía a Web3Forms (servicio externo) con hCaptcha; no hay API ni lógica de servidor en este repo
- Base de datos: ninguna
- Despliegue: Vercel, build y deploy automáticos al hacer push a `master` o abrir PR (preview deploy). `@vercel/analytics` instalado para tráfico; `@astrojs/sitemap` genera el sitemap en cada build

## Equipo de agentes

Los subagentes viven en `.claude/agents/<nombre>.md`. Se ajustaron respecto al kit genérico: sin `backend` (no aplica, no hay API/BBDD) y con `contenido-seo` en su lugar, porque el problema real del proyecto ahora mismo es de visibilidad SEO, no de arquitectura de datos. `devops` también se acotó: aquí no hay `infra/` ni contenedores, solo Vercel y las PRs automáticas del agente de blog.

| Agente | Rol | Es dueño de | Puede escribir |
|---|---|---|---|
| arquitecto | Diseño, specs y ADRs | `docs/adr/`, `docs/specs/` | Solo documentación |
| frontend | Interfaz | `src/components/`, `src/layouts/`, `src/pages/` (salvo blog y tags), `src/styles/` | Sí |
| contenido-seo | Blog, SEO on-page, schema.org, sitemap | `src/pages/blog/`, `src/lib/slug.ts`, bloques JSON-LD, `public/robots.txt`, `public/llms.txt` | Sí |
| seguridad | Revisión de seguridad | — | No (solo informa) |
| devops | Salud del deploy en Vercel, validación de PRs del agente de blog | `.github/` (si se crea) | Sí |
| documentacion | Docs de ticket y estado | `docs/tickets/`, `docs/estado.md`, `README.md` | Solo documentación |
| pr-reviewer | Revisión de la rama contra su spec | — | No (solo informa) |

## Estructura del repositorio

```
src/
├── assets/       # imágenes e imports optimizados por Astro
├── components/   # componentes .astro y .tsx reutilizables
├── layouts/      # Layout.astro (shell global), BlogPost.astro
├── lib/          # utilidades (slug.ts)
├── pages/        # rutas — cada .astro/.md es una página
│   ├── blog/     # posts (.md) + tag/[tag].astro (rutas dinámicas)
│   └── servicios/
└── styles/       # CSS global
```

Las carpetas se crean cuando el ticket que las necesita las introduce; no se versionan carpetas vacías.

## Arquitectura

Sin capas: es un sitio Astro generado estáticamente (SSG), sin API propia. Cada página en `src/pages/` compone componentes de `src/components/` y usa `src/layouts/Layout.astro` como shell común (meta tags, schema.org base, navbar, analytics). Las islas de React (`TerminalHero`, `ShareButtons`, `ReadingProgressBar`) son las únicas partes con hidratación en cliente; todo lo demás se renderiza en build.

## Entorno y comandos

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción (lo mismo que ejecuta Vercel)
npm run preview  # sirve el build de dist/
```

No hay linter, tipos estrictos (TS `strict`) ni tests configurados todavía — es una carencia real del proyecto, no un olvido de esta plantilla. El flujo SDD/TDD de la base asume que existen; hasta que se configuren, "ticket terminado" en este repo significa como mínimo: `npm run build` sin errores y verificación manual en navegador (capturas en los tres breakpoints cuando el ticket toca UI).

## Particularidades del proyecto

- Un agente de IA externo (no vive en este repo) genera posts de blog automáticamente y abre una PR por post, en ramas `blog/<fecha>-<slug>`. Esas PRs fallan Vercel con frecuencia por frontmatter mal formado (texto o \`\`\`markdown antes del primer `---`). El agente `devops` valida y corrige esto antes de que Carol fusione.
- Todos los posts nuevos se crean con `draft: true`; publicar es un cambio de una línea (`draft: false`) que decide Carol, no el agente.
- El negocio real de este proyecto depende de SEO/contenido más que de diseño ahora mismo: según Google Search Console, el dominio recibe ~9 clics orgánicos en 3 meses y páginas clave de conversión (`/contacto`, `/servicios/producto-a-medida`) tienen cero impresiones. Antes de proponer cambios de diseño, confirma que no hay una causa de visibilidad SEO más urgente sin resolver.
- `DESIGN.md` existe pero está sin rellenar a propósito — se completará solo si/cuando haga falta tocar diseño, no antes (decisión explícita de Carol).
