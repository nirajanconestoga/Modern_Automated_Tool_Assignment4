import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  it('Verify that calculateTotalCost should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150); 
    expect(calculateTotalCost(200, 75)).toBe(275); 
    expect(calculateTotalCost(150, 100)).toBe(250);
  });
  it('Verify that calculateTotalCost should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });
  it('Verify that calculateTotalCost should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });
  it('Verify that calculateTotalCost should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });
  it('Verify that calculateTotalCost should return a validation message when paint cost or labor cost is negative', () => {
    expect(calculateTotalCost(-100, 50)).toBe("Error: Paint cost and labor cost must be non-negative.");
    expect(calculateTotalCost(100, -50)).toBe("Error: Paint cost and labor cost must be non-negative.");
    expect(calculateTotalCost(-100, -50)).toBe("Error: Paint cost and labor cost must be non-negative.");
  });
});
