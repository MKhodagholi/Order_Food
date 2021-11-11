import React from "react";

import MealItem from "./Mealtem";
import Card from "../UI/Card/Card";
import classes from "./MealList.module.css";

const MealList = (props) => {
  return (
    <Card className={classes["meal-list"]}>
      {props.meals.map((meal) => (
        <div className={classes["meal-item"]} key={meal.id}>
          <MealItem
            key={meal.id}
            title={meal.title}
            text={meal.text}
            id={meal.id}
            amount={meal.amount}
          />
          <hr />
        </div>
      ))}
    </Card>
  );
};

export default MealList;
