let express = require("express");
let router = express.Router();
let Hero = require("../model/Hero.model")

router.get("/", (req, res) => {
//   console.log({ req });
	Hero.getHero(res)
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

module.exports = router;
