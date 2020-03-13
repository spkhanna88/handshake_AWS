import React from "react";
import classnames from "classnames";
import swal from "sweetalert";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";

class StudentSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentfullname: "",
      email: "",
      password: "",
      schoolname: "",
      errors: {},
      isLoading: false,
      redirector: null
    };
    this.studentNameChangeHandler = this.studentNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.schoolNameChangeHandler = this.schoolNameChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    //constructor
  }

  componentWillMount() {
    if (cookie) {
      cookie.remove("cookie", { path: "/" });
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    }
  }

  studentNameChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  emailChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  passwordChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  schoolNameChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    this.setState({ errors: {} });
    event.preventDefault();
    this.setState({ isLoading: true });
    this.props
      .studentSignupRequest(this.state)
      .then(data => {
        console.log(data);
        swal("Signup Successful").then(() => {
          this.setState({
            redirector: (
              <Redirect
                to={{
                  pathname: "/Signin/Pages/Signin"
                }}
              />
            )
          });
        });
      })
      .catch(error => {
        console.log(error.response.data);

        if (error.response.data === "User ID/EMAIL already exist")
          swal(error.response.data);

        this.setState({ errors: error.response.data, isLoading: false });
      });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        {this.state.redirector}
        <div className="form-group">
          <form onSubmit={this.submitHandler}>
            <div
              className={classnames("form-group", {
                "has-error": errors.studentfullname
              })}
            >
              Name:
              <input
                type="text"
                name="studentfullname"
                placeholder="John Smith"
                //required
                className="form-control"
                onChange={this.studentNameChangeHandler}
              />
              {errors.studentfullname && (
                <span className="help-block">{errors.studentfullname}</span>
              )}
            </div>

            <div
              className={classnames("form-group", {
                "has-error": errors.email
              })}
            >
              EMAIL:
              <input
                type="email"
                name="email"
                placeholder="john.smith@gmail.com"
                //required
                className="form-control"
                onChange={this.emailChangeHandler}
              />
              {errors.email && (
                <span className="help-block">{errors.email}</span>
              )}
            </div>

            <div
              className={classnames("form-group", {
                "has-error": errors.password
              })}
            >
              Password:
              <input
                type="password"
                name="password"
                placeholder="Password"
                //required
                className="form-control"
                onChange={this.passwordChangeHandler}
              />
              {errors.password && (
                <span className="help-block">{errors.password}</span>
              )}
            </div>

            <div
              className={classnames("form-group", {
                "has-error": errors.schoolname
              })}
            >
              SchoolName:
              <input
                type="text"
                name="schoolname"
                placeholder="schoolname"
                //required
                className="form-control"
                onChange={this.schoolNameChangeHandler}
              />
              {errors.schoolname && (
                <span className="help-block">{errors.schoolname}</span>
              )}
            </div>
            <br />
            <div>
              <button type="Submit" name="Submit">
                <b>Create Account</b>
              </button>
            </div>
          </form>
        </div>
      </div>
      //return
    );
    //render
  }
  //class
}

export default StudentSignupForm;
