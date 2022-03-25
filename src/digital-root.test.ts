import { digitalRoot, digitalRoot2 } from "./digital-root";

const test = (actual: number, expected: number): void => {
  expect(actual).toEqual(expected);
};

describe("solution", () => {
  it("should work for fixed tests", () => {
    test(digitalRoot(4), 4);
    test(digitalRoot(16), 7);
    test(digitalRoot(456), 6);
  });

  it("should work for the second solution as well", () => {
    test(digitalRoot2(4), 4);
    test(digitalRoot2(16), 7);
    test(digitalRoot2(456), 6);
  });
});
