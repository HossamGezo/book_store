// Styles
import "./hero-section.css";
// Components
import Slide from "./Slide";
import SliderButtons from "./SliderButtons";
import {useSlider} from "./useSlider";
// Slides Data
import {slides} from "../../data/slides";
// Main Component
const HeroSection = () => {
  const {currentSlide, handleNext, handlePrevious} = useSlider(slides.length);
  // Return JSX
  return (
    <div className="slider relative overflow-hidden -mt-px">
      {/* Slider Wrapper */}
      <div
        className="slider-wrapper flex transition-transform duration-500 ease-in-out"
        style={{transform: `translateX(-${currentSlide * 100}%)`}}
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
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
