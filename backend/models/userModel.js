const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exits"],
    minlength: [2, "A username must have at least 2 characters"],
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
