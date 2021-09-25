import productFormate from "./product/productFormate";
import * as localStore from "./services/localStorage/localStore";

export default function formattingData(prods) {
  const products = [];
  const categories = []; // should i use a map here ? its searching complexity is 1
  prods.forEach(function (product) {
    // take a array of categories and then using `newCat =  [...set()] will be a good idea?
    // complexity of set ?
    if (!categories.includes(product.category))
      categories.push(product.category); // so inserting categories will cost me about n*n ?`

    products.push(productFormate(product));
  });

  localStore.saveCategories(categories);
  localStore.saveProducts(products);
  localStore.setUserOld(true);
  return {products,categories};
}
