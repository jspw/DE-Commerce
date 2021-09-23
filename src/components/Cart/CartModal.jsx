import CartItems from "./CartItems";

export default function CartModal({ showCartModal, handleCartModal }) {
  return (
    <div
      id="modal"
      className={`${
        showCartModal ? "" : "hidden"
      } fixed z-50 right-0 top-0 h-full w-full bg-gray-500 bg-opacity-25  animate-fadeIn`}
    >
      <div className="fixed right-0 bg-white w-1/3 h-full overflow-scroll duration-500 animate-slideIn flex flex-col justify-between">
        <div>
          <div className="flex flex-row justify-between items-baseline sticky top-0 bg-white z-40">
            <h1 className="p-4">My Cart</h1>
            <button
              onClick={handleCartModal}
              className="btn p-4 text-xl text-gray-400"
            >
              x
            </button>
          </div>
          <hr />
          <CartItems />
        </div>

        <div className="flex flex-col sticky bottom-0">
          <button className="btn bg-blue-400 p-2">Order Now</button>
        </div>
      </div>
    </div>
  );
}
