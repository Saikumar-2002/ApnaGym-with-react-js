import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/Y__2_-removebg-preview.png";
import bars from "../assets/menus.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light Nav_main">
      <div className="container nav_small">
        <Link className="logo" to="/">
          <img src={logo} alt="logo not found" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? "X" : <img src={bars} alt="menu" />}
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <Link className="nav-link" to="/" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="900"
            >
              <Link className="nav-link" to="/AboutUs" onClick={toggleNavbar}>
                About Us
              </Link>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <Link className="nav-link" to="/BestOffer" onClick={toggleNavbar}>
                Program
              </Link>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1100"
            >
              <Link className="nav-link" to="/BestPlan" onClick={toggleNavbar}>
                Membership
              </Link>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
            >
              <Link className="nav-link" to="/Footer" onClick={toggleNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-md-4">
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="1200"
            >
              <Link className="btn1" to="/Detail" onClick={toggleNavbar}>
                Join Now
              </Link>
            </li>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
