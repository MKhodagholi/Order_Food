import React from "react";

import "./Order.css";
import Button from "../Button/Button";

const Order = () => {
  return (
    <Button className="order">
      <div className="icon">
        <i className="fa fa-shopping-cart"></i>
      </div>
      <div className="your-cart">
        Your Cart <span>0</span>
      </div>
    </Button>
  );
};

export default Order;
