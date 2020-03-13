import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import swal from "sweetalert";

import Navbar from "../../Main/Pages/Navbar";
import "./StudentViewandRegister.css";
class StudentViewandRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.location.state.jobs,
      jobid: this.props.location.state.jobid,
      printjob: null,
      file: null,
      filelocation: "",
      studentname: ""
    };
    this.onRegisterClickHandler = this.onRegisterClickHandler.bind(this);
    this.onUploadHandler = this.onUploadHandler.bind(this);
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onFileChangeHandler(event) {
    this.setState({ file: event.target.files[0] });
  }

  onChangeHandler(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  async onUploadHandler(event) {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const data = new FormData();
    data.append("file", this.state.file);
    data.append(email, { email: email });
    await Axios.post("http://18.221.66.220:4001/studentuploadresume", data)
      .then(data => {
        this.setState({ filelocation: data.data });
      })
      .catch(err => {
        swal("", "Some Error Occured...Please try again!!!", "error");
      });
    document.getElementById("disabled").style.display = "block";
    document.getElementById("fullname").style.display = "block";
    document.getElementById("upload").textContent = "UPLOADED";
    document.getElementById("upload").disabled = true;
  }

  async onRegisterClickHandler(event) {
    event.preventDefault();
    let email = localStorage.getItem("email");
    await this.setState({ studentemail: email });
    Axios.post(
      "http://18.221.66.220:4001/studentregisterjobandresume",
      this.state
    )
      .then(data => {
        if (data.data.success === true) {
          document.getElementById("disabled").textContent = "Registered";
          swal("", "Registered Successfully", "success");
        } else {
          swal("", "Already Registered", "error");
        }
      })
      .catch(err => {
        console.log("error");
      });
  }

  render() {
    for (var i = 0; i < this.state.jobs.length; i++) {
      if (this.state.jobs[i].jobid == this.state.jobid) {
        var printjob = this.state.jobs[i];
        break;
      }
    }

    return (
      <div>
        <Navbar />
        <Link className="Signinclick" to="../Pages/StudentJobSearch">
          Back
        </Link>
        <div className="container">
          <div class="row">
            <div class="col-25">
              <h2>{printjob.companyname || ""}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <h3>{printjob.jobtitle || ""}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-25">Description :</div>
            <div class="col-75">{printjob.jobdescription || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Posted On :</div>
            <div class="col-75">{printjob.postingdate || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Last Date to apply :</div>
            <div class="col-75">{printjob.applicationdeadline || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Location :</div>
            <div class="col-75">{printjob.location || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">Salary :</div>
            <div class="col-75">{printjob.salary || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">JOB Category :</div>
            <div class="col-75">{printjob.jobcategory || ""}</div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="file">Resume : </label>
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
          <button
            id="upload"
            className="Signinclick"
            onClick={this.onUploadHandler}
          >
            UPLOAD RESUME
          </button>
          <br /> <br />
          <br />
          <input
            type="text"
            onChange={this.onChangeHandler}
            name="studentname"
            placeholder="Sign-Enter Full Name"
            id="fullname"
          />
          <br />
          <br />
          <button
            className="Signinclick"
            onClick={this.onRegisterClickHandler}
            id="disabled"
          >
            REGISTER
          </button>
        </div>
      </div>
    );
  }
}

export default StudentViewandRegister;
