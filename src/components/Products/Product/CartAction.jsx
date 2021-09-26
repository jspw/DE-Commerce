import {
  cartActions,
  cartActionTypes,
} from "../../../utility/cart/cartActionTypes";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export default function CartAction({ product }) {
  const { handleCart, cart } = useContext(CartContext);

  return (
    <div className="flex flex-col  justify-center ">
      {cart.get(product.id) ? (
        <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
          <button
            className="btn text-white border border-transparent hover:border-white"
            onClick={(e) =>
              handleCart(cartActionTypes.DECREASE_QUANTITY, product)
            }
          >
            <RemoveIcon />
          </button>
          <p className="text-white font-medium">
            {cart.get(product.id).quantity} in cart
          </p>
          <button
            onClick={(e) =>
              handleCart(cartActionTypes.INCREASE_QUANTITY, product)
            }
            className="btn text-white border border-transparent  hover:border-white"
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        <button
          onClick={(e) => handleCart(cartActionTypes.ADD_ITEM, product)}
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
