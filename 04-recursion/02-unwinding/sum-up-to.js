const sumUpTo = (num) => {
  if (num === 0) return 0;
  // Base case - when n is 1, we return 1
  if (num === 1) {
    console.log(`sumUpTo(${num}) returns 1`);
    return 1;
  }

  console.log({ num });

  // Recursive case - when num is greater than 1, we return the sum of num and sumUpTo(num - 1)
  //console.log(`sumUpTo(${num}) calls sumUpTo(${num - 1}) + ${num}`);
  let sum = num + sumUpTo(num - 1);

  //console.log(`sumUpTo(${num}) retuns sumUpTo(${sum})`);
  console.log({ num });
  console.log({ sum });

  return sum;
};

export default sumUpTo;
