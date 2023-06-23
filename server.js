// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "",
    database: "Vaccination",
    connectionLimit: 10
});

// Connect to the database
db.connect((err) => {
  if(err) throw err;
  console.log('Connected to database');
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  bcrypt.hash(password, 10, function(err, hash) {
    if(err) console.log(err);

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], (err, result) => {
      if(err) console.log(err);
    });
  });
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
    if(err) console.log(err);

    if(result.length > 0) {
      bcrypt.compare(password, result[0].password, function(err, response) {
        if(response) {
          const id = result[0].id;
          const token = jwt.sign({id}, "jwtSecret", {
            expiresIn: 300,
          });

          res.json({auth: true, token: token, result: result});
        } else {
          res.json({auth: false, message: "wrong username/password combination!"});
        }
      });
    } else {
      res.json({auth: false, message: "no user exists!"});
    }
  });
});

app.listen(3001, () => {
  console.log('Running server on port 3001...');
});
