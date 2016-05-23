describe("", function() {
  it("saldosDeMesesConGanancia([1]) es [1]", function() {
    assert.deepEqual(saldosDeMesesConGanancia([1]), [1])
  })
  it("saldosDeMesesConGanancia([2, 20, 20]) es [2, 20, 20]", function() {
    assert.deepEqual(saldosDeMesesConGanancia([2, 20, 20]), [2, 20, 20])
  })
  it("saldosDeMesesConGanancia([]) es []", function() {
    assert.deepEqual(saldosDeMesesConGanancia([]), [])
  })
  it("saldosDeMesesConGanancia([0, 0, 0]) es []", function() {
    assert.deepEqual(saldosDeMesesConGanancia([0, 0, 0]), [])
  })
  it("saldosDeMesesConGanancia([10, -10, 2, 100]) es [10, 2, 100]", function() {
    assert.deepEqual(saldosDeMesesConGanancia([10, -10, 2, 100]), [10, 2, 100])
  })
  it("saldosDeMesesConGanancia([-1, -2, -3]) es []", function() {
    assert.deepEqual(saldosDeMesesConGanancia([-1, -2, -3]), [])
  })
})