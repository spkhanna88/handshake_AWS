import React from "react";
import "./CompNavbar.css";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class CompNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    cookie.remove("cookie", { path: "/" });
    localStorage.removeItem("email");
    localStorage.removeItem("role");
  };

  render() {
    let navLogin = null;
    let redirectVar = null;
    var role = localStorage.getItem("role");
    if (cookie.load("cookie") && role === "company") {
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
        <div class="topnav">
          {redirectVar}
          <a class="active" href="../../CompDashboard/Pages/CompDashboard">
            Dashboard
          </a>
          <a href="../../CompProfile/Pages/CompProfile">Profile</a>
          <a href="../../CompStudents/Pages/CompStudents">Students</a>
          <a href="../../CompEvents/Pages/CompEvents">Events</a>
          {navLogin}
        </div>
      </div>
    );
  }
}

export default CompNavbar;
