import { useContext } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import StarRatings from "react-star-ratings";
import { cartActions } from "../../../utility/cart/constants";
import { ShopContext } from "../../../Context/ShopContext";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import CartAction from "./CartAction";

export default function Product({ product }) {
  const { handleCart } = useContext(ShopContext);
  return (
    <LazyLoadComponent>
      <div className="m-2 p-2 col-span-1 cursor-pointer flex flex-col justify-between  hover:shadow-md rounded-lg bg-white ">
        <Link
          to={`/product/${product.title}`}
          className="space-y-4 p-2  flex flex-col justify-between"
        >
          <div className="flex justify-center">
            <LazyLoadImage
              src={product.image}
              effect="blur"
              className="w-48 h-48 transition duration-700 ease-in-out transform rounded-lg hover:w-50  hover:scale-110"
            />
          </div>
          <div>
            <p className="text-center font-serif text-gray-600">
              {product.title}
            </p>
          </div>
        </Link>
        <div className="space-y-4">
          <div className="space-y-4 flex flex-col items-center">
            <Rating rating={product.rating} />
            <p className="font-semibold text-lg text-blue-500">
              ${product.price}
            </p>
          </div>
          <CartAction
            handleCart={handleCart}
            productId={product.id}
            productQuantity={product.cartCount}
          />
        </div>
      </div>
    </LazyLoadComponent>
  );
}
