import CategoryContextProvider from "../../Context/CategoryContext";
import ModalContextProvider from "../../Context/ModalContext";
import ShopContextProvider from "../../Context/ShopContext";
import Router from "../../Navigation/Router";

export default function Wrapper() {
  return (
    <ModalContextProvider>
      <CategoryContextProvider>
        <ShopContextProvider>
          <Router />
        </ShopContextProvider>
      </CategoryContextProvider>
    </ModalContextProvider>
  );
}
