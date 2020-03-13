import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { connect } from "react-redux";
import Navbar from "../../Main/Pages/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import axios from "axios";

//files
import EditBasicDetails from "../Components/Edit/EditBasicDetails";
import EditEducationDetails from "../Components/Edit/EditEducationDetails";
import EditCompanyDetails from "../Components/Edit/EditCompanyDetails";
import EditImage from "../Components/Edit/EditImage";
class EditStudentProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Link to="../Pages/StudentProfile" class="btn btn-primary">
          Back
        </Link>

        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <EditImage />
            </div>

            <div className="col-sm-9">
              <h2>Basic Details:</h2>
              <EditBasicDetails />
              <h2>Education Details:</h2>
              <EditEducationDetails />
              <h2>Experience Details:</h2>
              <EditCompanyDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditStudentProfile;

//connect(null, { Profileeditsave })
