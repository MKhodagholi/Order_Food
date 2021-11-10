import React from "react";

import classes from "./MealDescription.module.css";

const MealDescription = (props) => {
  return (
    <div className={classes["meal-item__description"]}>
      <div className={classes["meal-item__title"]}>{props.title}</div>
      <div className={classes["meal-item__text"]}>
        <i>{props.text}</i>
      </div>
      <div className={classes["meal-item__amount"]}>${props.amount}</div>
    </div>
  );
};

export default MealDescription;
