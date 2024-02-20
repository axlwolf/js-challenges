const permutations = (str) => {
  // If str is an empty string, push an empty string to result and return
  if (str.length === 0) {
    return [""];
  }

  // Create an array to store the permutations
  const results = [];
  for (let i = 0; i < str.length; i++) {
    // Remove current character from remaining string
    console.log({ strSlice: str.slice(0, i), str: str.slice(i + 1) });
    const remaining = str.slice(0, i) + str.slice(i + 1);
    // Generate permutations for remaining string
    const subPermutations = permutations(remaining);
    // Prepend current character to each sub-permutation
    for (const perm of subPermutations) {
      results.push(str[i] + perm);
    }
  }
  console.log({ results });
  return results;
};

export default permutations;
