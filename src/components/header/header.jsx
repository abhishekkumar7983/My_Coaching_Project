import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import Carousel from "../testimonial/testimonial";
import Contactus from "../contactus/contactus";
import { Link, NavLink } from "react-router-dom";
import dropdown from "../../images/dropdown.png";
import favicon from "../../images/favicon.png";

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

  const closeDropdown = () => {
    setShowDropdown(false); // Close the dropdown
  };

  return (
    <>
      <nav>
        <div className="home_Container " id="home">
          <div className="header">
            <Link to="/">
              <div className="coaching_header_title">
                <span>
                  <img src={favicon} height={40} width={40} />
                </span>
                <img className="logo_image" src={logo} />
              </div>
            </Link>
            <div className="headers_options">
              <h3>
                <NavLink
                  to="/"
                  className="header_array_element"
                >
                  Home
                </NavLink>
              </h3>

              <h3>
                <NavLink
                  to="/about"
                  className="header_array_element"
                >
                  AboutUs
                </NavLink>
              </h3>

              <h3>
                <NavLink
                  to="/courses"
                  className="header_array_element"
                >
                  Courses
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/gallery"
                  className="header_array_element"
                >
                  Gallery
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/contact"
                  className="header_array_element"
                >
                  ContactUs
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/result"
                  className="header_array_element"
                >
                  Results
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/studyfree"
                  className="header_array_element"
                >
                  FreeStudy
                </NavLink>
              </h3>
            </div>
            {/* <------------for dropdown options---------------------------> */}
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>
                More{" "}
                <span>
                  {" "}
                  <img src={dropdown} height={15} width={25} />
                </span>
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <p>
                    <NavLink to="/" onClick={closeDropdown} >Home</NavLink>
                  </p>

                  <p>
                    <NavLink
                      to="/about" onClick={closeDropdown}
                      // className="header_array_element"
                    >
                      AboutUs
                    </NavLink>
                  </p>

                  <p>
                    <NavLink
                      to="/courses" onClick={closeDropdown}
                      // className="header_array_element"
                    >
                      Courses
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/gallery" onClick={closeDropdown}
                      // className="header_array_element"
                    >
                      Gallery
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/contact" onClick={closeDropdown}
                      // className="header_array_element"
                    >
                      ContactUs
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/result" onClick={closeDropdown}
                      // className="header_array_element"
                    >
                      Results
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to="/studyfree" onClick={closeDropdown}
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
