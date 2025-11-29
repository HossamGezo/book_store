// React Icons
import {AiOutlineClose} from "react-icons/ai";
// Components
import CustomLink from "@/components/ui/custom-Link/CustomLink";
// Types
type NavBarProps = {
  toggleBar: boolean;
  setToggleBar: React.Dispatch<React.SetStateAction<boolean>>;
};
// Main Component
const NavBar = ({toggleBar, setToggleBar}: NavBarProps) => {
  return (
    <nav
      className={`header-nav z-50 ${
        toggleBar
          ? "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
          : "[clip-path:polygon(0_0,0_0,0_100%,0_100%)]"
      }`}
    >
      {toggleBar && (
        <AiOutlineClose
          onClick={() => setToggleBar(false)}
          className="absolute top-5 right-5 text-4xl text-white"
        />
      )}
      <ul className="header-nav-list select-none">
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/authors">Authors</CustomLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/register">Register</CustomLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <CustomLink to="/login">Login</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
