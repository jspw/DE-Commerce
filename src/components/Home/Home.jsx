import Categories from "../Category/Categories";
import Products from "../Products/Products";

export default function Home() {
  return (
    <div className="container m-auto ">
      <Categories />
      <Products />
    </div>
  );
}
