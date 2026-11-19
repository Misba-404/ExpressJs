var express = require("express");
const { domainToUnicode } = require("node:url");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/product", function (req, res, next) {
  res.render("createProduct");
});

module.exports = router;
