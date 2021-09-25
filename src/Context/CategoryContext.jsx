import { createContext, useState } from "react";
import * as localStore from "../utility/services/localStorage/localStore";

export const CategoryContext = createContext();
export const CategoryActionContext = createContext();

export default function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState(localStore.getCategories());

  return (
    <CategoryContext.Provider value={{ categories }}>
      <CategoryActionContext.Provider value={{ setCategories }}>
        {children}
      </CategoryActionContext.Provider>
    </CategoryContext.Provider>
  );
}
