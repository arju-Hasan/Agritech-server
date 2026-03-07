const express = require("express");
const router = express.Router();

const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controller");

// Send message
router.post("/", sendMessage);

// Get messages of a conversation
router.get("/:conversationId", getMessages);

module.exports = router;