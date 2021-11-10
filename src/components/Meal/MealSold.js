import React from "react";

import classes from "./MealSold.module.css";
import Button from "../UI/Button/Button";

const MealSold = () => {
  return (
    <div className={classes["meal-item__sold"]}>
      <div className={classes["meal-item__count"]}>
        <label>Amount</label>
        <input type="number" min="0" />
      </div>
      <Button>+ Add</Button>
    </div>
  );
};

export default MealSold;