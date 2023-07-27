import React, { useState } from "react";
// axios is a replacement for the fetch api
import axios from "axios";
// useCookies is to access the cookies
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import authcss from "./authCSS.module.css";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  // Here we don't need to access the cookies, instead, we need to access the setCookie function
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // response.data is the token
      // the token is we sending jwt token from the server to the client
      // we want to save the token in the local storage
      // which means we can set token into the cookies

      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      // Here means we set the access_token as the key and the response.data.access_token as the value
      setCookies("access_token", result.data.token);
      // To store the userID field sending back from the server into the local storage, so we can quick access to it

      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-custom btn-lg">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  // Here we save the username and password from the form and send it to the server
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Here we don't need to access the cookies, instead, we need to access the setCookie function
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // this prevents the page from refreshing
    event.preventDefault();
    try {
      // use axios to send post request to server/api
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            className="form-control"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            className="form-control"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="btn btn-custom btn-lg" type="submit">Register</button>
      </form>
    </div>
  );
};
