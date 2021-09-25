import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import CartAction from "../Products/Product/CartAction";
import Rating from "../Rating/Rating";
import Spinner from "../Spinner/Spinner";

export default function ProductDetail() {
  const { title } = useParams();

  const { products, handleCart } = useContext(ShopContext);

  const [product, setProduct] = useState({});

  useEffect(
    function () {
      products &&
        setProduct(products.filter((prod) => prod.title === title)[0]);
    },
    [products, title]
  );

  return product ? (
    <div>
      <div className=" font-medium  flex flex-row space-x-2 mt-2 mb-2">
        <Link to="/" className="text-black hover:text-blue-600">
          Home
        </Link>
        <p className="text-blue-300">/</p>
        <Link
          to={`/category/${product.category}`}
          className="text-gray-800 hover:text-blue-600"
        >
          {product.category}
        </Link>
        <p className="text-blue-300">/</p>
        <p className="text-gray-400">{title}</p>
      </div>
      <div className=" grid grid-flow-col  grid-cols-2 sm:grid-cols-1 sm:grid-flow-row xs:grid-flow-row xs:grid-cols-1 bg-white">
        <div className="col-span-1  p-4 flex flex-col justify-center sm:w-full">
          <LazyLoadImage
            effect="blur"
            className="container m-auto w-1/2 rounded"
            src={product.image}
          />
        </div>

        <div className="col-span-1 p-4 border flex flex-col  space-y-4">
          <p className="text-3xl">{product.title}</p>
          <Link to={`/category/${product.category}`}>
            <p className="text-yellow-300">{product.category}</p>{" "}
          </Link>
          <div>
            <Rating rating={product.rating} /> ({product.reviews} reviews)
          </div>
          <div className="flex flex-row space-x-2">
            <p className="text-gray-400">Price : </p>
            <p className="font-medium"> ${product.price}</p>
          </div>
          <div className="ml-5 mr-5">
            <CartAction
              handleCart={handleCart}
              productId={product.id}
              productQuantity={product.cartCount}
            />
          </div>
          <div>
            <p className="text-gray-400">Product Overview : </p>
            <p className="break-words">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
