// Libraries
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

// Components
import Button from "../buttons/Button";
import { usePopupContext } from "@/context/PopupContext";
import ProductPopup from "./ProductPopup";

// Main Component
const Popup = () => {
  // Use Popup Context Custom Hook
  const { togglePopup, setTogglePopup } = usePopupContext();
  const { bookId } = togglePopup;

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
      setTogglePopup({ ...togglePopup, isOpen: false });
    }
  };

  // Close on "Escape" key
  useEffect(() => {
    // Handle Escape Button Function
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape")
        setTogglePopup((prev) => ({ ...prev, isOpen: false }));
    };
    // Keydown Event
    window.addEventListener("keydown", handleEsc);
    // Clean Up
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setTogglePopup]);

  // Return JSX
  return (
    <div
      className="fixed -inset-40 flex items-center justify-center bg-black/75 z-50 overflow-hidden"
      onClick={handleOverlayClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-lg max-md:max-h-[90%] max-md:max-w-full max-md:overflow-y-scroll"
      >
        <div className="relative w-full h-full">
          <ProductPopup bookId={bookId} />
        </div>
        <Button
          type="button"
          size="circle"
          radius="full"
          variant="danger"
          aria-label="Close popup"
          className="flex items-center justify-center absolute top-3 right-3"
          onClick={() => setTogglePopup({ ...togglePopup, isOpen: false })}
        >
          <AiOutlineClose className="text-3xl" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};
export default Popup;
