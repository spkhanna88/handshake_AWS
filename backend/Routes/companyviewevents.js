var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/companyviewevent", function(req, res) {
  //console.log(req.body);
  var sql = `SELECT * FROM addeventform WHERE authemail="${req.body.authemail}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).send(rows);
    }
  });
});

module.exports = router;
