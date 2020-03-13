import Validator from "validator";
import isEmpty from "lodash/isEmpty";

function validateSigninInput(data) {
  let errors = {};
  console.log(data);
  console.log(errors);
  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = "This field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
//function

export default validateSigninInput;
