import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  it('Verify that calculatePaintCost should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50); 
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });
  it('Verify that calculatePaintCost should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });
  it('Verify that calculatePaintCost should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });
  it('Verify that calculatePaintCost should return a validation message when paint required or cost per liter is negative', () => {
    expect(calculatePaintCost(-10, 5)).toBe("Error: Paint required and cost per liter must be non-negative.");
    expect(calculatePaintCost(10, -5)).toBe("Error: Paint required and cost per liter must be non-negative.");
    expect(calculatePaintCost(-10, -5)).toBe("Error: Paint required and cost per liter must be non-negative.");
  });
});
