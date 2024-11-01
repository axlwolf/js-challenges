// Time Complexity: O(n) Space Complex: O(1)
// export const isSubsecuence = (array, sequence) => {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }

//     arrIdx++;

//     console.log({
//       array: array[arrIdx],
//       sequence: sequence[seqIdx],
//       seqIdx: seqIdx,
//     });
//   }
//   return seqIdx === sequence.length;
// };

// Time Complexity: O(n) Space Complex: O(1)
export const isSubsecuence = (array, sequence) => {
  let seqIdx = 0;
  for (let val of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === val) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
};
