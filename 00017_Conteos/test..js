describe("", function() {
  it("cantidadDeMesesConGanancia([1]) es 1", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([1]), 1)
  })
  it("cantidadDeMesesConGanancia([2, 20, 20]) es 3", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([2, 20, 20]), 3)
  })
  it("cantidadDeMesesConGanancia([]) es 0", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([]), 0)
  })
  it("cantidadDeMesesConGanancia([0, 0, 0]) es 0", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([0, 0, 0]), 0)
  })
  it("cantidadDeMesesConGanancia([10, -10, 2, 100]) es 3", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([10, -10, 2, 100]), 3)
  })
  it("cantidadDeMesesConGanancia([-1, -2, -3]) es 0", function() {
    assert.deepEqual(cantidadDeMesesConGanancia([-1, -2, -3]), 0)
  })
})