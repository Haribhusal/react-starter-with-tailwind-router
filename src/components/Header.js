import React, { useState } from "react";
import DropDownMenu from "./DropdownMenu";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="bg-gray-800 text-white ">
      <div className="text-sm sm:px-10 sm:hidden md:block">
        <div className="topbar flex justify-between align-center items-center">
          <nav>
            <ul className="flex">
              <li>
                <a href="#" className="p-2 flex items-center gap-2 ">
                  {" "}
                  <i className="las la-map text-xl"></i> Adwait Marg, Kathmandu,
                  Nepal
                </a>
              </li>
              <li>
                <a href="#" className="p-2 flex items-center gap-2">
                  {" "}
                  <i className="las la-envelope text-xl"></i> info@uacktm.com
                </a>
              </li>
              <li>
                <a href="#" className="p-2 flex items-center gap-2">
                  {" "}
                  <i className="las la-phone text-xl"></i> +977-01-5319152,
                  +977-01-4225935, +977-9851060545
                </a>
              </li>
            </ul>
          </nav>
          <nav className="flex gap-5">
            <ul className="flex">
              <li>
                <a href="#" className="p-2 block">
                  <i className="lab la-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="p-2 block">
                  <i className="lab la-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="p-2 block">
                  <i className="lab la-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="p-2 block">
                  <i className="lab la-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="flex border-l-2 pl-4">
              <li>
                <a href="#" className="p-2 block">
                  Login{" "}
                </a>
              </li>
              <li>
                <a href="#" className="p-2 block">
                  Create account{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <nav className="bg-white border-gray-200 px-2 sm:px-3 md:px-10 py-2.5">
        <div className="flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center text-black">
            <img
              src="./uac-logo.png"
              className="h-6 mr-3 sm:h-8 md:h-12"
              alt="Flowbite Logo"
            />
            <h1 className="text-bold text-2xl">University Academic Center</h1>
          </a>
          <div className="flex md:order-2 items-center">
            <button
              type="button"
              className=" bg-orange-100 text-orange-700 hover:bg-orange-800 hover:text-white transition-all  font-medium rounded-lg text-sm md:px-5 sm:px-3 py-2.5 text-center mr-3 md:mr-3 "
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800  font-medium rounded-lg text-sm md:px-10 sm:px-3 py-2.5 text-center mr-3 md:mr-0 "
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-gray-100 bg-orange-100 text-orange-700 focus:rounded"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <i
                className={
                  activeMenu ? "las la-bars text-xl" : "las la-times text-xl"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              activeMenu
                ? "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                : "items-center justify-between visible w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-cta"
          >
            <ul className="flex flex-col mt-4 items-center border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li className="sm:w-full md:w-auto">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="sm:w-full md:w-auto">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 "
                >
                  Jobs
                </a>
              </li>
              <li className="sm:w-full md:w-auto">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0"
                >
                  Products
                </a>
              </li>
              <li className="sm:w-full md:w-auto">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0"
                >
                  Contact
                </a>
              </li>
              <li className="sm:w-full md:w-auto">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0"
                >
                  Useful Links
                </a>
              </li>
              <DropDownMenu />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
