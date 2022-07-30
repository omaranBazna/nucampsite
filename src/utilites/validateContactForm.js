export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "must be at least 2 characters";
  } else if (values.firstName.length > 50) {
    errors.firstName = "must be 50 or less characters";
  }
};
