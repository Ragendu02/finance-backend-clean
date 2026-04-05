const Record = require("../models/Record");

// CREATE
const createRecord = async (req, res) => {
  try {
    const { amount, type, category, notes } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    if (!type || !["income", "expense"].includes(type)) {
      return res.status(400).json({ message: "Invalid type" });
    }

    const record = await Record.create({
      amount,
      type,
      category,
      notes
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET
const getRecords = async (req, res) => {
  try {
    const { type, page = 1, limit = 5 } = req.query;

    let filter = {};
    if (type) filter.type = type;

    const records = await Record.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// UPDATE
const updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(record => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    res.json({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getCategorySummary = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord, 
  getSummary,
  getCategorySummary
};