Los arrays son muy útiles para contener múltiples elementos. Pero hay algo más: también podemos agregarle elementos en cualquier momento!! Para agregar un elemento a un array utilizamos el método `push`. Por ejemplo:

```javascript
var pertenencias = ["espada", "escudo", "antorcha"];
pertenencias.push("amuleto mágico");

//quedaria->["espada","escudo","antorcha","amuleto mágico"];

```

Como vemos, `push` agrega un elemento a la lista. 
¿Pero en qué parte de la lista lo agrega? ¿Al principio? ¿Al final? ¿En el medio?

> Averigualo vos mismo: inspeccioná en la consola que elementos contiene `pertenencias`, agregale una `"ballesta"` y volvé a inspeccionar `pertenencias`.
>
> Para sacar elementos utilizamos el método `pop()`. Investigá en la consola qué hace, por ejemplo: `pertenencias.pop()`

