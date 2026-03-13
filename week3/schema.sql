-- Create the database
CREATE DATABASE testdb;

-- Switch to it
USE testdb;

-- Create a table for users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,   -- unique ID for each user
  username VARCHAR(50) NOT NULL,       -- username text, up to 50 characters
  password VARCHAR(50) NOT NULL,       -- password text
  email VARCHAR(100)                   -- email address
);
