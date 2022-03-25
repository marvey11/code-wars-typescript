/**
 * https://www.codewars.com/kata/541c8630095125aba6000c00/typescript
 *
 * Digital root is the recursive sum of all the digits in a number.
 *
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way
 * until a single-digit number is produced. The input will be a non-negative integer.
 *
 * See also: https://en.wikipedia.org/wiki/Digital_root
 *
 * Brute-force solution, kind of... ;-)
 */
export const digitalRoot = (n: number): number => {
  return n < 10 ? n : digitalRoot([...n.toString()].map((digit) => parseInt(digit)).reduce((a, b) => a + b, 0));
};

/**
 * This is the solution I actually submitted.
 */
export const digitalRoot2 = (n: number): number => {
  return n < 10 ? n : digitalRoot2(Math.floor(n / 10) + (n % 10));
};
