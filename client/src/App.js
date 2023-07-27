import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Booking } from "./pages/booking";
import { MyBookings } from "./pages/mybookings";
import { Header } from "./components/header";
import { Data } from "./components/data";
import { About } from "./components/about";
import { Services } from "./components/services";
import { News } from "./components/news";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";

function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const Home = () => (
    <div>
      <Header data={landingPageData.Header} />
      <Data data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <News data={landingPageData.News} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );

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