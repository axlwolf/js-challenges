const isValidIPv4 = (input) => {
  // Split the input string into an array of octets.
  const octets = input.split(".");
  // If the input string does not contain exactly 4 octets, return false.
  if (octets.length !== 4) {
    return false;
  }
  // Otherwise, return true if every octet is a number between 0 and 255.
  return octets.every((octet) => {
    const num = parseInt(octet); // Convert the octet to a number.
    return num >= 0 && num <= 255 && octet === num.toString(); // Return true if the octet is between 0 and 255 and the octet is equal to the number converted back to a string.
  });
};

// (str) => {
//   const ipV4 = str.split(".");
//   if (ipV4.length !== 4) return false;

//   return ipV4.every((segment) => {
//     const num = parseInt(segment); // Convert the segment to a number.
//     return num >= 0 && num <= 255 && segment === num.toString(); // Return true if the octet is between 0 and 255 and the octet is equal to the number converted back to a string.
//   });
//   //  return ipV4;
// };

export default isValidIPv4;
