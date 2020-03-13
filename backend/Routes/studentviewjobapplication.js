var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/studentviewjobapplication", function(req, res) {
  var sql = `SELECT * FROM JOBSTUDENT WHERE studentemail = '${req.body.email}';`;
  db.query(sql, (err, rows, fields) => {
    if (rows.length !== 0) {
      if (err) console.log(err);
      else {
        var i;
        var jobidstring = "";
        var applicationstatus = [];
        for (i = 0; i < rows.length - 1; i++) {
          jobidstring += `jobid =  '${rows[i].jobid}' OR `;
          applicationstatus.push(rows[i].applicationstatus);
        }
        jobidstring += `jobid = '${rows[i].jobid}'`;
        applicationstatus.push(rows[i].applicationstatus);

        var sql2 = `SELECT * FROM JOBDESCRIPTION WHERE ${jobidstring}`;
        if (rows.length !== 0) {
          db.query(sql2, (err, rows, fields) => {
            if (err) console.log(err);
            else {
              for (var i = 0; i < rows.length; i++) {
                rows[i].applicationstatus = applicationstatus[i];
              }
              res.status(200).send(rows);
            }
          });
        } else {
          res.status(200).send({ status: "nostudent" });
        }
      }
    } else {
      res.status(200).send({ status: "nostudent" });
    }
  });
});

module.exports = router;
