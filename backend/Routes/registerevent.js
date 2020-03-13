var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/registerevent", function(req, res) {
  console.log(req.body);
  var initsql = `SELECT * FROM StudentData WHERE email = '${req.body.studentemail}'`;

  var sql = `INSERT INTO handshake_database.EventStudent (studentemail)
  SELECT * FROM (SELECT '${req.body.studentemail}') AS tmp
  WHERE NOT EXISTS (
      SELECT studentemail FROM handshake_database.EventStudent WHERE studentemail = '${req.body.studentemail}'
  ) LIMIT 1`;

  var sql2 = `UPDATE handshake_database.EventStudent SET ${req.body.eventid}='Yes' WHERE studentemail='${req.body.studentemail}'`;
  var major;
  db.query(initsql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      console.log(rows[0].major);
      major = rows[0].major;
    }
  });

  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      console.log("sql issued");
      //res.status(200).send(rows);
    }
  });

  db.query(sql2, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      console.log("sql2 issued");
      res.status(200).send({ success: true, major: major });
    }
  });
});

module.exports = router;
