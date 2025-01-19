const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.get("/", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

router.post("/", async (req, res) => {
  const { user, message } = req.body;
  const newMessage = new Message({ user, message });
  await newMessage.save();
  res.json(newMessage);
});

module.exports = router;
