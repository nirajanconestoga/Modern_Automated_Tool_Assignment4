import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('Verify that calculateCanvasDiagonal should calculate the correct diagonal when length is positive and width is zero', () => {
    expect(calculateCanvasDiagonal('3', '0')).toBe(3);
  })
  it ('Verify that calculateCanvasDiagonal should calculate the correct diagonal when length is zero and width is positive', () => {
    expect(calculateCanvasDiagonal('0', '4')).toBe(4);
  });
});
