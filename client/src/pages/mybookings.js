import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export const MyBookings = () => {
  const [cookies] = useCookies(["access_token"]);
  // 结构 {cookies.access_token ? ( <AllBookings /> ) : ( <Alert /> )}
  // 三元运算符，用于根据条件渲染不同的组件
  // 如果 cookies.access_token 存在，表示用户已登录
  // 用户登陆则渲染 AllBookings 组件展示用户预约记录，否则渲染 Alert 组件，提示登陆后查看
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

// Alert 组件，提示用户登陆后查看预约记录
export const Alert = () => {
  return (
    <div>
      <h1>Please log in to view your appointment records.</h1>
      <Link to="/auth">
        {" "}
        <h2
          style={{
            color: "#608dfd",
            textDecoration: "underline",
            fontSize: "22px",
          }}
        >
          Login/Register
        </h2>{" "}
      </Link>
    </div>
  );
};

// AllBookings 组件，展示用户的预约记录
export const AllBookings = () => {
  // All Bookings
  const [allBookings, setAllBookings] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/bookings/${userID}`
        );
        setAllBookings(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBookings();
  }, [userID]);

  return (
    <div className="bookingContainer">
      <div className="row">
        <div className="col-md-6">
          <h2>All Bookings</h2>
        </div>
      </div>
      <ul>
        {allBookings.map((booking) => (
          <li key={booking._id}>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Name</p>
                </div>
                <div className="col-md-9">
                  <p>
                    {booking.title + " " + booking.fname + " " + booking.lname}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Date of Birth</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.dob}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Gender</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.gender}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Phone Number</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.phone}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Email</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.email}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Address</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.address1}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p></p>
                </div>
                <div className="col-md-9">
                  <p>{booking.address2}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Date</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.date + " - " + booking.slot}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Type</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.type}</p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-3">
                  <p>Additional Info</p>
                </div>
                <div className="col-md-9">
                  <p>{booking.info}</p>
                </div>
              </div>
              <hr style={{ background: "#608dfd" }}></hr>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
