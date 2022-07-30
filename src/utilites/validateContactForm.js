export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "must be at least 2 characters";
  } else if (values.firstName.length > 15) {
    errors.firstName = "must be 15 or less characters";
  }

  if (!values.lastName) {
    errors.lastName = "required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "must be at least 2 characters";
  } else if (values.lastName.length > 15) {
    errors.lastName = "must be 15 or less characters";
  }

  const reg = /^\d+$/;

  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "phone number should only contains numbers";
  }

  if (!values.email.includes("@")) {
    errors.email = "Please provide valid email address ";
  }

  return errors;
};
