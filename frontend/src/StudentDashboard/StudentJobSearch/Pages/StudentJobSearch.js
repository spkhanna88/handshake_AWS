import React from "react";
import FilterResults from "react-filter-search";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../../Main/Pages/Navbar";
import "./StudentJobSearch.css";

class StudentJobSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      searchTerm: "",
      searchTermLocation: "",
      redirector: null,
      jobcategoryselected: ""
    };
    this.startfunc = this.startfunc.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.searchTermLocation = this.searchTermLocation.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.registerClickHandler = this.registerClickHandler.bind(this);
    this.onjobcategoryChangeHandler = this.onjobcategoryChangeHandler.bind(
      this
    );
  }

  searchTermLocation(e) {
    this.setState({ searchTermLocation: e.target.value });
  }
  searchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onjobcategoryChangeHandler(event) {
    this.setState({ jobcategoryselected: event.target.value });
  }

  startfunc() {
    Axios.get(`http://18.221.66.220:4001/studentviewalljobs`)
      // then((res) => res.json()).then((data) => {
      //   this.setState({users: data})
      // })}
      .then(data => {
        console.log(data.data);
        this.setState({ jobs: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    this.startfunc();
  }

  showDetails(job) {
    job.show = !job.show;
    this.setState({ ...job });
  }

  registerClickHandler(event) {
    event.preventDefault();
    var jobid = event.target.value;
    this.setState({
      redirector: (
        <Redirect
          to={{
            pathname:
              "/StudentDashboard/Main/StudentJobSearch/Components/StudentViewandRegister",
            state: { jobs: this.state.jobs, jobid: jobid }
          }}
        />
      )
    });
  }

  render() {
    return (
      <div>
        {this.state.redirector}
        <Navbar activate={"jobsearch"} />
        <div class="container">
          <h1> Jobs Posted </h1>
          <input
            placeholder="Search using JobTitle or Company Name"
            class="search-box"
            onKeyUp={e => this.searchTerm(e)}
            type="text"
          ></input>
          <b>Filter Search using Location:</b>
          <input
            class="search-box-location"
            onKeyUp={e => this.searchTermLocation(e)}
            type="text"
          ></input>
          <label for="jobcategoryselected">
            Filter search using Job Category:
          </label>
          <select
            id="jobcategoryselected"
            name="jobcategoryselected"
            onChange={this.onjobcategoryChangeHandler}
          >
            <option value="">All</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="internship">Internship</option>
            <option value="oncampus">On Campus</option>
          </select>
          <div className="h22">
            <ul className="collapse-able">
              {this.state.jobs
                .filter(job => {
                  return (
                    job.companyname
                      .toLowerCase()
                      .indexOf(this.state.searchTerm.toLowerCase()) > -1 ||
                    job.jobtitle
                      .toLowerCase()
                      .indexOf(this.state.searchTerm.toLowerCase()) > -1
                  );
                })
                .filter(job => {
                  return (
                    job.location
                      .toLowerCase()
                      .indexOf(this.state.searchTermLocation.toLowerCase()) > -1
                  );
                })
                .filter(job => {
                  return (
                    job.jobcategory
                      .toLowerCase()
                      .indexOf(this.state.jobcategoryselected) > -1
                  );
                })
                .map(job => {
                  return (
                    <li
                      className="liclass"
                      onClick={() => this.showDetails(job)}
                    >
                      <h3>{job.companyname}</h3>
                      <p>
                        <b>{job.jobtitle}</b>
                      </p>
                      {job.show ? (
                        <div>
                          <p> {job.jobcategory}</p>
                          <p> {job.location}</p>
                          <button
                            onClick={this.registerClickHandler}
                            value={job.jobid}
                          >
                            ViewDetails
                          </button>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  //class
}

export default StudentJobSearch;
