// React
import {useRef, useState} from "react";
// Import clsx Library
import clsx from "clsx";
// Import Styles
import "./products-slider.css";
// React Icons
import {FaRightToBracket} from "react-icons/fa6";
import useProductsSlider from "./useProductsSlider";
// Products Slider Props
type ProductsSliderProps = {
  children: React.ReactNode;
  arrayLength: number;
};
// Main Component
const ProductsSlider = ({children, arrayLength}: ProductsSliderProps) => {
  const [slide, setSlide] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const {availableScroll, everyClick} = useProductsSlider({
    arrayLength,
    viewportRef,
  });
  // - - - - - - - - - - Slider Controllers - - - - - - - - - -
  const nextSlide = () => {
    setSlide((prev) => {
      return Math.max(prev - everyClick, -availableScroll);
    });
  };
  const previousSlide = () => {
    setSlide((prev) => {
      return Math.min(prev + everyClick, 0);
    });
  };
  // Return JSX
  return (
    <div className="test">
      <div className="products-slider relative ccontainer" ref={viewportRef}>
        <div className="products-slider-wrapper py-5 overflow-x-auto lg:overflow-hidden">
          <div
            className={clsx(
              "products-slider-content flex gap-5 w-max transition-transform duration-500"
            )}
            style={{transform: `translateX(${slide}px)`}}
          >
            {children}
          </div>
          <div className="products-slider-btns absolute w-full top-1/2 left-1/2 -translate-1/2 flex items-center">
            <FaRightToBracket
              onClick={previousSlide}
              className={clsx(
                Math.round(slide) >= 0
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer opacity-100"
              )}
            />
            <FaRightToBracket
              onClick={nextSlide}
              className={clsx(
                slide <= -availableScroll
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer opacity-100"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
