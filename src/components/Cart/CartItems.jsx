import * as localStore from "../../utility/services/localStorage/localStore";
import CartItem from "./CartItem";

export default function CartItems() {
  const cart = localStore.getCart();
  return (
    <div className="flex flex-col space-y-2">
      {cart.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
}
