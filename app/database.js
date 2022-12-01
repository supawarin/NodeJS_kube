const mysql = require("mysql2");
const dbConnection = mysql.createPool({
      host: "database",
      user: "root",
      password: "rootci4",
      database: "nodejs"
}).promise()

module.exports = dbConnection;