describe("", function() {
  it("medallaSegunPuesto(1)", function() {
    assert.deepEqual(medallaSegunPuesto(1), "oro")
  })
  it("medallaSegunPuesto(2)", function() {
    assert.deepEqual(medallaSegunPuesto(2), "plata")
  })
  it("medallaSegunPuesto(3)", function() {
    assert.deepEqual(medallaSegunPuesto(3), "bronce")
  })
  it("medallaSegunPuesto(4)", function() {
    assert.deepEqual(medallaSegunPuesto(4), "nada")
  })
  it("medallaSegunPuesto(5)", function() {
    assert.deepEqual(medallaSegunPuesto(5), "nada")
  })
  it("medallaSegunPuesto(0)", function() {
    assert.deepEqual(medallaSegunPuesto(0), "nada")
  })
})