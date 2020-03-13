import React from "react";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";

import CompNavbar from "../../main/Pages/CompNavbar";
import "../../../Landing/pages/Landing.css";
class ViewRegisteredStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredstudents: this.props.location.state.registeredstudents,
      redirector: null
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();
    document.getElementById("control").readOnly = true;
    console.log(event.target.value);
    Axios.post("http://127.0.0.1:4001/getStudentBasicDetail", {
      email: event.target.value
    })
      .then(data => {
        console.log(data.data);
        this.setState({
          redirector: (
            <Redirect
              to={{
                pathname:
                  "/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudentProfile",
                state: {
                  profile: data.data,
                  registeredstudents: this.state.registeredstudents,
                  page: "event"
                }
              }}
            />
          )
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //   componentDidMount() {
  //     console.log("hi");
  //   }
  render() {
    const items = this.state.registeredstudents.map(item => (
      <li>
        <h4>
          Profile :
          <input
            id="control"
            type="text"
            value={item.studentemail}
            onClick={this.onClickHandler}
          />
        </h4>
        <hr />
      </li>
    ));
    return (
      <div>
        <CompNavbar />
        {this.state.redirector}
        <div className="container">{items}</div>
        <div className="container">
          <Link className="Signinclick" to="../Pages/CompEvents">
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default ViewRegisteredStudents;
