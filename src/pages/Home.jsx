import Products from "../components/Products/Products";
import Categories from "../components/Category/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import * as localStore from "../utility/services/localStorage/localStore";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

export default function Home() {
  useContext(StateContext);
  const products = localStore.getProducts();

  return (
    <div>
      <SearchBar />
      <Categories />
      <Products products={products} />
    </div>
  );
}
