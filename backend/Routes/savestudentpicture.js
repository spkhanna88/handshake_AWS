var express = require("express");
const router = express.Router();
var db = require("../dbseed");

router.post("/savestudentpicture", function(req, res) {
  var sql = `UPDATE StudentData SET filelocation='${req.body.filelocation}' WHERE email='${req.body.email}'`;
  console.log(sql);
  db.query(sql, (err, rows, fields) => {
    // if (err) throw err;
    if (err) {
      res.status(400).send("Some error occured...Please try again!!!");
    } else {
      console.log("1 record inserted");
      //res.status(200).send({ email: req.body.email, token: token });
      res.status(200).send({ success: true });
    }
  });
});

module.exports = router;
