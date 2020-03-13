import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

//File Imports
import Landing from "./Landing/pages/Landing";
import Signin from "./Signin/Pages/Signin";
//import Signinform from "./Signin/Components/Signinform";
import Signup from "./Signup/Pages/Signup";
import StudentSignup from "./Signup/Pages/StudentSignup";
import CompanySignup from "./Signup/Pages/CompanySignup";

//Student
import Navbar from "./StudentDashboard/Main/Pages/Navbar";
import StudentProfile from "./StudentDashboard/StudentProfiles/Pages/StudentProfile";
import EditStudentProfile from "./StudentDashboard/StudentProfiles/Pages/EditStudentProfile";
//Events
import StudentViewAllEvents from "./StudentDashboard/StudentEvents/Pages/StudentViewAllEvents";
import StudentViewRegisteredEvents from "./StudentDashboard/StudentEvents/Pages/StudentViewRegisteredEvents";
//JobSearch
import StudentJobSearch from "./StudentDashboard/StudentJobSearch/Pages/StudentJobSearch";
import StudentViewandRegister from "./StudentDashboard/StudentJobSearch/Components/StudentViewandRegister";
//Student_Students
import StudentsViewStudents from "./StudentDashboard/StudentViewOtherStudents/Pages/StudentsViewStudents";
//Student_applications
import StudentApplications from "./StudentDashboard/StudentApplications/Pages/StudentApplications";
//Company
import CompNavbar from "./CompanyDashboard/main/Pages/CompNavbar";
//Profile
import CompProfile from "./CompanyDashboard/CompProfile/Pages/CompProfile";
//Events
import CompEvents from "./CompanyDashboard/CompEvents/Pages/CompEvents";
import AddEventForm from "./CompanyDashboard/CompEvents/Components/AddEventForm";
import ViewRegisteredStudents from "./CompanyDashboard/CompEvents/Pages/ViewRegisteredStudents";
import ViewRegisteredStudentProfile from "./CompanyDashboard/CompEvents/Pages/ViewRegisteredStudentProfile";
//Dashboard
import CompDashboard from "./CompanyDashboard/CompDashboard/Pages/CompDashboard";
import CompanyViewJobs from "./CompanyDashboard/CompDashboard/Pages/CompanyViewJobs";
import CompanyAddJob from "./CompanyDashboard/CompDashboard/Components/CompanyAddJob";
import ViewJOBRegisteredStudents from "./CompanyDashboard/CompDashboard/Components/ViewJOBRegisteredStudents";
import ViewJOBDetails from "./CompanyDashboard/CompDashboard/Components/ViewJOBDetails";
import ViewResume from "./CompanyDashboard/CompDashboard/Components/ViewResume";
//Students
import CompStudents from "./CompanyDashboard/CompStudents/Pages/CompStudents";
import StudentViewRegisteredStudentProfile from "./StudentDashboard/StudentViewOtherStudents/Components/StudentViewRegisteredStudentProfile";

//import StudentViewAllEvents from "./StudentDashboard/Student Events/Pages/StudentViewAllEvents";
//CSS file
import "./App.css";
//import StudentApplications from "./StudentDashboard/StudentApplications/Pages/StudentApplications";

