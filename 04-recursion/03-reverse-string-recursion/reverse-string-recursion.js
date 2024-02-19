// const reverseString = (str) => {
//   if (str === "") return "";
//   console.log({
//     substring: str.substring(1),
//     substringPlusChar: str.substring(1) + str.charAt(0),
//     charAt: str.charAt(0),
//   });
//   let result = reverseString(str.substr(1)) + str.charAt(0);
//   console.log({ result });
//   return result;
// };

const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substring(1)) + str.charAt(0);
export default reverseString;
