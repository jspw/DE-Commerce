import CategoryContextProvider from "../../Context/CategoryContext";
import ShopContextProvider from "../../Context/ShopContext";
import Router from "../../Navigation/Router";

export default function Wrapper() {
  return (
    <CategoryContextProvider>
      <ShopContextProvider>
        <Router />
      </ShopContextProvider>
    </CategoryContextProvider>
  );
}
