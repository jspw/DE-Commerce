import { useContext } from "react";
import MyLoader from "../Loader/MyLoader";
import Product from "./Product/Product";
import { ShopContext } from "../../Context/shopContext";

export default function Products() {
  const { products } = useContext(ShopContext);
  return (
    <div className="space-y-4 mt-8 ">
      <div className="bg-white sticky top-8 z-20 space-y-4">
        <p className="text-2xl font-semibold  font-serif ">Products</p>
        <hr />
      </div>

      {products ? (
        products.length === 0 ? (
          <div className="text-yellow-300 text-2xl text-center">
            No Products Available
          </div>
        ) : (
          <div className="grid grid-flow-row xs:grid-cols-1 sm : grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )
      ) : (
        <MyLoader />
      )}
    </div>
  );
}
