var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/viewCompProfile", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM CompanyData WHERE email="${req.body.email}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    //console.log(rows[0].password);
    else res.status(200).send(rows[0]);
  });
  //res.status(200).send("profile");
});

module.exports = router;
