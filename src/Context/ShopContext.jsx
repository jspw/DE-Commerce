import { createContext, useContext, useEffect, useState } from "react";
import * as localStore from "../utility/services/localStorage/localStore";
import {
  addProduct,
  removeProduct,
  updateProductQuantity,
} from "../utility/cart/cartActions";
import { getProducts } from "../api/products";
import { CategoryActionContext } from "./CategoryContext";
import initLocalStorage from "../utility/services/localStorage/initLocalStorage";
import { getCategories } from "../utility/product/producActions";

export const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState(localStore.getProducts());
  const { setCategories } = useContext(CategoryActionContext);

  useEffect(function () {
    if (!localStore.isUserOld())
      getProducts()
        .then(function (response) {
          console.log(response.data);
          const categories = getCategories(response.data);
          initLocalStorage(response.data, categories);
          setProducts(response.data);
          setCategories(categories);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);

  // function handleCart(actionType, productId) {
  //   if (actionType === cartActions.CLEAR_CART) {
  //     const updatedProducts = products.map((product) => {
  //       product.cartCount = 0;
  //       return product;
  //     });

  //     setProducts(updatedProducts);
  //     setCart(null);
  //     localStore.saveProducts(updatedProducts);
  //     localStore.clearOrder();
  //     localStore.clearCart();
  //     return;
  //   }

  //   let updateCart;
  //   const updatedProducts = products.map((product) => {
  //     if (product.id === productId) {
  //       if (actionType === cartActions.INCREASE_QUANTITY) {
  //         product.cartCount++;
  //         updateCart = updateProductQuantity(product);
  //       } else if (actionType === cartActions.DECREASE_QUANTITY) {
  //         product.cartCount--;
  //         if (product.cartCount === 0) updateCart = removeProduct(productId);
  //         else updateCart = updateProductQuantity(product);
  //       } else if (actionType === cartActions.ADD_ITEM) {
  //         product.cartCount++;
  //         updateCart = addProduct(product);
  //       } else if (actionType === cartActions.REMOVE_ITEM) {
  //         product.cartCount = 0;
  //         updateCart = removeProduct(productId);
  //       }
  //     }
  //     return product;
  //   });

  //   localStore.saveProducts(updatedProducts);
  //   setProducts(updatedProducts);
  //   setCart(updateCart);
  // }

  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
}
