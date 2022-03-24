const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = require("./router");

app.use(bodyParser.json());
app.use("/user", router);

mongoose.connect(
  "mongodb+srv://user:admin1234@cluster0.jj26t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("Connected to DB")
);

app.listen(4000, () => console.log("Server Started!"));
