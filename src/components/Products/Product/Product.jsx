import { useContext } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import StarRatings from "react-star-ratings";
import { cartActions } from "../../../utility/cart/constants";
import { ShopContext } from "../../../Context/shopContext";

export default function Product({
  product: { id, title, price, image, cartCount, rating },
}) {
  const { handleCart } = useContext(ShopContext);
  return (
    <LazyLoadComponent>
      <div className="m-2 p-2 col-span-1 cursor-pointer flex flex-col justify-between  hover:shadow-2xl rounded-lg ">
        <div className="space-y-4 p-2  flex flex-col justify-between">
          <div className="flex justify-center">
            <LazyLoadImage
              src={image}
              effect="blur"
              className="w-48 h-48 transition duration-700 ease-in-out transform rounded-lg hover:w-50  hover:scale-110"
            />
          </div>
          <div>
            <p className="text-center font-serif text-gray-600">{title}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4 flex flex-col items-center">
            <StarRatings
              rating={rating}
              starRatedColor="blue"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
            <p className="font-semibold text-lg text-blue-500">${price}</p>
          </div>
          <div className="flex flex-col  justify-center ">
            {cartCount > 0 ? (
              <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
                <button
                  className="btn text-white "
                  onClick={() => handleCart(cartActions.DECREASE_QUANTITY, id)}
                >
                  <i className="	fas fa-cart-arrow-down"></i>
                </button>
                <p className="text-white font-medium">{cartCount} in cart</p>
                <button
                  onClick={() => handleCart(cartActions.INCREASE_QUANTITY, id)}
                  className="btn text-white"
                >
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleCart(cartActions.ADD_ITEM, id)}
                className="btn text-blue-400 border rounded-md p-2 flex
            items-baseline justify-center space-x-2 "
              >
                <i className="fa fa-shopping-bag "></i>
                <p> Add to Cart</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
}
