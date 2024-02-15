/*
    1. The password must be at least 8 characters long.
    2. The password must contain at least one uppercase letter.
    3. The password must contain at least one lowercase letter.
    4. The password must contain at least one digit.
*/
/*
const validatePassword = (str) => {
  const passwordBreak = str.split("");

  let passLength = passwordBreak.length >= 8;

  const hasUppercase = passwordBreak.some(
    (char) => char.toUpperCase() === char && char !== char.toLowerCase()
  );

  const hasLowercase = passwordBreak.some(
    (char) => char.toLowerCase() === char && char !== char.toUpperCase()
  );

  const hasDigit = passwordBreak.some((char) => !isNaN(parseInt(char, 10)));

  let isValid =
    passLength && hasDigit && hasUppercase && hasLowercase ? true : false;

  // const password = passwordBreak.reduce((acc, char) => {
  //   //console.log(acc);
  //   acc[char] = (acc[char] || 0) + 1;

  //   Object.keys(acc).forEach((key) => {
  //     console.log({ key, char });
  //     if (key.toUpperCase() === char) isUppercase = true;
  //     if (key.toLowerCase() === char) isLowercase = true;
  //     if (!isNaN(+key) === !isNaN(+char)) isDigit = true;
  //     console.log({ isUppercase, isDigit, isLowercase });
  //     if (isDigit && isLowercase && isUppercase) isValid = true;
  //   });

  //   return acc;
  // }, {});

  return isValid;
};
*/
const validatePassword = (password) => {
  // Check if password is at least 8 characters long
  const isLengthValid = password.length >= 8;

  // Check if password contains at least one uppercase letter
  // The `some` method returns true if at least one element in the array satisfies the condition
  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  // Check if password contains at least one lowercase letter
  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  // Check if password contains at least one digit
  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
};
export default validatePassword;
