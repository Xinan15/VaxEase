// index.js is where this app starts
// express is a node.js framework to create api
// cors is a node.js package for setting up the cors policy between frontend and backend
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { bookingsRouter } from "./routes/bookings.js";
import { UserModel } from "./models/Users.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// whenever you send data to the front end, it is going to be in json format
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/bookings", bookingsRouter);

mongoose.connect(process.env.SECRET_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // somehow to make the warning go away
  // start
}).then(() => {
  UserModel.collection.dropIndex('email_1')
    .then(() => console.log("Email index dropped"))
    .catch(err => console.log("Error dropping index:", err));

    UserModel.collection.dropIndex('phone_1')
    .then(() => console.log("Phone index dropped"))
    .catch(err => console.log("Error dropping phone index:", err));

});
// end

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
