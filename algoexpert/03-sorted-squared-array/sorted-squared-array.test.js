import { sortedSquaredArray } from "./sorted-squared-array.js";

describe("sortedSquaredArray", () => {
  it("should return a sorted squared array", () => {
    expect(sortedSquaredArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquaredArray([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  it("should handle empty arrays", () => {
    expect(sortedSquaredArray([])).toEqual([]);
  });

  it("should handle arrays with only one element", () => {
    expect(sortedSquaredArray([5])).toEqual([25]);
  });
});
