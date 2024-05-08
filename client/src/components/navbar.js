import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Function: Navigate To Contact
  const navigateToContact = (e) => {
    e.preventDefault(); // Prevent the default link click action
    navigate("/"); // Navigate to the home page

    // After navigating, scroll to the contact section
    setTimeout(() => {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust this delay as needed
  };

  // Function: Navigate To Home Top
  const navigateToTop = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Function: Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 使用 useEffect 监听路由变化，每次路由变化时都滚动到顶部
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="/">
            VAXEASE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a>
                <Link to="/" onClick={navigateToTop} style={{ color: "#555" }}>
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/booking" onClick={scrollToTop} style={{ color: "#555" }}>
                  Booking
                </Link>
              </a>
            </li>

            <li>
              <a>
                <Link to="/mybookings" onClick={scrollToTop} style={{ color: "#555" }}>
                  My Bookings
                </Link>
              </a>
            </li>
            <li>
              <a to="#contact" onClick={navigateToContact}>
                Contact
              </a>
            </li>

            <li>
              {!cookies.access_token ? (
                <Link to="/auth" onClick={scrollToTop}>
                  <a>Login/Register</a>
                </Link>
              ) : (
                <a style={{ color: "#608dfd" }} onClick={logout}>
                  {" "}
                  Logout{" "}
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
