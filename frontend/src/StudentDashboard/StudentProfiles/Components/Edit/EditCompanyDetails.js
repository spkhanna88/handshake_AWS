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

import companyeditsave from "../../../../Actions/companyeditsave";

class EditCompanyDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compname: "",
      title: "",
      complocation: "",
      start: "",
      end: "",
      work: "",
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
      .companyeditsave({ type: "save", data: this.state })
      .then(data => {
        console.log(data);
        swal("Saved Successfully");
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
      .companyeditsave({ type: "edit", email: email })
      .then(data => {
        console.log("edit" + data.data.studentfullname);
        this.setState({
          compname: data.data.company,
          title: data.data.title,
          complocation: data.data.startdate,
          start: data.data.enddate,
          end: data.data.enddate,
          work: data.data.workdescription,
          email: localStorage.getItem("email")
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
          Career Objective:
          <textarea
            name="work"
            rows="1"
            cols="100"
            className="form-control"
            value={this.state.work || ""}
            onChange={this.ontextChangeHandler}
          >
            Work
          </textarea>
          <br />
          Company Name:
          <input
            type="text"
            name="compname"
            placeholder="Company Name"
            //required
            className="form-control"
            value={this.state.compname || ""}
            onChange={this.ontextChangeHandler}
          />
          Start Date:
          <input
            type="date"
            name="start"
            className="form-control"
            value={this.state.start || ""}
            onChange={this.ontextChangeHandler}
          />
          End Date:
          <input
            type="date"
            name="end"
            className="form-control"
            value={this.state.end || ""}
            onChange={this.ontextChangeHandler}
          />
          City:
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Manager"
            value={this.state.title || ""}
            onChange={this.ontextChangeHandler}
          />
          State:
          <input
            type="text"
            name="complocation"
            className="form-control"
            placeholder="California"
            value={this.state.complocation || ""}
            onChange={this.ontextChangeHandler}
          />
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

export default connect(null, { companyeditsave })(EditCompanyDetails);
