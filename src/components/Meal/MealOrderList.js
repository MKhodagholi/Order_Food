import React, { useContext, useState } from "react";
import CartContext from "../../context/Cart-Context";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal";

import MealOrderItem from "./MealOrderItem";
import useHttp from "../../hooks/use-http";
import Form from "../Form/Form";

import classes from "./MealOrderList.module.css";

const MealOrderList = (props) => {
  const context = useContext(CartContext);
  const { isLoading, error, sendRequest } = useHttp();
  const mealOrders = context.items;
  const totalAmount = context.totalAmount.toFixed(2);
  const [isOrder, setIsOrder] = useState(false);

  const orderSubmissionHandler = () => {
    mealOrders.forEach((meal) => {
      sendRequest({
        url: "somethingInTheWay",
        method: "POST",
        body: {
          name: meal.title,
          id: meal.id,
          amount: meal.amount,
          count: meal.count,
        },
      });
      setIsOrder(true);
    });
  };

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
          {isOrder && <Form onHideCart={props.onHideCart} />}
          <div className={classes["meal-order__btn"]}>
            {!isOrder && (
              <button className={classes["btn1"]} onClick={props.onHideCart}>
                Close
              </button>
            )}
            {mealOrders.length > 0 && !isOrder && (
              <button
                className={classes["btn2"]}
                onClick={orderSubmissionHandler}
              >
                Order
              </button>
            )}
          </div>
        </div>
      </Card>
    </Modal>
  );
};

export default MealOrderList;
