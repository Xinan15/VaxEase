// react-router-dom is a package to create routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Booking } from "./pages/booking";
import { Home } from "./pages/home";
import { MyBookings } from "./pages/mybookings";
function App() {
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
