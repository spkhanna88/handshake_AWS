import React from "react";
import classnames from "classnames";
import swal from "sweetalert";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";

class CompanySignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      email: "",
      password: "",
      location: "",
      errors: {},
      isLoading: false,
      toSignIn: false,
      redirector: null
    };

    this.companyNameChangeHandler = this.companyNameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.locationChangeHandler = this.locationChangeHandler.bind(this);
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

  companyNameChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  emailChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  passwordChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  locationChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    this.setState({ errors: {} });
    event.preventDefault();
    this.setState({ isLoading: true });
    this.props
      .companySignupRequest(this.state)
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
        <form onSubmit={this.submitHandler}>
          <div
            className={classnames("form-group", {
              "has-error": errors.companyname
            })}
          >
            Company Name:
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              //required
              className="form-control"
              //value={this.props.companynameState}
              onChange={this.companyNameChangeHandler}
            />
            {errors.companyname && (
              <span className="help-block">{errors.companyname}</span>
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
              placeholder="EMAIL ID"
              //required
              className="form-control"
              ///value={this.props.emailState}
              onChange={this.emailChangeHandler}
            />
            {errors.email && <span className="help-block">{errors.email}</span>}
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
              //value={this.props.passwordState}
              onChange={this.passwordChangeHandler}
            />
            {errors.password && (
              <span className="help-block">{errors.password}</span>
            )}
          </div>

          <div
            className={classnames("form-group", {
              "has-error": errors.location
            })}
          >
            Location:
            <input
              type="text"
              name="location"
              placeholder="Location"
              //required
              className="form-control"
              //value={this.props.locationState}
              onChange={this.locationChangeHandler}
            />
            {errors.location && (
              <span className="help-block">{errors.location}</span>
            )}
          </div>
          <br />
          <div className="form-group">
            <button
              disabled={this.state.isLoading}
              type="submit"
              name="Submit"
              className="btn btn-primary btn-lg"
            >
              <b>Create Account</b>
            </button>
          </div>
        </form>
      </div>
      //return
    );
    //render
  }
  //class
}

export default CompanySignupForm;
