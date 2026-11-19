// mongoDb database
var express = require("express");
var router = express.Router();
const User = require("../models/userModel");

const { validationResult, check } = require("express-validator");

router.get("/", function (req, res) {
  res.render("hello-world", { errors: [] });
});

// for handling form submission with validations
router.post(
  "/createUser",
  [
    // Add validation rules here
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  function (req, res) {
    // Validate the request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are validation errors, render the form with errors
      return res.render("hello-world", { errors: errors.array() });
    } else {
      // No validation errors, proceed with rendering the form data
      const email = req.body.email;
      res.render("form-data", {
        email: email,
        allData: req.body,
      });
    }

    // Save Data From forms to DB
    const { email, password } = req.body;

    // Create a new User object
    const newUser = new User({
      email,
      password,
    });

    // Save the User object to the database
    newUser
      .save()
      .then(() => {
        res.render("form-data", {
          message: "Data saved to db",
          email: email,
          allData: req.body,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Database error");
      });
  },
);

module.exports = router;
