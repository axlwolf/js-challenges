const countVowels = (str) =>
	str
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "")
		.match(/[aeiou]/gi).length;

// const countVowels = (str) => {
// 	const formattedStr = str.toLowerCase();

// 	let count = 0;

// 	for (let i = 0; i < formattedStr.length; i++) {
// 		const char = formattedStr[i];

// 		if (
// 			char === "a" ||
// 			char === "e" ||
// 			char === "i" ||
// 			char === "o" ||
// 			char === "u"
// 		) {
// 			count++;
// 		}
// 	}

// 	return count;
// };
export default countVowels;
