import getNumber from '../homework';

test('should convert to int', () => {
  const result = getNumber('3');

  expect(result).toEqual(3);
});

test('should throw error', () => {
  expect( () => getNumber('куку') ).toThrow(Error);
});