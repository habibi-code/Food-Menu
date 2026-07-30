import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [cartItems, setItemCarts] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setItemCarts((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setItemCarts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setItemCarts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = { food_list, addToCart, removeFromCart, cartItems };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
