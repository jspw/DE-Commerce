import Products from "../Products/Products";
import { localProducts } from "../../utility/store";
import { useEffect } from "react";
import { getProducts } from "../../api/products";

export default function Home() {
  function foo(products) {
    const prods = [];
    const categories = []; // should i use a map here ? its searching complexity is 1
    products.forEach(function (product) {
      // take a array of categories and then using `newCat =  [...set()] will be a good idea?

      // complexity of set ?

      if (!categories.includes(product.category))
        categories.push(product.category);

      // so inserting categories will cost me about n*n ?

      prods.push({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        cartCount: 0,
        rating: product.rating.rate,
        reviews: product.rating.count,
      });
    });
    console.log(categories);
    console.log(prods);
  }

  useEffect(function () {
    getProducts()
      .then(function (response) {
        // console.log(response.data);
        foo(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  const products = localProducts;
  return (
    <div className="container m-auto">
      <Products products={products} />
    </div>
  );
}
