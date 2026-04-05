const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  getSummary,
  getCategorySummary
} = require("../controllers/recordController");

const auth = require("../middleware/auth");
const allow = require("../middleware/allow");
// apply JWT auth to all routes
router.use(auth);

// routes
// Only viewer+ can read
router.get("/", allow("admin", "analyst", "viewer"), getRecords);
router.get("/summary", allow("admin", "analyst"), getSummary);
router.get("/summary/category", allow("admin", "analyst"), getCategorySummary);

// Only admin can modify
router.post("/", allow("admin"), createRecord);
router.put("/:id", allow("admin"), updateRecord);
router.delete("/:id", allow("admin"), deleteRecord);

module.exports = router;