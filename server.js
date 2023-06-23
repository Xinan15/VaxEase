// Import libraries that we installed using npm

const express = require("express")
const bcrypt = require("bcrypt")
const app = express()

// Routes
app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.get('/login',(req,res)=>{
    res.render("login.ejs")
})

app.get('/register',(req,res)=>{
    res.render("register.ejs")
})

// End outes
app.listen(3000)