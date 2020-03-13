import React from "react";
//files
import CompNavbar from "../../main/Pages/CompNavbar";
import CompProfileForm from "../Components/CompProfileForm";
import ViewCompProfileForm from "../Components/ViewCompProfileForm";
import "../Components/CompProfileForm.css";

class CompProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorview: <ViewCompProfileForm /> };
    //this.editorviewrender = <ViewCompProfileForm />;
    this.onclickhandler = this.onclickhandler.bind(this);
  }
  onclickhandler(event) {
    //console.log(this.state);
    this.setState({ editorview: <CompProfileForm /> });
    document.getElementById("hide").style.display = "none";
    //this.forceUpdate();
  }
  render() {
    return (
      <div>
        <CompNavbar />
        <div className="container">
          {this.state.editorview}
          <div id="hide">
            <div class="row">
              <div class="button">
                <button onClick={this.onclickhandler}>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompProfile;
