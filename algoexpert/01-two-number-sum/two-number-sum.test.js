import { twoNumberSum } from "./two-number-sum.js";

test("Returning [3, 15]", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
  const targetSum = 18;
  const result = twoNumberSum(array, targetSum);
  console.log(result);
  expect(result).toEqual([3, 15]);
});

test("Returning [ -5, 0 ]", () => {
  const array = [-7, -5, -3, -1, 0, 1, 3, 5, 7];
  const targetSum = -5;
  const result = twoNumberSum(array, targetSum);
  console.log(result);
  expect(result).toEqual([-5, 0]);
});

test("Returning [11, -1]", () => {
  const array = [3, 5, -4, 8, 11, 1, -1, 6];
  const targetSum = 10;
  const result = twoNumberSum(array, targetSum);
  console.log(result);
  expect(result).toEqual([11, -1]);
});
