import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ShopContext } from "../../Context/ShopContext";
import { cartActionTypes } from "../../utility/cart/cartActionTypes";

export default function CartItem({
  product: { id, title, image, cartCount, price },
}) {
  const { handleCart } = useContext(ShopContext);

  return (
    <div className="flex flex-row justify-between items-center m-2 p-2 shadow">
      <div className="flex flex-row space-x-2 items-center justify-around align-center">
        <div>
          <LazyLoadImage
            src={image}
            effect="blur"
            width="64px"
            height="64px"
            className="rounded-lg p-1 w-16 h-16 object-fill"
          />
        </div>

        <div className="space-y-1">
          <div>
            <div className="text-sm text-gray-500 font-serif">{title}</div>
          </div>
          <div className="flex flex-row space-x-1 text-sm font-medium">
            <div className="">${price}</div>
            <div>x</div> <div>{cartCount}</div>
          </div>
          <div className="flex flex-row space-x-2 text-sm">
            <button
              onClick={() => handleCart(cartActionTypes.DECREASE_QUANTITY, id)}
              className="border pl-3 pr-3"
            >
              -
            </button>
            <div>{cartCount}</div>
            <button
              onClick={() => handleCart(cartActionTypes.INCREASE_QUANTITY, id)}
              className="border pl-3 pr-3"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => handleCart(cartActionTypes.REMOVE_ITEM, id)}>
          <i className="fa fa-trash text-red-600 p-2"></i>
        </button>
      </div>
    </div>
  );
}
