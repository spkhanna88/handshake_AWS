import React from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import { Redirect } from "react-router-dom";
import cookie from "react-cookies";

import SigninAction from "../../Actions/SigninAction";
import TextFieldGroup from "./TextFieldGroup";
import validateSigninInput from "./validateSigninInput";

class Signinform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      errors: {},
      isLoading: false,
      selectedOption: "company",
      authFlag: false,
      redirector: null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    //constructor
  }

  //Call the Will Mount to set the auth Flag to false
  componentWillMount() {
    this.setState({
      authFlag: false
    });
    if (cookie) {
      cookie.remove("cookie", { path: "/" });
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    }
  }

  isValid() {
    let { errors, isValid } = validateSigninInput(this.state);
    if (!isValid) {
      this.setState(({ errors } = validateSigninInput(this.state)));
    }
    return isValid;
  }

  onSubmit(event) {
    var headers = new Headers();
    event.preventDefault();
    if (this.isValid()) {
      axios.defaults.withCredentials = true;
      this.setState({ errors: {}, isLoading: true });
      this.props
        .SigninAction(this.state)
        .then(data => {
          this.setState({
            authFlag: true
          });
          localStorage.setItem("email", data.data.email);
          if (data.data.selectedOption === "student") {
            localStorage.setItem("role", "student");
            localStorage.setItem("major", data.data.major);
            swal("", "Sign-in Successful", "success").then(() => {
              this.setState({
                redirector: (
                  <Redirect
                    to={{
                      pathname:
                        "/StudentDashboard/Main/StudentJobSearch/Pages/StudentJobSearch"
                    }}
                  />
                )
              });
            });
          } else {
            swal("", "Sign-in Successful", "success").then(() => {
              localStorage.setItem("role", "company");
              this.setState({
                redirector: (
                  <Redirect
                    to={{
                      pathname:
                        "/CompanyDashboard/CompDashboard/Pages/CompDashboard"
                    }}
                  />
                )
              });
            });
          }
        })
        //then
        .catch(error => {
          if (error.response.data.problem === "password") {
            this.setState({
              authFlag: false
            });
            swal("Error", "Wrong Password!!!Try again", "error").then(() => {
              window.location = "/Signin/Pages/Signin";
            });
          } else if (error.response.data.problem === "username") {
            this.setState({
              authFlag: false
            });
            swal("Error", "Username is incorrect!!! Try again", "error").then(
              () => {
                window.location = "/Signin/Pages/Signin";
              }
            );
          } else {
            this.setState({
              authFlag: false
            });
            swal(
              "Error",
              "Some Error Occured.. Please try again",
              "error"
            ).then(() => {
              window.location = "/Signin/Pages/Signin";
            });
          }
        });
      //catch

      //if
    }
    //function
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    let redirectVar = null;

    let { errors, identifier, password, isLoading } = this.state;
    return (
      <div>
        {this.state.redirector}
        <form onSubmit={this.onSubmit} className="login">
          <h1 align="center"> Sign-In </h1>

          <TextFieldGroup
            field="identifier"
            label="Username/Email"
            value={identifier}
            error={errors.identifier}
            onChange={this.onChange}
          />

          <TextFieldGroup
            field="password"
            label="Password"
            value={password}
            error={errors.password}
            onChange={this.onChange}
            type="password"
          />

          <div className="form-group">
            <button
              disabled={this.state.isLoading}
              type="submit"
              name="Submit"
              className="btn btn-primary btn-lg"
            >
              <b>Login</b>
            </button>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="company"
              name="loginuser"
              value="company"
              className="form-check-input"
              checked={this.state.selectedOption === "company"}
              onChange={this.handleOptionChange}
            />
            <label for="company">Company Login</label>
            <input
              type="radio"
              id="student"
              name="loginuser"
              value="student"
              className="form-check-input"
              checked={this.state.selectedOption === "student"}
              onChange={this.handleOptionChange}
            />
            <label for="student">Student Login</label>
            <br />
          </div>
        </form>
      </div>
      //return
    );

    //render
  }

  //class
}

export default connect(null, { SigninAction })(Signinform);
