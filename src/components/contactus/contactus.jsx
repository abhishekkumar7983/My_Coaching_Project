/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import "./contactus.css";
// import check from "../../assets/Check.svg";
import React, { useState } from "react";
// import { fetchDataFromApi } from "../../utils/Fetchapi";
// import { Toast } from "../../utils/Toast";
const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    purpose: "",
    message: "",
  });

  var greater = ">";
  var less = "<";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit called");
    let hasErrors = false;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required";
        hasErrors = true;
        console.log(key);
      }
    });
    // console.log("hello");
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    const data = {
      name: `${formData.firstName.trim()} ${formData.lastName}`.trim(),
      email: formData.email,
      phoneNumber: formData.phone,
      jobTitle: formData.jobTitle,
      companyName: formData.companyName,
      query: formData.message,
      employeeCount: formData.purpose,
    };
    // console.log("data",data)
    // const resp = await fetchDataFromApi(
    //   "CertificatesMoneyyappData/create",
    //   data
    // );
    // console.log("resp",resp);
    // console.log("Form submitted:", formData);
    // if (resp.error) {
    //   return;
    // }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      companyName: "",
      purpose: "",
      message: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      companyName: "",
      purpose: "",
      message: "",
    });
    Swal.fire({
      title: "Thanks for sharing your details!",
      html: "<div id='custom-text'>Our team member will reach out to you soon.</div>",
      icon: "success",
      customClass: {
        title: "your-custom-title-class",
        popup: "your-custom-popup-class",
        htmlContainer: "your-custom-html-container-class",
        confirmButton: "your-custom-confirm-button-class",
      },
    });
  };

  return (
    <div className="contact-form-container-width" id="contact_us">
      <div className="contact-form-container">
        <div className="contact-details-section">
          <p>Contact Our Teams</p>
          <p className="contact-details-section-two">
            All courses are free and available on youtube
          </p>
          <div className="contact-details-section-margin">
            <p className="contact-details-section-h2">
              <p>for more details....</p>
              You can also contact us at:
            </p>
            <p className="contact-detail-section-phone">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.7388 16.4136C21.5716 17.6839 20.9477 18.85 19.9837 19.6939C19.0196 20.5379 17.7813 21.0021 16.5 20.9998C9.05626 20.9998 3.00001 14.9436 3.00001 7.49981C2.99771 6.21852 3.4619 4.98021 4.30588 4.01615C5.14986 3.05209 6.31592 2.42822 7.58626 2.26106C7.9075 2.22184 8.2328 2.28756 8.51362 2.44841C8.79444 2.60926 9.0157 2.85662 9.14438 3.15356L11.1244 7.57387V7.58512C11.2229 7.81242 11.2636 8.06059 11.2428 8.30744C11.222 8.5543 11.1404 8.79217 11.0053 8.99981C10.9884 9.02512 10.9706 9.04856 10.9519 9.072L9.00001 11.3857C9.7022 12.8126 11.1947 14.292 12.6403 14.9961L14.9222 13.0545C14.9446 13.0357 14.9681 13.0181 14.9925 13.002C15.2 12.8636 15.4387 12.7792 15.687 12.7562C15.9353 12.7333 16.1854 12.7727 16.4147 12.8707L16.4269 12.8764L20.8434 14.8554C21.1409 14.9837 21.3889 15.2047 21.5503 15.4856C21.7116 15.7664 21.7778 16.092 21.7388 16.4136Z"
                    fill="#0D47A1"
                  />
                </svg>
              </span>
              <a href="#" className="svg-margin">
                +91 9984907494
              </a>
            </p>
            <p className="contact-detail-section-phone">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z"
                    fill="#0D47A1"
                  />
                </svg>
              </span>
              <a href="#" className="svg-margin">
                sparkupclasses@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className={`form-section ${showMessageBox ? "blur" : ""}`}>
          {/* {showMessageBox && (
            <div className="message-box">
              <p>
                <img src={check} className="form-section-checkbox" />
                <span className="form-section-popup-msg-h1">
                  Thanks for sharing your details!
                </span>
              </p>
              <p className="form-section-popup-msg-h2">
                Our team member will reach out to you soon.
              </p>
            </div>
          )} */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.firstName && "error"
                  }`}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <div className="error">{errors.firstName}</div>
              </div>
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.lastName && "error"
                  }`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <div className="error">{errors.lastName}</div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.email && "error"
                  }`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <div className="error">{errors.email}</div>
              </div>
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.phone && "error"
                  }`}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                <div className="error">{errors.phone}</div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.jobTitle && "error"
                  }`}
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                />
                <div className="error">{errors.jobTitle}</div>
              </div>
              <div className="form-group-input">
                <input
                  className={`form-section-inputfield ${
                    errors.companyName && "error"
                  }`}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                />
                <div className="error">{errors.companyName}</div>
              </div>
            </div>

            <div>
              <p className="form-section-heading">
                In which class do you currently studying?
              </p>
              <select
                className={`form-section-select ${errors.purpose && "error"}`}
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option value="">please select</option>
                <option value="11">{less} 11</option>
                <option value="1000-10,000">11-12</option>
                <option value="droper">droper(12th pass)</option>
                {/* <option value=">50,000"> {greater}50,000</option> */}
              </select>
              {/* <div className="error">{errors.purpose}</div> */}
            </div>

            <h3 className="form-section-heading">
              Please give us some information about your preparation !
            </h3>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write here..."
                className={`form-section-textarea ${errors.message && "error"}`}
              />
              {/* <div className="error">{errors.message}</div> */}
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>

          <div className="hints">
            {/* Add hints or additional information here */}
            <p>
              By submitting this form, you agree that MoneyyApp may share this
              information with its authorised solution partners, and that you
              may be contacted about this inquiry by MoneyyApp or a partner of
              MoneyyApp.
            </p>
          </div>
        </div>

        <div className="contact-details-section-margin-2">
          <p className="contact-details-section-h2">
            You can also contact us at:
          </p>
          <p className="contact-detail-section-phone">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7388 16.4136C21.5716 17.6839 20.9477 18.85 19.9837 19.6939C19.0196 20.5379 17.7813 21.0021 16.5 20.9998C9.05626 20.9998 3.00001 14.9436 3.00001 7.49981C2.99771 6.21852 3.4619 4.98021 4.30588 4.01615C5.14986 3.05209 6.31592 2.42822 7.58626 2.26106C7.9075 2.22184 8.2328 2.28756 8.51362 2.44841C8.79444 2.60926 9.0157 2.85662 9.14438 3.15356L11.1244 7.57387V7.58512C11.2229 7.81242 11.2636 8.06059 11.2428 8.30744C11.222 8.5543 11.1404 8.79217 11.0053 8.99981C10.9884 9.02512 10.9706 9.04856 10.9519 9.072L9.00001 11.3857C9.7022 12.8126 11.1947 14.292 12.6403 14.9961L14.9222 13.0545C14.9446 13.0357 14.9681 13.0181 14.9925 13.002C15.2 12.8636 15.4387 12.7792 15.687 12.7562C15.9353 12.7333 16.1854 12.7727 16.4147 12.8707L16.4269 12.8764L20.8434 14.8554C21.1409 14.9837 21.3889 15.2047 21.5503 15.4856C21.7116 15.7664 21.7778 16.092 21.7388 16.4136Z"
                  fill="#0D47A1"
                />
              </svg>
            </span>
            <a href="#" className="svg-margin">
            +91 9984907494
            </a>
          </p>
          <p className="contact-detail-section-phone">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z"
                  fill="#0D47A1"
                />
              </svg>
            </span>
            <a href="#" className="svg-margin">
             sparkupclasees@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormComponent;
