// React Icons
import {AiOutlineClose} from "react-icons/ai";
// Components
import Button from "../buttons/Button";
// Type
type PopupType = {
  children: React.ReactNode;
  setTogglePopup: React.Dispatch<React.SetStateAction<boolean>>;
};
// Main Component
const Popup = ({children, setTogglePopup}: PopupType) => {
  // Handle Click "Close Button"
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    console.log(element);
    const isOverlay = element.classList.contains("popup-overlay");
    if (isOverlay) setTogglePopup((prev) => !prev);
  };
  // Return JSX
  return (
    <div
      className="popup-overlay flex-center absolute inset-0 bg-black/75 z-50 overflow-hidden"
      onClick={handleClick}
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
          onClick={() => setTogglePopup((prev) => !prev)}
        >
          <AiOutlineClose className="text-3xl" />
        </Button>
      </div>
    </div>
  );
};
export default Popup;
