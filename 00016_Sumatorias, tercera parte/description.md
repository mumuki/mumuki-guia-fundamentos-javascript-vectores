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
Pero que son todos esos elementos raros que tiene el FOR? Veamos brevemente cada uno; con la práctica los vas a aprender.

1) var i = 0; creamos una variable i, puede ser pepe o lo que quieras, que empieza en 0.

2) unPeriodo.length ; es la cantidad de elementos del array unPeriodo.

3) i < unPeriodo.length , si esta condicion se cumple entra al FOR.

4) Ejecuta bloque de código dentro del FOR, en este caso: sumatoria = sumatoria + unPeriodo[i].

5) i++; cada vez que termines un bloque de código suma 1 a i.

La clave de todo esto y para no marearte (es normal que pase) es entender para que utilizamos la variable i.

La variable i es una variable cualquiera que la única característica que tiene es que por cada vuelta del FOR suma 1, y esto para que me sirve??

Justamente para recorrer un array!!
```javascript
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2];
  ..........
  
  for (var i = 0; i < unPeriodo.length; i++) {
    sumatoria = sumatoria + unPeriodo[i];
  }

```

La primer vuelta del for.
sumatoria = sumatoria + unPeriodo[i] es como decir sumatoria = sumatoria + unPeriodo[0]

La segunda vuelta del for es:
sumatoria = sumatoria + unPeriodo[i] es como decir sumatoria = sumatoria + unPeriodo[1]

La tercer vuelta del for es:
sumatoria = sumatoria + unPeriodo[i] es como decir sumatoria = sumatoria + unPeriodo[2]

se ve para que sirve la i??
  




> ¿Aún no te convenciste? Probá las siguientes expresiones en la consola:
>
> * `gananciaTotal([])`
> * `gananciaTotal([100])`
> * `gananciaTotal([100, 2])`
> * `gananciaTotal([2, 10, -20])`
> * `gananciaTotal([2, 10, -20, 0, 0, 10, 10])`



