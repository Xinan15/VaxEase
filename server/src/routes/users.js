// This file contains all the routes for the users
// routes folder - to separate our API endpoints into different routes
// users.js encompass everything related to login and register
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

// here we set up the router
const router = express.Router();

// each callback function in express has request and response variables
// request - get from the frontend
// response - send back to the frontend

router.post("/register", async (req, res) => {
  // To get the username and password from the request body
  const { username, password } = req.body;
  // To check if the username already exists in the database
  // username = username: username
  const user = await UserModel.findOne({ username });
  // If the username already exists...
  if (user) {
    return res.json({ error: "Username already exists." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  // if the username and password are valid, we will create a token
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
  // Here we are sending two fields back to the frontend: token field and userID field
});

export { router as userRouter };

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
