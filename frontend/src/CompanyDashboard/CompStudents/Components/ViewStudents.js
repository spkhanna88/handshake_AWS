import React from "react";
import FilterResults from "react-filter-search";
import Axios from "axios";
import { Redirect } from "react-router-dom";

import "./viewstudents.css";

//files

class ViewStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      searchTerm: "nostudent",
      searchTermskillset: "nostudent",
      redirector: null,
      registeredstudents: null
    };

    this.startfunc = this.startfunc.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
    this.showDetails = this.showDetails.bind(this);
    this.viewDetailsClickHandler = this.viewDetailsClickHandler.bind(this);
  }

  searchTermskillset(e) {
    if (e.target.value === "")
      this.setState({ searchTermskillset: "nostudent" });
    else this.setState({ searchTermskillset: e.target.value });
  }

  searchTerm(e) {
    if (e.target.value === "") this.setState({ searchTerm: "nostudent" });
    else this.setState({ searchTerm: e.target.value });
  }

  async startfunc() {
    await Axios.get(`http://18.221.66.220:4001/viewallstudents`)
      .then(data => {
        console.log(data.data);
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
                  "/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudentProfile",
                state: {
                  profile: data.data,
                  registeredstudents: this.state.students,
                  page: "companystudent"
                }
              }}
            />
          )
        });
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
          <h4 className="oratcenter">OR </h4>
          <input
            placeholder="Search using SkillSet"
            class="search-box"
            onKeyUp={e => this.searchTermskillset(e)}
            type="text"
          ></input>

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
                          <p> {student.skillset}</p>
                          <p> {student.location}</p>
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

            {/***************************************For SkillSet ********************************/}

            {
              <ul className="collapse-able">
                {this.state.students
                  .filter(student => {
                    if (student.skillset != null) {
                      return (
                        student.skillset
                          .toLowerCase()
                          .indexOf(
                            this.state.searchTermskillset.toLowerCase()
                          ) > -1
                      );
                    } else return 0;
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
                            <p> {student.skillset}</p>
                            <p> {student.location}</p>
                            <button
                              onClick={this.registerClickHandler}
                              value="12"
                            >
                              ViewDetails
                            </button>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
              </ul>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudents;
