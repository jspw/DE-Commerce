import OrderPreview from "../components/Checkout/OrderPreview";
import Address from "../components/Checkout/Address";

export default function Checkout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center  sm:flex-col xs:flex-col">
        <OrderPreview />
        <Address />
      </div>
    </div>
  );
}
