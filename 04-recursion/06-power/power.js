// // No recursion
// function power(base, exponent) {
//   // Initialize result to 1
//   let result = 1;

//   // Multiply base by itself exponent times
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// const power = (base, exponent) => {

// Base case - if exponent is 0, return 1
//   if (exponent === 0) return 1;

// Recursive case - return base multiplied by itself exponent - 1 times
//   return base * power(base, exponent - 1);
// };

const power = (base, exponent) =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);

export default power;
