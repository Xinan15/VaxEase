import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <a className="navbar-brand page-scroll" href="/">
            VAXEASE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                <Link to="/booking">Booking</Link>
              </a>
            </li>

            <li>
              <a href="#contact">
                <Link to="/mybookings">My Bookings</Link>
              </a>
            </li>

            <li>
              {!cookies.access_token ? (
                <Link to="/auth">
                  <p className="tab-options">Login/Register</p>
                </Link>
              ) : (
                <button className="button" onClick={logout}>
                  {" "}
                  Logout{" "}
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
