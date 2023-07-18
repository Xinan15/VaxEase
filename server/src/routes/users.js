// routes folder - to separate our API endpoints into different routes
// users.js encompass everything related to login and register
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../model/user.js';

// here we set up the router
const router = express.Router();

// each callback function in express has request and response variables
// request - get from the frontend
// response - send back to the frontend

router.post("/register", async (req, res) => {
    // To get the username and password from the request body
    const { username, password } = req.body;
    // To check if the username already exists in the database
    const user = await UserModel.findOne({username});
    // If the username already exists, send back a response to the frontend
    res.json(user);
});

router.post("/login")

export { router as userRouter };