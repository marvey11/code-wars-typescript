/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
 * representation of that number. You can guarantee that input is non-negative.
 *
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.
 */
export const countBits = (n: number): number => {
  // Kernighan’s algorithm didn't work for random test 5012654965737877
  // therefore this...
  return [...n.toString(2)].filter((x) => x === "1").length;
};
