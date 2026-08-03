import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p>
            Craving delicious, fresh tomatoes? Look no further! Our tomato delivery service brings the juiciest, ripest tomatoes straight to your doorstep. Order now and taste the difference!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>123 bole, Addis Ababa, Ethiopia</li>
            <li>Email: info@tomato.com</li>
            <li>Phone: +251 11 123 4567</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copy © 2026 Tomato. All rights reserved.</p>
    </div>
  );
};

export default Footer;
