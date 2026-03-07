const mongoose = require("mongoose");
const Order = require("../models/order.model");
const Product = require("../models/product");
const Transaction = require("../models/transaction.model");

exports.createTransaction = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    // 1️⃣ Check & reduce stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product).session(session);

      if (!product || product.stock < item.quantity) {
        throw new Error("Insufficient stock");
      }

      product.stock -= item.quantity;
      await product.save({ session });
    }

    // 2️⃣ Create Order
    const order = await Order.create(
      [
        {
          user: req.user._id,
          orderItems,
          shippingAddress,
          paymentMethod,
          totalPrice,
        },
      ],
      { session }
    );

    // 3️⃣ Create Transaction Record
    const transaction = await Transaction.create(
      [
        {
          user: req.user._id,
          order: order[0]._id,
          amount: totalPrice,
          paymentMethod,
          status: "success",
        },
      ],
      { session }
    );

    // 4️⃣ Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(201).json(transaction[0]);

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(400).json({ message: error.message });
  }
};

// Get logged-in user's transactions
exports.getMyTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id })
      .populate("order")
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Admin: Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("user", "name email")
      .populate("order")
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get single transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate("user", "name email")
      .populate("order");

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};