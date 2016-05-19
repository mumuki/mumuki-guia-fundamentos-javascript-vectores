Si le pedís un elemento en una posición que iguala o excede al tamaño del array, vas a obtener `undefined`. No parece algo terrible, pero el problema es que con undefined no podés hacer nada realmente útil.

Así que estás advertido: ¡no te pases de índice!

> Teniendo esto en cuenta, va un desafío: escribí nuevamente la función `medallaSegunPuesto`, pero esta vez usando como máximo un sólo `if`. Quizás los arrays te pueden ser útiles acá :wink:.
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
