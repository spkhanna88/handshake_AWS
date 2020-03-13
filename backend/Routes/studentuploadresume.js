var express = require("express");
const router = express.Router();
var db = require("../dbseed");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "/home/ec2-user/handshake_final/frontend/public/Resumes");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");

router.post("/studentuploadresume", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file);

    return res.status(200).send(req.file.filename);
  });
});

module.exports = router;
