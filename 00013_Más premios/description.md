Si le pedís un elemento en una posición que iguala o excede al tamaño del array, vas a obtener `undefined`. No parece algo terrible, pero el problema es que con undefined no podés hacer nada realmente útil.

Así que estás advertido: ¡no te pases de índice!

> Teniendo esto en cuenta, va un desafío: escribí nuevamente la función `medallaSegunPuesto`, que recibe por parámetro un puesto, osea un número. Para esta función utilizar como máximo un sólo `if`. Quizás los arrays te pueden ser útiles acá :wink:.
>
> Ah, te recordamos la función: tiene que devolver la medalla que le corresponde a los primeros puestos de una competencia:
>
>```javascript
>ム medallaSegunPuesto(1)
>"oro"
>ム medallaSegunPuesto(2)
>"plata"
>ム medallaSegunPuesto(3)
>"bronce"
>ム medallaSegunPuesto(4)
>"nada"
>ム medallaSegunPuesto(5)
>"nada"
```
>
> Recordá como acceder a los elementos de un array utilizando el índice;
>
>```javascript
> var frutas = ["manzana", "pera", "kiwi"];
> ムfrutas[0]
>"manzana"
> ムfrutas[1]
>"pera" 
```
