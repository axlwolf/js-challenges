// O(n^2) time | O(1) space
const twoNumberSum = (array, targetSum) => {
  // Write your code here.
  let sum = [];
  let arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < arrLen; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        sum = [...sum, firstNum, secondNum];
        return sum;
      }
    }
  }
  return sum;
};

// O(n) time | O(n) space
// function twoNumberSum(array, targetSum) {
//  const nums = {};
//   for(const num of array) {
//       const potentialMatch = targetSum - num;
//     if(potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return []
// }

// O(nlog(n)) | O(1) space
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while(left < right) {
//     const currentSum = array[left] + array[right];
//     if(currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if(currentSum < targetSum) {
//       left++;
//     } else if(currentSum > targetSum) {
//       right--;
//     }
//   }
//   return []
// }

module.exports = twoNumberSum;
