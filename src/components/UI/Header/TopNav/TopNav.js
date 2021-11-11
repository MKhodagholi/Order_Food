import React from "react";

import Order from "../Order/Order";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <h2>
        <a href="#">ReactMeals</a>
      </h2>
      <Order />
    </div>
  );
};

export default TopNav;
