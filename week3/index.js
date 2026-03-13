require("dotenv").config(); // Load variables from .env
const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
// Database connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST, // from .env
  user: process.env.DB_USER, // from .env
  password: process.env.DB_PASSWORD, // from .env
  database: process.env.DB_NAME, // from .env
});
// Serve the search form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// Handle search
app.post("/search", (req, res) => {
  const searchValue = req.body.query;
  const query = `SELECT * FROM users WHERE username = '${searchValue}'`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
