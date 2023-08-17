import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Booking } from "./pages/booking";
import { MyBookings } from "./pages/mybookings";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import { Home } from "./pages/home";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
