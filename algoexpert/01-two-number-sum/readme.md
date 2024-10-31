# Two Number Sum

## Instructions

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

### Function Signature

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
Sample Output
[-1, 11] // the numbers could be in reverse order

## Solutions

<details>
  <summary>Click For Solution</summary>

```JS
// O(n^2) time | O(1) space
const twoNumberSum = (array, targetSum) => {
  // Write your code here.
  let sum = [];
  let arrLen = array.length;

  for(let i = 0; i < arrLen; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < arrLen; j++) {
      let secondNum = array[j];
      if(firstNum + secondNum === targetSum) {
        sum = [...sum, firstNum, secondNum];
        return sum;
      }
    }
  }
  return sum;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
```

```JS

// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
 const nums = {};
  for(const num of array) {
      const potentialMatch = targetSum - num;
    if(potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
```

```JS

// O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === targetSum) {
      return [array[left], array[right]];
    } else if(currentSum < targetSum) {
      left++;
    } else if(currentSum > targetSum) {
      right--;
    }
  }
  return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum
```

### Explanation

I will put the explanation to the solution here. The length and depth of the explanation will vary depending on the challenge.

</details>

### Test Cases

The Jest tests will go here. They are already included in the course files. You just need to run `npm test`. Sometimes I will also put manual tests here.

```JS

it('Test Case #1', function () {
  const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  chai.expect(output.length === 2).to.deep.equal(true);
  chai.expect(output.includes(11)).to.deep.equal(true);
  chai.expect(output.includes(-1)).to.deep.equal(true);
});
```

## Hints

<details>
  <summary>Hint 1</summary>
  Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?

</details>

<details>
  <summary>Hint 2</summary>
  Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.

</details>

<details>
  <summary>Hint 3</summary>
  Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash table. What are the time and space implications of this approach?
</details>

## Optimal Space & Time Complexity

```
O(n) time | O(n) space - where n is the length of the input array
```
