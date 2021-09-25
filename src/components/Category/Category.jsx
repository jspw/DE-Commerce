import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import { ShopContext } from "../../Context/ShopContext";

export default function Category() {
  const { category } = useParams();
  const { products: allProducts } = useContext(ShopContext);
  const [products, setProducts] = useState(null);

  useEffect(
    function () {
      allProducts &&
        setProducts(
          allProducts.filter((product) => product.category === category)
        );
    },
    [allProducts]
  );

  return (
    <div>
      <div className=" font-medium  flex flex-row space-x-2 mt-2 mb-2">
        <Link to="/" className="text-black hover:text-blue-600">
          Home
        </Link>
        <p className="text-blue-300">/</p>
        <p className="text-gray-400">{category}</p>
      </div>
      <Products products={products} />
    </div>
  );
}
