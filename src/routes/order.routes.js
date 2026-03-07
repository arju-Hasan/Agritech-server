const express = require("express");
const router = express.Router();

const {
  createOrder,
  getMyOrders,
  getOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require("../controllers/order.controller");

// const { protect, admin } = require("../middleware/authMiddleware");

// Create new order (Logged-in user)
router.post("/", createOrder);

// Get logged-in user's orders
router.get("/myorders", getMyOrders);

// Get all orders (Admin only)
router.get("/", getOrders);

// Get single order by ID
router.get("/:id", getOrderById);

// Update order to paid
router.put("/:id/pay", updateOrderToPaid);

// Update order to delivered (Admin only)
router.put("/:id/deliver", updateOrderToDelivered);

module.exports = router;