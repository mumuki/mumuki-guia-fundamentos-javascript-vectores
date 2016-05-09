describe("trasladar", function() {
  it("trasladar mueve el último elemento", function() {
    var unArray = [1, 2, 3];
    var otroArray = [4, 5];
    
    trasladar(unArray, otroArray);
  
    assert.equal(unArray, [1, 2]); 
    assert.equal(otroArray, [4, 5, 3]); 
  })
 
})