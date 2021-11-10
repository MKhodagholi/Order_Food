import React from "react";

import Card from "../UI/Card/Card";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <Card className={classes["meal-summary"]}>
      <div className={classes.title}>
        <h2>Delicious Food, Delivered To You</h2>
      </div>
      <div className={classes.text}>
        <p>
          Choose your favorite meal from our broad selection of meals and enjoy
          a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experinced chefs!
        </p>
      </div>
    </Card>
  );
};

export default MealSummary;
