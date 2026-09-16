# Bloque 1: SQL vs. NoSQL
## Ejercicio 1: Comparar bases de datos relacionales y no relacionales
Objetivo: Investigar y explicar con tus propias palabras qué diferencia a una base de datos SQL de una NoSQL, y en qué casos elegirías cada una.

Requerimientos:

Leé el material de la sección 3 del MATERIAL de esta clase, y las referencias que ahí se mencionan (documentación de IBM y de MongoDB).
Creá un archivo llamado respuestas-sql-nosql.md en tu repo, y respondé ahí las preguntas de abajo.
Preguntas:

### ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?

Como el nombre lo indica las bases de datos relacionales son aquellas en las que la informacion está almacenada en filas y tablas que estan vinculadas de varias maneras. Una tabla se puede llegar a vincular con otra u otras. En cambio las bases de datos no relacionales son más flexlibles y no cuentan con la estructura característica de filas.

### Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).
MySQL, o PostgreSQL son relacionales.
MongoDB es no relacional de documentos.
Cassandra es no relacional columnar.

### Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.
En el caso de personajes lo que tendria escencialmente es una "ficha de datos" que contenga por ejemplo, Nombre, Casa, Poderes. 


### ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).
Si tuviera un par de productos en una store de indoles completamente distintas, usaría una base no relacional y crearía una tabla por producto.
