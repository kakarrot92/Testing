const { calc } = require('./calc');

const calculate = new calc();

describe('Calculator functionality', () => {
  test('Add two numbers', () => {
    expect(calculate.add(2, 2)).toBe(4)
  });

  test('Substract numbers', () => {
    expect(calculate.substract(4, 2)).toBe(2)
  });
  
  test('Devide two numbers', () => {
    expect(calculate.divide(6, 3)).toBe(2)
  });
  
  test('Multiply two numbers', () => {
    expect(calculate.multiply(3, 3)).toBe(9)
  });
});