import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import handshake2 from "../../Images/handshake.webp";
import handshakejob from "../../Images/handshake-job.jpg";
import handshake from "../../Images/handshake-logo-blue background.jpg";
import cookie from "react-cookies";

class Landing extends React.Component {
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
      <div>
        <div class="container">
          <span>Explore the possibilities:</span>
          <br />
          <span className="Studentsclick">Students</span>{" "}
          <span className="Employersclick"> Employers</span>
          <Link className="Startclick hs" to="./../Signin/Pages/Signin">
            <h3>Let's Get Started >>></h3>
          </Link>
        </div>
        <div class="container">
          <div align="center">
            <img src={handshake} alt="HandShake"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
