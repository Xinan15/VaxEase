import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Booking = () => {
  const [cookies] = useCookies(["access_token"]);

  return (
    <>
      {cookies.access_token ? (
        <div className="booking">
          <BookingForm />
        </div>
      ) : (
        <div className="alert">
          <Alert />
        </div>
      )}
    </>
  );
};

export const Alert = () => {
  return (
    <div className="alert">
      <h1>Please Login to Book Your Appointment</h1>
      <Link to="/auth"> <h2 style={{ color:'#608dfd', textDecoration:"underline", fontSize:"22px"}}>Login/Register</h2> </Link>
    </div>
  );
};

export const BookingForm = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [booking, setBooking] = useState({
    title: "",
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
    postcode: "",
    address1: "",
    address2: "",
    type: "",
    date: "",
    slot: "",
    info: "",
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInfoChange = (event, index) => {
    const { value } = event.target;
    const info = [...booking.info];
    info[index] = value;
    setBooking({ ...booking, info });
  };

  const handleAddInfo = () => {
    const info = [...booking.info, ""];
    setBooking({ ...booking, info });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !booking.title ||
      !booking.fname ||
      !booking.lname ||
      !booking.dob ||
      !booking.gender ||
      !booking.phone ||
      !booking.email ||
      !booking.city ||
      !booking.postcode ||
      !booking.address1 ||
      !booking.type ||
      !booking.date ||
      !booking.slot
    ) {
      alert("All fields with * must be filled out!");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3001/bookings",
        { ...booking },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      alert("Appointment Booked!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const today = new Date();

  const dateString = today.toISOString().split("T")[0];

  return (
    <div className="bookingContainer">
      <h2>Vaccine Booking</h2>
      <h3>Enter Your Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-2">
            <label htmlFor="title" className="form-label" value={booking.title}>
              Title*
            </label>
            <select
              className="form-control"
              id="title"
              name="title"
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="fname">First Name*</label>
            <input
              className="form-control"
              type="text"
              id="fname"
              name="fname"
              value={booking.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lname">Last Name*</label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="form-control"
              value={booking.lname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="gender" value={booking.gender}>
              Gender Identity*
            </label>
            <select
              className="form-control"
              id="gender"
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="Male (Including trans man)">
                Male (Including trans man)
              </option>
              <option value="Female (Including trans woman)">
                Female (Including trans woman)
              </option>
              <option value="Non-binary">Non-binary</option>
              <option value="Other">Other</option>
              <option value="Not Stated">Not Stated</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" value={booking.dob}>
              Date of Birth*
            </label>
            <input
              className="form-control"
              type="date"
              id="dob"
              name="dob"
              max={dateString}
              onChange={handleChange}
              value={booking.dob}
              required
            ></input>
          </div>
        </div>

        <h3>About you</h3>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={booking.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={booking.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="city">City*</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={booking.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="postcode">Postcode*</label>
            <input
              type="text"
              id="postcode"
              className="form-control"
              name="postcode"
              value={booking.postcode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-12">
            <label htmlFor="address1">Address line 1*</label>
            <input
              type="text"
              className="form-control"
              id="address1"
              name="address1"
              value={booking.address1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="address2">Address line 2</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              value={booking.address2}
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>I would like an appointment for</h3>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="type" value={booking.type}>
              Type*
            </label>
            <select
              id="type"
              className="form-control"
              name="type"
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="Pfizer-BioNTech 1st Dose">
                Pfizer-BioNTech 1st Dose
              </option>
              <option value="Pfizer-BioNTech 2nd Dose">
                Pfizer-BioNTech 2nd Dose
              </option>
              <option value="Pfizer-BioNTech 3rd Dose">
                Pfizer-BioNTech 3rd Dose
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              min={dateString}
              value={booking.date}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div>
            <div className="col-md-6">
              <label htmlFor="slot" value={booking.slot}>
                Slot*
              </label>
              <select
                id="slot"
                className="form-control"
                name="slot"
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="09:00 To 09:30">09:00 To 09:30</option>
                <option value="10:30 To 11:00">10:30 To 11:00</option>
                <option value="12:00 To 12:30">12:00 To 12:30</option>
                <option value="13:30 To 14:00">13:30 To 14:00</option>
                <option value="15:00 To 15:30">15:00 To 15:30</option>
                <option value="16:30 To 17:00">16:30 To 17:00</option>
              </select>
            </div>
          </div>
        </div>

        <h4>Additional Information</h4>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="info">
              <b>
                Do you have any concerns or information you would like to share
                with us?
              </b>
            </label>
          </div>

          <div className="col-md-12">
            <textarea
              type="text"
              name="info"
              id="info"
              className="form-control"
              rows="4"
              placeholder="Message"
              onChange={handleChange}
              value={booking.info}
              style={{resize: "none"}}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="button btn btn-custom btn-lg page-scroll"
              style={{marginTop: "20px"}}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
