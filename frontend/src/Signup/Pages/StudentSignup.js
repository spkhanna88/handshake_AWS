import React, { Component } from "react";
import StudentSignupForm from "../Components/StudentSignupForm";
import { connect } from "react-redux";
import { studentSignupRequest } from "../../Actions/StudentSignupActions.js";
import cookie from "react-cookies";

class StudentSignup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     studentfullname: "",
  //     email: "",
  //     password: "",
  //     schoolname: ""
  //   };

  //   //constructor
  // }
  componentWillMount() {
    if (cookie) {
      cookie.remove("cookie", { path: "/" });
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    }
  }
  render() {
    const { studentSignupRequest } = this.props;
    return (
      <div className="row">
        <div>
          <StudentSignupForm studentSignupRequest={studentSignupRequest} />
        </div>
      </div>

      //return
    );
    //render
  }
}

export default connect(
  // state => {
  //   return {};
  // }
  null,
  { studentSignupRequest }
)(StudentSignup);
