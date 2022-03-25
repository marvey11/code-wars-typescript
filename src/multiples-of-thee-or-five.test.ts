import { multiples } from "./multiples-of-thee-or-five";

const test = (num: number, expected: number): void => {
  expect(multiples(num)).toStrictEqual(expected);
};

describe("multiples of 3 and 5", () => {
  it("should handle basic tests", () => {
    test(10, 23);
  });
});
