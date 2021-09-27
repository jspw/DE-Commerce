import { Link } from "react-router-dom";
import Address from "./Address";
import OrderPreview from "./OrderPreview";
import { cartActionTypes } from "../../utility/cart/cartActionTypes";
import handleCart from "../../utility/cart/cartActions";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  const { setCartUpdated } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row justify-center  sm:flex-col xs:flex-col">
        <OrderPreview />
        <Address />
      </div>

      <Link
        onClick={() => {
          handleCart(cartActionTypes.CLEAR_CART);
          setCartUpdated((pre) => !pre);
        }}
        to={{
          pathname: "/order-complete",
          done: "done",
        }}
        className="btn bg-blue-500 text-white p-1  shadow text-center"
      >
        Place Order
      </Link>
    </div>
  );
}
