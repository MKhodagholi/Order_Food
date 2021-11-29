import React, { useReducer } from "react";

import CartContext from "./Cart-Context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.count * action.item.amount;
      let updatedItems = [...state.items];
      const updatedItemIndex = state.items.findIndex(
        (item) => item.title === action.item.title
      );
      if (updatedItemIndex !== -1)
        updatedItems[updatedItemIndex].count += action.item.count;
      else updatedItems = [...updatedItems, action.item];
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.item.title
      );
      let items = [...state.items];
      const updatedItem = items[itemIndex];
      updatedItem.count -= action.item.count;
      if (updatedItem.count < 1)
        items = items.filter((item) => item.title !== action.item.title);
      else items[itemIndex] = updatedItem;
      const updatedTotalAmountForRemove =
        state.totalAmount - action.item.amount * action.item.count;
      return { items, totalAmount: updatedTotalAmountForRemove };

    case "REMOVE_ALL":
      return { items: [], totalAmount: 0 };
  }
};

const defaultCartReducer = () => {
  return { items: [], totalAmount: 0 };
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (item) => {
    dispatchCart({ type: "REMOVE", item });
  };

  const removeAllItemFromCartHandler = () => {
    dispatchCart({ type: "REMOVE_ALL" });
  };

  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    defaultCartReducer()
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAllItem: removeAllItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
