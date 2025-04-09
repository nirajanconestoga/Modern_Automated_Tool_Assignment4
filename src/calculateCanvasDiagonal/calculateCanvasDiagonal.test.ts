import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('Verify that calculateCanvasDiagonal should calculate the correct diagonal when length is positive and width is zero', () => {
    expect(calculateCanvasDiagonal('3', '0')).toBe(3);
  })
  it ('Verify that calculateCanvasDiagonal should calculate the correct diagonal when length is zero and width is positive', () => {
    expect(calculateCanvasDiagonal('0', '4')).toBe(4);
  });
  it('Verify that calculateCanvasDiagonal should handle negative length correctly when calculating diagonal', () => {
    expect(calculateCanvasDiagonal('-3', '4')).toBe(5);
  });
  it('Verify that calculateCanvasDiagonal should return NaN when non-numeric length is provided', () => {
    expect(calculateCanvasDiagonal('a', '4')).toBeNaN(); 
  });
  it('Verify that calculateCanvasDiagonal should handle decimal length correctly when calculating diagonal', () => {
    expect(calculateCanvasDiagonal('1.5', '2')).toBeCloseTo(2.5, 2);
  });
});
