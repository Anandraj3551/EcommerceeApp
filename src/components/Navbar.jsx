import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className={`${visible ? "hidden" : "block"}`}>
        <div className="flex items-center justify-between px-4 sm:px-10 font-medium pt-5">
          {" "}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu}
            className="w-8 cursor-pointer sm:hidden"
            alt=""
          />
          <img src={assets.logo} className="w-36" alt="" />
          {/* Desktop Search Bar */}
          <div className="hidden sm:flex flex-1 mx-10">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <div className="absolute right-0 top-0 h-full px-3 flex items-center bg-gray-300 rounded-r-lg">
                <img
                  src={assets.search}
                  className="w-5 h-5 cursor-pointer"
                  alt="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-5">
            {/* Mobile Search Toggle */}
            <img
              onClick={() => setSearchVisible(!searchVisible)}
              src={assets.search}
              className="w-8 cursor-pointer sm:hidden"
              alt="search"
            />

            <Link to="/cart" className="relative">
              <img src={assets.wishlist} className="w-8 min-w-5" alt="" />
              <p className="absolute right-[-8px] top-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                0
              </p>
            </Link>

            <Link to="/cart" className="relative">
              <img src={assets.cart} className="w-8 min-w-5" alt="" />
              <p className="absolute right-[-8px] top-[7px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                0
              </p>
            </Link>

            <div className="group relative">
              <img
                className="w-8 min-w-5 cursor-pointer"
                src={assets.profile}
                alt=""
              />
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={`sm:hidden absolute w-full bg-white transition-all duration-300 ease-in-out ${
            searchVisible ? "max-h-16 border-t" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="p-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <div className="absolute right-0 top-0 h-full px-5 flex items-center bg-gray-300 rounded-r-lg">
                <img
                  src={assets.search}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  alt="search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Sidebar menu for small screen*/}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transform transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-5 border-b"
          >
            <img className="h-10" src={assets.close} alt="" />
            <p className="text-lg">Back</p>
          </div>

          <div className="flex flex-col">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 px-5 border-b text-gray-700 hover:bg-gray-50"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
