import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Products from "../Products/Products";
import Categories from "./Category/Categories";

export default function Home() {
  const { products } = useContext(ShopContext);

  return (
    <div>
      <Categories />
      <Products products={products} />
    </div>
  );
}
