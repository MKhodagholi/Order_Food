import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: "",
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
