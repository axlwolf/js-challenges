# Sorted Squared

## Instructions

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

### Sample Input

```JS
array = [1, 2, 3, 5, 6, 8, 9]

```

### Sample Output

```
[1, 4, 9, 25, 36, 64, 81]
```

## Hints

<details>
  <summary>Hint 1</summary>
While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the possible presence of negative numbers.

</details>

<details>
  <summary>Hint 2</summary>
Traverse the array value by value, square each value, and insert the squares into an output array. Then, sort the output array before returning it. Is this the optimal solution?

</details>

<details>
  <summary>Hint 3</summary>
  To reduce the time complexity of the algorithm mentioned in Hint #2, you need to avoid sorting the ouput array. To do this, as you square the values of the input array, try to directly insert them into their correct position in the output array.

</details>

<details>
  <summary>Hint 4</summary>
Use two pointers to keep track of the smallest and largest values in the input array. Compare the absolute values of these smallest and largest values, square the larger absolute value, and place the square at the end of the output array, filling it up from right to left. Move the pointers accordingly, and repeat this process until the output array is filled.

</details>

### Understanding the problem

Given an array of integers that are sorted in increasing order, we are asked to write a function that squares all the integers in the array and returns them in a new array. The returned array must be sorted in increasing order as well.

#

## Solutions

<details>
  <summary>Click For Solution 1</summary>

#### Approach 1

- A new, empty array called result is created.
- The original array (array) is iterated over using a for loop.
- In each iteration, the square of the current element is calculated and added to the result array.
  -A simple sorting algorithm (bubble sort in this case) is implemented to sort the result array in place.
- The sorted result array is returned.

```JS
// Write your code here.
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
// Do not edit the line below.
```

</details>

<details>
  <summary>Click For Solution 2</summary>

```JS
// Write your code here.
const sortedSquaredArray = (array) =>
  array.map((s) => s * s).sort((a, b) => a - b);
// Do not edit the line below.
```

#### Approach 2

This function takes an array of numbers as input and returns a new array with the squares of those numbers sorted in ascending order. It uses a concise approach leveraging JavaScript's higher-order functions map and sort.

#### Explanation:

- array.map((s) => s \* s):

- The map() method iterates over each element (s) in the input array.
  For each element, it calculates the square (s \* s) and creates a new array containing these squared values.
  .sort((a, b) => a - b):

- The sort() method is chained to the result of map(). It sorts the array of squared values in ascending order.
- The (a, b) => a - b function is a comparison function provided to sort(). - It defines the sorting order:
  If a - b is negative, a comes before b.
  If a - b is positive, a comes after b.
  If a - b is zero, a and b are considered equal for sorting.

</details>

### Test Cases

```JS

import { sortedSquaredArray } from "./sorted-squared-array.js";

describe("sortedSquaredArray", () => {
  it("should return a sorted squared array", () => {
    expect(sortedSquaredArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquaredArray([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });

  it("should handle empty arrays", () => {
    expect(sortedSquaredArray([])).toEqual([]);
  });

  it("should handle arrays with only one element", () => {
    expect(sortedSquaredArray([5])).toEqual([25]);
  });
});
```

## Optimal Space & Time Complexity

```
O(n) time | O(n) space - where n is the length of the input array
```
