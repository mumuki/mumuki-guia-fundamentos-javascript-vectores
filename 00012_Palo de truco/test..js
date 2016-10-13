describe("", function() {
  var paloAlAzar =  Math.random().toString(36).substring(2);

  it('paloDeTruco("espadas") NO debería contener el "8 de espadas"', function() {
    assert(paloDeTruco("espadas").indexOf("8 de espadas") < 0);
  });

  it('paloDeTruco("espadas") NO debería contenerel "9 de espadas"', function() {
    assert(paloDeTruco("espadas").indexOf("9 de espadas") < 0);
  });

  it('paloDeTruco("espadas") debería ser ["1 de espadas", "2 de espadas"...', function() {
    assert.deepEqual(
      paloDeTruco("espadas"),
      [ '1 de espadas',
      '2 de espadas',
      '3 de espadas',
      '4 de espadas',
      '5 de espadas',
      '6 de espadas',
      '7 de espadas',
      '10 de espadas',
      '11 de espadas',
      '12 de espadas' ]);
  });

  it('paloDeTruco("bastos") debería ser ["1 de bastos", "2 de bastos"...', function() {
    assert.deepEqual(
      paloDeTruco("bastos"),
      [ '1 de bastos',
      '2 de bastos',
      '3 de bastos',
      '4 de bastos',
      '5 de bastos',
      '6 de bastos',
      '7 de bastos',
      '10 de bastos',
      '11 de bastos',
      '12 de bastos' ]);
  });

  it(`paloDeTruco("${paloAlAzar}") deberia tener el "3 de ${paloAlAzar}"`, function() {
    assert(paloDeTruco(paloAlAzar).indexOf(`3 de ${paloAlAzar}`) > 0);
  });
})