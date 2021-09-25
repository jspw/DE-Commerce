import productFormate from "./product/productFormate";
import * as localStore from "./services/localStorage/localStore";

export default function formattingData(prods) {
  const products = [];
  const categories = [];
  prods.forEach(function (product) {
    if (!categories.includes(product.category))
      categories.push(product.category);

    products.push(productFormate(product));
  });
  localStore.saveCategories(categories);
  localStore.saveProducts(products);
  localStore.setUserOld(true);
  return { products, categories };
}
