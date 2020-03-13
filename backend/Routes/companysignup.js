var express = require("express");
//var app = express();
const router = express.Router();
// var bodyParser = require("body-parser");
// var session = require("express-session");
// var cookieParser = require("cookie-parser");
// var Validator = require("validator");
// var isEmpty = require("lodash/isEmpty");
// const mysql = require("mysql");
// var isEmpty = require("lodash/isEmpty");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

var validateCompanySignupInput = require("../Validators/validateCompanySignupInput");
var db = require("../dbseed");

router.post("/companysignup", async function(req, res, next) {
  const { errors, isValid } = validateCompanySignupInput(req.body);
  if (!isValid) {
    console.log(typeof errors);
    res.status(400).send(errors);
  } else {
    console.log("companysignuprequest received");
    var encryptedPassword;
    try {
      encryptedPassword = await bcrypt.hash(req.body.password, 12);
      console.log(encryptedPassword);
    } catch (err) {
      console.log("error with encryption");
    }
    var sql = `INSERT INTO CompanyData (companyname, email, password, location) VALUES('${req.body.companyname}','${req.body.email}','${encryptedPassword}','${req.body.location}')`;

    db.query(sql, (err, rows, fields) => {
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
        res.status(200).send({ success: true });
        // res.status(200).send({ email: req.body.email, token: token });
      }
    });
    //else
  }
  //main function
});

module.exports = router;
