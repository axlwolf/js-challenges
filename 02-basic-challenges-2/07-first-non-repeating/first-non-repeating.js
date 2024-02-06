// const findFirstNonRepeatingCharacter = (str) => {
//   const charCount = {};

//   // Count the occurrences of each character
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Find the first non-repeating character
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   // If no non-repeating character is found, return null
//   return null;
// };

const findFirstNonRepeatingCharacter = (str) => {
  // Create a new map
  const charCount = new Map();

  // Loop through the string
  for (const char of str) {
    // If the map already has the current character, increment the count
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  console.log(charCount);

  // Loop through the string
  for (const char of str) {
    // If the count of the current character is 1, return the current character
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no characters are repeated, return null
  return null;
};

export default findFirstNonRepeatingCharacter;
