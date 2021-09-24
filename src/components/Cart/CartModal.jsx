import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import CartItems from "./CartItems";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function CartModal({ showCartModal, handleCartModal }) {
  const { cart } = useContext(ShopContext);
  const [isPromoValid, setPromoValid] = useState(false);
  return (
    <div
      id="modal"
      className={`${
        showCartModal ? " translate-x-0" : "translate-x-full"
      } fixed z-50 right-0 top-0 h-full w-full bg-gray-500 bg-opacity-30  animate-fadeIn transform duration-500`}
    >
      <div className="fixed right-0 bg-white  h-full overflow-scroll duration-500 animate-slideIn flex flex-col justify-between  sm:w-full md:w-2/5 lg:w-4/12 xl:w-1/4 ">
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
                  onClick={handleCartModal}
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
            <div className="bg-gray-200 flex flex-row">
              <div>
                <input
                  placeholder="Promo Code"
                  className="outline-none appearance-none mb-3 ml-1 mr-1 mt-2 rounded p-2 max-w-min"
                />
              </div>
              <div>
                <button
                  onClick={() => setPromoValid(true)}
                  className="btn bg-blue-700 text-white rounded m3-2 ml-1 mr-1 mt-2 p-2"
                >
                  Go
                </button>
              </div>
            </div>

            <button className="flex flex-row justify-between btn bg-blue-400 font-semibold text-white p-2">
              <p> Order Now</p>
              <p className="font-bold">
                $
                {isPromoValid
                  ? Math.round(cart.payableAmount) - 100
                  : Math.round(cart.payableAmount)}
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
