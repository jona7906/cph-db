const express = require("express");
const mysql = require("mysql");
/* const compression = require("compression"); */
//Create connection

// const db = mysql.createConnection({
//   host: "stigstig.dk.mysql",
//   user: "stigstig_dk_cphfilmcompany",
//   password: "sampdoria3",
//   database: "stigstig_dk_cphfilmcompany",
// });

let dataResults = [];

//Connect
// db.connect((err) => {
//   if (err) {
//     console.log("cant connect");
//     console.log(err);
//   } else {
//     console.log("mysql connected...");
//   }
// });

// db.query("select * from Productions", (err, results) => console.log("err", err));

const app = express();

// app.get("/", (req, res) => {
//   console.log("test");
//   let sql = "SELECT * FROM Productions";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log("results", results);
//     dataResults = results;
//     res.send("Post fetched....");
//   });
// });

app.get("/", (req, res) => res.send("test"));

app.listen("3306", () => {
  console.log("server startet on port");
});

/* app.use(compression()); */

/* 
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();
 */
