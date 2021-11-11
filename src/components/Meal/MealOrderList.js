import React from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal";

import MealOrderItem from "./MealOrderItem";

import classes from "./MealOrderList.module.css";

const MealOrderList = (props) => {
  return (
    <Modal onHideCart={props.onHideCart}>
      <Card className={classes["meal-order-list"]}>
        {props.mealOrders.map((mealOrder) => (
          <div key={mealOrder.id}>
            <MealOrderItem
              title={mealOrder.title}
              amount={mealOrder.amount}
              count={mealOrder.count}
              key={mealOrder.id}
            />
            <br />
            <hr />
          </div>
        ))}
        <div className={classes["total-amount"]}>
          <h2>Total Amount</h2>
          <h2>{"$33.00"}</h2>
        </div>
        <div className={classes["meal-order__btn"]}>
          <button className={classes["btn1"]} onClick={props.onHideCart}>
            Close
          </button>
          <button className={classes["btn2"]}>Order</button>
        </div>
      </Card>
    </Modal>
  );
};

export default MealOrderList;
