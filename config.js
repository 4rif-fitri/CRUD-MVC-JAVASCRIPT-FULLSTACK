let mysql = require("mysql");
const { connect } = require("./controller/hero.controller");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mvc_js",
});

con.connect((error) => {
  if (error) throw error; //lenpar err
  console.log("Conet");
});

module.exports = con;
