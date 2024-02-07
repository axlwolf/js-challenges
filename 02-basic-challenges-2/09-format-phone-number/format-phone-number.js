// const formatPhoneNumber = (phoneNumber) => {
//   let formattedPhoneNumber = `(${phoneNumber.slice(0,3).join('')}) ${phoneNumber.slice(3,6).join('')}-${phoneNumber.slice(6,10).join('')}`;
//   return formattedPhoneNumber;
// };

// const formatPhoneNumber = (phoneNumber) => {
  // Get the first 3 numbers and join them together
  // const areaCode = numbers.slice(0, 3).join('');
  // // Get the next 3 numbers and join them together
  // const prefix = numbers.slice(3, 6).join('');
  // // Get the last 4 numbers and join them together
  // const lineNumber = numbers.slice(6).join('');

  // // Return the formatted phone number
  // return `(${areaCode}) ${prefix}-${lineNumber}`;
// };


// const formatPhoneNumber = (phoneNumber) => {
  // // Join all the numbers together
  // const formatted = numbers.join('');
  // // Return the formatted phone number
  // return `(${formatted.substring(0, 3)}) ${formatted.substring(
  //   3,
  //   6
  // )}-${formatted.substring(6)}`;
  // };

  // Arrow function with implicit return
const formatPhoneNumber = (phoneNumber) => `(${phoneNumber.slice(0,3).join('')}) ${phoneNumber.slice(3,6).join('')}-${phoneNumber.slice(6,10).join('')}`;

export default formatPhoneNumber;
