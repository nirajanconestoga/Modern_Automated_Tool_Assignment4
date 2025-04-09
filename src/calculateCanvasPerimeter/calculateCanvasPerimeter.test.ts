import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  it("Verify that calculateCanvasPerimeter should return the correct canvas size for positive length and width", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);
  });
  it("Verify that calculateCanvasPerimeter should return 0 when both length and width are zero", () => {
    const result = calculateCanvasPerimeter("0", "0");
    expect(result).toEqual(0);
  });
  it("Verify that calculateCanvasPerimeter should handle negative length correctly", () => {
    const result = calculateCanvasPerimeter("-5", "10");
    expect(result).toEqual(10);
  });
  it("Verify that calculateCanvasPerimeter should return NaN when length or width is a non-numeric string", () => {
    const result = calculateCanvasPerimeter("a", "10");
    expect(result).toBeNaN();
  });
  it("Verify that calculateCanvasPerimeter should handle decimal length and width correctly", () => {
    const result = calculateCanvasPerimeter("1.5", "2.5");
    expect(result).toEqual(8);
  });
});
