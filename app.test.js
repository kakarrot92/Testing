const { stringLength , reverseString, capitalize } = require('./app');

test('Should return first letter capitalized', () => {
  expect(capitalize('something')).toBe('Something');
})

test('Should return string "something" length', () => {
  expect(stringLength("something")).toBe(9);
});

test('Should reverse string', () => {
expect(reverseString('gnihtemos')).toBe('something');
});
