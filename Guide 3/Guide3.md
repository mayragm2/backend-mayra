c
# Reto 1 — Ver tu propia request

curl -H "Alumno: Mayra" https://httpbin.org/headers
{
  "headers": {
    "Accept": "*/*", 
    "Alumno": "Mayra", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41238-0de5f4751acbbb9a1649edfc"
  }
}

# Reto 2 — Mandar Body y Content-Type, y verificar que llego bien
curl    -X POST https://httpbin.org/post \
        -H "content-type: application/json" \
        -d '{"body": "lorem ipsum"}'

{
  "args": {}, 
  "data": "{\"body\": \"lorem ipsum\"}", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "23", 
    "Content-Type": "application/json", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41842-7282daa14edae93d70589c0b"
  }, 
  "json": {
    "body": "lorem ipsum"
  }, 
  "origin": "190.55.239.132", 
  "url": "https://httpbin.org/post"
}

# Reto 3 - Provocar un status code a pedido
curl -v https://httpbin.org/status/404
curl -v https://httpbin.org/status/500

Te das cuenta de la respuesta del servidor buscando la línea "< HTTP/2 xxx"

# Reto 4 — Seguir una redirección

## Without redirect follow
curl -v https://httpbin.org/redirect/3

Response:
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>Redirecting...</title>
<h1>Redirecting...</h1>
<p>You should be redirected automatically to target URL: <a href="/relative-redirect/2">/relative-redirect/2</a>.  If not click the link.%

Code: 302
Headers: 
< date: Fri, 11 Sep 2026 15:12:07 GMT
< content-type: text/html; charset=utf-8
< content-length: 247
< server: gunicorn/19.9.0
< location: /relative-redirect/2
< access-control-allow-origin: *

## With redirect follow
curl -v -L https://httpbin.org/redirect/3

Code: 302
Response:
{
  "args": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41aa8-30abf5932e9291790aad9537"
  }, 
  "origin": "190.192.146.29", 
  "url": "https://httpbin.org/get"
}
### 1st try
Code: 302
Headers: 
< date: Fri, 11 Sep 2026 15:14:16 GMT
< content-type: text/html; charset=utf-8
< content-length: 247
< server: gunicorn/19.9.0
< location: /relative-redirect/2
< access-control-allow-origin: *
< access-control-allow-credentials: true

### 2nd try
Code: 302
Headers: 
< date: Fri, 11 Sep 2026 15:14:17 GMT
< content-type: text/html; charset=utf-8
< content-length: 0
< server: gunicorn/19.9.0
< location: /relative-redirect/1
< access-control-allow-origin: *
< access-control-allow-credentials: true

### 3rd try
Code: 302
Headers: 
date: Fri, 11 Sep 2026 15:14:17 GMT
< content-type: text/html; charset=utf-8
< content-length: 0
< server: gunicorn/19.9.0
< location: /get
< access-control-allow-origin: *
< access-control-allow-credentials: true

### 4th try
Code: 200
Headers: 
< date: Fri, 11 Sep 2026 15:14:17 GMT
< content-type: application/json
< content-length: 255
< server: gunicorn/19.9.0
< access-control-allow-origin: *
< access-control-allow-credentials: true

Response:
{
  "args": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41ac9-3938c4c07f42197b10f5603b"
  }, 
  "origin": "190.55.239.132", 
  "url": "https://httpbin.org/get"
}

#### ¿Qué código de status viste en el primer intento?
Código 302, redirección
#### ¿Qué header te decía a dónde te tenías que redirigir?
El header de location
#### ¿Cuántas líneas de "salto" ves si le pedís a curl que te muestre el detalle completo de la comunicación mientras sigue las redirecciones?

8 lineas, dos por cada comunicaciòn.

# Reto 5 — Simular lentitud de red
curl -w %{time_total} https://httpbin.org/delay/5
{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa4207e-152508e41f4a127c3a91fd98"
  }, 
  "origin": "190.55.239.132", 
  "url": "https://httpbin.org/delay/5"
}
5.716706%   

# Reto 6 — Autenticación básica
