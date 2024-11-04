const nonConstructibleChange = (coins) => {
  // Sort the coins array in ascending order
  const sortedCoins = coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;

  for (let i = 0; i < sortedCoins.length; i++) {
    const element = sortedCoins[i];
    console.log({ element, currentChangeCreated });
    if (currentChangeCreated + 1 < element) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += element;
  }
  // Return the smallest non-constructible change plus one
  return currentChangeCreated + 1;
};
// Do not edit the line below.
const nonConstructibleChange2 = (coins) => {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
};
