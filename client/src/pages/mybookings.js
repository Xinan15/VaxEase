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
        <div className="allbookings">
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
      <div className="row"><div className="col-md-6">
        <h2>All Bookings</h2></div></div>
      <ul>
        {allBookings.map((booking) => (
          <li key={booking._id}>
            <div className="row">
              <div className="col-md-12">
              <div className="col-md-3">
                <p>Name</p>
                </div>
                <div className="col-md-9">
                <p>{booking.title+" "+booking.fname+" "+booking.lname}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-3"><p>Date of Birth</p></div>
                <div className="col-md-9"><p>{booking.dob}</p></div>
                </div>
              <div className="col-md-12">
                <div className="col-md-3"><p>Gender</p></div>
                <div className="col-md-9"><p>{booking.gender}</p></div>
                </div>
              <div className="col-md-12">
                <div className="col-md-3"><p>Phone Number</p></div>
                <div className="col-md-9"><p>{booking.phone}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p>Email</p></div>
                <div className="col-md-9"><p>{booking.email}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p>Address</p></div>
                <div className="col-md-9"><p>{booking.address1}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p></p></div>
                <div className="col-md-9"><p>{booking.address2}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p>Date</p></div>
                <div className="col-md-9"><p>{booking.date+" - "+booking.slot}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p>Type</p></div>
                <div className="col-md-9"><p>{booking.type}</p></div>
                </div>

                <div className="col-md-12">
                <div className="col-md-3"><p>Additional Info</p></div>
                <div className="col-md-9"><p>{booking.info}</p></div>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
