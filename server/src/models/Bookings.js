import mongoose from "mongoose";

const BookingsSchema = new mongoose.Schema({
  title: { type: Object, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  type: { type: Object, required: true },
  date: { type: String, required: true },
  slot: { type: Object, required: true },
  info: { type: String },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const BookingsModel = mongoose.model("Bookings", BookingsSchema);
