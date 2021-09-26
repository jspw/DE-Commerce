import { createContext, useState } from "react";
import CategoryContextProvider from "./CategoryContext";
import * as localStore from "../utility/services/localStorage/localStore";
import productFormatter from "../utility/product/productFormatter";
import { cartFormatter } from "../utility/cart/cartFormatter";
import { cartActionTypes } from "../utility/cart/cartActionTypes";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(localStore.getCart());

  console.log(cart);

  function handleCart(actionType, product) {
    console.log(actionType, cart);
    const updatedCartProducts = cart || new Map();

    switch (actionType) {
      case cartActionTypes.ADD_ITEM: {
        updatedCartProducts.set(product.id, productFormatter(product));
        break;
      }
      case cartActionTypes.INCREASE_QUANTITY: {
        const previousProduct = updatedCartProducts.get(product.id);
        previousProduct.quantity++;

        updatedCartProducts.set(product.id, productFormatter(previousProduct));
        break;
      }
      case cartActionTypes.DECREASE_QUANTITY: {
        const previousProduct = updatedCartProducts.get(product.id);

        if (previousProduct.quantity === 1)
          updatedCartProducts.delete(product.id);
        else {
          previousProduct.quantity--;
          updatedCartProducts.set(
            product.id,
            productFormatter(previousProduct)
          );
        }

        break;
      }
    }

    localStore.saveCart(updatedCartProducts);
    setCart(localStore.getCart());
  }

  //   function increaseQuantity(productId) {}

  //   function decreaseQuantity(productId) {}

  //   function addProduct(product) {}

  //   function removeProduct(id) {
  //     productId
  //   }

  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}
