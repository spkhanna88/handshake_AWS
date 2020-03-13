import React from "react";
//import StudentsViewStudentswithsearch from "../Components/StudentsViewStudentswithsearch";

//files
import Navbar from "../../Main/Pages/Navbar";
import StudentsViewStudentswithsearch from "../Components/StudentsViewStudentswithsearch";

class StudentsViewStudents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <StudentsViewStudentswithsearch />
      </div>
    );
  }
}

export default StudentsViewStudents;
