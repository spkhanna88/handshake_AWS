var express = require("express");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");

function validateaddevents(data) {
  let errors = {};

  if (Validator.isEmpty(data.eventname)) {
    errors.eventname = "This field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "This field is required";
  }
  if (Validator.isEmpty(data.eventtime)) {
    errors.eventtime = "This field is required";
  }

  if (Validator.isEmpty(data.eventdate)) {
    errors.eventdate = "This field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "This field is required";
  }

  if (Validator.isEmpty(data.eligibility)) {
    errors.eligibility = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
  //function
}

module.exports = validateaddevents;
