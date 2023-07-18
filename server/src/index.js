// index.js is where this app starts
// express is a node.js framework to create api
// cors is a node.js package for setting up the cors policy between frontend and backend
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './routes/users.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// whenever you send data to the front end, it is going to be in json format
app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);

mongoose.connect(process.env.SECRET_KEY);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}
);
