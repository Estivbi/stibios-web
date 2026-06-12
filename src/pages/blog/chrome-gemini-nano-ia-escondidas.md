---
layout: ../../layouts/BlogPost.astro
title: "Chrome te está instalando 4GB de Inteligencia Artificial a escondidas (y por qué debería importarte)"
description: "Google está descargando el modelo Gemini Nano en los ordenadores de los usuarios sin avisar y sin un botón claro para apagarlo. Hablemos de transparencia en el software."
date: "2026-05-14"
author: "Carolina Rodríguez Bárcena"
tag: "IA"
image: "/img/chrome-gemini-nano.webp"
draft: false
---

Si usas Google Chrome, es muy probable que tengas una carpeta oculta en tu disco duro llamada `OptGuideOnDeviceModel` que pesa más de 4 Gigabytes. 

Tú no la has descargado. Tú no has aceptado ningún aviso. Y si la borras, Chrome volverá a descargarla silenciosamente mientras navegas.

¿Qué es esto? Es **Gemini Nano**, el modelo de Inteligencia Artificial local de Google.

## La buena intención técnica vs. La pésima ejecución

Como desarrollador, entiendo perfectamente por qué Google está haciendo esto. La idea de tener un modelo de IA "local" (que viva en tu ordenador y no en la nube) es brillante por dos motivos:
1. **Privacidad:** La IA puede analizar si una web es una estafa o resumirte un documento privado sin tener que enviar tus datos a los servidores de Google.
2. **Velocidad:** Al ejecutarse en tu propia máquina, la respuesta es inmediata.

Desde un punto de vista de ingeniería, empujar el procesamiento al ordenador del usuario es el futuro. 

El problema no es la tecnología. **El problema es el consentimiento.**

## La ilusión del control

Cuando instalas un software, confías en que hará lo que dice la caja. Chrome, que empezó siendo un navegador ligero y rápido, se ha convertido en un sistema operativo gigante que toma decisiones por ti.

Si vas a los ajustes de Chrome, no vas a encontrar un botón grande y rojo que diga "Desactivar IA local". Para apagar esto tienes que bucear en opciones ocultas para desarrolladores (`chrome://flags`). Están forzando la adopción tecnológica haciendo que desactivarla sea una carrera de obstáculos.

Compáralo con **Firefox**. En su última versión, han añadido un panel centralizado llamado "Controles de IA". Entras, lo apagas todo con un clic si quieres, y a otra cosa. Transparencia absoluta.

## Lo que esto nos enseña a los que construimos software

Este movimiento de Google es exactamente el tipo de prácticas contra las que peleo todos los días. 

En la industria del software (y en el desarrollo web en particular), nos hemos acostumbrado a tratar al usuario como si fuera tonto. Le metemos scripts ocultos, le cobramos mantenimientos que no entienden y le instalamos "mejoras" que nunca pidieron solo porque nosotros, los técnicos, creemos que es lo mejor.

**En Stibios Labs la filosofía es radicalmente opuesta:** la tecnología debe servir al usuario, no al revés. 

Si construimos una automatización o integramos IA en el negocio de un cliente, lo hacemos para que él tenga el control. Con paneles claros, explicándole qué hace cada cosa y dándole siempre el botón de apagado.

La Inteligencia Artificial es una herramienta increíble, pero la confianza del usuario es el activo más valioso de cualquier negocio. Y Google, por meter la IA con calzador, está jugando con fuego.

*Si quieres comprobar si tienes esos 4GB ocupados y no sabes cómo limpiar tu navegador, escríbeme y te echo un cable.*
