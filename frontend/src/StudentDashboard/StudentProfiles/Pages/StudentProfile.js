import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import cookie from "react-cookies";
// //import { Redirect } from "react-router";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from "react-router-dom";
//files
import "./StudentProfile.css";
import Navbar from "../../Main/Pages/Navbar";
//import BasicDetails from "../Components/View/BasicDetails";
import { connect } from "react-redux";

import viewProfileAction from "../../../Actions/viewProfileAction";
class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //onclick
      Bmessage: "",
      Bname: "",
      Bdob: "",
      Bcity: "",
      Bstate: "",
      Bcountry: "",
      Bemailid: "",
      Bphoneno: "",
      Bskillset: "",
      Bcollegename: "",
      Blocation: "",
      Bmajor: "",
      Bdegree: "",
      Byearofpassing: "",
      BCGPA: "",
      Bcompname: "",
      Btitle: "",
      Bcomplocation: "",
      Bstart: "",
      Bend: "",
      Bwork: "",

      //fromserver
      message: "",
      name: "",
      dob: "",
      city: "",
      state: "",
      country: "",
      emailid: "",
      phoneno: "",
      skillset: "",
      collegename: "",
      location: "",
      major: "",
      degree: "",
      yearofpassing: "",
      CGPA: "",
      compname: "",
      title: "",
      complocation: "",
      start: "",
      end: "",
      work: "",
      filelocation: ""
    };
    this.initialState = this.state;
    this.editProfileClickHandler = this.editProfileClickHandler.bind(this);
    this.BasicDetailsHandler = this.BasicDetailsHandler.bind(this);
    this.EduDetailsHandler = this.EduDetailsHandler.bind(this);
    this.compDetailHandler = this.compDetailHandler.bind(this);
    this.startfunc = this.startfunc.bind(this);
  }

  editProfileClickHandler(event) {
    event.preventDefault();
    window.location = "./EditStudentProfile";
  }
  startfunc() {
    let email = localStorage.getItem("email");
    this.props
      .viewProfileAction({ email: email })
      .then(data => {
        //console.log("edit" + data.data.studentfullname);
        this.setState(this.initialState);
        //console.log("IS" + this.initialState);
        this.setState({
          message: data.data.message,
          name: data.data.studentfullname,
          dob: data.data.dob,
          city: data.data.city,
          state: data.data.state,
          country: data.data.country,
          email: email,
          phoneno: data.data.phone,
          skill: data.data.skillset,
          filelocation: data.data.filelocation,
          Bmessage: "Objective : ",
          Bname: "Full Name : ",
          Bdob: "DateofBirth : ",
          Bcity: "City : ",
          Bstate: "State : ",
          Bcountry: "Country : ",
          Bemail: "Email:",
          Bphoneno: "Phone No : ",
          Bskill: "Skill-Set : "
        });
      })

      .catch(err => console.log(err));
  }
  BasicDetailsHandler(event) {
    event.preventDefault();
    this.startfunc();
  }

  EduDetailsHandler(event) {
    event.preventDefault();
    let email = localStorage.getItem("email");
    this.props
      .viewProfileAction({ email: email })
      .then(data => {
        this.setState(this.initialState);
        this.setState({
          collegename: data.data.schoolname,
          location: data.data.clglocation,
          degree: data.data.degree,
          major: data.data.major,
          yearofpassing: data.data.yearofpassing,
          CGPA: data.data.cgpa,
          Bcollegename: "School Name : ",
          Blocation: "College LOcation : ",
          Bdegree: "Degree : ",
          Bmajor: "Major :",
          Byearofpassing: "Year Of Passing : ",
          BCGPA: "CGPA : ",
          filelocation: data.data.filelocation
        });
      })

      .catch(err => console.log(err));
  }

  compDetailHandler(event) {
    event.preventDefault();
    this.setState(this.initialState);
    let email = localStorage.getItem("email");
    this.props
      .viewProfileAction({ email: email })
      .then(data => {
        this.setState({
          compname: data.data.company,
          title: data.data.title,
          complocation: data.data.startdate,
          start: data.data.enddate,
          end: data.data.enddate,
          work: data.data.workdescription,
          Bcompname: "Company Name : ",
          Btitle: "Job Titile : ",
          Bcomplocation: "Company Location : ",
          Bstart: "Start Date : ",
          Bend: "End Date : ",
          Bwork: "Work Description : ",
          filelocation: data.data.filelocation
        });
      })

      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.startfunc();
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />

        <div className="row">
          <div className="col-sm-2" align="center">
            <br />

            <img
              class="img-thumbnail"
              style={{ backgroundColor: "#ced9fd", backgroundSize: "300px" }}
              src={`/images/students/${this.state.filelocation}`}
              alt="Profile Pic Not available"
              width="150"
              height="150"
            />
          </div>
          <div className="col-sm-4">
            <div className="container">
              <ul className="nav nav-tabs" role="tablist">
                <li onClick={this.BasicDetailsHandler}>
                  <a class="btn btn-primary btn-sm" href="#">
                    BasicDetails
                  </a>
                </li>
                <li>
                  <a
                    class="btn btn-primary btn-sm"
                    href="#"
                    onClick={this.EduDetailsHandler}
                  >
                    Education Details
                  </a>
                </li>
                <li>
                  <a
                    class="btn btn-primary btn-sm"
                    href="#"
                    onClick={this.compDetailHandler}
                  >
                    Experience Details
                  </a>
                </li>
              </ul>

              <br />
              <div className=".container">
                <tr>
                  <td>
                    <b>{this.state.Bmessage}</b>
                  </td>
                  <td>{this.state.message}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bname}</b>
                  </td>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bdob}</b>
                  </td>
                  <td>{this.state.dob}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bcity}</b>
                  </td>
                  <td>{this.state.city}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bstate}</b>
                  </td>
                  <td>{this.state.state}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bcountry}</b>
                  </td>
                  <td>{this.state.country}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bemail}</b>
                  </td>
                  <td>{this.state.email}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bphoneno}</b>
                  </td>
                  <td>{this.state.phoneno}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bskill}</b>
                  </td>
                  <td>{this.state.skill}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bcompname}</b>
                  </td>
                  <td>{this.state.compname}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Btitle}</b>
                  </td>
                  <td>{this.state.title}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Bcomplocation}</b>
                  </td>
                  <td>{this.state.complocation}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bstart}</b>
                  </td>
                  <td>{this.state.start}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bend}</b>
                  </td>
                  <td>{this.state.end}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bcollegename}</b>
                  </td>
                  <td>{this.state.collegename}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Blocation}</b>
                  </td>
                  <td>{this.state.location}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bmajor}</b>
                  </td>
                  <td>{this.state.major}</td>
                </tr>

                <tr>
                  <td>
                    <b>{this.state.Bdegree}</b>
                  </td>
                  <td>{this.state.degree}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.Byearofpassing}</b>
                  </td>
                  <td>{this.state.yearofpassing}</td>
                </tr>
                <tr>
                  <td>
                    <b>{this.state.BCGPA}</b>
                  </td>
                  <td>{this.state.CGPA}</td>
                </tr>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.editProfileClickHandler}
                style={{ float: "right" }}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { viewProfileAction })(StudentProfile);
