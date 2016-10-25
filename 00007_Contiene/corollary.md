¡Bien hecho!

Si venís prestando atención a los ejemplos de consulta, habrás notado que los arrays también pueden tener elementos duplicados: `[1, 2, 1]`, `["hola", "hola"]`, etc.

Por tanto, `indexOf` en realidad devuelve la posición de la _primera aparición_ del elemento en el array. Por ejemplo:

```javascript
ム [2, 3, 3, 4].indexOf(3)
1 //devuelve 1 porque si bien también está en la posición 2, aparece primero en la posición 1.
```