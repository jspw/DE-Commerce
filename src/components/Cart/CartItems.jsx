import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./CartItem";
import shoppingIcon from "../../assets/images/shopping.png";
import * as localStore from "../../utility/services/localStorage/localStore";
import { CartContext } from "../../Context/CartContext";

export default function CartItems() {
  const cart = localStore.getCart();
  return cart ? (
    <div className="flex flex-col space-y-2">
      {Object.values(cart.products).map((product) => {
        console.log();
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  ) : (
    <div className="container flex flex-col space-y-2 items-center justify-center  ">
      <img src={shoppingIcon} alt="Icon" className="rounded-full h-48 w-48" />
      <p className="text-gray-500 p-2">Your cart is empty. Start shopping</p>
    </div>
  );
}
