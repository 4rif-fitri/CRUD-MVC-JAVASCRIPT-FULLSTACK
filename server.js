let port = 3025
let express = require("express")
let server = express()//panggail func dalam modul express

server.listen(port,() => {
	console.log("runnding " + port);
})