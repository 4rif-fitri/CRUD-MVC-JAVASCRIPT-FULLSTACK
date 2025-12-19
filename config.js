let mysql = require("mysql");

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
