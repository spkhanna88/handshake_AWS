import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import swal from "sweetalert";
//import { Redirect } from "react-router";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";

import educationeditsave from "../../../../Actions/educationeditsave";

class EditEducationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collegename: "",
      location: "",
      major: "",
      degree: "",
      yearofpassing: "",
      CGPA: "",
      email: localStorage.getItem("email")
    };

    this.ontextChangeHandler = this.ontextChangeHandler.bind(this);

    this.submitHandler = this.submitHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  }

  ontextChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    let email = localStorage.getItem("email");
    let type;
    this.props
      .educationeditsave({ type: "save", data: this.state })
      .then(data => {
        swal({ text: "Saved Successfully" });
      })
      .catch(err => {
        console.log(err);
        swal("", "SomeErrorOccured", "error");
      });
  }

  editHandler(event) {
    let email = localStorage.getItem("email");
    let type;
    this.props
      .educationeditsave({ type: "edit", email: email })
      .then(data => {
        console.log("edit" + data.data.studentfullname);
        this.setState({
          collegename: data.data.schoolname,
          location: data.data.clglocation,
          degree: data.data.degree,
          major: data.data.major,
          yearofpassing: data.data.yearofpassing,
          CGPA: data.data.cgpa
        });
      })

      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.editHandler();
  }

  render() {
    console.log(localStorage.getItem("email"));
    return (
      <div>
        <form onSubmit={this.submitHandler} className="form-group">
          College Name:
          <input
            type="text"
            name="collegename"
            className="form-control"
            value={this.state.collegename || ""}
            placeholder="College Name"
            onChange={this.ontextChangeHandler}
          />
          Location:
          <input
            type="text"
            name="location"
            placeholder="Location"
            //required
            className="form-control"
            value={this.state.location || ""}
            onChange={this.ontextChangeHandler}
          />
          Degree:
          <input
            type="date"
            name="degree"
            className="form-control"
            value={this.state.degree || ""}
            onChange={this.ontextChangeHandler}
          />
          Major:
          {/*  <input
            type="text"
            name="major"
            className="form-control"
            placeholder="Computer Engineering"
            value={this.state.major || ""}
            onChange={this.majorChangeHandler}
        /> */}
          <select
            name="major"
            onChange={this.ontextChangeHandler}
            className="form-control"
            value={this.state.major || ""}
          >
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
          </select>
          Year Of Passing:
          <input
            type="text"
            name="yearofpassing"
            className="form-control"
            placeholder="California"
            value={this.state.yearofpassing || ""}
            onChange={this.ontextChangeHandler}
          />
          current CGPA:
          <div className="form-group">
            <input
              type="text"
              name="CGPA"
              className="form-control"
              placeholder="4.0"
              value={this.state.CGPA || ""}
              onChange={this.ontextChangeHandler}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary btn-lg"
            >
              <b>Save</b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { educationeditsave })(EditEducationDetails);
