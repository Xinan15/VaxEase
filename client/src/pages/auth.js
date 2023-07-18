import React, { useState } from 'react';

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Register = () => {

  // Here we save the username and password from the form and send it to the server
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <Form 
    username={username} setUsername={setUsername}
    password={password} setPassword={setPassword}
    label="Register"/>
    );
};

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <Form 
    username={username} setUsername={setUsername}
    password={password} setPassword={setPassword}
    label="Login"/>
    );
};

// inside {} are the props 
const Form = ({username, setUsername, password, setPassword, label}) => {
  return (
    <div className="auth-container">
      <form>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} 
          onChange={(event)=>setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" value={password} 
          onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <button type="submit">{label}</button>
      </form>
    </div>
  );
};