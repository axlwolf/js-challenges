import findFirstNonRepeatingCharacter from "./first-non-repeating.js";

test("Find First Non-Repeating Character", () => {
  expect(findFirstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(findFirstNonRepeatingCharacter("aabbcc")).toBe(null);
  expect(findFirstNonRepeatingCharacter("hello world")).toBe("h");
});
