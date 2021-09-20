import constants from "./constants";

export default function LocalStorage() {
  function saveProducts(products) {
    localStorage.setItem(constants.PRODUCTS, products);
  }

  function getProducts() {
    const products = localStorage.getItem(constants.PRODUCTS);

    return products || null;
  }

  function clearProducts() {
    localStorage.removeItem(constants.PRODUCTS);
  }

  function saveCategories(categories) {
    localStorage.setItem(constants.CATEGORIES, categories);
  }

  function getCategories() {
    const categories = localStorage.getItem(constants.CATEGORIES);

    return categories || null;
  }

  function clearCategories() {
    localStorage.removeItem(constants.CATEGORIES);
  }
}
