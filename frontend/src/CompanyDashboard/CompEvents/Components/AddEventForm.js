import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import CompNavbar from "../../main/Pages/CompNavbar";
import classnames from "classnames";

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventname: "",
      description: "",
      eventtime: "",
      eventdate: "",
      location: "",
      eligibility: "",
      authemail: "",
      redirector: null,
      errors: {}
    };
    //this.redirector="";
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onTextChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmitHandler(event) {
    event.preventDefault();
    this.setState({ errors: {} });
    let email = localStorage.getItem("email");
    await this.setState({ authemail: email });
    Axios.post("http://18.221.66.220:4001/addeventform", this.state)
      .then(data => {
        console.log("data");
        this.setState({
          redirector: "/CompanyDashboard/CompEvents/Pages/CompEvents"
        });
      })
      .catch(error => {
        console.log("error");
        this.setState({ errors: error.response.data });
      });
  }

  render() {
    const { errors } = this.state;
    if (this.state.redirector) return <Redirect to={this.state.redirector} />;
    return (
      <div>
        <CompNavbar />
        <div class="container">
          <form className="eventform">
            <div class="row">
              <div class="col-25">
                <label for="eventname">Event Name : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.eventname
                })}
              >
                <input
                  type="text"
                  name="eventname"
                  id="eventname"
                  placeholder="Graduation Job Fair 2020"
                  onChange={this.onTextChangeHandler}
                  required
                />
                {errors.eventname && (
                  <span className="help-block">{errors.eventname}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="description">Description : </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.description
                })}
              >
                <textarea
                  name="description"
                  rows="1"
                  cols="100"
                  placeholder="some details about the event"
                  onChange={this.onTextChangeHandler}
                ></textarea>
                {errors.description && (
                  <span className="help-block">{errors.description}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="eventdate">Date: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.eventdate
                })}
              >
                <input
                  type="date"
                  name="eventdate"
                  required
                  onChange={this.onTextChangeHandler}
                />
                {errors.eventdate && (
                  <span className="help-block">{errors.eventdate}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="eventtime">Time: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.eventtime
                })}
              >
                <input
                  type="text"
                  name="eventtime"
                  placeholder="02:00PM"
                  required
                  onChange={this.onTextChangeHandler}
                />
                {errors.eventtime && (
                  <span className="help-block">{errors.eventtime}</span>
                )}
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="location">Location: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.location
                })}
              >
                <input
                  type="text"
                  name="location"
                  placeholder="SanJoseStateUniversity - Student Union Ballroom"
                  required
                  onChange={this.onTextChangeHandler}
                />
                {errors.location && (
                  <span className="help-block">{errors.location}</span>
                )}
              </div>
            </div>
            {/*
            <div class="row">
              <div class="col-25">
                <label for="eligibility">Eligibility: </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="eligibility"
                  placeholder="ALL/SpecificMajor"
                  required
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>
*/}

            <div class="row">
              <div class="col-25">
                <label for="eligibility">Eligibility: </label>
              </div>
              <div
                className={classnames("form-group col-75", {
                  "has-error": errors.eligibility
                })}
              >
                <select name="eligibility" onChange={this.onTextChangeHandler}>
                  <option value="ALL">ALL</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                </select>
                {errors.eligibility && (
                  <span className="help-block">{errors.eligibility}</span>
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
            <Link className="cancel" to="../Pages/CompEvents">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEventForm;
