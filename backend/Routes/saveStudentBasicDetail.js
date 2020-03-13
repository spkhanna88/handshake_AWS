var express = require("express");
var app = express();
const router = express.Router();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
//var Validator = require("validator");
const mysql = require("mysql");
var isEmpty = require("lodash/isEmpty");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var db = require("../dbseed");

//var checkAuth = require("../middleware/check-auth");

//router.use(checkAuth);

router.post("/saveStudentBasicDetail", function(req, res) {
  var sql = `UPDATE StudentData SET message='${req.body.message}', studentfullname='${req.body.name}', dob='${req.body.dob}', city='${req.body.city}', state='${req.body.state}', country='${req.body.country}',  phone='${req.body.phone}', skillset='${req.body.skill}' WHERE email='${req.body.emailid}'`;
  db.query(sql, (err, rows, fields) => {
    // if (err) throw err;
    if (err) {
      res.status(400).send("User ID/EMAIL already exist");
    } else {
      console.log("1 record inserted");
      //res.status(200).send({ email: req.body.email, token: token });
      res.status(200).send({ success: true });
    }
  });
});

module.exports = router;
