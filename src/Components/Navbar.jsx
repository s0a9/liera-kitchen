import React from "react";
import Logo from "../Assets/brand-logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  console.log(1000);

  return (
    <nav className="pt-0 flex justify-around items-center lg:pt-2">
      <div>
        <img src={Logo} alt="logo" width={60} />
      </div>

      <div className="hidden md:block">
        <ul className={"flex  text-lg space-x-3"}>
          <li>
            <NavLink to="/home" className="px-3 py-1 rounded-full">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Order" className="px-3 py-1 rounded-full">
              Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reservation" className=" px-3 py-1 rounded-full">
              Book Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="px-3 py-1 rounded-full">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={`${menu ? "inline" : "hidden"} md:hidden relative`}>
        <div
          className={
            "absolute gap-1 top-10 -left-10 flex flex-col justify-center items-center align-middle text-lg space-x-3"
          }
        >
          <NavLink to="/home" className="px-3 py-1 rounded-full">
            Home
          </NavLink>
          <NavLink to="/Order" className="px-3 py-1 rounded-full">
            Order
          </NavLink>
          <NavLink to="/Reservation" className="px-3 py-1 rounded-full">
            Reservation
          </NavLink>
          <NavLink to="/contact" className="px-3 py-1 rounded-full">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="flex align-middle justify-center gap-3">
        <button
          className={`${
            menu ? "relative right-4 top-0.5 space-x-0.5" : "space-y-1"
          } md:hidden`}
          onClick={() => toggleMenu()}
        >
          <div
            className={`${
              menu ? "-rotate-45 absolute top-3" : ""
            } w-6 h-[2px] bg-gray-700 rounded-full`}
          ></div>
          <div
            className={`${
              menu ? "hidden" : ""
            } w-6 h-[2px] bg-gray-700 rounded-full`}
          ></div>

          <div
            className={`${
              menu ? "rotate-45 absolute left-[-2px] top-3" : ""
            } w-6 h-[2px] bg-gray-700 rounded-full`}
          ></div>
        </button>

        <div className="relative">
          <CiShoppingCart className="text-3xl" />
          <p className="absolute text-white flex justify-center align-middle bg-red-400 rounded-[50%] px-1.5 top-[-0.4rem] right-[-0.3rem]">
            9
          </p>
        </div>
        <CiUser className="text-3xl" />
      </div>
    </nav>
  );
};

export default Navbar;
