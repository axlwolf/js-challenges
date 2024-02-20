// const arraySum = (numArray) => {

// Base case
//   if (numArray.length === 0) return 0;

// Recursive case: Sum the first element and the sum of the rest of the array
//   let result = numArray.pop() + arraySum(numArray);
//   return result;
// };

const arraySum = (numArray) =>
  // numArray.length === 0 ? 0 : numArray.pop() + arraySum(numArray); // My solution
  numArray.length === 0 ? 0 : numArray[0] + arraySum(numArray.slice(1)); // Original solution

export default arraySum;
