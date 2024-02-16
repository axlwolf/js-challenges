// const findMissingLetter = (arr) => {
//   let start = arr[0].charCodeAt(0);

//   const missingCharCode = arr
//     .map((c) => c.charCodeAt(0))
//     .find((c) => {
//       if (c - start > 1) {
//         return true;
//       }

//       start = c;
//       return false;
//     });
//   return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
// };

const findMissingLetter = (arr) => {
  const missingCharCode = arr.filter((c, index) => {
    if (index === 0) return false;

    const prevCharCode = arr[index - 1].charCodeAt(0);

    const currentCharCode = c.charCodeAt(0);

    return currentCharCode - prevCharCode > 1;
  })[0];

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
};

export default findMissingLetter;
