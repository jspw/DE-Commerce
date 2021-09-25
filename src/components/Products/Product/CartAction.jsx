import { cartActions } from "../../../utility/cart/constants";

export default function CartAction({ productId, productQuantity, handleCart }) {
  return (
    <div className="flex flex-col  justify-center ">
      {productQuantity > 0 ? (
        <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
          <button
            className="btn text-white "
            onClick={(e) =>
              handleCart(cartActions.DECREASE_QUANTITY, productId)
            }
          >
            <i className="	fas fa-cart-arrow-down"></i>
          </button>
          <p className="text-white font-medium">{productQuantity} in cart</p>
          <button
            onClick={(e) =>
              handleCart(cartActions.INCREASE_QUANTITY, productId)
            }
            className="btn text-white"
          >
            <i className="fas fa-cart-plus"></i>
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
