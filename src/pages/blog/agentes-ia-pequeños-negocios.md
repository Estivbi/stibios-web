---
layout: ../../layouts/BlogPost.astro
title: "Agentes de IA para pequeños negocios: qué son y por qué cambian las reglas"
description: "La automatización tradicional ejecuta tareas repetitivas. Los agentes de IA toman decisiones. Te explico la diferencia con los casos reales que estoy construyendo."
date: "2026-05-27"
author: "Carolina"
tag: "IA"
image: "/img/agentes-de-ia.webp"
draft: false
---

En el post anterior hablé de automatización: si pasa A, haz B. Confirmación de cita, factura automática, recordatorio por email. Útil, concreto, y ya disponible para cualquier negocio que quiera recuperar horas de su semana.

Pero hay un salto cualitativo que está pasando ahora mismo en el desarrollo de software y que vale la pena entender antes de que todo el mundo lo dé por sentado.

## La diferencia entre automatización y un agente

Una automatización sigue reglas fijas que alguien programó. **Un agente de IA toma decisiones.**

No es un simple debate semántico. Es una diferencia práctica enorme.

Una automatización te manda un recordatorio de cita 24 horas antes. Siempre. Sin excepción. Sin contexto.

Un agente de IA puede "leer" que ese cliente ha cancelado dos veces seguidas, decidir que quizás merece un recordatorio más personalizado, redactarlo teniendo en cuenta el historial y enviarlo. Todo esto sin que tú hayas programado ese caso específico.

## Qué estoy construyendo (Casos reales)

Llevo meses construyendo una plataforma de agentes para gestionar la operativa de mis propios proyectos. Se llama *Stibios Agent Platform* y corre 24/7 en un servidor.

Ahora mismo tiene dos agentes trabajando en la sombra:

**1. El News Intelligence Agent:**
Se despierta cada mañana a las 7:00. Lee automáticamente decenas de fuentes —blogs de IA, HackerNews, Vogue, resultados de pádel— y decide qué es relevante para cada uno de mis proyectos. 
No aplica una regla básica de "buscar palabras clave". Usa un modelo de lenguaje para entender el contexto de cada noticia y le asigna una puntuación de relevancia. Lo que no llega a 6 sobre 10, se descarta. Lo que sí pasa el filtro, se sintetiza en un resumen accionable. Todo este filtrado masivo corre sobre la API de Gemini, que aguanta perfectamente esa carga.

**2. El Dev Briefing Agent:**
Se despierta a las 8:00 y revisa todos mis repositorios de GitHub (Influ-ia, Pádel Mix, Revista Victoria y la propia plataforma de agentes). Lee cada *pull request* e *issue* abierto, evalúa la urgencia (¿está bloqueando producción?, ¿lleva más de 7 días sin atención?) y me manda un resumen por Telegram antes de que yo haya abierto el ordenador.

Cada mañana a las 8:05, recibo en el móvil algo así:

![Captura real del Dev Briefing Agent en Telegram](/img/dev-briefing-telegram.webp)

Sin abrir GitHub. Sin revisar cuatro proyectos uno por uno. El agente ya ha hecho ese trabajo de triaje por mí.

## Por qué esto importa para un pequeño negocio

Yo uso esto para gestionar proyectos de software, pero la lógica es la misma para una clínica, una peluquería o un comercio local.

Imagina un agente que cada semana **revisa las reseñas de Google de tu negocio**, identifica patrones ocultos (ej. "tres clientes mencionan que la sala de espera estaba fría, dos dicen que no encontraron aparcamiento") y te manda un resumen con lo que de verdad está afectando a tu reputación. Sin que tú tengas que leer 50 reseñas una por una.

O un agente que monitoriza **cuándo llevas más de 48 horas sin responder a un presupuesto**, detecta qué clientes tienen más probabilidad de cerrar (según su historial) y te manda un recordatorio con contexto: *"Este cliente preguntó por el servicio premium, ha visitado tu web tres veces esta semana. Llámalo"*.

Eso no es una automatización con reglas fijas. Es un sistema que entiende el contexto y toma decisiones dentro de los límites que tú le marques.

## Lo que todavía no hacen bien (La letra pequeña)

Los agentes de IA no son perfectos ni mágicos. Cometen errores. A veces mi agente clasifica mal una noticia o el resumen pierde un matiz importante. Necesitan supervisión, especialmente las primeras semanas de vida.

Además, el coste de consultar a los modelos de lenguaje se acumula rápido si no diseñas bien el sistema. En mi plataforma, uso Gemini para el trabajo de filtrado masivo —que se ejecuta miles de veces— porque Google ofrece un tier gratuito muy generoso. Sin embargo, reservo Claude para la escritura y síntesis final, donde la calidad del texto sí es crítica. 

Esta decisión de arquitectura es la diferencia entre un sistema rentable y un juguete que te cuesta más dinero del que te ahorra.

## Dónde estamos ahora mismo

Los agentes de IA útiles para pequeños negocios no son ciencia ficción de 2030. Existen hoy, funcionan, y el coste de la infraestructura base es ridículamente bajo: mi plataforma entera corre en un servidor de 4€ al mes.

Lo que falta no es tecnología. Falta saber qué problema concreto de tu negocio tiene sentido resolver con ella, y construirlo bien.

Ese es exactamente el tipo de tecnología que estoy empezando a integrar en los proyectos de Stibios. Si tienes un proceso en tu negocio que te tiene harto de revisar manualmente todos los días, [hablemos](/#contacto).
