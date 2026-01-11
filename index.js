// ~/sessionhub/backend/index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(require('cors')({ origin: '*' }));
const cors = require('cors');
app.use(cors({ origin: '*' }));  // Allow all frontend requests
const PORT = 3000;

// ===== Middleware =====
app.use(bodyParser.json());
app.use(cors()); // Allow all IPs

// ===== In-memory storage =====
let users = [
  { email: "teacher@example.com", password: "teacher123", role: "teacher" },
  { email: "student@example.com", password: "student123", role: "student" }
];

let posts = [];
let liveSessions = [];

// ===== Routes =====

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if(!user) return res.status(401).json({ error: "Invalid email or password" });
  res.json({ email: user.email, role: user.role });
});

// Get posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Create post
app.post("/posts", (req, res) => {
  const { title, teacher } = req.body;
  if(!title || !teacher) return res.status(400).json({ error: "Missing title or teacher" });
  posts.push({ title, teacher });
  res.json({ success: true });
});

// Get live sessions
app.get("/live", (req, res) => {
  res.json(liveSessions);
});

// Create live session
app.post("/live", (req, res) => {
  const { title, teacher } = req.body;
  if(!title || !teacher) return res.status(400).json({ error: "Missing title or teacher" });
  liveSessions.push({ title, teacher });
  res.json({ success: true });
});

// ===== Start server =====
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
