// react-router-dom is a package to create routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Booking } from "./pages/booking";
// import { Home } from "./pages/home";
import { MyBookings } from "./pages/mybookings";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
// import { Contact } from "./components/contact";
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
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
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
          <Route path="/newpage" element={
          <>
          
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
