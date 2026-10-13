Claro, aquí tienes el post para el blog de Stibios.

---
layout: ../../layouts/BlogPost.astro
title: "Cómo montar recordatorios de cita automáticos (y dejar de perder dinero)"
description: "Una guía sin tecnicismos para dueños de negocios que quieren automatizar sus recordatorios de cita usando herramientas no-code y dejar de sufrir por los no-shows."
date: "2026-10-13"
tag: "IA"
draft: true
---

Cada cita cancelada a última hora o, peor, cada cliente que no aparece, es dinero que se va por el desagüe. Es una silla vacía, una hora perdida, un hueco en tu agenda que ya no puedes llenar. Y lo sabes. Lo que quizá no sabes es que sigues perdiendo ese dinero porque tu sistema de recordatorios es manual, inconsistente o directamente no existe. Estás demasiado ocupado para mandar WhatsApps uno a uno el día antes. Y contratar a alguien solo para eso es un lujo que no te puedes permitir. Vamos a solucionar esto ahora mismo, sin que tengas que escribir una sola línea de código.

## Tu libreta y tu memoria no son un sistema

Seamos honestos. Si tu sistema de citas se basa en una agenda de papel, un Google Calendar a medio rellenar y tu buena voluntad para enviar recordatorios, no tienes un sistema. Tienes un problema esperando a ocurrir. Confías en acordarte, en tener un hueco para escribir, en que el cliente vea el mensaje. Cada uno de esos pasos es un punto de fallo.

La solución no es trabajar más horas ni ser más organizado. La solución es quitarte a ti de la ecuación. Automatizarlo. Que una máquina se encargue de recordar a tus clientes que tienen una cita contigo. Es más profesional, es infalible y te libera una cantidad de tiempo y carga mental que no te imaginas.

## Las dos herramientas que necesitas (y nada más)

Para montar esto no necesitas un software carísimo ni un programador. Necesitas dos cosas:

1.  **Un calendario digital donde pongas las citas.** Me da igual si es Google Calendar, Calendly, Acuity Scheduling o el sistema de reservas que uses. Lo importante es que las citas se creen de forma digital, no en un post-it.
2.  **Una herramienta de automatización.** Nombres como **Zapier** o **Make** son los reyes aquí. Piensa en ellas como pegamento digital. Cogen información de una aplicación (tu calendario) y la usan para hacer algo en otra aplicación (enviar un email o un SMS).

Estas plataformas funcionan con una lógica de "Si pasa esto, haz esto otro". Son visuales, con menús y botones. Si sabes usar Facebook, sabes usar esto. La "inteligencia" está en que el sistema sabe interpretar cuándo hay una cita nueva y qué datos (nombre, hora, teléfono) tiene que usar para el recordatorio.

## El paso a paso: así se conecta todo

Te voy a dar el esquema exacto de cómo funciona una de estas automatizaciones. El objetivo: enviar un SMS de recordatorio 24 horas antes de cada cita.

1.  **El disparador (Trigger):** Lo primero que le dices a Zapier o Make es: "Vigila mi Google Calendar". El disparador sería: "**Nuevo Evento**" o "**Evento que va a empezar**". La herramienta se quedará a la escucha, esperando que se cumpla esa condición.
2.  **El filtro (Opcional, pero recomendado):** No quieres enviar un recordatorio por el cumpleaños de tu primo que tienes apuntado. Así que añades un filtro: "Solo continúa si el título del evento contiene la palabra 'Cita' o 'Reserva'". Así solo actúa sobre las citas de clientes.
3.  **La acción (Action):** Ahora viene la magia. Le dices: "Ok, 24 horas antes de que empiece ese evento, quiero que hagas esto: **Enviar un SMS**". Para esto necesitarás una herramienta como Twilio (es de pago, pero los SMS cuestan céntimos).
4.  **El mensaje:** Por último, escribes el mensaje que recibirá el cliente, pero usando variables. No escribes un texto fijo, sino una plantilla: "Hola [Nombre del Cliente], te recordamos tu cita en [Nombre de tu negocio] mañana a las [Hora del evento]. ¡Te esperamos!". Zapier cogerá el nombre y la hora directamente del evento del calendario.

Y ya está. Lo configuras una vez y te olvidas para siempre. Cada vez que añadas una cita a tu calendario, el sistema se encargará de que tu cliente reciba un recordatorio puntual y profesional sin que tú muevas un dedo.

## La verdad que nadie te cuenta sobre esto

Suena demasiado bien, ¿verdad? Hay un par de cosas que debes saber.

Primero, **no es 100% gratis**. Las versiones gratuitas de Zapier o Make tienen un límite de tareas al mes. Y enviar SMS siempre tiene un coste, aunque sea mínimo. Pero haz las cuentas: ¿cuánto te cuesta una sola cita perdida? La inversión se paga sola con el primer "no-show" que evites.

Segundo, **requiere una tarde de configuración**. No es hacer clic en un botón y listo. Tendrás que crear tus cuentas, conectar las aplicaciones y pensar bien el mensaje. Es una inversión de tiempo inicial. Una tarde de trabajo a cambio de cientos de horas de paz mental en el futuro.

Esto es solo la punta del iceberg de lo que se puede automatizar en un negocio. Si la idea te gusta pero solo de pensarlo te da pereza o no tienes tiempo para montarlo, [escríbeme y vemos cómo implementarlo en tu negocio](https://www.stibios.com/contacto).