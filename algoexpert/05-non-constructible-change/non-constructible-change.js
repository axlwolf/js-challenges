// export const nonConstructibleChange = (coins) => {
//   // Write your code here.
//   const sortedCoins = coins.sort((a, b) => a - b);
//   let currentChangeCreated = 0;

//   for (const coin of sortedCoins) {
//     //currentChangeCreated += coin;
//     // console.log({ sortedCoins, currentChangeCreated, coin });

//     if (currentChangeCreated + 1 < coin) {
//       console.log({ coin, sortedCoins, currentChangeCreated });

//       return currentChangeCreated + 1;
//     }
//     currentChangeCreated += coin;
//   }
// };

export const nonConstructibleChange = (coins) => {
  // Sort the coins array in ascending order
  const sortedCoins = coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;

  // Loop through the sorted coins array in reverse order, except the last coin
  // for (const coin of sortedCoins) {
  //   //currentChangeCreated += coin;
  //   console.log({ coin, currentChangeCreated });
  //   if (currentChangeCreated + 1 < coin) {
  //     return currentChangeCreated + 1;
  //   }
  //   currentChangeCreated += coin;
  // }
  for (let i = 0; i < sortedCoins.length; i++) {
    const element = sortedCoins[i];
    console.log({ sortedCoins, element, currentChangeCreated });
    if (currentChangeCreated + 1 < element) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += element;
  }
  // Return the smallest non-constructible change plus one
  return currentChangeCreated + 1;
};
