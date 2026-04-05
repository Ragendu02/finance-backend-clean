const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "analyst", "viewer"],
    default: "viewer"
  },
  password: {
  type: String,
  required: true
},
email: {
  type: String,
  required: true,
  unique: true
},
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);