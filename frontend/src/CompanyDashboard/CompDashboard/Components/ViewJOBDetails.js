import React from "react";
import { Link } from "react-router-dom";
import CompNavbar from "../../main/Pages/CompNavbar";
class ViewJOBDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.location.state.event,
      jobid: this.props.location.state.jobid,
      jobtitle: "",
      postingdate: "",
      applicationdeadline: "",
      location: "",
      salary: "",
      jobdescription: "",
      jobcategory: ""
    };
    console.log(this.state.events[0]);
  }

  startfunc() {
    var items = this.state.events.map(item => {
      if (item.jobid == this.state.jobid) {
        console.log(item.jobtitle);
        this.setState({
          jobtitle: item.jobtitle,
          postingdate: item.postingdate,
          applicationdeadline: item.applicationdeadline,
          location: item.location,
          salary: item.salary,
          jobdescription: item.jobdescription,
          jobcategory: item.jobcategory
        });
      }
    });
  }

  componentDidMount() {
    this.startfunc();
  }

  render() {
    return (
      <div>
        <CompNavbar />
        <Link className="Signinclick" to="../Pages/CompDashboard">
          Back
        </Link>
        <div className="container">
          <h2> {this.state.jobtitle}</h2>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-25">Job Description:</div>
            <div class="col-75">{this.state.jobdescription || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Job Posted On :</div>
            <div class="col-75">{this.state.postingdate || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Application Deadline :</div>
            <div class="col-75">{this.state.applicationdeadline || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Job Category :</div>
            <div class="col-75">{this.state.jobcategory || ""}</div>
          </div>

          <div class="row">
            <div class="col-25">Location :</div>
            <div class="col-75">{this.state.location || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Salary Offered:</div>
            <div class="col-75">{this.state.salary || ""}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJOBDetails;
