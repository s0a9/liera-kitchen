// ShoppingCart.js

import React, { useEffect, useState } from "react";
import CartItem from "./CartItem"; // Create a CartItem component to represent individual items
import { useCart, ACTIONS } from "../Context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { formatCurr } from "../Functions/formatCurr";

const ShoppingCart = () => {
  const { state, dispatch } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total based on the items in the cart
    const newTotal = state.cart.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    );

    // Set the total
    setTotal(newTotal);
  }, [state.cart]);

  return (
    <div className="min-h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {state.cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              {total === 0 ? "0" : formatCurr(total)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {formatCurr(total + 4.99)}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-red-400 py-1.5 font-medium text-white hover:bg-red-500">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
