import { pigIt } from "./simple-pig-latin";

const testIt = (actual: string, expected: string): void => {
  expect(actual).toStrictEqual(expected);
};

describe("Tests", () => {
  it("test", () => {
    testIt(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
    testIt(pigIt("This is my string"), "hisTay siay ymay tringsay");
  });
});
