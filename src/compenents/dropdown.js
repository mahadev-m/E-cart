import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-5 text-left mt-20 items-center lg:hidden bg-gray-100"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        className="lg:inline-flex lg:w-auto text-gray-600 p-2 hover:text-white hover:bg-gray-600"
        to="/"
      >
        HOME
      </Link>
    </div>
  );
};
export default Dropdown;
