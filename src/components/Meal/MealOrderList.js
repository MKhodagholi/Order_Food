import React, { useContext } from "react";
import CartContext from "../../context/Cart-Context";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal";

import MealOrderItem from "./MealOrderItem";

import classes from "./MealOrderList.module.css";

const MealOrderList = (props) => {
  const context = useContext(CartContext);
  const mealOrders = context.items;
  const totalAmount = context.totalAmount.toFixed(2);

  return (
    <Modal onHideCart={props.onHideCart}>
      <Card className={classes["meal-order-list"]}>
        <div>
          {mealOrders.map((mealOrder) => (
            <div key={mealOrder.id}>
              <MealOrderItem
                title={mealOrder.title}
                id={mealOrder.id}
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
            <h2>{totalAmount}</h2>
          </div>
          <div className={classes["meal-order__btn"]}>
            <button className={classes["btn1"]} onClick={props.onHideCart}>
              Close
            </button>
            {mealOrders.length > 0 && (
              <button className={classes["btn2"]}>Order</button>
            )}
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default MealOrderList;
