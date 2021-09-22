import { createContext, useState, useContext } from "react";
// import factoryUseContext from "./utils/factoryUseContext";
import contextTypes from "./utils/constants";
import * as localStore from "../utility/services/localStorage/localStore";

export const ProductsContext = createContext();
export const ProductsActionContext = createContext();

// export function factoryUseContext(contextName, context) {
//   const ctx = useContext(context);

//   if (ctx === undefined) {
//     throw Error(
//       `use${contextName}Context must be used within a ${contextName}ContextProvider`
//     );
//   }
//   return ctx;
// }

// export const useProductsContext = factoryUseContext(
//   contextTypes.PRODUCTS_CONTEXT,
//   ProductsContext
// );

// export const useProductsActionContext = factoryUseContext(
//   contextTypes.PRODUCTS_ACTION_CONTEXT,
//   ProductsActionContext
// );

export default function ProductsContextProvider({ children }) {
  const localProducts = localStore.getProducts();
  const [products, setProducts] = useState(localProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      <ProductsActionContext.Provider value={{ setProducts }}>
        {children}
      </ProductsActionContext.Provider>
    </ProductsContext.Provider>
  );
}
