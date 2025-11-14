// React
import {useEffect, useState} from "react";
// React Router
import {Link} from "react-router";
// React Icons
import {IoSearch} from "react-icons/io5";
import {PiShoppingCartLight} from "react-icons/pi";
import {FaBars} from "react-icons/fa6";
// Styles
import "./header.css";
// Images
import Logo from "../../../public/favicon.svg";
import NavBar from "./NavBar";
// Main Component
const Header = () => {
  // Toggle Bar
  const [toggleBar, setToggleBar] = useState(false);
  // Toogle Trigger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 576) {
        setToggleBar(false);
      }
    };
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, [setToggleBar]);
  // Return JSX
  return (
    <header className="header bg-primary py-3.5">
      <div className="ccontainer">
        {/* Bar Menu */}
        <FaBars
          className="sm:hidden text-white text-[32px]"
          onClick={() => setToggleBar((prev) => !prev)}
        />
        {/* Header Logo */}
        <Link to="/">
          <div className="header-logo">
            <img src={Logo} alt="IMAGE" className="boject-contain" />
          </div>
        </Link>
        {/* Header Search */}
        <div className="header-search bg-white flex-between h-full rounded-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search Book Store"
            className="w-[90%] outline-0 pl-1.5 caret-primary placeholder:text-sm"
          />
          <div className="header-search-icon h-full w-[50px] bg-secondary/85 hover:bg-blue-700 flex-center cursor-pointer">
            <IoSearch className="text-white h-full text-3xl" />
          </div>
        </div>
        {/* Header Navbar */}
        <NavBar toggleBar={toggleBar} setToggleBar={setToggleBar} />
        {/* Header Cart */}
        <Link className="header-cart-warpper" to="/cart">
          <div className="header-cart flex items-baseline-last gap-0.5 text-white select-none">
            <PiShoppingCartLight className="text-4xl font-bold" />
            <span className="relative font-jetbrains font-bold">
              Cart
              <span className="absolute text-lg w-7 h-7 font-bold -top-5 left-1/2 -translate-x-1/2 rounded-full flex-center text-green-300">
                10
              </span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
