let express = require("express");
let router = express.Router();

router.get("/hero", (req, res) => {
//   console.log({ req });
  res.send("lorem")
});

module.exports = router;
