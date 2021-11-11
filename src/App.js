import React, { useState } from "react";

import MealContext from "./context/MealContext";
import TopNav from "./components/UI/Header/TopNav/TopNav";
import MealSummary from "./components/Meal/MealSummary";
import Picture from "./components/UI/Picture/Picture";
import MealList from "./components/Meal/MealList";
import MealOrderList from "./components/Meal/MealOrderList";

const App = () => {
  const [mealOrders, setMealOrders] = useState([]);
  const mealList = [
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

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addMealHandler = (id, count) => {
    const meal = mealList.find((meal) => meal.id === id);
    const mealOrderItem = { ...meal, count };
    console.log(mealOrderItem);
  };

  const mealOrderList = [
    ...mealOrders,
    {
      title: "Sushi",
      count: 3,
      amount: 22.99,
      id: Math.random().toString(),
    },
  ];
  return (
    <MealContext.Provider value={{ addMeal: addMealHandler }}>
      <div>
        {cartIsShown && (
          <MealOrderList
            mealOrders={mealOrderList}
            onHideCart={hideCartHandler}
          />
        )}
        <TopNav onShowCart={showCartHandler} />
        <Picture />
        <MealSummary />
        <MealList meals={mealList} />
      </div>
    </MealContext.Provider>
  );
};

export default App;
