var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/studentregisterjobandresume", function(req, res) {
  var sql = `SELECT studentemail
  FROM JOBSTUDENT
  WHERE EXISTS(SELECT * FROM JOBSTUDENT WHERE studentemail='${req.body.studentemail}' AND jobid = '${req.body.jobid}')`;

  var sql2 = `Insert INTO JOBSTUDENT  (studentemail, studentname, resumes, jobid, applicationstatus) VALUES ('${req.body.studentemail}','${req.body.studentname}','${req.body.filelocation}','${req.body.jobid}','pending');`;

  db.query(sql, (err, rows, fields) => {
    if (err) {
      res.status(400).send("Some error occured...Please try again!!!");
    } else {
      if (rows.length == 0) {
        db.query(sql2, (err, rows, fields) => {
          // if (err) throw err;
          if (err) {
            res.status(400).send("Some error occured...Please try again!!!");
          } else {
            res.status(200).send({ success: true });
          }
        });
      } else {
        res.status(200).send({ success: false });
      }
    }
  });
});

module.exports = router;
