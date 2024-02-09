import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import Carousel from "../testimonial/testimonial";
import Contactus from "../contactus/contactus";
import { Link, NavLink } from "react-router-dom";

export default function Header({ header = [] }) {
  // console.log('header prop.....',header);
  // // const headerJson = JSON.stringify(header);
  // const text_gap=[
  //   'mr-5',
  // ]

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav>
        <div className="home_Container " id="home">
          <div className="header">
            <Link to="/">
              <div className="coaching_header_title">
                <img className="logo_image" src={logo} />
              </div>
            </Link>
            <div className="headers_options">
              <h2 className="header_array_element">
                <NavLink to="/">Home</NavLink>
              </h2>

              <h2 className="header_array_element">
                <NavLink to="/about">AboutUs</NavLink>
              </h2>

              <h2 className="header_array_element">
                <NavLink to="/courses">Courses</NavLink>
              </h2>
              <h2 className="header_array_element">
                <NavLink to="/gallery">Gallery</NavLink>
              </h2>
              <h2 className="header_array_element">
                <NavLink to="/contact">ContactUs</NavLink>
              </h2>
            </div>
            {/* <------------for dropdown options---------------------------> */}
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                More..
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="#home">Home</a>
                  <a href="#about">About Us</a>
                  <a href="#contact_us">Contact Us</a>
                  <a href="#courses">Courses</a>
                </div>
              )}
            </div>
            {/* <------------------- dropdown option ends---------------------> */}
          </div>
          {/* <hr className="border-line" /> */}
        </div>
      </nav>
    </>
  );
}
