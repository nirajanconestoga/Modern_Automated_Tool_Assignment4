import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  it('Verify that the painting time is calculated correctly for positive area and painting speed', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });
  it('Verify that the painting time returns Infinity for a painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });
  it('Verify that the painting time returns 0 for an area of 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });
  it('Verify that an error is thrown for negative area or negative painting speed', () => {
    expect(() => estimatePaintingTime(-100, 10)).toThrow('Area and painting speed must be non-negative values');
    expect(() => estimatePaintingTime(100, -10)).toThrow('Area and painting speed must be non-negative values');
    expect(() => estimatePaintingTime(-100, -10)).toThrow('Area and painting speed must be non-negative values');
  });
});

