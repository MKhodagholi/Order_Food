import React, { Fragment, useContext } from "react";

import MealDescription from "./MealDescription";
import MealSold from "./MealSold";
import classes from "./MealItem.module.css";
import MealContext from "../../context/MealContext";

const MealItem = (props) => {
  const mealContext = useContext(MealContext);
  return (
    <Fragment>
      <div className={classes["meal-item__content"]}>
        <MealDescription
          title={props.title}
          text={props.text}
          amount={props.amount}
        />
        <MealSold
          onMealAdd={() => mealContext.addMeal(props.id, props.count || 2)}
        />
      </div>
    </Fragment>
  );
};

export default MealItem;
