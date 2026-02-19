const User = require("../models/user.model");
// const asyncHandler = require("../utils/asyncHandler");

// Create Usre
exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = await User.create({ name, email, age });
  res.status(201).json(user);
};

// Get All Users
exports.getUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

// Get single user by Id
exports.getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

// Update User by id
exports.updateUserById = async (req, res) => {
  const id = req.params.id;

  const { name, email, age } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { name, email, age },
    { new: true },
  );

  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

// Delete use by Id
exports.deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

