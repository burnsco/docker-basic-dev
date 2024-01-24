// divisible.test.js
import { expect, test } from 'vitest';
import { divisible } from './divisible';

test('is it fizzBuzz?', () => {
  expect(divisible(15)).toBe('FizzBuzz');
});

test('is it fizz?', () => {
  expect(divisible(3)).toBe('Fizz');
});

test('is it buzz?', () => {
  expect(divisible(5)).toBe('Buzz');
});

test('is it other?', () => {
  expect(divisible(29)).toBe(false);
});
