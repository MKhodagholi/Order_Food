import React, { useContext, useState } from "react";

import TopNav from "./components/UI/Header/TopNav/TopNav";
import MealSummary from "./components/Meal/MealSummary";
import Picture from "./components/UI/Picture/Picture";
import MealList from "./components/Meal/MealList";
import MealOrderList from "./components/Meal/MealOrderList";
import CartProvider from "./context/CartProvider";
import CartContext from "./context/Cart-Context";
import Card from "./components/UI/Card/Card";

const App = () => {
  const context = useContext(CartContext);
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
      {/* {context.items.length > 0 ? ( */}
      <MealList />
      {/* ) : (
        <Card
          style={{
            width: "50%",
            margin: "2rem auto",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>No Meals Found...</p>
        </Card>
      )} */}
    </CartProvider>
  );
};

export default App;
