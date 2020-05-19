import getNumber from '../getNumber';

test('should convert to int', () => {
  const result = getNumber('3');

  expect(result).toEqual(3);
});

test('should throw to 16 digit system value', () => {
    expect(() => getNumber('0X12')).toThrow(Error);
});

test('should throw error', () => {
  expect(() => getNumber('куку')).toThrow(Error);
});