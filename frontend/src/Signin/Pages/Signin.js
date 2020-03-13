import React, { Component } from "react";
import axios from "axios";
// import cookie from "react-cookies";
// import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import Signinform from "../Components/Signinform";

class Signin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <Signinform />
          </div>
          Dont't have an account? {"  "}
          <Link
            className="Signupclick"
            to="../../Signup/Pages/Signup"
            class="btn btn-primary"
          >
            Signup
          </Link>
        </div>
      </div>
      //return
    );

    //render
  }

  //class
}

export default Signin;
