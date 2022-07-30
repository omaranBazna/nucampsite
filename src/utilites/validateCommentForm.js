export const validateCommentForm = (values) => {
  const errors = {};
  ///checking  the rating
  if (!values.rating) {
    errors.rating = "Required";
  }

  ///checking the author
  if (!values.author) {
    errors.author = "Required";
  } else if (values.author.length < 2) {
    errors.author = "Must be at least 2 characters.";
  } else if (values.author.length > 15) {
    errors.author = "Must be 15 characters or less.";
  }
  return errors;
};
