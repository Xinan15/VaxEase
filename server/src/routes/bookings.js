// This file contains all the routes for the bookings
import express from "express";
import mongoose from "mongoose";
import { BookingsModel } from "../models/Bookings.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await BookingsModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new booking
router.post("/", verifyToken, async (req, res) => {
  const booking = new BookingsModel({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    city: req.body.city,
    postcode: req.body.postcode,
    address1: req.body.address1,
    address2: req.body.address2,
    type: req.body.type,
    date: req.body.date,
    slot: req.body.slot,
    info: req.body.info,
    userOwner: req.body.userOwner,
  });
  console.log(booking);

  try {
    const result = await booking.save();
    res.status(201).json({
      createdBooking: {
        _id: result._id,
        title: result.title,
        fname: result.fname,
        lname: result.lname,
        dob: result.dob,
        gender: result.gender,
        phone: result.phone,
        email: result.email,
        city: result.city,
        postcode: result.postcode,
        address1: result.address1,
        address2: result.address2,
        type: result.type,
        date: result.date,
        slot: result.slot,
        userOwner: result.userOwner,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

// Get a booking by ID
router.get("/:bookingId", async (req, res) => {
  try {
    const result = await BookingsModel.findById(req.params.bookingId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save a booking
router.put("/", async (req, res) => {
  const booking = await BookingsModel.findById(req.body.bookingID);
  const user = await UserModel.findById(req.body.userID);
  try {
    user.savedBookings.push(booking);
    await user.save();
    res.status(201).json({ savedBookings: user.savedBookings });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get id of saved bookings
router.get("/savedBookings/ids/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    res.status(201).json({ savedBookings: user?.savedBookings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get saved bookings
router.get("/savedBookings/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const savedBookings = await BookingsModel.find({
      _id: { $in: user.savedBookings },
    });

    console.log(savedBookings);
    res.status(201).json({ savedBookings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export { router as bookingsRouter };
