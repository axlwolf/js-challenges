import { nonConstructibleChange } from "./non-constructible-change.js";

describe("sortedSquaredArray", () => {
  test("returns the minimum non-constructible change for an array with no coins", () => {
    const coins = [];
    expect(nonConstructibleChange(coins)).toBe(1);
  });
  test("returns the minimum non-constructible change for an array with one coin", () => {
    const coins = [1];
    expect(nonConstructibleChange(coins)).toBe(2);
  });
  test("returns the minimum non-constructible change for an array with multiple coins", () => {
    const coins = [1, 2, 5];
    expect(nonConstructibleChange(coins)).toBe(4);
  });
  test("returns the minimum non-constructible change for an array with consecutive coins", () => {
    const coins = [1, 1, 1, 1];
    expect(nonConstructibleChange(coins)).toBe(5);
  });

  test("returns the minimum non-constructible change for an array with 7 consecutive coins", () => {
    const coins = [6, 4, 5, 1, 1, 8, 9];
    expect(nonConstructibleChange(coins)).toBe(3);
  });
});
