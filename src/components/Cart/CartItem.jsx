import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CartContext } from "../../Context/CartContext";
import { ShopContext } from "../../Context/ShopContext";
import handleCart from "../../utility/cart/cartActions";
import { cartActionTypes } from "../../utility/cart/cartActionTypes";

export default function CartItem({ product }) {
  const { setCartUpdated } = useContext(CartContext);
  return (
    <div className="flex flex-row justify-between items-center m-2 p-2 shadow">
      <div className="flex flex-row space-x-2 items-center justify-around align-center">
        <div>
          <LazyLoadImage
            src={product.image}
            effect="blur"
            width="64px"
            height="64px"
            className="rounded-lg p-1 w-16 h-16 object-fill"
          />
        </div>

        <div className="space-y-1">
          <div>
            <div className="text-sm text-gray-500 font-serif">
              {product.title}
            </div>
          </div>
          <div className="flex flex-row space-x-1 text-sm font-medium">
            <div className="">${product.price}</div>
            <div>x</div> <div>{product.quantity}</div>
          </div>
          <div className="flex flex-row space-x-2 text-sm">
            <button
              onClick={() => {
                handleCart(cartActionTypes.DECREASE_QUANTITY, product);
                setCartUpdated((pre) => !pre);
              }}
              className="border pl-3 pr-3"
            >
              -
            </button>
            <div>{product.quantity}</div>
            <button
              onClick={() => {
                handleCart(cartActionTypes.INCREASE_QUANTITY, product);
                setCartUpdated((pre) => !pre);
              }}
              className="border pl-3 pr-3"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            handleCart(cartActionTypes.REMOVE_ITEM, product);
            setCartUpdated((pre) => !pre);
          }}
        >
          <i className="fa fa-trash text-red-600 p-2"></i>
        </button>
      </div>
    </div>
  );
}
