// Schema:
// A Schema defines the structure of your data by specifying what properties your data objects have and what type they are.

// Model:
// A Model is built upon the Schema, which provides an interface for interacting with a specific part of your database.
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true }, // 'email' is not required, but it is unique if it exists
  role: { type: String }, // Here to differentiate between 'admin' and regular 'user'
});
export const UserModel = mongoose.model("Users", UserSchema);
