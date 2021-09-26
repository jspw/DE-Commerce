import { cartActions } from "../../../utility/cart/constants";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function CartAction({ productId, productQuantity, handleCart }) {
  return (
    <div className="flex flex-col  justify-center ">
      {productQuantity > 0 ? (
        <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
          <button
            className="btn text-white border border-transparent hover:border-white"
            onClick={(e) =>
              handleCart(cartActions.DECREASE_QUANTITY, productId)
            }
          >
            <RemoveIcon />
          </button>
          <p className="text-white font-medium">{productQuantity} in cart</p>
          <button
            onClick={(e) =>
              handleCart(cartActions.INCREASE_QUANTITY, productId)
            }
            className="btn text-white border border-transparent  hover:border-white"
          >
            <AddIcon />
          </button>
        </div>
      ) : (
        <button
          onClick={(e) => handleCart(cartActions.ADD_ITEM, productId)}
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
