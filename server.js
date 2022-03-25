const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const router = require("./router");

app.use(bodyParser.json());
app.use("/user", router);

mongoose.connect(process.env.DB_CONNECT, () => console.log("Connected to DB"));

app.listen(4000, () => console.log("Server Started!"));
