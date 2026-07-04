import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favorite food here</h1>
        <p>
          Choose from a wide variety of delicious dishes and have them delivered
          to your table.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
