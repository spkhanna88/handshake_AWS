var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/eventstudentviewer", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM EventStudent WHERE ${req.body.eventid}="Yes"`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      console.log(rows);
      if (rows.length !== 0) res.status(200).send(rows);
      else res.status(200).send({ status: "nostudent" });
    }
  });
});

module.exports = router;
