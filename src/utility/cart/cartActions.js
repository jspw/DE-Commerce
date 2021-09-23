import * as localStore from "../services/localStorage/localStore";
import { cartFormate, cartProductFormate } from "./cartFormate";

export function addProductToCart(product) {
  const cart = localStore.getCart();
  if (cart === null) {
    const updatedCart = cartFormate([cartProductFormate(product)]);
    localStore.saveCart(updatedCart);
  } else {
    let productAlreadyExists = false;
    const updatedCartProducts = cart.products.map((prod) => {
      if (prod.id === product.id) {
        productAlreadyExists = true;
        return cartProductFormate(product);
      }
      return cartProductFormate(prod);
    });
    if (productAlreadyExists)
      localStore.saveCart(cartFormate(updatedCartProducts));
    else
      localStore.saveCart(
        cartFormate([...cart.products, cartProductFormate(product)])
      );
  }
}

export function deleteProductFromCart(id) {
  const cart = localStore.getCart();
  const updatedCartProducts = cart.products.filter(
    (product) => product.id != id
  );
  console.log(updatedCartProducts);
  localStore.saveCart(cartFormate(updatedCartProducts));
}
