import Products from "../Products/Products";
import { localProducts } from "../../utility/store";

export default function Home() {
  const products = localProducts;
  return (
    <div className="container m-auto">
      <Products products={products} />
    </div>
  );
}
