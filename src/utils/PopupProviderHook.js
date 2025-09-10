'use client';

import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

const PopupProviderHook = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popUpPrice, setPopUpPrice] = useState(null);

  const openPopup = (price) => {
    setPopUpPrice(price);
    setIsOpen(true)
  };
  const closePopup = () => {
    setPopUpPrice(null);
    setIsOpen(false)
  }; // fixed naming

  return (
    <PopupContext.Provider value={{ popUpPrice, isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);

export default PopupProviderHook;
