export const twoNumberSum = (array, targetSum) => {
  //return "Hello World!";
  // Write your code here.
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //console.log({ i: array[i] });

    for (let j = i + 1; j < array.length; j++) {
      //console.log({ j: array[j] });
      let sum = array[i] + array[j];
      if (sum === targetSum) {
        //console.log({ sum, targetSum });

        result.push(array[i]);
        result.push(array[j]);
        return result;
      }
    }
  }
  return result;
};
