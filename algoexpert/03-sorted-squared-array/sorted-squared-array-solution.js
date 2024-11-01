function sortedSquaredArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i]);
  }
  // Ordenamiento burbuja (simple, para el ejemplo)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Intercambiar elementos
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

// Time Complexity: O(n log n)
// Space Complexity: O(n)
const sortedSquaredArray2 = (array) =>
  array.map((s) => s * s).sort((a, b) => a - b);

// O(nlogn) time | O(n) space
const sortedSquaredArray3 = (array) => {
  const sortedSquares = new Array(array.length).fill(0);
  for (let i in array) {
    let value = array[i];
    sortedSquares[i] = value * value;
  }
  return sortedSquares.sort((a, b) => a - b);
};

// O(n) time | O(n) Space
export const sortedSquaredArray4 = (array) => {
  // Initialize the result array with zeros
  const sortedSquares = new Array(array.length).fill(0);
  // Define pointers to the start and end of the input array
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;
  // Loop through the input array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    let smallerValue = array[smallerValueIdx];
    let largerValue = array[largerValueIdx];

    // Compare absolute values of the elements pointed by the two pointers
    if (Math.abs(array[smallerValueIdx]) > Math.abs(array[largerValueIdx])) {
      // If the element at the smallerValueIdx pointer is larger, square it and put it in the result array
      sortedSquares[i] = smallerValue ** 2;
      // Move the smallerValueIdx pointer to the right
      smallerValueIdx++;
    } else {
      // If the element at the largerValueIdx pointer is larger or equal, square it and put it in the result array
      sortedSquares[i] = largerValue ** 2;
      // Move the largerValueIdx pointer to the left
      largerValueIdx--;
    }
  }
  return sortedSquares;
};
