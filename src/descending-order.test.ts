import { descendingOrder } from "./descending-order";

describe("descendingOrder", function () {
  it("should return some sample numbers in descending order", function () {
    expect(descendingOrder(0)).toStrictEqual(0);
    expect(descendingOrder(1)).toStrictEqual(1);
    expect(descendingOrder(123456789)).toStrictEqual(987654321);
    expect(descendingOrder(42145)).toStrictEqual(54421);
    expect(descendingOrder(145263)).toStrictEqual(654321);
  });
});
