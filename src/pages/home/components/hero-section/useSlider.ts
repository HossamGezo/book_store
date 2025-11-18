// React Library Imports
import {useCallback, useEffect, useRef, useState} from "react";
// Custom Hook
export const useSlider = (slideCount: number) => {
  // ---------------------------------------------- State Mangement
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const intervalRef = useRef<number | null>(null);
  // ---------------------------------------------- autoPlay Logic
  const runAutoPlay = useCallback(() => {
    if (direction === "forward") {
      if (currentSlide === slideCount - 1) {
        setDirection("backward");
        setCurrentSlide((prev) => prev - 1);
      } else {
        setCurrentSlide((prev) => prev + 1);
      }
    } else {
      if (currentSlide === 0) {
        setDirection("forward");
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  }, [direction, currentSlide, slideCount]);
  // Restart Autoplay to avoid conflict between user click and autoplay interval
  const restartAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(runAutoPlay, 30000);
  }, [runAutoPlay]);
  // ---------------------------------------------- Lifecycle Management
  useEffect(() => {
    restartAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [restartAutoPlay]);
  // ---------------------------------------------- Slider Manual Controls
  // Handle Previous Function
  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    restartAutoPlay();
  };
  // Handle Next Function
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slideCount - 1));
    restartAutoPlay();
  };
  // ---------------------------------------------- Hook Output
  return {
    currentSlide,
    handlePrevious,
    handleNext,
  };
};
