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
              <h3>
                <NavLink
                  to="/My_Coaching_Project"
                  className="header_array_element"
                >
                  Home
                </NavLink>
              </h3>

              <h3>
                <NavLink
                  to="My_Coaching_Project/about"
                  className="header_array_element"
                >
                  AboutUs
                </NavLink>
              </h3>

              <h3>
                <NavLink
                  to="My_Coaching_Project/courses"
                  className="header_array_element"
                >
                  Courses
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="My_Coaching_Project/gallery"
                  className="header_array_element"
                >
                  Gallery
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="My_Coaching_Project/contact"
                  className="header_array_element"
                >
                  ContactUs
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="My_Coaching_Project/result"
                  className="header_array_element"
                >
                  Results
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="My_Coaching_Project/studyfree"
                  className="header_array_element"
                >
                  FreeStudy
                </NavLink>
              </h3>
            </div>
            {/* <------------for dropdown options---------------------------> */}
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                More..
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <p>
                    <NavLink to="/My_Coaching_Project">Home</NavLink>
                  </p>

                  <p>
                    <NavLink
                      to="My_Coaching_Project/about"
                      // className="header_array_element"
                    >
                      AboutUs
                    </NavLink>
                  </p>

                  <p>
                    <NavLink
                      to="My_Coaching_Project/courses"
                      // className="header_array_element"
                    >
                      Courses
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="My_Coaching_Project/gallery"
                      // className="header_array_element"
                    >
                      Gallery
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="My_Coaching_Project/contact"
                      // className="header_array_element"
                    >
                      ContactUs
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="My_Coaching_Project/result"
                      // className="header_array_element"
                    >
                      Results
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="My_Coaching_Project/studyfree"
                      // className="header_array_element"
                    >
                      Free Study
                    </NavLink>
                  </p>
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
