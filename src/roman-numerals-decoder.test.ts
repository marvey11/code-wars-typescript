import { decodeRoman } from "./roman-numerals-decoder";

const test = (actual: string, expected: number): void => {
  expect(decodeRoman(actual)).toStrictEqual(expected);
};

describe("solution", function () {
  it("tests", () => {
    test("XXI", 21);
    test("I", 1);
    test("IV", 4);
    test("MMVIII", 2008);
    test("MDCLXVI", 1666);
  });
});
