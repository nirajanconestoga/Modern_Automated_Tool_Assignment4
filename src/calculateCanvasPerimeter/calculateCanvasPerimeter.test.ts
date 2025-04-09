import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  it("Verify that calculateCanvasPerimeter should return the correct canvas size for positive length and width", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);
  });
  
});
