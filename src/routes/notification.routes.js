const express = require("express");
const router = express.Router();

const {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
} = require("../controllers/notification.controller");

// const { protect } = require("../middleware/authMiddleware");

// Get logged-in user notifications
router.get("/", getMyNotifications);

// Mark single notification as read
router.put("/:id/read", markAsRead);

// Mark all notifications as read
router.put("/read-all", markAllAsRead);

module.exports = router;