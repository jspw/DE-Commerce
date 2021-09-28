import { useContext, useState } from "react";
import CartItems from "./CartItems";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import * as localStore from "../../utility/services/localStorage/localStore";
import { ModalContext } from "../../Context/ModalContext";
import handleCart from "../../utility/cart/cartActions";
import { cartActionTypes } from "../../utility/cart/cartActionTypes";
import { StateContext } from "../../Context/StateContext";

export default function CartModal() {
  const cart = localStore.getCart();
  const { showModal, setShowModal } = useContext(ModalContext);
  const [isPromoValid, setPromoValid] = useState(false);
  const { setStateChanged } = useContext(StateContext);

  function saveOrder() {
    const orderCheckout = {
      totalItems: cart.totalQuantity.length,
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
          <div className="sticky top-0 bg-gray-600 z-40 ">
            <div className="flex flex-row justify-between items-center ">
              <div className="p-4 flex flex-row items-center space-x-2">
                <LocalMallIcon htmlColor="white" />
                <div className="text-lg font-semibold text-white">
                  {cart ? cart.totalProducts : 0} items
                </div>
              </div>
              <div>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-close p-4 text-xl "
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
              <p className="text-green-500 mt-1 text-center">
                {isPromoValid
                  ? "Promo Code Used as"
                  : " Do you have a Promo Code ?"}
              </p>
              <div className="flex flex-row justify-center items-baseline">
                <input
                  disabled={isPromoValid}
                  placeholder="Promo Code"
                  className="outline-none appearance-none rounded m-1  p-1 max-w-min focus:border-blue-400"
                />
                <div>
                  <button
                    onClick={() => setPromoValid(true)}
                    className="btn bg-blue-700 text-white rounded p-1"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between m-2 p-1">
              <p className="text-yellow-900 font-medium">Payable Amount : </p>
              <p className="font-bold text-yellow-900">
                $
                {isPromoValid
                  ? Math.round(cart.payableAmount) - 100
                  : Math.round(cart.payableAmount)}
              </p>
            </div>

            <hr />

            <div className="m-2 flex flex-row justify-between">
              <button
                onClick={() => {
                  handleCart(cartActionTypes.CLEAR_CART);
                  setStateChanged((pre) => !pre);
                }}
                className=" text-center font-serif text-base btn bg-red-400  text-white p-2 rounded"
              >
                Clear Cart
              </button>

              <Link
                onClick={saveOrder}
                to={{
                  pathname: "/checkout",
                  order: {
                    totalItems: cart.totalQuantity,
                    subTotal: isPromoValid
                      ? Math.round(cart.payableAmount) - 100
                      : Math.round(cart.payableAmount),
                    discount: 100,
                  },
                }}
                className="flex flex-row justify-between btn bg-blue-400 font-semibold text-white p-3"
              >
                <p> Checkout</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
