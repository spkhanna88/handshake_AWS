var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.get("/studentviewalljobs", function(req, res) {
  var sql = `SELECT * FROM JOBDESCRIPTION`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).send(rows);
    }
  });
});

module.exports = router;
