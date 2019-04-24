// SEt up to the MYSQL DB
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});

connection.connect(function(err) {
  if(err) {
    console.log("error connecting: " + err.stack);
    console.log("I think you broke the internet...");
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

module.exports = connection;