import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  it('Verify that a positive area in square meters is correctly converted to square feet', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585);
  });
  it('Verify that an input of 0 square meters returns 0 square feet', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });
  it('Verify that a negative area in square meters throws an error indicating invalid input', () => {
    expect(() => convertAreaToSquareFeet(-100)).toThrow('Area cannot be negative');
    expect(() => convertAreaToSquareFeet(-200)).toThrow('Area cannot be negative');
    expect(() => convertAreaToSquareFeet(-150)).toThrow('Area cannot be negative');
  });
  it('Verify that decimal area values in square meters are accurately converted to square feet', () => {
    expect(convertAreaToSquareFeet(1.5)).toBeCloseTo(16.14585);
    expect(convertAreaToSquareFeet(2.75)).toBeCloseTo(29.600725);
    expect(convertAreaToSquareFeet(0.01)).toBeCloseTo(0.107639);
  });
});
