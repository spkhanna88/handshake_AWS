var express = require("express");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");

function validateaddjobs(data) {
  let errors = {};

  if (Validator.isEmpty(data.jobtitle)) {
    errors.jobtitle = "This field is required";
  }
  if (Validator.isEmpty(data.postingdate)) {
    errors.postingdate = "This field is required";
  }
  if (Validator.isEmpty(data.applicationdeadline)) {
    errors.applicationdeadline = "This field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "This field is required";
  }

  if (Validator.isEmpty(data.salary)) {
    errors.salary = "This field is required";
  }

  if (Validator.isEmpty(data.jobcategory)) {
    errors.jobcategory = "This field is required";
  }

  if (Validator.isEmpty(data.jobdescription)) {
    errors.jobdescription = "This field is required";
  }

  if (Validator.isEmpty(data.companyname)) {
    errors.companyname = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
  //function
}

module.exports = validateaddjobs;
