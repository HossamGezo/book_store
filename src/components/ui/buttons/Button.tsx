// Libraries
import clsx from "clsx";
// Styles
import "./button.css";
// Types
type ButtonTypeOption = "button" | "submit" | "reset";
type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "circle";
type ButtonRadius = "none" | "sm" | "md" | "lg" | "full";
// Main Type
type ButtonType = {
  children: React.ReactNode;
  type?: ButtonTypeOption;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
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
}: ButtonType) => {
  // Base Style
  const baseStyles =
    "font-medium cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 select-none flex-center";
  // Variant Style
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/80 disabled:hover:bg-primary active:bg-primary",
    secondary:
      "bg-green-600 text-white hover:bg-green-600/80 disabled:hover:bg-primary active:bg-green-600",
    danger:
      "bg-red-600 text-white hover:bg-red-600/85 disabled:hover:bg-primary active:bg-red-600",
  };
  // Size Style
  const sizeStyles = {
    sm: "px-3 py-1.5 h-[40px] text-sm font-bold w-[100px]",
    md: "px-4 py-2 h-[50px] text-base font-bold w-[120px]",
    lg: "px-6 py-3 h-[60px] text-lg font-bold w-[150px]",
    circle: "w-[50px] h-[50px]",
  };
  // Radius Styles
  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };
  // Final ClassName
  const finalClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    radiusStyles[radius],
    className
  );
  return (
    <button type={type} className={finalClassName} {...props}>
      {children}
    </button>
  );
};
export default Button;
