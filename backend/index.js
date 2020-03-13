//dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var Validator = require("validator");
var path = require("path");
//const { check, validationResult } = require("express-validator");

var isEmpty = require("lodash/isEmpty");
const mysql = require("mysql");
var db = require("./dbseed");
/////Validator//////
var validateCompanySignupInput = require("./Validators/validateCompanySignupInput.js");
var validateUserSignupInput = require("./Validators/validateUserSignupInput");

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://18.221.66.220:3000", credentials: true }));

app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/public", express.static(path.join("public")));

//Allow Access Control
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://18.221.66.220:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

///////Routes///////
const companysignup = require("./Routes/companysignup");
app.use(companysignup);

const studentsignup = require("./Routes/studentsignup");
app.use(studentsignup);

const signin = require("./Routes/Signin");
app.use(signin);

const getStudentBasicDetail = require("./Routes/getStudentBasicDetail");
app.use(getStudentBasicDetail);

const saveStudentBasicDetail = require("./Routes/saveStudentBasicDetail");
app.use(saveStudentBasicDetail);

const saveStudentEduDetail = require("./Routes/saveStudentEduDetail");
app.use(saveStudentEduDetail);

const getStudentEduDetail = require("./Routes/getStudentEduDetail");
app.use(getStudentEduDetail);

const getStudentCmpDetail = require("./Routes/getStudentCmpDetail.js");
app.use(getStudentCmpDetail);

const saveStudentCmpDetail = require("./Routes/saveStudentCmpDetail");
app.use(saveStudentCmpDetail);

const saveCompProfile = require("./Routes/saveCompProfile");
app.use(saveCompProfile);

const viewCompProfile = require("./Routes/viewCompProfile");
app.use(viewCompProfile);

const uploadCompanyPicture = require("./Routes/uploadCompanyPicture");
app.use(uploadCompanyPicture);

const addeventform = require("./Routes/addeventform");
app.use(addeventform);

const companyviewevents = require("./Routes/companyviewevents");
app.use(companyviewevents);

const eventstudentviewer = require("./Routes/eventstudentviewer");
app.use(eventstudentviewer);

const studentviewevent = require("./Routes/studentviewevent");
app.use(studentviewevent);

const registerevent = require("./Routes/registerevent");
app.use(registerevent);

const studentviewregevent = require("./Routes/studentviewregevent");
app.use(studentviewregevent);

const studentviewregeventUSINGID = require("./Routes/studentviewregeventUSINGID");
app.use(studentviewregeventUSINGID);

//CompanyDASHBOARD

const companyaddjob = require("./Routes/companyaddjob");
app.use(companyaddjob);

const companyviewjobs = require("./Routes/companyviewjobs");
app.use(companyviewjobs);

const companyjobstudentviewer = require("./Routes/companyjobstudentviewer");
app.use(companyjobstudentviewer);

const studentviewalljobs = require("./Routes/studentviewalljobs");
app.use(studentviewalljobs);

const studentuploadresume = require("./Routes/studentuploadresume");
app.use(studentuploadresume);

const studentregisterjobandresume = require("./Routes/studentregisterjobandresume");
app.use(studentregisterjobandresume);

const updatestudentapplicationstatus = require("./Routes/updatestudentapplicationstatus");
app.use(updatestudentapplicationstatus);

const viewallstudents = require("./Routes/viewallstudents");
app.use(viewallstudents);

const studentviewjobapplication = require("./Routes/studentviewjobapplication");
app.use(studentviewjobapplication);

const uploadstudentpicture = require("./Routes/uploadstudentpicture");
app.use(uploadstudentpicture);

const savestudentpicture = require("./Routes/savestudentpicture");
app.use(savestudentpicture);

//start your server on port 4001
app.listen(4001);
console.log("Server Listening on port 4001");

module.exports = app;
