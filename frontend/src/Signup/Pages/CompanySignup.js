import React, { Component } from "react";
import CompanySignupForm from "../Components/CompanySignupForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import { companySignupRequest } from "../../Actions/CompanySignupActions.js";

class CompanySignup extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     companyname: "",
  //     email: "",
  //     password: "",
  //     location: ""
  //   };

  //   //constructor
  // }
  componentWillMount() {
    if (cookie) {
      cookie.remove("cookie", { path: "/" });
      localStorage.removeItem("email");
      localStorage.removeItem("role");
    }
  }
  render() {
    const { companySignupRequest } = this.props;
    return (
      <div className="row">
        <div>
          <CompanySignupForm companySignupRequest={companySignupRequest} />
        </div>
      </div>
      //return
    );
    //render
  }
}

// CompanySignup.propTypes = {
//   companySignupRequest: React.PropTypes.func.isRequired
// };

export default withRouter(
  connect(null, { companySignupRequest })(CompanySignup)
);
