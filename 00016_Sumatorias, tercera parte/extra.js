function gananciaTotal(unPeriodo) {
  var sumatoria = 0;
  for (var i = 0; i < unPeriodo.length; i++) {
    sumatoria = sumatoria + unPeriodo[i];
  }
  return sumatoria;
}