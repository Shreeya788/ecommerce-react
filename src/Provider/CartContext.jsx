// CartContext.js
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Add PropTypes validation for children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to consume the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
