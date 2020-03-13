const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(" ")[1];
    if (!token) {
      console.log("Authentication failed due to token");
    }
    const decodedToken = jwt.verify(token, "SUPERSECRETPIN"); ///Payload
    req.userData = { userID: decodedToken.email };
    next();
  } catch (err) {
    res.status(401).send({ problem: authfailedtoken });
  }
};
