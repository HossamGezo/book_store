// React
import {createContext, useContext, useState} from "react";
// Types
// ----- State Type
type togglePopupStatePorps = {
  isOpen: boolean;
  bookId: number | null;
};
// ----- Context Type
type PopupContextProps = {
  togglePopup: togglePopupStatePorps;
  setTogglePopup: React.Dispatch<React.SetStateAction<togglePopupStatePorps>>;
};
// ----- Main Component Type
type PopupContextProviderProps = {
  children: React.ReactNode;
};
// Context
const PopupContext = createContext<PopupContextProps | null>(null);
// Main Component
const PopupContextProvider = ({children}: PopupContextProviderProps) => {
  const [togglePopup, setTogglePopup] = useState<togglePopupStatePorps>({
    isOpen: false,
    bookId: null,
  });
  // Return JSX
  return (
    <PopupContext.Provider value={{togglePopup, setTogglePopup}}>
      {children}
    </PopupContext.Provider>
  );
};
// usePopupContext Hook
// eslint-disable-next-line react-refresh/only-export-components
export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) throw Error("usePopupContext must be used within a PopupContextProvider")
  return context;
};
export default PopupContextProvider;
