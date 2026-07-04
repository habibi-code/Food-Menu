import React from "react";
import "./ExplorMenu.css";
import { menu_list } from "../../assets/assets";

export const ExplorMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Discover our delicious selection of dishes our mission is to provide the
        best dining experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name,
                  );
                }
              }}
              className="explore-menu-list-item"
              key={index}
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className={category === item.menu_name ? "activeP" : ""}>
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
