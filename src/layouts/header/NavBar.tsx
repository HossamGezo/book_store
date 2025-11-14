// React Router
import {NavLink} from "react-router";
// React Icons
import {AiOutlineClose} from "react-icons/ai";
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
      <ul className="header-nav-list">
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/authors">Authors</NavLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li onClick={() => setToggleBar(false)}>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
