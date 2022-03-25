import { revrot, revrot2, revrot3 } from "./reverse-or-rotate";

const test = (actual: string, expected: string): void => {
  expect(actual).toEqual(expected);
};

describe("Fixed Tests", () => {
  it("should pass the basic tests", () => {
    test(revrot("1234", 0), "");
    test(revrot("", 0), "");
    test(revrot("1234", 5), "");
    const s = "733049910872815764";
    test(revrot(s, 5), "330479108928157");
  });

  it("should also pass the tests taken from the kata description", () => {
    test(revrot("123456987654", 6), "234561876549");
    test(revrot("123456987653", 6), "234561356789");
    test(revrot("66443875", 4), "44668753");
    test(revrot("66443875", 8), "64438756");
    test(revrot("664438769", 8), "67834466");
    test(revrot("123456779", 8), "23456771");
    test(revrot("", 8), "");
    test(revrot("123456779", 0), "");
    test(revrot("563000655734469485", 4), "0365065073456944");
  });
});

describe("Fixed Tests for the second solution", () => {
  it("should pass the basic tests", () => {
    test(revrot2("1234", 0), "");
    test(revrot2("", 0), "");
    test(revrot2("1234", 5), "");
    const s = "733049910872815764";
    test(revrot2(s, 5), "330479108928157");
  });

  it("should also pass the tests taken from the kata description", () => {
    test(revrot2("123456987654", 6), "234561876549");
    test(revrot2("123456987653", 6), "234561356789");
    test(revrot2("66443875", 4), "44668753");
    test(revrot2("66443875", 8), "64438756");
    test(revrot2("664438769", 8), "67834466");
    test(revrot2("123456779", 8), "23456771");
    test(revrot2("", 8), "");
    test(revrot2("123456779", 0), "");
    test(revrot2("563000655734469485", 4), "0365065073456944");
  });
});

describe("Fixed Tests for the recursive solution", () => {
  it("should pass the basic tests", () => {
    test(revrot3("1234", 0), "");
    test(revrot3("", 0), "");
    test(revrot3("1234", 5), "");
    const s = "733049910872815764";
    test(revrot3(s, 5), "330479108928157");
  });

  it("should also pass the tests taken from the kata description", () => {
    test(revrot3("123456987654", 6), "234561876549");
    test(revrot3("123456987653", 6), "234561356789");
    test(revrot3("66443875", 4), "44668753");
    test(revrot3("66443875", 8), "64438756");
    test(revrot3("664438769", 8), "67834466");
    test(revrot3("123456779", 8), "23456771");
    test(revrot3("", 8), "");
    test(revrot3("123456779", 0), "");
    test(revrot3("563000655734469485", 4), "0365065073456944");
  });
});
