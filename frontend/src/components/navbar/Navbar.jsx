import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [underLind, setUnderLine] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="nav-list">
        <li
          onClick={() => setUnderLine("home")}
          className={underLind === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setUnderLine("menu")}
          className={underLind === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setUnderLine("mobile-app")}
          className={underLind === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setUnderLine("contactus")}
          className={underLind === "contactus" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="bascket" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
