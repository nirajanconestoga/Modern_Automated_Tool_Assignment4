import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  it("Verify that calculateCanvasSize should return the correct result for positive length and width", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });
  it ("Verify that calculateCanvasSize should return 0 when both length and width are zero", () => {
    const result = calculateCanvasSize("0", "0");
    expect(result).toEqual(0);
  });
  it("Verify that calculateCanvasSize should handle negative length correctly", () => {
    const result = calculateCanvasSize("-5", "10");
    expect(result).toEqual(-50);
  });
  it("Verify that calculateCanvasSize should return NaN when length or width is a non-numeric string", () => {
    const result = calculateCanvasSize("a", "10");
    expect(result).toBeNaN();
  });
  it("Verify that calculateCanvasSize should handle decimal values for length and width correctly", () => {
    const result = calculateCanvasSize("3.5", "2.5");
    expect(result).toBeCloseTo(12);
  });  
});