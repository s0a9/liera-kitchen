import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { formatCurr } from "../Functions/formatCurr";
import { useCart, ACTIONS } from "../Context/ShoppingCartContext";

const StoreItem = ({ id, name, img, price, category }) => {
  const { state, dispatch } = useCart();

  // Find the item in the cart based on its id
  const cartItem = state.cart.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    // Dispatch the ADD_TO_CART action with the product details
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { id, name, img, price, category },
    });
  };

  const handleIncreaseQuantity = () => {
    // Dispatch the INCREASE_QUANTITY action with the product id
    dispatch({ type: ACTIONS.INCREASE_QUANTITY, payload: id });
  };

  const handleDecreaseQuantity = () => {
    // Dispatch the DECREASE_QUANTITY action with the product id
    dispatch({ type: ACTIONS.DECREASE_QUANTITY, payload: id });
  };

  const handleRemoveFromCart = () => {
    // Dispatch the REMOVE_FROM_CART action with the product id
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: id });
  };

  return (
    <Card className="h-full">
      <Card.Img
        variant="top"
        src={img}
        style={{ objectFit: "cover", height: "400px", width: "100%" }}
        className="p-4"
      />
      <Card.Body className="flex flex-col px-4 pb-2">
        <Card.Title className="flex justify-between align-baseline mb-8">
          <span className="text-2xl">{name}</span>
          <span className="ms-4 text-gray-700">{formatCurr(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="w-full bg-red-400 text-white py-1.5 rounded-sm"
              onClick={handleAddToCart}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <button
                  className="w-full bg-red-400 text-white py-1 px-2 text-lg font-bold rounded-sm"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
                <div className="text-xl">{quantity}</div>
                <button
                  className="w-full bg-red-400 text-white py-1 px-2.5 rounded-sm text-lg font-bold"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
              </div>
              <button
                className="w-full bg-red-500 text-white py-1 px-2.5 rounded-sm text-lg font-bold max-w-min mb-4"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

StoreItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
