let port = 3025;
let express = require("express");
let server = express(); //panggail func dalam modul express
let heroController = require("./controller/hero.controller");
const bodyParser = require("body-parser");

server.use(express.urlencoded({ extended: false }));//give up
server.set("view engine","ejs")//give up
server.set("views","views") //give up

server.use("/hero", heroController);

server.use("/", (request, respone) => {
  respone.send("Server JS ON!!!");
});

server.listen(port, () => {
  console.log("runnding " + port);
});
