var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.get("/studentviewevent", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM addeventform ORDER BY eventdate ASC`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).send(rows);
    }
  });
});

module.exports = router;
