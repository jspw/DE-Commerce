import { useContext, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import logo from "../../assets/images/logo.jpeg";
import CartModal from "../Cart/CartModal";
import * as localStore from "../../utility/services/localStorage/localStore";

export default function NavBar() {
  const cart = localStore.getCart();

  console.log(cart);

  const [showMobileOption, setShowMobileOption] = useState(false);

  const [showCartModal, setShowCartModal] = useState(false);

  function toggleHamburgerMenu() {
    setShowMobileOption((pre) => !pre);
  }

  function handleCartModal() {
    setShowCartModal((pre) => !pre);
  }

  window.onclick = function (event) {
    if (event.target.id === "modal") {
      handleCartModal();
    }
  };

  return (
    <div className="container m-auto bg-blue-200 p-2 flex flex-row justify-between space-x-4  items-center shadow top-0 z-50 sticky xs:flex-col xs:items-start xs:space-x-0 xs:space-y-2 xs:pb-8">
      <div>
        <button
          onClick={toggleHamburgerMenu}
          className="btn p-1 rounded mt-3 hidden text-white font-bold text-xl  hover:text-black xs:flex"
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="p-2 xs:self-center xs:p-0 xs:top-0 xs:fixed">
        <Link to="/">
          <LazyLoadImage
            src={logo}
            effect="blur"
            className="rounded-full w-16 cursor-pointer shadow"
          />
        </Link>
      </div>
      <div
        className={`container flex flex-row  ${
          showMobileOption ? "xs:flex" : "xs:hidden"
        }`}
      >
        <input
          className=" rounded-tl rounded-bl   border-grey-300 border-l-2 border-t-2 border-b-2 w-full	 p-2 focus:border-blue-400 outline-none xs:mt-7 "
          placeholder="Search for a Product"
        />
        <button className="btn pl-3 pr-3 bg-blue-400 rounded-tr rounded-br xs:mt-7">
          <i className="fa fa-search text-xl text-white"></i>
        </button>
      </div>

      <div className="xs:fixed xs:top-0 xs:right-0 xs:p-2">
        <button onClick={handleCartModal} className="relative flex mt-2  ">
          <svg className="flex-1 w-8 h-8 fill-current">
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
          </svg>
          {cart && (
            <span className="absolute right-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm font-semibold  leading-tight text-center">
              {cart.products.length}
            </span>
          )}
        </button>
      </div>

      {/* <button
        className={
          showMobileOption
            ? "btn font-medium border-white border-2 text-black rounded p-2  whitespace-nowrap"
            : "hidden"
        }
      >
        Sign In
      </button> */}

      <CartModal
        showCartModal={showCartModal}
        handleCartModal={handleCartModal}
      />
    </div>
  );
}
