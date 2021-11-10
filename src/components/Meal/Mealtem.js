import React from "react";

import MealDescription from "./MealDescription";
import MealSold from "./MealSold";
import Button from "../UI/Button/Button";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes["meal-item"]}>
      <div className={classes["meal-item__content"]}>
        <MealDescription
          title={props.title}
          text={props.text}
          amount={props.amount}
        />
        <MealSold />
      </div>
      <hr />
    </div>
  );
};

export default MealItem;
