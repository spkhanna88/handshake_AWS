import React from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";
import CompNavbar from "../../main/Pages/CompNavbar";

class ViewJOBRegisteredStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredstudents: this.props.location.state.registeredstudents,
      redirector: null,
      applicationstatus: ""
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.viewResumeHandler = this.viewResumeHandler.bind(this);
    this.statusChangeHandler = this.statusChangeHandler.bind(this);
    this.onapplicationchangehandler = this.onapplicationchangehandler.bind(
      this
    );
  }

  statusChangeHandler(event) {
    event.preventDefault();
    Axios.post("http://18.221.66.220:4001/updatestudentapplicationstatus", {
      applicationstatus: this.state.applicationstatus,
      studentemail: event.target.name,
      jobid: event.target.value
    })
      .then(data => {
        console.log(data);
        document.getElementById(
          "newstatus"
        ).textContent = `Updated Status to : ${data.data.status}`;
      })
      .catch(err => console.log(err));
  }

  onapplicationchangehandler(event) {
    event.preventDefault();
    this.setState({ applicationstatus: event.target.value });
  }

  viewResumeHandler(event) {
    event.preventDefault();
    var resumepath = "/Resumes/" + event.target.name;
    this.setState({
      redirector: (
        <Redirect
          to={{
            pathname: "/CompanyDashboard/CompDashboard/Components/ViewResume",
            state: {
              registeredstudents: this.state.registeredstudents,
              resumepath: resumepath
            }
          }}
        />
      )
    });
  }

  onClickHandler(event) {
    event.preventDefault();
    document.getElementById("control").readOnly = true;
    Axios.post("http://18.221.66.220:4001/getStudentBasicDetail", {
      email: event.target.value
    })
      .then(data => {
        this.setState({
          redirector: (
            <Redirect
              to={{
                pathname:
                  "/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudentProfile",
                state: {
                  profile: data.data,
                  registeredstudents: this.state.registeredstudents,
                  page: "job"
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

  render() {
    const items = this.state.registeredstudents.map(item => (
      <li>
        <h3>{item.studentname}</h3>
        <h4>
          Profile :
          <input
            id="control"
            name="control"
            type="text"
            value={item.studentemail}
            onClick={this.onClickHandler}
          />
        </h4>
        <h5>Current Status : {item.applicationstatus}</h5>
        <h5 id="newstatus"></h5>
        <label for="applicationstatus">Update Status:</label>

        <select
          id="applicationstatus"
          onChange={this.onapplicationchangehandler}
        >
          <option value="">-</option>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="declined">Declined</option>
        </select>

        <button
          onClick={this.viewResumeHandler}
          name={item.resumes}
          value={item.jobid}
          className="Signinclick"
        >
          View Resume
        </button>
        <br />
        <br />
        <br />
        <button
          onClick={this.statusChangeHandler}
          name={item.studentemail}
          value={item.jobid}
          className="Signinclick"
        >
          Update Status
        </button>
        <br />
        <br />
        <hr />
      </li>
    ));
    return (
      <div>
        <CompNavbar />
        {this.state.redirector}

        <Link className="Signinclick" to="../Pages/CompDashboard">
          Back
        </Link>

        <div className="container">{items}</div>
        <div className="container"></div>
      </div>
    );
  }
}

export default ViewJOBRegisteredStudents;
