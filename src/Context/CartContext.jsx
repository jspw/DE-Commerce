import { createContext, useState, useContext } from "react";
import contextTypes from "./utils/constants";
import * as localStore from "../utility/services/localStorage/localStore";

export const CartContext = createContext();
export const CartActionContext = createContext();

export default function CartContextProvider({ children }) {
  const localCart = localStore.getCart();
  const [cart, setCart] = useState(localCart);

  return (
    <CartContext.Provider value={{ cart }}>
      <CartActionContext.Provider value={{ setCart }}>
        {children}
      </CartActionContext.Provider>
    </CartContext.Provider>
  );
}
