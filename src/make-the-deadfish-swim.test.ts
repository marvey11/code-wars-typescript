import { parse, parse2 } from "./make-the-deadfish-swim";

const test = (actual: number[], expected: number[]): void => {
  expect(actual).toStrictEqual(expected);
};

describe("first version", () => {
  it("function should pass the tests", () => {
    test(parse("iiisdoso"), [8, 64]);
    test(parse("iiisxxxdoso"), [8, 64]);
  });
});

describe("second version", () => {
  it("non-recursive version should also pass", () => {
    test(parse2("iiisdoso"), [8, 64]);
    test(parse2("iiisxxxdoso"), [8, 64]);
  });
});
