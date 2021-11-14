import React, { useContext, useRef, useState } from "react";

import classes from "./MealSold.module.css";
import Button from "../UI/Button/Button";
import CartContext from "../../context/Cart-Context";

const MealSold = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const inputAmountRef = useRef();
  const addItemButtonHandler = () => {
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    } else setIsAmountValid(true);

    props.onAddItem(enteredAmountNumber);
  };
  return (
    <div className={classes["meal-item__sold"]}>
      <div className={classes["meal-item__count"]}>
        <label>Amount</label>
        <input type="number" min="0" ref={inputAmountRef} />
      </div>
      <Button onClick={addItemButtonHandler}>+ Add</Button>
      {!isAmountValid && <p>Please Entered Valid Amount (1 - 5)</p>}
    </div>
  );
};

export default MealSold;
