const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql4.freesqldatabase.com",
  user: "sql4452705",
  password: "9itsf8rixh",
  database: "sql4452705",
});

module.exports = connection;
