import { createContext, useEffect, useState } from "react";
import * as localStore from "../utility/services/localStorage/localStore";
import {
  addProduct,
  removeProduct,
  updateProductQuantity,
} from "../utility/cart/cartActions";
import { getProducts } from "../api/products";
import formattingData from "../utility/formattingData";
import { cartActions } from "../utility/cart/constants";

export const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState(localStore.getProducts());
  const [cart, setCart] = useState(localStore.getCart());

  useEffect(function () {
    if (!localStore.isUserOld())
      getProducts()
        .then(function (response) {
          const { products: formattedProducts } = formattingData(response.data);
          setProducts(formattedProducts);
        })
        .catch(function (error) {
          console.log(error.response);
        });
  }, []);

  function handleCart(actionType, productId) {
    let updateCart;
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        if (actionType === cartActions.INCREASE_QUANTITY) {
          product.cartCount++;
          updateCart = updateProductQuantity(product);
        } else if (actionType === cartActions.DECREASE_QUANTITY) {
          product.cartCount--;
          if (product.cartCount === 0) updateCart = removeProduct(productId);
          else updateCart = updateProductQuantity(product);
        } else if (actionType == cartActions.ADD_ITEM) {
          product.cartCount++;
          updateCart = addProduct(product);
        } else if (actionType == cartActions.REMOVE_ITEM) {
          product.cartCount = 0;
          updateCart = removeProduct(productId);
        }
      }
      return product;
    });

    localStore.saveProducts(updatedProducts);
    setProducts(updatedProducts);
    setCart(updateCart);
  }

  return (
    <ShopContext.Provider value={{ products, cart, handleCart }}>
      {children}
    </ShopContext.Provider>
  );
}
