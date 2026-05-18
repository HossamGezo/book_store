// Libraries
import { cn } from "@/utils/cn";
import { NavLink, type NavLinkProps } from "react-router";

// Types
type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
} & NavLinkProps;

// Main Component
const CustomLink = ({ to, children, className, ...rest }: CustomLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "h-full w-full flex items-center pl-5 transition-all duration-300 border-r border-blue-600 sm:text-[12px] md:text-[16px] text-white focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:outline-hidden",
          isActive
            ? "bg-blue-800 text-white"
            : "bg-primary hover:bg-blue-800 hover:text-white",
          className,
        )
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
