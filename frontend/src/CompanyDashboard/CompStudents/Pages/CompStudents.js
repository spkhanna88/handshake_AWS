import React from "react";
import ViewStudents from "../Components/ViewStudents";

//files
import CompNavbar from "../../main/Pages/CompNavbar";

class CompStudents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompNavbar />
        <ViewStudents />
      </div>
    );
  }
}

export default CompStudents;
