import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StateContext } from "../../Context/StateContext";
import handleCart from "../../utility/cart/cartActions";
import { cartActionTypes } from "../../utility/cart/cartActionTypes";

export default function CartItem({ product }) {
  const { setStateChanged } = useContext(StateContext);
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
                setStateChanged((pre) => !pre);
              }}
              className="border pl-3 pr-3"
            >
              -
            </button>
            <div>{product.quantity}</div>
            <button
              onClick={() => {
                handleCart(cartActionTypes.INCREASE_QUANTITY, product);
                setStateChanged((pre) => !pre);
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
            setStateChanged((pre) => !pre);
          }}
        >
          <i className="fa fa-trash text-red-600 p-2"></i>
        </button>
      </div>
    </div>
  );
}
