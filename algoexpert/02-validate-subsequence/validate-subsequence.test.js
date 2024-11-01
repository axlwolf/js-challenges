import { isSubsecuence } from "./validate-subsequence.js";

test("Returning true", () => {
  const mainSecuence = [1, 2, 3, 4];
  const subSecuence = [2, 4];
  const result = isSubsecuence(mainSecuence, subSecuence);
  console.log(result);

  expect(result).toBe(true);
});

test("Returning true 2", () => {
  const mainSecuence = [5, 1, 22, 25, 6, -1, 8, 10];
  const subSecuence = [1, 6, -1, 10];
  const result = isSubsecuence(mainSecuence, subSecuence);
  console.log(result);

  expect(result).toBe(true);
});

test("Returning true 3", () => {
  const mainSecuence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const subSecuence = [4, 3, 2, 1];
  const result = isSubsecuence(mainSecuence, subSecuence);
  console.log(result);

  expect(result).toBe(false);
});
