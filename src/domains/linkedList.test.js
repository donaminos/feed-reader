import { printReverse } from "./linkedList";

describe("LinkedList", () => {
  it("print the nodes values in revers", () => {
    const input = "Alice -> Rob -> Michelle -> Dana";
    const expected = "Dana -> Michelle -> Rob -> Alice";

    expect(printReverse(input)).toEqual(expected);
  });
});
