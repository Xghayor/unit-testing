const { capitalChar } = require('./index');

test('first character should be Capital', () => {
  expect(capitalChar('hello')).toBe('H');
});
