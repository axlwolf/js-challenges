/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

const accessElement = (arr, index) => arr[index];

const arr = [1, 2, 3, 4, 5];

console.time("Acces Element 1");
console.log(accessElement(arr, 1));
console.timeEnd("Acces Element 1");
