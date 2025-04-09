import calculateCanvasPerimeter from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasPerimeter("10", "100");

    expect(result).toEqual(1000);
  })
});
