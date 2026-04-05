const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
const userRoutes = require("./src/routes/userRoutes");

app.use("/users", userRoutes);
// routes
const recordRoutes = require("./src/routes/recordRoutes");
app.use("/records", recordRoutes);

const authRoutes = require("./src/routes/authRoutes");

app.use("/auth", authRoutes);
// test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// connect database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.log(err));