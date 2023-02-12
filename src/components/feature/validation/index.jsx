export const EmailValidation = (input) => {
  return input.includes('@');
};

export const PasswordValidation = (input) => {
  return input.length >= 8;
};
