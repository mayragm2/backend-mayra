# ¿Qué es Node.js? ¿Es un lenguaje, un framework o un entorno de ejecución?
Node.js es un entorno de ejecución para JavaScript.

# ¿Qué diferencia hay entre ejecutar JavaScript en el navegador y ejecutarlo con Node.js?
JavaScript en el navegador está dentro de un contenido de HTML, podes acceder a document e incluso a window como elementos del navegador. Cuando corres JS con Node.js el scope que envuelve a la ejecucion es un global, no un documento de HTML.

# ¿Por qué window y document no existen en Node.js? ¿Qué objeto global tiene Node en su lugar?

Window y document no existen en Node.js porque son elementos del navegador, y al estar ejecutando Node desde el terminal, esos elementos no exiten. El objeto global de Node.js es un Object[global] que contiene todos los metodos de node.js.