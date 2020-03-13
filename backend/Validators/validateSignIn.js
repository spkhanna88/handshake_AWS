var express = require("express");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");

function validateSigninInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = "This field is required";

    if (Validator.isEmpty(data.password)) {
      errors.password = "This field is required";
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  }
  //function
}

module.exports = validateSigninInput;
