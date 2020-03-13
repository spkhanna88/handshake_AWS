import React from "react";
import Axios from "axios";
import swal from "sweetalert";

import { Redirect } from "react-router";

class EditImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      filelocation: ""
    };
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
    this.saveImageHandler = this.saveImageHandler.bind(this);
  }

  startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.post("http://18.221.66.220:4001/getStudentBasicDetail", {
      email: email
    })
      .then(data => {
        this.setState({
          filelocation: "/images/students/" + data.data.filelocation
        });
      })
      .catch(err => {
        console.log("error");
      });
  }

  async uploadHandler(event) {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const data = new FormData();
    data.append("file", this.state.file);
    data.append(email, { email: email });
    await Axios.post(
      "http://18.221.66.220:4001/uploadstudentpicture",
      data
    ).then(data => {
      this.setState({ filelocation: data.data });
    });
  }

  saveImageHandler(event) {
    event.preventDefault();
    const email = localStorage.getItem("email");
    Axios.post("http://18.221.66.220:4001/savestudentpicture", {
      email: email,
      filelocation: this.state.filelocation
    }).then(data => {
      this.setState({ filelocation: data.data });
      swal("Image uploaded and Saved successfully");
    });
  }

  onFileChangeHandler(event) {
    this.setState({ file: event.target.files[0] });
  }

  componentWillMount() {
    this.startfunc();
  }

  render() {
    return (
      <div>
        <img
          src="/images/students/profilepicicon.png"
          alt="Profile Pic Not available"
          width="150"
          height="150"
        />
        <br />
        <br />
        <input type="file" name="file" onChange={this.onFileChangeHandler} />
        <br />
        <button onClick={this.uploadHandler}>Upload Image</button>
        <br />
        <button onClick={this.saveImageHandler}>Save Image</button>
      </div>
    );
  }
}

export default EditImage;
