var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/updatestudentapplicationstatus", function(req, res) {
  console.log(req.body);
  var sql = `UPDATE JOBSTUDENT SET applicationstatus='${req.body.applicationstatus}'
  WHERE studentemail='${req.body.studentemail}' AND jobid = '${req.body.jobid}'`;

  db.query(sql, (err, rows, fields) => {
    if (err) {
      res.status(400).send("Some error occured...Please try again!!!");
    } else {
      res.status(200).send({ status: req.body.applicationstatus });
    }
  });
});

module.exports = router;
