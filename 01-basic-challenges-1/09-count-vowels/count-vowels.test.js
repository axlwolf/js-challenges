import countVowels from "./count-vowels.js";

test("Counting vowels in a string", () => {
	expect(countVowels("Hello, World!")).toBe(3);
	expect(countVowels("JavaScript")).toBe(3);
	expect(countVowels("OpenAI Chatbot")).toBe(6);
	expect(countVowels("Coding Challenge")).toBe(5);
});
