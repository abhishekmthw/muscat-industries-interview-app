const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  courses: {
    type: Array,
    default: [],
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
