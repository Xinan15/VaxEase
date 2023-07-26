import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const linkstyle = {
  textDecoration: "none",
};

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="topbar">
      <div className="logo">
        <img
          src="https://cdn.discordapp.com/attachments/752888354076360706/818719631156969502/logobw.png"
          alt="vaxtrail logo"
          className="app-logo"
        />
        <Link to="/" style={linkstyle}>
          <h3 className="brand">VaxTrail</h3>
        </Link>
      </div>

      <div className="tabs">
        <Link to="/" style={linkstyle}>
          <p className="tab-options">Home</p>
        </Link>

        <Link to="/booking" style={linkstyle}>
          <p className="tab-options">Booking</p>
        </Link>

        <Link to="/saved-recipes" style={linkstyle}>
          <p className="tab-options">Saved Recipes</p>
        </Link>

        {!cookies.access_token ? (
          <Link to="/auth" style={linkstyle}>
            <p className="tab-options">Login/Register</p>
          </Link>
        ) : (
          <button className="button" onClick={logout}>
            {" "}
            Logout{" "}
          </button>
        )}
      </div>
    </div>
  );
};
