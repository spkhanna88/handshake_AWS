import React from "react";
import { Page } from "react-pdf";
import { Redirect } from "react-router-dom";
import { Document } from "react-pdf/dist/entry.webpack";

import CompNavbar from "../../main/Pages/CompNavbar";

class ViewResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirector: null,
      registeredstudents: this.props.location.state.registeredstudents,
      resumepath: this.props.location.state.resumepath,
      numPages: null,
      pageNumber: 1
    };
    console.log(this.state);
    this.backClickHandler = this.backClickHandler.bind(this);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  backClickHandler() {
    this.setState({
      redirector: (
        <Redirect
          to={{
            pathname:
              "/CompanyDashboard/CompDashboard/Components/ViewJOBRegisteredStudents",
            state: {
              registeredstudents: this.state.registeredstudents
            }
          }}
        />
      )
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const pageNumber = this.state.pageNumber;
    const numPages = this.state.numPages;
    return (
      <div>
        <CompNavbar />
        {this.state.redirector}
        <button className="Signinclick" onClick={this.backClickHandler}>
          Back
        </button>

        <br />
        <br />
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
        <p style={{ textAlign: "center" }}>
          Page {pageNumber} of {numPages}
        </p>
        <div className="container" style={{ width: 650 }}>
          <Document
            file={this.state.resumepath}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>
      </div>
    );
  }
}

export default ViewResume;
