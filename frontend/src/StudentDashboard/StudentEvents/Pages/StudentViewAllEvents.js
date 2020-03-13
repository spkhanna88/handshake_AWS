// import React from "react";
// import Axios from "axios";
// import Popup from "reactjs-popup";
// import Swal from "sweetalert";
// import { Link } from "react-router-dom";
// import Navbar from "../../Main/Pages/Navbar";

// class StudentViewAllEvents extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       events: [],
//       major: ""
//     };
//     this.startfunc = this.startfunc.bind(this);
//     this.onClickHandler = this.onClickHandler.bind(this);
//   }

//   startfunc() {
//     //event.preventDefault();
//     let email = localStorage.getItem("email");
//     Axios.get("http://18.221.66.220:4001/studentviewevent")
//       .then(data => {
//         //console.log(data);
//         this.setState({
//           //   eventname: data.data.eventname,
//           //   description: data.data.description,
//           //   eventtime: data.data.eventtime,
//           //   eventdate: data.data.eventdate,
//           //   location: data.data.location,
//           //   eligibility: data.data.eligibility
//           events: data.data
//         });
//         console.log(this.state.events);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   componentDidMount() {
//     this.startfunc();
//   }

//   onClickHandler(event) {
//     event.preventDefault();
//     var email = localStorage.getItem("email");
//     var eventid = "Event" + event.target.name;
//     var id = event.target.name;
//     var companymajor = event.target.value;
//     Axios.post("http://18.221.66.220:4001/registerevent", {
//       studentemail: email,
//       eventid: eventid
//     })
//       .then(data => {
//         // console.log(companymajor);
//         // console.log(data.data.success);
//         // console.log(data.data.major);
//         // console.log(this.state.events);
//         if (companymajor === data.data.major || companymajor == "ALL") {
//           if (data.data.success === true) {
//             Swal("", "Registered Successfully", "success");
//             document.getElementById(id).innerHTML = "Registered";
//             document.getElementById(id).disabled = true;
//           }
//         } else
//           Swal("", "Sorry!!! You are not eligible for this event", "error");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     const items = this.state.events.map(item => (
//       <li>
//         <h2>{item.eventname}</h2>
//         <h4>
//           <b>{item.eventdate}</b> at <b>{item.eventtime}</b>
//         </h4>
//         <h4>Location : {item.location}</h4>
//         <h3>
//           Eligibility : <b>{item.eligibility}</b>
//         </h3>
//         <Popup
//           trigger={<button type="submit">View Details</button>}
//           position="right center"
//         >
//           <h2>Description</h2> {item.description}
//         </Popup>
//         <button
//           type="submit"
//           id={item.eventid}
//           name={item.eventid}
//           value={item.eligibility}
//           onClick={this.onClickHandler}
//         >
//           Register
//         </button>
//         <hr />
//       </li>
//     ));
//     return (
//       <div>
//         <Navbar />
//         <div className="container">
//           <Link to="./StudentViewRegisteredEvents" className="Signinclick">
//             {" "}
//             View Registered Events
//           </Link>
//         </div>
//         <div className="container">{items}</div>
//       </div>
//     );
//   }
// }

// export default StudentViewAllEvents;

import React from "react";
import Axios from "axios";
import Popup from "reactjs-popup";
import Swal from "sweetalert";
import { Link } from "react-router-dom";
import Navbar from "../../Main/Pages/Navbar";

class StudentViewAllEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      major: "",
      searchTerm: ""
    };
    this.startfunc = this.startfunc.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  searchTerm(e) {
    this.setState({ searchTerm: e.target.value });
  }

  startfunc() {
    //event.preventDefault();
    let email = localStorage.getItem("email");
    Axios.get("http://18.221.66.220:4001/studentviewevent")
      .then(data => {
        //console.log(data);
        this.setState({
          events: data.data
        });
        console.log(this.state.events);
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.startfunc();
  }

  onClickHandler(event) {
    event.preventDefault();
    var email = localStorage.getItem("email");
    var eventid = "Event" + event.target.name;
    var id = event.target.name;
    var companymajor = event.target.value;
    Axios.post("http://18.221.66.220:4001/registerevent", {
      studentemail: email,
      eventid: eventid
    })
      .then(data => {
        // console.log(companymajor);
        // console.log(data.data.success);
        // console.log(data.data.major);
        // console.log(this.state.events);
        if (companymajor === data.data.major || companymajor == "ALL") {
          if (data.data.success === true) {
            Swal("", "Registered Successfully", "success");
            document.getElementById(id).innerHTML = "Registered";
            document.getElementById(id).disabled = true;
          }
        } else
          Swal(
            "",
            "Sorry!!! You are not eligible for this event. Please make sure you have updated your major in your profile",
            "error"
          );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const items = this.state.events
      .filter(event => {
        return (
          event.eventname
            .toLowerCase()
            .indexOf(this.state.searchTerm.toLowerCase()) > -1
        );
      })
      .map(item => (
        <li>
          <h2>{item.eventname}</h2>
          <h4>
            <b>{item.eventdate}</b> at <b>{item.eventtime}</b>
          </h4>
          <h4>Location : {item.location}</h4>
          <h3>
            Eligibility : <b>{item.eligibility}</b>
          </h3>
          <Popup
            trigger={<button type="submit">View Details</button>}
            position="right center"
          >
            <h2>Description</h2> {item.description}
          </Popup>
          <button
            type="submit"
            id={item.eventid}
            name={item.eventid}
            value={item.eligibility}
            onClick={this.onClickHandler}
          >
            Register
          </button>
          <hr />
        </li>
      ));
    return (
      <div>
        <Navbar />
        <div className="container">
          <Link to="./StudentViewRegisteredEvents" className="Signinclick">
            {" "}
            View Registered Events
          </Link>
          <input
            placeholder="Search using StudentName /College Name"
            class="search-box"
            onKeyUp={e => this.searchTerm(e)}
            type="text"
          ></input>
        </div>
        <div className="container">{items}</div>
      </div>
    );
  }
}

export default StudentViewAllEvents;
