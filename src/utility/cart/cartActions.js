// import * as localStore from "../services/localStorage/localStore";
// import { cartFormatter, cartProductFormate } from "./cartFormatter";

// export function addProduct(product) {
//   const cart = localStore.getCart();
//   let updatedCartProducts = [];
//   if (cart) {
//     updatedCartProducts = [...cart.products, cartProductFormate(product)];
//   } else
//     updatedCartProducts = [...updatedCartProducts, cartProductFormate(product)];

//   localStore.saveCart(cartFormate(updatedCartProducts));
//   return cartFormate(updatedCartProducts);
// }

// export function updateProductQuantity(product) {
//   const cart = localStore.getCart();
//   const updatedCartProducts = cart.products.map((prod) => {
//     if (prod.id === product.id) {
//       return cartProductFormate(product);
//     }
//     return cartProductFormate(prod);
//   });

//   localStore.saveCart(cartFormate(updatedCartProducts));
//   return cartFormate(updatedCartProducts);
// }

// export function removeProduct(id) {
//   const cart = localStore.getCart();
//   const updatedCartProducts = cart.products.filter(
//     (product) => product.id !== id
//   );
//   localStore.saveCart(cartFormate(updatedCartProducts));
//   return cartFormate(updatedCartProducts);
// }
