import React, { useEffect } from "react";
import { useCart, ACTIONS } from "../Context/ShoppingCartContext";
import { formatCurr } from "../Functions/formatCurr";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const { state, dispatch } = useCart();

  const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);

  const handleIncreaseQuantity = () => {
    // Dispatch the INCREASE_QUANTITY action with the product id
    dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: item.id });
  };

  const handleDecreaseQuantity = () => {
    // Dispatch the DECREASE_QUANTITY action with the product id
    dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: item.id });
  };

  const handleRemoveFromCart = () => {
    // Dispatch the REMOVE_FROM_CART action with the product id
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item.id });
  };

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src={item.img} alt="product-image" className="rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-xs text-gray-700">{item.category}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100 justify-center align-middle">
            <button
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-red-50"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <p
              className="h-8 w-8 flex items-center justify-center border bg-white text-center outline-none"
              type="number"
            >
              {item.quantity}
            </p>
            <button
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-red-500 hover:text-red-50"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{formatCurr(item.price)}</p>
            <button
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={handleRemoveFromCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
