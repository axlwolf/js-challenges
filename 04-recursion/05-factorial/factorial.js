// const factorial = (num) => {
//   console.log({ num });

// Base case: 0! and 1! are both 1
//   if (num === 1 || num === 0) return 1;

// Recursive case: n! = n * (n - 1)!
//   const result = num * factorial(num - 1);

//   return result;
// };

const factorial = (num) =>
  num === 1 || num === 0 ? 1 : num * factorial(num - 1);

export default factorial;
