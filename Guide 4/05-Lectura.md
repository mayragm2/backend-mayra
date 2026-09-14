# ¿Qué diferencia hay entre fs.readFileSync y fs.readFile? ¿Cuándo conviene usar cada una?

readFileSync bloquea la ejecucion de cualquier otro código mientas se ejecuta, espera a que se termine de leer el archivo y recien ahi sigue adelante con la ejecucion. En cambio, readFile no bloquea la ejecucion y disponibiliza la informacion cuando el pedido se termina de procesar en segundo plano.