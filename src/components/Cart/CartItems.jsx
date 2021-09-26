import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./CartItem";
import shoppingIcon from "../../assets/images/shopping.png";

export default function CartItems() {
  const { cart } = useContext(ShopContext);
  return cart ? (
    <div className="flex flex-col space-y-2">
      {cart.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="container flex flex-col space-y-2 items-center justify-center  ">
      <img src={shoppingIcon} alt="Icon" className="rounded-full h-48 w-48" />
      <p className="text-gray-500 p-2">Your cart is empty. Start shopping</p>
    </div>
  );
}
