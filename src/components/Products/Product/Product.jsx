import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Rating from "../../Rating/Rating";
import CartAction from "./CartAction";
import defaultImage from "../../../assets/images/default_product.png";

export default function Product(props) {
  return (
    <LazyLoadComponent>
      <div className="m-2 p-2 col-span-1  flex flex-col justify-between  hover:shadow-md rounded-lg bg-white ">
        <Link
          to={`/product/${props.product.title}`}
          className="space-y-4 p-2  flex flex-col justify-between cursor-pointer"
        >
          <div className="flex justify-center">
            <LazyLoadImage
              src={props.product.image}
              effect="blur"
              visibleByDefault={defaultImage}
              className="w-48 h-48 transition duration-700 ease-in-out transform rounded-lg hover:w-50  hover:scale-110"
            />
          </div>
          <div>
            <p className="text-center font-serif text-gray-600">
              {props.product.title}
            </p>
          </div>
        </Link>
        <div className="space-y-4">
          <div className="space-y-4 flex flex-col items-center">
            <Rating rating={props.product.rating.rate} />
            <p className="font-semibold text-lg text-blue-500">
              ${props.product.price}
            </p>
          </div>
          <CartAction product={props.product} />
        </div>
      </div>
    </LazyLoadComponent>
  );
}
