/**
 * https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript
 *
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 */
export const findOdd = (xs: number[]): number => {
  return [...new Set(xs)].filter((x) => xs.filter((y) => x === y).length % 2 === 1)[0];
};
