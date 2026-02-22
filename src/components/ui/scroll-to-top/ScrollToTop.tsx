// Libraries
import { useEffect } from "react";
import { useLocation } from "react-router";

// Main Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};
export default ScrollToTop;
