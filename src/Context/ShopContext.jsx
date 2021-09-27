import { createContext, useContext, useEffect, useState } from "react";
import * as localStore from "../utility/services/localStorage/localStore";
import { getProducts } from "../api/products";
import { CategoryActionContext } from "./CategoryContext";
import initLocalStorage from "../utility/services/localStorage/initLocalStorage";
import { getCategories } from "../utility/product/productActions";

export const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState(localStore.getProducts());
  const { setCategories } = useContext(CategoryActionContext);

  useEffect(function () {
    if (!localStore.isUserOld())
      getProducts()
        .then(function (response) {
          const categories = getCategories(response.data);
          initLocalStorage(response.data, categories);
          setProducts(response.data);
          setCategories(categories);
        })
        .catch(function (error) {
          console.log(error);
        });
  });
  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
}
