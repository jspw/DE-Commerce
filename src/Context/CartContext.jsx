import { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [isCartUpdated, setCartUpdated] = useState(false);

  return (
    <CartContext.Provider value={{ isCartUpdated, setCartUpdated }}>
      {children}
    </CartContext.Provider>
  );
}
