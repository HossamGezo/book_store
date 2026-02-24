// Libraries
import { cn } from "@/utils/cn";

// Styles
import "./button.css";

// Types
type ButtonOptionType = "button" | "submit" | "reset";
type ButtonVariantType = "primary" | "secondary" | "danger";
type ButtonSizeType = "xs" | "sm" | "md" | "lg" | "circle";
type ButtonRadiusType = "none" | "sm" | "md" | "lg" | "full";

// Main Type
type ButtonProps = {
  children: React.ReactNode;
  type?: ButtonOptionType;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  radius?: ButtonRadiusType;
} & React.ComponentProps<"button">;

// Main Component
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  radius = "md",
  className,
  ...props
}: ButtonProps) => {
  // Base Style
  const baseStyles =
    "font-medium cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 select-none flex items-center justify-center";

  // Variant Style
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/80 disabled:hover:bg-primary active:bg-primary",
    secondary:
      "bg-green-600 text-white hover:bg-green-600/80 disabled:hover:bg-green-600 active:bg-green-600",
    danger:
      "bg-red-600 text-white hover:bg-red-600/85 disabled:hover:bg-red-600 active:bg-red-600",
  };

  // Size Style
  const sizeStyles = {
    xs: "px-1.5 h-[25px]",
    sm: "px-3 py-1.5 h-[40px] text-sm font-bold w-fit",
    md: "px-4 py-2 h-[50px] text-base font-bold w-fit",
    lg: "px-6 py-3 h-[60px] text-lg font-bold w-fit",
    circle: "w-[50px] h-[50px]",
  };

  // Radius Styles
  const radiusStyles = {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Final ClassName
  const finalClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    radiusStyles[radius],
    className,
  );

  // Return JSX
  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  );
};
export default Button;
