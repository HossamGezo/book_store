// React Icons
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
// Components
import Slide from "./Slide";
import {useEffect, useRef, useState} from "react";
// Slider Data
const slides = [
  {
    gradient:
      "bg-[linear-gradient(180deg,#165DFB_0%,#2BD8D8_50%,#A6FFFB_100%)]",
    image: "../../../../../public/images/silder/book2.png",
    title: "The Books For Everyone",
    desc: "You can read at the bookstore or at home",
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,#165DFB_0%,#FF7ED1_50%,#FFD9E8_100%)]",
    image: "../../../../../public/images/silder/book1.png",
    title: "Book Store",
    desc: "It's not just reading. it's living the adventure",
  },
  {
    gradient:
      "bg-[linear-gradient(180deg,#165DFB_0%,#8C6EFF_50%,#DCC9FF_100%)]",
    image: "../../../../../public/images/silder/book3.png",
    title: "Check Out The New Titles",
    desc: "We send you the book you want at home",
  },
];
// Main Component
const HeroSection = () => {
  // ...
  const interval = useRef<number | null>(null);
  // Slider State
  const [slide, setSlide] = useState(1);
  const handlePrevious = () => {
    const current = Math.max(slide - 1, 0);
    setSlide(current);
  };
  const handleNext = () => {
    const current = Math.min(slide + 1, slides.length - 1);
    setSlide(current);
  };
  // Slider State Test
  const translateX = `-translate-x-[${slide * 100}%]`;
  // Timer
  useEffect(() => {
    interval.current = setInterval(() => {
      setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => {
      if (interval.current !== null) {
        clearInterval(interval.current);
      }
    };
  }, [setSlide]);
  // Return JSX
  return (
    <div className="slider relative -mt-px">
      {/* Slider Wrapper */}
      <div className="slider-wrapper overflow-hidden flex">
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} translateX={translateX} />
        ))}
      </div>
      {/* Slider Buttons */}
      <div className="slider-buttons absolute w-full  text-white text-8xl top-1/2 -translate-y-[calc(50%-50px)] *:bg-gray-300/35 lg:-translate-y-1/2 *:border *:rounded-full *:p-4 *:scale-50 *:cursor-pointer *:transition-all *:duration-500 *:hover:text-[#333] *:active:scale-[0.59]">
        <GrPrevious
          className={`absolute left-0 ${slide === 0 ? "hidden" : ""}`}
          onClick={handlePrevious}
        />
        <GrNext
          className={`absolute right-0 ${
            slide === slides.length - 1 ? "hidden" : ""
          }`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default HeroSection;
