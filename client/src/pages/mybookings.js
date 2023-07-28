import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const MyBookings = () => {
  const [cookies] = useCookies(["access_token"]);
  return (
    <>
      {cookies.access_token ? (
        <div className="booking">
          <AllBookings />
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
    <div className={alert}>
      <h1>Please Login to See Your Bookings</h1>
      <Link to="/auth"> <h2 style={{ color:'#608dfd', textDecoration:"underline", fontSize:"22px"}}>Login/Register</h2> </Link>
    </div>
  );
};

export const AllBookings = () => {
  // All Bookings
  const [allBookings, setAllBookings] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bookings");
        setAllBookings(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    // const fetchMyBookings = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:3001/bookings/savedBookings/ids/${userID}`
    //     );
    //     setMyBookings(response.data.savedBookings);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    fetchAllBookings();
    // fetchMyBookings();
  }, []);

  return (
    <div className="bookingContainer">
      <h1>Bookings</h1>
      <ul>
        {allBookings.map((booking) => (
          <li key={booking._id}>
            <div>
              <h2>{booking.title}</h2>
              <h2>{booking.fname}</h2>
              <h2>{booking.lname}</h2>
              <h2>{booking.dob}</h2>
              <h2>{booking.gender}</h2>
              <h2>{booking.phone}</h2>
              <h2>{booking.email}</h2>
              <h2>{booking.city}</h2>
              <h2>{booking.postcode}</h2>
              <h2>{booking.address1}</h2>
              <h2>{booking.address2}</h2>
              <h2>{booking.type}</h2>
              <h2>{booking.date}</h2>
              <h2>{booking.slot}</h2>
              <h2>{booking.info}</h2>
            </div>
            <p>End</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
