import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Main/Pages/Navbar";

class StudentViewRegisteredEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.startfunc = this.startfunc.bind(this);
  }

  startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.post("http://18.221.66.220:4001/studentviewregevent", {
      email: email
    })
      .then(data => {
        const student = data.data[0];
        var objectlength = Object.keys(student).length;

        for (var i = 0; i < objectlength; i++) {
          if (Object.values(student)[i] === "Yes") {
            var EVENTid = Object.keys(student)[i];
            var eventid = EVENTid.replace(/\D/g, "");
            console.log(eventid);
            Axios.post("http://18.221.66.220:4001/studentviewregeventUSINGID", {
              eventid: eventid
            })
              .then(data => {
                console.log(data.data);
                this.setState({ events: [...this.state.events, data.data] });
              })
              .catch(err => {});
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.startfunc();
  }

  render() {
    const items = this.state.events.map(item => (
      <li>
        <h2>{item.eventname}</h2>
        <h5>{item.description}</h5>
        <h4>
          on {item.eventdate} at {item.eventtime}
        </h4>

        <hr />
      </li>
    ));
    return (
      <div>
        <Navbar />
        <Link to="./StudentViewAllEvents" className="Signinclick">
          {" "}
          Back to Events
        </Link>
        <div className="container">{items}</div>
        <Link to="./StudentViewAllEvents" className="Signinclick">
          {" "}
          Back to Events
        </Link>
      </div>
    );
  }
}

export default StudentViewRegisteredEvents;
