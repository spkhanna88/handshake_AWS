import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

import "./StudentsViewStudentswithsearch.css";

//files

class StudentsViewStudentswithsearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchTerm: "",
      searchTermskillset: ""
    };

    this.startfunc = this.startfunc.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.viewDetailsClickHandler = this.viewDetailsClickHandler.bind(this);
  }

  searchTermskillset(e) {
    this.setState({ searchTermskillset: e.target.value });
  }

  searchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  async startfunc() {
    await Axios.get(`http://18.221.66.220:4001/viewallstudents`)
      .then(data => {
        this.setState({ students: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.startfunc();
  }

  showDetails(student) {
    student.show = !student.show;
    this.setState({ ...student });
  }

  viewDetailsClickHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
    Axios.post("http://18.221.66.220:4001/getStudentBasicDetail", {
      email: event.target.value
    })
      .then(data => {
        this.setState({
          redirector: (
            <Redirect
              to={{
                pathname:
                  "/StudentDashboard/Main/StudentViewOtherStudents/Components/StudentViewRegisteredStudentProfile",
                state: {
                  profile: data.data,
                  registeredstudents: this.state.students,
                  page: "studentstudent"
                }
              }}
            />
          )
        });
        console.log(this.state.redirector);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.redirector}
        <div class="container">
          <input
            placeholder="Search using StudentName /College Name"
            class="search-box"
            onKeyUp={e => this.searchTerm(e)}
            type="text"
          ></input>
          <h4 className="oratcenter">
            Filter using Major
            <input
              placeholder="Major"
              class="search-boxm"
              onKeyUp={e => this.searchTermskillset(e)}
              type="text"
            ></input>
          </h4>

          <div className="h22">
            <ul className="collapse-able">
              {this.state.students
                .filter(student => {
                  return (
                    student.studentfullname
                      .toLowerCase()
                      .indexOf(this.state.searchTerm.toLowerCase()) > -1 ||
                    student.schoolname
                      .toLowerCase()
                      .indexOf(this.state.searchTerm.toLowerCase()) > -1
                  );
                })
                .filter(student => {
                  var filter;
                  if (student.major === null) {
                    filter = "undefined";
                  } else {
                    filter = student.major;
                  }
                  return (
                    filter
                      .toLowerCase()
                      .indexOf(this.state.searchTermskillset.toLowerCase()) > -1
                  );
                })

                .map(student => {
                  return (
                    <li
                      className="liclass"
                      onClick={() => this.showDetails(student)}
                    >
                      <h3>{student.studentfullname}</h3>
                      <p>
                        <b>{student.schoolname}</b>
                      </p>
                      {student.show ? (
                        <div>
                          <p> {student.major}</p>
                          <p> {student.city}</p>
                          <button
                            onClick={this.viewDetailsClickHandler}
                            value={student.email}
                          >
                            ViewDetails
                          </button>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsViewStudentswithsearch;
