import React from "react";
import { Link } from "react-router-dom";

//files
import CompNavbar from "../../main/Pages/CompNavbar";
import CompanyViewJobs from "./CompanyViewJobs";

class CompDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompNavbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link className="Signinclick" to="../Components/CompanyAddJob">
                Add a Job
              </Link>
            </div>
            <div className="col-6">
              <span
                className="text-white-50 alert-info"
                align="center"
                style={{ fontSize: 30 }}
              >
                JObs Posted By You
              </span>
            </div>
          </div>
        </div>
        <CompanyViewJobs />
      </div>
    );
  }
}

export default CompDashboard;
