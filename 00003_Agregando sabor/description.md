Los arrays son muy útiles para contener múltiples elementos. Pero hay algo más: también podemos agregarle elementos en cualquier momento, lo cual lo resolvemos mediante el método `push`. Por ejemplo:

```javascript
var pertenencias = ["espada", "escudo", "antorcha"];
//pertenencias.length acá vale 3;

pertenencias.push("amuleto mágico");
//ahora pertenencias.length vale 4
```

Como vemos, `push` agrega un elemento a la lista, lo cual hace que su tamaño aumente. ¿Pero en qué parte de la lista lo agrega? ¿Al principio? ¿Al final? ¿En el medio?

> Averigualo vos mismo: inspeccioná en la consola que elementos contiene `pertenencias`, agregale una `"ballesta"` y volvé a inspeccionar `pertenencias`.
>
> Ah, y además existe un método `pop`, que no tiene parámetros. Investigá en la consola qué hace.

