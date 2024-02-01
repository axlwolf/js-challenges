// export const titleCase = (str) => {
// 	const word = str.toLowerCase().split(" ");
// 	 word.forEach((word, i) => {
// 	 	word[i] = word[i][0].toUpperCase() + word[i].slice(1);
// 	 });
// 	for (let i = 0; i < word.length; i++) {
// 		word[i] = word[i][0].toUpperCase() + word[i].slice(1);
// 	}

// 	return word.join(" ");
// };

// Explanation

// In this example, we are using the replace method to find the first letter
// of each word and replace it with the uppercase version of itself.

// The regex `/\b\w/g` matches the first letter of each word.

// - `\b` matches the word boundary
// - `\w` matches the first letter of each word
// - The `g` flag is used to replace all occurrences of the regex in the string

// The second argument is a callback function that returns the uppercase version
// of the matched letter.

export const titleCase = (str) =>
	str.replace(/\b\w/g, (match) => match.toUpperCase());
