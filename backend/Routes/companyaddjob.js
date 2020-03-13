var express = require("express");
const router = express.Router();
var db = require("../dbseed");

var validateaddjobs = require("../Validators/validateaddjobs");

router.post("/companyaddjob", function(req, res) {
  const { errors, isValid } = validateaddjobs(req.body);
  if (!isValid) {
    res.status(400).send(errors);
  } else {
    var sql = `INSERT INTO JOBDESCRIPTION (jobtitle,postingdate,applicationdeadline,location,salary,jobdescription,jobcategory,companyname,companyemail) VALUES('${req.body.jobtitle}','${req.body.postingdate}','${req.body.applicationdeadline}','${req.body.location}','${req.body.salary}','${req.body.jobdescription}','${req.body.jobcategory}','${req.body.companyname}','${req.body.companyemail}')`;

    db.query(sql, (err, rows, fields) => {
      if (err) {
        res.status(400).send("Some error occured...Please try again!!!");
      } else {
        console.log("1 record inserted in JOBDESCRIPTION");
        res.status(200).send({ success: true });
      }
    });
  }
});

module.exports = router;
