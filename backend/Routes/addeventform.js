var express = require("express");
const router = express.Router();
var db = require("../dbseed");

var validateaddevents = require("../Validators/validateaddevents");

router.post("/addeventform", function(req, res) {
  var sql = `INSERT INTO addeventform (eventname,description,eventtime,eventdate,location,eligibility,authemail) VALUES('${req.body.eventname}','${req.body.description}','${req.body.eventtime}','${req.body.eventdate}','${req.body.location}','${req.body.eligibility}','${req.body.authemail}')`;
  const { errors, isValid } = validateaddevents(req.body);
  if (!isValid) {
    res.status(400).send(errors);
  } else {
    db.query(sql, (err, rows, fields) => {
      // if (err) throw err;
      if (err) {
        res.status(400).send("Some error occured...Please try again!!!");
      } else {
        console.log("1 record inserted in addeventform");
        //res.status(200).send({ email: req.body.email, token: token });
      }
    });

    var sql2 = `SELECT eventid from addeventform WHERE eventname='${req.body.eventname}'`;
    db.query(sql2, (err, rows, fields) => {
      if (err) {
        console.log("Some error occured...Please try again!!!");
      } else {
        console.log("begin");
        console.log(rows[0].eventid);
        console.log("end");
        var eventid = rows[0].eventid;
        var sql3 = `ALTER TABLE EventStudent ADD Event${eventid} varchar (255)`;
        db.query(sql3, (err, rows, fields) => {
          if (err) {
            console.log(err);
          } else {
            console.log("1 record inserted in eventstudent");
          }
        });
      }
    });

    res.status(200).send({ success: true });
  }
});

module.exports = router;
