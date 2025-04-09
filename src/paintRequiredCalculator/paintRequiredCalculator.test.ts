import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  it("Verify that the paint required is calculated correctly for valid area and coverage per liter", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });
});
