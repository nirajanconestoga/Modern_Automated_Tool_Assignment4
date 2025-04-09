import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  it('Verify that calculatePaintCost should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50); 
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });
});
