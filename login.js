import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if(response.data.auth) {
        localStorage.setItem("token", response.data.token);
        setLoginStatus("Successfully logged in!");
      } else {
        setLoginStatus(response.data.message);
      }
    });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}> Login </button>
      <h1>{loginStatus}</h1>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/password-forgotten">Forgot your password?</Link>
    </div>
  );
}

export default Login;