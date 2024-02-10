// Created file script.test.js for testing
const { sum } = require('./script');

test('Sum of two positive numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Sum of a negative and a positive number', () => {
  expect(sum(-5, 10)).toBe(5);
});

test('Sum of two negative numbers', () => {
  expect(sum(-2, -3)).toBe(-5);
});