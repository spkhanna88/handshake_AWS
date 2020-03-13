import React, { Component } from "react";
import swal from "sweetalert";
import cookie from "react-cookies";
//import { Redirect } from "react-router";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import axios from "axios";

import editstudentprofile from "../../../../Actions/BasicDetailseditsave";

class EditBasicDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
      dob: "",
      city: "",
      state: "",
      country: "",
      emailid: localStorage.getItem("email"),
      phoneno: "",
      skillset: ""
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
      .editstudentprofile({ type: "save", data: this.state })
      .then(data => {
        swal({ text: "Saved Successfully" });
      })
      .catch(err => {
        console.log(err);
        swal("", "SomeErrorOccured", "error");
      });
  }

  editHandler() {
    let email = localStorage.getItem("email");
    let type;
    this.props
      .editstudentprofile({ type: "edit", email: email })
      .then(data => {
        console.log("edit" + data.data.studentfullname);
        this.setState({
          message: data.data.message,
          name: data.data.studentfullname,
          dob: data.data.dob,
          city: data.data.city,
          state: data.data.state,
          country: data.data.country,
          email: email,
          phoneno: data.data.phone,
          skill: data.data.skillset
        });
        // .catch(err => {
        //   console.log(err);
      })
      // })
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
          Career Objective:
          <textarea
            name="message"
            rows="1"
            cols="100"
            className="form-control"
            value={this.state.message || ""}
            onChange={this.ontextChangeHandler}
          >
            Career Goals
          </textarea>
          <br />
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            //required
            className="form-control"
            value={this.state.name || ""}
            onChange={this.ontextChangeHandler}
          />
          DateOfBirth:
          <input
            type="date"
            name="dob"
            className="form-control"
            value={this.state.dob || ""}
            onChange={this.ontextChangeHandler}
          />
          City:
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="San Jose"
            value={this.state.city || ""}
            onChange={this.ontextChangeHandler}
          />
          State:
          <input
            type="text"
            name="state"
            className="form-control"
            placeholder="California"
            value={this.state.state || ""}
            onChange={this.ontextChangeHandler}
          />
          Country:
          <div className="form-group">
            <input
              type="text"
              name="country"
              className="form-control"
              placeholder="USA"
              value={this.state.country || ""}
              onChange={this.ontextChangeHandler}
            />
          </div>
          <h3>Contact Information</h3>
          Email:
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="John.doe@gmail.com"
              value={localStorage.getItem("email")}
              //onChange={this.emailChangeHandler}
            />
          </div>
          PhoneNumber:
          <div className="form-group">
            <input
              type="text"
              name="phoneno"
              className="form-control"
              placeholder="(123)456-8790"
              value={this.state.phoneno || ""}
              onChange={this.ontextChangeHandler}
            />
          </div>
          Skills:
          <textarea
            name="skill"
            rows="1"
            cols="100"
            className="form-control"
            value={this.state.skill || ""}
            onChange={this.ontextChangeHandler}
          >
            Skills
          </textarea>
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

export default connect(null, { editstudentprofile })(EditBasicDetails);
