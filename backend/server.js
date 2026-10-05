// Express API backed by an SQLite database (created from database.sql).
// Run locally:  npm install  &&  npm start   (http://localhost:3000/api/products)
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// Create the database from database.sql on first start
const db = new Database(path.join(__dirname, "inventory.db"));
const exists = db.prepare(
  "SELECT name FROM sqlite_master WHERE type='table' AND name='products'"
).get();
if (!exists) {
  db.exec(fs.readFileSync(path.join(__dirname, "database.sql"), "utf8"));
}

app.get("/", (req, res) => res.send("Inventory API is running"));

app.get("/api/products", (req, res) => {
  res.json(db.prepare("SELECT * FROM products").all());
});

app.get("/api/products/low-stock", (req, res) => {
  res.json(db.prepare("SELECT * FROM products WHERE stock < 10").all());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
