const stringLength = require('./string');

test('should return 4 when you pass abed', () => {
  expect(stringLength('abed')).toBe(4);
});