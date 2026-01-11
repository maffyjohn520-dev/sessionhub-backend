const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route – test if backend is live
app.get("/", (req, res) => {
  res.send("SessionHub backend is live 🚀");
});

// Ping route – for frontend to check connection
app.get("/ping", (req, res) => {
  res.send("Ping received!");
});

// Add more routes here as needed
// app.get("/example", (req, res) => res.json({ message: "Hello world!" }));

// Use the port Railway provides, fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
