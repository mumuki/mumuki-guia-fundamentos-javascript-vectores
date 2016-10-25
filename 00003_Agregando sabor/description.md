Los arrays son muy útiles para contener múltiples elementos. Pero hay algo más: también podemos agregarle elementos en cualquier momento!! Para agregar un elemento a un array utilizamos el método `push`. Por ejemplo:

```javascript
var pertenencias = ["espada", "escudo", "antorcha"];
pertenencias.push("amuleto mágico");

// pertenencias = ["espada", "escudo", "antorcha", "amuleto mágico"];

```

Como vemos, `push` agrega un elemento a la lista, lo cual hace que su tamaño aumente. ¿Pero en qué parte de la lista lo agrega? ¿Al principio? ¿Al final? ¿En el medio?

> Averigualo vos mismo: inspeccioná en la consola que elementos contiene `pertenencias`, agregale una `"ballesta"` y volvé a inspeccionar `pertenencias`.
>
> Ah, y además existe un método `pop`, que no tiene parámetros. Investigá en la consola qué hace.

