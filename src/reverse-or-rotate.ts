/**
 * https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/typescript
 *
 * The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string)
 * of size sz (ignore the last chunk if its size is less than sz).
 *
 * If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
 * otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a
 * string.
 *
 * If
 * - sz is <= 0 or if str is empty return ""
 * - sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
 */
export const revrot = (str: string, sz: number): string => {
  if (sz === 0) {
    // cant't use 0 in the regular expression
    return "";
  }

  const matches = str.match(new RegExp(`.{1,${sz}}`, "g"));
  return matches === null
    ? ""
    : matches
        .filter((x) => x.length === sz)
        .map((x) => ({
          k: x,
          v: [...x]
            .map((d) => {
              const digit = parseInt(d);
              return digit * digit * digit;
            })
            .reduce((a, b) => a + b, 0)
        }))
        .map(({ k, v }) => (v % 2 === 0 ? k.split("").reverse().join("") : k.slice(1) + k[0]))
        .join("") || "";
};

export const revrot2 = (str: string, sz: number): string => {
  if (str === "" || sz === 0) {
    return "";
  }

  const slicer = (acc: string[], rest: string): string[] =>
    rest.length < sz ? acc : slicer([...acc, rest.slice(0, sz)], rest.slice(sz));

  return slicer([], str)
    .map((x) => {
      let chunks = [...x];
      const div2 = chunks.map((d) => Math.pow(parseInt(d), 3)).reduce((a, b) => a + b, 0) % 2 === 0;
      if (div2) {
        chunks.reverse();
      } else {
        chunks = [...chunks.slice(1), chunks[0]];
      }
      return chunks.join("");
    })
    .join("");
};

/**
 * Recursive solution.
 */
export const revrot3 = (str: string, sz: number): string => {
  if (str === "" || sz === 0 || str.length < sz) {
    return "";
  }

  const processSlice = (s: string): string => {
    let chunks = [...s];
    const div2 = chunks.map((d) => Math.pow(parseInt(d), 3)).reduce((a, b) => a + b, 0) % 2 === 0;
    if (div2) {
      chunks.reverse();
    } else {
      chunks = [...chunks.slice(1), chunks[0]];
    }
    return chunks.join("");
  };

  return processSlice(str.slice(0, sz)) + revrot3(str.slice(sz), sz);
};
