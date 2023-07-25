// LoginPage.jsx
import React from "react";

export const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
};
