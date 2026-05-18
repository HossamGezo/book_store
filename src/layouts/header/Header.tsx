// Libraries
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

// Custom Hooks
import { useCartContext } from "@/context/CartContext";

// React Icons
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";

// Custom Components
import NavBar from "./NavBar";

// Styles
import "./header.css";

// Main Component
const Header = () => {
  // Custom Hooks
  const { state } = useCartContext();

  // Toggle Bar
  const [toggleBar, setToggleBar] = useState(false);

  // Toogle Trigger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 576) {
        setToggleBar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setToggleBar]);

  // Return JSX
  return (
    <header className="header bg-primary py-3.5 z-50">
      <div className="custom-container">
        {/* Bar Menu */}
        <button
          type="button"
          aria-label="Open Menu"
          onClick={() => setToggleBar((prev) => !prev)}
          className="focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm transition-all p-1"
        >
          <FaBars className="sm:hidden text-white text-[32px] cursor-pointer" />
        </button>
        {/* Header Logo */}
        <Link
          to="/"
          className="focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden rounded-sm transition-all p-1"
        >
          <div className="header-logo select-none">
            <img
              src="/favicon.svg"
              alt="Book Store Logo"
              width="40"
              height="40"
              className="object-contain"
              draggable="false"
            />
          </div>
        </Link>
        {/* Header Search */}
        <div className="header-search bg-white flex items-center justify-between h-full rounded-sm overflow-hidden focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 transition-all">
          <input
            id="search-input"
            aria-label="Search Book Store"
            type="text"
            placeholder="Search Book Store"
            className="w-[90%] outline-0 pl-1.5 caret-primary placeholder:text-sm placeholder:select-none placeholder:text-gray-500"
          />
          <button
            type="button"
            aria-label="Search"
            className="header-search-icon h-full w-[50px] bg-blue-800 hover:bg-blue-900 flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden transition-all"
          >
            <IoSearch className="text-white h-full text-3xl" />
          </button>
        </div>
        {/* Header Navbar */}
        <NavBar toggleBar={toggleBar} setToggleBar={setToggleBar} />
        {/* Header Cart */}
        <NavLink
          className={({ isActive }) =>
            `header-cart-wrapper border-2 rounded-sm px-1 py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden transition-all
            ${isActive ? "border-blue-300" : "border-transparent"}`
          }
          to="/cart"
          aria-label={`View shopping cart with ${state?.length} items`}
        >
          <div className="header-cart flex items-baseline gap-0.5 text-white select-none">
            <PiShoppingCartLight
              className="text-4xl font-bold"
              aria-hidden="true"
            />
            <span className="relative font-jetbrains font-bold">
              Cart
              <span className="absolute text-lg w-7 h-7 font-bold -top-5 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center text-green-200">
                {state?.length}
              </span>
            </span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
