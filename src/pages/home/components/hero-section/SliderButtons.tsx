// React Icons
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
// SliderBtnsProps
type SliderBtnsProps = {
  slideCount: number;
  currentSlide: number;
  handlePrevious: () => void;
  handleNext: () => void;
};
// Main Component
const SliderButtons = ({
  slideCount,
  currentSlide,
  handlePrevious,
  handleNext,
}: SliderBtnsProps) => {
  // Return JSX
  return (
    <div className="slider-buttons absolute w-full text-white text-8xl top-1/2 -translate-y-[calc(50%-50px)] *:bg-gray-300/35 lg:-translate-y-1/2 *:border *:rounded-full *:p-4 *:scale-50 *:transition-all *:duration-500">
      <GrPrevious
        className={`absolute left-0 ${
          currentSlide === 0
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-[#333] active:scale-[0.59] cursor-pointer"
        }`}
        onClick={handlePrevious}
      />
      <GrNext
        className={`absolute right-0 ${
          currentSlide === slideCount - 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-[#333] active:scale-[0.59] cursor-pointer"
        }`}
        onClick={handleNext}
      />
    </div>
  );
};
export default SliderButtons;
