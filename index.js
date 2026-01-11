const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Ping route
app.get("/ping", (req, res) => {
  res.send("Ping received!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
