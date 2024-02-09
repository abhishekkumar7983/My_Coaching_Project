import React, { useState } from "react";
import "./home.css";
import logo from "../../images/logo.png";
export default function Home({ header = [] }) {
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
    <div className="home_Container " id="home">
      <div className="header">
        <div className="coaching_header_title">
          <img className="logo_image" src={logo}  />
        </div>
        <div className="headers_options">
          {header.map((headerText, index) => (
            <h2 key={index} className="header_array_element">
              {headerText}
            </h2>
          ))}
           <h2> <a href="#contact_us" className="header_array_element"> 
            ContactUs
          </a>
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
  );
}
