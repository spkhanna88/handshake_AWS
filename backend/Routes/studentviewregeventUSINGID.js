var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/studentviewregeventUSINGID", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM addeventform WHERE eventid = '${req.body.eventid}'`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).send(rows[0]);
    }
  });
});

module.exports = router;
