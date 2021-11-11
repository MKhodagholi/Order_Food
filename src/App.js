import React from "react";

import TopNav from "./components/UI/Header/TopNav/TopNav";
import MealSummary from "./components/Meal/MealSummary";
import Picture from "./components/UI/Picture/Picture";
import MealList from "./components/Meal/MealList";
import MealOrderList from "./components/Meal/MealOrderList";

const App = () => {
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

  const mealOrders = [
    {
      title: "Sushi",
      amount: 18.99,
      count: 3,
      id: Math.random().toString(),
    },
  ];
  return (
    <div>
      {/* <MealOrderList mealOrders={mealOrders} /> */}
      <TopNav />
      <Picture />
      <MealSummary />
      <MealList meals={mealList} />
    </div>
  );
};

export default App;
