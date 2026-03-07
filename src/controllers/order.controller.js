const Order = require("../models/order.model");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user._id, // from auth middleware
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Logged In User Orders
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("orderItems.product");

  res.json(orders);
};

// Admin: Get All Orders
exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// Get Single Order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email").populate("orderItems.product");
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Order to Paid
exports.updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentStatus: "paid" },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Order to Delivered
exports.updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { isDelivered: true, deliveredAt: new Date() },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};