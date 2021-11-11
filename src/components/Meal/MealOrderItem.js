import React from "react";

import classes from "./MealOrderItem.module.css";

const MealOrderItem = (props) => {
  return (
    <div className={classes["meal-order-item"]}>
      <div className={classes["meal-order-item__content"]}>
        <h2>{props.title}</h2>
        <div className={classes["meal-order-item__num"]}>
          <div className={classes.amount}>{`$${props.amount}`}</div>
          <div className={classes.count}>{`‍‍‍‍×${props.count}`}</div>
        </div>
      </div>
      <div className={classes["meal-order-item__btn"]}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default MealOrderItem;
