const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((number) => number * 2);

//console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((number) => number % 2 === 0);

//console.log(evenNumbers);
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((sum, number) => sum + number, 0);

//console.log(sum);
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
// numbers.forEach((number) => console.log(number));
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const foundNumber = numbers.find((number) => number > 2);
//console.log(foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((number) => number % 2 == 0);
// console.log(hasEvenNumber);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNumsGreaterThanZero = numbers.every((number) => number >= 0);
console.log(allNumsGreaterThanZero);
