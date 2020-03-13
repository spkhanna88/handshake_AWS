import React from "react";

//files
import Navbar from "../../Main/Pages/Navbar";
import StudentViewApplications from "../Components/StudentViewApplications";

class StudentApplications extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <StudentViewApplications />
      </div>
    );
  }
}

export default StudentApplications;
