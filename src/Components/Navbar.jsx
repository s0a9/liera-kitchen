import React, { useContext } from "react";
import Logo from "../Assets/brand-logo.png";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useState } from "react";
import { useCart } from "../Context/ShoppingCartContext";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const { state } = useCart();

  const totalQuantity = state.cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="pt-0 flex justify-around items-center lg:pt-2">
      <div>
        <img src={Logo} alt="logo" width={150} />
      </div>

      <div className="hidden md:block">
        <ul className={"flex text-lg space-x-3"}>
          <li>
            <NavLink to="/" className="px-3 py-1 rounded-full">
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

      <div className={`${menu ? "inline" : "hidden"} md:hidden relative z-50`}>
        <div
          className={
            "absolute top-10 flex flex-col justify-center align-middle text-lg space-y-3 bg-white px-10 py-2 rounded transition-all"
          }
        >
          <NavLink to="/" className="px-3 py-1 rounded-full">
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

        <Link to="Cart" className="relative">
          <CiShoppingCart className="text-3xl" />
          <p className="absolute text-white flex justify-center align-middle bg-red-400 rounded-full px-1.5 top-[-0.4rem] right-[-0.3rem]">
            {totalQuantity}
          </p>
        </Link>
        <button>
          <CiUser className="text-3xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
