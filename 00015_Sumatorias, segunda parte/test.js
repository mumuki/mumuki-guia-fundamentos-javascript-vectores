describe("", function(){
  it("gananciaTotal4([2, 3, 4, 5])", function() {
      assert.equal(gananciaTotal4([2, 3, 4, 5]), 14)
  })
  
  it("gananciaTotal4([2, 3, 4, 0])", function() {
      assert.equal(gananciaTotal4([2, 3, 4, 0]), 9)
  })
})