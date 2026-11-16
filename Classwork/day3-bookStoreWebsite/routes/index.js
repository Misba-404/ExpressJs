var express = require("express");
const { title } = require("node:process");
var router = express.Router();

let storeName = "My Book Store";
let books = [
  { title: "Alchemist", author: "Paolo Cohelo" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Five Point someone ", author: "Chetan Bhagath" },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: storeName, books: books });
});

module.exports = router;
