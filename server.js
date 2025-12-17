let port = 3025
let express = require("express")
let server = express()//panggail func dalam modul express

server.use("/",(request,respone)=>{
	respone.send("Server JS ON!");
})

server.listen(port,() => {
	console.log("runnding " + port);
})