import { useContext } from "react";
import MyLoader from "../Loader/MyLoader";
import Product from "./Product/Product";
import { ShopContext } from "../../Context/ShopContext";

export default function Products() {
  const { products } = useContext(ShopContext);
  return (
    <div className="space-y-2 mt-8 ">
      <div className="text-3xl  font-mono font-semibold text-center">
        Products
      </div>
      <div className="text-center font-thin text-lg">
        Check & Get Your Desired Product !
      </div>

      {products ? (
        products.length === 0 ? (
          <div className="text-yellow-300 text-2xl text-center">
            No Products Available
          </div>
        ) : (
          <div className="grid grid-flow-row grid-cols-5 xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 ">
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
