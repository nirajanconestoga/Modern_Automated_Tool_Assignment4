import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  it("Verify that the paint required is calculated correctly for valid area and coverage per liter", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });
  it("Verify that the paint required returns 0 when the area is 0", () => {
    const result = paintRequiredCalculator(0, 10);
    expect(result).toEqual(0);
  });
});
