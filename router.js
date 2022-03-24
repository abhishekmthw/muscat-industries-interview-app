const express = require("express");
const router = express.Router();
const User = require("./userModel");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const users = await User.findById({ _id: req.params.id });
  res.json(users);
});

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  console.log(req.body);
  res.json(user);
});

router.patch("/:id", async (req, res) => {
  const user = await User.updateOne(
    { _id: req.params.id },
    { $set: req.body.user }
  );
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.remove({ _id: req.params.id });
  res.json(user);
});

module.exports = router;
