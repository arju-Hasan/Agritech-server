const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getMyTransactions,
  getAllTransactions,
  getTransactionById,
} = require("../controllers/transaction.controller");

// const { protect, admin } = require("../middleware/authMiddleware");

// Create transaction (usually after payment)
router.post("/", createTransaction);

// Get logged-in user's transactions
router.get("/my", getMyTransactions);

// Admin: Get all transactions
router.get("/", getAllTransactions);

// Get single transaction
router.get("/:id", getTransactionById);

module.exports = router;