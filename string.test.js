const stringLength = require('./string-length');
const reverseString = require('./reverse-string');

test('should return 4 when you pass the string "abed"', () => {
  const testingValue = 'abed';

  expect(stringLength(testingValue)).not.toBeLessThan(1);
  expect(stringLength(testingValue)).not.toBeGreaterThan(10);
  expect(stringLength(testingValue)).toBe(4);
});

test('Should be true when you pass "abc"', () => {
  expect(reverseString('abc')).toMatch(/cba/);
});
