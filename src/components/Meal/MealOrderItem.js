import React, { useContext } from "react";
import CartContext from "../../context/Cart-Context";

import classes from "./MealOrderItem.module.css";

const MealOrderItem = (props) => {
  const context = useContext(CartContext);
  const cartItemRemoveHandler = () => {
    context.removeItem({
      title: props.title,
      amount: props.amount,
      count: 1,
    });
  };
  const cartItemAddHandler = () => {
    context.addItem({
      title: props.title,
      id: props.id,
      amount: props.amount,
      count: 1,
    });
  };
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
        <button onClick={cartItemRemoveHandler}>-</button>
        <button onClick={cartItemAddHandler}>+</button>
      </div>
    </div>
  );
};

export default MealOrderItem;
