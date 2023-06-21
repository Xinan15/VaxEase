// PasswordForgotten.js
import React, { useState } from "react";
import axios from "axios";

function PasswordForgotten() {
  const [email, setEmail] = useState("");

  const submit = () => {
    axios.post("http://localhost:3001/password-forgotten", {
      email: email
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="PasswordForgotten">
      <h1>Forgot Your Password?</h1>
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={submit}> Submit </button>
    </div>
  );
}

export default PasswordForgotten;