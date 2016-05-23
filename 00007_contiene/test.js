describe("", () => {
  it("contiene([1, 6, 7, 6], 7) es true", () => {
    assert(contiene([1, 6, 7, 6], 7));
  })
  it("contiene([1, 6, 7, 6], 6) es true", () => {
    assert(contiene([1, 6, 7, 6], 6));
  })
  it("contiene([], 7) es false", () => {
    assert(!contiene([], 7));
  })
  it("contiene([8, 5], 7) es false", () => {
    assert(!contiene([8, 5], 7));
  })
  it("contiene([1, 8, 5], 7) es false", () => {
    assert(!contiene([1, 8, 5], 7));
  })
  it("contiene([1, 1, 1], 1) es true", () => {
    assert(contiene([1, 1, 1], 1));
  })
})