var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/companyviewjobs", function(req, res) {
  console.log(req.body);
  var sql = `SELECT * FROM JOBDESCRIPTION WHERE companyemail="${req.body.companyemail}"`;
  db.query(sql, (err, rows, fields) => {
    if (err) console.log(err);
    else {
      res.status(200).send(rows);
    }
  });
});

module.exports = router;
