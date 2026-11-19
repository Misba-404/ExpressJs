const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

const { body, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// Validation Rules
const validateSignup = [
  body("username").notEmpty().withMessage("Username is required"),

  body("email").isEmail().withMessage("Enter a valid email"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];


// POST: signup
router.post("/signup", validateSignup, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send(errors.array());
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  await newUser.save();

  res.send("Thank you for signing up!");
});

module.exports = router;
