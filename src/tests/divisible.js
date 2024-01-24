// divisible.js
// fizzBuzz calculator
export function divisible(x) {
  if (x % 15 == 0) {
    return 'FizzBuzz';
  }
  if (x % 3 == 0) {
    return 'Fizz';
  }
  if (x % 5 == 0) {
    return 'Buzz';
  }
  return false;
}
