const countDown = (num) => {
  // Base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

export default countDown;
