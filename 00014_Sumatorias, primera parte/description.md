Ana, contadora de una conocida empresa, guarda en un array por períodos, con las ganancias de cada mes. Por ejemplo, para el último semestre del año anterior, registró las siguientes:

```javascript
//En Julio ganó $50, en Agosto perdió $12, etc
var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
```
Y nos acaba de preguntar: _"¿puedo saber la ganancia de todo **un semetre**?"_

_"Obvio"_, dijimos, y escribimos el siguiente código:

```javascript
function sumatoriaGananciasSemestre(unSemestre) {
  return unSemestre[0] + unSemestre[1] +
         unSemestre[2] + unSemestre[3] +
         unSemestre[4] + unSemestre[5];
}
```

_"Gracias"_, nos dijo Ana, y se fue calcular las ganancias usando la función que le pasamos. Pero un rato mas tarde, volvió contandonos que también había registrado las ganancias del primer trimestre de este año:

```javascript
//En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
var gananciasPrimerTrimestre = [80, 453, 1000];
```

Y nos preguntó: _"¿Podría usar esta función que me dieron para calcular las ganancias del primer trimestre?"_

Y nos quedamos pensando :thought_balloon:.

> ¿Tiene algún problema la función que escribimos anteriormente? ¿Funcionará con trimestres? ¿Y con cuatrimestres?
>
> ¡Probala en la consola!