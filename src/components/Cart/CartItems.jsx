import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./CartItem";

export default function CartItems() {
  const { cart } = useContext(ShopContext);
  return (
    cart && (
      <div className="flex flex-col space-y-2">
        {cart.products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    )
  );
}
