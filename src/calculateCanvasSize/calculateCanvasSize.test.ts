import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  it("Verify that calculateCanvasSize should return the correct result for positive length and width", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });
});