import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import Menu from "./svg/bars-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";

import "../styles/header.css";
const Nav = ({ toggle }) => {
  const contextData = useContext(ShopContext);
  return (
    <nav className="w-full flex justify-around top-0 md:mb-20 border-b-2 items-center fixed flex-wrap bg-white text-gray-800">
      {
        <Link
          className="lg:hidden md:inline-flex  ml-auto text-gray-700 items-center"
          to="/cart"
        >
          <p className=" inline-flex ">
            <img
              className="w-7 z-10 animate-pulse"
              src={CartIcon}
              alt="style"
            />
            <sub className=" rounded-full text-gray-800 pl-2 -mt-2 ">
              {contextData.value}
            </sub>
          </p>
        </Link>
      }
      <Link
        to="/"
        className="text-white inline-flex items-center p-3 hover:bg-gray-200 rounded-lg lg:hidden"
        onClick={() => {
          toggle();
        }}
      >
        <img className="w-6" src={Menu} alt="style" />
      </Link>
      <div
        className="w-full float-left mr-3 lg:inline-flex lg:flex-grow lg:w-auto hidden"
        id="navtoggler"
      >
        <div className="flex flex-col lg:inline-flex lg:flex-row ml-auto">
          <Link
            className="lg:inline-flex lg:w-auto text-lg  text-gray-700 px-6 hover:text-green-600 p-2 hover:opacity-80 hover:shadow-xl hover:bg-white"
            to="/"
          >
            HOME
          </Link>

          <Link
            className="lg:inline-flex lg:w-auto  text-gray-700 px-10 hover:opacity-80"
            to="/cart"
          >
            <span className=" inline-flex ">
              <img
                className="w-7 z-10 animate-pulse"
                src={CartIcon}
                alt="style"
              />
              <sub className=" rounded-full text-gray-800 ">
                {contextData.value}
              </sub>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
