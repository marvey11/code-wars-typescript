import { isPangram } from "./detect-pangram";

const test = (actual: boolean, expected: boolean): void => {
  expect(actual).toStrictEqual(expected);
};

describe("example", () => {
  it("test", () => {
    test(isPangram("The quick brown fox jumps over the lazy dog."), true);
    test(isPangram("This is not a pangram."), false);
  });
});
