import React from "react";
import { Link } from "react-router-dom";
//files
import CompNavbar from "../../main/Pages/CompNavbar";
import "../../../Landing/pages/Landing.css";
import ViewEventForm from "../Components/ViewEventForm";
class CompEvents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompNavbar />
        <div className="container">
          <div>
            <Link className="Signinclick" to="../Components/AddEventForm">
              Add an Event
            </Link>
          </div>
        </div>
        <ViewEventForm />
      </div>
    );
  }
}

export default CompEvents;