function App() {
  return (
    <Router>
      <Switch>
        {/*---------------------------------------  Home Page ------------------------------------*/}

        <Route path="/" exact>
          <Landing />
        </Route>

        {/*---------------------------------------  Login ------------------------------------*/}
        <Route path="/Signin/Pages/Signin" exact>
          <Signin />
        </Route>

        {/*---------------------------------------  Signup ------------------------------------*/}
        <Route path="/Signup/Pages/Signup" exact>
          <Signup />
        </Route>

        <Route path="/Signup/Pages/StudentSignup" exact>
          <StudentSignup />
        </Route>

        <Route path="/Signup/Pages/CompanySignup" exact>
          <CompanySignup />
        </Route>

        {/*---------------------------------------  Student ------------------------------------*/}
        <Route path="/StudentDashboard/Main/Pages/Navbar/" exact>
          <Navbar />
        </Route>

        <Route
          path="/StudentDashboard/Main/StudentProfiles/Pages/StudentProfile/"
          exact
        >
          <StudentProfile />
        </Route>

        <Route
          path="/StudentDashboard/Main/StudentProfiles/Pages/EditStudentProfile"
          exact
        >
          <EditStudentProfile />
        </Route>

        {/*---------------------------------------  Student Events------------------------------------*/}

        <Route
          path="/StudentDashboard/Main/StudentEvents/Pages/StudentViewAllEvents"
          exact
          component={StudentViewAllEvents}
        />

        <Route
          path="/StudentDashboard/Main/StudentEvents/Pages/StudentViewRegisteredEvents"
          exact
          component={StudentViewRegisteredEvents}
        />
        {/*---------------------------------------  Student JOB------------------------------------*/}

        <Route
          path="/StudentDashboard/Main/StudentJobSearch/Pages/StudentJobSearch"
          exact
          component={StudentJobSearch}
        />
        <Route
          path="/StudentDashboard/Main/StudentJobSearch/Components/StudentViewandRegister"
          exact
          component={StudentViewandRegister}
        />

        {/*---------------------------------------  Student Student------------------------------------*/}
        <Route
          path="/StudentDashboard/Main/StudentViewOtherStudents/Pages/StudentsViewStudents"
          exact
          component={StudentsViewStudents}
        />

        <Route
          path="/StudentDashboard/Main/StudentViewOtherStudents/Components/StudentViewRegisteredStudentProfile"
          exact
          component={StudentViewRegisteredStudentProfile}
        />

        {/*---------------------------------------  Student Applications------------------------------------*/}
        <Route
          path="/StudentDashboard/Main/StudentApplications/Pages/StudentApplications"
          exact
          component={StudentApplications}
        />

        {/*--------------------------------------- Company ------------------------------------*/}
        <Route path="/CompanyDashboard/main/Pages/CompNavbar" exact>
          <CompNavbar />
        </Route>

        <Route path="/CompanyDashboard/CompProfile/Pages/CompProfile" exact>
          <CompProfile />
        </Route>

        <Route path="/CompanyDashboard/CompEvents/Pages/CompEvents" exact>
          <CompEvents />
        </Route>

        <Route path="/CompanyDashboard/CompStudents/Pages/CompStudents" exact>
          <CompStudents />
        </Route>

        <Route
          path="/CompanyDashboard/CompProfile/Components/ViewCompProfileForm"
          exact
        >
          <CompStudents />
        </Route>

        {/*--------------------------------------- Company Events------------------------------------*/}

        <Route
          path="/CompanyDashboard/CompEvents/Components/AddEventForm"
          exact
        >
          <AddEventForm />
        </Route>

        <Route
          path="/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudents"
          exact
          component={ViewRegisteredStudents}
        />

        <Route
          path="/CompanyDashboard/CompEvents/Pages/ViewRegisteredStudentProfile"
          exact
          component={ViewRegisteredStudentProfile}
        />

        {/*--------------------------------------- Company Dashboard------------------------------------*/}
        <Route path="/CompanyDashboard/CompDashboard/Pages/CompDashboard" exact>
          <CompDashboard />
        </Route>

        <Route
          path="/CompanyDashboard/CompDashboard/Pages/CompanyViewJobs"
          exact
          component={CompanyViewJobs}
        />

        <Route
          path="/CompanyDashboard/CompDashboard/Components/CompanyAddJob"
          exact
          component={CompanyAddJob}
        />

        <Route
          path="/CompanyDashboard/CompDashboard/Components/ViewJOBRegisteredStudents"
          exact
          component={ViewJOBRegisteredStudents}
        />

        <Route
          path="/CompanyDashboard/CompDashboard/Components/ViewJOBDetails"
          exact
          component={ViewJOBDetails}
        />

        <Route
          path="/CompanyDashboard/CompDashboard/Components/ViewResume"
          exact
          component={ViewResume}
        />

        {/*---------------------------------------  If nothing works------------------------------------*/}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
