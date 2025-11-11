// React
import {useEffect} from "react";
// React Router
import {useLocation} from "react-router";
// Main Component
const ScrollToTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};
export default ScrollToTop;
