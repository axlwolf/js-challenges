// const sumOfEvenSquares = (numbers) => {
//   const sum = numbers
//     .filter((number) => number % 2 === 0)
//     .reduce((sum, number) => (sum += number * number), 1);
//   return sum - 1;
// };

const sumOfEvenSquares = (numbers) => {
  // Filter out the even numbers from the input array.
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    // Square each even number.
    .map((num) => num ** 2)
    // Accumulate the squared numbers to compute the sum.
    .reduce((sum, square) => sum + square, 0);

  // Return the sum of squares of even numbers.
  return evenSquares;
};

export default sumOfEvenSquares;
