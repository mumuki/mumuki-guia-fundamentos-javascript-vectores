Lo que acabamos de ver es que podemos fácilmente modelar conjuntos de cosas. Y eso se debe a que en JavaScript, contamos con el tipo de dato _array_, también conocido como vector, que acabamos de conocer. 

Los arrays pueden tener múltiples elementos, ¡no hay límite!

Y no sólo eso, sino que además, el orden es importante. Por ejemplo, no es lo mismo `["hola", "mundo"]` que `["mundo", "hola"]`: ambos tienen los mismos elementos, pero en posiciones diferentes. 

> Probá en la consola las siguientes consultas: 
> 
> * `arraysIguales(["hola", "mundo"], ["mundo", "hola"])`
> * `arraysIguales(["hola", "mundo"], ["hola", "mundo"])`
> * `arraysIguales(["hola", "mundo"], ["hola", "todo", "el", "mundo"])`
> * `arraysIguales(["hola"], ["hola", "mundo"])`
> * `["hola", "mundo"] === ["mundo", "hola"]`
> * `personas`
> * `["mara", "julian"] === personas`
> * `personas === personas`

> ¿Qué conclusiones podés sacar?
