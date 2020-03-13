var express = require("express");
var app = express();
const router = express.Router();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var Validator = require("validator");
var isEmpty = require("lodash/isEmpty");
const mysql = require("mysql");
var isEmpty = require("lodash/isEmpty");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

var db = require("../dbseed");
var validateUserSignupInput = require("../Validators/validateUserSignupInput");

router.post("/studentsignup", async function(req, res) {
  const { errors, isValid } = validateUserSignupInput(req.body);
  if (!isValid) {
    console.log(errors);
    res.status(400).send(errors);
  } else {
    console.log("Studentsignuprequest received");
    var encryptedPassword;
    try {
      encryptedPassword = await bcrypt.hash(req.body.password, 12);
      console.log(encryptedPassword);
    } catch (err) {
      console.log("error with encryption");
    }
    var sql = `INSERT INTO StudentData (studentfullname, email, password, schoolname) VALUES('${req.body.studentfullname}','${req.body.email}','${encryptedPassword}','${req.body.schoolname}')`;

    db.query(sql, (err, rows, fields) => {
      // if (err) throw err;
      if (err) {
        res.status(400).send("User ID/EMAIL already exist");
      } else {
        // let token;
        // try {
        //   token = jwt.sign({ email: req.body.email }, "SUPERSECRETPIN", {
        //     expiresIn: "1h"
        //   });
        // } catch {
        //   console.log("error occured with token");
        //   res.send(400).send({ problem: token });
        // }

        console.log("1 record inserted");
        //res.status(200).send({ email: req.body.email, token: token });
        res.status(200).send({ success: true });
      }
    });

    console.log(req.body);
    //else
  }
  //main function
});

module.exports = router;
