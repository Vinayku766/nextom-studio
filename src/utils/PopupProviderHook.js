'use client';

import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

const PopupProviderHook = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);   // fixed naming
  const closePopup = () => setIsOpen(false); // fixed naming

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);

export default PopupProviderHook;
