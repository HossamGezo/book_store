/* eslint-disable react-refresh/only-export-components */
// Libraries
import { createContext, useContext, useState } from "react";

// Types
// ----- State Type
type togglePopupStateProps = {
  isOpen: boolean;
  bookId: number | null;
};
// ----- Context Type
type PopupContextProps = {
  togglePopup: togglePopupStateProps;
  setTogglePopup: React.Dispatch<React.SetStateAction<togglePopupStateProps>>;
};
// ----- Main Component Type
type PopupContextProviderProps = {
  children: React.ReactNode;
};

// Context
const PopupContext = createContext<PopupContextProps | null>(null);

// Main Component
const PopupContextProvider = ({ children }: PopupContextProviderProps) => {
  const [togglePopup, setTogglePopup] = useState<togglePopupStateProps>({
    isOpen: false,
    bookId: null,
  });
  // Return JSX
  return (
    <PopupContext.Provider value={{ togglePopup, setTogglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
// usePopupContext Hook
export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context)
    throw Error("usePopupContext must be used within a PopupContextProvider");
  return context;
};
export default PopupContextProvider;
