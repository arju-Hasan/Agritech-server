const Message = require("../models/message.model");

// Create Conversation
exports.createConversation = async (req, res) => {
  const { participantId, relatedOrder } = req.body;

  const conversation = await Conversation.create({
    participants: [req.user._id, participantId],
    relatedOrder,
  });

  res.status(201).json(conversation);
};

// Send Message
exports.sendMessage = async (req, res) => {
  try {
    const { conversationId, text } = req.body;

    const message = await Message.create({
      conversation: conversationId,
      sender: req.user._id,
      text,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Messages of Conversation
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversation: req.params.conversationId,
    }).populate("sender", "name");

    res.json(messages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get user's conversations
exports.getUserConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.user._id,
    })
      .populate("participants", "name email")
      .populate("relatedOrder")
      .sort({ createdAt: -1 });

    res.json(conversations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};