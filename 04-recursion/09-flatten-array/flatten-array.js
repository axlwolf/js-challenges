const flattenArray = (arr) => {
  // Create an empty array to store the result
  let result = [];

  // Loop through each item in arr
  for (const item of arr) {
    // If item is an array, call flattenArray again and concat the result to result
    console.log({ itemIsArray: Array.isArray(item) });
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      // If item is not an array, push it to result
      result.push(item);
    }
  }
  return result;
};

// const flattenArray = (arr) => {
//   let result = [];

//   for (const item of arr) {
//     console.log(item);
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//       console.log(result);
//     } else {
//       result.push(item);
//       console.log(result);
//     }
//   }

//   return result;
// };

export default flattenArray;
