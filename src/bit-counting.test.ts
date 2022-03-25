import { countBits } from "./bit-counting";

const doTest = (actual: number, expected: number): void => {
  expect(actual).toEqual(expected);
};

describe("example", () => {
  it("test", () => {
    doTest(countBits(0), 0);
    doTest(countBits(4), 1);
    doTest(countBits(7), 3);
    doTest(countBits(9), 2);
    doTest(countBits(10), 2);
    doTest(countBits(5012654965737877), 31);
  });
});
