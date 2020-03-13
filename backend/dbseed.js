///////// AWS///////////

const mysql = require("mysql");

const configuration = {
  host: "mysqldb.covxnn7uvmvs.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "adminadmin",
  database: "handshake_database"
};

const db = mysql.createConnection(configuration);

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //con.end();
});

global.db = db;

module.exports = db;
