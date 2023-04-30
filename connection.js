const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "fullvomitforme",
  password: "root",
  database: "discotix",
});

module.exports = db;
