const User = require("../models/User");

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, role } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const user = await User.create({ name, role });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET USERS
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE USER (role / status)
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser
};

