import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import MyLoader from "../Loader/MyLoader";
import Product from "./Product/Product";
import * as localStore from "../../utility/services/localStorage/localStore";
import {
  ProductsActionContext,
  ProductsContext,
} from "../../Context/ProductsContext";
import productFormate from "../../utility/productFormate";

export default function Products() {
  const { products } = useContext(ProductsContext);

  const { setProducts } = useContext(ProductsActionContext);

  function formattingData(products) {
    const prods = [];
    const categories = []; // should i use a map here ? its searching complexity is 1
    products.forEach(function (product) {
      // take a array of categories and then using `newCat =  [...set()] will be a good idea?
      // complexity of set ?
      if (!categories.includes(product.category))
        categories.push(product.category); // so inserting categories will cost me about n*n ?`

      prods.push(productFormate(product));
    });

    localStore.saveCategories(categories);
    localStore.saveProducts(prods);
    localStore.setUserOld(true);
    setProducts(prods);
  }

  useEffect(function () {
    if (!localStore.isUserOld())
      getProducts()
        .then(function (response) {
          formattingData(response.data);
        })
        .catch(function (error) {
          console.log(error.response);
        });
  }, []);

  return (
    <div className="space-y-4 mt-4">
      <p className="text-2xl font-semibold font-serif"> Products </p>
      <hr />
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
