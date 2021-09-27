import {
  cartActionTypes,
} from "../../../utility/cart/cartActionTypes";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import handleCart from "../../../utility/cart/cartActions";
import * as localStore from "../../../utility/services/localStorage/localStore";

export default function CartAction({ product }) {
  const { setCartUpdated } = useContext(CartContext);
  const cart = localStore.getCart();

  return (
    <div className="flex flex-col  justify-center ">
      {cart && cart.products[product.id] ? (
        <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
          <button
            className="btn text-white border border-transparent hover:border-white"
            onClick={() => {
              handleCart(cartActionTypes.DECREASE_QUANTITY, product);
              setCartUpdated((isModified) => !isModified);
            }}
          >
            <RemoveIcon />
          </button>
          <p className="text-white font-medium">
            {cart.products[product.id].quantity} in cart
          </p>
          <button
            onClick={() => {
              handleCart(cartActionTypes.INCREASE_QUANTITY, product);
              setCartUpdated((isModified) => !isModified);
            }}
            className="btn text-white border border-transparent  hover:border-white"
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            handleCart(cartActionTypes.ADD_ITEM, product);
            setCartUpdated((isModified) => !isModified);
          }}
          className="btn text-blue-400 border rounded-md p-2 flex
    items-baseline justify-center space-x-2 "
        >
          <i className="fa fa-shopping-bag "></i>
          <p> Add to Cart</p>
        </button>
      )}
    </div>
  );
}
