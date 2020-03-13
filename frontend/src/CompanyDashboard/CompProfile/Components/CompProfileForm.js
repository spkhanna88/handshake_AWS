import React from "react";
import Axios from "axios";
import "./CompProfileForm.css";
import { Redirect } from "react-router";

class compProfileForm extends React.Component {
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
      file: null,
      filelocation: ""
    };

    //this.editorsave = this.editorsave.bind(this);
    this.editorsave = "http://18.221.66.220:4001/saveCompProfile";

    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }

  onTextChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmitHandler(event) {
    event.preventDefault();
    let email = localStorage.getItem("email");
    await this.setState({ authemail: email });
    Axios.post(this.editorsave, this.state)
      .then(data => {
        console.log("data");
        window.location.href =
          "/CompanyDashboard/CompProfile/Pages/CompProfile";
      })
      .catch(err => {
        console.log("error");
      });
  }

  startfunc() {
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
          filelocation: data.data.filelocation
        });
      })
      .catch(err => {
        console.log("error");
      });
  }

  onFileChangeHandler(event) {
    console.log(event.target.files[0]);
    this.setState({ file: event.target.files[0] });
  }

  async uploadHandler(event) {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const data = new FormData();
    data.append("file", this.state.file);
    data.append(email, { email: email });
    console.log(data);
    await Axios.post(
      "http://18.221.66.220:4001/uploadCompanyPicture",
      data
    ).then(data => {
      console.log(data.data);
      this.setState({ filelocation: data.data });
    });
  }

  componentWillMount() {
    this.startfunc();
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <div class="row">
              <div class="col-25">
                <label for="companyname">Company Name : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="companyname"
                  value={this.state.companyname || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="description">Description : </label>
              </div>
              <div class="col-75">
                <textarea
                  name="description"
                  rows="1"
                  cols="100"
                  value={this.state.description || ""}
                  onChange={this.onTextChangeHandler}
                ></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="companytype">Company Type : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="companytype"
                  value={this.state.companytype || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="location">Location : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="location"
                  value={this.state.location || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="phoneno">Phone Number : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="phoneno"
                  value={this.state.phoneno || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="emailcontact">E-Mail : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="emailcontact"
                  value={this.state.emailcontact || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="fax">Fax Number : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="fax"
                  value={this.state.fax || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="website">Website : </label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="website"
                  value={this.state.website || ""}
                  onChange={this.onTextChangeHandler}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="file">Profile Picture : </label>
              </div>
              <div class="col-75">
                <input
                  type="file"
                  name="file"
                  //value={this.state.file || ""}
                  onChange={this.onFileChangeHandler}
                />
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
            <input type="submit" value="Upload" onClick={this.uploadHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default compProfileForm;
