import * as localStore from "../services/localStorage/localStore";
import { cartActionTypes } from "./cartActionTypes";
import { cartFormatter } from "./cartFormatter";
import productFormatter from "../product/productFormatter";

export default function handleCart(actionType, product) {
  const cart = localStore.getCart();

  let cartProducts = {};

  switch (actionType) {
    case cartActionTypes.ADD_ITEM: {
      if (cart)
        cartProducts = {
          ...cart.products,
          [product.id]: productFormatter(product),
        };
      else
        cartProducts = {
          [product.id]: productFormatter(product),
        };

      break;
    }
    case cartActionTypes.INCREASE_QUANTITY: {
      cart.products[product.id].quantity++;

      cartProducts = {
        ...cart.products,
      };

      break;
    }
    case cartActionTypes.DECREASE_QUANTITY: {
      if (cart.products[product.id].quantity === 1) {
        delete cart.products[product.id];
      } else {
        cart.products[product.id].quantity--;
      }
      cartProducts = {
        ...cart.products,
      };

      break;
    }

    case cartActionTypes.REMOVE_ITEM: {
      delete cart.products[product.id];
      cartProducts = {
        ...cart.products,
      };
      break;
    }

    case cartActionTypes.CLEAR_CART: {
      cartProducts = {};
      break;
    }
  }

  localStore.saveCart(cartFormatter(cartProducts));
}
