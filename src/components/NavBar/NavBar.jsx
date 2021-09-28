import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../Cart/CartModal";
import { ModalContext } from "../../Context/ModalContext";
import * as localStore from "../../utility/services/localStorage/localStore";
import { StateContext } from "../../Context/StateContext";

export default function NavBar() {
  const cart = localStore.getCart();
  const { setStateChanged } = useContext(StateContext);
  const [showMobileOption, setShowMobileOption] = useState(false);
  const { setShowModal } = useContext(ModalContext);

  function toggleHamburgerMenu() {
    setShowMobileOption(!showMobileOption);
  }
  useEffect(function () {
    console.log(setStateChanged);
    window.onclick = function (event) {
      if (event.target.id === "modal") {
        setShowModal(false);
      }
    };
  });

  return (
    <div className=" bg-blue-300 p-2 top-0 z-50 sticky shadow">
      <div className=" flex flex-row justify-between space-x-2 p-2 items-center   xs:flex-col xs:space-x-0 xs:space-y-2 xs:items-baseline ">
        <button
          onClick={toggleHamburgerMenu}
          className="btn  rounded  hidden text-blue-900 font-bold text-xl  hover:text-black xs:flex"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="p-0 xs:self-center  xs:p-1 xs:top-0 xs:fixed">
          <Link to="/">
            <p className="font-bold text-blue-900 text-xl">
              Dynamic E-Commerce
            </p>
          </Link>
        </div>

        <div className="flex flex-row space-x-2 xs:space-x-0">
          <div className="xs:fixed xs:top-0 xs:right-0 xs:p-2">
            <button
              onClick={() => setShowModal(true)}
              className="relative flex mt-2  "
            >
              <svg className="flex-1 w-9 h-9 fill-current text-blue-900">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              {cart && (
                <span className="absolute right-0 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 text-white font-mono text-base font-semibold  leading-tight text-center">
                  {cart.totalProducts}
                </span>
              )}
            </button>
          </div>

          <Link to="/profile">
            <button
              className={`btn font-semibold border-white  text-blue-900 rounded p-2  xs:p-0 whitespace-nowrap ${
                showMobileOption ? "" : "xs:hidden"
              }`}
            >
              Profile
            </button>
          </Link>
        </div>

        <CartModal />
      </div>
    </div>
  );
}
