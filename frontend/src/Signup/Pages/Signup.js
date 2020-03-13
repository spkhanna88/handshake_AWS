import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (cookie) {
      cookie.remove("cookie", { path: "/" });
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <Link
            to="./StudentSignup"
            className="btn btn-primary btn-lg btn-block"
          >
            <h2>Student Sign up</h2>
          </Link>
        </div>
        <span className="btn btn-primary btn-lg btn-block">
          <h2>{""}</h2>
        </span>
        <div>
          <Link
            to="./CompanySignup"
            className="btn btn-primary btn-lg btn-block"
          >
            <h2>Company Sign up</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
