¿Lo pensaste?

La función anterior tiene dos problemas:

1. Es muy repetitiva y tediosa de escribir. ¡Tenemos que hacer muchas sumas a mano!
1. Y no es genérica, sólo sirve para arrays de 6 elementos:

  * si tiene más de seis elementos, sólo suma los primeros
  * si tiene menos, devuelve cosas bizarras (¿te acordás cuando te dijimos que si te ibas de índice cosas malas podían ocurrir :stuck_out_tongue: ?)

Lo que nos gustaría es poder sumar de forma genérica, a todos los elementos del array, sin importar cuántos haya realmente. ¡Qué difícil!

Vamos de a poquito, a ver si podemos generalizarla: si el array no tuviera elementos, ¿cuanto debería ser la sumatoria? ¡0!

```javascript
function gananciaTotal0(unPeriodo) {
  var sumatoria = 0;
  return sumatoria;
}
```

¿Y si tuviera 1 elemento? Estem... 0.... ¿más ese elemento? ¡Exacto!

```javascript
function gananciaTotal1(unPeriodo) {
  var sumatoria = 0;
  sumatoria = sumatoria + unPeriodo[0];
  return sumatoria;
}
```

¿Y si tuviera 2 elementos?

```javascript
function gananciaTotal2unPeriodo) {
  var sumatoria = 0;
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  return sumatoria;
}
```

¿Y si tuviera 3 elementos?

```javascript
function gananciaTotal3(unPeriodo) {
  var sumatoria = 0;
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2];
  return sumatoria;
}
```

¿Y si tuviera N elementos?

> ¿Empezas a ver un patrón? Tratá de escribir `gananciaTotal4` que funcione para 4 elementos.