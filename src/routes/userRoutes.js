const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  updateUser
} = require("../controllers/userController");

const auth = require("../middleware/auth");
const allow = require("../middleware/allow");

// apply JWT auth
router.use(auth);

// routes
router.post("/", allow("admin"), createUser);
router.get("/", allow("admin", "analyst"), getUsers);
router.patch("/:id", allow("admin"), updateUser);

module.exports = router;