var express = require("express");
const router = express.Router();
var cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

var db = require("../dbseed");

router.post("/companysignin", function(req, res) {
  console.log("Company Signin");
  console.log(req.body);

  if (req.body.selectedOption === "company")
    var User = `SELECT * FROM CompanyData WHERE email = "${req.body.identifier}"`;
  else
    var User = `SELECT * FROM StudentData WHERE email = "${req.body.identifier}"`;

  db.query(User, async (err, rows, fields) => {
    if (err) console.log(err);
    else {
      if (rows.length) {
        let isValidPassword = false;
        console.log(rows[0]);
        try {
          isValidPassword = await bcrypt.compare(
            req.body.password,
            rows[0].password
          );

          console.log(isValidPassword);
          if (isValidPassword === true) {
            res.cookie("cookie", "admin", {
              maxAge: 900000,
              httpOnly: false,
              path: "/"
            });

            var user = {
              email: req.body.identifier,
              password: req.body.password
            };

            req.session.user = user;
            console.log("Passwords Match");
            console.log(req.body);
            res.status(200).send({
              email: req.body.identifier,
              selectedOption: req.body.selectedOption
            });
          } else {
            req.session.user = null;
            console.log("Passwords dont match");
            res.status(400).send({ problem: "password" });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        req.session.user = null;
        console.log("User ID doesn't exist");
        res.status(400).send({ problem: "username" });
      }
    }
  });
  //main function
});

module.exports = router;
