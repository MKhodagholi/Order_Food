import React, { useState } from "react";

import TopNav from "./components/UI/Header/TopNav/TopNav";
import MealSummary from "./components/Meal/MealSummary";
import Picture from "./components/UI/Picture/Picture";
import MealList from "./components/Meal/MealList";
import MealOrderList from "./components/Meal/MealOrderList";
import CartProvider from "./context/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <MealOrderList onHideCart={hideCartHandler} />}
      <TopNav onShowCart={showCartHandler} />
      <Picture />
      <MealSummary />
      <MealList />
    </CartProvider>
  );
};

export default App;
