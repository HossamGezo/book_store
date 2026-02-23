// Styles
import "./hero-section.css";

// Components
import Slide from "./Slide";
import SliderButtons from "./SliderButtons";
import { useSlider } from "./useSlider";

// Slides Data
import { slides } from "../../data/slides";

// Main Component
const HeroSection = () => {
  const { currentSlide, handleNext, handlePrevious } = useSlider(slides.length);

  // Return JSX
  return (
    <div className="relative overflow-hidden -mt-px">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} {...slide} />
        ))}
      </div>
      {/* Slider Buttons */}
      <SliderButtons
        slideCount={slides.length}
        currentSlide={currentSlide}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default HeroSection;
