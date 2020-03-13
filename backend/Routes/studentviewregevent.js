var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/studentviewregevent", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM EventStudent WHERE studentemail = '${req.body.email}'`;
  db.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(400).send("failed");
    } else {
      console.log("sql issued");
      res.status(200).send(rows);
    }
  });
});

module.exports = router;
