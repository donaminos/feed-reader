import { printReverse, reverseList, reverseListRecursivly } from "./linkedList";

const input = "Alice -> Rob -> Michelle -> Dana";
const expected = "Dana -> Michelle -> Rob -> Alice";
describe("LinkedList", () => {
  it("print the nodes values in revers", () => {
    expect(printReverse(input)).toEqual(expected);
  });

  it("print the nodes values in revers", () => {
    expect(reverseList(input)).toEqual(expected);
  });

  it("print the nodes values in revers", () => {
    expect(reverseListRecursivly(input)).toEqual(expected);
  });
});
