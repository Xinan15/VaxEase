// Register.js
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />
      <button onClick={register}> Register </button>
    </div>
  );
}

export default Register;
