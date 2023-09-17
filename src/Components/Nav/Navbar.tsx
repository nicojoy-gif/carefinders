import React, { useState } from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };
  return (
    <div>
      <div className="bg-white x-50">
        {" "}
        {/* Set the background color to white */}
        <nav className="flex px-4 border-b  shadow-lg bg-white items-center  w-full">
          <div className="container mx-auto flex content-center items-center ">
            <div className="flex justify-between content-center w-full">
              <div className="text-2xl font-bold md:py-0 content-center items-center justify-center py-4 text-textColor">
                CareFinder
              </div>
              <div className="lg:hidden flex items-center content-center">
                <button
                  className="navbar-burger flex items-center justify-center my-auto content-center text-blue-600 py-auto"
                  onClick={toggleNav}
                >
                  <svg
                    className="block h-6 w-6 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul
              className={`md:px-2 ml-auto md:flex md:space-x-2 bg-white  absolute md:relative font-semibold top-full left-0 h-full right-0 ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              <li className="bg-white">
                <NavLink
                  to="/"
                  className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
                >
                  <span>Home</span>
                </NavLink>
              </li>

              <li className="bg-white">
                <NavLink
                  to="/addHospital"
                  className="flex md:inline-flex p-4 items-center hover:bg-gray-50 whitespace-nowrap"
                >
                  <span>Add Hospital</span>
                </NavLink>
              </li>

              <li className="bg-white flex items-center">
                <NavLink
                  to="/login"
                  className="flex  lg:bg-blue-600 lg:text-white rounded py-3 my-auto px-4 lg:py-1 items-center hover:bg-blue-900 text-black"
                >
                  <button>Login</button>
                </NavLink>
              </li>
              <li className="bg-white flex items-center">
                <NavLink
                  to="/sign"
                  className="flex px-4 lg:py-1 items-center lg:bg-blue-600 lg:text-white   rounded py-3 hover:bg-blue-900  text-black"
                >
                  <button>Signup</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
