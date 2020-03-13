import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

class CompanyViewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      redirector: null,
      registeredstudents: "",
      jobtitle: "",
      postingdate: "",
      applicationdeadline: "",
      location: "",
      salary: "",
      jobdescription: "",
      jobcategory: ""
    };
    this.startfunc = this.startfunc.bind(this);
    this.onViewStudentsClickHandler = this.onViewStudentsClickHandler.bind(
      this
    );
    this.onDetailsClickHandler = this.onDetailsClickHandler.bind(this);
  }

  startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.post("http://18.221.66.220:4001/companyviewjobs", {
      companyemail: email
    })
      .then(data => {
        this.setState({
          events: data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.startfunc();
  }

  onViewStudentsClickHandler(event) {
    event.preventDefault();
    let jobid = event.target.name;
    console.log(jobid);
    Axios.post("http://18.221.66.220:4001/companyjobstudentviewer", {
      jobid: jobid
    })
      .then(data => {
        console.log(data);
        if (data.data.status === "nostudent") swal("No Student Registered");
        else {
          this.setState({
            redirector: (
              <Redirect
                to={{
                  pathname:
                    "/CompanyDashboard/CompDashboard/Components/ViewJOBRegisteredStudents",
                  state: { registeredstudents: data.data }
                }}
              />
            )
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDetailsClickHandler(event) {
    event.preventDefault();
    var jobid = event.target.name;
    console.log(this.state.events);
    this.setState({
      redirector: (
        <Redirect
          to={{
            pathname:
              "/CompanyDashboard/CompDashboard/Components/ViewJOBDetails",
            state: { event: this.state.events, jobid: jobid }
          }}
        />
      )
    });
  }

  render() {
    const items = this.state.events.map(item => (
      <li>
        <h3>{item.jobtitle}</h3>
        <h5>{item.jobcategory}</h5>
        <h4>
          on {item.postingdate} till {item.applicationdeadline}
        </h4>
        <button
          type="details"
          name={item.jobid}
          onClick={this.onDetailsClickHandler}
        >
          Details
        </button>
        {"     "}
        <button
          type="submit"
          name={item.jobid}
          onClick={this.onViewStudentsClickHandler}
        >
          See List of Students
        </button>
        <hr />
      </li>
    ));

    return (
      <div className="container">
        {this.state.redirector}

        {items}
      </div>
    );
  }
}

export default CompanyViewJobs;
