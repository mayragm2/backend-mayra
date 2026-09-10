
# Exercise 2
## Curl


### A.1 — Básico (método GET)
Hacé una petición GET al recurso posts/1, usando el flag que muestra el detalle completo de la conexión (incluyendo el handshake).
Observá y anotá:
#### ¿Qué versión de TLS/protocolo aparece en el handshake?
 TLSv1.3
#### ¿Cuál es el código de status de la respuesta?
200 = response OK
#### Anotá al menos 3 headers de la respuesta y qué creés que significa cada uno.
content-type: it is the type of content that is being sent, in this case, is is application/json.
content-length: it is the amount of characters that the response has, in this case, 292
 cache-control: a directive used to specify browser and shared caching policies for requests and response, in this case it specifies max-age, that sets the maximum time in seconds that a resource is considered fresh.


### A.2 — GET con query params
Hacé una petición GET que traiga únicamente los comentarios (comments) que pertenezcan al post con id 1, usando un parámetro de filtro en la URL.

Observá y anotá:
#### ¿Cuántos resultados devolvió?
5

#### ¿Cómo armaste la URL para filtrar?
curl "https://jsonplaceholder.typicode.com/comments?postId=1"

### A.3 — POST
Creá un nuevo recurso en /posts, enviando un body en formato JSON con al menos los campos title, body y userId. Vas a necesitar combinar el flag de método, el header de tipo de contenido, y el flag de datos.
Observá y anotá:
 
#### ¿Qué código de status devolvió?
201
#### ¿Qué id le asignó el servidor al nuevo recurso? ¿Por qué creés que pasa eso, sabiendo que la API no persiste datos?
101, los posteos que estan cargados en la api van del 1 al 100 y este posteo 101 nunca entra en esta lista. Siempre que haces un POST te devuelve el mismo codigo 101. Como dice la documentacion de la API, ésta finge una respuesta para poder probar los métodos más comunes de APIs.

### A.4 — PATCH o PUT
Modificá el recurso posts/1, cambiando únicamente el campo title.
Observá y anotá:

curl -i -X PATCH https://jsonplaceholder.typicode.com/posts/1/ \
     -H "Content-Type: application/json" \
     -d '{"title": "foo"}'

curl -i -X PUT https://jsonplaceholder.typicode.com/posts/1/ \
     -H "Content-Type: application/json" \
     -d '{"id": "1","title": "foo", "body":"hi", "userId":"3"}'
#### ¿Qué diferencia notás (o investigás) entre usar PUT y PATCH?
PUT reemplaza el recurso completo, mientras que PATCH solo reemplaza los valores que le pasas.


#### ¿El body de la respuesta refleja el cambio que mandaste?

Si, me devuelve el componente cambiado.


### A.5 — DELETE
Eliminá el recurso posts/1.
curl -i -X DELETE https://jsonplaceholder.typicode.com/posts/1/ 
Observá y anotá:
#### ¿Qué código de status devolvió?
Devolvió 200
#### ¿Qué contenido tiene el body de la respuesta?
{}%

### A.6 — Recurso inexistente
Pedí un recurso que no existe, por ejemplo un post con un id muy alto (posts/9999).
curl -i -X GET https://jsonplaceholder.typicode.com/posts/999/ 
Observá y anotá:
#### ¿Qué código de status devolvió?
404
#### ¿Cómo es el body de la respuesta en este caso?
{}%

## POSTMAN