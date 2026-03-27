require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); // switched to a database instead of JSON
const app = express();
const port = 3000;
const db = mysql.createConnection({
  host: process.env.DB_HOST, // from .env
  user: process.env.DB_USER, // from .env
  password: process.env.DB_PASSWORD, // from .env
  database: process.env.DB_NAME, // from .env
});
app.use(express.urlencoded({ extended: true }));
// Serve the login form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle login
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // VULNERABLE — SQL Injection possible here
  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";
  console.log("FINAL QUERY:", query);
  db.query(query, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("Invalid credentials");
    }
  });
});

// User profile page
app.get("/profile", (req, res) => {
  const userId = req.query.id;

  // VULNERABLE — SQL Injection possible here
  const query = "SELECT * FROM users WHERE id = " + userId;
  console.log("FINAL QUERY:", query);
  db.query(query, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("User not found");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
