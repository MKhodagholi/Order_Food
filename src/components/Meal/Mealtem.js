import React, { Fragment } from "react";

import MealDescription from "./MealDescription";
import MealSold from "./MealSold";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <Fragment>
      <div className={classes["meal-item__content"]}>
        <MealDescription
          title={props.title}
          text={props.text}
          amount={props.amount}
        />
        <MealSold />
      </div>
    </Fragment>
  );
};

export default MealItem;
