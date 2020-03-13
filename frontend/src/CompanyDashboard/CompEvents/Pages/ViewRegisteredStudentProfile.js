import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import CompNavbar from "../../main/Pages/CompNavbar";
class ViewRegisteredStudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.location.state.profile,
      page: this.props.location.state.page,
      redirector: null,
      registeredstudents: null
    };
    console.log(this.state);
    this.goBack = this.goBack.bind(this);
  }

  async goBack() {
    await this.setState({
      registeredstudents: this.props.location.state.registeredstudents
    });
    console.log(this.state.page);
    if (this.state.page === "event") {
      this.setState({
        redirector: (
          <Redirect
            to={{
              pathname:
                "/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudents",
              state: {
                registeredstudents: this.props.location.state.registeredstudents
              }
            }}
          />
        )
      });
    } else if (this.state.page === "job") {
      this.setState({
        redirector: (
          <Redirect
            to={{
              pathname:
                "/CompanyDashboard/CompDashboard/Components/ViewJOBRegisteredStudents",
              state: {
                registeredstudents: this.props.location.state.registeredstudents
              }
            }}
          />
        )
      });
    } else if (this.state.page === "companystudent") {
      this.setState({
        redirector: (
          <Redirect
            to={{
              pathname: "/CompanyDashboard/CompStudents/Pages/CompStudents",
              state: {
                registeredstudents: this.props.location.state.registeredstudents
              }
            }}
          />
        )
      });
    } else if (this.state.page === "studentstudent") {
      this.setState({
        redirector: (
          <Redirect
            to={{
              pathname:
                "/StudentDashboard/Main/StudentViewOtherStudents/Pages/StudentsViewStudents",
              state: {
                registeredstudents: this.props.location.state.registeredstudents
              }
            }}
          />
        )
      });
    }
  }
  render() {
    return (
      <div>
        <CompNavbar />
        {this.state.redirector}
        <div>
          <button className="Signinclick" onClick={this.goBack}>
            Go Back
          </button>
        </div>
        <div className="container">
          <h2> {this.state.profile.studentfullname}</h2>
        </div>
        <div className="container">
          <h2>BasicDetails</h2>
          <div class="row">
            <div class="col-25">Objective :</div>
            <div class="col-75">{this.state.profile.message || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Date of Birth :</div>
            <div class="col-75">{this.state.profile.dob || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">City :</div>
            <div class="col-75">{this.state.profile.city || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">State :</div>
            <div class="col-75">{this.state.profile.state || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Country :</div>
            <div class="col-75">{this.state.profile.country || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Skillset :</div>
            <div class="col-75">{this.state.profile.skillset || ""}</div>
          </div>
        </div>
        <div className="container">
          <h2> Contact Details</h2>
          <div class="row">
            <div class="col-25">EMail :</div>
            <div class="col-75">{this.state.profile.email || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Phone :</div>
            <div class="col-75">{this.state.profile.phone || ""}</div>
          </div>
        </div>
        <div className="container">
          <h2> Education Details</h2>
          <div class="row">
            <div class="col-25">College Name :</div>
            <div class="col-75">{this.state.profile.schoolname || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">College Location:</div>
            <div class="col-75">{this.state.profile.clglocation || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Degree:</div>
            <div class="col-75">{this.state.profile.degree || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Major:</div>
            <div class="col-75">{this.state.profile.major || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">YearOfPassing:</div>
            <div class="col-75">{this.state.profile.yearofpassing || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">CGPA:</div>
            <div class="col-75">{this.state.profile.cgpa || ""}</div>
          </div>
        </div>
        <div className="container">
          <h2>Experience Details</h2>
          <div class="row">
            <div class="col-25">Company Name:</div>
            <div class="col-75">{this.state.profile.company || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Job Title:</div>
            <div class="col-75">{this.state.profile.title || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Company Location:</div>
            <div class="col-75">{this.state.profile.complocation || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Start Date:</div>
            <div class="col-75">{this.state.profile.startdate || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">End Date:</div>
            <div class="col-75">{this.state.profile.enddate || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Work Description:</div>
            <div class="col-75">{this.state.profile.workdescription || ""}</div>
          </div>
        </div>
        <div>
          <button className="Signinclick" onClick={this.goBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default ViewRegisteredStudentProfile;
