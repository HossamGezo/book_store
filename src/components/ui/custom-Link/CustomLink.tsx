// Libraries
import { cn } from "@/utils/cn";
import { NavLink } from "react-router";

// Types
type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
} & React.ComponentProps<"a">;

// Main Component
const CustomLink = ({ to, children, className, ...rest }: CustomLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "h-full w-full flex items-center pl-5 transition-colors duration-300 border-r border-blue-600 sm:text-[12px] md:text-[16px]",
          isActive
            ? "bg-blue-700 text-white"
            : "bg-secondary hover:bg-blue-400",
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
