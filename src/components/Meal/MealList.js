import React, { useContext, useEffect, useState } from "react";

import MealItem from "./Mealtem";
import Card from "../UI/Card/Card";
import classes from "./MealList.module.css";
import CartContext from "../../context/Cart-Context";
import useHttp from "../../hooks/use-http";

const MealList = (props) => {
  const meals = [
    {
      title: "Sushi",
      text: "Finest fish and veggies",
      amount: 22.99,
      id: Math.random().toString(),
    },
    {
      title: "schnitzel",
      text: "A german specialty",
      amount: 16.5,
      id: Math.random().toString(),
    },
    {
      title: "Barbecue Burger",
      text: "American, raw, meaty",
      amount: 12.99,
      id: Math.random().toString(),
    },
    {
      title: "Green Bowl",
      text: "Healthy...and green...",
      amount: 18.99,
      id: Math.random().toString(),
    },
  ];
  /*   const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    const transformMeals = (objMeal) => {
      const loadedMeals = [];
      for (const mealKey in objMeal) {
        loadedMeals.push({
          id: mealKey,
          title: objMeal.title,
          text: objMeal.text,
          amount: objMeal.amount,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals({ url: "url" }, transformMeals);
  }, []); */

  const context = useContext(CartContext);
  return (
    <Card className={classes["meal-list"]}>
      {meals.map((meal) => (
        <div className={classes["meal-item"]} key={meal.id}>
          <MealItem
            key={meal.id}
            title={meal.title}
            text={meal.text}
            id={meal.id}
            amount={meal.amount}
            addItemHandler={context.addItem}
          />
          <hr />
        </div>
      ))}
    </Card>
  );
};

export default MealList;
