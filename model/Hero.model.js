let db = require("../config")

exports.getHero = (res) =>{
	//query
	let sql = "SELECT * FROM `hero`";

	//exe
	db.query(sql,(error, result, felid) => {
    if (error) return console.log({ error });

    let data = JSON.parse(JSON.stringify(result));
    // console.log(data);
    // res.send(data)
    res.render("index", {title:"Hero MLBB"})
		res.end()
	})
	//
}


