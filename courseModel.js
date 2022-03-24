const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Course", courseSchema);
