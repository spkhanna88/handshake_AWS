import React, { Component } from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { id: "" };
  }

  //handle logout to destroy the cookie
  handleLogout = () => {
    cookie.remove("cookie", { path: "/" });
    localStorage.removeItem("email");
    localStorage.removeItem("major");
    localStorage.removeItem("role");
  };

  render() {
    let navLogin = null;
    let redirectVar = null;
    let role = localStorage.getItem("role");
    if (cookie.load("cookie") && role === "student") {
      console.log("Able to read cookie");
      navLogin = (
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to="/" onClick={this.handleLogout}>
              <span class="glyphicon glyphicon-user"></span>Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      console.log("NOt Able to read cookie");
      redirectVar = <Redirect to="/" />;
    }

    return (
      <div class="background">
        <div class="topnav" id="topnavid">
          {redirectVar}
          <a
            className="profile"
            href="../../StudentProfiles/Pages/StudentProfile"
          >
            Profile
          </a>
          <a
            className="btn"
            href="../../StudentJobSearch/Pages/StudentJobSearch"
          >
            JobSearch
          </a>
          <a
            className="btn"
            href="../../StudentApplications/Pages/StudentApplications"
          >
            Applications
          </a>

          <a
            className="btn"
            href="../../StudentEvents/Pages/StudentViewAllEvents"
          >
            Events
          </a>

          <a
            className="btn"
            href="../../StudentViewOtherStudents/Pages/StudentsViewStudents"
          >
            Students
          </a>

          {navLogin}
        </div>
      </div>

      //return
    );
    //render
  }
  //class
}

export default Navbar;
