var express = require("express");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");

function validateCompanySignupInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.companyname)) {
    errors.companyname = "This field is required";
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

  if (Validator.isEmpty(data.location)) {
    errors.location = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
  //validateinput
}

module.exports = validateCompanySignupInput;
