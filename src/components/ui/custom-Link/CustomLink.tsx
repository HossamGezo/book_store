// React Router
import {NavLink} from "react-router";
// Main Component
const CustomLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `h-full w-full flex items-center pl-5 transition-colors duration-300 border-r border-blue-600 
        ${
          isActive ? "bg-blue-700 text-white" : "bg-secondary hover:bg-blue-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
