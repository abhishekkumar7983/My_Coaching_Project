import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_heading">
          <h2>Sparkup Classes</h2>
        </div>
        <div className="footer_contact_details">
          <div className="contact_info">
            <a href="https://www.youtube.com/@SparkupClasses">
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </div>
          <div className="contact_info">
           <span style={{marginRight:"10px"}}><i className="fas fa-phone-alt"></i></span>
            <span>Mobile Number: +917887003010  or +916393798060</span>
          </div>
          <div className="contact_info">
            <i className="far fa-envelope"></i>
            <span style={{marginLeft:"10px"}}>Email: Sparkupclasses@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <i className="social_media_icon fab fa-facebook-f"></i>
        <i className="social_media_icon fab fa-twitter"></i>
        <i className="social_media_icon fab fa-instagram"></i>
        <i className="social_media_icon fab fa-whatsapp"></i>
      </div>
      <div className="copyright">
        <p>&copy; Sparkup Classes : All rights reserved</p>
      </div>
    </footer>
  );
}
