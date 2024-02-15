import validatePassword from "./password-validator.js";

test("Password Validation", () => {
  expect(validatePassword("Abc12345")).toBe(true);
  expect(validatePassword("password123")).toBe(false);
  expect(validatePassword("Pass")).toBe(false);
  expect(validatePassword("HelloWorld")).toBe(false);
});
