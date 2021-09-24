import CartItems from "./CartItems";

export default function CartModal({ showCartModal, handleCartModal }) {
  return (
    <div
      id="modal"
      className={`${
        showCartModal ? " translate-x-0" : "translate-x-full"
      } fixed z-50 right-0 top-0 h-full w-full bg-gray-500 bg-opacity-30  animate-fadeIn transform duration-500`}
    >
      <div className="fixed right-0 bg-white  h-full overflow-scroll duration-500 animate-slideIn flex flex-col justify-between  sm:w-full md:w-2/5 lg:w-4/12 xl:w-1/4 ">
        <div>
          <div className="sticky top-0 bg-white z-40">
            <div className="flex flex-row justify-between items-baseline ">
              <h1 className="p-4">My Cart</h1>
              <button
                onClick={handleCartModal}
                className="btn p-4 text-xl text-gray-400"
              >
                x
              </button>
            </div>
            <hr />
          </div>
          <CartItems />
        </div>

        <div className="flex flex-col sticky bottom-0">
          <button className="btn bg-blue-400 rounded font-semibold text-white ml-2 m-r-2 mt-2 p-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
