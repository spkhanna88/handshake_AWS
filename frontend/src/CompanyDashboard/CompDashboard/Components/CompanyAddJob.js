import React from "react";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";
import swal from "sweetalert";
import classnames from "classnames";
import CompNavbar from "../../main/Pages/CompNavbar";

class CompanyAddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobtitle: "",
      postingdate: "",
      applicationdeadline: "",
      location: "",
      salary: "",
      jobdescription: "",
      jobcategory: "",
      companyname: "",
      companyemail: "",
      redirector: null,
      errors: {}
    };
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTextChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmitHandler(event) {
    event.preventDefault();
    this.setState({ errors: {} });
    if (this.state.jobcategory === "")
      swal("", "Please Select Job Category", "error");
    else {
      let email = localStorage.getItem("email");
      await this.setState({ companyemail: email });
      Axios.post("http://18.221.66.220:4001/companyaddjob", this.state)
        .then(data => {
          console.log("data");
          swal("", "Job Added Successfully", "success");
          this.setState({
            redirector: "/CompanyDashboard/CompDashboard/Pages/CompDashboard"
          });
        })
        .catch(error => {
          console.log("error");
          this.setState({ errors: error.response.data });
        });
    }
  }

  render() {
    const { errors } = this.state;
    if (this.state.redirector) return <Redirect to={this.state.redirector} />;
    return (
      <div>
        <CompNavbar />
        <div class="container">
          <form>
            <div class="row">
              <div class="col-25">
                <label for="jobtitle">Job Title : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.jobtitle
                })}
              >
                <input
                  type="text"
                  id="jobtitle"
                  name="jobtitle"
                  placeholder="Senior Developer"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.jobtitle && (
                  <span className="help-block">{errors.jobtitle}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="postingdate">Posting Date: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.postingdate
                })}
              >
                <input
                  type="date"
                  name="postingdate"
                  placeholder="Select today's date"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.postingdate && (
                  <span className="help-block">{errors.postingdate}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="applicationdeadline">Application Deadline : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.applicationdeadline
                })}
              >
                <input
                  type="date"
                  name="applicationdeadline"
                  placeholder="02/02/2020"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.applicationdeadline && (
                  <span className="help-block">
                    {errors.applicationdeadline}
                  </span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="location">Location : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.location
                })}
              >
                <input
                  type="text"
                  name="location"
                  placeholder="SanJose"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.location && (
                  <span className="help-block">{errors.location}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="salary">Salary : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.salary
                })}
              >
                <input
                  type="text"
                  name="salary"
                  placeholder="120000USD"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.salary && (
                  <span className="help-block">{errors.salary}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="companyname">Company Name : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.companyname
                })}
              >
                <input
                  type="text"
                  name="companyname"
                  placeholder="Your company name"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.companyname && (
                  <span className="help-block">{errors.companyname}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="jobdescription">Job Description : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.jobdescription
                })}
              >
                <textarea
                  name="jobdescription"
                  rows="1"
                  cols="100"
                  placeholder="some details about the job"
                  onChange={this.onTextChangeHandler}
                ></textarea>
                {errors.jobdescription && (
                  <span className="help-block">{errors.jobdescription}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="jobcategory">Job Category: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.jobcategory
                })}
              >
                <select name="jobcategory" onChange={this.onTextChangeHandler}>
                  <option value="SELECT">SELECT</option>
                  <option value="Internship">Internship</option>
                  <option value="FullTime">Full Time</option>
                  <option value="PartTime">Part Time</option>
                  <option value="OnCampus">On Campus</option>
                </select>
                {errors.jobcategory && (
                  <span className="help-block">{errors.jobcategory}</span>
                )}
              </div>
            </div>

            <div class="row">
              <input
                type="submit"
                value="Submit"
                onClick={this.onSubmitHandler}
              />
            </div>
          </form>

          <div class="row">
            <Link className="cancel" to="../Pages/CompDashboard">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyAddJob;
