import Axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
class ViewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   eventname: "",
      //   description: "",
      //   eventtime: "",
      //   eventdate: "",
      //   location: "",
      //   eligibility: ""
      events: [],
      redirector: null,
      registeredstudents: ""
    };

    this.startfunc = this.startfunc.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.post("http://127.0.0.1:4001/companyviewevent", {
      authemail: email
    })
      .then(data => {
        //console.log(data);
        this.setState({
          //   eventname: data.data.eventname,
          //   description: data.data.description,
          //   eventtime: data.data.eventtime,
          //   eventdate: data.data.eventdate,
          //   location: data.data.location,
          //   eligibility: data.data.eligibility
          events: data.data
        });
        console.log(this.state.events[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.startfunc();
  }

  onClickHandler(event) {
    event.preventDefault();
    let eventid = "Event" + event.target.name;
    console.log(eventid);
    Axios.post("http://127.0.0.1:4001/eventstudentviewer", {
      eventid: "Event" + event.target.name
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
                    "/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudents",
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

  render() {
    const items = this.state.events.map(item => (
      <li>
        <h2>{item.eventname}</h2>
        <h5>{item.description}</h5>
        <h4>
          on {item.eventdate} at {item.eventtime}
        </h4>
        <button type="submit" name={item.eventid} onClick={this.onClickHandler}>
          See List of Students
        </button>
        <hr />
      </li>
    ));
    return (
      <div>
        {this.state.redirector}
        <div className="container">{items}</div>
      </div>
    );
  }
}
export default ViewEventForm;
