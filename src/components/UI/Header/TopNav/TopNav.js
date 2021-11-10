import React from "react";

import Order from "../Order/Order";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <h2>ReactMeals</h2>
      <Order />
    </div>
  );
};

export default TopNav;
