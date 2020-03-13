import React from "react";
import Axios from "axios";
import swal from "sweetalert";

class StudentViewApplications extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], searchTerm: "" };

    this.startfunc = this.startfunc.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  async startfunc() {
    const email = localStorage.getItem("email");

    await Axios.post("http://18.221.66.220:4001/studentviewjobapplication", {
      email: email
    })
      .then(data => {
        if (data.data.status === "nostudent") {
          swal("", "No Jobs Applied");
        } else {
          this.setState({ jobs: data.data });
          console.log(this.state);
        }
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.startfunc();
  }

  searchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const items = this.state.jobs
      .filter(job => {
        var filter;
        if (job.applicationstatus === null || job.applicationstatus === "") {
          filter = "undefined";
        } else {
          filter = job.applicationstatus;
        }
        return (
          filter.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) > -1
        );
      })
      .map(item => (
        <li>
          <h2>{item.jobtitle}</h2>
          <h4>
            <b>Applied on : {item.postingdate}</b>
          </h4>
          <h4>Current Status : {item.applicationstatus}</h4>
          <button
            type="submit"
            id={item.jobid}
            name={item.jobid}
            onClick={this.onClickHandler}
          >
            Register
          </button>
          <hr />
        </li>
      ));
    return (
      <div>
        <div className="container">
          <label for="applicationstatus">
            Filter based on Application Status:
          </label>
          <select id="applicationstatus" onChange={e => this.searchTerm(e)}>
            <option value="">-</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="declined">Declined</option>
          </select>
        </div>
        <div className="container">{items}</div>
      </div>
    );
  }
}

export default StudentViewApplications;
