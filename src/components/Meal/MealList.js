import React from "react";

import MealItem from "./Mealtem";
import Card from "../UI/Card/Card";

import classes from "./MealList.module.css";

const MealList = (props) => {
  return (
    <Card className={classes["meal-list"]}>
      {props.meals.map((meal) => (
        <MealItem
          key={meal.id}
          title={meal.title}
          text={meal.text}
          id={meal.id}
          amount={meal.amount}
        />
      ))}
    </Card>
  );
};

export default MealList;
