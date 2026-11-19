const mongoose = require("mongoose");
const { type } = require("node:os");

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
