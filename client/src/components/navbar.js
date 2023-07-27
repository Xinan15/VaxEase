import React, { useEffect } from 'react';
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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

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
              <a>
                <Link to="/" style={{ color:'#555' }}>Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/booking" style={{ color:'#555' }}>Booking</Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/mybookings" style={{ color:'#555' }}>My Bookings</Link>
              </a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>

            <li>
              {!cookies.access_token ? (
                <Link to="/auth" style={{ color:'#555'}}>
                  <a>Login/Register</a>
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
