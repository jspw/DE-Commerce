import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import CartItems from "./CartItems";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import * as localStore from "../../utility/services/localStorage/localStore";
import { ModalContext } from "../../Context/ModalContext";

export default function CartModal() {
  const { cart } = useContext(ShopContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const [isPromoValid, setPromoValid] = useState(false);

  function saveOrder() {
    const orderCheckout = {
      totalItems: cart.products.length,
      subTotal: isPromoValid
        ? Math.round(cart.payableAmount) - 100
        : Math.round(cart.payableAmount),
      discount: 100,
    };
    localStore.saveOrder(orderCheckout);
    setShowModal(false);
  }

  return (
    <div
      id="modal"
      className={`${
        showModal ? " translate-x-0" : "translate-x-full"
      } fixed z-50 right-0 top-0 h-full w-full bg-gray-500 bg-opacity-30  animate-fadeIn transform duration-500`}
    >
      <div className="fixed right-0 bg-white  h-full overflow-y-auto duration-500 animate-slideIn flex flex-col justify-between  sm:w-full md:w-2/5 lg:w-4/12 xl:w-1/4 ">
        <div>
          <div className="sticky top-0 bg-gray-400 z-40 ">
            <div className="flex flex-row justify-between items-center ">
              <div className="p-4 flex flex-row items-center space-x-2">
                <LocalMallIcon />
                <div className="text-lg font-semibold">
                  {cart ? cart.products.length : 0} items
                </div>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-close p-4 text-xl text-gray-400"
                >
                  <CancelIcon htmlColor="white" />
                </button>
              </div>
            </div>
            <hr />
          </div>
          <CartItems />
        </div>

        {cart && (
          <div className="flex flex-col sticky bottom-0">
            <div className="bg-gray-200 ">
              <p className="text-green-500 mb-3 ml-1 mr-1 mt-2 text-center">
                Do you have a Promo Code ?
              </p>
              <div className="flex flex-row justify-center">
                <input
                  disabled={isPromoValid}
                  placeholder="Promo Code"
                  className="outline-none appearance-none mb-3 ml-1 mr-1 mt-2 rounded p-2 max-w-min focus:border-blue-400"
                />
                <div>
                  <button
                    onClick={() => setPromoValid(true)}
                    className="btn bg-blue-700 text-white rounded m3-2 ml-1 mr-1 mt-2 p-2"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>

            <Link
              onClick={saveOrder}
              to={{
                pathname: "/checkout",
                order: {
                  totalItems: cart.products.length,
                  subTotal: isPromoValid
                    ? Math.round(cart.payableAmount) - 100
                    : Math.round(cart.payableAmount),
                  discount: 100,
                },
              }}
              className="flex flex-row justify-between btn bg-blue-400 font-semibold text-white p-3"
            >
              <p> Checkout</p>
              <p className="font-bold">
                $
                {isPromoValid
                  ? Math.round(cart.payableAmount) - 100
                  : Math.round(cart.payableAmount)}
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
