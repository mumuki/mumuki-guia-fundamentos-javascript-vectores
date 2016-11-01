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

NO! No es el famoso repeat que vimos capítulos atrás!!

¡Por supuesto!: la estructura `for`, que nos permite hacer algo múltiples veces. Veamos cómo se vería entonces una función que calcula las ganancias de forma genérica:

```javascript
function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var i = 0; i < unPeriodo.length; i++) {
    sumatoria = sumatoria + unPeriodo[i];
  }
  return sumatoria;
}
```
Como ves, simplemente repetimos la idea de "sumar el enésimo elemento" tantas veces como elementos haya.
¿¿Pero que son todos esos elementos raros que tiene el FOR??

Veamos brevemente cada uno; con la práctica los vas a aprender. 

1) var i = 0; creamos una variable i, puede ser pepe o lo que quieras, que empieza en 0.

2) unPeriodo.length ; es la cantidad de elementos del array unPeriodo.

3) i < unPeriodo.length , si esta condicion se cumple entra al FOR.

4) Ejecuta bloque de código dentro del FOR, en este caso: sumatoria = sumatoria + unPeriodo[i].

5) i++; cada vez que termina un bloque de código suma 1 a i. Es decir, en la primer vuelta i vale 0, en la segunda vale 1, en la tercera vale 2 y así sucesivamente.

Con todo esto es normal que te marees un poco, una aclaración es que el FOR es la última herramienta que pretendemos que aprendas para este ingreso asíque tranquilo lo peor pasó!!!

La clave de todo esto es entender para que utilizamos la variable i. 

La variable i es una variable cualquiera que la única característica que tiene es que por cada vuelta del FOR suma 1, y esto para que me sirve??

Justamente para recorrer un array!!

```javascript
//lo que antes era así...
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2];
//ahora vamos por:
  for (var i = 0; i < unPeriodo.length; i++) {
    sumatoria = sumatoria + unPeriodo[i];
  }
```

La primer vuelta del for es:

sumatoria = sumatoria + unPeriodo[i] _, es como decir_, sumatoria = sumatoria + unPeriodo[0]


La segunda vuelta del for es:

sumatoria = sumatoria + unPeriodo[i] _, es como decir_, sumatoria = sumatoria + unPeriodo[1]


La tercer vuelta del for es:

sumatoria = sumatoria + unPeriodo[i] _, es como decir_, sumatoria = sumatoria + unPeriodo[2]



Se ve para que sirve la i?? cada vuelta por el i++ del FOR; i se suma uno y esto hace que nos sirva para recorrer un array de principio a fin. 

> ¿Aún no te convenciste? Probá las siguientes expresiones en la consola:
>
> gananciaTotal([])
> gananciaTotal([100])
> gananciaTotal([100, 2])
> gananciaTotal([2, 10, -20])
> gananciaTotal([2, 10, -20, 0, 0, 10, 10])



