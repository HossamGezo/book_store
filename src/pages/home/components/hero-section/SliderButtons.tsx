// React Icons
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

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
  return (
    <div className="absolute w-full text-white text-8xl top-1/2 -translate-y-[calc(50%-50px)] *:bg-gray-300/35 lg:-translate-y-1/2 *:border *:rounded-full *:p-4 *:scale-50 *:transition-all *:duration-500">
      <button
        type="button"
        aria-label="Previous slide"
        disabled={currentSlide === 0}
        onClick={handlePrevious}
        className={`absolute left-0 ${
          currentSlide === 0
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-[#333] active:scale-[0.59] cursor-pointer"
        }`}
      >
        <GrPrevious size={75} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        disabled={currentSlide === slideCount - 1}
        onClick={handleNext}
        className={`absolute right-0 ${
          currentSlide === slideCount - 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:text-[#333] active:scale-[0.59] cursor-pointer"
        }`}
      >
        <GrNext size={75} />
      </button>
    </div>
  );
};
export default SliderButtons;
