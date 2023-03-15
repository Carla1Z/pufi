export const Validation = (input) => {
  let error = {};

  if (!input.email) {
    error.email = "*Ingresa un email";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    error.email = "*Ingresa un email valido";
  }
  return error;
};
