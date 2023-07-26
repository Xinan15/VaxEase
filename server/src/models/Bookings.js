const mongoose = require("mongoose");
const BookingsSchema = new mongoose.Schema({
  title: { type: Object },
  fname: { type: String },
  lname: { type: String },
  dob: { type: String },
  gender: { type: String },
  phone: { type: String },
  email: { type: String },
  city: { type: String },
  postcode: { type: String },
  address1: { type: String },
  address2: { type: String },
  type: { type: Object },
  date: { type: String },
  slot: { type: Object },
});

export const BookingsModel = mongoose.model("Bookings", BookingsSchema);