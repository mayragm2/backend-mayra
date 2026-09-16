# Bloque 3: Modelado Entidad-Relación (ER) de tu propio dominio
## Ejercicio 3: Diseñar el modelo de datos de tu proyecto
Objetivo: Diseñar en draw.io el modelo de datos (entidades, atributos, relaciones) de tu propio proyecto de React, antes de escribir una sola línea de SQL, y entregarlo mediante un Pull Request.

Requerimientos:

Tener draw.io accesible (app.diagrams.net, no hace falta cuenta).
Tener un repo de GitHub con la rama principal protegida (mismo flujo que Backend Introduction — podés reutilizar ese repo, o crear uno nuevo con la misma configuración de rama protegida).
Pasos:

# Elegir el dominio. Usá el mismo dominio de tu proyecto de React (personajes, hechizos, naves, planetas, o el que hayas elegido). Podés pensar en el proyecto que trabajaste en los módulos anteriores como el proyecto de React — solo necesitás tener claro qué entidades maneja ese dominio.

# Explorar el ejemplo guiado (opcional, antes de arrancar). Si todavía no lo hiciste, cargá la mini base de datos de biblioteca (authors → books → loans) — el SQL para crearla está en el MATERIAL de esta clase, sección 6 — y explorala con pgAdmin. Identificá dónde está la clave primaria y dónde la clave foránea antes de diseñar la tuya.

# Modelar en draw.io. Entrá a app.diagrams.net y creá un diagrama nuevo (guardado en "Device", sin necesidad de cuenta). Definí al menos 2 tablas relacionadas entre sí (ej. personajes y casas/facciones, o naves y planetas) — cada tabla como un rectángulo con sus columnas listadas. Cada tabla necesita su clave primaria (columna id). Al menos una clave foránea tiene que marcar la relación entre tus tablas (una flecha entre la columna que referencia y la tabla referenciada).

Si te sobra tiempo. Agregá una tercera tabla con una relación N a N (por ejemplo, personajes y hechizos, si un personaje puede tener varios hechizos y un hechizo puede pertenecer a varios personajes). Pensá cómo modelarías esa relación con una tabla intermedia (no hace falta implementarla todavía, solo identificarla en el diagrama).

Exportar y entregar vía GitHub. Exportá el diagrama como imagen (File → Export as → PNG o SVG), llamalo diagrama-er.png (o .svg). Subilo a tu repo (junto con los archivos de respuestas de los Bloques 1 y 2, si querés juntarlo todo en un mismo PR) y abrí un Pull Request hacia la rama principal. Mergeá el PR (con review si corresponde).

Entregable (enviar por Slack en #canal):

Link al Pull Request (o Pull Requests) mergeado, con los 3 archivos visibles: respuestas-sql-nosql.md, respuestas-normalizacion.md, y diagrama-er.png (o .svg).
Criterios de evaluación:

Bloque 1 y 2: las respuestas muestran que investigaste y entendiste los conceptos (no hace falta que sean perfectas, sí que reflejen comprensión propia).
Bloque 3: al menos 2 tablas relacionadas entre sí, cada una con su clave primaria; al menos una clave foránea correctamente marcada; un PR mergeado con la rama principal protegida y la imagen del diagrama visible en el repo.