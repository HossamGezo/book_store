// React Icons
import {AiOutlineClose} from "react-icons/ai";
// Components
import Button from "../buttons/Button";
import {useEffect} from "react";
// Type
type PopupType = {
  children: React.ReactNode;
  togglePopup: {
    isOpen: boolean;
    id: number;
  };
  setTogglePopup: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      id: number;
    }>
  >;
};
// Main Component
const Popup = ({children, togglePopup, setTogglePopup}: PopupType) => {
  // Disable Scroll On Open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  // Handle Click on Overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.target        => Any thing you clicked it
    // e.currentTarget => The Element that hold click event : in this case it means "popup-verlay"
    if (e.target === e.currentTarget) {
      setTogglePopup({...togglePopup, isOpen: false});
    }
  };
  // Close on "Escape" key
  useEffect(() => {
    // Handle Escape Button Function
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTogglePopup({...togglePopup, isOpen: false});
    };
    // Keydown Event
    window.addEventListener("keydown", handleEsc);
    // Clean Up
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  // Return JSX
  return (
    <div
      className="popup-overlay fixed inset-0 flex-center bg-black/75 z-50 overflow-hidden"
      onClick={handleOverlayClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="popup-container relative max-md:w-[95%] w-[75%] h-[60vh] bg-white rounded-lg"
      >
        <div className="popup-content relative w-full h-full">{children}</div>
        <Button
          size="circle"
          radius="full"
          variant="danger"
          className="close-btn flex-center absolute top-3 right-3"
          onClick={() => setTogglePopup({...togglePopup, isOpen: false})}
        >
          <AiOutlineClose className="text-3xl" />
        </Button>
      </div>
    </div>
  );
};
export default Popup;
