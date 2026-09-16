# Bloque 2: Normalización
## Ejercicio 2: Por qué separamos los datos en varias tablas
Objetivo: Entender el problema que resuelve la normalización, y poder explicarlo con un ejemplo propio.

Requerimientos:

Leé el material de la sección 8 del MATERIAL de esta clase, y las referencias que ahí se mencionan.
Creá un archivo llamado respuestas-normalizacion.md en tu repo, y respondé ahí las preguntas de abajo.
Preguntas:

# ¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?
    El principal error es que puedo llegar a tener mas de un libro del mismo autor, pero al no tener una tabla de autores, un mismo autor estaría separado en varias partes, y en caso de un cambio de nombre o error de tipeo, habria que cambiar el nombre del autor en todas las tablas.

# ¿Qué es la normalización, con tus propias palabras?

    La normalización es la asignacion de posibles valores a una categoria de una tabla basandose en otra tabla. Por ejemplo, si tengo una tabla de productos que tiene una caracteristica de condición puedo normalizar sus valores creando una segunda tabla con las posibles condiciones, Usado, Nuevo, Reacondicionado.

# La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.

La primera forma normal exige que cada fila tenga un solo dato por columna. 

# Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).

Casas: Fundador
Personaje: Nombre
