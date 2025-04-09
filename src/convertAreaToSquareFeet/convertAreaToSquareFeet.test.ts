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
  it('Verify that a negative area in square meters is correctly converted to a negative value in square feet', () => {
    expect(convertAreaToSquareFeet(-100)).toBeCloseTo(-1076.39);
    expect(convertAreaToSquareFeet(-200)).toBeCloseTo(-2152.78);
    expect(convertAreaToSquareFeet(-150)).toBeCloseTo(-1614.585);
  });
});
