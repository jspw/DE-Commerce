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

  function saveCart(cart) {
    localStorage.setItem(constants.CART, cart);
  }

  function getCart() {
    const cart = localStorage.getItem(constants.CART);

    return cart || null;
  }

  function clearCart() {
    localStorage.removeItem(constants.CART);
  }
}
