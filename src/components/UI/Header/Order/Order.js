import React, { useContext, useEffect, useState } from "react";

import classes from "./Order.module.css";
import Button from "../../Button/Button";
import CartContext from "../../../../context/Cart-Context";

const Order = (props) => {
  const context = useContext(CartContext);
  const numberOfItem = context.items.reduce((currNumber, item) => {
    return currNumber + item.count;
  }, 0);
  const [showBumpButton, setShowBumpButton] = useState(true);
  useEffect(() => {
    setShowBumpButton(true);
    setTimeout(() => {
      setShowBumpButton(false);
    }, 100);
  }, [context.totalAmount]);

  const btnClasses = `${classes.order}  ${showBumpButton ? classes.bump : ""}`;
  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <div className={classes.icon}>
        <i className="fa fa-shopping-cart"></i>
      </div>
      <div className={classes["your-cart"]}>
        Your Cart <span>{numberOfItem}</span>
      </div>
    </Button>
  );
};

export default Order;
