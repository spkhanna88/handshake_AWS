var express = require("express");
//var app = express();
const router = express.Router();
//var bodyParser = require("body-parser");
//var session = require("express-session");
//var cookieParser = require("cookie-parser");
//var Validator = require("validator");
//var isEmpty = require("lodash/isEmpty");
//const mysql = require("mysql");
//var isEmpty = require("lodash/isEmpty");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");

var db = require("../dbseed");

// var checkAuth = require("../middleware/check-auth");

// router.use(checkAuth);
//var datatosent;

router.post("/getStudentBasicDetail", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM StudentData WHERE email="${req.body.email}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else res.status(200).send(rows[0]);
  });
});

module.exports = router;
