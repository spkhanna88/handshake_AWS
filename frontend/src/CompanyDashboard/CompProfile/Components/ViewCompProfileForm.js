import React, { Component } from "react";
import Axios from "axios";
import "./CompProfileForm.css";

class ViewCompProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      location: "",
      phoneno: "",
      emailcontact: "",
      fax: "",
      website: "",
      description: "",
      companytype: "",
      authemail: "",
      displayimage: ""
    };

    this.startfunc = this.startfunc.bind(this);
  }

  async startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.post("http://18.221.66.220:4001/viewCompProfile", { email: email })
      .then(data => {
        console.log(data);
        this.setState({
          companyname: data.data.companytype,
          location: data.data.location,
          phoneno: data.data.phoneno,
          emailcontact: data.data.emailcontact,
          fax: data.data.fax,
          website: data.data.website,
          description: data.data.description,
          companytype: data.data.companytype,
          displayimage: data.data.displayimage
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log("error");
      });
  }

  componentWillMount() {
    this.startfunc();
  }

  render() {
    return (
      <div>
        <img
          class="img-thumbnail"
          src={
            "/images/company/" +
            (this.state.displayimage || "profilepicicon.png")
          }
          alt="text"
          width="150"
          height="150"
        ></img>

        <div>
          <div class="row">
            <div class="col-25">Company Name :</div>
            <div class="col-75">{this.state.companyname || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Description :</div>
            <div class="col-75">{this.state.description || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Company Type :</div>
            <div class="col-75">{this.state.companytype || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Company Location :</div>
            <div class="col-75">{this.state.location || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Phone Number :</div>
            <div class="col-75">{this.state.phoneno || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">EMail Address :</div>
            <div class="col-75">{this.state.emailcontact || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Fax :</div>
            <div class="col-75">{this.state.fax || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Website :</div>
            <div class="col-75">{this.state.website || ""}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCompProfileForm;
