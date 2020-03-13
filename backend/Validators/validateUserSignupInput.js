var express = require("express");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");

function validateUserSignupInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.studentfullname)) {
    errors.studentfullname = "This field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "This field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "EMAIL is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "This field is required";
  }

  if (Validator.isEmpty(data.schoolname)) {
    errors.schoolname = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
  //validateinput
}

module.exports = validateUserSignupInput;
