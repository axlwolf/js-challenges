import permutations from "./permutations.js";

test("Permutations", () => {
  expect(permutations("abc")).toEqual([
    "abc",
    "acb",
    "bac",
    "bca",
    "cab",
    "cba",
  ]);
  expect(permutations("dog")).toEqual([
    "dog",
    "dgo",
    "odg",
    "ogd",
    "gdo",
    "god",
  ]);
  expect(permutations("")).toEqual([""]);
});
