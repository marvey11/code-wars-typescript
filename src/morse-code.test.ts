import { decodeBits, decodeMorse } from "./morse-code";

const Test = {
  assertEquals: (actual: string, expected: string) => expect(actual).toEqual(expected)
};

describe("Example from description", () => {
  it("HEY JUDE", () => {
    Test.assertEquals(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
  });
});

describe("Your own tests for decodeMorse", () => {
  it("Something", () => {
    Test.assertEquals(decodeMorse("···−−−···"), "SOS");
    Test.assertEquals(decodeMorse("-- .- .-. ...- . -.-- .---- .----"), "MARVEY11");
  });
});

describe("Test suite for decodeBits", () => {
  it("Example from description", () => {
    const bits =
      "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";
    Test.assertEquals(decodeMorse(decodeBits(bits)), "HEY JUDE");
  });
});
