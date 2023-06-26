// Import libraries that we installed using npm
// In node.js, we hashing password using a library named bcrypt
// In node.js, passport is a simple library to authenticate users

const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const passport = require("passport");
const initializePassport = require("./passport-config")

// Here we simply store all users in an array, but a robust app needs a database

// Check if the email passed in equals to the one in the database
initializePassport(
  passport,
  email => users.find()

)

const users = [];

app.use(express.urlencoded({ extended: false }));

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })
    res.redirect("/login")
  } 
  catch {
    console.log(e);
    alert("Registered Successfully, Redirecting to Login Page...");
    res.redirect("/register")
  }
});

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// End outes
app.listen(3000);
