import { Link } from "react-router-dom";
import Address from "./Address";
import OrderPreview from "./OrderPreview";

import * as localStore from "../../utility/services/localStorage/localStore";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Checkout() {
  const { handleCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around  sm:flex-col xs:flex-col">
        <Address />
        <OrderPreview />
      </div>

      <Link
        onClick={handleCart}
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
