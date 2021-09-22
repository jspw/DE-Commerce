import { useContext } from "react";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import defaultProductImage from "../../../assets/images/default_product.png";
import { ProductsActionContext } from "../../../Context/ProductsContext";
import Rating from "../../Rating/Rating";
export default function Product({
  product: { id, title, description, price, image, cartCount, rating, reviews },
}) {
  const { setProducts } = useContext(ProductsActionContext);

  function handleCartAdd() {
    console.log("i'm here!");
    setProducts((products) => {
      const pd = products.map((product) => {
        if (product.id === id) {
          console.log(product.cartCount);
          product.cartCount++;
          console.log(product.cartCount);
        }
        return product;
      });
      console.log(pd);
      return pd;
    });
  }

  return (
    <LazyLoadComponent>
      <div className="m-2 p-2 col-span-1 border cursor-pointer  space-y-4 hover:shadow-lg flex flex-col justify-between">
        <div className="space-y-4 p-2  flex flex-col justify-between">
          <div className="flex justify-center">
            <LazyLoadImage
              src={image}
              effect="blur"
              className="w-48 h-48 transition duration-500 ease-in-out transform hover:w-50  hover:scale-110"
            />
          </div>
          <div>
            <p className="text-center font-serif text-gray-600">{title}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-row justify-between space-x-2">
            <p className="font-semibold text-blue-500">${price}</p>
            <Rating rating={rating} />
          </div>
          <div className="flex flex-col  justify-center ">
            {cartCount > 0 ? (
              <div className="flex flex-row justify-between border rounded-md p-2 bg-blue-400 items-baseline">
                <button className="btn text-white ">
                  <i className="	fas fa-cart-arrow-down"></i>
                </button>
                <p className="text-white font-medium">{cartCount} in cart</p>
                <button onClick={handleCartAdd} className="btn text-white">
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            ) : (
              <button
                onClick={handleCartAdd}
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
