var express = require("express");
var router = express.Router();

let welcomeMessage = "Welcome to Munnar Travels";
let places = [
  { name: "Munnar", country: "India", isPopular: true },
  { name: "Kyoto", country: "Japan", isPopular: true },
  { name: "Hallstatt", country: "Austria", isPopular: false },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { welcomeMessage: welcomeMessage, places: places });
});

module.exports = router;
