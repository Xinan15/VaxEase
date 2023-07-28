import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true }, // 'email' is not required, but it is unique if it exists
});
export const UserModel = mongoose.model("Users", UserSchema);
