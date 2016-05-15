describe("cantidadDeMesesConPerdida", function() {
  it("cantidadDeMesesConPerdida([1]) es 0", function() {
    assert.equal(cantidadDeMesesConPerdida([1]), 0)
  })
  it("cantidadDeMesesConPerdida([2, 20, 20]) es 0", function() {
    assert.equal(cantidadDeMesesConPerdida([2, 20, 20]), 0)
  })
  it("cantidadDeMesesConPerdida([]) es 0", function() {
    assert.equal(cantidadDeMesesConPerdida([]), 0)
  })
  it("cantidadDeMesesConPerdida([0, 0, 0]) es 0", function() {
    assert.equal(cantidadDeMesesConPerdida([0, 0, 0]), 0)
  })
  it("cantidadDeMesesConPerdida([10, -10, 2, 100]) es 1", function() {
    assert.equal(cantidadDeMesesConPerdida([10, -10, 2, 100]), 1)
  })
  it("cantidadDeMesesConPerdida([-1, -2, -3]) es 3", function() {
    assert.equal(cantidadDeMesesConPerdida([-1, -2, -3]), 3)
  })
  it("cantidadDeMesesConPerdida([-1, -2, -3, -1, -1, -10]) es 6", function() {
    assert.equal(cantidadDeMesesConPerdida([-1, -2, -3]), 6)
  })
})