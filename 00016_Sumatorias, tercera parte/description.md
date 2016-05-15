Si seguimos haciendo lo anterior, veremos que una sumatoria de N elementos siempre arranca igual (`var sumatoria = 0`), y termina igual (devolviendo la variable local  `sumatoria`).

Pero lo que se repite, N veces, son las acumulaciones


```javascript
function gananciaTotalN(unPeriodo) {
  var sumatoria = 0; // esto siempre está
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2]; //se repite N veces, de 0 a la última posición
  //... etc
  return sumatoria; //esto siempre está
}
```
Entonces,  tenemos que _repetir_ la operación de sumar varias veces... ¿te suena a algo conocido?

¡Por supuesto!: la estructura `for`, que nos permite hacer algo múltiples veces. Veamos cómo se vería entonces una función que calcula las ganancias de forma genérica:

```javascript
function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var i = 0; i < unPeriodo.length, i++) {
    sumatoria = sumatoria + unPeriodo[i];
  }
  return sumatoria;
}
```

Como ves, simplemente repetimos la idea de "sumar el enésimo elemento" tantas veces como elementos haya.

> ¿Aún no te convenciste? Probá las siguientes expresiones en la consola:
>
> * `gananciaTotal([])`
> * `gananciaTotal([100])`
> * `gananciaTotal([100, 2])`
> * `gananciaTotal([2, 10, -20])`
> * `gananciaTotal([2, 10, -20, 0, 0, 10, 10])`



