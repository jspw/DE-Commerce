export default function CartModal({ showCartModal, handleCartModal }) {
  return (
    <div
      id="modal"
      className={`${
        showCartModal ? "" : "hidden"
      } fixed z-50 right-0 top-0 h-full w-full overflow-auto bg-gray-500 bg-opacity-25  animate-fadeIn`}
    >
      <div className="fixed right-0 bg-white w-80 h-full duration-500 animate-slideIn">
        <div className="flex flex-row justify-between items-baseline">
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
    </div>
  );
}
