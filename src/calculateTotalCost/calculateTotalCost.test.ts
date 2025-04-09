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
});
