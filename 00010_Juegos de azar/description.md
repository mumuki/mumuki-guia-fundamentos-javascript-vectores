Pero, pero, ¿podremos modelar sólo conjuntos de strings? ¿Y si quiero, por ejemplo, representar los números de la lotería que salieron la semana pasada? ¿O las tiradas sucesivas de un dado? ¿O si salió cara o seca en tiradas sucesivas de una moneda? 

```javascript
var numerosDeLoteria = [2,	11,	17,	32, 36, 39];
var tiradasDelDado = [1, 6, 6, 2, 2, 4];
var salioCara = [false, false, true, false];
```

Como ves, también podemos representar conjuntos de números o booleanos, de igual forma: escribiéndolos entre corchetes y separados por comas. Podemos tener conjunto de números, de strings, de booleanos, etc. ¡Incluso podríamos tener conjuntos de conjuntos!

> Veamos si queda claro: probá en la consola las siguientes consultas: 
> 
> * `numerosDeLoteria`
> * `salioCara`
> * `[[1, 2, 3], [4, 5, 6]]`



