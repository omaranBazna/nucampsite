export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 6) {
    errors.username = "username should be at least six chars";
  } else if (values.username.length > 15) {
    errors.username = "username should be at most fifteen chars";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "password should be at least eight chars";
  }

  return errors;
};
