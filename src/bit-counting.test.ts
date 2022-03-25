import { countBits, countBits2 } from "./bit-counting";

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

describe("test suite for recursive version", () => {
  it("should also pass", () => {
    doTest(countBits2(0), 0);
    doTest(countBits2(4), 1);
    doTest(countBits2(7), 3);
    doTest(countBits2(9), 2);
    doTest(countBits2(10), 2);
    doTest(countBits2(5012654965737877), 31);
  });
});
