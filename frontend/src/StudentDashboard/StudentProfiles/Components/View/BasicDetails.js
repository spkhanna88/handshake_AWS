import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import cookie from "react-cookies";
// //import { Redirect } from "react-router";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from "react-router-dom";

// import { connect } from "react-redux";

class BasicDetails extends React.Component {
  constructor(props) {
    super(props);
    this.myfunction = this.myfunction.bind(this);
  }

  myfunction = () => {
    console.log("data");
  };

  render() {
    return (
      <div>
        <h1>basic details</h1>
      </div>
    );
  }
  //class
}

export default BasicDetails;
