import React, { Fragment, useContext } from "react";

import MealDescription from "./MealDescription";
import MealSold from "./MealSold";
import classes from "./MealItem.module.css";
import CartContext from "../../context/Cart-Context";

const MealItem = (props) => {
  const context = useContext(CartContext);
  const addToCartHandler = (count) => {
    context.addItem({
      id: props.id,
      amount: props.amount,
      title: props.title,
      count: count,
    });
  };

  return (
    <Fragment>
      <div className={classes["meal-item__content"]}>
        <MealDescription
          title={props.title}
          text={props.text}
          amount={props.amount}
        />
        <MealSold onAddItem={addToCartHandler} />
      </div>
    </Fragment>
  );
};

export default MealItem;
