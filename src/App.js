import React, { Component } from "react";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import View from "./Components/View";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} /> 
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/view" element={<View/>} />
          <Route path='*' element={<Navigate to="/login" />}/>
        </Routes>
      </Router>
    );
  }
}

export default App;


