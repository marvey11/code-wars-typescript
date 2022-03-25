import { spinWords } from "./spinning-words";

describe("spinWords", () => {
  it("should pass some fixed tests", () => {
    expect(spinWords("Hey fellow warriors")).toStrictEqual("Hey wollef sroirraw");
  });
});
