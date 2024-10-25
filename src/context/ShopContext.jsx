import { createContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 40;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Add prop validation
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // children is required and should be valid React nodes
};

export default ShopContextProvider;
