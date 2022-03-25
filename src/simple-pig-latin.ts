/**
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f
 *
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word.
 *
 * Leave punctuation marks untouched.
 */
export const pigIt = (a: string): string => {
  return a
    .split(" ")
    .map((w) => (w.match(/^[a-zA-Z]+$/) ? w.slice(1) + w[0] + "ay" : w))
    .join(" ");
};
