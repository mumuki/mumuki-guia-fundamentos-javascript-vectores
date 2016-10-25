Vamos a ver un ejemplito de como usar el indexOf.

> Escribí la función `contiene`, que recibe dos parámetros, el primero es un array y el segundo es un elemento. 
La función nos debería decir, si en el array recibido por parámetro está o no está el elemento.
>
> ```javascript
> ム contiene([1, 6, 7, 6], 7)
> true
> ム contiene([1, 6, 7, 6], 6)
> true
> ム contiene([], 7)
> false
> ム contiene([8, 5], 7)
> false
> ```
>
> Observar que la función devuelve true o false y no un número, es decir, no tenemos que devolver la posición del elemento sino preguntar primero si está el elemento y luego devolver true o false en cada caso.